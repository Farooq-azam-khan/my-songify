
from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from config import Config

# configuration
db = SQLAlchemy()
migrate = Migrate()
login = LoginManager()

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

def register_blueprints(app):
    from app.users import users_blueprint
    from app.main import main_blueprint 

    app.register_blueprint(users_blueprint)
    app.register_blueprint(main_blueprint)
