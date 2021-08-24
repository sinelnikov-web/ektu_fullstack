import {APIInstance} from "./base";


export type NewsType = {
    id: number
    title: string
    icon: string
    text: string
    created: string
    likes_count: string
}

export const newsAPI = {
    getNews: () => {
        return APIInstance.get<Array<NewsType>>('articles', {
            headers: {
                'Accept-Language': localStorage.getItem('currentLanguage')
            }
        }).then(r => r.data)
    }
}