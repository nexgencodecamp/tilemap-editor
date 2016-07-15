import React, { PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import SvgIcon from 'material-ui/SvgIcon'

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
/* eslint-enable max-len */

function plotIcon(owner) {
  return owner === 'player'
    ? <CircleIcon />
    : <CloseIcon />
}

function Tile({
  onClick,
  owner,
  col,
  row,
}) {
  return (
    <FlatButton
      backgroundColor="#cee5fb"
      className="gridTile"
      icon={owner ? plotIcon(owner) : <EmptyIcon />}
      onTouchTap={() => {
        onClick('player', { row, col })
      }}
      rippleColor="#288feb"
      style={{
        height: '50px',
        minWidth: '50px',
        margin: '2px',
      }}
    />
  )
}

Tile.propTypes = {
  onClick: PropTypes.func.isRequired,
  col: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  owner: PropTypes.string,
}

export default Tile
