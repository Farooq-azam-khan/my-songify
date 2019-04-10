import json 
import os 
class Song():
    def __init__(self, id, title, artist):
        self.id = id
        self.title = title
        self.artist = artist
        self.playlists = []
        self.image_file = 'default.png'

    # https://gist.github.com/giorgiofellipe/7d9113a8129d641578c1
    @staticmethod
    def get_songlist(): 
        songslist = []
        with open('mysongify/data/songs.json') as f: 
            data = json.load(f)
            songslist.extend(data[0]['songs'])
            songslist.extend(data[1]['songs'])
        indx = 0
        for song in songslist:
            if indx % 2 == 0:
                song['img_file'] = 'default2.jpg'
            else: 
                song['img_file'] = 'default.png'
            indx+=1
        return songslist
    
    def __repr__(self):
        return f'<Song {self.title}>'