    Bridge.define('Bridge.CustomEnumerator', {
        inherits: [System.Collections.IEnumerator],

        config: {
            alias: [
                "getCurrent", "System$Collections$IEnumerator$getCurrent",
                "moveNext", "System$Collections$IEnumerator$moveNext",
                "reset", "System$Collections$IEnumerator$reset"
            ]
        },

        constructor: function (moveNext, getCurrent, reset, dispose, scope) {
            this.$initialize();
            this.$moveNext = moveNext;
            this.$getCurrent = getCurrent;
            this.$dispose = dispose;
            this.$reset = reset;
            this.scope = scope;
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
