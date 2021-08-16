import {activitiesAPI, ActivityType} from "../api/activities-api";
import {ActionTypes, GET_ACTIVITIES_SUCCESS, getActivitiesSuccess} from "./actions/actifities-actions";
import {FileType} from "../components/Desktop";
import {Dispatch} from "redux";


export const initialState = {
    activities: [] as Array<ActivityType>
}

type InitialStateType = typeof initialState


export const activityReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case GET_ACTIVITIES_SUCCESS: {
            return {...state, activities: [...action.payload]}
        }
        default: {
            return state
        }
    }
}

export const getActivities = () => async (dispatch: Dispatch) => {
    const response = await activitiesAPI.getActivities()
    dispatch(getActivitiesSuccess(response))
}

type ActionType = {
    type: ActionTypes,
    payload: Array<ActivityType>
}