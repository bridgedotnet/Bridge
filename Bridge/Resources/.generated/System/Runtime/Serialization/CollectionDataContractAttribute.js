    Bridge.define("System.Runtime.Serialization.CollectionDataContractAttribute", {
        inherits: [System.Attribute],
        fields: {
            _name: null,
            _ns: null,
            _itemName: null,
            _keyName: null,
            _valueName: null,
            _isReference: false,
            _isNameSetExplicitly: false,
            _isNamespaceSetExplicitly: false,
            _isReferenceSetExplicitly: false,
            _isItemNameSetExplicitly: false,
            _isKeyNameSetExplicitly: false,
            _isValueNameSetExplicitly: false
        },
        props: {
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
            },
            ItemName: {
                get: function () {
                    return this._itemName;
                },
                set: function (value) {
                    this._itemName = value;
                    this._isItemNameSetExplicitly = true;
                }
            },
            IsItemNameSetExplicitly: {
                get: function () {
                    return this._isItemNameSetExplicitly;
                }
            },
            KeyName: {
                get: function () {
                    return this._keyName;
                },
                set: function (value) {
                    this._keyName = value;
                    this._isKeyNameSetExplicitly = true;
                }
            },
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
            IsKeyNameSetExplicitly: {
                get: function () {
                    return this._isKeyNameSetExplicitly;
                }
            },
            ValueName: {
                get: function () {
                    return this._valueName;
                },
                set: function (value) {
                    this._valueName = value;
                    this._isValueNameSetExplicitly = true;
                }
            },
            IsValueNameSetExplicitly: {
                get: function () {
                    return this._isValueNameSetExplicitly;
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
