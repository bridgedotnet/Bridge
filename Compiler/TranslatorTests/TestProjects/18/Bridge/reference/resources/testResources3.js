// Content header: 1.0.0-beta  {notdate} 2017 
// ---
// Content remark: Path: Bridge/output/testIssue434.js; name: testIssue434.js
// ---

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
// ---
// Content remark: Path: Bridge/output/testIssue461.js; name: testIssue461.js
// ---

    Bridge.define("TestIssue461.Issue461", {
        statics: {
            methods: {
                Test: function Test () {
                    var input = document.createElement('input');

                    input.onchange = Bridge.fn.combine(input.onchange, $asm.$.TestIssue461.Issue461.f1);

                    var anchor = document.createElement('a');

                    anchor.onclick = Bridge.fn.combine(anchor.onclick, $asm.$.TestIssue461.Issue461.f2);

                    // Test if Document.GetElementById<>() compiles
                    var div = document.getElementById("div1");

                    // Tests if Element is still a superclass of all the element classes and the following code compiles
                    var element;

                    element = document.createElement('input');
                    element = document.createElement('textarea');
                }
            }
        }
    });

    Bridge.ns("TestIssue461.Issue461", $asm.$);

    Bridge.apply($asm.$.TestIssue461.Issue461, {
        f1: function (ev) {
            // Tests if ev.CurrentTarget.Value compiles
            System.Console.WriteLine(System.String.concat("ev.CurrentTarget.Value: ", ev.currentTarget.value));

            // Tests if ev.IsMouseEvent() compiles
            System.Console.WriteLine("IsMouseEvent: " + System.Boolean.toString(Bridge.is(ev, MouseEvent)));
        },
        f2: function (ev) {
            // Tests if ev.CurrentTarget.Href compiles
            System.Console.WriteLine(System.String.concat("ev.CurrentTarget.Href: ", ev.currentTarget.href));
        }
    });
