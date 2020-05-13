from flask import jsonify, request 
from flask_login import logout_user, current_user, login_user, login_required

from . import users_blueprint
from app.users.models import User
from app.users.forms.login_form import LoginForm
from app.users.forms.register_form import RegisterForm
from app import db 

@users_blueprint.route('/users/')
def index():
    return jsonify({'users': ['user 1']})

# logout
@users_blueprint.route('/users/logout', methods=['POST'])
# @login_required
def logout():
    if current_user.is_authenticated:
        logout_user()
        return jsonify({'success':True, 'message': 'You were logged out successfully'})
    return jsonify({'success': True, 'message': 'You were never logged in'})

@users_blueprint.route('/users/current_user', methods=['POST'])
def is_user_logged_in():
    if current_user.is_authenticated:
        return jsonify({'success': True, 'user': {
            'firstname': current_user.firstname, 
            'middlename': current_user.middlename,
            'lastname': current_user.lastname, 
            'email': current_user.email, 
            'is_admin': current_user.is_admin
        }})
    return jsonify({'success': False})

@users_blueprint.route('/users/login', methods=['POST'])
def login():
    if current_user.is_authenticated:
        return jsonify({'success': True, 'message': 'already autheticated', 'user': {
            'firstname': current_user.firstname, 
            'middlename': current_user.middlename,
            'lastname': current_user.lastname, 
            'email': current_user.email, 
            'is_admin': current_user.is_admin
        }})

    
    email = request.form.get('email')
    password = request.form.get('password')
    form = LoginForm(email=email, password=password)

    remember = request.form.get('remember')
    
    if form.validate():
        user = User.query.filter_by(email=email).first()
        if user is None or not user.check_password(password):
            return jsonify({'success': False, 'message': 'Could not login','errors': ['Invalid email or password']})
        login_user(user, remember=remember)
        return jsonify({'success': True, 'message': 'Logged in successfully.', 'errors': [], 'user': {
            'firstname': current_user.firstname, 
            'middlename': current_user.middlename,
            'lastname': current_user.lastname, 
            'email': current_user.email, 
            'is_admin': current_user.is_admin
        }})
    return jsonify({'success': False, 'message': 'Invalid form input','errors': form.errors} )

@users_blueprint.route('/users/register', methods=['POST'])
def register():
    if current_user.is_authenticated:
        return jsonify({'success': False, 'message': 'You are logged already'})

    data = {'firstname': request.form.get('firstname'),
        'lastname': request.form.get('lastname'),
        'middlename': request.form.get('middlename'),
        'password': request.form.get('password'),
        'confirm_password': request.form.get('confirm_password'),
        'email': request.form.get('email'),
        'confirm_email': request.form.get('confirm_email')
    }
    form = RegisterForm(data=data)

    if form.validate():
        # check if user exists
        user = User.query.filter_by(email=data['email']).first()
        if user is not None:
            return jsonify({'data': data, 'success': False, 'message': 'User already exits', 'user': user.email}) 

        new_user = User(firstname=data['firstname'], middlename=data['middlename'], lastname=data['lastname'], email=data['email'])
        new_user.set_password(data['password'])
        db.session.add(new_user)
        db.session.commit() 
        return jsonify({'success': True, 'message': 'Congradulation! You have successfully registered'})
    return jsonify({'success': False, 'message': 'You have not filled out a form filed properly', 'errors': form.errors, 'data': data})
