from flask import Blueprint, render_template


playlists = Blueprint('playlists', __name__)

@playlists.route('/create_playlist')
def create_playlist():
    return render_template('playlists/create_playlist.html')