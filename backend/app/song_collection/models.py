from app import db
from datetime import datetime

# common attributes of album and playlist
class SongCollection(db.Model):
    __tablename__ = 'SongCollection'
    pk = db.Column(db.Integer, primary_key=True)
    # collection_type = db.Column(db.String(15), nullable=False)
    cover_image = db.Column(db.String(200), nullable=False)
    user = db.Column(db.Integer, db.ForeignKey('user.pk'), nullable=False)
    listens = db.Column(db.Integer, default=0)
    added_at = db.Column(db.DateTime, default=datetime.utcnow)


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

    @staticmethod
    def create_album(user_pk, name, cover_image):
        sc = SongCollection(user=user_pk, cover_image=cover_image)
        db.session.add(sc)
        db.session.commit()
        new_album = Playlist(name=name, song_collection=sc.pk)
        db.session.add(new_album)
        db.session.commit()

        return new_album


# which song in an album or playlist (many to many)
SongList = db.Table('SongList', 
                    db.Column('pk', db.Integer, primary_key=True),
                    db.Column('song', db.Integer, db.ForeignKey('song.pk')), 
                    db.Column('collection', db.Integer, db.ForeignKey('DisplayStatus.pk'))
                )