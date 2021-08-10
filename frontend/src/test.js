const files = [
    {
        id: 0,
        title: '0',
        icon: 'icon',
        type: 'folder',
        isOpen: false,
        innerFiles: []
    },
    {
        id: 1,
        title: '1',
        icon: 'icon',
        type: 'folder',
        isOpen: false,
        innerFiles: [
            {
                id: 3,
                title: '3',
                icon: 'icon',
                type: 'folder',
                isOpen: false,
                innerFiles: [
                    {
                        id: 4,
                        title: '4',
                        icon: 'icon',
                        type: 'folder',
                        isOpen: false,
                        innerFiles: []
                    }
                ]
            },
            {
                id: 5,
                title: '5',
                icon: 'icon',
                type: 'folder',
                isOpen: false,
                innerFiles: []
            }
        ]
    },
    {
        id: 2,
        title: '2',
        icon: 'icon',
        type: 'folder',
        isOpen: false,
        innerFiles: []
    },
]

let filesList = []

function openTree(tree) {
    debugger
    let dist= []
    for (let file of tree) {
        dist.push(file)
        if (file.innerFiles.length !== 0) {
            dist = [...dist, ...openTree(file.innerFiles)]
        }
    }
    return dist
}

let lst = openTree(files)

console.log(lst)