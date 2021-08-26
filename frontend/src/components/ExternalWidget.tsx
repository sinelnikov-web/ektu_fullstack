import React, {useState} from 'react';
import styled from "styled-components";
import InstagramIcon from "../assets/images/instagram-icon2.png"
import loadable from '@loadable/component'

const InstagramWidget = loadable(() => import("./InstagramWidget"))

const ExternalWidget = () => {
    const [openWidget, setOpenWidget] = useState(false)
    return (
        <ExternalWidgetStyled className={openWidget ? 'opened' : ''}>
            <img onClick={() => setOpenWidget(prev => !prev)} className={'external-widget__icon' + (openWidget ? ' opened' : '')} src={InstagramIcon} alt=""/>
            <div className={"external-widget__body" + (openWidget ? " active" : '')}>
                {openWidget && <InstagramWidget/>}
            </div>
        </ExternalWidgetStyled>
    );
};

const ExternalWidgetStyled = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  .opened {
    transform: rotate(180deg);
    opacity: 0;
    position: relative;
    transition: all 0.8s linear;
  }
  &:before {
    content: 'X';
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
    font-size: 2rem;
    width: 0;
    height: 0;
    overflow: hidden;
    line-height: 1;
  }
  &.opened:before {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(180deg);
    width: auto;
    height: auto;
    overflow: unset;
  }
  
  .external-widget__icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transform: rotate(0deg);
    transition: all 0.5s linear;
  }
  .external-widget__body {
    position: absolute;
    top: -3000px;
    left: -850%;
    width: 35rem;
    height: 60rem;
    z-index: 10000;
    transition: all 0.8s linear;
    > div {
      width: 100%;
      height: 100%;
    }
    &.active {
      top: 5rem;
    }
    @media (max-width: 567px) {
      position: fixed;
      &.active {
        top: 50%;
      }
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60vw;
      height: 60vh;
    }
    
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 1.5rem rgba(255, 255, 255, 0.6);
    transform-origin: center;
    border-radius: 50%;
    z-index: -1;
    animation: widgetPulse 2s ease-in-out infinite backwards;
  }
  @keyframes widgetPulse {
    0% {
      box-shadow: 0 0 1.5rem rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 0 0 2.5rem rgba(255, 255, 255, 0.8);
    }
    100% {
      box-shadow: 0 0 1.5rem rgba(255, 255, 255, 0);
    }
  }
`

export default ExternalWidget;