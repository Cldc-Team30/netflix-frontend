import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Navbar} from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardSlider from "../components/CardSlider";
import {useGetVideosQuery} from '../services/videosApi'

export const Movies = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    data, isLoading
  } = useGetVideosQuery()
  const navigate = useNavigate();
  const dispatch = useDispatch();


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
      <h2>Available Movies</h2>
        {data && <CardSlider data={data} />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  h2{
    margin-left:3.5rem;
  }
  .data {
    margin-top: 8rem;
  }
`;