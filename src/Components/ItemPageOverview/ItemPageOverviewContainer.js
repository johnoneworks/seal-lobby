import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
// NOTE: not sure how this works yet
import { selectIsGameFetching } from "../../Redux/Game/game-selectors";
//import { selectIsMovieFetching } from "../../Redux/Movie/movie-selectors";

import WithSpinnerItem from "../WithSpinner/WithSpinnerItem";
import ItemPageOverview from "./ItemPageOverview";

const mapStateToProps = createStructuredSelector({
  //isLoading: selectIsMovieFetching 
  // NOTE: not sure how this plays out 
  isLoading: selectIsGameFetching
});

const ItemPageOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinnerItem
)(ItemPageOverview);

export default ItemPageOverviewContainer;
