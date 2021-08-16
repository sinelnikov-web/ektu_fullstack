import {AppStateType} from "../redux/store";

export const activitiesStateSelector = (state: AppStateType) => state.activities

export const activitiesSelector = (state: AppStateType) => activitiesStateSelector(state).activities