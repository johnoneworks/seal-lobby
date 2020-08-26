import React from "react";
import { GRID_GALLERY } from "../../MockData/mockData";
import { IMAGE_BASE_URL, GRID_IMAGE_SIZE } from "../../Config/config";
import "./CollectionItem.scss";
import Truncate from "../../Utils/Truncate";
import { withRouter } from "react-router";
import { FixString } from "../../Utils/FixString";
import AddToList from "../AddToList/AddToList";

const CollectionItem = ({ item, games, movies, tvshow, history, demo }) => {
  const { title, overview, backdrop_path, name, id } = item;
  const para = Truncate(overview, 155, " ..read more");
  var titlePath = movies ? FixString(title) : null;

  // NOTE: demo, dirty
  if (games) {
    titlePath = FixString(title);
  }

  var namePath = tvshow ? FixString(name) : null;

  if (!demo) {
    return (
      <div className="collection-item">
        <div onClick={() => {
          // NOTE: demo, dirty
          if (games) {
            return history.push(`games/${titlePath}`);
          }

          return movies
            ? history.push(`/movies/${titlePath}`)
            : history.push(`/tvshows/${namePath}`);
        }}
        >

          <img
            src={`${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}${backdrop_path}`}
            alt="movie"
            className="collection-item__movie-image"
          />
          <div className="collection-item__text">
            <h1 className="collection-item__title">{title}</h1>
            <h1 className="collection-item__title">{name}</h1>
            <span className="collection-item__overview">{para}</span>
          </div>
        </div>
        <div className="collection-item__addtolist">
          <AddToList item={item} />
        </div>
      </div>
    );
  }

  if (demo) {
    console.log("CollectionItem demo branch");
    return (
      <div className="collection-item">
        <div onClick={() => {
          // NOTE: demo, dirty
          if (games) {
            return history.push(`games/${titlePath}`);
          }

          return movies
            ? history.push(`/movies/${titlePath}`)
            : history.push(`/tvshows/${namePath}`);
        }}
        >

          <img
            src={GRID_GALLERY[id - 1]}
            alt="game"
            className="collection-item__movie-image"
          />
          <div className="collection-item__text">
            <h1 className="collection-item__title">{title}</h1>
            <h1 className="collection-item__title">{name}</h1>
            <span className="collection-item__overview">{para}</span>
          </div>
        </div>
        <div className="collection-item__addtolist">
          <AddToList item={item} />
        </div>
      </div>
    );
  }
};

export default withRouter(CollectionItem);
