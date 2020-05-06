from flask import Blueprint

song_collection_blueprint = Blueprint('song_collection', __name__, template_folder='templates')

from . import routes, models
