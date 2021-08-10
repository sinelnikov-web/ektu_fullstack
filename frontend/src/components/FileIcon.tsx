import React from 'react';

interface FileIconProps {
    icon: string
}

const FileIcon = React.memo<FileIconProps>(({icon}) => {
    return (
        <img src={icon} alt=""/>
    );
});

export default FileIcon;