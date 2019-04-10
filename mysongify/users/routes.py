from flask import (Blueprint, 
                    redirect,
                    render_template, 
                    request,
                    flash,
                    url_for
                    )
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
    
    if current_user.is_authenticated:
        flash('you are already logged in.', 'warning')
        return redirect(url_for('main.home'))
    if request.method == 'POST':
        email = request.form.get("email")
        print(email)
        password = request.form.get("password")
        print(password)
        login_user(User(0, 'admin', 'admin'))
        flash('logged in user', 'success')
        return redirect(url_for('main.home'))

    return render_template('users/login.html')


@users.route('/logout')
def logout():
    if current_user.is_authenticated:
        logout_user()
        flash("you are logged out", 'danger')
        return redirect(url_for('main.home'))
    if not current_user.is_authenticated:
        flash('would you like to login?', 'primary')
        return redirect(url_for('users.login'))
    return render_template('users/logout.html')

@users.route('/register')
def register():
    return render_template('users/register.html')




