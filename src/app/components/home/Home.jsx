import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

import Board from '../board/Board'

const actions = [
  <FlatButton
    label="Cancel"
    primary
    onTouchTap={() => null}
  />,
  <FlatButton
    label="Submit"
    primary
    keyboardFocused
    onTouchTap={() => null}
  />,
]

function Home() {
  return (
    <MuiThemeProvider>
      <div className="container home">
        <h1>5x5 Tic-Tac-Toe</h1>
        <Board />
        <Dialog
          title="What's your name, hoss?"
          actions={actions}
          modal={false}
          open={false}
          onRequestClose={() => null}
        >
          <TextField
            hintText="thedailyserver"
          />
        </Dialog>
      </div>
    </MuiThemeProvider>
  )
}

export default Home
