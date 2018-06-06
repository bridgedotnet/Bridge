    Bridge.define("System.UnhandledExceptionEventArgs", {
        fields: {
            _exception: null,
            _isTerminating: false
        },
        props: {
            ExceptionObject: {
                get: function () {
                    return this._exception;
                }
            },
            IsTerminating: {
                get: function () {
                    return this._isTerminating;
                }
            }
        },
        ctors: {
            ctor: function (exception, isTerminating) {
                this.$initialize();
                System.Object.call(this);
                this._exception = exception;
                this._isTerminating = isTerminating;
            }
        }
    });
