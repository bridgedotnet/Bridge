    Bridge.define("System.Runtime.Serialization.IgnoreDataMemberAttribute", {
        inherits: [System.Attribute],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Attribute.ctor.call(this);
            }
        }
    });
