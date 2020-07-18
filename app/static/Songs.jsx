const { useState, useEffect } = React;

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
            <div className="flex flex-col h-full w-full pb-24 bg-gray-900 overflow-auto">
                {console.log(songs)}
                <h1 className="text-4xl text-teal-100 font-bold text-center">Recent Songs</h1>
                {Object.keys(songs).map(genre => <SongGenre name={genre} songs={songs[genre]} />)}
            </div>
        }
    </React.Fragment>
}

const SongGenre = ({ name, songs }) => {
    return <div className="mt-24 px-8 py-5 sm:rounded-lg flex flex-col items-center justify-center mx-auto bg-teal-900 shadow-xl max-w-xl">
        <div className="-my-5 relative z-10 "><span className="px-5 rounded-lg shadow-xl py-3 text-white font-semibold text-2xl bg-teal-800">{name}</span></div>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 py-2 px-0 mt-10 h-64  overflow-auto ">
            {songs.map(song => <SongCard {...song} />)}
        </div>
    </div>
}

const SongCard = ({ name, cover_image }) => {
    return <div className="flex flex-col items-center justify-center bg-teal-600 rounded-lg shadow-xl px-10 py-10 text-white">
        <span className="w-24 h-24"><img src={cover_image} /></span>
        <span>{name}</span>
    </div>
}