const Router = ReactRouterDOM.BrowserRouter
const { Switch, Link, Route } = ReactRouterDOM

class App extends React.Component {
    render() {
        return <main className="bg-gray-900 h-screen">
            <Navbar />

            <Switch>
                <Route path="/register" exact><Register /></Route>
                <Route path="/login" exact><Login /></Route>
                <Route path="/songs" exact><Songs /></Route>
                <Route path="/"><Home /></Route>
            </Switch>

        </main>
    }
}





const Navbar = () => {
    return (<nav className="flex shadow-xl items-center justify-between w-full py-2 px-3 bg-teal-900 text-white">
        <div className="flex items-center justify-between space-x-3">
            <Link to="/" className="px-3 py-2 rounded-lg hover:bg-teal-800">my-songify</Link>
            <a href="/#about" className="px-3 py-2 rounded-lg hover:bg-teal-800">About</a>
            <Link to='/songs' className="px-3 py-2 rounded-lg hover:bg-teal-800">Songs</Link>
            <Link to="#" className="px-3 py-2 rounded-lg hover:bg-teal-800">Actions</Link>
        </div>
        <div className="flex items-center justify-between space-x-3">
            <Link to="/login" className="hover:bg-teal-800 px-3 py-2 rounded-lg">Login</Link>
            <Link to="/register" className="hover:bg-teal-800 px-3 py-2 rounded-lg">Register</Link>

        </div>
    </nav>)
}
ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))
