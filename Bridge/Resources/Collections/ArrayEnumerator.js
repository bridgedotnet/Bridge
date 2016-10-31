    Bridge.define('Bridge.ArrayEnumerator', {
        inherits: [System.Collections.IEnumerator, System.IDisposable],

        statics: {
            $isArrayEnumerator: true
        },

        config: {
            alias: [
                "getCurrent", "System$Collections$IEnumerator$getCurrent",
                "moveNext", "System$Collections$IEnumerator$moveNext",
                "reset", "System$Collections$IEnumerator$reset",
                "dispose", "System$IDisposable$dispose"
            ]
        },

        ctor: function (array, T) {
            this.$initialize();
            this.array = array;
            this.reset();

            if (T) {
                this["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$getCurrent$1"] = this.getCurrent;
            }
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
        inherits: [System.Collections.IEnumerable],

        config: {
            alias: [
                "getEnumerator", "System$Collections$IEnumerable$getEnumerator"
            ]
        },

        ctor: function (array) {
            this.$initialize();
            this.array = array;
        },

        getEnumerator: function () {
            return new Bridge.ArrayEnumerator(this.array);
        }
    });
