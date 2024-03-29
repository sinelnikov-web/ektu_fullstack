import React from 'react';
import styled from "styled-components";

interface WordFileProps {
    src: string
}

const WordFile: React.FC<WordFileProps> = ({src}) => {
    return (
        <WordFileStyled>
            <iframe className={'word-file'} src={'https://view.officeapps.live.com/op/view.aspx?src=' + src} frameBorder="0"/>
        </WordFileStyled>
    );
};

const WordFileStyled = styled.div`
  width: 100%;
  height: 100%;
  .word-file {
    width: 100%;
    height: 100%;
    object-fit: cover;
    p {
      font-size: 6rem;
    }
  }
`

export default WordFile;