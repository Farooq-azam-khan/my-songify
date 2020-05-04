from app import create_app 
from app.models import db, User
from config import Config

app = create_app(Config)

# add a context when the `flask shell` command is run
@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User }

