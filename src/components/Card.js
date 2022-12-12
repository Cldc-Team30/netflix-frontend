import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

export default React.memo(function Card({ index, movieData, isLiked = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <img
        style={{backgroundColor:'white'}}
        src={movieData.videoImg}
        alt="card"
        onClick={() => navigate(`/player/${movieData.id}`)}
      />
    </Container>
  );
});

const Container = styled.div`
  max-width: 400px;
  width: 400px;
  height: 100%;
  cursor: pointer;
  position: relative;
  margin: 10px;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;
