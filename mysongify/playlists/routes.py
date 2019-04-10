from flask import (Blueprint, 
                    render_template, 
                    redirect,
                    request, 
                    flash,
                    url_for
                    )
from flask_login import login_required
from mysongify.songs.models import Song
playlists = Blueprint('playlists', __name__)

@playlists.route('/create_playlist', methods=['POST', 'GET'])
@login_required
def create_playlist():
    songs = Song.get_songlist()[:10]
    if request.method == 'POST':
        flash('post sending data', 'primary')
        return redirect(url_for('main.home'))
    elif request.method == 'GET':
        flash('get request', 'success')
    return render_template('playlists/create_playlist.html', songs=songs)