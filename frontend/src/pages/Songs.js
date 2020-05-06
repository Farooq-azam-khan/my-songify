import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

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
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

// TODO: customize scrollbar
const tileData = [
  {
    img:
      "https://res-3.cloudinary.com/ybmedia/image/upload/c_crop,h_1117,w_1985,x_0,y_252/c_fill,f_auto,h_495,q_auto,w_880/v1/m/b/8/b8601cf5a1ce6be0421f710c8cdf89f05db3dd97/GettyImages-74290244.jpg",
    title: "song 1",
    author: "author 1",
  },
  {
    img:
      "https://res-3.cloudinary.com/ybmedia/image/upload/c_crop,h_1117,w_1985,x_0,y_252/c_fill,f_auto,h_495,q_auto,w_880/v1/m/b/8/b8601cf5a1ce6be0421f710c8cdf89f05db3dd97/GettyImages-74290244.jpg",
    title: "song 1",
    author: "author 1",
  },
  {
    img:
      "https://res-3.cloudinary.com/ybmedia/image/upload/c_crop,h_1117,w_1985,x_0,y_252/c_fill,f_auto,h_495,q_auto,w_880/v1/m/b/8/b8601cf5a1ce6be0421f710c8cdf89f05db3dd97/GettyImages-74290244.jpg",
    title: "song 1",
    author: "author 1",
  },
  {
    img:
      "https://res-3.cloudinary.com/ybmedia/image/upload/c_crop,h_1117,w_1985,x_0,y_252/c_fill,f_auto,h_495,q_auto,w_880/v1/m/b/8/b8601cf5a1ce6be0421f710c8cdf89f05db3dd97/GettyImages-74290244.jpg",
    title: "song 1",
    author: "author 1",
  },
  {
    img:
      "https://res-3.cloudinary.com/ybmedia/image/upload/c_crop,h_1117,w_1985,x_0,y_252/c_fill,f_auto,h_495,q_auto,w_880/v1/m/b/8/b8601cf5a1ce6be0421f710c8cdf89f05db3dd97/GettyImages-74290244.jpg",
    title: "song 1",
    author: "author 1",
  },
  {
    img:
      "https://res-3.cloudinary.com/ybmedia/image/upload/c_crop,h_1117,w_1985,x_0,y_252/c_fill,f_auto,h_495,q_auto,w_880/v1/m/b/8/b8601cf5a1ce6be0421f710c8cdf89f05db3dd97/GettyImages-74290244.jpg",
    title: "song 1",
    author: "author 1",
  },
];

const SongLists = ({ title, data }) => {
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
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

const Songs = () => {
  const genreSong = [
    { genre: "genre1", songs: tileData },
    { genre: "genre2", songs: tileData },
    { genre: "genre3", songs: tileData },
    { genre: "genre4", songs: tileData },
  ];
  return (
    <div>
      <SongLists title="Recent Popular Songs" data={tileData} />;
      {genreSong.map((genre, i) => {
        return (
          <SongLists
            key={i}
            title={`${genre.genre}'s Songs`}
            data={genre.songs}
          />
        );
      })}
    </div>
  );
};

export default Songs;
