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

    def get_artist(self): 
        q =  User.query.get(self.user)
        return f'{q.firstname} {q.lastname}'


    def get_json(self): 
        return self.get_song_dict() 

    def get_song_dict(self):
        artist =  self.get_artist() 
        genre = Genre.query.get(self.genre)

        result = {'name': self.name, 
                'artist':artist , 
                # 'added_at': self.added_at, 
                'mp3_file': self.mp3_file,
                'pk': self.pk
            }
        if genre: 
            result['genre'] = genre.name 
        
        if self.cover_image: 
            result['cover_image'] = self.cover_image

        return result
    
    @staticmethod   
    def get_100():
        q = Song.query.limit(100).all()
        result = [song.get_song_dict() for song in q]
        return result




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
    def get_user_liked_songs(user_id):
        q = UserSongRelationship.query.filter_by(user=user_id, is_like=True).all()
        result = [Song.query.get(obj.song).get_song_dict() for obj in q]
        return result

    @staticmethod
    def add_entry(user, song, is_like):
        usr = UserSongRelationship.query.filter_by(user=user, song=song).all()
        # if there are no user then add them  
        if len(usr) == 0:
            db.session.add(UserSongRelationship(user=user, song=song, is_like=is_like))
        elif len(usr) == 1 and usr[0].is_like != is_like:
            # update like to dislike or viceverca
            usr[0].is_like = is_like
            db.session.add(usr)
            db.session.commit()
        else:
            raise Exception('Cannot add multiple rows with the same primary key')




    def __repr__(self):
        return f'<UserSongRelationship ({self.user}, {self.song}, {self.is_like})'


class Genre(db.Model):
    pk = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)

    @staticmethod
    def get_n_genres_m_songs(n=4, m=20):
        # TODO: make test for when there are no songs for a specific genre
        genres = Genre.query.limit(n).all()

        data = {}
        for genre in genres:
            genre_name = str(genre.name)
            songs = Song.query.filter_by(genre=genre.pk).limit(m).all()
            if len(songs) >= 1:
                data[genre_name] = [song.get_song_dict() for song in songs]

        return data 
    
    def get_json(self): 
        return {self.name: [song.get_json() for song in Song.query.filter_by(genre=self.pk).all()]}

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
