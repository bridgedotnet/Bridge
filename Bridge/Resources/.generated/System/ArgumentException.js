    Bridge.define("System.ArgumentException", {
        inherits: [System.SystemException],
        fields: {
            _paramName: null
        },
        props: {
            Message: {
                get: function () {
                    var s = Bridge.ensureBaseProperty(this, "Message").$System$Exception$Message;
                    if (!System.String.isNullOrEmpty(this._paramName)) {
                        var resourceString = System.SR.Format("Parameter name: {0}", this._paramName);
                        return (s || "") + ("\n" || "") + (resourceString || "");
                    } else {
                        return s;
                    }
                }
            },
            ParamName: {
                get: function () {
                    return this._paramName;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "Value does not fall within the expected range.");
                this.HResult = -2147024809;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2147024809;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, innerException);
                this.HResult = -2147024809;
            },
            $ctor4: function (message, paramName, innerException) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, innerException);
                this._paramName = paramName;
                this.HResult = -2147024809;
            },
            $ctor3: function (message, paramName) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this._paramName = paramName;
                this.HResult = -2147024809;
            }
        }
    });
