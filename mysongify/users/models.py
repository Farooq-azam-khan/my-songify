from flask_login import UserMixin, current_user 
import json
from mysongify import login_manager

USER_LIMIT = 10


class User(UserMixin):
    def __init__(self, id, email, password):
        self.id = id
        self.username = 'generic username'
        self.email = email
        self.password = password
        self.playlists = []
        self.viewed_songs = []#set()
        self.followers = 0
        self.image_file = 'default.png'
        self.is_admin = True
        self.is_dj = False

    def add_viewed_song(self, song):
        self.viewed_songs.append(song)
        print(self.viewed_songs)

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
            user = User(i, f'user{i}@mysongify.com', 'pwd')
            user.followers = i * 10
            users.append(user)
        return users

    @staticmethod
    def json_to_obj(json):
        return User(0, 'admin', 'admin@admin.com')
    
    def obj_to_json(obj):
        return ''

    @staticmethod
    def get(user_id):
        # with open('mysongify/data/users.json') as f:
        #     data = json.load(f)
        #     for user_json in data:
        #         if user_json['id'] == user_id:
        #             return user_json
        # return None
        return User(0, 'admin', 'admin')

    
    def __repr__(self):
        return f'<User {self.email}>'


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)