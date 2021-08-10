import React from 'react';
import styled from "styled-components";
import ToolbarMainIcon from "./ToolbarMainIcon";
import {ReactComponent as StartUpIcon} from "../assets/images/windows_startup.svg"
import {ReactComponent as SearchIcon} from "../assets/images/windows_search.svg"
import {ReactComponent as ArrowUp} from "../assets/images/up_arrow.svg"
import {ReactComponent as VolumeIcon} from "../assets/images/volume_icon.svg"
import EmptyFolderIcon from "../assets/images/empty_folder.png"
import ToolbarAdditionalIcon from "./ToolbarAdditionalIcon";
import ToolbarDateTime from "./ToolbarDateTime";
import {FileType} from "./Desktop";

interface ToolBarProps {
    openedAppList: Array<FileType>
    setFiles: (cllbck: (files: Array<FileType>) => Array<FileType>) => void
}

const ToolBar = React.memo<ToolBarProps>(({openedAppList, setFiles}) => {

    const onFileMaximize = (id: number) => {
        setFiles(prev => {
            return prev.map(file => {
                    if (file.id === id) {
                    return {...file, isMinimized: !file.isMinimized, isFocusedOnWindow: true}
                } else if (file.isFocusedOnWindow) {
                    return {...file, isFocusedOnWindow: false}
                } else {
                    return file
                }
            })
        })
    }
    return (
        <ToolBarStyled>
            <div className="toolbar__left-side">
                <ToolbarMainIcon appId={-1} onClick={onFileMaximize} isActive={false}>
                    <StartUpIcon/>
                </ToolbarMainIcon>
                <ToolbarMainIcon appId={-2} onClick={onFileMaximize} isActive={false}>
                    <SearchIcon/>
                </ToolbarMainIcon>
                {openedAppList.map(app => {
                    return(
                        <ToolbarMainIcon appId={app.id} onClick={onFileMaximize} isActive={app.isFocusedOnWindow} key={app.id}>
                            <img src={app.icon} alt=""/>
                        </ToolbarMainIcon>
                    )
                })}
            </div>
            <div className="toolbar__right-side">
                <ToolbarAdditionalIcon>
                    <ArrowUp/>
                </ToolbarAdditionalIcon>
                <ToolbarAdditionalIcon>
                    <VolumeIcon/>
                </ToolbarAdditionalIcon>
                <ToolbarAdditionalIcon>
                    <ToolbarDateTime/>
                </ToolbarAdditionalIcon>
            </div>
        </ToolBarStyled>
    );
});

const ToolBarStyled = styled.div`
  width: 100%;
  background: var(--toolbar-bg-color);
  height: 5rem;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  .toolbar__left-side {
    display: flex;
  }
  .toolbar__right-side {
    display: flex;
  }
`

export default ToolBar;