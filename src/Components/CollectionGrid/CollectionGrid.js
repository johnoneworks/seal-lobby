// REVIEWED

import React from "react";
import "./CollectionGrid.scss";
import CollectionGridItem from "../CollectionGridItem/CollectionGridItem";
//import CollectionGridItem2 from "../CollectionGridItem/CollectionGridItem2";
import { connect } from "react-redux";
import { selectGameGridItems } from "../../Redux/Game/game-selectors";
import { selectMovieGridItems } from "../../Redux/Movie/movie-selectors";
import { selectTVGridItems } from "../../Redux/TVShow/tv-selectors";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LeftGridArrow, RightGridArrow } from "../../Utils/GridScrollArrows";

class CollectionGrid extends React.Component {
  constructor() {
    super();
    this.gridRef = React.createRef();
  }

  render() {
    const { gameGridItems, movieGridItems, tvShowGridItems, games, movies, tvshow } = this.props;
    return (
      <div className="collection-grid">
        <span className="collection-grid__left-arrow">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="collection-grid__left-arrow--icon"
            onClick={() => LeftGridArrow(this.gridRef)}
          />
        </span>
        <div className="collection-grid__outer" ref={this.gridRef}>
          <div className="collection-grid__inner">
            {games
              ? gameGridItems.filter(item => item.id < 4).map(item => (
                <CollectionGridItem key={item.id} item={item} demo />
              ))
              : null}
            {movies
              ? movieGridItems.map(item => (
                <CollectionGridItem key={item.id} item={item} />
              ))
              : null}
            {tvshow
              ? tvShowGridItems.map(item => (
                <CollectionGridItem key={item.id} item={item} />
              ))
              : null}
          </div>
          <span className="collection-grid__right-arrow">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="collection-grid__right-arrow--icon"
              onClick={() => RightGridArrow(this.gridRef)}
            />
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameGridItems: selectGameGridItems(state),
  movieGridItems: selectMovieGridItems(state),
  tvShowGridItems: selectTVGridItems(state)
});

export default connect(mapStateToProps)(CollectionGrid);
