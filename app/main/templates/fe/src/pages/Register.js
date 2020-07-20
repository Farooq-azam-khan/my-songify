import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [globalErrors, setGlobalErrors] = useState([]);
    const onSubmit = data => {
        if (data['confirm-email'] !== data['email']) {
            globalErrors.push('Emails are not Equal')
            setGlobalErrors(globalErrors)
        }
        if (data['password'] !== data['confirm-password']) {
            globalErrors.push('Passwords are not equal')
            setGlobalErrors(globalErrors)
        }
        console.log(data);
    }

    return (<div className="flex flex-col items-center justify-center w-full h-full">
        {globalErrors.length > 0 && <div className="text-white bg-red-800 px-2 py-1 w-full rounded-lg">
            {globalErrors.map((el, i) => <div key={i}>{el}</div>)}
        </div>
        }
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center space-y-2 mt-5 w-full h-full px-3 sm:px-10">
            <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
                <input name="first-name" ref={register({ required: true, minLength: 3, maxLength: 64 })}
                    className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="First Name" />
                {errors['first-name'] && <div className="bg-red-300 w-full px-3 py-2 rounded-lg">
                    <p className="text-gray-900">
                        {errors['first-name'].type === 'required' && 'You must type your first name'}
                        {errors['first-name'].type === 'minLength' && 'Minimum length of first name must be 3 or more'}
                        {errors['first-name'].type === 'maxLength' && 'Max first name must be 64'}
                    </p>
                </div>}
                <input name="middle-name" ref={register}
                    className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="Middle Name" />
                <input name="last-name" ref={register({ required: true, minLength: 3, maxLength: 64 })}
                    className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="Last Name"
                />
                {errors['last-name'] && <div className="bg-red-300 w-full px-3 py-2 rounded-lg">
                    <p className="text-gray-900">
                        {errors['last-name'].type === 'required' && 'You must type your last name'}
                        {errors['last-name'].type === 'minLength' && 'Minimum length of last name must be 3 or more'}
                        {errors['last-name'].type === 'maxLength' && 'Max first name must be 64'}
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
                <input name="confirm-email" ref={register({ required: true })}
                    className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Confirm Email" />
                {errors['confirm-email'] && <div className="bg-red-300 w-full px-3 py-2 rounded-lg">
                    <p className="text-gray-900">
                        {errors['confirm-email'].type === 'required' && 'Retype your email.'}
                    </p>
                </div>}
            </div>
            <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
                <input name="password" ref={register({ required: true, minLength: 5, maxLength: 20 })}
                    className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Password" />
                {errors['password'] && <div className="bg-red-300 w-full px-3 py-2 rounded-lg">
                    <p className="text-gray-900">Password is required with min length of 5.</p>
                </div>}
                <input name="confirm-password" ref={register({ required: true, minLength: 5, maxLength: 20 })}
                    className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Confirm Password" />
                {errors['confirm-password'] && <div className="bg-red-300 w-full px-3 py-2 rounded-lg">
                    <p className="text-gray-900">Passwords must match.</p>
                </div>}
            </div>
            <button type="submit" className="block bg-teal-700 text-white rounded-lg shadow-lg text-md px-10 py-3">Register</button>
        </form></div>);
}

export default Register; 