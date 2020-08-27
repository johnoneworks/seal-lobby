import React from 'react';
import { connect } from 'react-redux';
import { selectGameByTitle } from "../../Redux/Game/game-selectors";
import { selectMovieByTitle } from '../../Redux/Movie/movie-selectors';
import { selectTVByTitle } from '../../Redux/TVShow/tv-selectors';
import ItemPage from '../../Components/ItemPage/ItemPage';
import { selectSearchedGameByTitle, selectSearchedMovieByTitle, selectSearchedTVShowByTitle } from '../../Redux/Search/search-selectors';
import { selectListGameByTitle, selectListMovieByTitle, selectListTVShowByTitle } from '../../Redux/List/list-selectors';

const ItemPageOverview = ({ gameItemByTitle, movieItemByTitle, tvItemByTitle, games, movies, tvshow, searchedGameItemByTitle, searchedMovieItemByTitle,
	searchedTvItemByTitle, listGameItemByTitle, listMovieItemByTitle, listTvItemByTitle }) => {
	console.log("ItemPageOverview");
	console.log(`games: ${games}`);
	console.log(`gameItemByTitle: ${gameItemByTitle}`);
	console.log(`searchedGameItemByTitle: ${searchedGameItemByTitle}`);
	console.log(`listGameItemByTitle: ${listGameItemByTitle}`);

	return (
		<div className="item-page-overview">
			{
				games
					? (gameItemByTitle.map(item => <ItemPage key={item.id} item={item} games={games} demo />))
					: null
			}
			{
				movies
					? (movieItemByTitle.map(item => <ItemPage key={item.id} item={item} movies={movies} />))
					: null
			}
			{
				tvshow
					? (tvItemByTitle.map(item => <ItemPage key={item.id} item={item} tvshow={tvshow} />))
					: null
			}
			{
				gameItemByTitle.length === 0
					? (searchedGameItemByTitle
						? (searchedGameItemByTitle.map(item => <ItemPage key={item.id} item={item} games={games} demo />))
						: null)
					: null
			}
			{
				movieItemByTitle.length === 0
					? (searchedMovieItemByTitle
						? (searchedMovieItemByTitle.map(item => <ItemPage key={item.id} item={item} movies={movies} />))
						: null)
					: null
			}
			{
				tvItemByTitle.length === 0
					? (searchedTvItemByTitle
						? (searchedTvItemByTitle.map(item => <ItemPage key={item.id} item={item} tvshow={tvshow} />))
						: null)
					: null
			}
			{
				(gameItemByTitle.length === 0) && (searchedGameItemByTitle.length === 0)
					? (listGameItemByTitle
						? (listGameItemByTitle.map(item => <ItemPage key={item.id} item={item} games={games} demo />))
						: null)
					: null
			}
			{
				(movieItemByTitle.length === 0) && (searchedMovieItemByTitle.length === 0)
					? (listMovieItemByTitle
						? (listMovieItemByTitle.map(item => <ItemPage key={item.id} item={item} movies={movies} />))
						: null)
					: null
			}
			{
				(tvItemByTitle.length === 0) && (searchedTvItemByTitle.length === 0)
					? (listTvItemByTitle
						? (listTvItemByTitle.map(item => <ItemPage key={item.id} item={item} tvshow={tvshow} />))
						: null)
					: null
			}
		</div>
	);
}

const mapStateToProps = (state, ownProps) => ({
	gameItemByTitle: selectGameByTitle(ownProps.params.title)(state),
	movieItemByTitle: selectMovieByTitle(ownProps.params.title)(state),
	tvItemByTitle: selectTVByTitle(ownProps.params.name)(state),
	searchedGameItemByTitle: selectSearchedGameByTitle(ownProps.state ? ownProps.state.id : null)(state),
	searchedMovieItemByTitle: selectSearchedMovieByTitle(ownProps.state ? ownProps.state.id : null)(state),
	searchedTvItemByTitle: selectSearchedTVShowByTitle(ownProps.state ? ownProps.state.id : null)(state),
	listGameItemByTitle: selectListGameByTitle(ownProps.state ? ownProps.state.id : null)(state),
	listMovieItemByTitle: selectListMovieByTitle(ownProps.state ? ownProps.state.id : null)(state),
	listTvItemByTitle: selectListTVShowByTitle(ownProps.state ? ownProps.state.id : null)(state)
})

export default connect(mapStateToProps)(ItemPageOverview);

