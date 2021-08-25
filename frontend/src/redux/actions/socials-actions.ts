import {SocialType} from "../../api/socials-api";

export const GET_SOCIALS_SUCCESS = 'GET_SOCIALS_SUCCESS'

export const getSocialsSuccess = (socials: Array<SocialType>) => {
    return {
        type: GET_SOCIALS_SUCCESS,
        payload: socials
    }
}

export type ActionTypes = 'GET_SOCIALS_SUCCESS'