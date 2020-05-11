from flask_wtf import FlaskForm 
from wtforms import StringField 
from wtforms.validators import DataRequired, Email, EqualTo
from wtforms.fields.html5 import EmailField
from wtforms.fields import PasswordField

class RegisterForm(FlaskForm):
    firstname = StringField('First Name', validators=[DataRequired()])
    middlename = StringField('Middle Name', validators=[])
    lastname = StringField('Last Name', validators=[DataRequired()])

    email = EmailField('email', validators=[Email(), DataRequired(), EqualTo('confirm_email')])
    confirm_email = EmailField('email', validators=[Email(), DataRequired(), EqualTo('confirm_email')])

    password = PasswordField('Confimr Password', validators=[DataRequired(), EqualTo('confirm_password')])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(),  EqualTo('password')])
