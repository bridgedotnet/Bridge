/*
    --------------   1.0.0-beta    ---------------
    --------------   2016       ---------------
    --------------   2016-08-26       ---------------
    --------------   Copyright 2008-2015 Object.NET, Inc.  ---------------
    --------------   Object.NET, Inc.     ---------------
*/

alert("I'm header 1.0.0-beta");

// -- remark with no tokens

Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('TestIssue599.Issue599', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main1);
                }
            },
            main1: function () {
                System.Console.log(new TestIssue599.Issue599()._something);
            }
        },
        $entryPoint: true,
        _something: "HI!"
    });

    Bridge.init();
});

// -- remark with no tokens

Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('TestIssue948.Issue948', {
        statics: {
            test: function () {
                // A comment

                /* global Bridge */

                var a = 5;/* global Bridge */

                var b = 6; /* global Bridge */

                var c = 7; /* global Bridge */;

                var d = 8;// A comment;

                var e = 9; // A comment;

                var f = 10; // A comment;

            }
        }
    });

    Bridge.init();
});
