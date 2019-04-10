from flask import (Blueprint, 
                    flash, 
                    render_template)
from mysongify.songs.models import Song

songs = Blueprint('songs', __name__)
@songs.route('/songs_list')
def songs_list():
    songs = Song.get_songlist()
    return render_template('songs/songs_list.html', songs=songs)