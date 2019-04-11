import json 
import os 
import random 
class Song():
    def __init__(self, id, title, artist):
        self.id = id
        self.title = title
        self.artist = artist
        self.playlists = []
        self.minutes = 0
        self.genere = 'hip-hop'
        self.views = 0
        self.is_allowed = True
        self.seconds = 0
        self.genre = ''
        self.image_file = 'default.png'


    def __eq__(self, other):
        return self.views == other.views

    def __lt__(self, other):
        return self.views < other.views
    
    def __gt__(self, other):
        return self.views > other.views

    # https://gist.github.com/giorgiofellipe/7d9113a8129d641578c1
    @staticmethod
    def get_json_songlist():
        
        songslist = []
        # mysongify
        with open('mysongify/data/songs.json') as f: 
            data = json.load(f)
            songslist.extend(data[0]['songs'])
            songslist.extend(data[1]['songs'])
        return songslist

    @staticmethod
    def get_song(id):
        songslist = Song.get_songlist()
        for song in songslist:
            if id == song.id:
                return song
        return None


    @staticmethod
    def get_songlist(): 
        my_imgs = ['default.png','default2.jpg','default6.jpg','default7.jpg','default8.jpg','default9.jpg','default10.jpg','default11.jpg','default12.jpg']
        my_genre = ['Hip Hop', 'Pop', 'R&B', 'Country', 'Rock', 'Heavy Metal']
        songslist = Song.get_json_songlist()
        songs = []
        for indx, song in enumerate(songslist):
            song_obj = Song(indx, song['title'], 'Farooq')
            song_obj.image_file = random.choice(my_imgs)
            song_obj.views = random.randint(100, 10000)
            song_obj.genre = random.choice(my_genre)
            song_obj.minutes, song_obj.seconds = get_minutes_seconds(song['length'])
            if song_obj.is_allowed:
                songs.append(song_obj)
        return songs

    def get_length(self):
        minutes = self.minutes
        secs = self.seconds
        if self.minutes <= 9:
            minutes = f'0{minutes}'
        else:
            minutes = f'{minutes}'
        if self.seconds <= 9:
            secs = f'0{secs}'
        else:
            secs = f'{secs}'

        return f'{minutes}:{secs}'
    
    def __repr__(self):
        return f'<Song {self.title}>'

def get_minutes_seconds(length_str):
    minutes, seconds = length_str.split(':')
    return int(minutes), int(seconds)