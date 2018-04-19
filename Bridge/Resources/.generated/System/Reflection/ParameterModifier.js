    Bridge.define("System.Reflection.ParameterModifier", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Reflection.ParameterModifier(); }
            }
        },
        fields: {
            _byRef: null
        },
        ctors: {
            $ctor1: function (parameterCount) {
                this.$initialize();
                if (parameterCount <= 0) {
                    throw new System.ArgumentException.$ctor1("Must specify one or more parameters.");
                }

                this._byRef = System.Array.init(parameterCount, false, System.Boolean);
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getItem: function (index) {
                return this._byRef[System.Array.index(index, this._byRef)];
            },
            setItem: function (index, value) {
                this._byRef[System.Array.index(index, this._byRef)] = value;
            },
            getHashCode: function () {
                var h = Bridge.addHash([6723435274, this._byRef]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Reflection.ParameterModifier)) {
                    return false;
                }
                return Bridge.equals(this._byRef, o._byRef);
            },
            $clone: function (to) {
                var s = to || new System.Reflection.ParameterModifier();
                s._byRef = this._byRef;
                return s;
            }
        }
    });
