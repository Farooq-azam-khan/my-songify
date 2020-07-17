# import random 



# from flask import jsonify , render_template, send_from_directory

# from flask_login import current_user 

# # flask jwt
# from flask_jwt_extended import (create_access_token, 
#                                 create_refresh_token, 
#                                 jwt_required, 
#                                 jwt_refresh_token_required, 
#                                 get_jwt_identity, 
#                                 get_raw_jwt)

# from . import main_blueprint

# from app import db
# from app.songs.models import Song, Genre, UserSongRelationship
# from app.users.models import User
# from app.song_collection.models import SongCollection, Playlist, Album, DisplayStatus
# from flask_restful import Resource, reqparse


# class SongsRoutes(Resource):
#     def get(self):
#         q = Song.get_100()
#         return q

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

# class UserCreatedPlaylistsRoute(Resource):
#     def get(self):
#         if not current_user.is_authenticated:
#             return {'error': 'Not logged in'}
#         q = Playlist.get_user_playlists(current_user.pk)
#         return q


# class UserCreatedAlbumRoute(Resource):
#     def get(self, artist_id):
#         q = Album.get_artist_albumns(artist_id)
#         return q
        
        

# class PlaylistLikeByUserRoute(Resource):
#     def get(self):
#         if not current_user.is_authenticated:
#             return {'error': 'Not logged in'}
#         q = Playlist.get_liked_playlists(current_user.pk) 
#         return q

        
# class AlbumLikeByUserRoute(Resource):
#     def get(self):
#         if not current_user.is_authenticated:
#             return {'error': 'Not logged in'}
#         q = Album.get_liked_albums(current_user.pk) 
#         # print('query:', q)
#         return q
        
# class SongCollectionCreatePlaylistOrAlbumn(Resource):
#     def __init__(self):
#         self.reqparse = reqparse.RequestParser()
#         self.reqparse.add_argument('name', type=str, required=True, 
#                                     help='Give the name of the collection', 
#                                     location='json')
#         self.reqparse.add_argument('is_playlist', type=str, required=True, 
#                                     help='What type of collection is it?', location='json')
#         self.reqparse.add_argument('cover_image', type=str, required=True, 
#                                     help='what is you cover image?', location='json')
#         self.reqparse.add_argument('songs', type=list, required=False, 
#                                     help='what songs would you like to add?', location='json')

#         super(SongCollectionCreatePlaylistOrAlbumn, self).__init__()


#     # def get(self):
#     #     return {'error': 'nothing to show here'}
#     def post(self):
#         if not current_user.is_authenticated:
#             return {'error': 'login then we can talk'}

#         args = self.reqparse.parse_args()
#         print('args', args)
        
#         '''
#             expected for data: 
#             {
#                 'name': 'a name'
#                 'is_playlist': 'Album or Playlist' 
#                 'cover_image': 'url link to image'
#                 'songs': '[1,2,3,4,5,6]' (list of song ids)
#             }
#         '''
#         name = args['name']
#         cover_image = args['cover_image']
#         songs = args['songs']
#         is_playlist = args['is_playlist']
#         if is_playlist.lower() == 'playlist':
#             print('creating playlist')
#             new_playlist = Playlist.create(user_pk=current_user.pk, name=name, cover_image=cover_image)
#             print('songs', songs)
#             for song in songs:
#                 new_playlist.add_song(song)

#             return {'success': True, 'message': 'playlist created'}, 201


#         elif args['is_playlist'].lower() == 'album':
#             print('creating albumn')
#             new_album = Album.create(user_pk=current_user.pk, name=name, cover_image=cover_image)
#             for song in songs:
#                 new_album.add_song(song)

#             return {'success': True, 'message': 'albumn created'}, 201
        
#         return {'success': False, 'message': 'invalid form'}




# class Top_N_AlbmunsRoute(Resource):
#     def get(self, top_n_albums):
#         print('getting to n alb', top_n_albums)
#         q = Album.get_top_n_albumns(int(top_n_albums))
#         return q

#         # return {'success': False, 'message', 'TODO'}, 404

# # class UserRegister(Resource):
# #     def post(self):
# #         parser = reqparse.RequestParser()
# #         parser.add_argument('firstname', help='First name is Requrired', required=True, location='json')
# #         parser.add_argument('middlename', help='Middle name is Optional', required=False, location='json')
# #         parser.add_argument('lastname', help='Last name is Requrired', required=True, location='json')
# #         parser.add_argument('email', help='Email is Requrired', required=True, location='json')
# #         parser.add_argument('confirm_email', help='Confirm Email is Requrired', required=True, location='json')
# #         parser.add_argument('password', help='Password is Requrired', required=True, location='json')
# #         parser.add_argument('confirm_password', help='Confirm Password is Requrired', required=True, location='json')
# #         data = parser.parse_args() 

