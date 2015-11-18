/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestInheritance', {
    statics: {
        testA: function (assert) {
            assert.expect(4);

            var a = new ClientTestLibrary.TestInheritance.A(10);

            assert.ok(a !== null, "Instance of A created");
            assert.equal(a.getX(), 10, "a.X = 10");
            assert.equal(a.handleNumber(100), 100, "a.HandleNumber(100) = 100");
            assert.equal(a.handleString("Hundred"), "Hundred", "a.HandleString('Hundred') = 'Hundred'");
        },
        testB: function (assert) {
            assert.expect(5);

            var b = new ClientTestLibrary.TestInheritance.B(10, 20);

            assert.ok(b !== null, "Instance of B created");
            assert.equal(b.getX(), 10, "b.X = 10");
            assert.equal(b.getY(), 20, "b.Y = 20");
            assert.equal(b.handleNumber$1(1), 100, "b.HandleNumber(1) = 100");
            assert.equal(b.handleString("Hundred"), "Hundred", "b.HandleString('Hundred') = 'Hundred'");
        },
        testAB: function (assert) {
            assert.expect(4);

            var b = new ClientTestLibrary.TestInheritance.B(10, 20);

            assert.ok(b !== null, "Instance of B created as A type");
            assert.equal(b.getX(), 10, "b.X = 10");
            assert.equal(b.handleNumber(10), 10, "b.HandleNumber(10) = 10");
            assert.equal(b.handleString("Hundred"), "Hundred", "b.HandleString('Hundred') = 'Hundred'");
        }
    }
});

Bridge.define('ClientTestLibrary.TestInheritance.A', {
    config: {
        properties: {
            X: 0
        }
    },
    constructor: function (x) {
        this.setX(x);
    },
    handleNumber: function (i) {
        return i;
    },
    handleString: function (s) {
        return s;
    }
});

Bridge.define('ClientTestLibrary.TestInheritance.B', {
    inherits: [ClientTestLibrary.TestInheritance.A],
    config: {
        properties: {
            Y: 0
        }
    },
    constructor: function (x, y) {
        ClientTestLibrary.TestInheritance.A.prototype.$constructor.call(this, x);

        this.setY(y);
    },
    handleNumber$1: function (i) {
        return i * 100;
    }
});



Bridge.init();