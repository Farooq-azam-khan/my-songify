import React from 'react'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Icons from 'heroicons-react'

import UserCreatedPlaylists from '../components/UserCreatedPlaylists';

const Profile = ({ user }) => {

    // const [userLikePlaylists, setUserLikedPlaylists] = useState([]);
    // const [userAlbums, setUserAlbums] = useState([]);
    // const [userLikeAlbums, setUserLikedAlbums] = useState([]);

    if (!user.loggedIn) {
        return <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-900 h-full">
            <h1 className="text-white text-4xl bg-teal-900 px-24 py-10 rounded-lg shadow-xl">You need to log in</h1>
        </div>
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
            <UserCreatedPlaylists />

            {/* user liked playlists */}
            {/* <CollectionDisplay collection={userLikePlaylists} nullMessage="You have not liked any playlists." /> */}

            {/* user liked albums */}
            {/* <CollectionDisplay isPlaylist={false} collection={userLikeAlbums} nullMessage="You have not liked any albums." /> */}

            {/* user albums */}
            {/* <CollectionDisplay isPlaylist={false} collection={userAlbums} nullMessage="You have not created any albums." /> */}

        </main>
    )
}



// TODO: needs serious refactoring
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
    user: PropTypes.object.isRequired,
}

const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps, {})(Profile); 
