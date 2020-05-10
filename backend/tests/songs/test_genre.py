import pytest

from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User

from app import db


from tests.songs.setup_data import get_sample_data
def test_genres_route(app):
    
    _, _, genre = get_sample_data()
    genre_name = genre.name

    client = app.test_client()
    resp = client.get('/genres/')
    data = resp.get_json()

    expected = [genre_name]

    assert resp.status_code == 200
    assert data == expected

def test_add_default_genres_model_method(app):
    Genre.add_default_genres()
    expected = ['alternative', 'anime', 'blues', 'classical', 
        'children\'s music', 'comedy', 'contry', 'dance', 'disney', 'easy listening', 'electronic', 
        'Enka', 'French Pop', 'Hip-Hop/Rap', 'German Pop','German Folk', 'Holiday', 'Indie Pop', 'Industrial', 'Jazz', 'J-Pop', 
        'K-Pop', 'Latin', 'Opera', 'Pop', 'R&B/Soul', 'Reggae', 'Rock', 'Soundtrack', 'Vocal']
    genres = [genre.name for genre in Genre.query.all()]

    print(genres)
    for expect_genre in expected:
        assert expect_genre in genres

# tests genre routes 