import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// TODO: hide and show passwords
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// TODO: show required fields

const useStyles = makeStyles((theme) => ({
  root: {
    height: "91vh",
    // backgroundColor: "orange",
  },
  formGrid: {
    // backgroundColor: "green",
    maxWidth: "500px",
    padding: "1rem",
    // maxHeight: "500px",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      // spacing={}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h2">Login</Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.formGrid}
        direction="column"
        alignItems="stretch"
        justify="center"
        spacing={2}
      >
        <Grid item>
          <TextField
            autoFocus
            fullWidth
            type="email"
            id="email-input"
            label="email"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            type="password"
            id="password-input"
            label="password"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button fullWidth variant="contained" color="primary">
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
