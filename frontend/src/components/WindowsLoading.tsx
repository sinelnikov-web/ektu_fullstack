import React, {useState} from 'react';
import styled from "styled-components";

interface WindowsLoadingProps {
    isLoading: boolean
}

const WindowsLoading: React.FC<WindowsLoadingProps> = ({isLoading}) => {
    const [isHide, setIsHide] = useState(false)

    return (
        <WindowsLoadingStyled
            className={(!isLoading ? "loaded" : '') + (isHide ? " hidden" : '')}
            onAnimationEnd={() => setIsHide(true)}
        >
            <div className='loader'>
                <div className="bg"></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <h1>Загрузка</h1>
        </WindowsLoadingStyled>
    );
};

const WindowsLoadingStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0077d3;
  z-index: 10000;
  transition: opacity 0.4s linear;

  &.loaded {
    animation: 0.5s disappearing;
  }

  &.hidden {
    display: none;
  }

  @keyframes disappearing {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  h1 {
    color: white;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-weight: 300;
    text-align: center;
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-40%) translateY(-50%);
    width: 50px;
    height: 50px;
    margin: auto;
  }

  .loader .circle {
    position: absolute;
    width: 38px;
    height: 38px;
    opacity: 0;
    transform: rotate(225deg);
    animation-iteration-count: infinite;
    animation-name: orbit;
    animation-duration: 5.5s;
  }

  .loader .circle:after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
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

export default WindowsLoading;