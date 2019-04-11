from flask import (Blueprint, 
                    render_template, 
                    redirect,
                    request, 
                    flash,
                    url_for
                    )
from flask_login import login_required
from mysongify.playlists.models import Playlist
from mysongify.songs.models import Song
playlists = Blueprint('playlists', __name__)

@playlists.route('/create_playlist', methods=['POST', 'GET'])
@login_required
def create_playlist():
    songs = Song.get_songlist()[:10]
    if request.method == 'POST':
        playlist_title = request.form.get("title")
        playlist_songs = []
        for id in range(len(songs)):
            if request.form.get(f"song-{ id }"):
                playlist_songs.append(Song.get_song(id))

        playlist = Playlist(34,playlist_title)
        playlist.set_songs(playlist_songs) # setting songs in playlist
        Playlist.save(playlist)

        flash('post sending data', 'primary')
        return redirect(url_for('main.home'))
    return render_template('playlists/create_playlist.html', songs=songs)

@playlists.route('/playlist/<int:id>')
def playlist_detail(id):
    playlist = Playlist.get_playlist(id)
    if not playlist:
        flash('playlist does not exists', 'danger')
        return redirect(url_for('main.home'))
    next_song = 'next song'
    if playlist.next_song_queue.empty():
        next_song = 'empty queue'
    else:
        next_song = playlist.next_song_queue.get()

    return render_template('playlists/detail_playlist.html', playlist=playlist, next_song=next_song)

@playlists.route('/playlist/<int:id>/update', methods=['POST', 'GET'])
@login_required
def update_playlist(id):
    songs = Song.get_songlist()[:10]
    playlist = Playlist.get_playlist(id)
    if not playlist:
        flash('playlist not found', 'danger')
        return redirect(url_for('main.home'))
    if request.method == 'POST':
        playlist_title = request.form.get("title")
        playlist_songs = []
        for id in range(len(songs)):
            if request.form.get(f"song-{ id }"):
                playlist_songs.append(Song.get_song(id))

        playlist.title = playlist_title
        playlist.set_songs(playlist_songs) # setting songs in playlist
        Playlist.save(playlist)

        flash('Playlist Updated', 'success')
        # TODO: send them to playlist view page 
        return redirect(url_for('main.home'))
    return render_template('playlists/update_playlist.html', songs=songs, playlist=playlist)