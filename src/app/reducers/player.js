import * as types from '../constants/ActionTypes'

const initialState = {
  chosenName: '',
  lastMove: null,
}

export default function game(state = initialState, action) {
  switch (action.type) {
    case types.CHOOSE_NAME:
      return {
        ...state,
        chosenName: action.name,
      }
    case types.CHOOSE_MOVE:
      return {
        ...state,
        lastMove: action.tile,
      }
    default:
      return initialState
  }
}
