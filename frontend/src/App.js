import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Grid from "@material-ui/core/Grid";

import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Grid container direction="column">
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item>
          <Home />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
