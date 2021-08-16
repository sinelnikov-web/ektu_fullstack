import {APIInstance} from "./base";
import {FileType} from "../components/Desktop";

export type ActivityType = {
    id: number,
    title: string,
    description: string
    date: string
}

export const activitiesAPI = {
    getActivities: () => {
        return APIInstance.get<Array<ActivityType>>('activities').then(r => r.data)
    }
}