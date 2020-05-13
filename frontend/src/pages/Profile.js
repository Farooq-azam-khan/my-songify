import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProfileMenus from "../components/ProfileMenu";
import { fade, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import indigo from "@material-ui/core/colors/indigo";
import Divider from "@material-ui/core/Divider";

import Playlists from "../components/Playlist";
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: "100vw",
    backgroundColor: indigo[50],
    width: "100%",
    flex: 1,
    height: "91vh",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Profile = (props) => {
  const [my_playlists, set_my_playlists] = useState({})
  const [like_playlists, setLikedPlaylists] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    fetch('api/v1/user/playlists').then(resp => resp.json()).then(data => { set_my_playlists(data) })
    fetch('api/v1/user/playlists/like').then(resp => resp.json()).then(data => {
      console.log(data);
      setLoading(false);
      setLikedPlaylists(data)
    })
      .catch(e => {
        console.error(e)
      })

  }, [])

  const classes = useStyles();

  if (!props.user.logged_in) {
    return <div>You must login to view your profile</div>;
  }
  const user = props.user.user_data;
  return (
    <Grid
      container
      direction="row"
      wrap="wrap"
      className={classes.root}
      alignItems="center"
      justify="flex-start"
    >
      <Grid item container direction="row" alignItems="center" justify="center">
        <Grid item>
          <ProfileMenus />
        </Grid>
        <Grid item>
          <Typography variant="h4">
            welcome {user.firstname} {user.lastname}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Grid>
      <Grid item>
        <Typography variant="h4">Your Playlists</Typography>
        {Object.entries(my_playlists).map(([playlist, songs], index) => {
          return (
            <Grid key={index} item>
              <Playlists title={playlist} tileData={songs} />
            </Grid>);
        })}
      </Grid>

      <Grid item>
        <Typography variant="h4">Your Album</Typography>
        {Object.entries(my_playlists).map(([playlist, songs], index) => {
          return (
            <Grid key={index} item>
              <Playlists title={playlist} tileData={songs} />
            </Grid>);
        })}
      </Grid>

      <Grid item>
        <Typography variant="h4">Your Liked Playlists</Typography>
        {Object.entries(my_playlists).map(([playlist, songs], index) => {
          return (
            <Grid key={index} item>
              <Playlists title={playlist} tileData={songs} />
            </Grid>);
        })}
      </Grid>

      <Grid item>
        <Typography variant="h4">Your Liked Albums</Typography>
        {Object.entries(my_playlists).map(([playlist, songs], index) => {
          return (
            <Grid key={index} item>
              <Playlists title={playlist} tileData={songs} />
            </Grid>);
        })}
      </Grid>
    </Grid>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps, {})(Profile);
