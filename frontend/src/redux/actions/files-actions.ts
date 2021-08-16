import {FileType} from "../../components/Desktop";

export const GET_FILES_SUCCESS = 'GET_FILES_SUCCESS'
export const CHANGE_FILE_STATE = 'CHANGE_FILE_STATE'

export const getFilesTreeSuccess = (files:Array<FileType>) => {
    return {
        type: GET_FILES_SUCCESS,
        payload: files
    }
}

export const changeFileState = (files:Array<FileType>) => {
    return {
        type: CHANGE_FILE_STATE,
        payload: files
    }
}

export type ActionTypes = 'GET_FILES_SUCCESS' | 'CHANGE_FILE_STATE'