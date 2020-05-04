from datetime import datetime

from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

from app import db, login

class User(UserMixin, db.Model):
    pk = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(64), nullable=False)
    middlename = db.Column(db.String(64), nullable=True)
    lastname = db.Column(db.String(64), nullable=False)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(128), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    added_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<User {self.pk} - {self.email}>'
    
    def set_password(self, password):
        self.password = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password, password)

# tells flask what the user 
# information is for the logged in user
@login.user_loader
def load_user(id):
    return User.query.get(int(id))
