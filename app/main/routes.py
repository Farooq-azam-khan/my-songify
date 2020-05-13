import random 

from flask import jsonify , render_template, send_from_directory

from flask_login import current_user 

from . import main_blueprint
from app import db
from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User


# restplus 
from flask_restful import Resource

from app.songs.models import Song 

class SongsRoutes(Resource):
    def get(self):
        q = Song.get_100()
        return q

class UserSongLikesRoutes(Resource):
    def get(self):
        q = UserSongRelationship.get_user_liked_songs(current_user.pk)
        return q 

class SongRoutes(Resource):
    def get(self, song_id):
        return {'hello': f'song_id: {song_id}'}
    def put(self, song_id):
        return {'putsong': f'song_id: {song_id}'}
    

# from . import api
def add_api_resource(api):
    from .routes import SongsRoutes, SongRoutes, UserSongLikesRoutes
    api.add_resource(SongsRoutes, '/api/v1/songs')
    api.add_resource(SongRoutes, '/api/v1/songs/<string:song_id>')
    api.add_resource(UserSongLikesRoutes, '/api/v1/songs/like')