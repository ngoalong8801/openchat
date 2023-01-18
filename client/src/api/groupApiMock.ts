
export interface Group {
    name: string
    description: string
}



export function fetchAllGroups(){
    let groups: Group[] = [
    {
        name: "Group 1",
        description: "fist group"
    },
    {
        name: "Group 2",
        description: "fist group"
    },
    {
        name: "Group 3",
        description: "fist group"
    },

];
    return new Promise(resolve => {
        setTimeout(() => resolve(groups), 3000)
    })
}

