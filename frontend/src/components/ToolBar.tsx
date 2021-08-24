import React from 'react';
import styled from "styled-components";
import ToolbarMainIcon from "./ToolbarMainIcon";
import {ReactComponent as StartUpIcon} from "../assets/images/windows_startup.svg"
import {ReactComponent as ArrowUp} from "../assets/images/up_arrow.svg"
import {ReactComponent as VolumeIcon} from "../assets/images/volume_icon.svg"
import ToolbarAdditionalIcon from "./ToolbarAdditionalIcon";
import ToolbarDateTime from "./ToolbarDateTime";
import {FileType} from "./Desktop";
import LazyImage from "./LazyImage/LazyImage";
import {baseURL} from "../api/base";
import ToolbarSearch from "./ToolbarSearch";
import ToolbarWeather from "./ToolbarWeather";
import ToolbarLanguage from "./ToolbarLanguage";

interface ToolBarProps {
    openedAppList: Array<FileType>
    setOpenedAppList: (openedAppList: Array<FileType>) => void
    setFiles: (cllbck: (files: Array<FileType>) => Array<FileType>) => void
    files: Array<FileType>
}

const ToolBar = React.memo<ToolBarProps>(({openedAppList, setFiles, files, setOpenedAppList}) => {

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
        <ToolBarStyled className={'toolbar'}>
            <div className="toolbar__left-side">
                <ToolbarMainIcon appId={-1} onClick={onFileMaximize} isActive={false}>
                    <StartUpIcon className={'startup-icon'}/>
                </ToolbarMainIcon>
                <ToolbarMainIcon appId={-2} onClick={onFileMaximize} isActive={false}>
                    <ToolbarSearch setFiles={setFiles} files={files}/>
                </ToolbarMainIcon>
                {openedAppList.map(app => {
                    return (
                        <ToolbarMainIcon appId={app.id} onClick={onFileMaximize} isActive={app.isFocusedOnWindow}
                                         key={app.id}>
                            <LazyImage src={baseURL + app.icon} alt="" cn={'toolbar-image'}/>
                        </ToolbarMainIcon>
                    )
                })}
            </div>
            <div className="toolbar__right-side">
                <ToolbarAdditionalIcon>
                    <ToolbarWeather/>
                </ToolbarAdditionalIcon>
                <ToolbarAdditionalIcon>
                    <div className="toolbar-icon-wrapper">
                        <ArrowUp className={'toolbar__arrow'}/>
                    </div>
                </ToolbarAdditionalIcon>
                <ToolbarAdditionalIcon>
                    <ToolbarLanguage/>
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
  z-index: 1335;
  .toolbar-image {
    width: 3rem;
    height: 3rem;
  }
  .toolbar__left-side {
    display: flex;
  }

  .toolbar__right-side {
    display: flex;
  }

  .toolbar__arrow, .toolbar__volume {
    width: 2.5rem;
    padding: 0 5px;
  }
  .startup-icon {
    width: 2rem;
    height: 2rem;
  }
  @media (max-width: 767px) {

  }
`

export default ToolBar;