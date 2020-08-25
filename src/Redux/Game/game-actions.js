import GameActionTypes from "./game-types";
import {
    fetchData,
    fetchAdditionalGameData
} from "../../Services/GameService";
import { fetchGrid } from "../../Services/GameGridService";

export const getGamesSuccess = () => ({
    type: GameActionTypes.SET_GAME_DATA_SUCCESS
});

export function getGames() {
    return dispatch => {
        fetchData().then(data => {
            const gameData = data.map(({ results }) => results);
            var newArray = Array.prototype.concat.apply([], gameData);
            console.log("getGames fetchData then");
            console.log(data);
            // data[3]:
            /*
              [
                  {
                      page: 1,
                      results: [
                          {
                              adult: false,
                              backdrop_path: "/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",
                              genre_ids: [28, 80, 878],
                              id: 605116,
                              original_language: "en",
                              original_title: "Project Power",
                              overview: "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
                              popularity: 237.38,
                              poster_path: "/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg"
                              release_date: "2020-08-14"
                              title: "Project Power"
                              video: false
                              vote_average: 6.8
                              vote_count: 727
                          },
                      ],
                      total_pages: 500,
                      total_results: 10000
                  },
              ] 
            */
            console.log(newArray);
            // newArray[60]:
            /*
              [
                  {
                      adult: false
                      backdrop_path: "/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg"
                      genre_ids: (3) [28, 80, 878]
                      id: 605116
                      original_language: "en"
                      original_title: "Project Power"
                      overview: "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers."
                      popularity: 237.38
                      poster_path: "/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg"
                      release_date: "2020-08-14"
                      title: "Project Power"
                      video: false
                      vote_average: 6.8
                      vote_count: 727
                  },
              ]
            */
            dispatch({
                type: GameActionTypes.SET_GAME_DATA,
                payload: newArray
            });
        });
        fetchGrid().then(data => {
            const gameGridData = data.map(({ results }) => results[0]);
            var newArray = Array.prototype.concat.apply([], gameGridData);
            dispatch({
                type: GameActionTypes.SET_GAME_GRID_DATA,
                payload: newArray
            });
            dispatch(getGamesSuccess());
        });
    };
}

export const getGamesAdditionalSuccess = () => ({
    type: GameActionTypes.SET_GAME_ADDITIONAL_DATA_SUCCESS
});

export function getAdditionalGameData(id) {
    return dispatch => {
        fetchAdditionalGameData(id).then(data => {
            dispatch({
                type: GameActionTypes.SET_GAME_ADDITIONAL_DATA,
                payload: data
            });
            dispatch(getGamesAdditionalSuccess());
        });
    };
}