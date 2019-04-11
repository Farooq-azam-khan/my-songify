from flask import (Blueprint, 
                    flash, 
                    redirect, 
                    request, 
                    render_template, 
                    url_for)


from flask_login import current_user
from mysongify.songs.models import Song

songs = Blueprint('songs', __name__)
@songs.route('/songs_list')
def songs_list():
    songs_views = Song.get_songlist()
    songs_genre = Song.get_songlist()
    songs_views.sort(key=Song.sort_by_views, reverse=True)
    songs_genre.sort(key=Song.sort_by_genre)
    return render_template('songs/songs_list.html', songs_views=songs_views, songs_genre=songs_genre)

@songs.route('/song/<int:id>')
def song_detail(id):
    song = Song.get_song(id)
    if not song:
        flash('Error, no song found with that id', 'danger')
        return redirect(url_for('main.home'))
    return render_template('songs/song_detail.html', song=song)

@songs.route('/song/<int:id>/delete', methods=['POST', 'GET'])
def remove_song(id):
    song = Song.get_song(id)
    if request.method == 'POST':
        if not song:
            flash('song already does not exist', 'warning')
            return redirect(url_for('main.home'))
        if current_user.is_admin:
            song.is_allowed = False
            flash('song was removed form db', 'danger')
        else:
            flash('you do not have permission', 'danger')
        return redirect(url_for('main.home'))
    
    return redirect(url_for('main.home'))

