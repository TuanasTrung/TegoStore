import '../assets/styles/globals.css';
import '../assets/styles/header/style.css';
import '../assets/styles/search/style.css';
import { StrictMode } from 'react';
import Head from 'next/head';
import MainLayout from '../components/layouts/MainLayout';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import productsReducer, { productsFetch } from '../features/productsSlice';
import { productsApi } from '../features/productsApi';

const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

store.dispatch(productsFetch());

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <Provider store={store}>
        <Head>

        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </StrictMode>
  )
}
