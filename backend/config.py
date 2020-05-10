import os 

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'not a good key'
    WTF_CSRF_SECRET_KEY = 'a random string'
    WTF_CSRF_ENABLED = False # TODO: check if neede
    FLASK_ADMIN_SWATCH = 'cerulean'
