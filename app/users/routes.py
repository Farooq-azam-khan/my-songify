from flask import jsonify, request 
from flask_login import logout_user, current_user, login_user, login_required

from . import users_blueprint
from app.users.models import User
from app.users.forms.login_form import LoginForm
from app.users.forms.register_form import RegisterForm
from app import db 

@users_blueprint.route('/users/logout', methods=['POST'])
def logout():
    if current_user.is_authenticated:
        logout_user()
        return jsonify({'success':True, 'message': 'You were logged out successfully'})
    return jsonify({'success': True, 'message': 'You were never logged in'})

@users_blueprint.route('/users/login', methods=['POST'])
def login():
    if current_user.is_authenticated:
        return jsonify({'success': True, 
        'message': 'already autheticated', 
        'user': current_user.serialize()
        })

    email = request.json.get('email')
    password = request.json.get('password')
    form = LoginForm(email=email, password=password)

    if form.validate():
        user = User.query.filter_by(email=email).first()
        if user is None or not user.check_password(password): 
            return jsonify({'success': False, 'message': 'You are not registered with us or Your password is wrong.'})
        
        login_user(user)
        
        return jsonify({
            'success': True, 
            'message': 'Logged in Successfully',
            'user': current_user.serialize()
        })
    return jsonify({'success': False, 'message': 'Invalid form input','errors': form.errors} )

@users_blueprint.route('/users/register', methods=['POST'])
def register():
    if current_user.is_authenticated:
        return jsonify({'success': False, 'message': 'You are logged already'})

    data = request.json 
    print(data)
    form = RegisterForm(data=data)

    if form.validate():
        # check if user exists
        user = User.query.filter_by(email=data['email']).first()
        if user is not None:
            return jsonify({'success': False, 'message': 'User with that email already exits'}) 

        new_user = User(firstname=data['firstname'], middlename=data['middlename'], lastname=data['lastname'], email=data['email'])
        new_user.set_password(data['password'])
        db.session.add(new_user)
        db.session.commit() 
        return jsonify({'success': True, 'message': 'Congradulation! You have successfully registered'})
    return jsonify({'success': False, 'message': 'You have not filled out a form filed properly', 'errors': form.errors})
