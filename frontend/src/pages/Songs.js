import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import GenreList from "../components/Genre";

import BASE_URL from '../base_url'

export default class Songs extends Component {
  state = {
    hasErrors: false,
    genres: {},
  };

  componentDidMount() {
    // this.setState({ genres: { genre1: tileData } });
    fetch(`${BASE_URL}/songs/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({ hasErrors: false });
          this.setState({ genres: data.data });
        } else {
          this.setState({ hasErrors: true });
        }
      });
  }
  render() {
    if (this.state.hasErrors) {
      return (
        <div>
          <h2>Got an error </h2>
        </div>
      );
    }
    return (
      <div>
        {/* <GenreList title="Recent Popular Songs" data={tileData} />; */}
        {Object.entries(this.state.genres).map(([genre, songs], index) => {
          return (
            <GenreList key={index} title={`${genre}'s Songs`} data={songs} />
          );
        })}
      </div>
    );
  }
}
