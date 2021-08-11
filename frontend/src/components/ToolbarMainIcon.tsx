import React from 'react';
import styled from "styled-components";

interface ToolbarMainIconProps {
    isActive: boolean
    onClick: (id:number) => void
    appId: number
}

const ToolbarMainIcon: React.FC<ToolbarMainIconProps> = ({children, isActive, onClick, appId}) => {
    return (
        <ToolbarMainIconStyled onClick={() => onClick(appId)} className={'toolbar__icon' + (isActive ? ' active' : '')}>
            {children}
        </ToolbarMainIconStyled>
    );
};

const ToolbarMainIconStyled = styled.div`
  padding: 1rem 1rem;
  height: 100%;
  width: 5rem;
  background-color: var(--toolbar-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  &:hover {
    filter: brightness(140%);
    .startup-icon {
      fill: aqua;
    }
  }
  
  &.toolbar__icon.active {
    filter: brightness(120%);
  }
  
  svg {
    width: 50%;
    height: 50%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default ToolbarMainIcon;