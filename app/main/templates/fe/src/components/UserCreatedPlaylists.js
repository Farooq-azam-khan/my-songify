import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import * as Icons from 'heroicons-react'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logoutAction } from '../store/actions/userActions';


const UserCreatedPlaylists = ({ logoutAction }) => {

    // public, private, unlisted
    const [statuses, setStatuses] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);

    // playlists created by user
    const [userPlaylists, setUserPlaylists] = useState({});
    const [loadingUserPlaylist, setLoadingUserPlaylist] = useState(true);
    const [userPlaylistModal, setUserPlaylistModal] = useState(false);

    useEffect(() => {
        // laod display status
        fetch('/api/v1/display-status')
            .then(resp => resp.json())
            .then(data => {
                setStatuses(data);
                setLoadingStatus(false)
            })

        // get user playlists
        fetch('/api/v1/user/playlists')
            .then(resp => resp.json())
            .then(data => {
                setUserPlaylists(data)
                setLoadingUserPlaylist(false)
            })
    }, [])

    const handleUserPlaylistModal = () => {

        setUserPlaylistModal(!userPlaylistModal);
    }
    return (<section className="bg-gray-800 rounded-lg shadow-lg max-w-3xl mt-10">
        {loadingUserPlaylist ?
            <><h2>Loading...</h2></> :
            <>
                {userPlaylistModal && <CreatePlaylistModal logoutAction={logoutAction} close={setUserPlaylistModal} statuses={statuses} loadingStatus={loadingStatus} />}
                {Object.keys(userPlaylists).length === 0 ? <div className="flex flex-col items-center space-y-5 mt-10 py-10 px-12 rounded-lg shadow-lg">
                    <button onClick={handleUserPlaylistModal} className="flex items-center justify-center px-3 py-2 max-w-xl space-x-3 rounded-lg shadow-md text-white bg-teal-800 hover:bg-teal-700">
                        <span className="text-white"><Icons.Plus /></span>
                        <span>Playlist</span></button>
                    <p className="text-white font-semibold tracking-wide">You do not have any playlists created, create one.</p>
                </div> :
                    <div className="flex flex-col w-full md:max-w-4xl mx-auto items-center justify-center mt-24 sm:px-2 py-2 sm:py-5 sm:rounded-lg bg-gray-800 shadow-xl overflow-auto">
                        <div className="flex items-center justify-between w-full px-3">
                            <span className="w-full text-center font-bold text-gray-100 uppercase tracking-wider text-xl">Your Playlists</span>
                            <button onClick={handleUserPlaylistModal} className="inline-flex items-center justify-between bg-indigo-500 text-white text-sm rounded-full shadow-md px-2 py-1"><span><Icons.PlusOutline className="text-gray-400 w-4 h-4" /></span> <span>Playlist</span></button>
                        </div>
                        <div className="flex items-center justify-around space-x-3 py-2 px-0 w-full h-64 mt-5 overflow-x-auto overflow-y-hidden">
                            {Object.keys(userPlaylists).map(el => <PlaylistCard key={el} name={el} cover_image={userPlaylists[el].cover_image} />)}
                        </div>
                    </div>
                }
            </>
        }
    </section>

    )
}
const PlaylistCard = ({ name, cover_image, display_status = "private" }) => {
    return (<div className="text-white rounded-lg shadow-md flex flex-col overflow-hidden w-64 h-full bg-red-700">
        <div className="overflow-hidden">
            <img className="w-64 h-64 object-cover object-center" src={cover_image} alt={name} />
        </div>
        <div className="text-white bg-blue-800 text-md uppercase tracking-wider w-full text-center truncate px-3 py-2">{name}</div>
    </div>)
}

const CreatePlaylistModal = ({ close, statuses, loadingStatus, logoutAction }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log({ errors })

        console.log(data)
        const send_data = { ...data, 'is_playlist': 'playlist' }
        fetch('/api/v1/user/song_collection/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(send_data)
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    close(false)
                } else {
                    if (data.is_authenticated) {
                        // send logout action 
                        logoutAction()
                    }
                }
            })
    }

    return (<div className="fixed z-20 inset-0 w-full h-full flex flex-col items-center justify-center">
        <button onClick={() => close(false)}
            className="cursor-default fixed w-full h-full inset-0 bg-black opacity-50" />
        {/* // TODO: Fetch songs */}
        <form onSubmit={handleSubmit(onSubmit)} className="display-playlist relative z-30 flex flex-col space-y-10 items-start justify-center p-10 shadow-xl rounded-lg bg-blue-800">
            <input name="name" ref={register({ required: true })} placeholder="Playlist Name" className="px-4 py-3 rounded-lg" />
            <input name="cover_image" ref={register} placeholder="Cover Image URL" className="px-4 py-3 w-full rounded-lg" />
            <div className="flex items-center justify-around space-x-5">
                {!loadingStatus ? <>
                    {statuses.map(status => <div key={status.pk}>
                        <label htmlFor={`display-${status.pk}`}
                            className="bg-gray-100 px-5 py-5 rounded-lg shadow-md border-none cursor-pointer hover:bg-blue-900 hover:text-white hover:shadow-xl">
                            {status.status}
                        </label>
                        <input id={`display-${status.pk}`} type="radio"
                            name="display-status" value={status.pk}
                            className=""
                            ref={register} />
                    </div>)}

                </> : <div className="w-full px-6 py-3  rounded-md"><p className="text-gray-100 text-md tracking-wide">Loading Display statuses...</p></div>}
            </div>
            <button type="submit" className="inline-flex items-center justify-between space-x-3 mt-2 bg-teal-700 text-gray-100 hover:bg-teal-100 hover:text-black px-4 py-3 rounded-lg shadow-lg hover:shadow-xl uppercase text-md tracking-wider">
                <span><Icons.Plus /></span> <span>Playlist</span>
            </button>
        </form>
    </div>)
}

UserCreatedPlaylists.propTypes = {
    logoutAction: PropTypes.func.isRequired
}

const mapStateToProps = (_) => ({})
export default connect(mapStateToProps, { logoutAction })(UserCreatedPlaylists);

