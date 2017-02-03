    Bridge.define("Bridge.GeneratorEnumerable", {
        inherits: [System.Collections.IEnumerable],

        config: {
            alias: [
            "getEnumerator", "System$Collections$IEnumerable$getEnumerator"
            ]
        },

        ctor: function (action) {
            this.$initialize();
            this.getEnumerator = action;
            this.System$Collections$IEnumerable$getEnumerator = action;
        }
    });

    Bridge.define("Bridge.GeneratorEnumerable$1", function(T)
    {
        return {
            inherits: [System.Collections.Generic.IEnumerable$1(T)],

            config: {
                alias: [
                "getEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator"
                ]
            },

            ctor: function(action) {
                this.$initialize();
                this.getEnumerator = action;
                this["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator"] = action;
            }
        };
    });

    Bridge.define("Bridge.GeneratorEnumerator", {
        inherits: [System.Collections.IEnumerator],

        current: null,

        config: {
            alias: [
            "getCurrent", "System$Collections$IEnumerator$getCurrent",
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "reset", "System$Collections$IEnumerator$reset"
            ]
        },

        ctor: function (action) {
            this.$initialize();
            this.moveNext = action;
            this.System$Collections$IEnumerator$moveNext = action;
        },

        getCurrent: function () {
            return this.current;
        },

        getCurrent$1: function () {
            return this.current;
        },

        reset: function () {
            throw new System.NotSupportedException();
        }
    });

    Bridge.define("Bridge.GeneratorEnumerator$1", function (T) {
        return {
            inherits: [System.Collections.Generic.IEnumerator$1(T), System.IDisposable],

            current: null,

            config: {
                alias: [
                "getCurrent", "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$getCurrent$1",
                "dispose", "System$IDisposable$dispose",
                "moveNext", "System$Collections$IEnumerator$moveNext",
                "reset", "System$Collections$IEnumerator$reset"
                ]
            },

            ctor: function (action, final) {
                this.$initialize();
                this.moveNext = action;
                this.System$Collections$IEnumerator$moveNext = action;
                this.final = final;
            },

            getCurrent: function () {
                return this.current;
            },

            getCurrent$1: function () {
                return this.current;
            },

            System$Collections$IEnumerator$getCurrent: function () {
                return this.current;
            },

            dispose: function () {
                if (this.final) {
                    this.final();
                }
            },

            reset: function () {
                throw new System.NotSupportedException();
            }
        };
    });