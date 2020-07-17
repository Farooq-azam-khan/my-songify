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
    return <div>
        {isLoading ? <div className="fixed w-screen h-screen flex items-center justify-center">
            <div className=" px-24 py-10 bg-teal-900 rounded-lg shadow-xl"><h1 className="text-white text-4xl">Loading...</h1> </div> </div> :
            <div className="mt-10">
                <h1 className="text-4xl text-teal-100 font-bold text-center">Recent Songs</h1>
            </div>}
    </div>
}