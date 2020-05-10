from datetime import datetime

from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

from app import db, login, admin

class User(UserMixin, db.Model):
    pk = db.Column(db.Integer, primary_key=True, autoincrement=True)
    firstname = db.Column(db.String(64), nullable=False)
    middlename = db.Column(db.String(64), nullable=True)
    lastname = db.Column(db.String(64), nullable=False)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(128), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    added_at = db.Column(db.DateTime, default=datetime.utcnow)


    def get_id(self):
        return str(self.pk)

    def __repr__(self):
        return f'<User {self.pk} - {self.email}>'
    
    def set_password(self, password):
        self.password = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password, password)

# tells flask what the user 
# information is for the logged in user
@login.user_loader
def load_user(pk):
    return User.query.get(int(pk))


# from flask_admin.contrib.sqla import ModelView
# from flask_admin.form import SecureForm
# from flask_login import current_user

# class UserAdminModel(ModelView):
#     form_base_class = SecureForm
#     can_delete = True
#     page_size = 50 
#     column_editable_list = ['firstname', 'middlename', 'lastname']
#     can_export = True

#     # def is_accessible(self):
#     #     return current_user.is_authenticated




# admin.add_view(UserAdminModel(User, db.session))
