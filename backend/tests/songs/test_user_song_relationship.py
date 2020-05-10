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

