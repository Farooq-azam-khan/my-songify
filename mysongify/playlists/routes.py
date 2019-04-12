from flask import (Blueprint, 
                    render_template, 
                    redirect,
                    request, 
                    flash,
                    url_for
                    )
from flask_login import login_required
from mysongify.playlists.models import Playlist
from mysongify.playlists.models import MAX_NUMBER_OF_SONGS
from mysongify.songs.models import Song
playlists = Blueprint('playlists', __name__)


@playlists.route('/playlist_list')
def playlist_list():
    playlists = Playlist.get_playlists()
    return render_template("playlists/playlist_list.html", playlists=playlists)


@playlists.route('/create_playlist', methods=['POST', 'GET'])
@login_required
def create_playlist():
    songs = Song.get_songlist()#[:10]
    if request.method == 'POST':
        playlist_title = request.form.get("title")
        playlist_songs = []
        length_hour = 0
        for id in range(len(songs)):
            if request.form.get(f"song-{ id }"):
                song = Song.get_song(id)
                song_length_hour = song.get_hour()
                length_hour += song_length_hour
                playlist_songs.append(Song.get_song(id))

        if length_hour >= 1 and length_hour <= 3:
            playlist = Playlist(34,playlist_title)
            playlist.total_hours = length_hour
            playlist.set_songs(playlist_songs) # setting songs in playlist
            playlist = playlist.save()
            flash('playlist created', 'success')   
            return redirect(url_for('playlists.playlist_detail', id=playlist.id))
        else:
            flash('Error: Please make your songs between 1 to 3 hours', 'danger')
            return redirect(url_for('playlists.create_playlist'))

    return render_template('playlists/create_playlist.html', songs=songs)

@playlists.route('/playlist/<int:id>')
def playlist_detail(id):
    playlist = Playlist.get_playlist(id)
    if not playlist:
        flash('playlist does not exists', 'danger')
        return redirect(url_for('main.home'))

    next_song = 'empty queue'
    if not playlist.empty_queue():
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