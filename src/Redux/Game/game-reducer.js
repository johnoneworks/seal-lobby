import GameActionTypes from "./game-types";

const INITIAL_STATE = {
  isFetching: true,
  isAdditionalFetching: true,
  gameItems: [],
  gameGridItems: [],
  gameCast: [],
  gameVideos: ""
};

const gameReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GameActionTypes.SET_GAME_DATA: {
      return { ...state, gameItems: payload };
    }
    case GameActionTypes.SET_GAME_GRID_DATA: {
      return { ...state, gameGridItems: payload };
    }
    case GameActionTypes.SET_GAME_DATA_SUCCESS: {
      return { ...state, isFetching: false };
    }
    case GameActionTypes.SET_GAME_ADDITIONAL_DATA_SUCCESS: {
      return { ...state, isAdditionalFetching: false };
    }
    case GameActionTypes.SET_GAME_ADDITIONAL_DATA: {
      return {
        ...state,
        // Very Dirty
        gameCast:  [
          {
              cast_id: 12,
              character: "The Protagonist",
              credit_id: "5cab21a50e0a264c7df637a6",
              gender: 2,
              id: 1117313,
              name: "John David Washington",
              order: 0,
              profile_path: "/27C77ni5XmlgkJVbomXPC4tHWVd.jpg"
          }
      ],
        /*
        gameCast: (payload && payload.credits) ? payload.credits.cast : [],
        */
        /*
        gameVideos: payload.videos.results.length
          ? payload.videos.results[0].key
          : "no_trailer_found"
        */
        gameVideos: "no_trailer_found"
      };
    }

    default:
      return state;
  }
};

export default gameReducer;