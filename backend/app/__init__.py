
from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_admin import Admin

from app.main.admin_views import UserAdminModel, SongAdminModel, GenreAdminModel

from config import Config

# configuration
db = SQLAlchemy()
migrate = Migrate()
login = LoginManager()
admin = Admin(name='my-songify', template_mode='bootstrap3')

# application factory
def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    initalize_extensions(app)

    register_blueprints(app)

  

    return app

def initalize_extensions(app):
    db.init_app(app)
    migrate.init_app(app, db)
    login.init_app(app)
    admin.init_app(app)

    add_admin_views(admin, db)


def add_admin_views(admin, db):
    from app.users.models import User
    from app.songs.models import Song, Genre
    admin.add_view(UserAdminModel(User, db.session))
    admin.add_view(SongAdminModel(Song, db.session))
    admin.add_view(GenreAdminModel(Genre, db.session))

def register_blueprints(app):
    from app.users import users_blueprint
    from app.main import main_blueprint 
    from app.songs import songs_blueprint
    from app.song_collection import song_collection_blueprint

    app.register_blueprint(users_blueprint)
    app.register_blueprint(main_blueprint)
    app.register_blueprint(songs_blueprint)
    app.register_blueprint(song_collection_blueprint)
