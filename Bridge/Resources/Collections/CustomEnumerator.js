    Bridge.define('Bridge.CustomEnumerator', {
        inherits: [System.Collections.IEnumerator, System.IDisposable],

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

        ctor: function (moveNext, getCurrent, reset, dispose, scope, T) {
            this.$initialize();
            this.$moveNext = moveNext;
            this.$getCurrent = getCurrent;
            this.$dispose = dispose;
            this.$reset = reset;
            this.scope = scope;

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
            try {
                return this.$moveNext.call(this.scope);
            }
            catch (ex) {
                this.dispose.call(this.scope);

                throw ex;
            }
        },

        getCurrent: function () {
            return this.$getCurrent.call(this.scope);
        },

        getCurrent$1: function () {
            return this.$getCurrent.call(this.scope);
        },

        reset: function () {
            if (this.$reset) {
                this.$reset.call(this.scope);
            }
        },

        dispose: function () {
            if (this.$dispose) {
                this.$dispose.call(this.scope);
            }
        }
    });
