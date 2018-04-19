
console.log("Running run.js");
console.log("Require ./bridge.js");
var bridge = require("./bridge.js");

console.log("Bridge version: " + bridge.SystemAssembly.version);

var isNode = bridge.isNode;
console.log("Is Node: " + isNode);

var exitCode = -1;
if (isNode) {
    exitCode = 777;
}

console.log("Exiting with exit code " + exitCode);
process.exit(exitCode);

