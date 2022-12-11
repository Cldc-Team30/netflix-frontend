
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import {Home} from "./views/Home";
import { Player } from './views/Player';
import { Movies } from './views/Movies';
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux'
import { setPlatformBearer } from './datastore/userSlice'
export const App = () => {
  const dispatch = useDispatch()
  const { user, isAuthenticated , getAccessTokenSilently  } = useAuth0();
  const platformBearer = useSelector((state) => state.userState.platformBearer)
  useEffect(() => {
    const getUserMetadata = async () => {
  
      try {
        const accessToken = await getAccessTokenSilently();
        dispatch(setPlatformBearer(accessToken))
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub, dispatch]);

  return (
    <>
      {!isAuthenticated && (<BrowserRouter>
        <Login />
      </BrowserRouter>)}
      {isAuthenticated && (<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/player/:id' element={<Player />} />
        <Route exact path='/movies' element={<Movies />} />
      </Routes>
    </BrowserRouter>)}
    </>
  );
}
