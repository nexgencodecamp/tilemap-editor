import { combineReducers } from 'redux'
import board from './board'
import game from './game'
import player from './player'

const rootReducer = combineReducers({
  board,
  game,
  player,
})

export default rootReducer
