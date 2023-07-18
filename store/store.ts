import {createStore, applyMiddleware} from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from  'redux-thunk';
import { rootReducer } from './reducers';
import { storage } from './storage-persist';

const persistConfig: any = {
    key: 'root',
    storage:storage
  };
  const persistedReducer = persistReducer<any, any>(persistConfig,rootReducer);
  const middleware = applyMiddleware(thunk);
  let store = createStore(persistedReducer, middleware);
  let persistor = persistStore(store);
  
  export {store, persistor};