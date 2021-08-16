import React from 'react';
import LazyImage from "./LazyImage/LazyImage";
import {baseURL} from "../api/base";

interface FileIconProps {
    icon: string
}

const FileIcon = React.memo<FileIconProps>(({icon}) => {
    return (
        <LazyImage src={baseURL + icon} alt=""/>
    );
});

export default FileIcon;