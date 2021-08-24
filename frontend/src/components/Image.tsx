import React, {useState, WheelEvent} from 'react';
import styled from "styled-components";
import {baseURL} from "../api/base";

interface ImageProps {
    src: string | null
}

const Image: React.FC<ImageProps> = ({src}) => {

    let [scale, setScale] = useState(1)

    const scaleImage = (e: WheelEvent<HTMLDivElement>) => {

        let currentScale = e.deltaY * -0.001

        setScale(prev => Math.min(Math.max(0.125, prev + currentScale), 4))
    }
    return (
        <ImageStyled scale={scale} onWheel={scaleImage}>
            <img src={baseURL + src} alt=""/>
        </ImageStyled>
    );
};

interface ImageStyledProps {
    scale: number
}

const ImageStyled = styled.div<ImageStyledProps>`
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scale(${props => props.scale});
  }
`

export default Image;