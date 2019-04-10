class Playlist():
    def __init__(self, id, title): 
        self.id = id
        self.title = title
        self.songs = []
        self.total_hours = 0
        self.image_file = 'default.png'

    def __repr__(self):
        return f'<Playlist {self.title}'

    def calculate_hours_in_songs():
        return 0

    def set_songs(self, songs):
        self.songs = songs

    @staticmethod
    def save(playlist):
        pass

        


