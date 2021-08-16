import React, {useEffect, useState} from 'react';
import ToolBar from "./components/ToolBar";
import styled from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";
import Desktop, {FileType} from "./components/Desktop";
import EmptyFolderIcon from "./assets/images/empty_folder.png";
import InstagramIcon from "./assets/images/instagram-icon.png";
import ImageIcon from "./assets/images/image.jpg";
import WordIcon from "./assets/images/word.png";
import {openTree} from "./utils/openTree";
import WindowsLoading from "./components/WindowsLoading";
import WelcomeLoading from "./components/WelcomeLoading";
import {useDispatch, useSelector} from "react-redux";
import {getFilesTree} from "./redux/files-reducer";
import {filesTreeSelector} from "./selectors/files-selectors";
import {getActivities} from "./redux/activities-reducer";

function App() {
    const [openedAppList, setOpenedAppList] = useState<FileType[]>([])

    const filesTree = useSelector(filesTreeSelector)
    const [files, setFiles] = useState<FileType[]>(() => openTree(filesTree))
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFilesTree())
        dispatch(getActivities())
    }, [])
    useEffect(() => {
        if (filesTree.length > files.length) {
            setFiles(openTree(filesTree))
        }
    }, [filesTree])
    return (
        <AppStyled className="App">
            <GlobalStyles/>
            {/*<WelcomeLoading isLoading={isLoading}/>*/}
            {/*<WindowsLoading isLoading={isLoading}/>*/}
            <Desktop filesTree={filesTree} files={files} setFiles={setFiles} setOpenedAppList={setOpenedAppList}
                     openedAppList={openedAppList} setLoading={setIsLoading}/>
            <ToolBar files={files} setFiles={setFiles} openedAppList={openedAppList} setOpenedAppList={setOpenedAppList}/>

        </AppStyled>
    );
}

const AppStyled = styled.div`
  max-width: 100vw;
  width: 100vw;
  max-height: 100vh;
  height: 100vh;
  position: relative;
  * {
    user-select: none;
  }
`

export default App;
