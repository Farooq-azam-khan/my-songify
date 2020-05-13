import json 

import pytest
from flask_login import login_user 

from app.songs.models import Song, Genre, UserSongRelationship
from app.users.models import User
from app.song_collection.models import SongCollection, Playlist, Album, DisplayStatus
from app import db


def test_get_all_public_playlists(app):
    # pytest.skip()
    create__playlist() 

    with app.test_client() as client: 
        # login first 
        resp = client.get('/api/v1/user/playlists')
        data = resp.get_json() 