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
    elif request.method == 'GET':
        flash('get request', 'success')
    return render_template('playlists/create_playlist.html', songs=songs)