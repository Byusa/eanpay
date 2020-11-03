import { createStore, applyMiddleware } from 'redux'; //added
import thunk from 'redux-thunk';
//import rootReducer from './Reducer/index';
import reducer from './Reducer/index';
import logger from 'redux-logger' // Logger with default options

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


//For persist 
//Whitelist is for adding that reducer to local storage 
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['TransactionReducer'],
  }


  const persistedReducer = persistReducer(persistConfig, reducer)

const middleware =  [logger, thunk];
const store = createStore(persistedReducer, applyMiddleware( ...middleware));


persistStore(store)

export default store;