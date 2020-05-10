from app.songs.models import Song, Genre 
from app.users.models import User

from app import db

def get_sample_data():
    user = User(email='testing@id.com', firstname='fn', lastname='ln')
    user.set_password('password')

    db.session.add(user)
    db.session.commit()

    genre = Genre(name='genre1')
    db.session.add(genre)
    db.session.commit()

    song = Song(name='song1', user=user.pk, genre=genre.pk, mp3_file="http://google.com")
    db.session.add(song)
    db.session.commit()

    return user, song, genre 

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

    expected = { genre_name: [song.name] }

    assert resp.status_code == 200
    assert data == expected

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
