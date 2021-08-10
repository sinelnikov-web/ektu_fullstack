import React, {useEffect, useState} from 'react';
import Window from "./Window";
import File from "./File";
import EmptyFolderIcon from "../assets/images/empty_folder.png";
import ImageIcon from "../assets/images/image.jpg";
import styled from "styled-components";
import desktopBackground from "../assets/images/desktop_bg.jpg"
import Folder from "./Folder";
import {openTree} from "../utils/openTree";
import Image from "./Image";
import WordFile from "./WordFile";

export type FileTypes = 'folder' | 'application' | 'image' | 'word'

export type FileType = {
    id: number
    title: string
    icon: string
    type: FileTypes
    isOpen: boolean
    isFocusedOnWindow: boolean
    innerFiles: Array<FileType>
    isMinimized: boolean
    link: string
}

interface DesktopProps {
    setOpenedAppList: (openedAppList:Array<FileType>) => void
    openedAppList: Array<FileType>
    setFiles: (cllbck: (files: Array<FileType>) => Array<FileType>) => void
    files: Array<FileType>
    filesTree: Array<FileType>
}

// let obj = {
//     id: rnd,
//     title: rnd.toString(),
//     icon: EmptyFolderIcon,
//     type: 'folder',
//     isOpen: false,
//     isFocusedOnWindow: false,
//     innerFiles: [
//         {
//             id: rnd2,
//             title: rnd.toString(),
//             icon: EmptyFolderIcon,
//             type: 'folder',
//             isOpen: false,
//             isFocusedOnWindow: false,
//             innerFiles: []
//         }
//     ]
// }

const Desktop = React.memo<DesktopProps>(({
                                              setOpenedAppList, openedAppList,
                                          files, setFiles, filesTree}) => {



    useEffect(() => {
        setOpenedAppList(files.filter(filteredFile => filteredFile.isOpen))
    }, [files])

    const onFileDblClick = (title: string, type: FileTypes, id: number) => {
        setFiles(prev => {
            return prev.map(file => {
                if (file.id === id) {
                    return {...file, isOpen: true, isFocusedOnWindow: true}
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
                } else if (file.isFocusedOnWindow){
                    return {...file, isFocusedOnWindow: false}
                } else {
                    return file
                }
            })
        })
    }
    return (
        <DesktopStyled>
            <img className={'desktop-bg'} src={desktopBackground} alt=""/>
            {
                filesTree.map(file => {
                    return(
                        <File
                            key={file.id}
                            file={file}
                            onDoubleClick={onFileDblClick}
                            onFileClose={onFileClose}
                            files={files}
                        />
                    )
                })
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
                                                                                                                               onFileClose={onFileClose}
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
                            windowContent={<Image src={file.icon}/>}/>
                    } else if (file.isOpen && file.type === 'word') {
                        return <Window
                            key={file.id}
                            file={file}
                            openedFilesCount={openedAppList.length}
                            onWindowFocus={onFileWindowFocus}
                            onFileClose={onFileClose}
                            onFileMinimize={onFileMinimize}
                            id={file.id}
                            windowContent={<WordFile src={file.link}/>}/>
                    }
                })
            }
        </DesktopStyled>
    );
});

const DesktopStyled = styled.main`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: calc(100% - 5rem);
  padding: 1rem;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  .desktop-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

export default Desktop;