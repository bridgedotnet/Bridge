/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestAbstractClass', {
    statics: {
        testB: function (assert) {
            assert.expect(3);

            var b = new ClientTestLibrary.TestAbstractClass.B();

            assert.ok(b !== null, "Instance of B created");
            assert.equal(b.getString(), "B", "b.GetString() = 'B'");
            assert.equal(b.getData(), 1, "b.Data = 1");
        },
        testC: function (assert) {
            assert.expect(3);

            var c = new ClientTestLibrary.TestAbstractClass.C();

            assert.ok(c !== null, "Instance of C created");
            assert.equal(c.getString(), "C", "c.GetString() = 'C'");
            assert.equal(c.getData(), -1, "c.Data = -1");
        },
        testBC: function (assert) {
            assert.expect(6);

            var b = new ClientTestLibrary.TestAbstractClass.B();

            assert.ok(b !== null, "Instance of B created as instance of A");
            assert.equal(b.getString(), "B", "b.GetString() = 'B'");
            assert.equal(b.getData(), 1, "b.Data = 1");

            var c = new ClientTestLibrary.TestAbstractClass.C();
            assert.ok(c !== null, "Instance of C created as instance of A");
            assert.equal(c.getString(), "C", "c.GetString() = 'C'");
            assert.equal(c.getData(), -1, "c.Data = -1");
        }
    }
});

Bridge.define('ClientTestLibrary.TestAbstractClass.A', {
    config: {
        properties: {
            Data: 0
        }
    }
});

Bridge.define('ClientTestLibrary.TestAbstractClass.B', {
    inherits: [ClientTestLibrary.TestAbstractClass.A],
    getString: function () {
        this.setData(this.getData()+1);
        return "B";
    }
});

Bridge.define('ClientTestLibrary.TestAbstractClass.C', {
    inherits: [ClientTestLibrary.TestAbstractClass.B],
    getString: function () {
        this.setData(this.getData()-1);
        return "C";
    }
});



Bridge.init();