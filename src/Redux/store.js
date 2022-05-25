import { createStore, applyMiddleware, compose } from 'redux';

import axios from 'axios';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';


const persistConfig = {
     key: 'root',
     storage,
     whitelist: ['users', 'profile'],
     blacklist: [],
}
const persistedReducer = persistReducer(persistConfig, rootReducer);



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer,
     composeEnhancers(applyMiddleware(thunk.withExtraArgument(axios)))
);
export const persistor = persistStore(store);
