import {FileType} from "../components/Desktop";
import {APIInstance} from "./base";


export const filesAPI = {
    getFilesTree: () => {
        return APIInstance.get<Array<FileType>>('files', {
            headers: {
                'Accept-Language': localStorage.getItem('currentLanguage')
            }
        }).then(r => r.data)
    }
}