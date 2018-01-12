Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1472.UseDoSomething", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Method","t":8,"sn":"Method","rt":System.Object},{"a":2,"n":"UseWithField","t":8,"sn":"UseWithField","rt":System.Void},{"a":2,"n":"UseWithMethod","t":8,"sn":"UseWithMethod","rt":System.Void},{"a":2,"n":"UseWithProperty","t":8,"sn":"UseWithProperty","rt":System.Void},{"a":2,"n":"UseWithSimpleCall","t":8,"sn":"UseWithSimpleCall","rt":System.Void},{"a":2,"n":"Property","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_Property","t":8,"rt":System.Int32,"fg":"Property","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Property","t":8,"p":[System.Int32],"rt":System.Void,"fs":"Property"},"fn":"Property"},{"a":1,"n":"Field","t":4,"rt":System.Int32,"sn":"Field","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; },
        fields: {
            Field: 0
        },
        props: {
            Property: 0
        },
        methods: {
            Method: function () {
                return Bridge.box(2, System.Int32);
            },
            UseWithSimpleCall: function () {
                // The method checks that local variales used as a parameter in a method with multiple keys in a [Template]
                // will NOT be wrapped with temp variable
                // DoSomethingTemplate(localVar, localVar);
                var localVar = { };
                DoSomethingTemplate(Bridge.unbox(localVar), Bridge.unbox(localVar));
            },
            UseWithField: function () {
                // The method checks that a field used as a parameter in a method with multiple keys in a [Template]
                // will NOT be wrapped with temp variable
                // DoSomethingTemplate(this.field, this.field);
                DoSomethingTemplate(this.Field, this.Field);
            },
            UseWithProperty: function () {
                var $t;
                // The method checks that a property used as a parameter in a method with multiple keys in a [Template]
                // will BE wrapped with temp variable
                // ($t = this.getProperty(), DoSomethingTemplate($t, $t));
                ($t = this.Property, DoSomethingTemplate($t, $t));
            },
            UseWithMethod: function () {
                var $t;
                // The method checks that a method used as a parameter in a method with multiple keys in a [Template]
                // will BE wrapped with temp variable
                // ($t = this.method(), DoSomethingTemplate($t, $t));
                ($t = Bridge.unbox(this.Method()), DoSomethingTemplate($t, $t));
            }
        }
    });
});
