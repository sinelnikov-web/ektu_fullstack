import {socialAPI, SocialType} from "../api/socials-api";
import {Dispatch} from "redux";
import {GET_SOCIALS_SUCCESS, getSocialsSuccess} from "./actions/socials-actions";


const initialState = {
    socials: [] as Array<SocialType>
}

export type InitialStateType = typeof initialState

export const socialsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_SOCIALS_SUCCESS: {
            return {...state, socials: [...action.payload]}
        }
        default: {
            return state
        }
    }
}


export const getSocials = () => async (dispatch: Dispatch) => {
    const response = await socialAPI.getSocials()
    dispatch(getSocialsSuccess(response))
}