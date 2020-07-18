import React from 'react';

const Login = () => {
    return (<div className="flex flex-col items-center justify-center w-full h-full px-4 sm:py-8 space-y-3 sm:space-y-4 md:space-y-8 max-w-lg mx-auto">
        <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Email" />
        </div>
        <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Password" />
        </div>
        <button className="block bg-teal-700 text-white rounded-lg shadow-lg text-md px-10 py-3">Login</button>
    </div>);
}

export default Login; 