import json 

import pytest
from flask_login import login_user 

from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User
from app.song_collection.models import (SongCollection, 
                                        Playlist, 
                                        Album, 
                                        DisplayStatus)
from app import db


def create_user():
    user = User(firstname='f1', lastname='ln', email='f@l.com')
    user.set_password('test')
    db.session.add(user)
    db.session.commit()

def create_playlist():
    DisplayStatus.add_default_display_status() 
    pp = Playlist.create_playlist(1, name='playlist1', cover_image='google.com' ,display_status=3)
    unlisted = Playlist.create_playlist(1, name='playlist2', cover_image='google.com', display_status=2)
    private_p = Playlist.create_playlist(1, name='playlist3', cover_image='google.com', display_status=1)

    newsong = Song(name='song1', user=1, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song2', user=1, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song3', user=1, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='notinpp1', user=1, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='notinpp2', user=1, mp3_file='google.com')
    db.session.add(newsong)
    db.session.commit() 

    pp.add_song(1)
    pp.add_song(2)
    pp.add_song(3)

    pp.like(user_pk=1)
    unlisted.like(user_pk=2)
    unlisted.like(user_pk=1)


def test_get_all_public_playlists(app):
    # pytest.skip()
    create_user() 
    create_playlist() 

    with app.test_client() as client: 
        resp = client.post('/users/login', data=dict(
            email='f@l.com',
            password='test', 
            remember=False
        ))

        resp = client.get('/api/v1/user/playlists/like')
        data = resp.get_json() 

        # print('data', data)
        assert type(data) == dict 
        assert 'playlist1' in data 
        assert 'playlist2' in data 

        assert type(data['playlist1']) == list 
        assert type(data['playlist2']) == list 

        assert 'playlist3' not in data 


def create_album():
    a1 = Playlist.create_playlist(1, name='album1', cover_image='google.com')
    a2 = Playlist.create_playlist(1, name='album2', cover_image='google.com')
    a3 = Playlist.create_playlist(1, name='album3', cover_image='google.com')

    newsong = Song(name='song1', user=1, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song2', user=1, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song3', user=1, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song4', user=1, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song5', user=1, mp3_file='google.com')
    db.session.add(newsong)
    db.session.commit() 

    a1.add_song(1)
    a2.add_song(2)
    a3.add_song(3)

    a1.like(user_pk=1)
    a2.like(user_pk=2)
    a3.like(user_pk=1)


def test_get_all_public_albumns(app):
    # pytest.skip()
    create_user() 
    create_album()

    with app.test_client() as client: 
        resp = client.post('/users/login', data=dict(
            email='f@l.com',
            password='test', 
            remember=False
        ))

        resp = client.get('/api/v1/user/album/like')
        data = resp.get_json() 

        print('data', data)
        assert type(data) == dict 
        assert 'album1' in data 
        assert 'album3' in data 

        assert type(data['album1']) == list 
        assert type(data['album3']) == list 

        assert 'album2' not in data 
        