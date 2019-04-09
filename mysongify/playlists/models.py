class Playlist():
    def __init__(self, id, title): 
        self.id = id
        self.title = title
        self.songs = []
        self.image_file = 'default.png'

    def __repr__(self):
        return f'<Playlist {self.title}'
