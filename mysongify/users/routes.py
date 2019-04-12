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
import json 


users = Blueprint('users', __name__)


@users.route('/account')
@login_required
def account():
    viewed_songs = current_user.viewed_songs
    with open('mysongify/data/users.json') as f:
        users = json.load(f)
        for user in users['users']:
            if user['id'] == current_user.id: 
                viewed_songs = user['viewed_songs']
    return render_template('users/account.html',viewed_songs=viewed_songs)


@users.route('/login', methods=['GET', 'POST'])
def login():    
    if current_user.is_authenticated:
        flash('you are already logged in.', 'warning')
        return redirect(url_for('main.home'))
    if request.method == 'POST':
        email = request.form.get("email")
        password = request.form.get("password")
        user = None

        with open('mysongify/data/users.json') as f:
            users_dict = json.load(f)
            for user_i in users_dict['users']:
                    user = User.json_to_obj(user_i)
        if not user:
            flash('please register', 'primary')
            return redirect(url_for('users.register'))

        login_user(user)
        
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

@users.route('/register', methods=['GET','POST'])
def register():
    if current_user.is_authenticated:
        flash('you are logged in', 'warning')
        return redirect(url_for('main.home'))
    if request.method == 'POST':
        username=request.form.get("username")
        email=request.form.get("email")
        password=request.form.get("password")
        user = User(email=email, password=password)
        user.username = username 
        user.save()

        flash("registed successfully", "primary")
        return redirect(url_for("users.login"))
        
    return render_template('users/register.html')



@users.route('/user/<int:id>/make_admin', methods=['GET', 'POST'])
@login_required
def make_user_admin(id):
    user = User.get_user(id)
    if user:
        user.is_admin = True
        flash('success, this user is now admin', 'success')
        return redirect(url_for('main.home'))
    else:
        flash('failed to find user', 'danger')
        return redirect(url_for('main.home'))

   

    
@users.route('/make_admin', methods=['GET', 'POST'])
@login_required
def make_admin():
    if not current_user.is_admin:
        flash('you do not have permission to do that', 'success')
        return redirect(url_for('main.home'))

    users = User.get_all_users()
    return render_template('users/make_admin.html', users=users)
