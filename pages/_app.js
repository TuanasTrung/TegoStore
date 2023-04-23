import '../assets/styles/globals.css';
import '../assets/styles/header/style.css';
import '../assets/styles/search/style.css';
import { StrictMode } from 'react';
import Head from 'next/head';
import MainLayout from '../components/layouts/MainLayout';

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <Head>

      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StrictMode>
  )
}
