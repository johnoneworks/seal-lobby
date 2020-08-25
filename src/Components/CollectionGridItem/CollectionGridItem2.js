import React from "react";
import PP from "../../MockData/100001.jpg";
import PW from "../../MockData/100002.jpg";
import SG from "../../MockData/100003.jpg";
import PG from "../../MockData/100004.png";

import "./CollectionGridItem2.scss";
import AddToList from "../AddToList/AddToList";

const BANNER_GALLERY = [
  PP,
  PW,
  SG,
  PG
];

const CollectionGridItem2 = ({ item, listItems, addItem }) => {
  const { title, overview, backdrop_path, poster_path, name, id } = item;
  return (
    <div className="grid-item">
      <img
        src={BANNER_GALLERY[id - 100000]}
        alt="movie"
        className="grid-item__img_demo"
      />
      <img
        src={BANNER_GALLERY[id - 100000]}
        alt="movie"
        className="grid-item__img_demo grid-item__mobile-img_demo"
      />
      <div className={`${title ? "grid-item__movie-text" : "grid-item__tv-text"}`}>
        <h1 className="grid-item__title">{title}</h1>
        <h1 className="grid-item__title">{name}</h1>
        <span className="grid-item__overview">{overview}</span>
        <AddToList item={item} />
      </div>
    </div>
  );
};

export default CollectionGridItem2;
