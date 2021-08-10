import {FileType} from "../components/Desktop";


export function openTree(tree: Array<FileType>): Array<FileType> {
    let dist: Array<FileType> = []
    for (let file of tree) {
        dist.push(file)
        if (file.innerFiles.length !== 0) {
            dist = [...dist, ...openTree(file.innerFiles)]
        }
    }
    return dist
}