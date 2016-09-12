// Content header: 1.0.0-beta Copyright 2008-2015 Object.NET, Inc. {notdate} 2016 Object.NET, Inc.

// ---
// Content remark: Path: Bridge/output/testIssue434.js; name: testIssue434.js
// ---

// Top

    (function(){
        TestIssue434.Issue434A.doSomething(2);
    })();

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

    TestIssue434.Issue434A.method1();
    TestIssue434.Issue434A.method3();
    TestIssue434.Issue434A.method4();

    (function(){
        TestIssue434.Issue434B.doSomething(2);
    })();

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

    TestIssue434.Issue434B.method1();
    TestIssue434.Issue434B.method3();
    TestIssue434.Issue434B.method4();

    Bridge.define("TestIssue434.Issue434C", {
        statics: {

        }
    });

// Bottom

// ---
// Content remark: Path: Bridge/output/testIssue461.js; name: testIssue461.js
// ---

    Bridge.define("TestIssue461.Issue461", {
        statics: {
            test: function () {
                var input = document.createElement('input');

                input.onchange = Bridge.fn.combine(input.onchange, $_.TestIssue461.Issue461.f1);

                var anchor = document.createElement('a');

                anchor.onclick = Bridge.fn.combine(anchor.onclick, $_.TestIssue461.Issue461.f2);

                // Test if Document.GetElementById<>() compiles
                var div = document.getElementById("div1");

                // Tests if Element is still a superclass of all the element classes and the following code compiles
                var element;

                element = document.createElement('input');
                element = document.createElement('textarea');
            }
        }
    });

    var $_ = {};

    Bridge.ns("TestIssue461.Issue461", $_);

    Bridge.apply($_.TestIssue461.Issue461, {
        f1: function (ev) {
            // Tests if ev.CurrentTarget.Value compiles
            Bridge.Console.log(System.String.concat("ev.CurrentTarget.Value: ", ev.currentTarget.value));

            // Tests if ev.IsMouseEvent() compiles
            Bridge.Console.log(System.String.concat("IsMouseEvent: ", System.Boolean.toString(Bridge.is(ev, MouseEvent))));
        },
        f2: function (ev) {
            // Tests if ev.CurrentTarget.Href compiles
            Bridge.Console.log(System.String.concat("ev.CurrentTarget.Href: ", ev.currentTarget.href));
        }
    });
