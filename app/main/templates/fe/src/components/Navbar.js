import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import * as Icons from 'heroicons-react';

import { logoutAction } from '../store/actions/userActions';

const Navbar = (props) => {
    const { user, logoutAction } = props;
    const [mobileMenu, setMobileMenu] = useState(true);
    const [showActionDropdown, setShowActionDropdown] = useState(false);

    const handleLogout = () => {
        logoutAction();
    }

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setShowActionDropdown(false)
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [])

    return (<nav className="relative z-20 flex items-center justify-between shadow-xl w-full h-full sm:py-2 sm:px-3 bg-teal-900 text-white">
        {/* mobile screen havbar */}
        {/* <MobileNavbar {...props} /> */}
        {/* small screen and above navbar */}
        <NavLink to="/" className="w-3/12 px-2 py-2 text-sm rounded-lg hover:bg-teal-800">my-songify</NavLink>
        <div className="w-9/12 hidden sm:flex justify-between">
            <div className="relative flex items-center justify-between space-x-3">
                <a href="/#about" className="px-3 py-2 rounded-lg hover:bg-teal-800">About</a>
                <NavLink to='/songs' activeClassName="bg-teal-800 shadow-2xl" className="px-3 py-2 rounded-lg hover:bg-teal-800">Songs</NavLink>
                <div className="relative">
                    <button onClick={() => setShowActionDropdown(true)} className="relative inline-flex items-center justify-between px-3 py-2 rounded-lg hover:bg-teal-800"><span>Actions</span><span><Icons.ChevronDown className="w-6 h-6" /></span>
                    </button>
                    {showActionDropdown && <>
                        <button onClick={() => setShowActionDropdown(false)} className="fixed inset-0 z-10 h-full w-full" tabIndex="-1" />
                        <div className="absolute top-0 left-0 mt-12 z-30 flex flex-col space-y-2 bg-gray-800 w-64 overflow-auto rounded-lg shadow-xl py-2">
                            <Link to="#" className="px-3 py-1 hover:bg-gray-700">
                                Upload Song
                        </Link>
                            <Link to="#" className="px-3 py-1 hover:bg-gray-700">
                                Create Playlist
                        </Link>
                            <Link to="#" className="px-3 py-1 hover:bg-gray-700">
                                Create Album
                        </Link>
                        </div>
                    </>}
                </div>
            </div>
            <div className="flex items-center justify-between space-x-3">
                {user.loggedIn ? <>
                    <NavLink to="profile" activeClassName="bg-teal-800 shadow-2xl" className="text-gray-200 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg shadow-xl">Profile</NavLink>
                    <button onClick={handleLogout} className="hover:bg-teal-800 text-gray-500 px-3 py-2 rounded-lg">Logout</button>
                </>
                    : <>
                        <NavLink to="/login" activeClassName="bg-teal-800 shadow-2xl" className="hover:bg-teal-800 px-3 py-2  rounded-lg">Login</NavLink>
                        <NavLink to="/register" activeClassName="bg-teal-800 shadow-2xl" className="hover:bg-teal-800 px-3 py-2 rounded-lg">Register</NavLink>
                    </>
                }
            </div>
        </div>
        <div className="block sm:hidden px-2">
            <button onClick={() => setMobileMenu(!mobileMenu)} className=""><Icons.MenuAlt4 className="w-8 h-8" /></button>
        </div>
        {mobileMenu && <>
            <button onClick={() => setMobileMenu(false)} className="fixed inset-0 z-10 h-full w-full" tabIndex="-1" />
            <div className="absolute z-20 top-0 mt-10 flex flex-col sm:hidden bg-teal-800 text-white w-full">
                <div className="border-b-1 border-gray-900 flex flex-col">
                    <a href="/#about" className="px-3 py-2 rounded-lg hover:bg-teal-700">About</a>

                    <Link to="/songs" className="bg-teal-60 px-3">Songs</Link>
                </div>
                <div className="mt-5">
                    <span className="text-gray-400 text-md px-3">Actions</span>
                    <div className="w-full flex flex-col space-y-1 pb-2">
                        <span className="px-3">Upload Song</span>
                        <span className="px-3">Create Playlist</span>
                        <span className="px-3">Create Album</span>
                    </div>
                </div>
                {user.loggedIn ? <>
                    <span className="text-gray-400 text-md px-3">User</span>
                    <div className="w-full flex flex-col space-y-1 pb-2">
                        <NavLink to="profile" className="px-3">Profile</NavLink>
                        <button onClick={handleLogout} className="bg-gray-900 px-3">Logout</button>
                    </div>
                </>
                    : <>
                        <NavLink to="/login" activeClassName="bg-teal-800 shadow-2xl" className="hover:bg-teal-800 px-3 py-2  rounded-lg">Login</NavLink>
                        <NavLink to="/register" activeClassName="bg-teal-800 shadow-2xl" className="hover:bg-teal-800 px-3 py-2 rounded-lg">Register</NavLink>
                    </>
                }
            </div></>}
    </nav >
    )
}

Navbar.propTypes = {
    user: PropTypes.object.isRequired,
    logoutAction: PropTypes.func.isRequired
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps, { logoutAction })(Navbar);