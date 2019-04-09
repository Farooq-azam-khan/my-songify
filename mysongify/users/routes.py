from flask import (Blueprint, render_template)


users = Blueprint('users', __name__)

@users.route('/account')
def account():
    return render_template('users/account.html')


@users.route('/login', methods=['GET', 'POST'])
def login():
    return render_template('users/login.html')


@users.route('/logout')
def logout():
    return render_template('users/logout.html')

@users.route('/register')
def register():
    return render_template('users/register.html')




