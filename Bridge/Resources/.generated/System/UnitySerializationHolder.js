    Bridge.define("System.UnitySerializationHolder", {
        inherits: [System.Runtime.Serialization.ISerializable,System.Runtime.Serialization.IObjectReference],
        statics: {
            fields: {
                NullUnity: 0
            },
            ctors: {
                init: function () {
                    this.NullUnity = 2;
                }
            }
        },
        alias: ["GetRealObject", "System$Runtime$Serialization$IObjectReference$GetRealObject"],
        methods: {
            GetRealObject: function (context) {
                throw System.NotImplemented.ByDesign;

            }
        }
    });
