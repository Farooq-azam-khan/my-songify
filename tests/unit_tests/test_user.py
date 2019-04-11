from mysongify.users.models import User

def test_s():
    user = User(1, 'test1@gmail.com', 'test1')
    assert user.id == 1
    assert user.email == 'test1@gmail.com'
    assert user.password == 'test1'
    assert user.playlists == []
    assert user.followers == 0
    assert user.is_admin == True    
    assert user.is_dj == False

def test_get_users():
    assert len(User.get_users()) == 10