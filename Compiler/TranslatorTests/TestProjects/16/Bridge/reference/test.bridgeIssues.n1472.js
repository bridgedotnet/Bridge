Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1472.UseDoSomething", {
        field: 0,
        config: {
            properties: {
                Property: 0
            }
        },
        method: function () {
            return Bridge.box(2, System.Int32);
        },
        useWithSimpleCall: function () {
            // The method checks that local variales used as a parameter in a method with multiple keys in a [Template]
            // will NOT be wrapped with temp variable
            // DoSomethingTemplate(localVar, localVar);
            var localVar = {  };
            DoSomethingTemplate(Bridge.unbox(localVar), Bridge.unbox(localVar));
        },
        useWithField: function () {
            // The method checks that a field used as a parameter in a method with multiple keys in a [Template]
            // will NOT be wrapped with temp variable
            // DoSomethingTemplate(this.field, this.field);
            DoSomethingTemplate(this.field, this.field);
        },
        useWithProperty: function () {
            var $t;
            // The method checks that a property used as a parameter in a method with multiple keys in a [Template]
            // will BE wrapped with temp variable
            // ($t = this.getProperty(), DoSomethingTemplate($t, $t));
            ($t = this.getProperty(), DoSomethingTemplate($t, $t));
        },
        useWithMethod: function () {
            var $t;
            // The method checks that a method used as a parameter in a method with multiple keys in a [Template]
            // will BE wrapped with temp variable
            // ($t = this.method(), DoSomethingTemplate($t, $t));
            ($t = Bridge.unbox(this.method()), DoSomethingTemplate($t, $t));
        }
    });
});
