import React from 'react';
import styled from "styled-components";

interface ToolbarMainIconProps {
    isActive: boolean
    onClick: (id: number) => void
    appId: number
    cn?: string
}

const ToolbarMainIcon: React.FC<ToolbarMainIconProps> = ({children, isActive,
                                                             onClick, appId, cn=''}) => {
    return (
        <ToolbarMainIconStyled
            tabIndex={0}
            onKeyUp={(e) => e.code === 'Enter' ? onClick(appId) : null}
            onClick={() => onClick(appId)}
            className={'toolbar__icon' + (isActive ? ' active' : '') + ` ${cn}`}>
            {children}
        </ToolbarMainIconStyled>
    );
};

const ToolbarMainIconStyled = styled.div`
  height: 100%;
  width: 5rem;
  background-color: var(--toolbar-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;

  &:hover {
    
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
  
  @media (max-width: 340px) {
    width: 3.5rem;
  }
`

export default ToolbarMainIcon;