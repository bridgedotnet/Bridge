/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Point', {
    statics: {
        constructor: function () {
            ClientTestLibrary.Point.staticInt = 500;
            ClientTestLibrary.Point.staticString = "Initialized";
        },
        statitIntNotInitialized: 0,
        statitStringNotInitialized: null,
        staticInt: 0,
        staticString: null,
        CONST_CHAR: 87,
        test3: function () {
            return ClientTestLibrary.Point.statitIntNotInitialized + ClientTestLibrary.Point.staticInt;
        }
    },
    x: 0,
    y: 0,
    constructor: function () {
    },
    test1: function () {
        return ClientTestLibrary.Point.staticInt + this.x;
    },
    test2: function (p) {
        return Bridge.merge(new ClientTestLibrary.Point(), {
            x: this.x + p.x,
            y: this.y + p.y
        } );
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.x == null ? 0 : Bridge.getHashCode(this.x));
        hash = hash * 23 + (this.y == null ? 0 : Bridge.getHashCode(this.y));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,ClientTestLibrary.Point)) {
            return false;
        }
        return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Point();
        s.x = this.x;
        s.y = this.y;
        return s;
    }
});

Bridge.define('ClientTestLibrary.Rectangle', {
    config: {
        init: function () {
            this.l = new ClientTestLibrary.Point();
            this.t = new ClientTestLibrary.Point();
        }
    },
    constructor$1: function (x, y) {
        // [#69]
        (new ClientTestLibrary.Rectangle("constructor")).$clone(this);

        this.l.x = x;
        this.l.y = y;
    },
    constructor$2: function (x1, y1, x2, y2) {
        this.l.x = x1;
        this.l.y = y1;
        this.t.x = x2;
        this.t.y = y2;
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.l == null ? 0 : Bridge.getHashCode(this.l));
        hash = hash * 23 + (this.t == null ? 0 : Bridge.getHashCode(this.t));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,ClientTestLibrary.Rectangle)) {
            return false;
        }
        return Bridge.equals(this.l, o.l) && Bridge.equals(this.t, o.t);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Rectangle();
        s.l = this.l;
        s.t = this.t;
        return s;
    }
});

Bridge.define('ClientTestLibrary.TestValueTypes', {
    statics: {
        testInstanceConstructorsAndMethods: function (assert) {
            assert.expect(18);

            // Check parameterless constructor
            var a = new ClientTestLibrary.Point();

            assert.deepEqual(a.x, 0, "x 0");
            assert.deepEqual(a.y, 0, "y 0");

            var r = new ClientTestLibrary.Rectangle("constructor");

            assert.deepEqual(r.l.x, 0, "r.l.x 0");
            assert.deepEqual(r.l.y, 0, "r.l.y 0");
            assert.deepEqual(r.t.x, 0, "r.t.x 0");
            assert.deepEqual(r.t.y, 0, "r.t.y 0");

            r = new ClientTestLibrary.Rectangle("constructor$1", 10, 20);

            assert.deepEqual(r.l.x, 10, "r.l.x 10");
            assert.deepEqual(r.l.y, 20, "r.l.y 20");
            assert.deepEqual(r.t.x, 0, "r.t.x 0");
            assert.deepEqual(r.t.y, 0, "r.t.y 0");

            r = new ClientTestLibrary.Rectangle("constructor$2", 30, 40, 50, 60);

            assert.deepEqual(r.l.x, 30, "r.l.x 30");
            assert.deepEqual(r.l.y, 40, "r.l.y 40");
            assert.deepEqual(r.t.x, 50, "r.t.x 50");
            assert.deepEqual(r.t.y, 60, "r.t.y 60");

            var i = a.test1();

            assert.deepEqual(i, 500, "i 500");
            a.x = 300;
            i = a.test1();
            assert.deepEqual(i, 800, "i 800");

            a.y = 400;

            var b = Bridge.merge(new ClientTestLibrary.Point(), {
                x: 5,
                y: 7
            } );
            var c = b.test2(a.$clone());

            assert.deepEqual(c.x, 305, "c.x 305");
            assert.deepEqual(c.y, 407, "c.y 407");
        },
        testStaticConstructorsAndMethods: function (assert) {
            assert.expect(7);

            assert.deepEqual(ClientTestLibrary.Point.staticInt, 500, "Point.StaticInt 500");
            assert.deepEqual(ClientTestLibrary.Point.staticString, "Initialized", "Point.StaticString Initialized");
            assert.deepEqual(ClientTestLibrary.Point.statitIntNotInitialized, 0, "Point.StatitIntNotInitialized 0");
            assert.deepEqual(ClientTestLibrary.Point.statitStringNotInitialized, null, "Point.StatitStringNotInitialized null");
            assert.deepEqual(ClientTestLibrary.Point.CONST_CHAR, Bridge.cast(87, Bridge.Int), "Point.CONST_CHAR W");

            ClientTestLibrary.Point.statitIntNotInitialized = -1;
            assert.deepEqual(ClientTestLibrary.Point.statitIntNotInitialized, -1, "Point.StatitIntNotInitialized -1");

            var i = ClientTestLibrary.Point.test3();
            assert.deepEqual(i, 499, "i 499");
        }
    }
});



Bridge.init();