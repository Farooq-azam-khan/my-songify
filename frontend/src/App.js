import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Grid from "@material-ui/core/Grid";

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Grid container>
        <Navbar />
      </Grid>
    </div>
  );
};

export default App;
