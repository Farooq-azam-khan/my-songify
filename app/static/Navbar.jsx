
const { useState } = React;
const { Link } = ReactRouterDOM;

const MenuAlt4 = ({ className }) => {
    return <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
}
const Navbar = () => {

    return (<nav className="flex items-center justify-between shadow-xl w-full sm:py-2 sm:px-3 bg-teal-900 text-white">
        {/* mobile screen havbar */}
        <MobileNavbar />
        {/* small screen and above navbar */}
        <div className="hidden sm:flex items-center justify-between space-x-3">
            <Link to="/" className="px-3 py-2 rounded-lg hover:bg-teal-800">my-songify</Link>
            <a href="/#about" className="px-3 py-2 rounded-lg hover:bg-teal-800">About</a>
            <Link to='/songs' className="px-3 py-2 rounded-lg hover:bg-teal-800">Songs</Link>
            <Link to="#" className="px-3 py-2 rounded-lg hover:bg-teal-800">Actions</Link>
        </div>
        <div className="hidden sm:flex items-center justify-between space-x-3">
            <Link to="/login" className="hover:bg-teal-800 px-3 py-2 rounded-lg">Login</Link>
            <Link to="/register" className="hover:bg-teal-800 px-3 py-2 rounded-lg">Register</Link>
        </div>
    </nav>)
}

const MobileNavbar = () => {

    const [showMenuItems, setMenuItems] = useState(false);
    const handleMenuItems = () => setMenuItems(!showMenuItems);
    return (<div className="sm:hidden flex flex-col w-full h-full">
        <div className="flex items-center w-full justify-between shadow-lg">
            <Link to="/" className="block px-3 py-2">my-songify</Link>
            <button className="block px-3 py-2" onClick={handleMenuItems}><MenuAlt4 className="w-10 h-10" /></button>
        </div>
        {/* menu items */}
        {showMenuItems ? <div className="flex flex-col space-y-2 w-full bg-teal-800 py-5">
            <Link to="/#about" className="px-5 py-1 border-l-0 hover:border-l-2 border-teal-500">About</Link>
            <Link to="/songs" className="pb-2 border-b border-teal-700 px-5 py-1 border-l-0 hover:border-l-2 border-teal-500">Songs</Link>
            <div className="flex flex-col">
                <Link to="/login" className="rounded-lg px-5 py-1 border-l-0 hover:border-l-2 border-teal-500">Login</Link>
                <Link to="/register" className="rounded-lg px-5 py-1 border-l-0 hover:border-l-2 border-teal-500">Register</Link>
            </div>
        </div> : null}
    </div>)
}