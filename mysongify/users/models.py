from flask_login import UserMixin, current_user 
from mysongify import login_manager
class User():
    id = 0
    def __init__(self, email, password):
        User.id += 1
        self.email = email
        self.password = password
        self.playlists = []
        self.image_file = 'default.png'
        self.is_admin = False
        self.is_dj = False

    @staticmethod
    def get(user_id):
        with open('mysongify/data/users.json') as f:
            data = json.load(f)
            for user_json in data:
                if user_json['id'] == user_id:
                    return user_json
        return None

    
    def __repr__(self):
        return f'<User {self.email}>'


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)