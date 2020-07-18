const Router = ReactRouterDOM.BrowserRouter
const { Switch, Link, Route } = ReactRouterDOM

class App extends React.Component {
    render() {
        return <main className="bg-gray-900 flex flex-col w-screen h-screen">
            <Navbar />
            <div className="flex items-center justify-center w-full h-full">
                <Switch>
                    <Route path="/register" exact><Register /></Route>
                    <Route path="/login" exact><Login /></Route>
                    <Route path="/songs" exact><Songs /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </div>
        </main>
    }
}




ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))
