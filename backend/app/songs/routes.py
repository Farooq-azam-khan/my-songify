from flask import jsonify
from . import songs_blueprint
from app import db 
from .models import Genre, Song

@songs_blueprint.route('/songs/')
def songs():
    genres = Genre.query.all()
    ret = {}
    for genre in genres:
        genre_name = str(genre.name)
        ret[genre_name] = [song.name for song in Song.query.filter_by(genre=genre.pk).all()]

    return jsonify(ret)

@songs_blueprint.route('/genres/')
def genres():
    return jsonify([genre.name for genre in Genre.query.all()])