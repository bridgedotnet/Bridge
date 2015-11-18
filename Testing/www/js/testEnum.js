/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestEnum', {
    statics: {
        testParse: function (assert) {
            assert.expect(6);

            assert.equal(Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "Zero"), ClientTestLibrary.TestEnum.Digits.zero, "Parse Digits.Zero");
            assert.equal(Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "One"), ClientTestLibrary.TestEnum.Digits.one, "Parse Digits.One");
            assert.equal(Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "Two"), ClientTestLibrary.TestEnum.Digits.two, "Parse Digits.Two");
            assert.equal(Bridge.Enum.parse(ClientTestLibrary.TestEnum.Pets, "Dog, Cat"), 3, "Parse Dog, Cat");
            assert.equal(Bridge.Enum.parse(ClientTestLibrary.TestEnum.Pets, "Bird, Cat, Rabbit"), 14, "Parse Bird, Cat, Rabbit");

            assert.throws(function () {
                var d = Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "ONE");
            }, "Parse ONE");
        },
        testParseIgnoreCase: function (assert) {
            assert.expect(4);

            assert.equal(Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "zero", true), ClientTestLibrary.TestEnum.Digits.zero, "Parse Digits.Zero");
            assert.equal(Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "oNe", true), ClientTestLibrary.TestEnum.Digits.one, "Parse Digits.One");
            assert.equal(Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "TWO", true), ClientTestLibrary.TestEnum.Digits.two, "Parse Digits.Two");

            assert.throws(function () {
                var d = Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "ONN", true);
            }, "Parse ONN");
        },
        testToString: function (assert) {
            assert.expect(4);

            assert.equal(Bridge.Enum.toString(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.zero), "Zero", "ToString Digits.Zero");
            assert.equal(Bridge.Enum.toString(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.one), "One", "ToString Digits.One");
            assert.equal(Bridge.Enum.toString(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.two), "Two", "ToString Digits.Two");
            assert.equal(Bridge.Enum.toString(ClientTestLibrary.TestEnum.Digits, 150), "150", "ToString (Digits)150");
        },
        testGetValues: function (assert) {
            assert.expect(2);

            assert.deepEqual(Bridge.Enum.getValues(ClientTestLibrary.TestEnum.Abc), [ClientTestLibrary.TestEnum.Abc.a, ClientTestLibrary.TestEnum.Abc.b, ClientTestLibrary.TestEnum.Abc.c], "Abc values");

            assert.deepEqual(Bridge.Enum.getValues(ClientTestLibrary.TestEnum.Digits), [ClientTestLibrary.TestEnum.Digits.zero, ClientTestLibrary.TestEnum.Digits.one, ClientTestLibrary.TestEnum.Digits.two], "Digits values");
        },
        testCompareTo: function (assert) {
            assert.expect(3);

            assert.equal(Bridge.compare(ClientTestLibrary.TestEnum.Digits.two, ClientTestLibrary.TestEnum.Digits.two), 0, "CompareTo Digits.Two with Digits.Two");
            assert.equal(Bridge.compare(ClientTestLibrary.TestEnum.Digits.one, ClientTestLibrary.TestEnum.Digits.two), -1, "CompareTo Digits.One with Digits.Two");
            assert.equal(Bridge.compare(ClientTestLibrary.TestEnum.Digits.two, ClientTestLibrary.TestEnum.Digits.zero), 1, "CompareTo Digits.Two with Digits.Zero");
        },
        testFormat: function (assert) {
            assert.expect(22);

            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.two, "G"), "Two", "Format Digits.Two G");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.two, "g"), "Two", "Format Digits.Two g");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, 150, "G"), "150", "Format (Digits)150 G");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, 150, "g"), "150", "Format (Digits)150 g");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Pets, 3, "G"), "Dog, Cat", "Format Pets.Dog | Pets.Cat G");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Pets, 28, "g"), "Bird, Rabbit, Other", "Format Pets.Bird | Pets.Rabbit | Pets.Other g");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Pets1, 3, "G"), "3", "Format Pets1.Cat | Pets1.Dog G");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Pets1, 3, "g"), "3", "Format Pets1.Cat | Pets1.Dog g");

            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.two, "X"), "2", "Format Digits.Two X");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.one, "x"), "1", "Format Digits.One x");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, 255, "X"), "ff", "Format (Digits)255 X");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, 255, "x"), "ff", "Format (Digits)255 x");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Pets, 24, "X"), "18", "Format Pets.Rabbit | Pets.Other X");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Pets, ClientTestLibrary.TestEnum.Pets.other, "x"), "10", "Format Pets.Other x");

            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.two, "D"), "2", "Format Digits.Two D");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.one, "d"), "1", "Format Digits.One d");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, 255, "D"), "255", "Format (Digits)255 D");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Digits, 255, "d"), "255", "Format (Digits)255 d");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Pets, 24, "D"), "24", "Format Pets.Rabbit | Pets.Other D");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Pets, ClientTestLibrary.TestEnum.Pets.other, "d"), "16", "Format Pets.Other d");


            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Pets1, 3, "F"), "Dog, Cat", "Format Pets1.Cat | Pets1.Dog F");
            assert.equal(Bridge.Enum.format(ClientTestLibrary.TestEnum.Pets1, 3, "f"), "Dog, Cat", "Format Pets1.Cat | Pets1.Dog f");
        },
        testGetName: function (assert) {
            assert.expect(3);

            assert.equal(Bridge.Enum.getName(ClientTestLibrary.TestEnum.Digits, 2), "Two", "GetName 2");
            assert.equal(Bridge.Enum.getName(ClientTestLibrary.TestEnum.Digits, 1), "One", "GetName 1");
            assert.equal(Bridge.Enum.getName(ClientTestLibrary.TestEnum.Digits, 100), null, "GetName 100");
        },
        testGetNames: function (assert) {
            assert.expect(2);

            assert.deepEqual(Bridge.Enum.getNames(ClientTestLibrary.TestEnum.Abc), ["A", "B", "C"], "Abc names");

            assert.deepEqual(Bridge.Enum.getNames(ClientTestLibrary.TestEnum.Digits), ["Zero", "One", "Two"], "Digits names");
        },
        testHasFlag: function (assert) {
            assert.expect(5);

            assert.equal(Bridge.Enum.hasFlag(((3)), ClientTestLibrary.TestEnum.Pets.cat), true, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Cat)");
            assert.equal(Bridge.Enum.hasFlag(((3)), ClientTestLibrary.TestEnum.Pets.dog), true, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Dog)");
            assert.equal(Bridge.Enum.hasFlag(((3)), ClientTestLibrary.TestEnum.Pets.bird), false, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Bird)");
            assert.equal(Bridge.Enum.hasFlag(ClientTestLibrary.TestEnum.Pets.dog, ClientTestLibrary.TestEnum.Pets.dog), true, "Pets.Dog.HasFlag(Pets.Dog)");
            assert.equal(Bridge.Enum.hasFlag(ClientTestLibrary.TestEnum.Pets.dog, ClientTestLibrary.TestEnum.Pets.cat), false, "Pets.Dog.HasFlag(Pets.Cat)");
        },
        testIsDefined: function (assert) {
            assert.expect(6);

            assert.equal(Bridge.Enum.isDefined(ClientTestLibrary.TestEnum.Pets, 1), true, "Enum.IsDefined(typeof(Pets), 1)");
            assert.equal(Bridge.Enum.isDefined(ClientTestLibrary.TestEnum.Pets, 17), false, "Enum.IsDefined(typeof(Pets), 17)");
            assert.equal(Bridge.Enum.isDefined(ClientTestLibrary.TestEnum.Pets, "Rabbit"), true, "Enum.IsDefined(typeof(Pets), \"Rabbit\")");
            assert.equal(Bridge.Enum.isDefined(ClientTestLibrary.TestEnum.Pets, "Parrot"), false, "Enum.IsDefined(typeof(Pets), \"Parrot\")");
            assert.equal(Bridge.Enum.isDefined(ClientTestLibrary.TestEnum.Pets, "RABBIT"), false, "Enum.IsDefined(typeof(Pets), \"RABBIT\")");
            assert.equal(Bridge.Enum.isDefined(ClientTestLibrary.TestEnum.Pets, 3), false, "Enum.IsDefined(typeof(Pets), Pets.Dog | Pets.Cat)");
        },
        testTryParse: function (assert) {
            assert.expect(11);

            var outVar = { v : new ClientTestLibrary.TestEnum.Digits() };
            var outPets = { v : new ClientTestLibrary.TestEnum.Pets() };
            assert.equal(Bridge.Enum.tryParse(ClientTestLibrary.TestEnum.Digits, "Zero", outVar), true, "TryParse Digits.Zero");
            assert.equal(outVar.v, ClientTestLibrary.TestEnum.Digits.zero);
            assert.equal(Bridge.Enum.tryParse(ClientTestLibrary.TestEnum.Digits, "One", outVar), true, "TryParse Digits.One");
            assert.equal(outVar.v, ClientTestLibrary.TestEnum.Digits.one);
            assert.equal(Bridge.Enum.tryParse(ClientTestLibrary.TestEnum.Digits, "Two", outVar), true, "TryParse Digits.Two");
            assert.equal(outVar.v, ClientTestLibrary.TestEnum.Digits.two);
            assert.equal(Bridge.Enum.tryParse(ClientTestLibrary.TestEnum.Pets, "Dog, Cat", outPets), true, "TryParse Dog, Cat");
            assert.equal(outPets.v, 3);
            assert.equal(Bridge.Enum.tryParse(ClientTestLibrary.TestEnum.Pets, "Bird, Cat, Rabbit", outPets), true, "TryParse Bird, Cat, Rabbit");
            assert.equal(outPets.v, 14);
            assert.equal(Bridge.Enum.tryParse(ClientTestLibrary.TestEnum.Digits, "ONE", outVar), false, "TryParse ONE");
        }
    }
});

Bridge.define('ClientTestLibrary.TestEnum.Digits', {
    statics: {
        zero: 0,
        one: 1,
        two: 2
    },
    enum: true
});

Bridge.define('ClientTestLibrary.TestEnum.Pets', {
    statics: {
        none: 0,
        dog: 1,
        cat: 2,
        bird: 4,
        rabbit: 8,
        other: 16
    },
    enum: true,
    flags: true
});

Bridge.define('ClientTestLibrary.TestEnum.Abc', {
    statics: {
        a: -1,
        b: 0,
        c: 1
    },
    enum: true
});

Bridge.define('ClientTestLibrary.TestEnum.Pets1', {
    statics: {
        none: 0,
        dog: 1,
        cat: 2,
        bird: 4,
        rabbit: 8,
        other: 16
    },
    enum: true
});



Bridge.init();