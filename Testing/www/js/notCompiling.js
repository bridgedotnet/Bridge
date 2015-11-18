/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Class391', {
    statics: {
        main: function () {
            var $t, $t1, $t2, $t3;
            var TestArray1 = ["TestA", "TestB", "TestC"];
            var TestArray2 = ["TestA", "TestB", "TestC"];

            var doSomething = false;
            $t = Bridge.getEnumerator(TestArray1);
            while ($t.moveNext()) {
                var x = $t.getCurrent();
                $t1 = Bridge.getEnumerator(TestArray2);
                while ($t1.moveNext()) {
                    var y = $t1.getCurrent();
                    doSomething = Bridge.String.equals(x, y);
                }
            }

            $t2 = Bridge.getEnumerator(TestArray1);
            while ($t2.moveNext()) {
                var x1 = $t2.getCurrent();
                $t3 = Bridge.getEnumerator(TestArray2);
                while ($t3.moveNext()) {
                    var y1 = $t3.getCurrent();
                    doSomething = Bridge.String.equals(x1, y1);
                }
            }
        }
    }
});

Bridge.define('ClientTestLibrary.Class59', {
    statics: {
        method1: function () {
        }
    },
    method1: function (d) {
    }
});

Bridge.define('ClientTestLibrary.Class59.Aux1');

Bridge.define('ClientTestLibrary.Class64', {
    constructor: function () {
    },
    constructor$1: function (related) {
    },
    test: function () {
        var aux = new ClientTestLibrary.Class64.Aux1();
        new ClientTestLibrary.Class64("constructor$1", aux);
    }
});

Bridge.define('ClientTestLibrary.Class64.Aux1');

Bridge.define('ClientTestLibrary.Class65_1');

Bridge.define('ClientTestLibrary.Class65_1.Nested');

Bridge.define('ClientTestLibrary.Class65_2', {
    inherits: [ClientTestLibrary.Class65_1.Nested]
});

Bridge.define('ClientTestLibrary.Class84', {
    test1: function () {
        try {
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
        }
    }
});

Bridge.define('ClientTestLibrary.Rectangle66', {
    constructor$1: function (x1) {
        (new ClientTestLibrary.Rectangle66("constructor")).$clone(this);
    },
    constructor$2: function (x1, x2) {
    },
    constructor: function () {
    },
    $clone: function (to) { return this; }
});



Bridge.init();