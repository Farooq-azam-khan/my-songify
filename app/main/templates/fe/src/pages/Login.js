import React, { useState } from 'react';
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { loginAction } from '../store/actions/userActions'

const Login = ({ loginAction }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setEmail(e.target.value)
    }

    const handleLogin = () => {
        const sampleEmail = 'f@l.com';
        const samplePassw = 'test';
        loginAction(sampleEmail, samplePassw)
    }

    return (<div className="flex flex-col items-center justify-center w-full h-full px-4 sm:py-8 space-y-3 sm:space-y-4 md:space-y-8 max-w-lg mx-auto">
        <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
            <input value={email} onChange={handleEmail} className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Email" />
        </div>
        <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
            <input value={email} onChange={handlePassword} className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Password" />
        </div>
        <button onClick={handleLogin} className="block bg-teal-700 text-white rounded-lg shadow-lg text-md px-10 py-3">Login</button>
    </div>);
}

Login.propTypes = {
    loginAction: PropTypes.func.isRequired
}

// TODO: test ({user} ) => user
const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { loginAction })(Login); 