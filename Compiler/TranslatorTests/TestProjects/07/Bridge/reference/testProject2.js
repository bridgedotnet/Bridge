/* global Bridge */

"use strict";

define("MyModule", ["bridge"], function (_) {
    var exports = { };
    Bridge.define('TestProject2.TestClassB', {
        config: {
            properties: {
                Value1: 0
            }
        }
    });
    return exports;
});



Bridge.init();