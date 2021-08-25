import React, {useState} from 'react';
import styled from "styled-components";
import {ReactComponent as ArrowUp} from "../assets/images/up_arrow.svg";
import SocialsWidget from "./SocialsWidget";

const ToolbarSocials = () => {
    const [showSocials, setShowSocials] = useState(false)

    return (
        <ToolbarSocialsStyled className={'toolbar-socials'}>
            <div onClick={() => setShowSocials(prev => !prev)} className="toolbar-icon-wrapper">
                <ArrowUp className={'toolbar__arrow'}/>
            </div>
            <SocialsWidget showSocials={showSocials}/>
        </ToolbarSocialsStyled>
    );
};

const ToolbarSocialsStyled = styled.div`
  position: relative;
  color: var(--white-color);
  text-align: center;
  height: 100%;
  .toolbar-icon-wrapper {
    padding: 0.5rem 0.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    &:hover {
      background-color: var(--toolbar-bg-color);
      filter: brightness(140%);
    }
  }
`

export default ToolbarSocials;