# #         email = data['email']
# #         if User.find_by_email(email): 
# #             return {'message': f'Email {email} is taken'}
        
# #         if email != data['confirm_email']: 
# #             return {'message': f'Email fields are not equal'}
        
# #         if data['password'] != data['confirm_password']: 
# #             return {'message': f'Password fields are not equal'}

# #         new_user = User(firstname=data['firstname'], 
# #                         lastname=data['lastname'], 
# #                         email=email,
# #                         middlename=data['middlename'])
# #         new_user.set_password(data['password'])

# #         try:
# #             db.session.add(new_user)
# #             db.session.commit()

# #             email = data['email']
# #             access_token = create_access_token(identity=email)
# #             refresh_token = create_refresh_token(identity=email)
# #             return {
# #                 'message': f'User {email} create successfully', 
# #                 'access_token': access_token, 
# #                 'refresh_token': refresh_token
# #             }
# #         except: 
# #             return {'message': 'Something went wrong'}, 500 


# # class UserLogin(Resource):
# #     def post(self):
# #         parser = reqparse.RequestParser()
# #         parser.add_argument('email', help='Email is required', required=True, location='json')
# #         parser.add_argument('password', help='Password is required', required=True, location='json')
# #         data = parser.parse_args()

# #         email = data['email']

# #         cr = User.find_by_email(email=email)
# #         if not cr:
# #             return {'success': False, 'message': f'User {cr.email} does not exist'}
        
# #         if cr.check_password(data['password']):
# #             access_token = create_access_token(identity=cr.email)
# #             refresh_token = create_refresh_token(identity=cr.email)

# #             return {
# #                 'success': True, 
# #                 'message': f'logged in {email}', 
# #                 'access_token': access_token, 
# #                 'refresh_token': refresh_token,
# #                 'user': {
# #                     'firstname': cr.firstname, 
# #                     'lastname': cr.lastname, 
# #                     'middlename': cr.middlename, 
# #                     'email': cr.email, 
# #                 }
# #                 }

# #         return {'success': False, 'message': 'wrong credentials'}

# # class UserLogout(Resource):
# #     def post(self):
# #         return {'message': 'user logout'}

# # class TokenRefresh(Resource):
# #     @jwt_refresh_token_required
# #     def post(self):
# #         cr = get_jwt_identity()
# #         access_token = create_access_token(identity=cr.email)
# #         return {'message': 'Token Refresh', 'access_token': access_token}

# # class SecretResource(Resource):
# #     @jwt_required
# #     def get(self):
# #         return {
# #             'answer': 42
# #         }


# # from . import api
# def add_api_resource(api):
#     from .routes import (SongsRoutes, 
#                         SongRoutes, 
#                         UserSongLikesRoutes, 
#                         PlaylistsRoutes, 
#                         AlbumsRoutes, 
#                         UserCreatedPlaylistsRoute, 
#                         UserCreatedAlbumRoute, 
#                         PlaylistLikeByUserRoute, 
#                         AlbumLikeByUserRoute)
                        
#     api.add_resource(SongsRoutes, '/api/v1/songs')
#     api.add_resource(SongRoutes, '/api/v1/songs/<string:song_id>')
#     api.add_resource(UserSongLikesRoutes, '/api/v1/user/songs/like')
#     api.add_resource(GenreSongsGroupRoutes, '/api/v1/genre/songs')
#     api.add_resource(GenreRoutes, '/api/v1/genre/<string:genre_id>')
    
#     # song collection routes 
#     api.add_resource(PlaylistsRoutes, '/api/v1/playlists')
#     api.add_resource(AlbumsRoutes, '/api/v1/albumns')

#     # user song collection routes 
#     api.add_resource(UserCreatedPlaylistsRoute, '/api/v1/user/playlists')
#     api.add_resource(UserCreatedAlbumRoute, '/api/v1/artist/<string:artist_id>/albumns')

#     # liked 
#     api.add_resource(PlaylistLikeByUserRoute, '/api/v1/user/playlists/like')
#     api.add_resource(AlbumLikeByUserRoute, '/api/v1/user/albums/like')

#     api.add_resource(SongCollectionCreatePlaylistOrAlbumn, '/api/v1/user/song_collection/create')

#     # top 6 albumns based on likes 
#     api.add_resource(Top_N_AlbmunsRoute, '/api/v1/albums/<string:top_n_albums>')

#     # api.add_resource(UserRegister, '/api/v1/register')
#     # api.add_resource(UserLogin, '/api/v1/login')
#     # api.add_resource(UserLogout, '/api/v1/logout')
#     # api.add_resource(TokenRefresh, '/api/v1/token/refresh')
#     # api.add_resource(SecretResource, '/api/v1/secret')