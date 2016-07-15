import * as types from '../constants/ActionTypes'

export function chooseMove(player, tile) {
  return {
    type: types.CHOOSE_MOVE,
    player,
    tile,
  }
}
