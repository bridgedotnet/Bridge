// process.on('exit', (code) => {
// console.log(`About to exit with code: ${code}`);
// });

console.log("Running run.js");
console.log("Require ./bridge.js");
var bridge = require('./bridge.js');

console.log("Bridge version:");
console.log(bridge.SystemAssembly.version);

var exitCode = 777;
console.log("Exiting with exit code " + exitCode);
process.exit(exitCode);

