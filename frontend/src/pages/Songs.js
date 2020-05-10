import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import GenreList from "../components/Genre";

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

export default class Songs extends Component {
  state = {
    hasErrors: false,
    genres: {},
  };

  componentDidMount() {
    // this.setState({ genres: { genre1: tileData } });
    fetch("/songs/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
        <GenreList title="Recent Popular Songs" data={tileData} />;
        {Object.entries(this.state.genres).map(([genre, songs], index) => {
          return (
            <GenreList key={index} title={`${genre}'s Songs`} data={songs} />
          );
        })}
      </div>
    );
  }
}
