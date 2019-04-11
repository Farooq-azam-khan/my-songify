from flask import (Blueprint, render_template)

from mysongify.users.models import User 
from mysongify.songs.models import Song 
from mysongify.playlists.models import Playlist

main = Blueprint('main', __name__)


@main.route('/')
def home():
	songs = Song.get_songlist()
	return render_template('home.html', html_songs=songs) 

@main.route('/search')
def search():
    return '<h1>search</h1> '

@main.route('/analytics')
def analytics():
	songs = Song.get_songlist()
	songs.sort(reverse=True)
	songs = songs[:10]

	playlists = Playlist.get_playlists()
	playlists.sort(reverse=True)

	users = User.get_users()
	users.sort(reverse=True)
	return render_template('analytics.html', songs=songs, playlists=playlists, users=users)