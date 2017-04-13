    Bridge.define("TestIssue2407.Bridge2407", {
        statics: {
            ChangedStaticName: function ChangedStaticName() {
                // Should use named function expressions
                // like doSomething: function doSomething() { }
                return "Static";
            },
            DoSomethingStatic: function DoSomethingStatic() {
                // Should use named function expressions
                // like doSomething: function doSomething() { }
            }
        },
        ChangedInstanceName: function ChangedInstanceName() {
            // Should use named function expressions
            // like doSomething: function doSomething() { }
            return "Instance";
        },
        DoSomethingInstance: function DoSomethingInstance() {
            // Should use named function expressions
            // like doSomething: function doSomething() { }
        }
    });
