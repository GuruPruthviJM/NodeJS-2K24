const os = require("os")

console.log("Platform:",os.platform);
console.log("User:", os.userInfo);

console.log("CPU Architecture:", os.arch());

console.log("Free Memory:", os.freemem(), "bytes");

console.log("Total Memory:", os.totalmem(), "bytes");

console.log("System Uptime:", os.uptime(), "sec");

console.log("Home Dir:", os.homedir());

console.log("Host Name:", os.hostname());

console.log("Network Interface:", os.networkInterfaces());

console.log("CPU Info:", os.cpus());

console.log("Temporary Directory:", os.tmpdir());

console.log("Operation System:", os.type());
