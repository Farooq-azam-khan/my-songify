from app.models import User

def test_user_password():
    user = User(email='user@email.com')
    user.set_password("test")

    assert user.password != "test"
    assert user.check_password("not test") == False
    assert user.check_password("test") == True

def test_user_is_not_admin():
    user = User(email="user@email.com")

    assert user.is_admin == False


