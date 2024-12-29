const path = require("path")

// We will receive the path of the path.js file
console.log(__filename);
console.log(__dirname);

// School folder/students/data.txt

const filePath = path.join("D:", "MERN", "Node JS", "03_Dummy", "data.txt")
console.log(filePath);

const parseData = path.parse(filePath)
const resolvedPath = path.resolve(filePath)
const extname = path.extname(filePath)
const basename = path.basename(filePath)
const dirname = path.dirname(filePath)


console.log({parseData, resolvedPath, extname, basename, dirname, sep: path.sep});

