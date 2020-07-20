
# # flask jwt
# from flask_jwt_extended import (create_access_token, 
#                                 create_refresh_token, 
#                                 jwt_required, 
#                                 jwt_refresh_token_required, 
#                                 get_jwt_identity, 
#                                 get_raw_jwt)


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


# api.add_resource(UserRegister, '/api/v1/register')
#     # api.add_resource(UserLogin, '/api/v1/login')
#     # api.add_resource(UserLogout, '/api/v1/logout')
#     # api.add_resource(TokenRefresh, '/api/v1/token/refresh')
#     # api.add_resource(SecretResource, '/api/v1/secret')