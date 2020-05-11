from app import db 
from app.users.models import User
from app.songs.models import Song, Genre, UserSongRelationship

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