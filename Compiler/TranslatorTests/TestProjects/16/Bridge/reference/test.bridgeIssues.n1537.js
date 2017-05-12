Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1537.A", {
        props: {
            Property: {
                get: function () {
                    // Classes should be in the order A -> B -> C -> PlaceMeToTheEnd
                    return 1;
                }
            }
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
        toString: function (obj) {return System.Enum.toString(Test.BridgeIssues.N2318.N2318.JustEnum, obj);}
    });


    Bridge.ns("System.Boolean", $box_);

    Bridge.apply($box_.System.Boolean, {
        toString: function (obj) {return System.Boolean.toString(obj);}
    });


    Bridge.ns("System.DateTime", $box_);

    Bridge.apply($box_.System.DateTime, {
        toString: function (obj) {return System.DateTime.format(obj);}
    });


    Bridge.ns("System.Char", $box_);

    Bridge.apply($box_.System.Char, {
        toString: function (obj) {return String.fromCharCode(obj);},
        getHashCode: function (obj) {return System.Char.getHashCode(obj);}
    });


    Bridge.ns("System.Double", $box_);

    Bridge.apply($box_.System.Double, {
        toString: function (obj) {return System.Double.format(obj, 'G');},
        getHashCode: function (obj) {return System.Double.getHashCode(obj);}
    });


    Bridge.ns("System.Single", $box_);

    Bridge.apply($box_.System.Single, {
        toString: function (obj) {return System.Single.format(obj, 'G');},
        getHashCode: function (obj) {return System.Single.getHashCode(obj);}
    });


    Bridge.ns("Test.BridgeIssues.N2420.Options.Format", $box_);

    Bridge.apply($box_.Test.BridgeIssues.N2420.Options.Format, {
        toString: function (obj) {return System.Enum.toString(Test.BridgeIssues.N2420.Options.Format, obj);}
    });
});
