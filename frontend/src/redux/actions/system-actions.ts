import {LanguageType} from "../../components/ToolbarLanguage";

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'


export const changeLanguage = (lang: LanguageType) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: lang
    }
}

export type ActionTypes = 'CHANGE_LANGUAGE'