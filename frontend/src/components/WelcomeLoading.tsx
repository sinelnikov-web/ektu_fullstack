import React, {useState} from 'react';
import styled from "styled-components";
import WelcomeBackground from "../assets/images/welcome_bg.jpg"
import Loader from "./Loader";

interface WelcomeLoadingProps {
    isLoading: boolean
}

const WelcomeLoading: React.FC<WelcomeLoadingProps> = ({isLoading}) => {
    const [isHide, setIsHide] = useState(false)

    return (
        <WelcomeLoadingStyled
            className={(!isLoading ? "loaded" : '') + (isHide ? " hidden" : '')}
            onAnimationEnd={() => setIsHide(true)}
        >
            <div className="loading-plane">
                <div className="user-image">
                    <div className="user-head"></div>
                    <div className="user-body"></div>
                </div>
                <h1 className="user-name">Jambyl Oblysy</h1>
                <div className="welcome-footer">
                    <Loader/>
                    <h2>Добро пожаловать</h2>
                </div>
            </div>
        </WelcomeLoadingStyled>
    );
};

const WelcomeLoadingStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #0077d3 no-repeat center center;
  background-size: cover;
  z-index: 10000;
  transition: opacity 0.4s linear;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //&.loaded {
  //  animation: 0.5s disappearing;
  //}
  //&.hidden {
  //  display: none;
  //}
  .loading-plane {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .user-image {
    width: 200px;
    height: 200px;
    position: relative;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }

  .user-head {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    border: 6px solid white;
    border-radius: 50%;
  }

  .user-body {
    position: absolute;
    top: 69%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 50px;
    border-radius: 100px 100px 0 0;
    border-top: 5px solid white;
    border-left: 5px solid white;
    border-right: 5px solid white;
  }

  .user-name {
    font-weight: 300;
    font-size: 6rem;
  }

  .welcome-footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    h2 {
      font-weight: 300;
      font-size: 2rem;
    }
  }

  &.loaded {
    animation: 0.5s disappearing;
  }

  &.hidden {
    display: none;
  }

  @keyframes disappearing {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }


}
`

export default WelcomeLoading;