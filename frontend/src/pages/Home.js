import React from "react";
import Grid from "@material-ui/core/Grid";

import TopAlbums from "../components/TopAlbums";
import RegisterSection from "../components/RegisterSection";
import About from "../components/About";
const Home = () => {
  return (
    <Grid container direction="column">
      <Grid xs={12} item>
        <TopAlbums />
      </Grid>
      <Grid item>
        <RegisterSection />
      </Grid>
      <Grid item>
        <About />
      </Grid>
    </Grid>
  );
};

export default Home;
