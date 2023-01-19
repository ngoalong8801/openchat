
var fs = require('fs')

const listFile = () => {
    var files = fs.readdirSync('../assets')
    console.log(files)
}
listFile()

export default listFile