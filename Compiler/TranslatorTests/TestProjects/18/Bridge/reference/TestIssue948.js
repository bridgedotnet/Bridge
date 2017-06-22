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
