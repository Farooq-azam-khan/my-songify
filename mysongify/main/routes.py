from flask import (Blueprint, render_template)

from mysongify.users.models import User 

main = Blueprint('main', __name__)


@main.route('/')
def home():
    return render_template('home.html') 

@main.route('/')
def search():
    return '<h1>search</h1> '