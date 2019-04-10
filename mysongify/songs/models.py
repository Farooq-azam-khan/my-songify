import json 
import os 
import random 
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
        my_imgs = ['default.png','default2.jpg']
        songslist = []
        # mysongify
        with open('mysongify/data/songs.json') as f: 
            data = json.load(f)
            songslist.extend(data[0]['songs'])
            songslist.extend(data[1]['songs'])
        for song in songslist:
            song['img_file'] = random.choice(my_imgs)
        return songslist
    
    def __repr__(self):
        return f'<Song {self.title}>'