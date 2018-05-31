    Bridge.define("System.Runtime.Serialization.EnumMemberAttribute", {
        inherits: [System.Attribute],
        fields: {
            _value: null,
            _isValueSetExplicitly: false
        },
        props: {
            Value: {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                    this._isValueSetExplicitly = true;
                }
            },
            IsValueSetExplicitly: {
                get: function () {
                    return this._isValueSetExplicitly;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Attribute.ctor.call(this);
            }
        }
    });
