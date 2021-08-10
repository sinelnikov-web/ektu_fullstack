import React from 'react';
import styled from "styled-components";

interface ImageFileProps {
    src: string
    title: string
}

const ImageFile: React.FC<ImageFileProps> = ({src, title}) => {
    return (
        <ImageFileStyled>
            
        </ImageFileStyled>
    );
};

const ImageFileStyled = styled.div`

`

export default ImageFile;