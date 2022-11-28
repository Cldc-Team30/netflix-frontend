import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import background from "../assets/login.jpg";
import { useLocation, useNavigate } from 'react-router-dom'
import {BackgroundImage} from "../components/BackgroundImage";
import {Header} from "../components/Header";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Sign In</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={()=>{navigate('/home')}}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        height: 500px;
        gap: 2rem;
        color: white;
        .title {
            font-size: 32px;  
        }
        .container {
          gap: 1rem;
          input {
            padding: 0.5rem 1rem;
            width: 20rem;
            height: 50px;
            border-radius: 4px;
            background: #333;
            color: #fff;
            ::placeholder {
                color: #8c8c8c;
            }
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 4px;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default Login;