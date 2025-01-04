const { error } = require('console')
const fs = require('fs')
const path = require('path')

const filePath=__dirname
const fileName = path.join(filePath, "fsPromises.txt")

fs.promises
    .readdir(fileName)
    .then((data)=> console.log(data))
    .catch((err)=>console.error(err))

fs.promises
    .writeFile(fileName, 'this is initial data')
    .then()
    .catch((err)=>console.log(err))

fs.promises
    .appendFile(fileName, "\nThis is the updated data")
    .catch((err)=>console.log(err))

fs.promises
    .unlink()