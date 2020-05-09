import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Grid from "@material-ui/core/Grid";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Songs from "./pages/Songs";
import Register from "./pages/Register";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CssBaseline />
        <Router>
          <Grid container direction="column">
            <Grid item style={{ margin: 0 }}>
              <Navbar />
            </Grid>
            <Grid item>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/songs">
                  <Songs />
                </Route>

                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/register">
                  <Register />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
