from app.users.models import User
from app import db 
import json
from flask_login import current_user 

def test_user_id(app):
    user = User(email='testing@id.com', firstname='fn', lastname='ln')
    user.set_password('password')

    db.session.add(user)

    db.session.commit()

    query_user = User.query.first()

    assert int(query_user.pk) == 1
    assert query_user.email == 'testing@id.com'
    assert query_user.check_password('password') == True

    assert query_user.password != "password"
    assert query_user.check_password("not test") == False

    assert query_user.is_admin == False


def test_user_login_correct_email_and_password(app):
    user = User(email='testing@id.com', firstname='fn', lastname='ln')
    user.set_password('password')
    db.session.add(user)
    db.session.commit()

    client = app.test_client()
    resp = client.post('/users/login', data=dict(
        email='testing@id.com',
        password='password', 
        remember=False
    ))
    assert resp.status_code == 200 
    
    response_json = json.loads(resp.data)
    # print('=>>>>>>>>>>>>>>response', response_json['success'])
    assert response_json['success'] == True 
    assert len(response_json['errors']) == 0
    assert response_json['message'] == 'Logged in successfully.'

    print('>>>>>>>', current_user)
    assert current_user != None 


    assert 1 == 2
    
    
def test_users_route(app):
    client = app.test_client()
    resp = client.get('/users/')
    assert resp.status_code == 200

