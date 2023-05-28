import '../assets/styles/globals.css';
import '../assets/styles/header/style.css';
import '../assets/styles/search/style.css';
import { StrictMode } from 'react';
import Head from 'next/head';
import MainLayout from '../components/layouts/MainLayout';
import { SnackbarProvider } from 'notistack'

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import { store, persistor } from '../redux/store';
import store from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from '../contexts/JWTContext';

import productsReducer, { productsFetch } from '../features/productsSlice';
import { productsApi } from '../features/productsApi';

import { CookiesProvider } from 'react-cookie'

// const store = configureStore({
//   reducer: {
//     products: productsReducer,
//     [productsApi.reducerPath]: productsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productsApi.middleware),
// })

// store.dispatch(productsFetch());

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <SnackbarProvider>
        {/* <AuthProvider> */}
        <CookiesProvider>
          <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
              <Head>

              </Head>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            {/* </PersistGate> */}
          </Provider>
        </CookiesProvider>
        {/* </AuthProvider> */}
      </SnackbarProvider>
    </StrictMode>
  )
}
