import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Icons from 'heroicons-react'

const Profile = ({ user }) => {
    const [statuses, setStatuses] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(true)

    const [userPlaylists, setUserPlaylists] = useState({});
    const [loadingUserPlaylist, setLoadingUserPlaylist] = useState(true);

    const [userPlaylistModal, setUserPlaylistModal] = useState(false);


    const handleUserPlaylistModal = () => {

        setUserPlaylistModal(!userPlaylistModal);
    }

    const [userLikePlaylists, setUserLikedPlaylists] = useState([]);


    const [userAlbums, setUserAlbums] = useState([]);
    const [userLikeAlbums, setUserLikedAlbums] = useState([]);

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


    if (!user.loggedIn) {
        return <div><h1 className="font-bold text-orange-500 text-2xl">You must be logged in.</h1></div>
    }
    return (
        <main className="max-w-4xl h-full py-10">
            <div>
                <h1 className="text-2xl">
                    <span className="text-orange-500">Lets make something happen </span>
                    <span className="text-white uppercase font-bold">{user.firstname}, {user.lastname}</span>
                </h1>
            </div>
            {/* user playlists */}
            <CollectionDisplay collectionTitle="Your Created Playlists" loadingCollection={loadingUserPlaylist} onClick={handleUserPlaylistModal} collection={userPlaylists} nullMessage="You do not have any playlists, add some.">
                {/* create playlist form */}
                {userPlaylistModal && <CreatePlaylistModal statuses={statuses} loadingStatus={loadingStatus} close={setUserPlaylistModal} />}
            </CollectionDisplay>

            {/* user liked playlists */}
            <CollectionDisplay collection={userLikePlaylists} nullMessage="You have not liked any playlists." />

            {/* user liked albums */}
            <CollectionDisplay isPlaylist={false} collection={userLikeAlbums} nullMessage="You have not liked any albums." />

            {/* user albums */}
            <CollectionDisplay isPlaylist={false} collection={userAlbums} nullMessage="You have not created any albums." />

        </main>
    )
}

const CreatePlaylistModal = ({ close, statuses, loadingStatus }) => {
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
        }).then(resp => resp.json()).then(data => {
            console.log(data)
            if (data.success) {
                close(false)
            }
        })
    }

    return (<div className="fixed z-20 inset-0 w-full h-full flex flex-col items-center justify-center ">
        <button onClick={() => close(false)}
            // TODO: Fetch songs
            className="cursor-default fixed w-full h-full inset-0 bg-black opacity-50" />
        <form onSubmit={handleSubmit(onSubmit)} className=".display-playlist relative z-30 flex flex-col space-y-10 items-start justify-center p-10 shadow-xl rounded-lg bg-blue-800">
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


// needs serious refactoring
const CollectionDisplay = ({ collection, collectionTitle = "", nullMessage, isPlaylist = true, onClick, children, loadingCollection = false }) => {
    return <div className="bg-gray-800 rounded-lg shadow-lg max-w-3xl mt-10">
        {loadingCollection ? <div className="">
            <h2 className="text-white bg-teal-800 text-xl">Loading...</h2></div> : <>
                {children}
                {Object.keys(collection).length === 0 ? <div className="flex flex-col items-center space-y-5 mt-10 py-10 px-12 rounded-lg shadow-lg">
                    <button onClick={onClick} className={`flex items-center justify-center px-3 py-2 max-w-xl space-x-3 rounded-lg shadow-md text-white ${isPlaylist ? 'bg-teal-800 hover:bg-teal-700' : 'bg-blue-800 hover:bg-blue-700'} `}>
                        <span className="text-white"><Icons.Plus /></span>
                        <span>{isPlaylist ? 'Playlist' : 'Album'}</span></button>
                    <p className="text-white font-semibold tracking-wide">{nullMessage}</p>
                </div> :
                    <div className="flex flex-col space-y-3 items-center justify-center py-2 ">
                        <div className="flex items-center justify-between w-full px-3">
                            {collectionTitle !== "" && <span className="w-full text-center font-bold text-orange-500 uppercase tracking-wider text-xl">{collectionTitle}</span>}
                            <button onClick={onClick} className="inline-flex items-center justify-between bg-teal-800 text-white text-xs rounded-full px-2 py-1"><span><Icons.PlusOutline className="text-gray-400 w-4 h-4" /></span> <span>Playlist</span></button>
                        </div>
                        <div className="flex items-center justify-around space-x-3 overflow-scroll overflow-y-hidden w-full h-64">
                            {Object.keys(collection).map(el => <div key={el} class="text-white rounded-lg shadow-md flex flex-col overflow-hidden w-64 h-full bg-red-700">
                                <div className="overflow-hidden">
                                    <img className="w-64 h-64 object-cover object-center" src={collection[el].cover_image} alt={el} />
                                </div>
                                <div className="text-white bg-blue-800 text-md uppercase tracking-wider w-full text-center">{el}</div>
                            </div>)}
                        </div>
                    </div>
                }
            </>}
    </div>
}

Profile.propTypes = {
    user: PropTypes.object.isRequired
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps, {})(Profile); 
