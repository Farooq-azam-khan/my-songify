import pytest

from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User

from app import db
from tests.songs.setup_data import get_sample_data



def test_song_foreignkey_to_user(app):
    user,song, _ = get_sample_data()

    query_song = Song.query.first()

    assert int(query_song.pk) == 1
    assert query_song.name == 'song1'
    assert int(query_song.user) == user.pk
    assert User.query.get(query_song.user).firstname == user.firstname



    
def test_songs_route(app):
    
    _, song, genre = get_sample_data()
    genre_name = genre.name

    client = app.test_client()
    resp = client.get('/songs/')
    data = resp.get_json()

    genre_song = data['data'][genre_name][0]

    assert resp.status_code == 200
    assert data['success'] == True 
    assert data['message'] == 'List of songs grouped by genre'

    assert genre_song['name'] == song.name
    assert genre_song['artist'] == 'fn ln'
    assert genre_song['genre'] == genre_name
    assert genre_song['mp3_file'] == 'http://google.com'

