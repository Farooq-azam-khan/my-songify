from flask import Blueprint

main_blueprint = Blueprint('main', __name__, template_folder='build', static_folder='build/static') #, template_folder='templates') #, static_folder='react/build/static')

from . import routes
