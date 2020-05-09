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

def create_user():
    user = User(email='testing@id.com', firstname='fn', lastname='ln')
    user.set_password('password')
    db.session.add(user)
    db.session.commit()
    return user 

def test_user_login_correct_email_and_password(app):
    user = create_user()
    client = app.test_client()
    with client: 
        resp = client.post('/users/login', data=dict(
            email='testing@id.com',
            password='password', 
            remember=False
        ))
        assert resp.status_code == 200 
        response_json = json.loads(resp.data)
        assert response_json['success'] == True 
        assert len(response_json['errors']) == 0
        assert response_json['message'] == 'Logged in successfully.'

        assert current_user.is_anonymous == False  
        assert current_user.email == 'testing@id.com'
        assert current_user.pk == 1

def test_user_login_route_has_valid_input_but_does_not_exists_in_db(app):
    with app.test_client() as client:
        resp = client.post('/users/login', data=dict(
                                                email='test@gmail.com',
                                                password='asdfasldkfja'
            ))
        json_resp = json.loads(resp.data)
        assert json_resp['success'] == False         
        assert json_resp['message'] == 'Could not login'
        assert len(json_resp['errors']) == 1
        assert json_resp['errors'][0] == 'Invalid email or password'

        

def test_user_login_route_has_invalid_input(app):
    with app.test_client() as client: 
        resp = client.post('/users/login', data=dict())
        json_resp = json.loads(resp.data)
        assert json_resp['success'] == False
        assert json_resp['message'] == 'Invalid form input'
        assert len(json_resp['errors']) == 0


def test_user_logout_if_user_is_logged_in(app):
    user = create_user() 
    client = app.test_client()
    with client: 
        resp = client.post('/users/login', data=dict(
            email='testing@id.com', password='password')
        )
        resp = client.post('/users/logout', data=dict())
        # print('>>>>>>>>rest', resp, resp.data, resp.status_code)
        assert resp.status_code == 200 
        resp_json = json.loads(resp.data)
        assert resp_json['success'] == True 
        assert resp_json['message'] == 'You were logged out successfully'

        print(current_user)
        assert current_user.is_anonymous  == True
        assert current_user.get_id() == None

def test_user_logout_if_user_is_not_logged_in(app):
    client = app.test_client()
    resp = client.post('/users/logout', data=dict())
    # print('>>>>>>>>rest', resp, resp.data, resp.status_code)
    # assert 1 == 2
    assert resp.status_code == 401

def test_users_route(app):
    client = app.test_client()
    resp = client.get('/users/')
    assert resp.status_code == 200

# TODO: implement tests for register route 