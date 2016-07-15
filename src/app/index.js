import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Home from './components/home/Home'
import About from './components/about/About'

import './components/bundle.scss'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root')
)
