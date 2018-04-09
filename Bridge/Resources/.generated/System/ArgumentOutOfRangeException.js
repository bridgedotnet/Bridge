    Bridge.define("System.ArgumentOutOfRangeException", {
        inherits: [System.ArgumentException],
        fields: {
            _actualValue: null
        },
        props: {
            Message: {
                get: function () {
                    var s = Bridge.ensureBaseProperty(this, "Message").$System$ArgumentException$Message;
                    if (this._actualValue != null) {
                        var valueMessage = System.SR.Format("Actual value was {0}.", Bridge.toString(this._actualValue));
                        if (s == null) {
                            return valueMessage;
                        }
                        return (s || "") + ("\n" || "") + (valueMessage || "");
                    }
                    return s;
                }
            },
            ActualValue: {
                get: function () {
                    return this._actualValue;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.ArgumentException.$ctor1.call(this, "Specified argument was out of the range of valid values.");
                this.HResult = -2146233086;
            },
            $ctor1: function (paramName) {
                this.$initialize();
                System.ArgumentException.$ctor3.call(this, "Specified argument was out of the range of valid values.", paramName);
                this.HResult = -2146233086;
            },
            $ctor4: function (paramName, message) {
                this.$initialize();
                System.ArgumentException.$ctor3.call(this, message, paramName);
                this.HResult = -2146233086;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.ArgumentException.$ctor2.call(this, message, innerException);
                this.HResult = -2146233086;
            },
            $ctor3: function (paramName, actualValue, message) {
                this.$initialize();
                System.ArgumentException.$ctor3.call(this, message, paramName);
                this._actualValue = actualValue;
                this.HResult = -2146233086;
            }
        }
    });
