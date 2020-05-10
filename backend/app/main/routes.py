import random 

from flask import jsonify 

from . import main_blueprint
# from app import db 
# from app.songs.models import Song, Genre, UserSongRelationship
# from app.users.models import User


@main_blueprint.route('/')
def index():
    return jsonify({'index': 'made the data'})

