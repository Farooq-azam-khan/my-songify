import React from 'react';
import { Provider } from "react-redux";
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Songs from './pages/Songs';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import store from "./store";

class App extends React.Component {
  render() {
    return <Provider store={store}><div className="bg-gray-900">
      <Navbar />
      <div className="flex items-center justify-center w-full overflow-hidden">
        <Switch>
          <Route path="/register" exact><Register /></Route>
          <Route path="/login" exact><Login /></Route>
          <Route path="/songs" exact><Songs /></Route>
          <Route path="/profile" exact><Profile /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </div></Provider>
  }
}



export default App;
