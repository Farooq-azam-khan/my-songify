from flask_login import UserMixin, current_user 
import json
from mysongify import login_manager

USER_LIMIT = 10


class User(UserMixin):
    def __init__(self, email, password):
        self.id = 0
        self.username = 'generic username'
        self.email = email
        self.password = password
        self.playlists = []
        self.viewed_songs = []#set()
        self.followers = 0
        self.image_file = 'default.png'
        self.is_admin = True
        self.is_dj = False


    def save(self):
        users_dict = {}
        with open('mysongify/data/users.json') as f:
            users_dict = json.load(f)
            users = users_dict['users']
            self.id = len(users) + 1
            users.append(self.obj_to_json())
        with open('mysongify/data/users.json', 'w') as f:
            json.dump(users_dict, f)


    def add_viewed_song(self, song):
        self.viewed_songs.append(song)
        print(self.viewed_songs)

    @staticmethod
    def make_users():
        users = []
        for i in range(10):
            user = User(f'email{i}@mysongify.com', f'psswd{i}')
            users.append(user)
            user.is_admin = False
        return users

    @staticmethod
    def get_all_users():
        return USERS_DB

    @staticmethod
    def get_user(id):
        return None

    @staticmethod
    def get_top_10():
        users = User.get_users()
        users.sort(reverse=True)
        return users

    def __eq__(self, other):
        return self.id == other.id

    def __lt__(self, other):
        return self.followers < other.followers
    
    def __gt__(self, other):
        return self.followers > other.followers

    def __hash__(self):
        return hash(self.id)

    @staticmethod
    def get_users():
        users = []
        for i in range(10):
            user = User(f'user{i}@mysongify.com', 'pwd')
            user.followers = i * 10
            users.append(user)
        return users

    # @staticmethod
    # def json_to_obj(json):
    #     return User('admin', 'admin@admin.com')
    
    def obj_to_json(self):
        user = {
            "id":self.id, 
            "username":self.username, 
            "email":self.email, 
            "password":self.password, 
            "is_admin":self.is_admin
        }
        return user

    @staticmethod
    def get(user_id):
        # with open('mysongify/data/users.json') as f:
        #     data = json.load(f)
        #     for user_json in data:
        #         if user_json['id'] == user_id:
        #             return user_json
        # return None
        return User('admin', 'admin')

    
    def __repr__(self):
        return f'<User {self.email}>'


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)


USERS_DB = User.make_users()