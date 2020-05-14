import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

import { Link } from "react-router-dom";

import AlbumCard from "./AlbumCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "1rem",
  },
  paddingContent: {
    padding: "2rem",
  },
  marginTopContent: {
    marginTop: "2rem",
  },
  whiteFont: {
    color: "white",
  },
  albumList: {
    padding: "1rem",
  },
  albumSection: {
    marginTop: "2rem",
    padding: "2rem",
    backgroundColor: deepPurple[700],
    color: "white",
  },
}));

const TopAlbums = () => {
  const [top6, set_top6] = useState([])
  const [loading, set_loading] = useState(true)

  useEffect(() => {
    fetch('/api/v1/albums/6').then(resp => resp.json()).then(data => {
      console.log(data)
      set_top6(data)
      set_loading(false)
    }).catch(e => console.error(e))
  }, [])
  const classes = useStyles();
  const preventDefault = (e) => e.preventDefault();

  return (
    <div className={classes.root}>
      <Typography variant="h3" align="center">
        Top Albumns
      </Typography>
      <Grid container direction="row" className={classes.albumSection}>
        <Grid
          item
          xs={12}
          sm={5}
          container
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Grid item>
            <Typography variant="h4">
              Keep Track of the Best Music in the Industry
            </Typography>
          </Grid>
          <Grid item className={classes.marginTopContent}>
            <Link to="/songs" style={{ textDecoration: "none" }}>
              <Button variant="contained">CHECK OUT THE CONETENT</Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          container
          direction="row"
          spacing={2}
          className={classes.albumList}
        >
          {!loading ? top6.map(alb => {
            return (<Grid key={alb.pk} item xs={6} sm={4}>
              <AlbumCard album={alb} />
            </Grid>)
          }) : (<Grid item><CircularProgress color="secondary" /></Grid>)
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default TopAlbums;
