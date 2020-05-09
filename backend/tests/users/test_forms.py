from app.users.models import User
from app import db 
import json
from app.users.forms.login_form import LoginForm 
from app.users.forms.register_form import RegisterForm 

# TEST login form

def test_login_form_as_invalid_email_and_password(app):
    with app.test_client() as client:
        f = LoginForm(email='', password='')
        assert f.validate() == False

def test_login_form_as_invalid_email(app):
    with app.test_client() as client:
        f = LoginForm(email='tst@gmail', password='asdfsadfa')
        assert f.validate() == False

def test_login_form_as_invalid_password(app):
    with app.test_client() as client:
        f = LoginForm(email='test@gmail.com')
        assert f.validate() == False

def test_login_form_as_valid(app):
    with app.test_client() as client:
        f = LoginForm(email='test@gmail.com', password="abcdef")
        assert f.validate() == True


# TEST register forms 
def test_all_inputs_when_valid(app):
    with app.test_client() as client:
        user_register = {
            'firstname': 'john', 
            'middlename': 'doe', 
            'lastname': 'letftennant', 
            'email': 'test@test.com',
            'confirm_email': 'test@test.com',
            'password': 'a-random-password-to-test',
            'confirm_password':'a-random-password-to-test',
        }

        f = RegisterForm(data=user_register)
        assert f.validate() == True

def test_invalid_email(app):
    with app.test_client() as client:
        user_register = {
            'firstname': 'john', 
            'middlename': 'doe', 
            'lastname': 'letftennant', 
            'email': 'testemail',
            'confirm_email': 'testemail',
            'password': 'a-random-password-to-test',
            'confirm_password':'a-random-password-to-test',
        }

        f = RegisterForm(data=user_register)
        is_valid = f.validate()
        assert f.errors['email'][0] == 'Invalid email address.'
        assert f.errors['confirm_email'][0] == 'Invalid email address.'
        assert is_valid == False

def test_email_not_equal(app):
    with app.test_client() as client:
        user_register = {
            'firstname': 'john', 
            'middlename': 'doe', 
            'lastname': 'letftennant', 
            'email': 'testemail@test.com',
            'confirm_email': 'abc@def.com',
            'password': 'a-random-password-to-test',
            'confirm_password':'a-random-password-to-test',
        }

        f = RegisterForm(data=user_register)
        is_valid = f.validate()
        assert f.errors['email'][0] == 'Field must be equal to confirm_email.'
        assert is_valid == False

# TODO: verify for password, required frields, and non_required fileds