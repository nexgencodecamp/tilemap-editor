import { createStore, applyMiddleware, compose } from 'redux'
import devTools from 'remote-redux-devtools'
import reducer from '../reducers'

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(),
    devTools()
  )
  return createStore(reducer, initialState, enhancer)
}
