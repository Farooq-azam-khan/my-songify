from flask import Flask 
from flask_login import LoginManager

app = Flask(__name__)

# secret key for wtforms
'''
    got secret key as follows: 
    >>> import secrets
    >>> secrets.token_hex(16)
'''
app.config['SECRET_KEY'] = 'cb9a1a435513a10cd7a231d697edd7d1'

login_manager = LoginManager(app)
 
from mysongify.main.routes import main 
from mysongify.users.routes import users
from mysongify.songs.routes import songs
from mysongify.playlists.routes import playlists

app.register_blueprint(main)
app.register_blueprint(users)
app.register_blueprint(songs)
app.register_blueprint(playlists)