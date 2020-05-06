import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    marginTop: "2rem",
    padding: "2rem",
    fontVariant: "small-caps",
  },
  buttonSpacing: {
    marginTop: "2rem",
    padding: "1rem 8rem",
    backgroundColor: red[500],
  },
}));

const RegisterSection = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      align="center"
    >
      <Grid item>
        <Typography variant="h3">Start Your Journey</Typography>
      </Grid>
      <Grid item>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button
            size="large"
            className={classes.buttonSpacing}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Register
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default RegisterSection;
