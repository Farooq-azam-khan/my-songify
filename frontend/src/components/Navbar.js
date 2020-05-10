import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";
import Button from "@material-ui/core/Button";

import PropType from "prop-types";
import { connect } from "react-redux";

import { logout_user } from "../store/actions/userActions";

import RenderNavbarLink from "./RenderNavbarLink";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  bgr: {
    background: "red",
  },
  activeLink: {
    color: ({ match }) => (match ? grey[700] : "white"),
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="flex-start" alignItems="center">
          <Typography variant="h6" className={classes.title}>
            MY-SONGIFY
          </Typography>
        </Grid>
        <Grid container spacing={1} justify="flex-end" alignItems="center">
          <Grid item>
            <RenderNavbarLink to="/songs" name="Songs" exact={true} />
          </Grid>
          <Grid item>
            <RenderNavbarLink to="/" name="About" exact={true} />
          </Grid>
          <Grid item>
            {props.user.logged_in ? (
              <Button
                onClick={() => {
                  props.logout_user();
                }}
                variant={"outlined"}
                color="inherit"
              >
                Logout
              </Button>
            ) : (
              <RenderNavbarLink to="/login" name="Login" exact={false} />
            )}
          </Grid>
          <Grid item>
            {props.user.logged_in ? (
              <RenderNavbarLink
                buttonVariant="outlined"
                to="/profile"
                name="Profile"
                exact={true}
              />
            ) : (
              <RenderNavbarLink
                buttonVariant="outlined"
                to="/register"
                name="Register"
                exact={true}
              />
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  logout_user: PropType.func.isRequired,
  user: PropType.object.isRequired,
};
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps, { logout_user })(Navbar);
