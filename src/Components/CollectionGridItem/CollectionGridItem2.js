import React from "react";
import PP from "../../MockData/100001.jpg";
import PW from "../../MockData/100002.jpg";
import SG from "../../MockData/100003.jpg";

import "./CollectionGridItem.scss";
import AddToList from "../AddToList/AddToList";

const BANNER_GALLERY = [
  PP,
  PW,
  SG,
];

const CollectionGridItem2 = ({ item, listItems, addItem }) => {
  const { title, overview, backdrop_path, poster_path, name, id } = item;
  return (
    <div className="grid-item">
      <img
        src={BANNER_GALLERY[id - 100001]}
        alt="movie"
        className="grid-item__img"
      />
      <img
        src={BANNER_GALLERY[id - 100001]}
        alt="movie"
        className="grid-item__img grid-item__mobile-img"
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
