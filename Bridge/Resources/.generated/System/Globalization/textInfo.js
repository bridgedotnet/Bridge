    Bridge.define("System.Globalization.TextInfo", {
        inherits: [System.ICloneable],
        fields: {
            listSeparator: null
        },
        props: {
            ANSICodePage: 0,
            CultureName: null,
            EBCDICCodePage: 0,
            IsReadOnly: false,
            IsRightToLeft: false,
            LCID: 0,
            ListSeparator: {
                get: function () {
                    return this.listSeparator;
                },
                set: function (value) {
                    this.VerifyWritable();

                    this.listSeparator = value;
                }
            },
            MacCodePage: 0,
            OEMCodePage: 0
        },
        alias: ["clone", "System$ICloneable$clone"],
        methods: {
            clone: function () {
                return Bridge.copy(new System.Globalization.TextInfo(), this, System.Array.init(["ANSICodePage", "CultureName", "EBCDICCodePage", "IsRightToLeft", "LCID", "listSeparator", "MacCodePage", "OEMCodePage", "IsReadOnly"], System.String));
            },
            VerifyWritable: function () {
                if (this.IsReadOnly) {
                    throw new System.InvalidOperationException.$ctor1("Instance is read-only.");
                }
            }
        }
    });
