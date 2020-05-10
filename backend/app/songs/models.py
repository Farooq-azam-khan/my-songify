from datetime import datetime 

from sqlalchemy import PrimaryKeyConstraint

from app import db
from app.users.models import User

class Song(db.Model):
    pk = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    cover_image = db.Column(db.String(200), nullable=True)
    # better name = artist
    user = db.Column(db.Integer, db.ForeignKey('user.pk'), nullable=False)
    mp3_file = db.Column(db.String(200), nullable=False)
    genre = db.Column(db.Integer, db.ForeignKey('genre.pk'), nullable=True)
    added_at = db.Column(db.DateTime, default=datetime.utcnow)

    def get_song_dict(self):
        q =  User.query.get(self.user)
        artist =  f'{q.firstname} {q.lastname}'
        return {'name': self.name, 
                'artist':artist , 
                'conver_image': self.cover_image, 
                'genre': Genre.query.get(self.genre).name, 
                'added_at': self.added_at, 
                'mp3_file': self.mp3_file,
                'pk': self.pk
        }



    def __repr__(self):
        return f'<Song {self.name} - {self.pk}>'

class UserSongRelationship(db.Model):
    user = db.Column(db.Integer, db.ForeignKey('user.pk'), nullable=False)
    song = db.Column(db.Integer, db.ForeignKey('song.pk'), nullable=False)
    is_like = db.Column(db.Boolean, nullable=False)

    # https://stackoverflow.com/questions/9034271/sqlalchemy-orm-how-to-declare-a-table-class-that-contains-multi-column-primary
    __table_args__ = (
        PrimaryKeyConstraint('user', 'song', 'is_like'), {},
    )

    @staticmethod
    def add_entry(user, song, is_like):
        usr = UserSongRelationship.query.filter_by(user=user, song=song).all()
        # print(usr)
        # if there are no user then add them  
        if len(usr) == 0:
            db.session.add(UserSongRelationship(user=user, song=song, is_like=is_like))
        elif len(usr) == 1 and usr[0].is_like != is_like:
            # update like to dislike or viceverca
            usr[0].is_like = is_like
            db.session.add(usr)
            db.session.commit()
        else:
            print('checking is_like is not the same')

            raise Exception('Cannot add multiple rows with the same primary key')




    def __repr__(self):
        return f'<UserSongRelationship ({self.user}, {self.song}, {self.is_like})'


class Genre(db.Model):
    pk = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)

    @staticmethod 
    def add_default_genres():
        # https://www.musicgenreslist.com/
        genere_list = ['alternative', 'anime', 'blues', 'classical', 
        'children\'s music', 'comedy', 'contry', 'dance', 'disney', 'easy listening', 'electronic', 
        'Enka', 'French Pop', 'Hip-Hop/Rap', 'German Pop','German Folk', 'Holiday', 'Indie Pop', 'Industrial', 'Jazz', 'J-Pop', 
        'K-Pop', 'Latin', 'Opera', 'Pop', 'R&B/Soul', 'Reggae', 'Rock', 'Soundtrack', 'Vocal']

        for genre in genere_list:
            db.session.add(Genre(name=genre))
        db.session.commit()

    def __repr__(self):
        return f'<Genre {self.name} - {self.pk}>'
