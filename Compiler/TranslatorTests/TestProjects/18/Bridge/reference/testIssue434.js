// Top

    (function(){
        TestIssue434.Issue434A.doSomething(2);
    })();

    Bridge.define('TestIssue434.Issue434A', {
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
                System.Console.log(i);
            }
        }
    });

    TestIssue434.Issue434A.method1();
    TestIssue434.Issue434A.method3();
    TestIssue434.Issue434A.method4();

    (function(){
        TestIssue434.Issue434B.doSomething(2);
    })();

    Bridge.define('TestIssue434.Issue434B', {
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
                System.Console.log(i);
            }
        }
    });

    TestIssue434.Issue434B.method1();
    TestIssue434.Issue434B.method3();
    TestIssue434.Issue434B.method4();

    Bridge.define('TestIssue434.Issue434C', {
        statics: {

        }
    });

// Bottom
