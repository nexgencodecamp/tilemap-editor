import React, { PropTypes } from 'react'
import * as globals from '../../constants/GameRules'
import Tile from '../tile/Tile'

import { connect } from 'react-redux'
import { chooseMove } from '../../actions'

import './board.scss'

const tilesData = createTiles()

function createTiles () {
  var tileData = []
  for (var i = 0; i < globals.numRows; i++) {
    for (var j = 0; j < globals.numCols; j++) {
      var pos = {}
      pos.col = j
      pos.row = i
      tileData.push(pos)
    }
  }
  return tileData
}

function Board ({onTileClick, boardData}) {
  return (
    <div className='grid'>
      <div className='gridList'>
        {tilesData.map((tile) => (
                                   <Tile
                                     key={[tile.col, tile.row]}
                                     onClick={onTileClick}
                                     owner={(() => {
                                       return boardData[tile.row][tile.col] ? boardData[tile.row][tile.col] : null
                                     })()}{...tile}
                                   />
                                 ))}
      </div>
    </div>
  )
}

Board.propTypes = {
  onTileClick: PropTypes.func.isRequired,
  boardData: PropTypes.array.isRequired
}

function mapStateToProps (state) {
  return {
    boardData: state.board.boardData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onTileClick: (player, tile) => {
      dispatch(chooseMove(player, tile))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
