from flask_wtf import FlaskForm 
from wtforms import StringField 
from wtforms.validators import DataRequired, Email
from wtforms.fields.html5 import EmailField

class LoginForm(FlaskForm):
    email = EmailField('email', validators=[Email(), DataRequired()])
    password = StringField('password', validators=[DataRequired()])