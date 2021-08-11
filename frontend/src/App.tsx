import React, {useEffect, useState} from 'react';
import ToolBar from "./components/ToolBar";
import styled from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";
import Desktop, {FileType} from "./components/Desktop";
import EmptyFolderIcon from "./assets/images/empty_folder.png";
import ImageIcon from "./assets/images/image.jpg";
import WordIcon from "./assets/images/word.png";
import {openTree} from "./utils/openTree";
import WindowsLoading from "./components/WindowsLoading";
import WelcomeLoading from "./components/WelcomeLoading";

function App() {
    const [openedAppList, setOpenedAppList] = useState<FileType[]>([])
    const fileList: Array<FileType> = [
        {
            id: 0,
            title: 'Папка',
            icon: EmptyFolderIcon,
            type: 'folder',
            isOpen: false,
            isFocusedOnWindow: false,
            isMinimized: false,
            link: EmptyFolderIcon,
            innerFiles: []
        },
        {
            id: 1,
            title: 'Картинка',
            icon: ImageIcon,
            type: 'image',
            isOpen: false,
            isFocusedOnWindow: false,
            isMinimized: false,
            link: EmptyFolderIcon,
            innerFiles: []
        },
        {
            id: 2,
            title: 'Папка1',
            icon: EmptyFolderIcon,
            type: 'folder',
            isOpen: false,
            isFocusedOnWindow: false,
            isMinimized: false,
            link: EmptyFolderIcon,
            innerFiles: [
                {
                    id: 3,
                    title: 'Папка2',
                    icon: EmptyFolderIcon,
                    type: 'folder',
                    isOpen: false,
                    isFocusedOnWindow: false,
                    isMinimized: false,
                    link: EmptyFolderIcon,
                    innerFiles: []
                },
                {
                    id: 5,
                    title: 'Картинка2',
                    icon: ImageIcon,
                    type: 'image',
                    isOpen: false,
                    isFocusedOnWindow: false,
                    isMinimized: false,
                    link: EmptyFolderIcon,
                    innerFiles: []
                },
                {
                    id: 15,
                    title: 'word',
                    icon: WordIcon,
                    type: 'word',
                    isOpen: false,
                    isFocusedOnWindow: false,
                    isMinimized: false,
                    link: 'https://78dd97657404.ngrok.io/docs',
                    innerFiles: []
                }
            ]
        },
    ]
    const [filesTree, setFilesTree] = useState<FileType[]>(fileList)
    const [files, setFiles] = useState<FileType[]>(() => openTree(filesTree))
    const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 5000)
    // }, [])

    return (
        <AppStyled className="App">
            <GlobalStyles/>
            <WelcomeLoading isLoading={isLoading}/>
            {/*<WindowsLoading isLoading={isLoading}/>*/}
            <Desktop filesTree={filesTree} files={files} setFiles={setFiles} setOpenedAppList={setOpenedAppList}
                     openedAppList={openedAppList} setLoading={setIsLoading}/>
            <ToolBar setFiles={setFiles} openedAppList={openedAppList}/>

        </AppStyled>
    );
}

const AppStyled = styled.div`
  max-width: 100vw;
  width: 100vw;
  max-height: 100vh;
  height: 100vh;
  position: relative;
`

export default App;
