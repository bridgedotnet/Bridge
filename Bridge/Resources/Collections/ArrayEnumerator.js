    Bridge.define('Bridge.ArrayEnumerator', {
        inherits: [System.Collections.IEnumerator, System.IDisposable],

        statics: {
            $isArrayEnumerator: true
        },

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
                "getCurrent", "System$Collections$IEnumerator$getCurrent",
                "moveNext", "System$Collections$IEnumerator$moveNext",
                "reset", "System$Collections$IEnumerator$reset",
                "dispose", "System$IDisposable$dispose",
				"Current", "System$Collections$IEnumerator$Current"
            ]
        },

        ctor: function (array, T) {
            this.$initialize();
            this.array = array;
            this.reset();

            if (T) {
                this["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$getCurrent$1"] = this.getCurrent;
                this["System$Collections$Generic$IEnumerator$1$getCurrent$1"] = this.getCurrent;

                Object.defineProperty(this, "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", {
                    get: this.getCurrent,
                    enumerable: true
                });

                Object.defineProperty(this, "System$Collections$Generic$IEnumerator$1$Current$1", {
                    get: this.getCurrent,
                    enumerable: true
                });
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
