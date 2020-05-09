from flask import jsonify, request 
from flask_login import logout_user, current_user, login_user

from . import users_blueprint
from app.users.models import User

@users_blueprint.route('/users/')
def index():
    return jsonify({'users': ['user 1']})

# logout
@users_blueprint.route('/users/logout')
def logout():
    logout_user()
    return jsonify({'success':True})



@users_blueprint.route('/users/login', methods=['POST'])
def login():
    if current_user.is_authenticated:
        return jsonify({'success': True, 'message': 'already autheticated'})

    
    email = request.form.get('email')
    password = request.form.get('password')
    remember = request.form.get('remember')
    # print('users/router.py/login:', email, password)
    user = User.query.filter_by(email=email).first()
    
    if user is None or not user.check_password(password):
        return jsonify({'success': False, 'message': 'Could not login','errors': ['Invalid email or password']})
    
    # print('routes/', user)
    login_user(user) #, remember=remember)
    return jsonify({'success': True, 'message': 'Logged in successfully.', 'errors': [], 'todo': 'implement login'})