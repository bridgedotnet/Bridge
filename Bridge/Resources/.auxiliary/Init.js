// Special case for allowing Window to be defined and accessible from Web Workers
window = self;

(function (globals) {
    "use strict";

    if (typeof module !== "undefined" && module.exports) {
        globals = global;
    }
