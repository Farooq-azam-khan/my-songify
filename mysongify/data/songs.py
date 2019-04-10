def get_songlist():
	songslist = []
	with open('songs.json') as f:
		data = json.load(f)
		songslist.extend(data[0]['songs'])
		songslist.extend(data[1]['songs'])
	return songslist
    