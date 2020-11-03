import { combineReducers } from 'redux'
import TransactionReducer from './TransactionReducer'
import FetchReducer from './fetchReducer'

export  default combineReducers({
   TransactionReducer,
   FetchReducer,
})


