// @source /Collections/ArrayEnumerator.js

Bridge.define('Bridge.ArrayEnumerator', {
    inherits: [Bridge.IEnumerator],

    constructor: function (array) {
        this.array = array;
        this.reset();
    },
    
    moveNext: function () {
        this.index++;

        return this.index < this.array.length;
    },

    getCurrent: function () {
        return this.array[this.index];
    },

    getCurrent$1: function () {
        return this.array[this.index];
    },

    reset: function () {
        this.index = -1;
    },

    dispose: Bridge.emptyFn
});

Bridge.define('Bridge.ArrayEnumerable', {
    inherits: [Bridge.IEnumerable],
    constructor: function (array) {
        this.array = array;
    },

    getEnumerator: function () {
        return new Bridge.ArrayEnumerator(this.array);
    }
});