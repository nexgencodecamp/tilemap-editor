import * as types from '../constants/ActionTypes'

const initialState = {
  canPlayerUndoLastMove: false,
  isNpcProcessing: false,
  isOver: false,
  winner: null,
}

export default function game(state = initialState, action) {
  switch (action.type) {
    case types.ENABLE_UNDO_LAST_MOVE:
      return {
        ...state,
        canPlayerUndoLastMove: true,
      }
    case types.DISABLE_UNDO_LAST_MOVE:
      return {
        ...state,
        canPlayerUndoLastMove: false,
      }
    case types.NPC_START_PROCESSING:
      return {
        ...state,
        isNpcProcessing: true,
      }
    case types.NPC_FINISH_PROCESSING:
      return {
        ...state,
        isNpcProcessing: false,
      }
    case types.END_GAME_WITH_WINNER:
      return {
        ...state,
        isOver: true,
        winner: action.winner,
      }
    case types.END_GAME_WITH_DRAW: {
      return {
        ...state,
        isOver: true,
      }
    }
    default:
      return initialState
  }
}
