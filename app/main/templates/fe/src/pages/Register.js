import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { useForm } from "react-hook-form";
import { registerAction } from '../store/actions/userActions';

const Register = ({ user, registerAction }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        registerAction(data);
    }
    if (user.loggedIn) {
        return (<div className="px-24 py-10 bg-teal-900 rounded-lg shadow-xl">
            <h1 className="text-white text-4xl">You are already logged in</h1>
        </div>)
    }

    return (<div className="flex flex-col items-center justify-center w-full h-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center space-y-2 mt-5 w-full h-full px-3 sm:px-10">
            <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
                <input name="firstname" ref={register({ required: true, minLength: 3, maxLength: 64 })}
                    className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="First Name" />
                {errors['firstname'] && <div className="bg-red-300 w-full px-3 py-2 rounded-lg">
                    <p className="text-gray-900">
                        {errors['firstname'].type === 'required' && 'You must type your first name'}
                        {errors['firstname'].type === 'minLength' && 'Minimum length of first name must be 3 or more'}
                        {errors['firstname'].type === 'maxLength' && 'Max first name must be 64'}
                    </p>
                </div>}
                <input name="middlename" ref={register}
                    className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="Middle Name" />
                <input name="lastname" ref={register({ required: true, minLength: 3, maxLength: 64 })}
                    className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="Last Name"
                />
                {errors['lastname'] && <div className="bg-red-300 w-full px-3 py-2 rounded-lg">
                    <p className="text-gray-900">
                        {errors['lastname'].type === 'required' && 'You must type your last name'}
                        {errors['lastname'].type === 'minLength' && 'Minimum length of last name must be 3 or more'}
                        {errors['lastname'].type === 'maxLength' && 'Max first name must be 64'}
                    </p>
                </div>}
            </div>
            <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
                <input name="email" ref={register({ required: true })}
                    className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Email" />
                {errors['email'] && <div className="bg-red-300 w-full px-3 py-2 rounded-lg">
                    <p className="text-gray-900">
                        {errors['email'].type === 'required' && 'Type your email.'}
                    </p>
                </div>}
                <input name="confirm_email" ref={register({ required: true })}
                    className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Confirm Email" />
                {errors['confirm_email'] && <div className="bg-red-300 w-full px-3 py-2 rounded-lg">
                    <p className="text-gray-900">
                        {errors['confirm_email'].type === 'required' && 'Retype your email.'}
                    </p>
                </div>}
            </div>
            <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
                <input name="password" ref={register({ required: true, minLength: 5, maxLength: 20 })}
                    className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Password" />
                {errors['password'] && <div className="bg-red-300 w-full px-3 py-2 rounded-lg">
                    <p className="text-gray-900">Password is required with min length of 5.</p>
                </div>}
                <input name="confirm_password" ref={register({ required: true, minLength: 5, maxLength: 20 })}
                    className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Confirm Password" />
                {errors['confirm_password'] && <div className="bg-red-300 w-full px-3 py-2 rounded-lg">
                    <p className="text-gray-900">Passwords must match.</p>
                </div>}
            </div>
            <button type="submit" className="block bg-teal-700 text-white rounded-lg shadow-lg text-md px-10 py-3">Register</button>
        </form></div>);
}

Register.propTypes = {
    user: PropTypes.object.isRequired,
    registerAction: PropTypes.func.isRequired
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { registerAction })(Register); 