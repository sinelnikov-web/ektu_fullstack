import React from 'react';
import styled from "styled-components";
import {FileType, FileTypes} from "./Desktop";
import File from "./File";
import Window from "./Window";

interface FolderProps {
    innerFiles: Array<FileType>
    onDoubleClick: (title: string, type: FileTypes, id: number) => void
    onFileClose: (id: number) => void
    files: Array<FileType>
}



const Folder:React.FC<FolderProps> = ({innerFiles, onDoubleClick, onFileClose, files}) => {
    return (
        <FolderStyled className={'folder'}>
            {innerFiles.map(file => {
                return(
                    <File
                        key={file.id}
                        onDoubleClick={onDoubleClick}
                        onFileClose={onFileClose}
                        files={files}
                        file={file}
                    />
                )
            })}
        </FolderStyled>
    );
};

const FolderStyled = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white-color);
  display: flex;
  padding: 1rem;
  .file:hover {
    background: rgba(0, 0, 0, 0.2)!important;
  }
  .file__title {
    text-align: center;
    color: black;
    text-shadow: none;
    font-weight: 400;
  }
  
`

export default Folder;