#TODO: implement Blueprint

from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from config import Config

app = Flask(__name__)

# configuration
app.config.from_object(Config)
# database connection
db = SQLAlchemy(app)
# migration connection
migrate = Migrate(app, db)
# login manager
login = LoginManager(app)

from app import routes, models 
