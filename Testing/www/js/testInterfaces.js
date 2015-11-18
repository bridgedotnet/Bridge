/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestInterfaces', {
    statics: {
        testInterfaceMethodAndProperty: function (assert) {
            assert.expect(6);

            var a = new ClientTestLibrary.TestInterfaces.A();

            assert.ok(a !== null, "Instance of A created through ISimple interface");
            assert.equal(a.getString(), "A.ISimple", "a.GetString() = A.ISimple  through interface");
            assert.equal(a.getData(), 1, "a.Data = 1  through interface");

            var b = Bridge.as(a, ClientTestLibrary.TestInterfaces.A);
            assert.ok(b !== null, "Instance of ISimple as A");
            assert.equal(a.getString(), "A.ISimple", "a.GetString() = A.ISimple through instance");
            assert.equal(a.getData(), 1, "a.Data = 1 through instance");
        },
        testExplicitInterfaceMethodAndProperty: function (assert) {
            assert.expect(3);

            var b = new ClientTestLibrary.TestInterfaces.B();
            assert.ok(b !== null, "Instance of B created through ISimple interface explicitly");
            assert.equal(b.getString(), "explicit B.ISimple", "b.GetString() = explicit B.ISimple");
            assert.equal(b.getData(), 2, "a.Data = 2");
        },
        testTwoInterfaces: function (assert) {
            assert.expect(9);

            var c = new ClientTestLibrary.TestInterfaces.C();

            assert.ok(c !== null, "Instance of C created through ISimpleAsWell interface");
            assert.equal(c.getStringAsWell(), "C.ISimpleAsWell", "a.GetStringAsWell() = A.ISimple through instance");
            assert.equal(c.getDataAsWell(), 4, "c.DataAsWell = 4  through instance");

            var a = Bridge.as(c, ClientTestLibrary.TestInterfaces.ISimple);
            assert.ok(a !== null, "Instance of ISimple as C");
            assert.equal(a.getString(), "C.ISimple", "a.GetString() = C.ISimple  through interface");
            assert.equal(a.getData(), 3, "a.Data = 3 through interface");

            var b = Bridge.as(c, ClientTestLibrary.TestInterfaces.ISimpleAsWell);
            assert.ok(b !== null, "Instance of ISimpleAsWell as C");
            assert.equal(b.getStringAsWell(), "C.ISimpleAsWell", "b.GetStringAsWell() = C.ISimpleAsWell  through interface");
            assert.equal(b.getDataAsWell(), 4, "b.DataAsWell = 4 through interface");
        }
    }
});

Bridge.define('ClientTestLibrary.TestInterfaces.ISimple');

Bridge.define('ClientTestLibrary.TestInterfaces.B', {
    inherits: [ClientTestLibrary.TestInterfaces.ISimple],
    data: 0,
    constructor: function () {
        this.data = 2;
    },
    getData: function () {
        return this.data;
    },
    setData: function (value) {
        this.data = value;
    },
    getString: function () {
        return "explicit B.ISimple";
    }
});

Bridge.define('ClientTestLibrary.TestInterfaces.A', {
    inherits: [ClientTestLibrary.TestInterfaces.ISimple],
    config: {
        properties: {
            Data: 0
        }
    },
    constructor: function () {
        this.setData(1);
    },
    getString: function () {
        return "A.ISimple";
    }
});

Bridge.define('ClientTestLibrary.TestInterfaces.ISimpleAsWell');

Bridge.define('ClientTestLibrary.TestInterfaces.C', {
    inherits: [ClientTestLibrary.TestInterfaces.ISimple,ClientTestLibrary.TestInterfaces.ISimpleAsWell],
    data: 0,
    dataAsWell: 0,
    constructor: function () {
        this.data = 3;
        this.dataAsWell = 4;
    },
    getData: function () {
        return this.data;
    },
    setData: function (value) {
        this.data = value;
    },
    getDataAsWell: function () {
        return this.dataAsWell;
    },
    setDataAsWell: function (value) {
        this.dataAsWell = value;
    },
    getString: function () {
        return "C.ISimple";
    },
    getStringAsWell: function () {
        return "C.ISimpleAsWell";
    }
});



Bridge.init();