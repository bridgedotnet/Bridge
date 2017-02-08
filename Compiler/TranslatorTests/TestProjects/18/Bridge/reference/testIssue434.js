// Top

    Bridge.init(function(){
        TestIssue434.Issue434A.doSomething(2);
    });

    Bridge.define("TestIssue434.Issue434A", {
        statics: {
            method1: function () {
                TestIssue434.Issue434A.doSomething(1);
            },
            method3: function () {
                TestIssue434.Issue434A.doSomething(3);
            },
            method4: function () {
                TestIssue434.Issue434A.doSomething(4);
            },
            doSomething: function (i) {
                Bridge.Console.log(i);
            }
        }
    });

    Bridge.init(function() { TestIssue434.Issue434A.method1(); });
    Bridge.init(function() { TestIssue434.Issue434A.method3(); });
    Bridge.init(function() { TestIssue434.Issue434A.method4(); });

    Bridge.init(function(){
        TestIssue434.Issue434B.doSomething(2);
    });

    Bridge.define("TestIssue434.Issue434B", {
        statics: {
            method1: function () {
                TestIssue434.Issue434B.doSomething(1);
            },
            method3: function () {
                TestIssue434.Issue434B.doSomething(3);
            },
            method4: function () {
                TestIssue434.Issue434B.doSomething(4);
            },
            doSomething: function (i) {
                Bridge.Console.log(i);
            }
        }
    });

    Bridge.init(function() { TestIssue434.Issue434B.method1(); });
    Bridge.init(function() { TestIssue434.Issue434B.method3(); });
    Bridge.init(function() { TestIssue434.Issue434B.method4(); });

    Bridge.define("TestIssue434.Issue434C");

// Bottom
