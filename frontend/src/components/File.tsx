import React, {Component, DragEventHandler, ReactElement, useEffect, useRef} from 'react';
import styled from "styled-components";
import EmptyFolderIcon from "../assets/images/empty_folder.png";
import FileIcon from "./FileIcon";
import {FileType, FileTypes} from "./Desktop";

interface FileProps {
    onDoubleClick: (title: string, type: FileTypes, id: number) => void
    onFileClose: (id: number) => void
    files: Array<FileType>
    file: FileType
}

const File = React.memo<FileProps>(({onDoubleClick,
                                       files, onFileClose, file}) => {

    const openFile = () => {
        onDoubleClick(file.title, file.type, file.id)
    }

    const fileRef = useRef(null)

    useEffect(() => {

    })

    const dragStart = (e:React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.classList.add('hold')
    }
    const dragEnd = (e:React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.classList.remove('hold')
    }
    return (
        <FileStyled ref={fileRef}>
            <div
                className="file"
                draggable
                onDragStart={dragStart}
                onDragEnd={dragEnd}
                onDoubleClick={openFile}
            >
                <div className="file__icon">
                    <FileIcon icon={file.icon}/>
                </div>
                <h4 className={'file__title'}>{file.title}</h4>
            </div>
        </FileStyled>
    );
});

const FileStyled = styled.div`
  
  text-align: center;
  
  .file:hover {
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  .file__icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    img {
      width: 6rem;
      object-fit: cover;
    }
  }
  .file__title {
    color: var(--white-color);
    font-size: 1.2rem;
    cursor: pointer;
    text-shadow: 0 2px 2px black;
    font-weight: 300;
  }
`

export default File;