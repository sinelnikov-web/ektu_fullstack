import React from 'react';
import styled from "styled-components";
import {ElfsightWidget} from "react-elfsight-widget";

const InstagramWidget = () => {
    return (
        <InstagramWidgetStyled>

            <ElfsightWidget widgetID={'1abd6edf-21fd-4aa7-b8d4-f2ef52e89426'}/>
        </InstagramWidgetStyled>
    );
};

const InstagramWidgetStyled = styled.div`

  z-index: 50;
  width: 300px;
  height: 480px;
  background-color: white;
`

export default InstagramWidget;