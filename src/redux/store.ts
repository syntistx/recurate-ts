/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducers from './reducers/rootReducers';

const persistConfig = {
  key: 'root',
  storage,
};

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducers);

export const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

export const presistor = persistStore(store);
