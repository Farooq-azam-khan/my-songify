from flask import Blueprint

main_blueprint = Blueprint('main', __name__, template_folder='build', static_folder='build/static')

from . import routes
