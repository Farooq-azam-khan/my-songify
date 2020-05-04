from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/test')
def home():
    return jsonify({'test': 'test'})
