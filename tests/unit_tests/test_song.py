from mysongify.users.models import User

def test_new_song():
    user = User(1, 'test1', 'test1@gmail.com', 'test1')
    assert user.id == 1
    assert user.username == 'test1'