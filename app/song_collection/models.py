from datetime import datetime

from sqlalchemy import PrimaryKeyConstraint

from app import db

from app.songs.models import Song

# common attributes of album and playlist
class SongCollection(db.Model):
    __tablename__ = 'SongCollection'
    pk = db.Column(db.Integer, primary_key=True)
    # collection_type = db.Column(db.String(15), nullable=False)
    cover_image = db.Column(db.String(200), nullable=False)
    user = db.Column(db.Integer, db.ForeignKey('user.pk'), nullable=False)
    listens = db.Column(db.Integer, default=0)
    added_at = db.Column(db.DateTime, default=datetime.utcnow)

    def add_song(self, song_id): 
        new_song = SongList(song=song_id, collection=self.pk)
        db.session.add(new_song)
        db.session.commit()

    @staticmethod
    def get_user_collection(user_pk):
        return SongCollection.query.filter_by(user=user_pk).all() 

    

    def get_songs(self): 
        songs_ids = [sl.song for sl in SongList.query.filter_by(collection=self.pk).all()]
        songs = [Song.query.get(sid) for sid in songs_ids]
        return songs

    def get_composer(self):
        user = User.query.get(self.user)
        return f'{user.firstname} {user.lastname}'

class DisplayStatus(db.Model):
    __tablename__ = 'DisplayStatus'
    pk = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(20), unique=True, nullable=False)
    added_at = db.Column(db.DateTime, default=datetime.utcnow)

    @staticmethod
    def add_default_display_status():
        statusi = ['private', 'unlisted', 'public']
        for status in statusi:
            ds = DisplayStatus(status=status)
            db.session.add(ds)
        db.session.commit()

    def __repr__(self):
        return f'<DisplayStatus {self.status}>'

class Playlist(db.Model):
    pk = db.Column(db.Integer, primary_key=True)
    song_collection = db.Column(db.Integer, db.ForeignKey('SongCollection.pk'), nullable=False)
    name = db.Column(db.String(100), nullable=False)

    display_status = db.Column(db.Integer, db.ForeignKey('DisplayStatus.pk'), nullable=False)
    added_at = db.Column(db.DateTime, default=datetime.utcnow)

    def get_song_collection_pk(self):
        return SongCollection.query.get(self.song_collection).pk

    @staticmethod
    def get_user_playlists(user_pk):
        user_collections = SongCollection.get_user_collection(user_pk)
        playlists = Playlist.query.all()
        data = {}
        for uc in user_collections:
            playlist = Playlist.query.filter_by(song_collection=uc.pk).first()
            if playlist: 
                ppname = str(playlist.name)
                songs = [song.get_json() for song in uc.get_songs()]
                data[ppname] = songs 
        return data 

            

    @staticmethod
    def get_all_public(at_most=5):
        # database must have id 3 of plublic TODO: check for that
        playlists = Playlist.query.filter_by(display_status=3).limit(at_most).all()
        data = {}
        for pp in playlists:
            ppname = str(pp.name)
            # TODO: refactor later
            songs_ids = [sl.song for sl in SongList.query.filter_by(collection=pp.get_song_collection_pk()).all()]
            songs = [Song.query.get(sid) for sid in songs_ids]
            if len(songs) >= 1:
                data[ppname] = [song.get_song_dict() for song in songs]
        return data 

    def add_song(self, song_id):
        sc = SongCollection.query.get(self.song_collection)
        sc.add_song(song_id)
        # new_song = SongList(song=song_id, collection=sc.pk)
        # db.session.add(new_song)
        # db.session.commit()


    def get_songs(self): 
        sc = SongCollection.query.get(self.song_collection)#.pk
        return sc.get_songs()  
        # songs = SongList.query.filter_by(collection=sc).all()
        # return {song.to_json() for song in songs}

    def get_composer(self):
        sc = SongCollection.query.get(self.song_collection)
        return sc.get_composer()
        # user = User.query.get(SongCollection.query.get(self.song_collection).user)
        # return f'{user.firstname} {user.lastname}'

    @staticmethod
    def create_playlist(user_pk, name, cover_image, display_status=1):
        sc = SongCollection(user=user_pk, cover_image=cover_image)
        db.session.add(sc)
        db.session.commit()
        new_playlist = Playlist(name=name, song_collection=sc.pk, display_status=display_status)
        db.session.add(new_playlist)
        db.session.commit()

        return new_playlist

    def __repr__(self):
        return f'<Playlist {self.pk} - {self.name}>'

class Album(db.Model):
    pk = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    song_collection = db.Column(db.Integer, db.ForeignKey('SongCollection.pk'), nullable=False)
    added_at = db.Column(db.DateTime, default=datetime.utcnow)

    def add_song(self, song_id):
        sc = SongCollection.query.get(self.song_collection)
        sc.add_song(song_id)

    def get_songs(self): 
        sc = SongCollection.query.get(self.song_collection)#.pk
        return sc.get_songs() 

    @staticmethod
    def get_albumns(at_most=4):
        albumns = Album.query.limit(at_most)
        data = {}
        for ab in albumns:
            abname = str(ab.name)
            # TODO: refactor later
            # songs_ids = [song for song in SongCollection.get_songs()]
            sc = SongCollection.query.get(ab.song_collection)
            songs = sc.get_songs()
            if len(songs) >= 1:
                data[abname] = [song.get_song_dict() for song in songs]
        return data 

    
    def get_composer(self):
        sc = SongCollection.query.get(self.song_collection)
        return sc.get_composer()

    @staticmethod
    def create_album(user_pk, name, cover_image):
        sc = SongCollection(user=user_pk, cover_image=cover_image)
        db.session.add(sc)
        db.session.commit()
        new_album = Album(name=name, song_collection=sc.pk)
        db.session.add(new_album)
        db.session.commit()

        return new_album


# which song in an album or playlist (many to many)
class SongList(db.Model):
    song = db.Column(db.Integer, db.ForeignKey('song.pk'), nullable=False)
    collection = db.Column(db.Integer, db.ForeignKey('SongCollection.pk'), nullable=False)

    # https://stackoverflow.com/questions/9034271/sqlalchemy-orm-how-to-declare-a-table-class-that-contains-multi-column-primary
    __table_args__ = (
        PrimaryKeyConstraint('song', 'collection'), {},
    )

# SongList = db.Table('SongList', 
#                     db.Column('pk', db.Integer, primary_key=True),
#                     db.Column('song', db.Integer, db.ForeignKey('song.pk')), 
#                     db.Column('collection', db.Integer, db.ForeignKey('DisplayStatus.pk'))
#                 )