import {AppStateType} from "../redux/store";


export const filesStateSelector = (state: AppStateType) => state.files

export const filesTreeSelector = (state: AppStateType) => filesStateSelector(state).filesTree