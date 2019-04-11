from queue import Queue
from mysongify.songs.models import Song 

MAX_NUMBER_OF_SONGS = 10

class Playlist():
    def __init__(self, id, title): 
        self.id = id
        self.title = title
        self.songs = []
        self.user = -1
        self.views = 0 
        self.total_hours = 3
        self.image_file = 'default.png'
        self.next_song_queue = Queue(maxsize=MAX_NUMBER_OF_SONGS)
    

    def __eq__(self, other):
        return self.views == other.views

    def __lt__(self, other):
        return self.views < other.views
    
    def __gt__(self, other):
        return self.views > other.views

    def __repr__(self):
        return f'<Playlist {self.title}'

    @staticmethod
    def get_top_10():
        playlists = Playlist.get_playlists()
        playlists.sort(reverse=True)
        playlists[:10]
        return playlists


    @staticmethod
    def get_playlists():
        # TODO: do actual json playlists
        playlists = []
        for i in range(10):
            playlist = Playlist(i, f'Playlists {i}')
            playlist.views = i * 10
            playlist.add_song(Song.get_random_song())
            playlist.add_song(Song.get_random_song())
            playlists.append(playlist)
        return playlists

    def calculate_hours_in_songs():
        return 0

    def get_playlist(id):
        playlists = Playlist.get_playlists()
        for playlist in playlists:
            if playlist.id == id:
                return playlist
        return None
        

    def add_song(self, song):
        self.songs.append(song)
        self.next_song_queue.put(song)

    # successful only if length is less or equal
    def set_songs(self, songs):
        if len(songs) <= MAX_NUMBER_OF_SONGS:
            for song in songs: 
                self.add_song(song)
            return True
        return False

    @staticmethod
    def save(playlist):
        pass

        


