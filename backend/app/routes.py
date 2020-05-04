from app import app
from flask import jsonify, redirect, url_for
from flask_login import logout_user


@app.route('/')
def index():
    return jsonify({'index': 'index'})


# logout
@app.route('/logout')
def logout():
    logout_user()
    # maybe just need to `return `
    return redirect(url_for('index'))

@app.route('/test')
def test():
    return jsonify({'test': 'test' })
