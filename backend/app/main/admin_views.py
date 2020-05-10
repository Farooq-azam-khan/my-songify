from flask_admin.contrib.sqla import ModelView
from flask_admin.form import SecureForm
from flask_login import current_user

# from app import admin, db 

class UserAdminModel(ModelView):
    form_base_class = SecureForm
    can_delete = True
    page_size = 50 
    column_editable_list = ['firstname', 'middlename', 'lastname']
    can_export = True

    # def is_accessible(self):
    #     return current_user.is_authenticated

class SongAdminModel(ModelView):
    form_base_class = SecureForm
    can_delete = True
    page_size = 50 
    column_editable_list = ['name', 'genre']
    can_export = True
    

   

class GenreAdminModel(ModelView):
    form_base_class = SecureForm
    create_modal = True
    edit_modal = True
    can_delete = True
    page_size = 50 
    can_export = True

