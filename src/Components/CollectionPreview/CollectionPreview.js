import React from "react";
import ReactDOM from "react-dom";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
import { connect } from "react-redux";
import { selectGameItems, selectGameGridItems } from "../../Redux/Game/game-selectors";
import { selectMovieItems } from "../../Redux/Movie/movie-selectors";
import { selectTVItems } from "../../Redux/TVShow/tv-selectors";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleHide } from "../../Utils/TitleHide";
import { LeftArrow, RightArrow } from "../../Utils/ScrollArrows";
import Fade from "react-reveal/Fade";

class CollectionPreview extends React.Component {
  constructor() {
    super();
    this.divRef = React.createRef();
  }

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this);
    TitleHide(node);
  }

  onLeftClick = () => {
    LeftArrow(this.divRef);
  };

  onRightClick = () => {
    RightArrow(this.divRef);
  };

  render() {
    const { title, gameItems, movieItems, tvItems, start, end, games, movies, tvshow } = this.props;
    const gameData = gameItems.slice(start, end);
    const movieData = movieItems.slice(start, end);
    const tvData = tvItems.slice(start, end);
    return (
      <Fade>
        <div className="collection-preview">
          <h1 className="collection-preview__title">{title.toUpperCase()}</h1>

          <div className="collection-preview__box">
            <span className="collection-preview__left-arrow">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="collection-preview__left-arrow-icon"
                onClick={this.onLeftClick}
              />
            </span>
            <span className="collection-preview__right-arrow">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="collection-preview__right-arrow-icon"
                onClick={this.onRightClick}
              />
            </span>
            <div className="collection-preview__inner" ref={this.divRef}>
              {games
                ? gameData.map(item => (
                  <CollectionItem
                    key={item.id}
                    item={item}
                    games={games}
                    movies={movies}
                    tvshow={tvshow}
                    demo
                  />
                ))
                : null
              }

              {movies
                ? movieData.map(item => (
                  <CollectionItem
                    key={item.id}
                    item={item}
                    movies={movies}
                    tvshow={tvshow}
                  />
                ))
                : null}
              {tvshow
                ? tvData.map(item => (
                  <CollectionItem
                    key={item.id}
                    item={item}
                    movies={movies}
                    tvshow={tvshow}
                  />
                ))
                : null}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

const mapStateToProps = state => ({
  gameItems: selectGameGridItems(state),
  movieItems: selectMovieItems(state),
  tvItems: selectTVItems(state)
});

export default connect(mapStateToProps)(CollectionPreview);
