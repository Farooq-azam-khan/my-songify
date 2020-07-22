import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import * as Icons from 'heroicons-react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginAction, logoutAction } from '../store/actions/userActions';

const Songs = ({ loginAction }) => {
    const [isLoading, setLoading] = useState(true);
    const [songFormModal, setSongFormModal] = useState(true);
    const [songs, setSongs] = useState({});

    const handleSongFormModal = () => {
        setSongFormModal(!songFormModal);
    }

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
    return <>
        {isLoading ?
            (<div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-900 h-full">
                <h1 className="text-white text-2xl bg-teal-900 px-10 py-8 rounded-lg shadow-lg">Loading Songs...</h1>
            </div>)
            :
            Object.keys(songs).length === 0 ? <>
                <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-900 h-full">
                    <span className="flex flex-col items-center justify-center space-y-10 px-24 py-32 bg-blue-900 rounded-lg shadow-lg">
                        <div>
                            <button onClick={handleSongFormModal} className="inline-flex items-center space-x-3 bg-orange-700 text-lg font-semibold rounded-full shadow-lg px-4 py-3 text-white">
                                <span><Icons.PlusOutline className="w-8 h-8 text-gray-300" /></span><span>Songs</span>
                            </button>
                        </div>
                        <div><p className="text-white text-xl ">No songs in database, add some</p></div>
                    </span>
                </div>
            </> : <><div className="flex flex-col h-full w-full mt-10 pb-24 bg-gray-900 overflow-auto">
                <div className="flex items-center justify-between px-10 w-full">
                    <div className="w-2/3 h-full flex items-center justify-center">
                        <h1 className="text-4xl text-teal-100 font-bold text-center">Recent Songs</h1>
                    </div>
                    <div className="w-1/3 h-full flex items-center justify-end">
                        <button onClick={handleSongFormModal} className="inline-flex items-center space-x-1 bg-orange-700 text-md font-semibold rounded-full shadow-md px-3 py-2 text-white">
                            <span><Icons.PlusOutline className="w-5 h-5 text-gray-300" /></span><span>Songs</span>
                        </button>
                    </div>
                </div>
                {Object.keys(songs).map(genre => <SongGenre key={genre} name={genre} songs={songs[genre]} />)}
            </div></>

        }

        {/* song form modal */}
        {songFormModal && <SongFormModalComponent loginAction={loginAction} close={setSongFormModal} />}
    </>
}

const SongFormModalComponent = ({ loginAction, close }) => {
    const [getGenre, setGenre] = useState([])
    const [loadingGenre, setLoadingGenre] = useState(true)
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        fetch('/api/v1/genere/all')
            .then(resp => resp.json())
            .then(data => {
                console.log('data: ', data)
                setGenre(data);
                setLoadingGenre(false);
            })
    }, [])
    const onSubmit = song_data => {
        console.log(song_data)
        fetch('/api/v1/songs/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(song_data)
        }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    close(false)
                } else {
                    if (!data.is_authenticated) {
                        logoutAction()
                    }
                }
            })
    }

    return (<div className="fixed inset-0 z-30 flex items-center justify-center w-full h-full">
        <button onClick={() => close(false)}
            className="cursor-default fixed w-full h-full inset-0 bg-black opacity-50" />
        <form onSubmit={handleSubmit(onSubmit)}
            className="relative z-40 flex flex-col space-y-10 items-start justify-center p-10 shadow-xl rounded-lg bg-orange-700"
        >
            {loadingGenre ? <div className="text-white text-md">Loading Form</div> : <>
                <div className="space-x-1">
                    <input ref={register({ required: true })} name="name" type="text" placeholder="Song name" className="bg-gray-100 rounded-lg px-10 py-3" />
                    {errors.name && <div className="bg-red-200 text-gray-900 w-full px-3 py-2 rounded-lg">Name of the song is required.</div>}
                </div>
                <input ref={register} name="cover_image" type="text" placeholder="Song Cover Image URL" className="bg-gray-100 rounded-lg px-10 py-3" />
                <input ref={register} name="mp3_file" type="text" placeholder="Mp3 File URL" className="bg-gray-100 rounded-lg px-10 py-3" />
                <select ref={register} name="genre" type="text" placeholder="Song Genre" className="bg-gray-100 rounded-lg px-8 py-3">
                    {getGenre.map(el => <option key={el.pk} value={el.pk}>{el.name}</option>)}
                </select>
                <button type="submit" className="inline-flex items-center justify-between space-x-1 text-white bg-blue-800 hover:bg-blue-700 rounded-lg shadow-md px-4 py-3"><span><Icons.Plus className="w-5 h-5" /></span><span>Song</span></button>
            </>}
        </form>
    </div>)
}

const SongGenre = ({ name, songs }) => {
    return <div className="flex flex-col w-full md:max-w-4xl mx-auto items-center justify-center mt-24 sm:px-2 py-2 sm:py-5 sm:rounded-lg bg-blue-900 shadow-xl">
        <div className="-my-6 relative z-10">
            <span className="px-5 rounded-lg shadow-xl py-3 text-white font-semibold text-xl sm:text-2xl bg-indigo-700 tracking-wider uppercase">{name}</span>
        </div>
        <div className="flex items-center justify-around space-x-5 py-2 px-0 mt-10 h-64 w-full overflow-x-auto overflow-y-hidden">
            {songs.map(song => <SongCard key={song.pk} {...song} />)}
        </div>
    </div>
}

const SongCard = ({ name, cover_image }) => {
    return <div className="flex flex-col items-center justify-around bg-indigo-700 rounded-lg shadow-xl max-w-2xl text-white">
        <span className="w-32 h-32 overflow-hidden"><img className="w-full h-full object-cover" src={cover_image} /></span>
        <Link to="#" className="w-full text-center font-semibold text-lg text-gray-100 hover:text-gray-200 px-3 py-1">{name}</Link>
    </div>
}

Songs.propTypes = {
    loginAction: PropTypes.func.isRequired
}
export default connect(null, { loginAction })(Songs); 