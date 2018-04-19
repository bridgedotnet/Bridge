    Bridge.define("System.Exception", {
        config: {
            properties: {
                Message: {
                    get: function () {
                        return this.message;
                    }
                },

                InnerException: {
                    get: function () {
                        return this.innerException;
                    }
                },

                StackTrace: {
                    get: function () {
                        return this.errorStack.stack;
                    }
                },

                Data: {
                    get: function () {
                        return this.data;
                    }
                },

                HResult: {
                    get: function () {
                        return this._HResult;
                    },
                    set: function (value) {
                        this._HResult = value;
                    }
                }
            }
        },

        ctor: function (message, innerException) {
            this.$initialize();
            this.message = message ? message : ("Exception of type '" + Bridge.getTypeName(this) + "' was thrown.");
            this.innerException = innerException ? innerException : null;
            this.errorStack = new Error(this.message);
            this.data = new (System.Collections.Generic.Dictionary$2(System.Object, System.Object))();
        },

        getBaseException: function () {
            var inner = this.innerException;
            var back = this;

            while (inner != null) {
                back = inner;
                inner = inner.innerException;
            }

            return back;
        },

        toString: function () {
            var builder = Bridge.getTypeName(this);

            if (this.Message != null) {
                builder += ": " + this.Message + "\n";
            } else {
                builder += "\n";
            }

            if (this.StackTrace != null) {
                builder += this.StackTrace + "\n";
            }

            return builder;
        },

        statics: {
            create: function (error) {
                if (Bridge.is(error, System.Exception)) {
                    return error;
                }

                var ex;

                if (error instanceof TypeError) {
                    ex = new System.NullReferenceException.$ctor1(error.message);
                } else if (error instanceof RangeError) {
                    ex = new System.ArgumentOutOfRangeException.$ctor1(error.message);
                } else if (error instanceof Error) {
                    return new System.SystemException.$ctor1(error);
                } else if (error && error.error && error.error.stack) {
                    ex = new System.Exception(error.error.stack);
                } else {
                    ex = new System.Exception(error ? error.message ? error.message : error.toString() : null);
                }

                ex.errorStack = error;

                return ex;
            }
        }
    });
