    // module export
    if (typeof define === "function" && define.amd) {
        // AMD
        define("bridge", [], function () { return Bridge; });
    } else if (typeof module !== "undefined" && module.exports) {
        // Node
        module.exports = Bridge;
    }
