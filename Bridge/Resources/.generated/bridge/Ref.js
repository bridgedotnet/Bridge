    Bridge.define("Bridge.Ref$1", function (T) { return {
        statics: {
            methods: {
                op_Implicit: function (reference) {
                    return reference.Value;
                }
            }
        },
        fields: {
            getter: null,
            setter: null
        },
        props: {
            Value: {
                get: function () {
                    return this.getter();
                },
                set: function (value) {
                    this.setter(value);
                }
            },
            v: {
                get: function () {
                    return this.Value;
                },
                set: function (value) {
                    this.Value = value;
                }
            }
        },
        ctors: {
            ctor: function (getter, setter) {
                this.$initialize();
                this.getter = getter;
                this.setter = setter;
            }
        },
        methods: {
            toString: function () {
                return Bridge.toString(this.Value);
            },
            valueOf: function () {
                return this.Value;
            }
        }
    }; });
