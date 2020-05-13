import random 

from flask import jsonify , render_template, send_from_directory

from flask_login import current_user 

from . import main_blueprint

from app import db
from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User
from app.song_collection.models import SongCollection, Playlist, Album, DisplayStatus
from flask_restful import Resource


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

class PlaylistsRoutes(Resource):
    def get(self): 
        q = Playlist.get_all_public()
        # print('playlist query:', q)
        return q


class AlbumsRoutes(Resource):
    def get(self): 
        q = Album.get_albumns()
        # print('Album query:', q)
        return q


class PlaylistRoutes(Resource):
    def get(self, playlist_id): 
        pass 

class AlbumRoutes(Resource):
    def get(self, album_id): 
        pass 

class UserCreatedPlaylistsRoute(Resource):
    def get(self):
        q = Playlist.get_user_playlists(current_user.pk)
        return q


class UserCreatedAlbumRoute(Resource):
    def get(self, artist_id):
        q = Album.get_artist_albumns(artist_id)
        return q
        
        

class PlaylistLikeByUserRoute(Resource):
    def get(self):
        q = Playlist.get_liked_playlists(current_user.pk) 
        # print('query for playlist:', q, 'current_user', current_user.firstname)
        return q
        
class AlbumLikeByUserRoute(Resource):
    def get(self):
        q = Album.get_liked_albums(current_user.pk) 
        # print('query:', q)
        return q
        


# from . import api
def add_api_resource(api):
    from .routes import (SongsRoutes, 
                        SongRoutes, 
                        UserSongLikesRoutes, 
                        PlaylistsRoutes, 
                        AlbumsRoutes, 
                        UserCreatedPlaylistsRoute, 
                        UserCreatedAlbumRoute, 
                        PlaylistLikeByUserRoute, 
                        AlbumLikeByUserRoute)
                        
    api.add_resource(SongsRoutes, '/api/v1/songs')
    api.add_resource(SongRoutes, '/api/v1/songs/<string:song_id>')
    api.add_resource(UserSongLikesRoutes, '/api/v1/user/songs/like')
    api.add_resource(GenreSongsGroupRoutes, '/api/v1/genre/songs')
    api.add_resource(GenreRoutes, '/api/v1/genre/<string:genre_id>')
    
    # song collection routes 
    api.add_resource(PlaylistsRoutes, '/api/v1/playlists')
    api.add_resource(AlbumsRoutes, '/api/v1/albumns')

    # user song collection routes 
    api.add_resource(UserCreatedPlaylistsRoute, '/api/v1/user/playlists')
    api.add_resource(UserCreatedAlbumRoute, '/api/v1/artist/<string:artist_id>/albumns')

    # liked 
    api.add_resource(PlaylistLikeByUserRoute, '/api/v1/user/playlists/like')
    api.add_resource(AlbumLikeByUserRoute, '/api/v1/user/albums/like')