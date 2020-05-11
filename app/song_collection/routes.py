from flask import jsonify
from . import song_collection_blueprint
from app import db 

@song_collection_blueprint.route('/albumns/')
def albumns():
    return jsonify([{'name': 'album 1'}, {'name': 'album 2'}])

@song_collection_blueprint.route('/playlists/')
def playlists():
    return jsonify([{'name': 'playlist 1'}, {'name': 'playlist 2'}])