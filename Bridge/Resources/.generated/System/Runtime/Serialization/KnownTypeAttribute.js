    Bridge.define("System.Runtime.Serialization.KnownTypeAttribute", {
        inherits: [System.Attribute],
        fields: {
            _methodName: null,
            _type: null
        },
        props: {
            MethodName: {
                get: function () {
                    return this._methodName;
                }
            },
            Type: {
                get: function () {
                    return this._type;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Attribute.ctor.call(this);
            },
            $ctor2: function (type) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this._type = type;
            },
            $ctor1: function (methodName) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this._methodName = methodName;
            }
        }
    });
