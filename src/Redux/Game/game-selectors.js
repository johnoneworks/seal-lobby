// REVIEWED

import { createSelector } from "reselect";
import { FixString } from "../../Utils/FixString";

const selectGame = state => state.game;

export const selectGameItems = createSelector(
  [selectGame],
  game => game.gameItems
);

export const selectGameGridItems = createSelector(
  [selectGame],
  game => game.gameGridItems
);

export const selectGameCast = createSelector(
  [selectGame],
  game => game.gameCast
);

export const selectGameVideos = createSelector(
  [selectGame],
  game => game.gameVideos
);

export const selectIsGameFetching = createSelector(
  [selectGame],
  game => game.isFetching
);

export const selectIsAdditionalGameFetching = createSelector(
  [selectGame],
  game => game.isAdditionalFetching
);


export const selectGameByTitle = params =>
  createSelector(
    [selectGameItems],
    gameItems => gameItems.filter(items => FixString(items.title) === params)
  );
