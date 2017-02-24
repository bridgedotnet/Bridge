    Bridge.define("TestIssue2407.Bridge2407", {
        statics: {
            ChangedStaticName: function ChangedStaticName() {
                // Should use named function expressions
                // like doSomething: function doSomething() { }
                return "Static";
            },
            doSomethingStatic: function doSomethingStatic() {
                // Should use named function expressions
                // like doSomething: function doSomething() { }
            }
        },
        ChangedInstanceName: function ChangedInstanceName() {
            // Should use named function expressions
            // like doSomething: function doSomething() { }
            return "Instance";
        },
        doSomethingInstance: function doSomethingInstance() {
            // Should use named function expressions
            // like doSomething: function doSomething() { }
        }
    });
