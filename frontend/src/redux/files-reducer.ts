import {FileType} from "../components/Desktop";
import {Dispatch} from "redux";
import {ActionTypes, GET_FILES_SUCCESS, getFilesTreeSuccess} from "./actions/files-actions";
import {filesAPI} from "../api/files-api";


const initialState = {
    filesTree: [] as Array<FileType>
}

type InitialStateType = typeof initialState

export const filesReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case GET_FILES_SUCCESS: {
            return {...state, filesTree: [...action.payload]}
        }
        default: {
            return state
        }
    }
}



export const getFilesTree = () => async (dispatch: Dispatch) => {
    const response = await filesAPI.getFilesTree()
    dispatch(getFilesTreeSuccess(response))
}

type ActionType = {
    type: ActionTypes,
    payload: Array<FileType>
}