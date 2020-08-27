import GameActionTypes from "./game-types";
import { MOCK_DATA } from "../../MockData/mockData";

const INITIAL_STATE = {
  isFetching: false,
  isAdditionalFetching: false,
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

        gameCast: (payload && payload.credits)
          ? payload.credits.cast
          
          : [
            MOCK_DATA[Math.floor(Math.random() * MOCK_DATA.length)].results[0].credits.cast[0],
            MOCK_DATA[Math.floor(Math.random() * MOCK_DATA.length)].results[0].credits.cast[0],
            MOCK_DATA[Math.floor(Math.random() * MOCK_DATA.length)].results[0].credits.cast[0]
          ],
          
        /*
        : [{
          cast_id: 12,
          character: "The Protagonist",
          credit_id: "5cab21a50e0a264c7df637a6",
          gender: 2,
          id: 1117313,
          name: "Penguin 2",
          order: 0,
          profile_path: "/27C77ni5XmlgkJVbomXPC4tHWVd.jpg"
        }],
        */
        


        gameVideos: (payload && payload.videos && payload.videos.result)
          ? (payload.videos.results.length
            ? payload.videos.results[0].key
            : "no_trailer_found")
          : "no_trailer_found"

        //gameVideos: "no_trailer_found"

      };
    }

    default:
      return state;
  }
};

export default gameReducer;