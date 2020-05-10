from flask import jsonify, request
from flask_login import current_user, login_required

from . import songs_blueprint
from app import db 
from .models import Genre, Song, UserSongRelationship 




@songs_blueprint.route('/songs/')
def songs():
    genres = Genre.query.all()
    ret = {}
    for genre in genres:
        genre_name = str(genre.name)
        ret[genre_name] = [song.name for song in Song.query.filter_by(genre=genre.pk).all()]

    return jsonify(ret)

@songs_blueprint.route('/genres/')
def genres():
    return jsonify([genre.name for genre in Genre.query.all()])


@songs_blueprint.route('/songs/like', methods=['POST'])
@login_required
def like_song():
    # current user 
    song = request.form.get('song') # expecting id 
    is_like = request.form.get('is_like') #expecting boolean
    try:
        UserSongRelationship.add_entry(user=current_user.pk, song=song, is_like=is_like)
        return jsonify({'success': True, 'message': 'added like/dislike to database'})
    except:
        return jsonify({'success': False, 'message': 'no update or addition'})



# @songs_blueprint.route('/genres/<genre_id>')
# def genre_list(genre_id):
#     pass 