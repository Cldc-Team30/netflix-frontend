import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { Auth0Provider } from '@auth0/auth0-react';
const {
  REACT_APP_AUTH_CLIENT_ID,
  REACT_APP_AUTH_DOMAIN,
} = process.env
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider  
      domain={REACT_APP_AUTH_DOMAIN}
      clientId={REACT_APP_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

