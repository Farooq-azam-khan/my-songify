import json 

import pytest
from flask_login import login_user 

from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User

from app import db

def get_all_public_playlists(app):
    with app.test_client() as client: 
        resp = client.get('/api/v1/playlists')
        data = resp.get_json() 

        assert 1 == 2