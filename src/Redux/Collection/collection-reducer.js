// TODO: collection assignment looks important
const INITIAL_STATE = {
  collection: [
    {
      id: 1,
      title: "Recently Played",
      start: 0,
      end: 10
    },
    {
      id: 2,
      title: "Top Rated",
      start: 2,
      end: 9
    },
    {
      id: 3,
      title: "New Releases",
      start: 6,
      end: 10
    },
    {
      id: 4,
      title: "You Might Like This",
      start: 1,
      end: 8
    },
    {
      id: 5,
      title: "Since You've Played PP Jackpot",
      start: 4,
      end: 9
    },
    {
      id: 6,
      title: "Trending Now",
      start: 4,
      end: 8
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
