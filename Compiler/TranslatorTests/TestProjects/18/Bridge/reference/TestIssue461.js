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
