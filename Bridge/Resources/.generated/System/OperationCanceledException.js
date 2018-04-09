    Bridge.define("System.OperationCanceledException", {
        inherits: [System.SystemException],
        fields: {
            _cancellationToken: null
        },
        props: {
            CancellationToken: {
                get: function () {
                    return this._cancellationToken;
                },
                set: function (value) {
                    this._cancellationToken = value;
                }
            }
        },
        ctors: {
            init: function () {
                this._cancellationToken = new System.Threading.CancellationToken();
            },
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "The operation was canceled.");
                this.HResult = -2146233029;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2146233029;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, innerException);
                this.HResult = -2146233029;
            },
            $ctor5: function (token) {
                System.OperationCanceledException.ctor.call(this);
                this.CancellationToken = token;
            },
            $ctor4: function (message, token) {
                System.OperationCanceledException.$ctor1.call(this, message);
                this.CancellationToken = token;
            },
            $ctor3: function (message, innerException, token) {
                System.OperationCanceledException.$ctor2.call(this, message, innerException);
                this.CancellationToken = token;
            }
        }
    });
