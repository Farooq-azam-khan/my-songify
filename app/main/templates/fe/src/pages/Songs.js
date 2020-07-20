import React, { useState, useEffect } from 'react';

const Songs = () => {
    const [isLoading, setLoading] = useState(true);
    const [songs, setSongs] = useState({});

    useEffect(() => {
        fetch('/songs/list')
            .then((res) => res.json())
            .then(resp => {
                if (resp.success) {
                    setSongs(resp.data)
                    setLoading(false)
                }
            })

    }, [])
    return <React.Fragment>
        {isLoading ?
            <div className="px-24 py-10 bg-teal-900 rounded-lg shadow-xl">
                <h1 className="text-white text-4xl">Loading...</h1>
            </div>
            :
            Object.keys(songs).length === 0 ? <div className="px-10 py-5 sm:px-24 sm:py-10 bg-teal-900 rounded-lg shadow-xl">
                <h1 className="text-white text-lg sm:text-3xl md:text-4xl">No songs in database, add some</h1>
            </div> : <div className="flex flex-col h-full w-full pb-24 bg-gray-900 overflow-auto">
                    <h1 className="text-4xl text-teal-100 font-bold text-center">Recent Songs</h1>
                    {Object.keys(songs).map(genre => <SongGenre key={genre} name={genre} songs={songs[genre]} />)}
                </div>


        }
    </React.Fragment>
}

const SongGenre = ({ name, songs }) => {
    return <div className="mt-24 px-2 sm:px-8 py-5 sm:rounded-lg flex flex-col items-center justify-center mx-auto bg-teal-900 shadow-xl max-w-xl ">
        <div className="-my-8 relative z-10">
            <span className="px-5 rounded-lg shadow-xl py-3 text-white font-semibold text-xl sm:text-2xl bg-teal-800">{name}</span>
        </div>
        <div className="flex items-center justify-around space-x-5 py-2 px-0 mt-10 h-64 w-full overflow-auto">
            {songs.map(song => <SongCard key={song.pk} {...song} />)}
        </div>
    </div>
}

const SongCard = ({ name, cover_image }) => {
    return <div className="flex flex-col items-center justify-around bg-teal-700 rounded-lg shadow-xl max-w-2xl text-white">
        <span className="w-32 h-32 overflow-hidden"><img className="w-full h-full object-cover" src={cover_image} /></span>
        <span className="font-semibold text-lg text-gray-100 hover:text-teal-200 px-3 py-1">{name}</span>
    </div>
}

export default Songs; 