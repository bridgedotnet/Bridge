    Bridge.define("System.ComponentModel.DefaultValueAttribute", {
        inherits: [System.Attribute],
        fields: {
            value: null
        },
        props: {
            Value: {
                get: function () {
                    return this.value;
                }
            }
        },
        ctors: {
            ctor: function (value) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.value = value;
            }
        },
        methods: {
            equals: function (obj) {
                if (Bridge.referenceEquals(obj, this)) {
                    return true;
                }

                var other = Bridge.as(obj, System.ComponentModel.DefaultValueAttribute);

                if (other != null) {
                    if (this.Value != null) {
                        return Bridge.equals(this.Value, other.Value);
                    } else {
                        return (other.Value == null);
                    }
                }
                return false;
            },
            getHashCode: function () {
                return Bridge.getHashCode(this);
            },
            setValue: function (value) {
                this.value = value;
            }
        }
    });
