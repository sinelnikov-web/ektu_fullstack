import React from 'react';
import styled from "styled-components";

const Loader = () => {
    return (
        <LoaderStyled className='loader'>
            <div className="bg"></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
        </LoaderStyled>
    );
};

const LoaderStyled = styled.div`

  &.loader {
    width: 20px;
    height: 20px;
  }


  &.loader .circle {
    position: absolute;
    width: 20px;
    height: 20px;
    opacity: 0;
    transform: rotate(225deg);
    animation-iteration-count: infinite;
    animation-name: orbit;
    animation-duration: 5.5s;
  }

  &.loader .circle:after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 5px;
    background: white;
    //box-shadow: 0 0 9px rgba(255, 255, 255, .7);
  }

  &.loader .circle:nth-child(2) {
    animation-delay: 240ms;
  }

  &.loader .circle:nth-child(3) {
    animation-delay: 480ms;
  }

  &.loader .circle:nth-child(4) {
    animation-delay: 720ms;
  }

  &.loader .circle:nth-child(5) {
    animation-delay: 960ms;
  }

  &.loader .bg {
    position: absolute;
    height: 100%;
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

`

export default Loader;