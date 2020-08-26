import React, { Suspense, lazy } from "react";
import "./Games.scss";
import { connect } from "react-redux";
import {
    selectGameItems,
    selectIsGameFetching
} from "../../Redux/Game/game-selectors";
import { getGames } from "../../Redux/Game/game-actions";

const CollectionGridGame = React.lazy(() => import("../../Components/CollectionGrid/CollectionGridGame"));

const CollectionOverviewGame = React.lazy(() =>
    import("../../Components/CollectionOverview/CollectionOverviewGame")
);

const Footer = React.lazy(() => import("../../Components/Footer/Footer"));

class Games extends React.Component {
    componentDidMount() {
        this.props.dispatch(getGames());
    }

    render() {
        return (
            <div className="games">
                <Suspense fallback={<div></div>}>
                    <CollectionGridGame games />
                    <CollectionOverviewGame games />
                    <Footer />
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gameItems: selectGameItems(state),
    isFetching: selectIsGameFetching(state)
});

export default connect(mapStateToProps)(Games);