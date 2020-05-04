import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Navbar from "./components/Navbar";
import TopAlbums from "./components/TopAlbums";

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Container maxWidth="sm">
        <TopAlbums />
      </Container>
    </div>
  );
};

export default App;
