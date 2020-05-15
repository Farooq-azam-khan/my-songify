import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    marginTop: "2rem",
    padding: "2rem",
    color: "white",
    backgroundColor: "black",
  },
  smallCaps: {
    fontVaiant: "small-caps",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      align="center"
    >
      <Grid item xs={12}>
        <Typography className={classes.smallCaps} variant="h3">
          About
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography id="about" variant="subtitle1" element="p">
          This project has been created to test the insides of websites like
          Tidal and Spotify which are used for listening to songs.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
