import {ActivityType} from "../../api/activities-api";

export const GET_ACTIVITIES_SUCCESS = 'GET_ACTIVITIES_SUCCESS'

export const getActivitiesSuccess = (activities: Array<ActivityType>) => {
    return {
        type: GET_ACTIVITIES_SUCCESS,
        payload: activities
    }
}

export type ActionTypes = 'GET_ACTIVITIES_SUCCESS'