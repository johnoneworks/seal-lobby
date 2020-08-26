import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsGameFetching } from "../../Redux/Game/game-selectors";

import WithSpinnerGame from "../WithSpinner/WithSpinnerGame";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
    isGameOverviewLoading: selectIsGameFetching,
});

const CollectionOverviewGame = compose(
    connect(mapStateToProps),
    WithSpinnerGame
)(CollectionOverview);

export default CollectionOverviewGame;