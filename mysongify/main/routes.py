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


@main.route('/credits')
def credits():
    return render_template('credits.html', title='Credits')


@main.route('/analytics')
def analytics():
	title = 'analytics'
	songs = Song.get_top_10()
	playlists = Playlist.get_top_10()
	users = User.get_top_10()
	return render_template('analytics.html', songs=songs, playlists=playlists, users=users, title=title)

