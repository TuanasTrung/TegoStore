import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './Slice/authSlice';
import usersReducer from './Slice/usersSlice';
import productsReducer from './Slice/productsSlice';
import productReducer from './Slice/productSlice';
import cartReducer from './Slice/cartSlice';
import orderReducer from './Slice/orderSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'  

const persistConfig = {
  key: 'root',
  // version: 1,
  storage,
  whitelist: 'auth, orders'
}

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  product: productReducer,
  users: usersReducer,
  cart: cartReducer,
  orders: orderReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

export default store;