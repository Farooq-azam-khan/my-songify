import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { connect } from 'react-redux';
import { loginAction } from '../store/actions/userActions'

const Login = ({ user, loginAction }) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        loginAction(email, password)

    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    if (user.loggedIn) {
        return (<div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-900 h-full">
            <h1 className="text-white text-4xl bg-teal-900 px-24 py-10 rounded-lg shadow-xl">You are already logged in</h1>
        </div>)
    }

    return (<div className="fixed z-10 inset-0 flex flex-col items-center justify-center w-full h-full bg-gray-900">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center space-y-2 mt-5 w-full h-full px-3 sm:px-10">
            <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
                <input value={email} onChange={handleEmail} className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Email" />
            </div>
            <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
                <input value={password} onChange={handlePassword} className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Password" />
            </div>
            <button type="submit" className="block bg-teal-700 text-white rounded-lg shadow-lg text-md px-10 py-3">Login</button>
        </form>
    </div>);
}

Login.propTypes = {
    user: PropTypes.object,
    loginAction: PropTypes.func.isRequired
}

// TODO: test ({user} ) => user
const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { loginAction })(Login); 