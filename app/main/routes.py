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
        # TODO: create exeption for when none is passed throguh
        # TODO: create exception for when there is no song with that id 
        result = Song.query.get(int(song_id)).get_song_dict()
        return result

    def put(self, song_id):
        return {'putsong': f'song_id: {song_id}'}
    
class GenreRoutes(Resource):
    def get(self, genre_id):
        # TODO: create exeption for when none is passed throguh
        # TODO: create exception for when there is no genre with that id 
        result = Genre.query.get(int(genre_id)).get_json()
        return result

    def put(self, genre_id):
        return {'putsong': f'song_id: {genre_id}'}
    
class GenreSongsGroupRoutes(Resource):
    def get(self):
        q = Genre.get_n_genres_m_songs()
        return q 

# from . import api
def add_api_resource(api):
    from .routes import SongsRoutes, SongRoutes, UserSongLikesRoutes
    api.add_resource(SongsRoutes, '/api/v1/songs')
    api.add_resource(SongRoutes, '/api/v1/songs/<string:song_id>')
    api.add_resource(UserSongLikesRoutes, '/api/v1/user/songs/like')
    api.add_resource(GenreSongsGroupRoutes, '/api/v1/genre/songs')
    api.add_resource(GenreRoutes, '/api/v1/genre/<string:genre_id>')