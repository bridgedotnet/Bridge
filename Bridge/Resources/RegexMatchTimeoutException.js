    Bridge.define("System.RegexMatchTimeoutException", {
        inherits: [System.TimeoutException],

        _regexInput: "",

        _regexPattern: "",

        _matchTimeout: null,

        config: {
            init: function () {
                this._matchTimeout = System.TimeSpan.fromTicks(-1);
            }
        },

        ctor: function (message, innerException, matchTimeout) {
            this.$initialize();

            if (arguments.length == 3) {
                this._regexInput = message;
                this._regexPattern = innerException;
                this._matchTimeout = matchTimeout;

                message = "The RegEx engine has timed out while trying to match a pattern to an input string. This can occur for many reasons, including very large inputs or excessive backtracking caused by nested quantifiers, back-references and other factors.";
                innerException = null;
            }

            System.TimeoutException.ctor.call(this, message, innerException);
        },

        getPattern: function () {
            return this._regexPattern;
        },

        getInput: function () {
            return this._regexInput;
        },

        getMatchTimeout: function () {
            return this._matchTimeout;
        }
    });
