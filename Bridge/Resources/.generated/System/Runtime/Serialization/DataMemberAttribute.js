    Bridge.define("System.Runtime.Serialization.DataMemberAttribute", {
        inherits: [System.Attribute],
        fields: {
            _name: null,
            _isNameSetExplicitly: false,
            _order: 0,
            _isRequired: false,
            _emitDefaultValue: false
        },
        props: {
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
            Order: {
                get: function () {
                    return this._order;
                },
                set: function (value) {
                    if (value < 0) {
                        throw new System.Runtime.Serialization.InvalidDataContractException.$ctor1("Property 'Order' in DataMemberAttribute attribute cannot be a negative number.");
                    }
                    this._order = value;
                }
            },
            IsRequired: {
                get: function () {
                    return this._isRequired;
                },
                set: function (value) {
                    this._isRequired = value;
                }
            },
            EmitDefaultValue: {
                get: function () {
                    return this._emitDefaultValue;
                },
                set: function (value) {
                    this._emitDefaultValue = value;
                }
            }
        },
        ctors: {
            init: function () {
                this._order = -1;
                this._emitDefaultValue = true;
            },
            ctor: function () {
                this.$initialize();
                System.Attribute.ctor.call(this);
            }
        }
    });
