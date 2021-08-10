import React from 'react';
import styled from "styled-components";

const ToolbarMainIcon: React.FC = ({children}) => {
    return (
        <ToolbarAdditionalIconStyled>
            {children}
        </ToolbarAdditionalIconStyled>
    );
};

const ToolbarAdditionalIconStyled = styled.div`
  padding: 1rem 0;
  height: 100%;
  background-color: var(--toolbar-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: default;
  &:hover {
    filter: brightness(140%);
  }
  
  svg {
    width: 55%;
    height: 100%;
  }
`

export default ToolbarMainIcon;