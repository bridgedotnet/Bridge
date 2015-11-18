/* global Bridge */

"use strict";

Bridge.define('TestIssue461.Issue461', {
    statics: {
        test: function () {
            var input = document.createElement('input');

            input.onchange = Bridge.fn.combine(input.onchange, function (ev) {
                // Tests if ev.CurrentTarget.Value compiles
                console.log("ev.CurrentTarget.Value: " + ev.currentTarget.value);

                // Tests if ev.IsMouseEvent() compiles
                console.log("IsMouseEvent: " + Bridge.is(ev, MouseEvent));
            });

            var anchor = document.createElement('a');

            anchor.onclick = Bridge.fn.combine(anchor.onclick, function (ev) {
                // Tests if ev.CurrentTarget.Href compiles
                console.log("ev.CurrentTarget.Href: " + ev.currentTarget.href);
            });

            // Test if Document.GetElementById<>() compiles
            var div = document.getElementById("div1");

            // Tests if Element is still a superclass of all the element classes and the following code compiles
            var element;

            element = document.createElement('input');
            element = document.createElement('textarea');
        }
    }
});



Bridge.init();