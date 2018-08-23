import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import ReduxPromise from 'redux-promise'


const createStoreWithMiddleware = applyMiddleware(
  ReduxPromise, 
  thunk, 
  logger
)(createStore)

export default createStoreWithMiddleware