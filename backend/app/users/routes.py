from flask import jsonify
from flask_login import logout_user

from . import users_blueprint

@users_blueprint.route('/users/')
def index():
    return jsonify({'users': ['user 1']})

# logout
@users_blueprint.route('/users/logout')
def logout():
    logout_user()
    return jsonify({'success':True})



