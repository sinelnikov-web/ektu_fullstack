import {AppStateType} from "../redux/store";

export const socialsStateSelector = (state: AppStateType) => state.socials

export const socialsSelector = (state: AppStateType) => socialsStateSelector(state).socials