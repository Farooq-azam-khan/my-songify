import random 
from flask import jsonify , render_template, send_from_directory
from flask_login import current_user 

from . import main_blueprint

from app import db
from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User
from app.song_collection.models import SongCollection, Playlist, Album, DisplayStatus
from flask_restful import Resource, reqparse


class SongsRoutes(Resource):
    def get(self):
        q = Song.get_100()
        return q

class DisplayRoutes(Resource):
    def get(self):
        q = DisplayStatus.get_all()
        return q
# class UserSongLikesRoutes(Resource):
#     def get(self):
#         q = UserSongRelationship.get_user_liked_songs(current_user.pk)
#         return q 

# class SongRoutes(Resource):
#     def get(self, song_id):
#         # TODO: create exeption for when none is passed throguh
#         # TODO: create exception for when there is no song with that id 
#         result = Song.query.get(int(song_id)).get_song_dict()
#         return result

#     def put(self, song_id):
#         return {'putsong': f'song_id: {song_id}'}
    
# class GenreRoutes(Resource):
#     def get(self, genre_id):
#         # TODO: create exeption for when none is passed throguh
#         # TODO: create exception for when there is no genre with that id 
#         result = Genre.query.get(int(genre_id)).get_json()
#         return result

#     def put(self, genre_id):
#         return {'putsong': f'song_id: {genre_id}'}
    
# class GenreSongsGroupRoutes(Resource):
#     def get(self):
#         q = Genre.get_n_genres_m_songs()
#         return q 

# class PlaylistsRoutes(Resource):
#     def get(self): 
#         q = Playlist.get_all_public()
#         # print('playlist query:', q)
#         return q


# class AlbumsRoutes(Resource):
#     def get(self): 
#         q = Album.get_albumns()
#         # print('Album query:', q)
#         return q


# class PlaylistRoutes(Resource):
#     def get(self, playlist_id): 
#         pass 

# class AlbumRoutes(Resource):
#     def get(self, album_id): 
#         pass 

class UserCreatedPlaylistsRoute(Resource):
    def get(self):
        if not current_user.is_authenticated:
            return {'error': 'Not logged in'}
        q = Playlist.get_user_playlists(current_user.pk)
        return q


class UserCreatedAlbumRoute(Resource):
    def get(self, artist_id):
        q = Album.get_artist_albumns(artist_id)
        return q
        
        

class PlaylistLikeByUserRoute(Resource):
    def get(self):
        if not current_user.is_authenticated:
            return {'error': 'Not logged in'}
        q = Playlist.get_liked_playlists(current_user.pk) 
        return q

        
class AlbumLikeByUserRoute(Resource):
    def get(self):
        if not current_user.is_authenticated:
            return {'error': 'Not logged in'}
        q = Album.get_liked_albums(current_user.pk) 
        # print('query:', q)
        return q
        
class SongCollectionCreatePlaylistOrAlbumn(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('name', type=str, required=True, 
                                    help='Give the name of the collection', 
                                    location='json')
        self.reqparse.add_argument('is_playlist', type=str, required=True, 
                                    help='What type of collection is it?', location='json')
        self.reqparse.add_argument('cover_image', type=str, required=True, 
                                    help='what is you cover image?', location='json')
        self.reqparse.add_argument('songs', type=list, required=False, 
                                    help='what songs would you like to add?', location='json')

        super(SongCollectionCreatePlaylistOrAlbumn, self).__init__()


    # def get(self):
    #     return {'error': 'nothing to show here'}
    def post(self):
        if not current_user.is_authenticated:
            return {'sucess': False, 'is_authenticated': False, 'error': 'login then we can talk'}

        args = self.reqparse.parse_args()
        print('args', args)
        
        '''
            expected for data: 
            {
                'name': 'a name'
                'is_playlist': 'Album or Playlist' 
                'cover_image': 'url link to image'
                'songs': '[1,2,3,4,5,6]' (list of song ids)
            }
        '''
        name = args['name']
        cover_image = args['cover_image']
        songs = [] #args['songs']
        is_playlist = args['is_playlist']
        if is_playlist.lower() == 'playlist':
            print('creating playlist')
            new_playlist = Playlist.create(user_pk=current_user.pk, name=name, cover_image=cover_image)
            print('songs', songs)
            for song in songs:
                new_playlist.add_song(song)

            return {'success': True, 'message': 'playlist created'}, 201


        elif args['is_playlist'].lower() == 'album':
            print('creating albumn')
            new_album = Album.create(user_pk=current_user.pk, name=name, cover_image=cover_image)
            for song in songs:
                new_album.add_song(song)

            return {'success': True, 'message': 'albumn created'}, 201
        
        return {'success': False, 'message': 'invalid form'}




# class Top_N_AlbmunsRoute(Resource):
#     def get(self, top_n_albums):
#         print('getting to n alb', top_n_albums)
#         q = Album.get_top_n_albumns(int(top_n_albums))
#         return q

#         # return {'success': False, 'message', 'TODO'}, 404

def add_api_resource(api):
    from .api_routes import (SongsRoutes,
                        # SongRoutes, 
                        # UserSongLikesRoutes, 
                        # PlaylistsRoutes, 
                        # AlbumsRoutes, 
                        DisplayRoutes,
                        UserCreatedPlaylistsRoute, 
                        UserCreatedAlbumRoute, 
                        PlaylistLikeByUserRoute, 
                        AlbumLikeByUserRoute, 
                        SongCollectionCreatePlaylistOrAlbumn
                        )
                        
    api.add_resource(SongsRoutes, '/api/v1/songs')
#     api.add_resource(SongRoutes, '/api/v1/songs/<string:song_id>')
#     api.add_resource(UserSongLikesRoutes, '/api/v1/user/songs/like')
#     api.add_resource(GenreSongsGroupRoutes, '/api/v1/genre/songs')
#     api.add_resource(GenreRoutes, '/api/v1/genre/<string:genre_id>')
    
#     # song collection routes 
#     api.add_resource(PlaylistsRoutes, '/api/v1/playlists')
#     api.add_resource(AlbumsRoutes, '/api/v1/albumns')

    # user song collection routes 
    api.add_resource(UserCreatedPlaylistsRoute, '/api/v1/user/playlists')
    # api.add_resource(UserCreatedAlbumRoute, '/api/v1/artist/<string:artist_id>/albumns')

    # liked 
    api.add_resource(PlaylistLikeByUserRoute, '/api/v1/user/playlists/like')
    api.add_resource(AlbumLikeByUserRoute, '/api/v1/user/albums/like')

    api.add_resource(DisplayRoutes, '/api/v1/display-status')

    api.add_resource(SongCollectionCreatePlaylistOrAlbumn, '/api/v1/user/song_collection/create')

#     # top 6 albumns based on likes 
#     api.add_resource(Top_N_AlbmunsRoute, '/api/v1/albums/<string:top_n_albums>')

#     