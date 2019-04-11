from mysongify.songs.models import Song
from mysongify.users.models import User

def test_new_song():
    song = Song(1, 'software sensation', 'misic')
    assert song.artist =='misic'
    assert song.title == 'software sensation'
    assert song.id == 1
    assert song.is_allowed == True
    assert song.minutes == 0
    assert song.views == 0
    
def test_delete_song():
    song = Song(1, 'software sensation', 'misic')
    user = User(1, 'test1@gmail.com', 'test1') 
    user.is_admin = True
    Song.delete_song(user, song)
    assert song.is_allowed == False

def test_sort_by_length():
    song = Song(1, 'software sensation', 'misic')
    song.minutes = 2
    song.seconds = 0
    assert Song.sort_by_length(song) == 2.0
    

def test_sort_by_genre():
    song = Song(3, 'I am not in class', 'Jordan Q')
    song.genre = 'Pop'
    assert Song.sort_by_genre(song) == 'Pop'

def test_sort_by_views():
    song = Song(4, 'I love the leafs', 'KK and HK')
    song.views = 500
    assert Song.sort_by_views(song) == 500

def test_sort_by_title():
    song = Song(5, 'The ting', 'Harun')
    assert Song.sort_by_title(song) == 'The ting'

def test_get_song_by_id():
    #Song with ID 5 is named Codex
    assert Song.get_song(5).title == 'Codex'

def test_get_songlist():
    assert len(Song.get_songlist()) == 42

def test_get_length_of_song():
    song = Song(5, 'The ting', 'Harun')
    song.minutes = 5
    song.seconds = 36
    assert song.get_length() == '05:36'

     
    