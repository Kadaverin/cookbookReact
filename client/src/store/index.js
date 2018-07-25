import { applyMiddleware,  createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from '../sagas'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import history from './history'

const sagaMiddleware = createSagaMiddleware()


const store = createStore(
  connectRouter(history)(rootReducer), 
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history), 
      sagaMiddleware
    ),
  ),
)

sagaMiddleware.run(rootSaga)

export default store