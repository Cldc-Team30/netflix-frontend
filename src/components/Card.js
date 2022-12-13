import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

export default React.memo(function Card({ index, movieData, isLiked = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="card-container">
        <img
          style={{ backgroundColor: 'white' }}
          src={movieData.videoImg}
          alt="card"
          onClick={() => navigate(`/player/${movieData.id}`)}
        />
        <h3>{movieData.videoName} <span>{movieData.genre}</span></h3>
        <p>{movieData.description}</p>
      </div>
    </Container>
  );
});

const Container = styled.div`
  max-width: 400px;
  width: 300px;
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
  p{
    color:#FFFDD0;
    font-weight:200;
  }
  span{
    margin-top:1rem;
    font-size:small;
    float:right;
  }
  .card-container{
    padding: 1rem;
  }
`;
