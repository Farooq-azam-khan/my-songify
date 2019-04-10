from flask import (Blueprint, 
                    render_template, 
                    flash)
from flask_login import (login_user, 
                        current_user, 
                        logout_user, 
                        login_required)
from mysongify.users.models import User 

users = Blueprint('users', __name__)


@users.route('/account')
@login_required
def account():
    return render_template('users/account.html')


@users.route('/login', methods=['GET', 'POST'])
def login():
    login_user(User(0, 'admin', 'admin'))
    if current_user.is_authenticated:
        flash('logged in user', 'success')
    return render_template('users/login.html')


@users.route('/logout')
@login_required
def logout():
    logout_user()
    if not current_user.is_authenticated:
        flash('logged out', 'success')
    return render_template('users/logout.html')

@users.route('/register')
def register():
    return render_template('users/register.html')




