from flask_wtf import FlaskForm 
from wtforms import StringField 
from wtforms.validators import DataRequired, Email
from wtforms.fields.html5 import EmailField
from wtforms.fields import PasswordField

class LoginForm(FlaskForm):
    email = EmailField('email', validators=[Email(), DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])