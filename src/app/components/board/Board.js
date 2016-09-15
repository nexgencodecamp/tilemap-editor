import React, { PropTypes, Component } from 'react'
import * as globals from '../../constants/GameRules'
import Tile from '../tile/Tile'
import Box from '../maptiles/Box';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { connect } from 'react-redux'
import { chooseMove } from '../../actions'

import './board.scss'

let tilesData = null

@DragDropContext(HTML5Backend)
class Board extends Component {

  constructor (props) {
    super (props)
    this.state = { isTilesDataLoaded: false }
  }

  componentDidMount () {
    /* Create the tiles here */
    tilesData = this.createTiles()
    if(tilesData){
      this.setState({ isTilesDataLoaded: true })
    }
  }

  createTiles () {
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

  render () {
    if(!tilesData){
      return (
        <div>I got nothing!</div>
      )
    }
    else{
      return (
        <div>
          <div>
            <Box name="TileImage" />
          </div>
          <div className='grid'>
            <div className='gridList'>
              {tilesData.map((tile) => (
                                         <Tile
                                           key={[tile.col, tile.row]}
                                           onClick={this.props.onTileClick}
                                           owner={(() => {
                                             return this.props.boardData[tile.row][tile.col] ? this.props.boardData[tile.row][tile.col] : null
                                           })()}{...tile}
                                         />
                                       ))}
            </div>
          </div>
        </div>
      )
    }
  }


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
