import random 

from flask import jsonify , render_template, send_from_directory

from . import main_blueprint
from app import db 
from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User


@main_blueprint.route('/')
def index():
    return jsonify({'index': 'made the data'})

@main_blueprint.route('/react-frontend')
def frontend_react():
    return render_template('index.html')

@main_blueprint.route('/manifest.json')
def manifest():
    return send_from_directory('main/build', 'manifest.json')

@main_blueprint.route('/favicon.ico')
def favicon():
    return send_from_directory('build', 'favicon.ico')