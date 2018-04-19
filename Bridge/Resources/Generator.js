    Bridge.define("Bridge.GeneratorEnumerable", {
        inherits: [System.Collections.IEnumerable],

        config: {
            alias: [
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator"
            ]
        },

        ctor: function (action) {
            this.$initialize();
            this.GetEnumerator = action;
            this.System$Collections$IEnumerable$GetEnumerator = action;
        }
    });

    Bridge.define("Bridge.GeneratorEnumerable$1", function (T)
    {
        return {
            inherits: [System.Collections.Generic.IEnumerable$1(T)],

            config: {
                alias: [
                "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$GetEnumerator", "System$Collections$Generic$IEnumerable$1$GetEnumerator"]
                ]
            },

            ctor: function (action) {
                this.$initialize();
                this.GetEnumerator = action;
                this["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$GetEnumerator"] = action;
                this["System$Collections$Generic$IEnumerable$1$GetEnumerator"] = action;
            }
        };
    });

    Bridge.define("Bridge.GeneratorEnumerator", {
        inherits: [System.Collections.IEnumerator],

        current: null,

        config: {
            properties: {
                Current: {
                    get: function () {
                        return this.getCurrent();
                    }
                }
            },

            alias: [
                "getCurrent", "System$Collections$IEnumerator$getCurrent",
                "moveNext", "System$Collections$IEnumerator$moveNext",
                "reset", "System$Collections$IEnumerator$reset",
                "Current", "System$Collections$IEnumerator$Current"
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
                properties: {
                    Current: {
                        get: function () {
                            return this.getCurrent();
                        }
                    },

                    Current$1: {
                        get: function () {
                            return this.getCurrent();
                        }
                    }
                },
                alias: [
                    "getCurrent", ["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$getCurrent$1", "System$Collections$Generic$IEnumerator$1$getCurrent$1"],
                    "Current", ["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"],
                    "Current", "System$Collections$IEnumerator$Current",
                    "Dispose", "System$IDisposable$Dispose",
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

            Dispose: function () {
                if (this.final) {
                    this.final();
                }
            },

            reset: function () {
                throw new System.NotSupportedException();
            }
        };
    });