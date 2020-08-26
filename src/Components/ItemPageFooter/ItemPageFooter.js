// REVIEWED 90% confidence, game link is stupid hard code

import React from "react";
import "./ItemPageFooter.scss";
import { connect } from "react-redux";
import {
  selectGameCast,
  selectGameVideos
} from "../../Redux/Game/game-selectors";
import {
  selectMovieCast,
  selectMovieVideos
} from "../../Redux/Movie/movie-selectors";
import { selectTVCast, selectTVVideos } from "../../Redux/TVShow/tv-selectors";
import { faPlay, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemPageCast from "../ItemPageCast/ItemPageCast";
import { TRAILER_LINK } from "../../Config/config";
import { addItem, removeItem } from "../../Redux/List/list-actions";
import { selectListItems } from "../../Redux/List/list-selectors";

const ItemPageFooter = ({
  item,
  gameCast,
  movieCast,
  gameVideos,
  movieVideos,
  addItem,
  removeItem,
  tvCast,
  tvVideos,
  games,
  movies,
  tvshow,
  listItems
}) => {
  const existingItem = listItems.filter(listItem => listItem.id === item.id);
  console.log("ItemPageFooter");
  console.log(movies);
  console.log(movieCast);
  return (
    <div className="item-page-footer">
      <div className="item-page-footer__container">
        {games && gameCast.length
          ? gameCast
            .filter((item, index) => index < 4)
            .map(({ id, profile_path, ...otherProps }) =>
              profile_path ? (
                <ItemPageCast
                  key={id}
                  profile_path={profile_path}
                  {...otherProps}
                  demo
                />
              ) : null
            )
          : null}
        {movies && movieCast.length
          ? movieCast
            .filter((item, index) => index < 4)
            .map(({ id, profile_path, ...otherProps }) =>
              profile_path ? (
                <ItemPageCast
                  key={id}
                  profile_path={profile_path}
                  {...otherProps}
                />
              ) : null
            )
          : null}
        {tvshow && tvCast.length
          ? tvCast
            .filter((item, index) => index < 4)
            .map(({ id, profile_path, ...otherProps }) =>
              profile_path ? (
                <ItemPageCast
                  key={id}
                  profile_path={profile_path}
                  {...otherProps}
                />
              ) : null
            )
          : null}
      </div>

      <div className="item-page-footer__btn-container">
        {existingItem.length ? (
          <button className="item-page-footer__btn" onClick={() => removeItem(item)}>
            <FontAwesomeIcon icon={faCheck} className="item-page-footer__icon" />
            Added To List
          </button>
        ) : (
            <button className="item-page-footer__btn" onClick={() => addItem(item)}>
              <FontAwesomeIcon icon={faPlus} className="item-page-footer__icon" />
            My List
            </button>
          )}

        <button
          onClick={() => {
            // demo, dirty
            if (games) {
              return window.open(`http://www.gwc688.net/playGame?token=CAA123456789&appID=TFNG&gameCode=rqaonzn7kjjiy`, "_blank");
            }
            return movies
              ? window.open(`${TRAILER_LINK}${movieVideos}`, "_blank")
              : window.open(`${TRAILER_LINK}${tvVideos}`, "_blank");
          }}
          className="item-page-footer__btn"
        >
          <FontAwesomeIcon icon={faPlay} className="item-page-footer__icon" />
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

const mapStateToProps = state => ({
  gameCast: selectGameCast(state),
  gameVideos: selectGameVideos(state),
  movieCast: selectMovieCast(state),
  movieVideos: selectMovieVideos(state),
  tvCast: selectTVCast(state),
  tvVideos: selectTVVideos(state),
  listItems: selectListItems(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPageFooter);