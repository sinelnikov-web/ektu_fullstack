import React, {MouseEvent, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import ChangeLanguage from "./ChangeLanguage";
import {useDispatch, useSelector} from "react-redux";
import {languageSelector, targetSelector} from "../selectors/system-selectors";
import {setTarget} from "../redux/actions/system-actions";

export type LanguageType = 'ru' | 'kk'
export type ReverseLanguageType = 'РУС' | 'КАЗ'

export type LanguageMapType = {
    ru: ReverseLanguageType,
    kk: ReverseLanguageType,
}

export type ReverseLanguageMapType = {
    'РУС': LanguageType,
    'КАЗ': LanguageType,
}

const ToolbarLanguage = () => {

    const [showLanguages, setShowLanguages] = useState(false)

    const language = useSelector(languageSelector)

    const langMap: LanguageMapType = {
        ru: 'РУС',
        kk: 'КАЗ',
    }
    const reverseLangMap: ReverseLanguageMapType = {
        'РУС': 'ru',
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
    const mainRef = useRef<HTMLDivElement>(null)
    const globalTarget = useSelector(targetSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        if (globalTarget !== mainRef.current && showLanguages) {
            setShowLanguages(false)
        }
    }, [globalTarget])
    const setGlobalTarget = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        dispatch(setTarget(e.currentTarget))
    }
    const check = (globalTarget === mainRef.current) && mainRef.current
    return (
        <ToolbarLanguageStyled ref={mainRef} onClick={setGlobalTarget} className={'toolbar-language'}>
            <div className="toolbar-icon-wrapper" onClick={() => setShowLanguages(prev => !prev)}>
                <span className={'language__code'}>{langMap[currentLanguage]}</span>
            </div>
            <ChangeLanguage showLanguages={showLanguages && !!check} setCurrentLanguage={setCurrentLanguage}
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