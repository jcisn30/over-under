import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index.js'
import rootSaga from './saga/index'

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//create store, inject saga middleware, redux devtools
const store = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)(createStore)(rootReducer);

//run root saga
sagaMiddleware.run(rootSaga);

export default store;