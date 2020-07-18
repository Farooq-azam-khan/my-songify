const Router = ReactRouterDOM.BrowserRouter
const { Switch, Link, Route } = ReactRouterDOM

class App extends React.Component {
    render() {
        return <main className="bg-gray-900">
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




ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))
