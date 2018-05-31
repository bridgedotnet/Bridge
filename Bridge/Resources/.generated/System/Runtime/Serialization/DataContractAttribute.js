    Bridge.define("System.Runtime.Serialization.DataContractAttribute", {
        inherits: [System.Attribute],
        fields: {
            _name: null,
            _ns: null,
            _isNameSetExplicitly: false,
            _isNamespaceSetExplicitly: false,
            _isReference: false,
            _isReferenceSetExplicitly: false
        },
        props: {
            IsReference: {
                get: function () {
                    return this._isReference;
                },
                set: function (value) {
                    this._isReference = value;
                    this._isReferenceSetExplicitly = true;
                }
            },
            IsReferenceSetExplicitly: {
                get: function () {
                    return this._isReferenceSetExplicitly;
                }
            },
            Namespace: {
                get: function () {
                    return this._ns;
                },
                set: function (value) {
                    this._ns = value;
                    this._isNamespaceSetExplicitly = true;
                }
            },
            IsNamespaceSetExplicitly: {
                get: function () {
                    return this._isNamespaceSetExplicitly;
                }
            },
            Name: {
                get: function () {
                    return this._name;
                },
                set: function (value) {
                    this._name = value;
                    this._isNameSetExplicitly = true;
                }
            },
            IsNameSetExplicitly: {
                get: function () {
                    return this._isNameSetExplicitly;
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
