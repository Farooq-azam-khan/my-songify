from mysongify.users.models import User

def test_new_song():
    user = User(1, 'test1@gmail.com', 'test1')
    assert user.id == 1
    assert user.email == 'test1@gmail.com'
    assert user.password == 'test1'