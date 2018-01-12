Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1023.Optional$1", function (T) { return {
        $kind: "struct",
        $metadata : function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[T],"pi":[{"n":"value","pt":T,"ps":0}],"sn":"$ctor1"},{"a":2,"n":"Value","t":16,"rt":T,"g":{"a":2,"n":"get_Value","t":8,"rt":T,"fg":"Value"},"s":{"a":1,"n":"set_Value","t":8,"p":[T],"rt":System.Void,"fs":"Value"},"fn":"Value"}]}; },
        statics: {
            methods: {
                getDefaultValue: function () { return new (Test.BridgeIssues.N1023.Optional$1(T))(); }
            }
        },
        props: {
            Value: Bridge.getDefaultValue(T)
        },
        ctors: {
            $ctor1: function (value) {
                Test.BridgeIssues.N1023.Optional$1(T).ctor.call(this);
                this.Value = value;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([3587563198, this.Value]);
                return h;
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
        }
    }; });

    Bridge.define("Test.BridgeIssues.N1023.PersonDetails", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Test.BridgeIssues.N1023.Optional$1(System.String)],"pi":[{"n":"name","pt":Test.BridgeIssues.N1023.Optional$1(System.String),"ps":0}],"sn":"ctor"},{"a":2,"n":"Name","t":16,"rt":Test.BridgeIssues.N1023.Optional$1(System.String),"g":{"a":2,"n":"get_Name","t":8,"rt":Test.BridgeIssues.N1023.Optional$1(System.String),"fg":"Name"},"s":{"a":1,"n":"set_Name","t":8,"p":[Test.BridgeIssues.N1023.Optional$1(System.String)],"rt":System.Void,"fs":"Name"},"fn":"Name"}]}; },
        props: {
            Name: null
        },
        ctors: {
            init: function () {
                this.Name = new (Test.BridgeIssues.N1023.Optional$1(System.String))();
            },
            ctor: function (name) {
                this.$initialize();
                this.Name = name.$clone();
            }
        }
    });
});
