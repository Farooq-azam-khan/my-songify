const Register = () => {
    return <div className="fixed flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center px-4 py-8 space-y-8 bg-teal-900 shadow-xl rounded-lg">
            <div className="flex items-center w-full space-x-4 justify-between">
                <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" placeholder="First Name" />
                <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" placeholder="Middle Name" />
                <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" placeholder="Last Name" /></div>
            <div className="flex items-center w-full space-x-4 justify-between">
                <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Email" />
                <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="email" placeholder="Confirm Email" /></div>
            <div className="flex items-center w-full space-x-4 justify-between">
                <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Password" />
                <input className="w-full bg-teal-100 px-3 py-2 rounded-lg" type="password" placeholder="Confirm Password" /></div>
            <button className="block bg-teal-700 text-white rounded-lg shadow-lg text-md px-10 py-3">Register</button>
        </div>
    </div>
}
