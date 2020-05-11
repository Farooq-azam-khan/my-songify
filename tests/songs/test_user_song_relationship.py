import json 

import pytest

from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User

from app import db


def test_add_entry_user_song_relationship_valid_inout(app):
    user = User(email='tst@tst.com', firstname='f', lastname='l')
    user.set_password('password')
    
    song = Song(name='song1', user=1, mp3_file='google.com')

    db.session.add(user)
    db.session.add(song)
    db.session.commit()

    UserSongRelationship.add_entry(user=1, song=1, is_like=True)
    assert UserSongRelationship.query.first().user == 1
    assert UserSongRelationship.query.first().song == 1
    assert UserSongRelationship.query.first().is_like == True 

def test_add_entry_user_song_relationship_update(app):
    user = User(email='tst@tst.com', firstname='f', lastname='l')
    user.set_password('password')
    
    song = Song(name='song1', user=1, mp3_file='google.com')

    db.session.add(user)
    db.session.add(song)
    db.session.commit()

    UserSongRelationship.add_entry(user=1, song=1, is_like=False)
    assert UserSongRelationship.query.first().user == 1
    assert UserSongRelationship.query.first().song == 1
    assert UserSongRelationship.query.first().is_like == False 

def test_add_entry_user_song_relationship_duplicate_addition(app):
    user = User(email='tst@tst.com', firstname='f', lastname='l')
    user.set_password('password')
    
    song = Song(name='song1', user=1, mp3_file='google.com')

    db.session.add(user)
    db.session.add(song)
    db.session.commit()

    UserSongRelationship.add_entry(user=1, song=1, is_like=True)

    with pytest.raises(Exception) as execinfo:
        UserSongRelationship.add_entry(user=1, song=1, is_like=True)
    
    print(execinfo)
    assert 'Cannot add multiple rows with the same primary key' in str(execinfo.value)

# user relationship routes 
def test_like_song_valid_post_form(app):
    user = User(email='tst@tst.com', firstname='f', lastname='l')
    user.set_password('password')
    
    song = Song(name='song1', user=1, mp3_file='google.com')

    db.session.add(user)
    db.session.add(song)
    db.session.commit()

    with app.test_client() as client:
        # login in uer 
        resp = client.post('/users/login', data=dict(email='tst@tst.com', password='password', remember=False)) 
        assert resp.status_code == 200

        resp = client.post('/songs/like', data=dict(song=1, is_like=True))
        assert resp.status_code == 200
        assert json.loads(resp.data)['success'] == True
        assert json.loads(resp.data)['message'] == 'added like/dislike to database'

def test_like_song_does_not_update_like(app):
    user = User(email='tst@tst.com', firstname='f', lastname='l')
    user.set_password('password')
    
    song = Song(name='song1', user=1, mp3_file='google.com')

    db.session.add(user)
    db.session.add(song)
    db.session.commit()

    with app.test_client() as client:
        # login in uer 
        resp = client.post('/users/login', data=dict(email='tst@tst.com', password='password', remember=False)) 
        assert resp.status_code == 200

        resp = client.post('/songs/like', data=dict(song=1, is_like=True))
        assert resp.status_code == 200
        assert json.loads(resp.data)['success'] == True
        assert json.loads(resp.data)['message'] == 'added like/dislike to database'

        resp = client.post('/songs/like', data=dict(song=1, is_like=True))
        assert resp.status_code == 200
        assert json.loads(resp.data)['success'] == False
        assert json.loads(resp.data)['message'] == 'no update or addition'

def test_like_song_login_required(app):
    with app.test_client() as client:
      
        resp = client.post('/songs/like', data=dict(song=1, is_like=True))
        assert resp.status_code == 401

