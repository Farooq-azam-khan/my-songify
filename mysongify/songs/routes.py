from flask import (Blueprint, 
                    flash, 
                    redirect, 
                    render_template, 
                    url_for)
from mysongify.songs.models import Song

songs = Blueprint('songs', __name__)
@songs.route('/songs_list')
def songs_list():
    songs = Song.get_songlist()
    return render_template('songs/songs_list.html', songs=songs)

@songs.route('/song/<int:id>')
def song_detail(id):
    song = Song.get_song(id)
    if not song:
        flash('Error, no song found with that id', 'danger')
        return redirect(url_for('main.home'))
    return render_template('songs/song_detail.html', song=song)
