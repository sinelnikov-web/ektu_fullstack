import axios from "axios";
import {FileType} from "../components/Desktop";
import {APIInstance} from "./base";


export const filesAPI = {
    getFilesTree: () => {
        return APIInstance.get<Array<FileType>>('files').then(r => r.data)
    }
}