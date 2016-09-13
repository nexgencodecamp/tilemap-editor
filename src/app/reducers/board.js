import * as types from '../constants/ActionTypes'
import * as globals from '../constants/GameRules'
import _ from 'lodash'

const initialState = generateBoard()

function generateBoard () {
  var boardDataObj = {}
  var boardDataArray = []

  for ( var i=0; i < globals.numRows; i++ ) {
      var rowArr = [];
      for ( var j=0; j < globals.numCols; j++) {
        rowArr.push(0)
      }
      boardDataArray.push(rowArr);
  }
  boardDataObj.boardData = boardDataArray;
  return boardDataObj;
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
