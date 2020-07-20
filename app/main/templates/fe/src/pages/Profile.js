import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Profile = ({ user }) => {
    if (!user.loggedIn) {
        return <div><h1 className="font-bold text-orange-500 text-2xl">You must be logged in.</h1></div>
    }
    return (
        <main className="">
            <h1 className="text-2xl">
                <span className="text-orange-500">Lets make something happen </span>
                <span className="text-white uppercase font-bold">{user.firstname}, {user.lastname}</span>
            </h1>
        </main>
    )
}

Profile.propTypes = {
    user: PropTypes.object.isRequired
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps, {})(Profile); 
