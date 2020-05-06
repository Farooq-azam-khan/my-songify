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

const Register = () => {
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
        <Typography variant="h2">Register</Typography>
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
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justify="flex-start"
          spacing={1}
        >
          <Grid item xs={12} sm={4}>
            <TextField
              autoFocus
              required
              fullWidth
              type="text"
              id="firstname-input"
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="text"
              id="middlename-input"
              label="Middle Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              fullWidth
              type="text"
              id="lastname-input"
              label="Last Name"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              type="email"
              id="email-input"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              type="email"
              id="confirm-email-input"
              label="Confirm Email"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              type="password"
              id="password-input"
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              type="password"
              id="confirm-password-input"
              label="Confirm Password"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button fullWidth variant="contained" color="secondary">
            Register
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
