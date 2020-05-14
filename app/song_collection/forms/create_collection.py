from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField 
from wtforms.validators import DataRequired
from flask.ext.wtf import RadioField
from flask.ext.wtf import Required


# TODO: research how to do multi-select
class CreateCollectionForm(FlaskForm):
    pass 
    # name = StringField('email', validators=[Email(), DataRequired()])
    # is_playlist = RadioField('What are you Creating', choices=[('album','Are you creating an Albumn'),
    #                         ('playlist','Are you creating a Playlist')])
    # cover_image = StringField('Cover Image', validators=[DataRequired()])
