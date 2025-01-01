const fs = require('fs')
const path = require('path')

const fileName ='test.txt'
const filePath = path.join(__dirname, fileName)
const writeFile = fs.writeFileSync(
    filePath,
    "This is the initial data, Updated",
    'utf-8'
    );

console.log(writeFile);

const readFile = fs.readFileSync(fileName) // if we user utf-8 while reading the file then we don't require to use toString()

console.log(readFile); // It is going to give the answer in hex decimal format.

console.log(readFile.toLocaleString());

const uppendFile = fs.appendFileSync(filePath, "\nGuru Pruthvi J M", "utf-8")

const rename = fs.renameSync(fileName, "text01.txt")

// const deleteFile = fs.unlinkSync(filePath)
// console.log(deleteFile);
