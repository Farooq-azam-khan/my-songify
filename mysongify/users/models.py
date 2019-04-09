class User():
    def __init__(self, id, username, email, password):
        self.id = id
        self.username = username
        self.email = email
        self.password = password
        self.playlists = []
        self.image_file = 'default.png'
    
    def __repr__(self):
        return f'<User {self.username}'