/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestVirtualMethods', {
    statics: {
        testB: function (assert) {
            assert.expect(7);

            var a = new ClientTestLibrary.TestVirtualMethods.A();

            assert.ok(a !== null, "Instance of A created");
            assert.equal(a.test(), "A", "a.Test() = 'A'");

            var b = new ClientTestLibrary.TestVirtualMethods.B();

            assert.ok(b !== null, "Instance of B created");
            assert.equal(b.test(), "B", "b.Test() = 'B'");
            assert.equal(b.testA(), "A", "b.TestA() = 'A'");

            var c = new ClientTestLibrary.TestVirtualMethods.B();

            assert.ok(c !== null, "Instance of C created");
            assert.equal(c.test(), "B", "c.Test() = 'B'");
        }
    }
});

Bridge.define('ClientTestLibrary.TestVirtualMethods.A', {
    test: function () {
        return "A";
    }
});

Bridge.define('ClientTestLibrary.TestVirtualMethods.B', {
    inherits: [ClientTestLibrary.TestVirtualMethods.A],
    testA: function () {
        return ClientTestLibrary.TestVirtualMethods.A.prototype.test.call(this);
    },
    test: function () {
        return "B";
    }
});



Bridge.init();