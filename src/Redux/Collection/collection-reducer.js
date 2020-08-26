// TODO: collection assignment looks important
const INITIAL_STATE = {
  collection: [
    {
      id: 1,
      title: "Popular",
      start: 0,
      end: 5
    },
    {
      id: 2,
      title: "Top Rated",
      start: 5,
      end: 7
    },
    {
      id: 3,
      title: "New Releases",
      start: 7,
      end: 9
    },
    {
      id: 4,
      title: "You Might Like This",
      start: 9,
      end: 10
    },
    {
      id: 5,
      title: "Since You've Played PP",
      start: 0,
      end: 5
    },
    {
      id: 6,
      title: "Trending Now",
      start: 6,
      end: 10
    }
  ]
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
