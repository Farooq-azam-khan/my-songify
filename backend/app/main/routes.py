import random 

from flask import jsonify 

from . import main_blueprint
from app import db 
from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User
# will use to add dummy data to database
def create_songs_and_genres(user_id):
    # Genre.add_default_genres()
    # https://www.soundhelix.com/audio-examples
    mp3_files = ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3']
    # https://bestlifeonline.com/cover-songs-better-than-original/
    cover_images = ['https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/all-along-watchtower.jpg?w=1024&ssl=1', 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/american-woman.jpg?w=1024&ssl=1', 'https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/angel-mont-1.jpg?w=1024&ssl=1', 'https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/becausethenight.jpg?w=1024&ssl=1']
    for i in range(4):
        for j in range(5):
            song = Song(name=f'song{i}{j}', user=user_id, 
                        cover_image=random.choice(cover_images), 
                        mp3_file=random.choice(mp3_files), 
                        genre=i)
            db.session.add(song)
    db.session.commit()

@main_blueprint.route('/')
def index():
    # if len(User.query.all()) == 0: 
    #     u = User(email='f@l.com', firstname='f', lastname='l')
    #     u.set_password('test')
    #     db.session.add(u)
    #     db.session.commit()
    # create_songs_and_genres(user_id=User.query.get(1))
    return jsonify({'index': 'made the data'})

