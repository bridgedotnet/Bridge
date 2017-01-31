    Bridge.define('System.Collections.Generic.KeyValuePair$2', function (TKey, TValue) {
        return {
            $kind: "struct",

            statics: {
                getDefaultValue: function () {
                    return new (System.Collections.Generic.KeyValuePair$2(TKey, TValue))(Bridge.getDefaultValue(TKey), Bridge.getDefaultValue(TValue));
                }
            },

            ctor: function (key, value) {
                if (key === undefined) {
                    key = Bridge.getDefaultValue(TKey);
                }

                if (value === undefined) {
                    value = Bridge.getDefaultValue(TValue);
                }

                this.$initialize();
                this.key = key;
                this.value = value;
            },

            toString: function () {
                var s = "[";

                if (this.key != null) {
                    s += this.key.toString();
                }

                s += ", ";

                if (this.value != null) {
                    s += this.value.toString();
                }

                s += "]";

                return s;
            }
        };
    });