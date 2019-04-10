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
    
    def __repr__(self):
        return f'<User {self.email}>'