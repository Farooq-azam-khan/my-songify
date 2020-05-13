import json 

from flask_login import login_user 

from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User

from app import db

def create_101_songs():
    
    user = User(firstname='f1', lastname='ln', email='f@l.com')
    user.set_password('test')
    db.session.add(user)
    db.session.commit()

    for i in range(101):
        song = Song(name=f'song-{i}', user=user.pk, mp3_file="http://google.com")
        db.session.add(song)
    db.session.commit()



def test_get_api_v1_songs(app):
    create_101_songs()

    client = app.test_client()
    with client: 
        resp = client.get('/api/v1/songs')
        data = resp.get_json()
        assert resp.status_code == 200
        assert len(data) == 100


def user_likes_50_songs():
    create_101_songs() 
    
    for i in range(50):
        UserSongRelationship.add_entry(1, i+1, True)

def test_api_test_get_loggedin_user_liked_songs(app):
    user_likes_50_songs() 
    client = app.test_client()
    with client: 
        resp = client.post('/users/login', data=dict(
            email='f@l.com',
            password='test', 
            remember=False
        ))
        resp = client.get('/api/v1/songs/like')
        data = resp.get_json()
        assert len(data) == 50 
        
        data_pks = [song['pk'] for song in data]
        all_user_songs = UserSongRelationship.query.filter_by(user=1).all()
        for entry in all_user_songs:
            assert entry.song in data_pks