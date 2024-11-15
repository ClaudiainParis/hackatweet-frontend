import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import users from '../reducers/users';
import tweets from '../reducers/tweets';
import hashtags from '../reducers/hashtags';


const store = configureStore({
  reducer: { users, tweets, hashtags },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
