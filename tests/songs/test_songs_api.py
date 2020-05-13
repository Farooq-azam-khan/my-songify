import json 

import pytest
from flask_login import login_user 

from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User

from app import db

from . import setup_data 

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
    pytest.skip("skipped: test_get_api_v1_songs")

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
    pytest.skip("skipped: test_api_test_get_loggedin_user_liked_songs")

    user_likes_50_songs() 
    client = app.test_client()
    with client: 
        resp = client.post('/users/login', data=dict(
            email='f@l.com',
            password='test', 
            remember=False
        ))
        resp = client.get('/api/v1/user/songs/like')
        data = resp.get_json()
        assert len(data) == 50 
        
        data_pks = [song['pk'] for song in data]
        all_user_songs = UserSongRelationship.query.filter_by(user=1).all()
        for entry in all_user_songs:
            assert entry.song in data_pks

def test_get_song_id(app):
    pytest.skip("skipped: test_get_song_id")
    setup_data.get_sample_data()
    client = app.test_client()
    with client: 
        resp = client.get('/api/v1/songs/1')
        data = resp.get_json() 
        assert data['pk'] == 1 
        assert data['genre'] == 'genre1'
        assert data['name'] == 'song1'

def test_get_genre_by_id(app):
    # pytest.skip("skipped: test_get_genre_by_id")
    setup_data.get_sample_data()
    client = app.test_client()
    with client: 
        resp = client.get('/api/v1/genre/1')
        data = resp.get_json() 
        assert type(data) == dict 
        assert type(data['genre1']) == list 
        assert data['genre1'][0]['name'] == 'song1'




def create_5_genres():
     
    user = User(firstname='f1', lastname='ln', email='f@l.com')
    user.set_password('test')
    db.session.add(user)
    db.session.commit()

    
    for j in range(5):
        genre = Genre(name=f'genre-{j}')
        db.session.add(genre)
        db.session.commit()
        for i in range(22):
            song = Song(name=f'song-{i}', user=user.pk, genre=genre.pk, mp3_file="http://google.com")
            db.session.add(song)
        db.session.commit()


def test_get_4_genres_and_20_songs_per_genre(app):
    pytest.skip("skipped: test_get_song_id")

    create_5_genres() 
    client = app.test_client()
    with client: 
        resp = client.get('/api/v1/genre/songs')
        data = resp.get_json() 
        assert type(data) == dict 
        assert type(data['genre-1']) == list
        assert 'genre-101' not in data 
        assert 'genre-100' not in data 
        assert 'genre-4' not in data 
        assert 'genre-5' not in data 
