from queue import Queue
from mysongify.songs.models import Song 
import json 

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

    @staticmethod
    def json_to_obj(obj):
        playlist = Playlist(obj['id'], obj['title'])
        playlist.views = obj['views']
        if obj.get('song'):
            playlist.songs = [ Song.json_to_obj(song) for song in obj.get('songs')]
        playlist.total_hours = obj['total_hours']
        playlist.user = obj['user']
        playlist.image_file = obj['image_file']
        return playlist

    def to_json(self):
        playlist = {
            "id":self.id, 
            "title":self.title, 
            "songs":[song.to_json() for song in self.songs], 
            "user":self.user, 
            "views":self.views, 
            "total_hours":self.total_hours, 
            "image_file":self.image_file, 
        }
        return playlist


    def save(self):
        playlsits_dict = {}
        with open('mysongify/data/playlists.json') as f:
            playlsits_dict = json.load(f)
            playlists = playlsits_dict['playlists']
            self.id = len(playlists) + 1
            playlists.append(self.to_json())
        with open('mysongify/data/playlists.json', 'w') as f:
            json.dump(playlsits_dict, f)

        return self


    def empty_queue(self):
        return self.next_song_queue.empty()

    def queue_size(self):
        return self.next_song_queue.qsize()

    def get_queue(self):
        return self.next_song_queue

    def __eq__(self, other):
        return self.views == other.views

    def __lt__(self, other):
        return self.views < other.views
    
    def __gt__(self, other):
        return self.views > other.views

    def __repr__(self):
        return f'<Playlist {self.title}>'

    @staticmethod
    def get_top_10():
        playlist_list = []
        with open('mysongify/data/playlists.json') as f:
            playlist_list = json.load(f)['playlists']
        # playlists = Playlist.get_playlists()
        # playlists.sort(reverse=True)
        # playlists[:10]
        return playlist_list


    @staticmethod
    def make_playlsits():
        # TODO: do actual json playlists
        playlists = []
        for i in range(10):
            playlist = Playlist(i, f'Playlists {i}')
            playlist.views = i * 10
            playlist.add_song(Song.get_random_song())
            playlist.add_song(Song.get_random_song())
            playlists.append(playlist)
        return playlists

    

    @staticmethod
    def read_playilst():
        playlist_list = []
        with open('mysongify/data/playlists.json') as f:
            playlists_json = json.load(f)['playlists']
            for playlist_json in playlists_json:
                playlist_obj = Playlist.json_to_obj(playlist_json)
                playlist_list.append(playlist_obj)
        return playlist_list


    @staticmethod
    def get_playlists():
        return Playlist.read_playilst()

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

    


Playlist_DB = Playlist.make_playlsits()