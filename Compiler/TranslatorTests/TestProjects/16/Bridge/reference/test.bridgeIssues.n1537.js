Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1537.A", {
        getProperty: function () {
            // Classes should be in the order A -> B -> C -> PlaceMeToTheEnd
            return 1;
        }
    });

    Bridge.define("Test.BridgeIssues.N1537.B", {
        inherits: [Test.BridgeIssues.N1537.A]
    });

    Bridge.define("Test.BridgeIssues.N1537.C", {
        inherits: [Test.BridgeIssues.N1537.B]
    });

    Bridge.define("Test.BridgeIssues.N1537.PlaceMeToTheEnd");

    var $box_ = {};

    Bridge.ns("Test.BridgeIssues.N2318.N2318.JustEnum", $box_);

    Bridge.apply($box_.Test.BridgeIssues.N2318.N2318.JustEnum, {
        toString: function(obj) {return System.Enum.toString(Test.BridgeIssues.N2318.N2318.JustEnum, obj);}
    });


    Bridge.ns("Boolean", $box_);

    Bridge.apply($box_.Boolean, {
        toString: function(obj) {return System.Boolean.toString(obj);}
    });


    Bridge.ns("Date", $box_);

    Bridge.apply($box_.Date, {
        toString: function(obj) {return Bridge.Date.format(obj);}
    });


    Bridge.ns("System.Char", $box_);

    Bridge.apply($box_.System.Char, {
        toString: function(obj) {return String.fromCharCode(obj);}
    });


    Bridge.ns("System.Double", $box_);

    Bridge.apply($box_.System.Double, {
        toString: function(obj) {return System.Double.format(obj, 'G');}
    });


    Bridge.ns("System.Single", $box_);

    Bridge.apply($box_.System.Single, {
        toString: function(obj) {return System.Single.format(obj, 'G');}
    });
});
