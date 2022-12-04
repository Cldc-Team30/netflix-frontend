
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import {Home} from "./views/Home";
import { useAuth0 } from '@auth0/auth0-react'

export const App = () => {
  const { user, isAuthenticated , isLoading } = useAuth0();
  const { getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    (async() => {
      if(!isLoading && isAuthenticated) {
        // console.log(platformBearer)
        const token = await getAccessTokenSilently({
          audience: `https://${process.env.REACT_APP_AUTH_DOMAIN}/api/v2/`,
          scope: "read:all"
        });
        console.log(token)
      }
    }) ();
  }, [user, isAuthenticated, isLoading]);

  return (
    <>
      {!isAuthenticated && (<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>)}
      {isAuthenticated && (<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>)}
    </>
  );
}
