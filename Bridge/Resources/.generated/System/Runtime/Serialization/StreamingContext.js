    Bridge.define("System.Runtime.Serialization.StreamingContext", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Runtime.Serialization.StreamingContext(); }
            }
        },
        fields: {
            _additionalContext: null,
            _state: 0
        },
        props: {
            State: {
                get: function () {
                    return this._state;
                }
            },
            Context: {
                get: function () {
                    return this._additionalContext;
                }
            }
        },
        ctors: {
            $ctor1: function (state) {
                System.Runtime.Serialization.StreamingContext.$ctor2.call(this, state, null);
            },
            $ctor2: function (state, additional) {
                this.$initialize();
                this._state = state;
                this._additionalContext = additional;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                if (!(Bridge.is(obj, System.Runtime.Serialization.StreamingContext))) {
                    return false;
                }
                var ctx = System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, System.Runtime.Serialization.StreamingContext), System.Runtime.Serialization.StreamingContext));
                return Bridge.referenceEquals(ctx._additionalContext, this._additionalContext) && ctx._state === this._state;
            },
            getHashCode: function () {
                return this._state;
            },
            $clone: function (to) {
                var s = to || new System.Runtime.Serialization.StreamingContext();
                s._additionalContext = this._additionalContext;
                s._state = this._state;
                return s;
            }
        }
    });
