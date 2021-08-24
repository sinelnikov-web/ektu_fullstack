import {stat} from "fs";
import {ActionTypes, CHANGE_LANGUAGE} from "./actions/system-actions";
import {LanguageType} from "../components/ToolbarLanguage";


const initialState = {
    language: localStorage.getItem('currentLanguage') || 'ru',

}

type InitialStateType = typeof initialState


export const systemReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case CHANGE_LANGUAGE: {
            return {...state, language: action.payload}
        }
        default: {
            return state
        }
    }
}


type ActionType =  {
    type: ActionTypes,
    payload: LanguageType
}