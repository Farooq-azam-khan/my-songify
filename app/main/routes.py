

from flask import render_template

from . import main_blueprint

from app import db
# from app.songs.models import Song, Genre, UserSongRelationship
# from app.users.models import User
# from app.song_collection.models import SongCollection, Playlist, Album, DisplayStatus

# routes
@main_blueprint.route('/')
def main():
    response = render_template('index.html', title='home')
    return response

