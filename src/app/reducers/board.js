import * as types from '../constants/ActionTypes'
import _ from 'lodash'

const initialState = {
  boardData: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
}

export default function board(state = initialState, action) {
  switch (action.type) {
    case types.CHOOSE_MOVE: {
      const boardData = _.cloneDeep(state.boardData)
      boardData[action.tile.row][action.tile.col] = action.player
      return {
        ...state,
        boardData,
      }
    }
    default:
      return initialState
  }
}
