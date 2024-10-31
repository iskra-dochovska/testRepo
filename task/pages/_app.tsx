// pages/_app.tsx
import React from 'react';
import App from '../src/App'; // Adjust the path as needed
import '../styles/globals.css'; // Import your global styles if any

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
