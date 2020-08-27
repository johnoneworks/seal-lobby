// REVIEWED, 70% confidence, getting list is really weird

import React from "react";
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../../Config/config";
import { BANNER_GALLERY, POSTER_GALLERY } from "../../MockData/mockData";
import "./ItemPage.scss";
import { connect } from "react-redux";
import imdb from "../../Assets/imdb.png";
import star from "../../Assets/star.png";
import Rating from "react-rating";
import {
  selectGameCast,
  selectGameVideos
} from "../../Redux/Game/game-selectors";
import {
  selectMovieCast,
  selectMovieVideos
} from "../../Redux/Movie/movie-selectors";
import ItemPageFooter from "../ItemPageFooter/ItemPageFooter";
import { getAdditionalGameData } from "../../Redux/Game/game-actions";
import { getAdditionalMovieData } from "../../Redux/Movie/movie-actions";
import { getAdditionalTVData } from "../../Redux/TVShow/tv-actions";
import Fade from "react-reveal/Fade";

class ItemPage extends React.Component {
  componentDidMount() {
    if (!this.props.demo) {
      return this.props.movies
        ? this.props.dispatch(getAdditionalMovieData(this.props.item.id))
        : this.props.dispatch(getAdditionalTVData(this.props.item.id));
    }
    if (this.props.demo) {
      console.log("ItemPage componentDidMount Demo Branch");
      return this.props.dispatch(getAdditionalGameData(this.props.item.id));
    }
    window.scrollTo(0, 0);
  }

  render() {
    const { item, games, movies, tvshow, demo } = this.props;
    console.log("ItemPage");
    console.log(`demo is ${demo}`);
    console.log(this.props);
    const {
      title,
      name,
      overview,
      backdrop_path,
      poster_path,
      vote_average
    } = item;
    // Put this back in img src in the !demo
    // This is temporary for a quick fix
    const background = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`;

    const poster = `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`;

    if (!demo) {
      return (
        <div className="item-page">
          <img
            src={BANNER_GALLERY[Math.floor(Math.random() * BANNER_GALLERY.length)]}
            alt="background"
            className="item-page__bg"
          />
          <div className="item">
            <Fade>
              <div className="item__outer">
                <div className="item__inner">
                  <div className="item__img-box">
                    <img src={POSTER_GALLERY[Math.floor(Math.random() * POSTER_GALLERY.length)]} alt="poster" className="item__poster-img" />
                  </div>
                  <div className="item__text-box">
                    <h1 className="item__title">{title}</h1>
                    <h1 className="item__title">{name}</h1>
                    <span className="item__overview">{overview}</span>
                    <div className="item-rating">
                      <img src={imdb} alt="imdb" className="item-rating__imdb" />
                      <span className="item-rating__rank">{vote_average}/</span>
                      <span className="item-rating__ten">10</span>
                      <img src={star} alt="imdb" className="item-rating__star" />
                    </div>
                    <h1 className="item__cast-title">Cast</h1>
                    <ItemPageFooter games={games} movies={movies} tvshow={tvshow} item={item} />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      );
    }

    if (demo) {
      return (
        <div className="item-page">
          <img
            src={BANNER_GALLERY[Math.floor(Math.random() * BANNER_GALLERY.length)]}
            alt="background"
            className="item-page__bg"
          />
          <div className="item">
            <Fade>
              <div className="item__outer">
                <div className="item__inner">
                  <div className="item__img-box">
                    <img src={POSTER_GALLERY[Math.floor(Math.random() * POSTER_GALLERY.length)]} alt="poster" className="item__poster-img" />
                  </div>
                  <div className="item__text-box">
                    <h1 className="item__title">{title}</h1>
                    <h1 className="item__title">{name}</h1>
                    <span className="item__overview">{overview}</span>
                    <div className="item-rating">
                      <span className="item-rating__rank">{vote_average / 2} / 5</span>

                    </div>
                    <Rating
                      emptySymbol="fa fa-star-o fa-2x"
                      fullSymbol="fa fa-star fa-2x"
                    />
                    <h1 className="item__cast-title">Others Also Liked</h1>
                    <ItemPageFooter games={games} movies={movies} tvshow={tvshow} item={item} />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  gameCast: selectGameCast(state),
  gameVideos: selectGameVideos(state),
  movieCast: selectMovieCast(state),
  movieVideos: selectMovieVideos(state)
});

export default connect(mapStateToProps)(ItemPage);
