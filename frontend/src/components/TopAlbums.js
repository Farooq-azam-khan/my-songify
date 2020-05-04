import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    marginTop: "4rem",
  },
  paper: {
    height: "10rem",
    width: "8rem",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const TopAlbums = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  return (
    <Grid container className={classes.root}>
      <Grid xs={12}>
        <h2>Albums</h2>
      </Grid>
      <Grid xs={6}>
        <h2>Keep Track of the Best Music in the Industry</h2>
      </Grid>
      <Grid xs={6} container justify="left">
        <Grid xs={4}>
          <Paper className={classes.paper} />
        </Grid>
        <Grid xs={4} item>
          <Paper className={classes.paper} />
        </Grid>
        <Grid xs={4} item>
          <Paper className={classes.paper} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopAlbums;
