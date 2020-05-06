from app.users.models import User
from app import db 

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



    
def test_users_route(app):
    client = app.test_client()
    resp = client.get('/users/')
    assert resp.status_code == 200

