from datetime import datetime 

from app import db

class Song(db.Model):
    pk = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    # listens : maybe store in history table
    cover_image = db.Column(db.String(200), nullable=True)
    user = db.Column(db.Integer, db.ForeignKey('user.pk'), nullable=False)
    mp3_file = db.Column(db.String(200), nullable=False)
    likes = db.Column(db.Integer)
    listens = db.Column(db.Integer)
    genre = db.Column(db.Integer, db.ForeignKey('genre.pk'), nullable=True)
    added_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Song {self.name} - {self.pk}>'


class Genre(db.Model):
    pk = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Genre {self.name} - {self.pk}>'
