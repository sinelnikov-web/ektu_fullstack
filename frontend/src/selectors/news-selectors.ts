import {AppStateType} from "../redux/store";

export const newsStateSelector = (state: AppStateType) => state.news

export const articlesSelector = (state: AppStateType) => newsStateSelector(state).articles