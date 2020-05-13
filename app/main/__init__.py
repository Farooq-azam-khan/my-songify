from flask import Blueprint
from flask_restful import Api

main_blueprint = Blueprint('main', __name__, template_folder='templates', static_folder='static')
api = Api(main_blueprint)


def add_api_resource(api):
    from .routes import HW
    api.add_resource(HW, '/api/')

add_api_resource(api)

from . import routes
