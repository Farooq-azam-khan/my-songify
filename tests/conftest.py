import pytest 
# https://www.patricksoftwareblog.com/testing-a-flask-application-using-pytest/
from mysongify.users.models import User 


@pytest.fixture(scope='module')
def new_user():
    user = User(1, 'test1', 'test1@gmail.com', 'test1')
    return user

