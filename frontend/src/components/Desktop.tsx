import React, {ReactElement, useEffect, useState} from 'react';
import loadable from '@loadable/component'
import styled from "styled-components";
import desktopBackground from "../assets/images/desktop_bg3.webp"
import Folder from "./Folder";
import Image from "./Image";
import WordFile from "./WordFile";
import InstagramWidget from "./InstagramWidget";
import Browser from "./Browser";
import ExternalWidget from "./ExternalWidget";

const Window = loadable(() => import("./Window"))
const File = loadable(() => import("./File"))

export type FileTypes = 'folder' | 'application' | 'image' | 'office' | 'widget' | 'browser'

export type FileType = {
    id: number
    title: string
    icon: string
    type: FileTypes
    isOpen: boolean
    isFocusedOnWindow: boolean
    innerFiles: Array<FileType>
    isMinimized: boolean
    link: string | null
    file: string | null
}

interface DesktopProps {
    setOpenedAppList: (openedAppList: Array<FileType>) => void
    openedAppList: Array<FileType>
    setFiles: (cllbck: (files: Array<FileType>) => Array<FileType>) => void
    files: Array<FileType>
    filesTree: Array<FileType>
    setLoading: (state: boolean) => void
}


const Desktop = React.memo<DesktopProps>(({
                                              setOpenedAppList, openedAppList,
                                              files, setFiles, filesTree, setLoading
                                          }) => {


    useEffect(() => {
        setOpenedAppList(files.filter(filteredFile => filteredFile.isOpen))
    }, [files])

    const onFileDblClick = (title: string, type: FileTypes, id: number) => {
        setFiles(prev => {
            return prev.map(file => {
                if (file.id === id) {
                    return {...file, isOpen: true, isFocusedOnWindow: true, isMinimized: false}
                } else if (file.isFocusedOnWindow) {
                    return {...file, isFocusedOnWindow: false}
                } else {
                    return file
                }
            })
        })
    }

    const onFileClose = (id: number) => {
        setFiles(prev => {
            return prev.map(file => {
                if (file.id === id) {
                    setOpenedAppList(files.filter(filteredFile => filteredFile.isOpen && filteredFile.id !== id))
                    return {...file, isOpen: false}
                } else {
                    return file
                }
            })
        })
    }

    const onFileMinimize = (id: number) => {
        setFiles(prev => {
            return prev.map(file => {
                if (file.id === id) {
                    setOpenedAppList(files.filter(filteredFile => filteredFile.isOpen && filteredFile.id !== id))
                    return {...file, isMinimized: true}
                } else {
                    return file
                }
            })
        })
    }

    const onFileWindowFocus = (id: number) => {
        setFiles(prev => {
            return prev.map(file => {
                if (file.id === id && file.isOpen) {
                    return {...file, isFocusedOnWindow: true}
                } else if (file.isFocusedOnWindow) {
                    return {...file, isFocusedOnWindow: false}
                } else {
                    return file
                }
            })
        })
    }

    const backgroundLoaded = () => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    const [desktopFiles, setDesktopFiles] = useState<Array<ReactElement> | null>(null)

    const showDesktopFiles = () => {
        let filesLst: Array<ReactElement> = []
        filesTree.map(file => {
            filesLst.push(
                <File
                    key={file.id}
                    file={file}
                    onDoubleClick={onFileDblClick}
                    files={files}
                />
            )
        })
        setDesktopFiles(filesLst)
    }
    if (!desktopFiles && filesTree.length) {
        showDesktopFiles()
    }
    return (
        <DesktopStyled className={'desktop'}>
            <img className={'desktop-bg'} src={desktopBackground} alt="" onLoad={backgroundLoaded}/>
            <ExternalWidget/>
            {
                desktopFiles
            }
            {
                files.map(file => {
                    if (file.isOpen && file.type === 'folder') {
                        return <Window
                            key={file.id}
                            openedFilesCount={openedAppList.length}
                            file={file}
                            onWindowFocus={onFileWindowFocus}
                            onFileClose={onFileClose} id={file.id}
                            onFileMinimize={onFileMinimize}
                            windowContent={<Folder onDoubleClick={onFileDblClick}
                                                   innerFiles={file.innerFiles}
                                                   files={files}
                            />}/>
                    } else if (file.isOpen && file.type === 'image') {
                        return <Window
                            key={file.id}
                            file={file}
                            openedFilesCount={openedAppList.length}
                            onWindowFocus={onFileWindowFocus}
                            onFileClose={onFileClose}
                            onFileMinimize={onFileMinimize}
                            id={file.id}
                            windowContent={<Image src={file.file}/>}/>
                    } else if (file.isOpen && file.type === 'office') {
                        return <Window
                            key={file.id}
                            file={file}
                            openedFilesCount={openedAppList.length}
                            onWindowFocus={onFileWindowFocus}
                            onFileClose={onFileClose}
                            onFileMinimize={onFileMinimize}
                            id={file.id}
                            windowContent={<WordFile src={file.file}/>}/>
                    } else if (file.isOpen && file.type === 'widget') {
                        return <Window
                            key={file.id}
                            file={file}
                            openedFilesCount={openedAppList.length}
                            onWindowFocus={onFileWindowFocus}
                            onFileClose={onFileClose}
                            onFileMinimize={onFileMinimize}
                            id={file.id}
                            windowContent={<InstagramWidget/>}/>
                    } else if (file.isOpen && file.type === 'browser') {
                        return <Window
                            key={file.id}
                            file={file}
                            openedFilesCount={openedAppList.length}
                            onWindowFocus={onFileWindowFocus}
                            onFileClose={onFileClose}
                            onFileMinimize={onFileMinimize}
                            id={file.id}
                            windowContent={<Browser/>}/>
                    }
                })
            }
        </DesktopStyled>
    );
});

const DesktopStyled = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  height: calc(100% - 5rem);
  padding: 1rem 8rem 1rem 1rem;
  position: relative;
  overflow: hidden;
  align-content: flex-start;
  z-index: 3;
  .desktop-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    transform-origin: center center;
  }

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    top: 0;
    left: 0;
    z-index: -1;
  }
`

export default Desktop;