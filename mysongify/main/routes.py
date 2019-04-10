from flask import (Blueprint, render_template)

from mysongify.users.models import User 
from mysongify.songs.models import Song 

main = Blueprint('main', __name__)


@main.route('/')
def home():
	songs = Song.get_songlist()
	return render_template('home.html', html_songs=songs) 

@main.route('/search')
def search():
    return '<h1>search</h1> '