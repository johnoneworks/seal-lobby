// REVIEWED, confidence 80%

import React from "react";
import { PROFILE_GALLERY } from "../../MockData/mockData";
import { IMAGE_BASE_URL, PROFILE_SIZE } from "../../Config/config";
import './ItemPageCast.scss';

class ItemPageCast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didLoad: false
    };
  }

  onLoad = () => {
    this.setState({ didLoad: true });
  };

  render() {
    const { profile_path, name, demo } = this.props;
    const profileUrl = `${IMAGE_BASE_URL}${PROFILE_SIZE}`;
    const style = this.state.didLoad ? {} : { visibility: "hidden" };

    let imgIndex = Math.floor(Math.random() * PROFILE_GALLERY.length);
    if (!demo) {
      return (
        <div className="cast">
          <div className="cast__img-box">
            <img
              src={`${profileUrl}/${profile_path}`}
              style={style}
              alt="profile"
              className="cast__img"
              onLoad={this.onLoad}
            />
          </div>
          <span style={style} className="cast__name">{`${name}`}</span>
        </div>
      );
    }
    if (demo) {
      return (
        <div className="cast">
          <div className="cast__img-box">
            <img
              src={PROFILE_GALLERY[imgIndex]}
              style={style}
              alt="profile"
              className="cast__img"
              onLoad={this.onLoad}
            />
          </div>
          <span style={style} className="cast__name">{`${name}`}</span>
        </div>
      );
    }
  }
}

export default ItemPageCast;
