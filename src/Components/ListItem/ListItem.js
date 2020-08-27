import React from "react";
import "./ListItem.scss";
import { withRouter } from "react-router";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../Config/config";
import { POSTER_GALLERY } from "../../MockData/mockData";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imdb from "../../Assets/imdb.png";
import star from "../../Assets/star.png";
import { FixString } from "../../Utils/FixString";
import { removeItem } from "../../Redux/List/list-actions";
import { connect } from "react-redux";
import { compose } from "redux";

const ListItem = ({ item, history, removeItem, demo }) => {
  const { id, title, poster_path, vote_average, name } = item;
  console.log("ListItem");
  console.log(id);
  var titlePath = title ? FixString(title) : null;
  var namePath = name ? FixString(name) : null;
  let imgIndex = Math.floor(Math.random() * POSTER_GALLERY.length);
  return (
    <div className="list-item">
      <div className="list-item__rating-container">
        {!demo &&
          <span className="list-item__rating">
            <img src={imdb} alt="imdb" className="list-item__imdb" />
            <span className="list-item__rank">{vote_average}/</span>
            <span className="list-item__ten">10</span>
            <img src={star} alt="imdb" className="list-item__star" />
          </span>
        }
      </div>
      <div className="list-item__addtolist" onClick={() => removeItem(item)}>
        <FontAwesomeIcon icon={faTimes} className="list-item__remove-icon" />
      </div>
      {!demo &&
        <div
          className="list-item__img-box"
          onClick={() => {
            return title
              ? history.push({ pathname: `/movies/${titlePath}`, state: { id } })
              : history.push({ pathname: `/tvshows/${namePath}`, state: { id } });
          }}
        >
          <img
            src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`}
            alt="movie"
            className="list-item__img"
          />
        </div>
      }
      {demo &&
        <div
          className="list-item__img-box"
          onClick={() => {
            console.log("ListItem Onclick");
            return history.push({ pathname: `/games/${titlePath}`, state: { id } });
          }}
        >
          <img
            src={POSTER_GALLERY[imgIndex]}
            alt="game"
            className="list-item__img"
          />
        </div>
      }

      <div className="list-item__text">
        <h1 className="list-item__title">{title}</h1>
        <h1 className="list-item__title">{name}</h1>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(ListItem);
