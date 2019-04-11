from mysongify.users.models import User
from mysongify.playlists.models import Playlist
from mysongify.songs.models import Song

def test_new_playlist():
    playlist = Playlist(1, 'playlist1')
    assert playlist.id == 1
    assert playlist.title == 'playlist1'
    assert playlist.songs == []
    assert playlist.user == -1
    assert playlist.views == 0

def test_empty_queue():
    playlist = Playlist(1, 'playlist1')
    assert playlist.empty_queue() == True

def test_not_empty_queue():
    playlist = Playlist(1, 'playlist1')
    song = Song(1, 'Great song', 'Great artist')
    playlist.next_song_queue.put(song)
    assert playlist.empty_queue() == False

def test_empty_queue_size():
    playlist = Playlist(1, 'playlist1')
    assert playlist.queue_size() == 0

def test_not_empty_queue_size():
    playlist = Playlist(1, 'playlist1')
    song = Song(1, 'Great song', 'Great artist')
    playlist.next_song_queue.put(song)
    assert playlist.queue_size() == 1

def test_get_queue():
    playlist = Playlist(1, 'playlist1')
    song = Song(1, 'Great song', 'Great artist')
    playlist.next_song_queue.put(song)
    assert playlist.get_queue().get().id == 1

def test_add_song():
    playlist = Playlist(1, 'playlist1')
    song = Song(1, 'Great song', 'Great artist')
    playlist.add_song(song)
    assert playlist.empty_queue() == False

def test_set_songs_more_than_limit():
    playlist = Playlist(1, 'playlist1')
    song = Song(1, 'Great song', 'Great artist')
    song2 = Song(2, 'Great song', 'Great artist')
    song3 = Song(3, 'Great song', 'Great artist')
    song4 = Song(4, 'Great song', 'Great artist')
    song5 = Song(5, 'Great song', 'Great artist')
    song6 = Song(6, 'Great song', 'Great artist')
    song7 = Song(7, 'Great song', 'Great artist')
    song8 = Song(8, 'Great song', 'Great artist')
    song9 = Song(9, 'Great song', 'Great artist')
    song10 = Song(10, 'Great song', 'Great artist')
    song11 = Song(11, 'Great song', 'Great artist')
    song_list = [song, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11]
    assert playlist.set_songs(song_list) == False

def test_set_songs_one_song():
    playlist = Playlist(1, 'playlist1')
    song = Song(1, 'Great song', 'Great artist')
    song2 = Song(2, 'Great song', 'Great artist')
    song3 = Song(3, 'Great song', 'Great artist')
    song_list = [song, song2, song3]
    assert playlist.set_songs(song_list) == True