/*
    --------------   1.0.0-beta    ---------------
    --------------   2017       ---------------
    --------------   {notdate}       ---------------
    --------------     ---------------
    --------------        ---------------
*/

alert("I'm header 1.0.0-beta");
// -- remark with no tokens

    Bridge.define("TestIssue599.Issue599", {
        statics: {
            ctors: {
                init: function () {
                    Bridge.ready(this.Main1);
                }
            },
            methods: {
                Main1: function Main1 () {
                    System.Console.WriteLine(new TestIssue599.Issue599()._something);
                }
            }
        },
        $entryPoint: true,
        fields: {
            _something: null
        },
        ctors: {
            init: function () {
                this._something = "HI!";
            }
        }
    });
// -- remark with no tokens

    Bridge.define("TestIssue948.Issue948", {
        statics: {
            methods: {
                Test: function Test () {
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
        }
    });
