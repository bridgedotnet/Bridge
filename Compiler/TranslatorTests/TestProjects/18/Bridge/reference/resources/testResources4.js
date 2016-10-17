/*
    --------------   1.0.0-beta    ---------------
    --------------   2016       ---------------
    --------------   {notdate}       ---------------
    --------------     ---------------
    --------------        ---------------
*/

alert("I'm header 1.0.0-beta");

// -- remark with no tokens

    Bridge.define("TestIssue599.Issue599", {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main1);
                }
            },
            main1: function () {
                Bridge.Console.log(new TestIssue599.Issue599()._something);
            }
        },
        $entryPoint: true,
        _something: "HI!"
    });

// -- remark with no tokens

    Bridge.define("TestIssue948.Issue948", {
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
