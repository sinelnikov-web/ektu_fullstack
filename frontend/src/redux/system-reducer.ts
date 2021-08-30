import {stat} from "fs";
import {ActionTypes, CHANGE_LANGUAGE, SET_TARGET} from "./actions/system-actions";
import {LanguageType} from "../components/ToolbarLanguage";
import {ReactElement} from "react";


const initialState = {
    language: localStorage.getItem('currentLanguage'),
    currentTarget: null as null | HTMLDivElement

}

type InitialStateType = typeof initialState


export const systemReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case CHANGE_LANGUAGE: {
            return {...state, language: action.payload as LanguageType}
        }
        case SET_TARGET: {
            return {...state, currentTarget: action.payload as HTMLDivElement}
        }
        default: {
            return state
        }
    }
}


type ActionType =  {
    type: ActionTypes,
    payload: LanguageType | HTMLDivElement
}