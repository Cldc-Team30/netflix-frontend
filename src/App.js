
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import {Home} from "./views/Home";
import { Player } from './views/Player';
import { Movies } from './views/Movies';
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux'
import { setPlatformBearer } from './datastore/userSlice'
import { useVerfiyUserMutation } from './services/verifyApi';
import styled from "styled-components";



const Spinner = styled.div`
  border: 16px solid #e50914;
  border-top: 16px black solid;
  border-radius: 50%;
  height: 180px;
  width: 180px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;


export const App = () => {
  const dispatch = useDispatch()
  const { user, isAuthenticated , isLoading, getAccessTokenSilently  } = useAuth0();
  const platformBearer = useSelector((state) => state.userState.platformBearer)
  const [verifyUser] = useVerfiyUserMutation();
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

  useEffect (() => {
    if(isAuthenticated){
      verifyUser();
    }
    },[isAuthenticated])

  if(isLoading) {
    return <div className='spinner-container'><Spinner/></div>;
  }
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
