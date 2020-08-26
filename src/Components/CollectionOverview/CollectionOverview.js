import React from "react";
import "./CollectionOverview.scss";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { connect } from 'react-redux';
import { selectCollectionData } from '../../Redux/Collection/collection-selectors';

const CollectionOverview = ({ games, movies, tvshow, collection }) => (
  <div className="collection-overview">
    {collection.map(items => (
      <CollectionPreview
        key={items.id}
        title={items.title}
        start={items.start}
        end={items.end}
        games={games}
        movies={movies}
        tvshow={tvshow}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  collection: selectCollectionData(state)
});

export default connect(mapStateToProps)(CollectionOverview);
