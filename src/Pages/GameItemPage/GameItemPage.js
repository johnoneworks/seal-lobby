import React from "react";
import ReactDOM from "react-dom";
import "./GameItemPage.scss";
import { connect } from "react-redux";
import ItemPageOverviewContainer from "../../Components/ItemPageOverview/ItemPageOverviewContainer";
import {
  selectGameItems,
  selectIsGameFetching
} from "../../Redux/Game/game-selectors";

import { getGames } from "../../Redux/Game/game-actions";

class GameItemPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getGames());
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  render() {
    const { isFetching } = this.props;
    console.log(this.props.isFetching);
    return (
      <div className="movie-item-page">
        <ItemPageOverviewContainer
          params={this.props.match.params}
          state={this.props.location ? this.props.location.state : ""}
          games
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameData: selectGameItems(state),
  isFetching: selectIsGameFetching(state)
});

export default connect(mapStateToProps)(GameItemPage);
