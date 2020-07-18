import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Songs from './pages/Songs';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return <main className="bg-gray-900 flex flex-col w-screen h-screen">
      <Navbar />
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
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



export default App;
