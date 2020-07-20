from flask import Blueprint
from flask_restful import Api

main_blueprint = Blueprint('main', __name__, template_folder='templates', static_folder='static')
api = Api(main_blueprint)


from .api_routes import add_api_resource
add_api_resource(api)

from . import routes
