from app import app
from app.models import db, User

# add a context when the `flask shell` command is run
@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User }

