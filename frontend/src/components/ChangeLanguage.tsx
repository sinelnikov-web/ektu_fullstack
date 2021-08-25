import React from 'react';
import styled from "styled-components";
import {LanguageMapType, LanguageType, ReverseLanguageMapType} from "./ToolbarLanguage";
import {useDispatch} from "react-redux";
import {getFilesTree} from "../redux/files-reducer";
import {changeLanguage} from "../redux/actions/system-actions";

interface ChangeLanguageProps {
    langMap: LanguageMapType
    reverseLangMap: ReverseLanguageMapType
    currentLanguage: LanguageType
    setCurrentLanguage: (lang: LanguageType) => void
    showLanguages: boolean
}

const ChangeLanguage: React.FC<ChangeLanguageProps> = ({
                                                           showLanguages,
                                                           langMap,
                                                           reverseLangMap,
                                                           currentLanguage,
                                                           setCurrentLanguage
                                                       }) => {


    const fullLangNames = {
        ru: 'Русский',
        en: 'Английский',
        kk: 'Казахский',
    }

    const dispatch = useDispatch()

    const changeLang = (lang: LanguageType) => {
        setCurrentLanguage(lang)
        localStorage.setItem('currentLanguage', lang)
        dispatch(changeLanguage(lang))
    }

    return (
        <ChangeLanguageStyled className={!showLanguages ? ' hidden' : ''}>
            {Object.keys(langMap).map((langKey, index) => {
                return (
                    <div onClick={() => changeLang(langKey as LanguageType)} key={index}
                         className={"language__item" + (currentLanguage === langKey ? ' active' : '')}>
                        <div className="language__item-code"><span>{langMap[langKey as LanguageType]}</span></div>
                        <div className="language__item-full"><span>{fullLangNames[langKey as LanguageType]}</span></div>
                    </div>
                )
            })}
        </ChangeLanguageStyled>
    );
};

const ChangeLanguageStyled = styled.div`
  width: 300px;
  height: 200px;
  background-color: transparent;
  position: absolute;
  top: -400%;
  left: -375%;
  z-index: 9999;
  backdrop-filter: blur(3px);
  transition: opacity 0.2s linear;

  &.hidden {
    opacity: 0;
    width: 0;
    height: 0;
    visibility: hidden;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(20, 21, 24, 1);
    opacity: 0.8;
    z-index: -1;
  }

  .language__item {
    width: 100%;
    padding: 1rem;
    height: 50px;
    z-index: 2;
    color: var(--white-color);
    display: flex;

    > * {
      display: flex;
      align-items: center;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    &.active {
      background: #0077d3;
    }

    .language__item-code {
      width: 20%;
    }
  }
`

export default ChangeLanguage;