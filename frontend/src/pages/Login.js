import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { login_user } from "../store/actions/userActions";

import PropTypes from "prop-types";
// TODO: hide and show passwords
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// TODO: show required fields

const useStyles = makeStyles((theme) => ({
  root: {
    height: "91vh",
  },
  formGrid: {
    maxWidth: "600px",
    padding: "1rem",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("f@l.com");
  const [password, setPassword] = useState("test");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.login_user(email, password);
  };

  if (props.user.logged_in) {
    return <Typography variant="h2">You are Already Logged in</Typography>;
  }
  return (
    <form onSubmit={handleLoginSubmit}>
      <Grid
        container
        className={classes.root}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h2">Login </Typography>
        </Grid>

        <Grid
          item
          container
          className={classes.formGrid}
          direction="column"
          alignItems="stretch"
          justify="center"
          spacing={4}
        >
          <Grid item>
            <TextField
              autoFocus
              fullWidth
              type="email"
              id="email-input"
              label="Email"
              onChange={handleEmailChange}
              value={email}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              type="password"
              id="password-input"
              label="Password"
              onChange={handlePasswordChange}
              variant="outlined"
              value={password}
            />
          </Grid>
          <Grid item>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

Login.propTypes = {
  login_user: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps, { login_user })(Login);
