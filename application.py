import random 

from app import create_app,  db
from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User
from app.song_collection.models import (SongCollection, 
                                        Playlist, Album, 
                                        DisplayStatus, SongList, 
                                        UserSongCollectionRelationship
                                        )

from config import Config
# from test_config import TestConfig


my_app = create_app(Config)

if __name__ == '__main__':
    my_app.run()

# add a context when the `flask shell` command is run
@my_app .shell_context_processor
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
    'create_songs_and_genres':create_songs_and_genres, 'add_6_albumns': add_6_albumns,
    'Song': Song, 'Genre': Genre, 'UserSongCollectionRelationship': UserSongCollectionRelationship,
    'SongCollection':SongCollection, 'Playlist':Playlist, 'Album':Album, 
    'DisplayStatus': DisplayStatus, 'SongList': SongList}



# will use to add dummy data to database
def create_songs_and_genres(user_id): # run function with flask shell
    # Genre.add_default_genres()
    # https://www.soundhelix.com/audio-examples
    mp3_files = ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3']
    # https://bestlifeonline.com/cover-songs-better-than-original/
    cover_images = ['https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/all-along-watchtower.jpg?w=1024&ssl=1', 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/american-woman.jpg?w=1024&ssl=1', 'https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/angel-mont-1.jpg?w=1024&ssl=1', 'https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/becausethenight.jpg?w=1024&ssl=1']

    if len(Genre.query.all()) < 4:
        raise Exception('Make the genres before running this')
    if len(Genre.query.all()) == 0:
        raise Exception('make a user first')
    for i in range(4):
        for j in range(5):
            song = Song(name=f'song{i}{j}', user=user_id, 
                        cover_image=random.choice(cover_images), 
                        mp3_file=random.choice(mp3_files), 
                        genre=i)
            db.session.add(song)
    db.session.commit()

def add_6_albumns():
    cover_images = ['https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/all-along-watchtower.jpg?w=1024&ssl=1', 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/american-woman.jpg?w=1024&ssl=1', 'https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/angel-mont-1.jpg?w=1024&ssl=1', 'https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/becausethenight.jpg?w=1024&ssl=1']

    for i in range(6):
        Album.create_album(1, 'album1', cover_image=random.choice(cover_images))

