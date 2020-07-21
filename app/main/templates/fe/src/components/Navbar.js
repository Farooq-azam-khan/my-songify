import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import * as Icons from 'heroicons-react';

import { logoutAction } from '../store/actions/userActions';

const Navbar = (props) => {
    const { user, logoutAction } = props;
    const handleLogout = () => {
        logoutAction();
    }
    return (<nav className="relative z-20 flex items-center justify-between shadow-xl w-full h-full sm:py-2 sm:px-3 bg-teal-900 text-white">
        {/* mobile screen havbar */}
        <MobileNavbar {...props} />
        {/* small screen and above navbar */}
        <div className="hidden sm:flex items-center justify-between space-x-3">
            <Link to="/" className="px-3 py-2 rounded-lg hover:bg-teal-800">my-songify</Link>
            <a href="/#about" className="px-3 py-2 rounded-lg hover:bg-teal-800">About</a>
            <Link to='/songs' className="px-3 py-2 rounded-lg hover:bg-teal-800">Songs</Link>
            <Link to="#" className="px-3 py-2 rounded-lg hover:bg-teal-800">Actions</Link>
        </div>
        <div className="hidden sm:flex items-center justify-between space-x-3">
            {user.loggedIn ? <>
                <Link to="profile" className="text-gray-200 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg shadow-xl">Profile</Link>
                <button onClick={handleLogout} className="hover:bg-teal-800 text-gray-500 px-3 py-2 rounded-lg">Logout</button>
            </>
                : <>
                    <Link to="/login" className="hover:bg-teal-800 px-3 py-2  rounded-lg">Login</Link>
                    <Link to="/register" className="hover:bg-teal-800 px-3 py-2 rounded-lg">Register</Link>
                </>
            }
        </div>

    </nav>)
}

const MobileNavbar = ({ user, logoutAction }) => {

    const [showMenuItems, setMenuItems] = useState(false);
    const handleMenuItems = () => setMenuItems(!showMenuItems);
    const handleLogout = () => {
        logoutAction()
    }
    return (<div className="sm:hidden flex flex-col w-full h-full">
        <div className="flex items-center w-full justify-between shadow-lg">
            <Link to="/" className="block px-3 py-2">my-songify</Link>
            <button className="block px-3 py-2" onClick={handleMenuItems}><Icons.MenuAlt4 className="w-10 h-10" /></button>
        </div>
        {/* menu items */}
        {showMenuItems ? <div className="flex flex-col space-y-2 w-full bg-teal-800 py-5">
            <Link to="/#about" className="px-5 py-1 border-l-0 hover:border-l-2 border-teal-500">About</Link>
            <Link to="/songs" className="pb-2 border-b  px-5 py-1 border-l-0 hover:border-l-2 border-teal-500">Songs</Link>
            <div className="flex flex-col">
                {user.loggedIn ? <>
                    <button onClick={handleLogout} className="hover:bg-teal-800 px-3 py-2 rounded-lg">Logout</button>

                </> : <>
                        <Link to="/login" className="rounded-lg px-5 py-1 border-l-0 hover:border-l-2 border-teal-500">Login</Link>
                        <Link to="/register" className="rounded-lg px-5 py-1 border-l-0 hover:border-l-2 border-teal-500">Register</Link>
                    </>}
            </div>
        </div> : null}
    </div>)
}
Navbar.propTypes = {
    user: PropTypes.object.isRequired,
    logoutAction: PropTypes.func.isRequired
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps, { logoutAction })(Navbar);