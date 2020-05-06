import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import grey from "@material-ui/core/colors/grey";

import { Link, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  activeLink: {
    color: ({ match }) => (match ? grey[700] : "white"),
  },
}));

const RenderNavbarLink = ({ to, name, buttonVariant, exact }) => {
  const match = useRouteMatch({
    path: to,
    exact: exact,
  });
  const classes = useStyles({ match });

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Button
        disabled={match}
        variant={match ? "contained" : buttonVariant}
        className={classes.activeLink}
        color="inherit"
      >
        {name}
      </Button>
    </Link>
  );
};

export default RenderNavbarLink;
