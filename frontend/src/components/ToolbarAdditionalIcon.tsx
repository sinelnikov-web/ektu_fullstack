import React from 'react';
import styled from "styled-components";

interface ToolbarAdditionalIcon {
    pupup: React.Component
}

const ToolbarAdditionalIcon: React.FC = ({children}) => {
    return (
        <ToolbarAdditionalIconStyled className={'toolbar__additional-icon'}>
            {children}
        </ToolbarAdditionalIconStyled>
    );
};

const ToolbarAdditionalIconStyled = styled.div`
  height: 100%;
  background-color: var(--toolbar-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: default;
  
  svg {
    width: 55%;
    height: 100%;
  }
`

export default ToolbarAdditionalIcon;