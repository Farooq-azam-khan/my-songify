import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const GenreList = ({ title, data, user }) => {
  const handleLikeClick = (e) => {
    // console.log(e.currentTarget.name);
    // TODO: if user is logged in then send request to update like
  };
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ marginBottom: "2rem" }}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{ marginBottom: "1rem", padding: "0 4rem" }}
      >
        <Grid item>
          <Typography variant="h5" color="primary">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="default">
            See All
          </Button>
        </Grid>
      </Grid>
      <GridList className={classes.gridList} cols={2.5}>
        {data.map((tile) => (
          <GridListTile key={tile.pk}>
            <img src={tile.cover_image} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              className={classes.lightBackgroundColor}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              subtitle={`by: ${tile.artist}`}
              actionIcon={
                <div>
                  {user.logged_in ? (
                    <div>
                      <IconButton
                        name={`like-${tile.pk}`}
                        type="button"
                        onClick={(e) => handleLikeClick(e)}
                        aria-label={`star ${tile.name}`}
                      >
                        <ThumbUpIcon className={classes.title} />
                      </IconButton>
                      <IconButton aria-label={`star ${tile.name}`}>
                        <ThumbDownIcon className={classes.title} />
                      </IconButton>
                    </div>
                  ) : null}
                </div>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

GenreList.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, {})(GenreList);
