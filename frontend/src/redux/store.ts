import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {filesReducer} from "./files-reducer";
import {activityReducer} from "./activities-reducer";
import {weatherReducer} from "./weather-reducer";

let rootReducer = combineReducers({
    files: filesReducer,
    activities: activityReducer,
    weather: weatherReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))


// @ts-ignore
window.__store__ = store

export default store