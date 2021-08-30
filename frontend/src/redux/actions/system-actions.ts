import {LanguageType} from "../../components/ToolbarLanguage";
import {ReactElement, MouseEvent} from "react";


export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const SET_TARGET = 'SET_TARGET'


export const changeLanguage = (lang: LanguageType) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: lang
    }
}

export const setTarget = (target: HTMLDivElement) => {
    return {
        type: SET_TARGET,
        payload: target
    }
}

export type ActionTypes = 'CHANGE_LANGUAGE' | 'SET_TARGET'