import React, { PropTypes } from 'react'
import Header from './common/Header'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

function App({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  )
}

App.propTypes = { children: PropTypes.object }

export default App
