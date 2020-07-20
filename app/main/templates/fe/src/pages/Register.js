import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(watch("example")); // watch input value by passing the name of it

    return (<form className="flex flex-col items-center justify-center px-4 sm:py-8 space-y-3 sm:space-y-4 md:space-y-8 max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
            <input name="first-name"
                className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="First Name" />
            <input name="middle-name"
                className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="Middle Name" />
            <input name="last-name"
                className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="Last Name" />
        </div>
        <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
            <input name="email"
                className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Email" />
            <input name="confirm-email"
                className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Confirm Email" />
        </div>
        <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
            <input name="password"
                className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Password" />
            <input name="confirm-password"
                className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Confirm Password" />
        </div>
        <button type="submit" className="block bg-teal-700 text-white rounded-lg shadow-lg text-md px-10 py-3">Register</button>
    </form>);
}

export default Register; 