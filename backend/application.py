from app import create_app 
from app import db
from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User
from app.song_collection.models import (SongCollection, 
                                        Playlist, Album, 
                                        DisplayStatus, SongList
                                        )

from config import Config

app = create_app(Config)

# add a context when the `flask shell` command is run
@app.shell_context_processor
def make_shell_context():
# sample_user = User(firstname='f1', lastname='ln', email='f@l.com')
# sample_user.set_password('test')
# db.session.add(sample_user)
# db.session.commit()

    # sample_song = Song(name='song1', mp3_file='google.com')
    # db.session.add(sample_song)
    # sample_song = Song(name='song2', mp3_file='google2.com')
    # db.session.add(sample_song)
    # db.session.commit()

    # statement = user_song_relationship.insert().values(user=1, song=1, is_like=True)
    # db.session.execute(statement)
    # db.session.commit()

    return {'db': db, 'User': User, 'UserSongRelationship': UserSongRelationship,
    'Song': Song, 'Genre': Genre, 
    'SongCollection':SongCollection, 'Playlist':Playlist, 'Album':Album, 
    'DisplayStatus': DisplayStatus, 'SongList': SongList}

