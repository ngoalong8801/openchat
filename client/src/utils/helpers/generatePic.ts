export interface ImageJson{
    url: string
}
const generatePic = (json: ImageJson[]) => {
    let len = json.length
    let index = Math.floor(Math.random() * len)

    return json[index]
}

export default generatePic

