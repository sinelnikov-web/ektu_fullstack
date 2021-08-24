import {Dispatch} from "redux";
import {newsAPI, NewsType} from "../api/news-api";
import {GET_NEWS_SUCCESS, getNewsSuccess} from "./actions/news-actions";

const initialState = {
    articles: [] as Array<NewsType>
}

type InitialStateType = typeof initialState

export const newsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_NEWS_SUCCESS: {
            return {...state, articles: [...action.payload]}
        }
        default: {
            return state
        }
    }
}

export const getNews = () => async (dispatch:Dispatch) => {
    const response = await newsAPI.getNews()
    dispatch(getNewsSuccess(response))
}