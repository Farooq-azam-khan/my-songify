import os

from config import Config

BASEDIR = os.path.abspath(os.path.dirname(__file__))

class TestConfig(Config):
    TESTING=True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASEDIR, 'app_test.db')

