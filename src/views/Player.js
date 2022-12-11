import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AzureMP } from 'react-azure-mp'
export const Player = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        {/* <video autoPlay loop controls muted>
            <source src= "https://cldctestaccount-inwe.streaming.media.azure.net/634f408f-232a-42dc-8005-6700553b811c/goofy.ism/manifest"  type="application/vnd.ms-sstr+xml"></source>
        </video> */}
        <div  className="amp">
          <AzureMP
            skin="amp-flush"
            src={[{src: "https://cldctestaccount-inwe.streaming.media.azure.net/634f408f-232a-42dc-8005-6700553b811c/goofy.ism/manifest", type: "application/vnd.ms-sstr+xml" }]}
          />
        </div>

      </div>
      
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    position:relative;
    text-align:center;
    padding:5px;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    .amp {
      width: 80%;
      height: 80%;
      display: inline-block;
    }
  }
`;