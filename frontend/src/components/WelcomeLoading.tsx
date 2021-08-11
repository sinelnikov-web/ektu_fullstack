import React, {useState} from 'react';
import styled from "styled-components";
import WelcomeBackground from "../assets/images/welcome_bg.jpg"

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
                    <div className='loader'>
                        <div className="bg"></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
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
  background: #0077d3 url(${WelcomeBackground}) no-repeat center center;
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
  
  .loader {
    width: 20px;
    height: 20px;
  }
  
  
  .loader .circle {
    position: absolute;
    width: 20px;
    height: 20px;
    opacity: 0;
    transform: rotate(225deg);
    animation-iteration-count: infinite;
    animation-name: orbit;
    animation-duration: 5.5s;
  }

  .loader .circle:after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 5px;
    background: white;
    //box-shadow: 0 0 9px rgba(255, 255, 255, .7);
  }

  .loader .circle:nth-child(2) {
    animation-delay: 240ms;
  }

  .loader .circle:nth-child(3) {
    animation-delay: 480ms;
  }

  .loader .circle:nth-child(4) {
    animation-delay: 720ms;
  }

  .loader .circle:nth-child(5) {
    animation-delay: 960ms;
  }

  .loader .bg {
    position: absolute;
    width: 70px;
    height: 70px;
    margin-left: -16px;
    margin-top: -16px;
    border-radius: 13px;
    background: transparent;
    animation: bgg 16087ms ease-in alternate infinite;
  }

  @keyframes orbit {
    0% {
      transform: rotate(225deg);
      opacity: 1;
      animation-timing-function: ease-out;
    }
    7% {
      transform: rotate(345deg);
      animation-timing-function: linear;
    }
    30% {
      transform: rotate(455deg);
      animation-timing-function: ease-in-out;
    }
    39% {
      transform: rotate(690deg);
      animation-timing-function: linear;
    }
    70% {
      transform: rotate(815deg);
      opacity: 1;
      animation-timing-function: ease-out;
    }
    75% {
      transform: rotate(945deg);
      animation-timing-function: ease-out;
    }
    76% {
      transform: rotate(945deg);
      opacity: 0;
    }
    100% {
      transform: rotate(945deg);
      opacity: 0;
    }
  }
`

export default WelcomeLoading;