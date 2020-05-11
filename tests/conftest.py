import pytest

from app import create_app, db
from app.users.models import User
from test_config import TestConfig


# create a user to test its functionality
@pytest.fixture(scope='module')
def new_user():
    user = User(email='testuser@my_songify.com', firstname='first', lastname='user')
    user.set_password('admin')
    return user

# https://xvrdm.github.io/2017/07/03/testing-flask-sqlalchemy-database-with-pytest/
@pytest.fixture
def app():
    app = create_app(TestConfig)
    with app.app_context():   
        db.create_all()
        yield app  
        db.session.remove() 
        db.drop_all()
