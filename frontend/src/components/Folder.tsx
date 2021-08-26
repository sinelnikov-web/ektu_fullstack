import React from 'react';
import styled from "styled-components";
import {FileType, FileTypes} from "./Desktop";
import File from "./File";

interface FolderProps {
    innerFiles: Array<FileType>
    onDoubleClick: (title: string, type: FileTypes, id: number) => void
    files: Array<FileType>
}


const Folder: React.FC<FolderProps> = ({innerFiles, onDoubleClick, files}) => {
    return (
        <FolderStyled className={'folder'}>
            {innerFiles.map(file => {
                return (
                    <File
                        key={file.id}
                        onDoubleClick={onDoubleClick}
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
  &.folder {
    display: flex;
    flex-wrap: wrap;
    gap: 2.3rem;
    align-content: flex-start;
  }
  .file:hover {
    background: rgba(0, 0, 0, 0.2) !important;
  }

  .file__title {
    text-align: center;
    color: black;
    text-shadow: none;
    font-weight: 400;
  }

`

export default Folder;