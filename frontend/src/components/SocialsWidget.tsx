import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {socialsSelector} from "../selectors/socials-selectors";

interface showSocialsProps {
    showSocials: boolean
}

const SocialsWidget: React.FC<showSocialsProps> = ({showSocials}) => {
    const socials = useSelector(socialsSelector)
    return (
        <SocialsWidgetStyled className={!showSocials ? 'hidden' : ''}>
            {socials.map(social => {
                return(
                    <a key={social.id} href={social.link} className="social-link">
                        <img className={'social-icon'} src={social.icon} alt=""/>
                    </a>
                )
            })}
        </SocialsWidgetStyled>
    );
};

const SocialsWidgetStyled = styled.div`
  position: absolute;
  width: 14rem;
  height: 14rem;
  top: -280%;
  left: -160%;
  padding: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
  background: transparent;
  justify-content: space-between;
  align-content: flex-start;
  backdrop-filter: blur(3px);
  display: flex;
  transition: opacity 0.2s linear;
  &.hidden {
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(20, 21, 24, 1);
    opacity: 0.8;
    z-index: -1;
  }
  .social-link {
    display: block;
    width: 25%;
    height: 25%;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export default SocialsWidget;