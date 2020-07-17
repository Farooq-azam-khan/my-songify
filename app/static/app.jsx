class App extends React.Component {
    render() {
        return <div className="bg-teal-700 w-full h-full">
            <Navbar />
        </div>
    }
}

const Navbar = () => {
    return (<nav className="flex items-center justify-between w-full py-2 px-3 bg-teal-900 text-white">
        <div className="flex items-center justify-between space-x-3">
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-teal-800">my-songify</a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-teal-800">About</a>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-teal-800">Actions</a>
        </div>
        <a href="#" className="hover:bg-teal-800 px-3 py-2 rounded-lg">Login</a>
    </nav>)
}
ReactDOM.render(<App />, document.getElementById('app'))
