import React, { PropTypes, Component } from 'react'
import ItemTypes from '../../constants/ItemTypes';
import { DropTarget } from 'react-dnd';
import FlatButton from 'material-ui/FlatButton'
import SvgIcon from 'material-ui/SvgIcon'

import './tile.scss'

/* eslint-disable max-len */
const CircleIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </SvgIcon>
)

const CloseIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </SvgIcon>
)

const EmptyIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
  </SvgIcon>
)

const boxTarget = {
  drop() {
    return { name: 'Tile' };
  }
};

@DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
/* eslint-enable max-len */

class Tile extends Component {
    static propTypes = {
      connectDropTarget: PropTypes.func.isRequired,
      isOver: PropTypes.bool.isRequired,
      canDrop: PropTypes.bool.isRequired
    };

    constructor (props) {
      super(props)

      this.state = {}
    }

    plotIcon (owner) {
      return owner === 'player'
        ? <CircleIcon />
        : <CloseIcon />
    }

    render () {
      const { canDrop, isOver, connectDropTarget } = this.props;
      const isActive = canDrop && isOver;

      let backgroundColor = '#222';
      if (isActive) {
        backgroundColor = 'darkgreen';
      } else if (canDrop) {
        backgroundColor = 'darkkhaki';
      }

      return connectDropTarget(
        <div className="button-wrapper">
          <FlatButton
            backgroundColor="#cee5fb"
            className="gridTile"
            icon={this.props.owner ? plotIcon(this.props.owner) : <EmptyIcon />}
            // onTouchTap={() => {
            //   onClick('player', { row, col })
            // }}
            // rippleColor="#288feb"
            style={{
              height: '100px',
              minWidth: '100px',
              margin: '2px',
            }}
          />
        </div>
      )
    }
}

Tile.propTypes = {
  onClick: PropTypes.func.isRequired,
  col: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  owner: PropTypes.string,
}

export default Tile
