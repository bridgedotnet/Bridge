// Top

    Bridge.init(function () {
        TestIssue434.Issue434A.DoSomething(2);
    });

    Bridge.define("TestIssue434.Issue434A", {
        statics: {
            methods: {
                Method1: function Method1 () {
                    TestIssue434.Issue434A.DoSomething(1);
                },
                Method3: function Method3 () {
                    TestIssue434.Issue434A.DoSomething(3);
                },
                Method4: function Method4 () {
                    TestIssue434.Issue434A.DoSomething(4);
                },
                DoSomething: function DoSomething (i) {
                    System.Console.WriteLine(i);
                }
            }
        }
    });

    Bridge.init(function () { TestIssue434.Issue434A.Method1(); });
    Bridge.init(function () { TestIssue434.Issue434A.Method3(); });
    Bridge.init(function () { TestIssue434.Issue434A.Method4(); });

    Bridge.init(function () {
        TestIssue434.Issue434B.DoSomething(2);
    });

    Bridge.define("TestIssue434.Issue434B", {
        statics: {
            methods: {
                Method1: function Method1 () {
                    TestIssue434.Issue434B.DoSomething(1);
                },
                Method3: function Method3 () {
                    TestIssue434.Issue434B.DoSomething(3);
                },
                Method4: function Method4 () {
                    TestIssue434.Issue434B.DoSomething(4);
                },
                DoSomething: function DoSomething (i) {
                    System.Console.WriteLine(i);
                }
            }
        }
    });

    Bridge.init(function () { TestIssue434.Issue434B.Method1(); });
    Bridge.init(function () { TestIssue434.Issue434B.Method3(); });
    Bridge.init(function () { TestIssue434.Issue434B.Method4(); });

    Bridge.define("TestIssue434.Issue434C");

// Bottom
