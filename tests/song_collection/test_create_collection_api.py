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
    pytest.skip()
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
    pytest.skip() 
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


def create_albums_and_likes():
    # 7 users 
    for i in range(7):
        user = User(firstname=f'first-{i}', lastname=f'last-{i}', email=f'f{i}@l.com')
        user.set_password('test')
        db.session.add(user)
    db.session.commit()

    # 7 albumns
    for i in range(7):    
        Album.create(user_pk=1, name=f'album-{i}', cover_image=f'google-{i}.com')
        

    # add likes: album 1 get 7 like, album 2 get 6 likes etc. 
    for i in range(7):
        # print(
            Album.query.get(i+1).like(1)
        # )
        # for j in range(i, 7):
        #     Album.query.get(i).like(i)
    for i in range(6):
        Album.query.get(i+1).like(2)

    for i in range(5):
        Album.query.get(i+1).like(3)

    for i in range(4):
        Album.query.get(i+1).like(4)
    
    for i in range(3):
        Album.query.get(i+1).like(5)

    for i in range(2):
        Album.query.get(i+1).like(6)

    for i in range(1):
        Album.query.get(i+1).like(7)



def test_top_n_albumns(app):
    create_albums_and_likes()

    with app.test_client() as client:
        resp = client.get('/api/v1/albums/6')
        data = resp.get_json()

        print(data) 

        assert type(data) == list 
        assert len(data) == 6 
        assert data[0]['likes'] >= data[1]['likes'] 
        assert data[2]['likes'] >= data[3]['likes']
        assert data[3]['likes'] >= data[4]['likes'] 
        assert data[4]['likes'] >= data[5]['likes']

        assert data[0]['likes'] == 7
        assert data[1]['likes'] == 6
        assert data[2]['likes'] == 5
        assert data[3]['likes'] == 4
        assert data[4]['likes'] == 3
        assert data[5]['likes'] == 2

        assert data[0]['name'] == 'album-0'
        assert data[1]['name'] == 'album-1'
        assert data[2]['name'] == 'album-2'
        assert data[3]['name'] == 'album-3'
        assert data[4]['name'] == 'album-4'
        assert data[5]['name'] == 'album-5'