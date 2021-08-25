import React, {useEffect, useRef, useState} from 'react';
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
import {getWeather} from "./redux/weather-reducer";
import {languageSelector} from "./selectors/system-selectors";
import {changeLanguage} from "./redux/actions/system-actions";
import {LanguageType} from "./components/ToolbarLanguage";
import {getNews} from "./redux/news-reducer";
import Tour from "./components/Tour";
import {useTranslation} from "react-i18next";

function App() {
    const {t, i18n} = useTranslation()
    const languages = ['ru', 'kk']
    const isTourCompleted = localStorage.getItem('tourComplete')
    const [openedAppList, setOpenedAppList] = useState<FileType[]>([])
    const language = useSelector(languageSelector)
    const filesTree = useSelector(filesTreeSelector)
    const [files, setFiles] = useState<FileType[]>(() => openTree(filesTree))
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const languageRef = useRef(language)
    useEffect(() => {
        dispatch(getFilesTree())
        dispatch(getActivities())
        dispatch(getNews())
        languageRef.current = language
        i18n.changeLanguage(language)
    }, [language])
    useEffect(() => {
        dispatch(getWeather())
    }, [])
    useEffect(() => {
        setFiles(openTree(filesTree).map(file => {
            let isOpened = false
            openedAppList.forEach(openedFile => openedFile.id === file.id ? isOpened = true : null)
            if (isOpened) {
                return {...file, isOpen: true}
            } else {
                return file
            }
        }))
    }, [filesTree])
    const nextLang = (e: KeyboardEvent) => {
        const currentLanguageIndex = languages.indexOf(languageRef.current)
        if (e.altKey && e.shiftKey) {
            if (currentLanguageIndex + 1 === languages.length) {
                localStorage.setItem('currentLanguage', languages[0])
                dispatch(changeLanguage(languages[0] as LanguageType))
            } else {
                localStorage.setItem('currentLanguage', languages[currentLanguageIndex + 1])
                dispatch(changeLanguage(languages[currentLanguageIndex + 1] as LanguageType))
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', nextLang)
    }, [])

    return (
        <AppStyled className="App">
            <GlobalStyles/>
            <WelcomeLoading isLoading={isLoading}/>
            {!isLoading && <Tour/>}
            {/*<WindowsLoading isLoading={isLoading}/>*/}
            <Desktop filesTree={filesTree} files={files} setFiles={setFiles} setOpenedAppList={setOpenedAppList}
                     openedAppList={openedAppList} setLoading={setIsLoading}/>
            <ToolBar files={files} setFiles={setFiles} openedAppList={openedAppList}
                     setOpenedAppList={setOpenedAppList}/>
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
