import json 

import pytest
from flask_login import login_user 

from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User
from app.song_collection.models import SongCollection, Playlist, Album, DisplayStatus
from app import db


def create__playlist(): 
    nu = User(firstname='f', lastname='l', email='f@l.com')
    nu.set_password('test')
    db.session.add(nu)
    db.session.commit() 

    DisplayStatus.add_default_display_status() 
    pp = Playlist.create_playlist(nu.pk, name='playlist1', cover_image='google.com' ,display_status=3)
    unlisted = Playlist.create_playlist(nu.pk, name='playlist2', cover_image='google.com', display_status=2)
    private_p = Playlist.create_playlist(nu.pk, name='playlist3', cover_image='google.com', display_status=1)

    newsong = Song(name='song1', user=nu.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song2', user=nu.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song3', user=nu.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='notinpp1', user=nu.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='notinpp2', user=nu.pk, mp3_file='google.com')
    db.session.add(newsong)
    db.session.commit() 

    pp.add_song(1)
    pp.add_song(2)
    pp.add_song(3)

def test_get_all_public_playlists(app):
    pytest.skip()
    create__playlist() 

    with app.test_client() as client: 
        resp = client.get('/api/v1/playlists')
        data = resp.get_json() 

        # print(data)
        assert type(data) == dict 
        assert 'playlist1' in data 
        assert 'playlist3' not in data 
        assert 'playlist2' not in data 

        assert type(data['playlist1']) == list 

        for song in data['playlist1']:
            assert song['name'] in ['song1', 'song2', 'song3']
            assert song['name'] not in ['notinpp1', 'notinpp2']


def create_albums(): 
    nu = User(firstname='f', lastname='l', email='f@l.com')
    nu.set_password('test')
    db.session.add(nu)
    db.session.commit() 

    album1 = Album.create_album(user_pk=nu.pk, name='album1', cover_image='google.com')
    album2 = Album.create_album(user_pk=nu.pk, name='album2', cover_image='google.com')
    album3 = Album.create_album(user_pk=nu.pk, name='album3', cover_image='google.com')

    newsong = Song(name='song1', user=nu.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song2', user=nu.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song3', user=nu.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='notin1', user=nu.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='notin2', user=nu.pk, mp3_file='google.com')
    db.session.add(newsong)
    db.session.commit() 

    album1.add_song(1)
    album1.add_song(2)
    album1.add_song(3)

    album2.add_song(4)
    album3.add_song(5)


def test_get_all_albums(app): 
    pytest.skip()
    create_albums() 

    with app.test_client() as client: 
        resp = client.get('/api/v1/albumns')
        data = resp.get_json() 

        assert type(data) == dict 
        assert 'album1' in data 
        assert 'album2' in data 
        assert 'album3' in data 

        assert type(data['album1']) == list 
        assert type(data['album2']) == list 
        assert type(data['album3']) == list 


        for song in data['album1']:
            assert song['name'] in ['song1', 'song2', 'song3']
            assert song['name'] not in ['notinpp1', 'notinpp2']

        assert data['album2'][0]['name'] == 'notin1'
        assert data['album3'][0]['name'] == 'notin2'


def create_playlist2(): 
    nu1 = User(firstname='f', lastname='l', email='f@l.com')
    nu1.set_password('test')
    db.session.add(nu1)
    db.session.commit() 

    nu2 = User(firstname='f2', lastname='l2', email='f2@l.com')
    nu2.set_password('test')
    db.session.add(nu2)
    db.session.commit() 

    DisplayStatus.add_default_display_status() 

    # user 1
    pp = Playlist.create_playlist(nu1.pk, name='playlist1', cover_image='google.com' ,display_status=3)
    unlisted = Playlist.create_playlist(nu1.pk, name='playlist2', cover_image='google.com', display_status=2)
    user_private = Playlist.create_playlist(nu1.pk, name='playlist_p', cover_image='google.com', display_status=1)


    # user 2
    private_p = Playlist.create_playlist(nu2.pk, name='playlist3', cover_image='google.com', display_status=3)

    newsong = Song(name='song1', user=nu2.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song2', user=nu2.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='song3', user=nu1.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='notinpp1', user=nu1.pk, mp3_file='google.com')
    db.session.add(newsong)

    newsong = Song(name='notinpp2', user=nu1.pk, mp3_file='google.com')
    db.session.add(newsong)
    db.session.commit() 

    pp.add_song(1)
    pp.add_song(2)
    pp.add_song(3)



def test_get_all_user_playlists(app):
    # pytest.skip()
    create_playlist2() 

    with app.test_client() as client: 
        resp = client.post('/users/login', data=dict(
            email='f@l.com',
            password='test', 
            remember=False
        ))        
        resp = client.get('/api/v1/user/playlists')
        data = resp.get_json() 

        assert type(data) == dict 
        assert 'playlist1' in data 
        assert 'playlist2' in data 
        assert 'playlist_p' in data 

        assert 'playlist3' not in data 
    

    assert 1 == 2
