import React, { PropTypes } from 'react'
import Tile from '../tile/Tile'

import { connect } from 'react-redux'
import { chooseMove } from '../../actions'

import './board.scss'

const tilesData = [
  { col: 0, row: 0 },
  { col: 1, row: 0 },
  { col: 2, row: 0 },
  { col: 3, row: 0 },
  { col: 4, row: 0 },
  { col: 0, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 3, row: 1 },
  { col: 4, row: 1 },
  { col: 0, row: 2 },
  { col: 1, row: 2 },
  { col: 2, row: 2 },
  { col: 3, row: 2 },
  { col: 4, row: 2 },
  { col: 0, row: 3 },
  { col: 1, row: 3 },
  { col: 2, row: 3 },
  { col: 3, row: 3 },
  { col: 4, row: 3 },
  { col: 0, row: 4 },
  { col: 1, row: 4 },
  { col: 2, row: 4 },
  { col: 3, row: 4 },
  { col: 4, row: 4 },
]

function Board({
  onTileClick,
  boardData,
}) {
  return (
    <div className="grid">
      <div className="gridList">
        {tilesData.map((tile) => (
          <Tile
            key={[tile.col, tile.row]}
            onClick={onTileClick}
            owner={(() => {
              return boardData[tile.row][tile.col]
                ? boardData[tile.row][tile.col]
                : null
            })()}
            {...tile}
          />
        ))}
      </div>
    </div>
  )
}

Board.propTypes = {
  onTileClick: PropTypes.func.isRequired,
  boardData: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    boardData: state.board.boardData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTileClick: (player, tile) => {
      dispatch(chooseMove(player, tile))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
