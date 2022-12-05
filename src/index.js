import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { store } from './datastore/store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
const {
  REACT_APP_AUTH_CLIENT_ID,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_AUTH0_AUDIENCE
} = process.env
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <Auth0Provider  
        domain={REACT_APP_AUTH_DOMAIN}
        clientId={REACT_APP_AUTH_CLIENT_ID}
        redirectUri={window.location.origin}
        audience={REACT_APP_AUTH0_AUDIENCE}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

if(module.hot) {
  module.hot.accept();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

