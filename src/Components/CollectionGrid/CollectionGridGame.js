import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsGameFetching } from "../../Redux/Game/game-selectors";

import WithSpinnerGame from "../WithSpinner/WithSpinnerGame";
import CollectionGrid from "./CollectionGrid";

const mapStateToProps = createStructuredSelector({
    isGameGridLoading: selectIsGameFetching,
});

const CollectionGridGame = compose(
    connect(mapStateToProps),
    WithSpinnerGame
)(CollectionGrid);

export default CollectionGridGame;