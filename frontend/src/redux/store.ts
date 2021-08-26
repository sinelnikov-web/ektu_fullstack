import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {filesReducer} from "./files-reducer";
import {activityReducer} from "./activities-reducer";
import {weatherReducer} from "./weather-reducer";
import {systemReducer} from "./system-reducer";
import {newsReducer} from "./news-reducer";
import {socialsReducer} from "./socials-reducer";

let rootReducer = combineReducers({
    files: filesReducer,
    activities: activityReducer,
    weather: weatherReducer,
    system: systemReducer,
    news: newsReducer,
    socials: socialsReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))


// @ts-ignore
window.__store__ = store

export default store