    Bridge.define("System.Globalization.CultureNotFoundException", {
        inherits: [System.ArgumentException],
        statics: {
            props: {
                DefaultMessage: {
                    get: function () {
                        return "Culture is not supported.";
                    }
                }
            }
        },
        fields: {
            _invalidCultureName: null,
            _invalidCultureId: null
        },
        props: {
            InvalidCultureId: {
                get: function () {
                    return this._invalidCultureId;
                }
            },
            InvalidCultureName: {
                get: function () {
                    return this._invalidCultureName;
                }
            },
            FormatedInvalidCultureId: {
                get: function () {
                    return this.InvalidCultureId != null ? System.String.formatProvider(System.Globalization.CultureInfo.invariantCulture, "{0} (0x{0:x4})", [Bridge.box(System.Nullable.getValue(this.InvalidCultureId), System.Int32)]) : this.InvalidCultureName;
                }
            },
            Message: {
                get: function () {
                    var s = Bridge.ensureBaseProperty(this, "Message").$System$ArgumentException$Message;
                    if (this._invalidCultureId != null || this._invalidCultureName != null) {
                        var valueMessage = System.SR.Format("{0} is an invalid culture identifier.", this.FormatedInvalidCultureId);
                        if (s == null) {
                            return valueMessage;
                        }

                        return (s || "") + ("\n" || "") + (valueMessage || "");
                    }
                    return s;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.ArgumentException.$ctor1.call(this, System.Globalization.CultureNotFoundException.DefaultMessage);
            },
            $ctor1: function (message) {
                this.$initialize();
                System.ArgumentException.$ctor1.call(this, message);
            },
            $ctor5: function (paramName, message) {
                this.$initialize();
                System.ArgumentException.$ctor3.call(this, message, paramName);
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.ArgumentException.$ctor2.call(this, message, innerException);
            },
            $ctor7: function (paramName, invalidCultureName, message) {
                this.$initialize();
                System.ArgumentException.$ctor3.call(this, message, paramName);
                this._invalidCultureName = invalidCultureName;
            },
            $ctor6: function (message, invalidCultureName, innerException) {
                this.$initialize();
                System.ArgumentException.$ctor2.call(this, message, innerException);
                this._invalidCultureName = invalidCultureName;
            },
            $ctor3: function (message, invalidCultureId, innerException) {
                this.$initialize();
                System.ArgumentException.$ctor2.call(this, message, innerException);
                this._invalidCultureId = invalidCultureId;
            },
            $ctor4: function (paramName, invalidCultureId, message) {
                this.$initialize();
                System.ArgumentException.$ctor3.call(this, message, paramName);
                this._invalidCultureId = invalidCultureId;
            }
        }
    });
