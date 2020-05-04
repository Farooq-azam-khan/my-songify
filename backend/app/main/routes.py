from flask import jsonify 

from . import main_blueprint


@main_blueprint.route('/')
def index():
    return jsonify({'index': 'index'})


@main_blueprint.route('/test')
def test():
    return jsonify({'test': 'test' })
