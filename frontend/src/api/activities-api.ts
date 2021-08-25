import {APIInstance} from "./base";

export type ActivityType = {
    id: number,
    title: string,
    description: string
    date: string
    region: string
}

export const activitiesAPI = {
    getActivities: () => {
        return APIInstance.get<Array<ActivityType>>('activities', {
            headers: {
                'Accept-Language': localStorage.getItem('currentLanguage')
            }
        }).then(r => r.data)
    }
}