import logger from 'redux-logger'
import {applyMiddleware} from 'redux'
import {createStore} from 'redux'
import rootreducer from '../reducer/rootreducer'

const middlewares=[logger]


const store=createStore(rootreducer,applyMiddleware(...middlewares))

export default store