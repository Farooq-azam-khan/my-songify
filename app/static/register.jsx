const Register = () => {
    // return <div className="md:fixed flex items-center justify-center w-full h-full">
    return (<div className="flex flex-col items-center justify-center px-4 py-8 space-y-8 md:bg-teal-900 md:shadow-xl md:rounded-lg">
        <div className="flex flex-col md:flex-row space-x-0 space-y-1 md:space-y-0 items-center w-full md:space-x-4 justify-between">
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" placeholder="First Name" />
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" placeholder="Middle Name" />
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" placeholder="Last Name" /></div>
        <div className="flex flex-col md:flex-row space-x-0 space-y-1 md:space-y-0 items-center w-full md:space-x-4 justify-between">
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Email" />
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Confirm Email" /></div>
        <div className="flex flex-col md:flex-row space-x-0 space-y-1 md:space-y-0 items-center w-full md:space-x-4 justify-between">
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Password" />
            <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Confirm Password" /></div>
        <button className="block bg-teal-700 text-white rounded-lg shadow-lg text-md px-10 py-3">Register</button>
    </div>);
    // </div>
}
