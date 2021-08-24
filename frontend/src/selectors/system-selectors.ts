import {AppStateType} from "../redux/store";

export const systemStateSelector = (state: AppStateType) => state.system

export const languageSelector = (state: AppStateType) => systemStateSelector(state).language