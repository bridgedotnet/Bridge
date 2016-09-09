Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N1023.Optional$1', function (T) { return {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new (Test.BridgeIssues.N1023.Optional$1(T))(); }
        },
        config: {
            properties: {
                Value: Bridge.getDefaultValue(T)
            }
        },
        $ctor1: function (value) {
            Test.BridgeIssues.N1023.Optional$1(T).ctor.call(this);
            this.setValue(value);
        },
        ctor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 3587563198;
            hash = hash * 23 + (this.Value == null ? 0 : Bridge.getHashCode(this.Value));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Test.BridgeIssues.N1023.Optional$1(T))) {
                return false;
            }
            return Bridge.equals(this.Value, o.Value);
        },
        $clone: function (to) {
            var s = to || new (Test.BridgeIssues.N1023.Optional$1(T))();
            s.Value = this.Value;
            return s;
        }
    }; });

    Bridge.define('Test.BridgeIssues.N1023.PersonDetails', {
        config: {
            properties: {
                Name: null
            },
            init: function () {
                this.Name = new (Test.BridgeIssues.N1023.Optional$1(String))();
            }
        },
        ctor: function (name) {
            this.$initialize();
            this.setName(name.$clone());
        }
    });

    Bridge.init();
});
