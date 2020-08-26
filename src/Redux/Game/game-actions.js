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
            console.log(newArray);
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