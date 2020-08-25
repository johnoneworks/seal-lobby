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
        gameCast: payload.credits.cast,
        gameVideos: payload.videos.results.length
          ? payload.videos.results[0].key
          : "no_trailer_found"
      };
    }

    default:
      return state;
  }
};

export default gameReducer;