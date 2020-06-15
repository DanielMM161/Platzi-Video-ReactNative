import { createStore,applyMiddleware } from 'redux';
import reducers  from './reducers';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'; 

// const store = createStore(reducers,{},applyMiddleware(reduxThunk))

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blackList: ['selectedMovie']
  };
  
  const persistedReducer = persistReducer(persistConfig, reducers);
  
  const store = createStore(persistedReducer,applyMiddleware(reduxThunk));
  
  const persistor = persistStore(store);
  
  export {store, persistor};
// export default store;