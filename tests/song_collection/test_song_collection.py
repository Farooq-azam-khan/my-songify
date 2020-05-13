from app.songs.models import Song, Genre 
from app.users.models import User
from app.song_collection.models import (DisplayStatus, Playlist, 
                                        SongCollection
                                        )
from app import db


def test_display_status_add_function(app):
    
    DisplayStatus.add_default_display_status()
    statusi = [ds.status for ds in DisplayStatus.query.all()]
    assert 'private' in statusi 
    assert 'unlisted' in statusi 
    assert 'public' in statusi



def test_playlist_creation(app):
    su = User(firstname='fn', lastname='ln', email='fn@ln.com')
    su.set_password('123')
    db.session.add(su)
    db.session.commit()

    DisplayStatus.add_default_display_status()

    Playlist.create_playlist(user_pk=su.pk, name="playlist 1", cover_image='hi', display_status=1)

    query_pl = Playlist.query.get(1)

    assert query_pl.name == 'playlist 1'
    assert SongCollection.query.get(query_pl.song_collection).cover_image == 'hi'



