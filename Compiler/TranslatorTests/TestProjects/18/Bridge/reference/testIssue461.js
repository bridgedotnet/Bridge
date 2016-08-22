Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('TestIssue461.Issue461', {
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
            System.Console.log(System.String.concat("ev.CurrentTarget.Value: ", ev.currentTarget.value));
    
            // Tests if ev.IsMouseEvent() compiles
            System.Console.log(System.String.concat("IsMouseEvent: ", System.Boolean.toString(Bridge.is(ev, MouseEvent))));
        },
        f2: function (ev) {
            // Tests if ev.CurrentTarget.Href compiles
            System.Console.log(System.String.concat("ev.CurrentTarget.Href: ", ev.currentTarget.href));
        }
    });
    
    
    
    Bridge.init();
});
