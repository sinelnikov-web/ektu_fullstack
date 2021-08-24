import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ChangeLanguage from "./ChangeLanguage";
import {useSelector} from "react-redux";
import {languageSelector} from "../selectors/system-selectors";

export type LanguageType = 'ru' | 'en' | 'kk'
export type ReverseLanguageType = 'РУС' | 'ENG' | 'КАЗ'

export type LanguageMapType = {
    ru: ReverseLanguageType,
    en: ReverseLanguageType,
    kk: ReverseLanguageType,
}

export type ReverseLanguageMapType = {
    'РУС': LanguageType,
    'ENG': LanguageType,
    'КАЗ': LanguageType,
}

const ToolbarLanguage = () => {

    const [showLanguages, setShowLanguages] = useState(false)

    const language = useSelector(languageSelector)

    const langMap: LanguageMapType = {
        ru: 'РУС',
        en: 'ENG',
        kk: 'КАЗ',
    }
    const reverseLangMap: ReverseLanguageMapType = {
        'РУС': 'ru',
        'ENG': 'en',
        'КАЗ': 'kk',
    }
    const [currentLanguage, setCurrentLanguage] = useState<LanguageType>('ru')
    useEffect(() => {
        if (localStorage.getItem('currentLanguage')) {
            setCurrentLanguage(localStorage.getItem('currentLanguage') as LanguageType)
        }
    }, [])

    useEffect(() => {
        setCurrentLanguage(language as LanguageType)
    }, [language])

    return (
        <ToolbarLanguageStyled className={'toolbar-language'}>
            <div className="toolbar-icon-wrapper" onClick={() => setShowLanguages(prev => !prev)}>
                <span className={'language__code'}>{langMap[currentLanguage]}</span>
            </div>
            <ChangeLanguage showLanguages={showLanguages} setCurrentLanguage={setCurrentLanguage}
                            currentLanguage={currentLanguage} langMap={langMap} reverseLangMap={reverseLangMap}/>
        </ToolbarLanguageStyled>
    );
};

const ToolbarLanguageStyled = styled.div`
  position: relative;
  color: var(--white-color);
  text-align: center;
  width: 5rem;
  height: 100%;

  .toolbar-icon-wrapper {
    padding: 0.5rem 0.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    &:hover {
      background-color: var(--toolbar-bg-color);
      filter: brightness(140%);
    }

    span {
      width: 100%;
      text-align: center;
      display: inline;

    }
  }
`

export default ToolbarLanguage;