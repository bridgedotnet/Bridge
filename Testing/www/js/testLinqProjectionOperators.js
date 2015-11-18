/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Linq.TestLinqProjectionOperators', {
    statics: {
        test: function (assert) {
            assert.expect(8);

            // TEST
            var numbers = [1, 3, 5, 7];
            var numberPlusOne = (Bridge.Linq.Enumerable.from(numbers).select(function (n) {
                return n + 1;
            })).toArray();
            assert.deepEqual(numberPlusOne, [2, 4, 6, 8], "A sequence of ints one higher than the numbers[]");

            // TEST
            var persons = ClientTestLibrary.Utilities.Person.getPersons();
            var names = (Bridge.Linq.Enumerable.from(persons).select(function (p) {
                return p.getName();
            })).toArray();
            assert.deepEqual(names, ["Frank", "Zeppa", "John", "Billy", "Dora", "Ian", "Mary", "Nemo"], "Selects names as instance field");

            // TEST
            var strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

            var textNumbers = (Bridge.Linq.Enumerable.from(numbers).select(function (n) {
                return strings[n];
            })).toArray();
            assert.deepEqual(textNumbers, ["one", "three", "five", "seven"], "Selects names as items of another array");

            // TEST
            var anonimNames = (Bridge.Linq.Enumerable.from(persons).select(function (p) {
                return { name: p.getName() };
            })).toArray();

            var anonimNamesToCompare = [{ name: "Frank" }, { name: "Zeppa" }, { name: "John" }, { name: "Billy" }, { name: "Dora" }, { name: "Ian" }, { name: "Mary" }, { name: "Nemo" }];

            assert.deepEqual(anonimNames, anonimNamesToCompare, "Selects names as an anonymous type");

            // TEST
            numbers = [0, 1, 3, 3];

            var numberssInPlace = Bridge.Linq.Enumerable.from(numbers).select(function (n, index) {
                return { number: n, isIndex: n === index };
            }).toArray();

            var anonimNumbersToCompare = [{ number: 0, isIndex: true }, { number: 1, isIndex: true }, { number: 3, isIndex: false }, { number: 3, isIndex: true }];

            assert.deepEqual(numberssInPlace, anonimNumbersToCompare, "Selects numbers as an anonymous type");

            // TEST
            var numbersA = [1, 5, 2];
            var numbersB = [3, 4, 2];
            var simplePairs = (Bridge.Linq.Enumerable.from(numbersA).selectMany(function (a) {
                return numbersB;
            }, function (a, b) {
                return { a: a, b: b };
            }).where(function (x0) {
                return x0.a < x0.b;
            }).select(function (x1) {
                return { a: x1.a, b: x1.b };
            })).toArray();

            var expectedSimplePairs = [{ a: 1, b: 3 }, { a: 1, b: 4 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 2, b: 4 }];

            assert.deepEqual(simplePairs, expectedSimplePairs, "Join two numeric arrays with one where clause");

            // TEST
            numbersA = [1, 5, 2, 4, 3];
            numbersB = [3, 4, 2, 5, 1];

            var pairs = (Bridge.Linq.Enumerable.from(numbersA).where(function (a) {
                return a > 1;
            }).selectMany(function (a) {
                return numbersB;
            }, function (a, b) {
                return { a: a, b: b };
            }).where(function (x2) {
                return x2.b < 4 && x2.a > x2.b;
            }).select(function (x3) {
                return { sum: x3.a + x3.b };
            })).toArray();

            var expectedPairs = [{ sum: 8 }, { sum: 7 }, { sum: 6 }, { sum: 3 }, { sum: 7 }, { sum: 6 }, { sum: 5 }, { sum: 5 }, { sum: 4 }];

            assert.deepEqual(pairs, expectedPairs, "Join two numeric arrays with two where clauses");

            // TEST
            numbersA = [1, 5, 2, 4, 3];
            numbersB = [3, 4, 2, 5, 1];

            var manyNumbers = Bridge.Linq.Enumerable.from(numbersA).selectMany(function (a, aIndex) {
                return Bridge.Linq.Enumerable.from(numbersB).where(function (b) {
                    return a === b && b > aIndex;
                }).select(function (b) {
                    return { a: a, b: b, i: aIndex };
                });
            }).toArray();

            var expectedManyNumbers = [{ a: 1, b: 1, i: 0 }, { a: 5, b: 5, i: 1 }, { a: 4, b: 4, i: 3 }];

            assert.deepEqual(manyNumbers, expectedManyNumbers, "SelectMany() two number arrays");
        }
    }
});



Bridge.init();