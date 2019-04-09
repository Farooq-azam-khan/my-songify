from mysongify.users.models import User

def test_new_user(new_user):
    # can be found in conftest.py
    assert new_user.id == 1
    assert new_user.username == 'test1'