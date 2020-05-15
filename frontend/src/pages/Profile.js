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

import SongCollectionGroup from '../components/SongCollectionGroup';
import BASE_URL from '../base_url'

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
  const [my_albumns, set_my_albumns] = useState({})
  // const [loading, setLoading] = useState(true)
  const [liked_albumns, set_my_liked_albumns] = useState({})
  useEffect(() => {

    if (props.user.logged_in) {
      const user_playlist_url = `${BASE_URL}/api/v1/user/playlists`
      console.log('url:', user_playlist_url)
      fetch(user_playlist_url).then(resp => resp.json()).then(data => {
        console.log('your playlists');
        set_my_playlists(data)
      })
    }
    // fetch(`${BASE_URL}/api/v1/user/playlists/like`).then(resp => resp.json()).then(data => {
    //   // setLoading(false);
    //   setLikedPlaylists(data)
    //   // console.log('liked playlists')
    //   // console.log(like_playlists)
    // })
    //   .catch(e => {
    //     console.error(e)
    //   })
    // fetch(`${BASE_URL}/api/v1/artist/${props.user.user_data.pk}/albumns`).then(resp => resp.json()).then(data => { set_my_albumns(data) })

    // fetch(`${BASE_URL}/api/v1/user/albums/like`).then(resp => resp.json()).then(data => { set_my_liked_albumns(data) })


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
      {/* <Grid item>
        <SongCollectionGroup title="Your Playlists" group={my_playlists} />
      </Grid> */}
      {/* <Grid item>
        <SongCollectionGroup title="Your Albumns" group={my_albumns} />
      </Grid>
      <Grid item>
        <SongCollectionGroup title="Your Liked Playlists" group={like_playlists} />
      </Grid>
      <Grid item>
        <SongCollectionGroup title="Your Liked Albumns" group={liked_albumns} />
      </Grid> */}
    </Grid>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps, {})(Profile);
