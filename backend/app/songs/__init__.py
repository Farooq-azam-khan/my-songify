from flask import Blueprint

songs_blueprint = Blueprint('songs', __name__, template_folder='templates')

from . import routes, models
