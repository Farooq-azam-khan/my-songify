from mysongify.users.models import User
import json 

def test_s():
    user = User('test1@gmail.com', 'test1')
    assert user.email == 'test1@gmail.com'
    assert user.password == 'test1'
    assert user.playlists == []
    assert user.followers == 0
    assert user.is_admin == True    
    assert user.is_dj == False

def test_get_users():
    assert len(User.get_users()) == 10

def test_save_new_user():
    user = User('testj@yahoo.ca', 'testj')
    user.save()
    users = []
    found_user = None


    # get the user 
    with open('mysongify/data/users.json') as f:
            users_dict = json.load(f)
            users = users_dict['users'] #list
    # assert False
    for i_user in users:
        if i_user['id'] == user.id:
            found_user = i_user

    # # check if user exists
    if found_user == None:
        assert False
    else:
        assert found_user['id'] == user.id