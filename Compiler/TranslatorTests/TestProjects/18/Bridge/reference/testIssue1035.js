    Bridge.define("TestIssue1035.StructBridge1035", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new TestIssue1035.StructBridge1035(); }
            }
        },
        props: {
            Data: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([6481214800, this.Data]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, TestIssue1035.StructBridge1035)) {
                    return false;
                }
                return Bridge.equals(this.Data, o.Data);
            },
            $clone: function (to) { return this; }
        }
    });
