    Bridge.define("System.Globalization.TextInfo", {
        inherits: [System.ICloneable,System.Object],
        props: {
            ANSICodePage: 0,
            CultureName: null,
            EBCDICCodePage: 0,
            IsReadOnly: false,
            IsRightToLeft: false,
            LCID: 0,
            ListSeparator: null,
            MacCodePage: 0,
            OEMCodePage: 0
        },
        alias: ["clone", "System$ICloneable$clone"],
        methods: {
            clone: function () {
                return Bridge.copy(new System.Globalization.TextInfo(), this, System.Array.init(["ANSICodePage", "CultureName", "EBCDICCodePage", "IsReadOnly", "IsRightToLeft", "LCID", "MacCodePage", "OEMCodePage"], System.String));
            }
        }
    });
