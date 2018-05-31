    Bridge.define("System.Runtime.Serialization.ContractNamespaceAttribute", {
        inherits: [System.Attribute],
        fields: {
            _clrNamespace: null,
            _contractNamespace: null
        },
        props: {
            ClrNamespace: {
                get: function () {
                    return this._clrNamespace;
                },
                set: function (value) {
                    this._clrNamespace = value;
                }
            },
            ContractNamespace: {
                get: function () {
                    return this._contractNamespace;
                }
            }
        },
        ctors: {
            ctor: function (contractNamespace) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this._contractNamespace = contractNamespace;
            }
        }
    });
