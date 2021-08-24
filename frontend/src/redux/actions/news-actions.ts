import {FileType} from "../../components/Desktop";
import {NewsType} from "../../api/news-api";

export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS'

export const getNewsSuccess = (news:Array<NewsType>) => {
    return {
        type: GET_NEWS_SUCCESS,
        payload: news
    }
}


export type ActionTypes = 'GET_NEWS_SUCCESS'