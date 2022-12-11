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
        {data && <CardSlider data={data} title="Available Movies"/>}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
  }
`;