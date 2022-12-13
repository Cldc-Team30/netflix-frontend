import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Navbar} from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardSlider from "../components/CardSlider";
import {useGetVideosQuery} from '../services/videosApi'

export const Movies = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(null)
  const {
    data, isLoading
  } = useGetVideosQuery()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect (() => {
    if(data){
      setFilteredMovies(data)
    }
  },[data])
  const filterMovies = (filter) => {
    setFilteredMovies(data.filter((movie) => movie.videoName.includes(filter)))
  }

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} filterMovies={filterMovies}/>
      </div>
      <div className="data">
      <h2>Available Movies</h2>
        {filteredMovies && <CardSlider data={filteredMovies} />}
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