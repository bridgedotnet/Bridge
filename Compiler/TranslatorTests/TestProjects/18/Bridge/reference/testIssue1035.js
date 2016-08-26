    Bridge.define('TestIssue1035.StructBridge1035', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new TestIssue1035.StructBridge1035(); }
        },
        config: {
            properties: {
                Data: 0
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -250097448;
            hash = hash * 23 + (this.Data == null ? 0 : Bridge.getHashCode(this.Data));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, TestIssue1035.StructBridge1035)) {
                return false;
            }
            return Bridge.equals(this.Data, o.Data);
        },
        $clone: function (to) { return this; }
    });
