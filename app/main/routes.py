import random 

from flask import jsonify , render_template, send_from_directory

from . import main_blueprint
from app import db
from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User


# restplus 
from flask_restful import Resource


class HW(Resource):
    def get(self):
        return {'hello': 'world'}


