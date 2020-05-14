import json 

import pytest
from flask_login import login_user 

from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User
from app.song_collection.models import SongCollection, Playlist, Album, DisplayStatus
from app import db


def create_user():
    user = User(firstname='f1', lastname='ln', email='f@l.com')
    user.set_password('test')
    db.session.add(user)
    db.session.commit()

def test_create_playlist(app):
    pytest.skip()
    create_user() 

    with app.test_client() as client:
        resp = client.post('/users/login', data=dict(
            email='f@l.com',
            password='test', 
            remember=False
        ))

        assert resp.status_code == 200

        resp = client.post('/api/v1/user/song_collection/create', json=dict(
                name= 'Post Playlsit Creation',
                is_playlist= 'playlist' ,
                cover_image= 'google.com',
                songs= []
        ))

        data = resp.get_json()
        # print(data)

        assert resp.status_code == 201

        ps = Playlist.query.all()
        print(ps[0].name)
        assert type(ps) == list 
        assert len(ps) == 1
        assert ps[0].name == 'Post Playlsit Creation'
        assert ps[0].get_cover_image() == 'google.com'


def create_songs():
    ns = Song(name='a song that is new',user=1, mp3_file='google.com')
    db.session.add(ns)
    ns = Song(name='a song that is new', user=1,mp3_file='google.com')
    db.session.add(ns)
    db.session.commit()

def test_create_playlist_with_songs(app):
    create_user() 
    create_songs()

    with app.test_client() as client:
        resp = client.post('/users/login', data=dict(
            email='f@l.com',
            password='test', 
            remember=False
        ))

        assert resp.status_code == 200

        resp = client.post('/api/v1/user/song_collection/create', json=dict(
                name= 'Post Playlsit Creation',
                is_playlist= 'playlist' ,
                cover_image= 'google.com',
                songs= [1,2]
        ))

        data = resp.get_json()
        # print(data)

        assert resp.status_code == 201

        ps = Playlist.query.all()
        print(ps[0].name)
        assert type(ps) == list 
        assert len(ps) == 1
        assert ps[0].name == 'Post Playlsit Creation'
        assert ps[0].get_cover_image() == 'google.com'
        assert type(ps[0].get_songs()) == list 
        assert len(ps[0].get_songs()) == 2 


def test_create_album_with_songs(app):
    create_user() 
    create_songs()

    with app.test_client() as client:
        resp = client.post('/users/login', data=dict(
            email='f@l.com',
            password='test', 
            remember=False
        ))

        assert resp.status_code == 200

        resp = client.post('/api/v1/user/song_collection/create', json=dict(
                name= 'Post Playlsit Creation',
                is_playlist= 'album' ,
                cover_image= 'google.com',
                songs= [1,2]
        ))

        data = resp.get_json()
        # print(data)

        assert resp.status_code == 201

        ps = Album.query.all()
        print(ps[0].name)
        assert type(ps) == list 
        assert len(ps) == 1
        assert ps[0].name == 'Post Playlsit Creation'
        assert ps[0].get_cover_image() == 'google.com'
        assert type(ps[0].get_songs()) == list 
        assert len(ps[0].get_songs()) == 2 
