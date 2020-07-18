const Register = () => {
    return (<div className="flex flex-col items-center justify-center px-4 sm:py-8 space-y-3 sm:space-y-4 md:space-y-8 max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
            <input className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="First Name" />
            <input className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="Middle Name" />
            <input className="w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg" placeholder="Last Name" /></div>
        <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Email" />
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Confirm Email" /></div>
        <div className="flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between">
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Password" />
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Confirm Password" /></div>
        <button className="block bg-teal-700 text-white rounded-lg shadow-lg text-md px-10 py-3">Register</button>
    </div>);
}
