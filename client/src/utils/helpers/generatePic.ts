import groups from '../../assets/group.json'
const generatePic = () => {
    let len = groups.length
    let index = Math.floor(Math.random() * len)

    return groups[index]
}

export default generatePic

