import json 
import os 
import random 




class Song():
    def __init__(self, id, title, artist):
        self.id = id
        self.title = title
        self.artist = artist
        self.minutes = 0
        self.views = 0
        self.is_allowed = True
        self.seconds = 0
        self.genre = ''
        self.image_file = 'default.png'

    @staticmethod
    def json_to_obj(obj):
        song = Song(obj['id'], obj['title'], obj['artist'])
        song.minutes = obj['minutes']
        song.views = obj['views']
        song.is_allowed = obj['is_allowed']
        song.seconds = obj['seconds']
        song.genre = obj['genre']
        song.image_file = obj['image_file']
        return song

    def to_json(self):
        song = {
            "id":self.id, 
            "title":self.title, 
            "artist":self.artist, 
            "minutes":self.minutes, 
            "views":self.views, 
            "is_allowed":self.is_allowed, 
            "seconds":self.seconds, 
            "genre":self.genre, 
            "image_file":self.image_file
        }
        return song


    @staticmethod
    def delete_song(user, song):
        if user.is_admin:
            # delete the song
            song.is_allowed = False


    @staticmethod
    def get_random_song():
        songs = Song.get_songlist()
        return random.choice(songs)


    @staticmethod
    def sort_by_length(song):
        length = song.minutes + song.seconds/60
        return length
        
    def get_hour(self):
        return self.seconds / 3600 + self.minutes / 60

    @staticmethod
    def sort_by_genre(song):
        return song.genre

    @staticmethod
    def sort_by_views(song):
        return song.views

    @staticmethod
    def sort_by_title(song):
        return song.title

    @staticmethod
    def get_top_10():
        songs = Song.get_songlist()
        songs.sort(reverse=True)
        songs = songs[:10]
        return songs


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
            if id == song.id and song.is_allowed:
                return song
        return None


    @staticmethod
    def make_songlist():
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


    @staticmethod
    def get_songlist():
        ret_songs = []
        for song in SONGS_DB:
            if song.is_allowed:
                ret_songs.append(song)
        return ret_songs

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




SONGS_DB = Song.make_songlist()