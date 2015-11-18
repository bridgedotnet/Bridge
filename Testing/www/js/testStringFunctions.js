/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestStringFunctions', {
    statics: {
        strings: function (assert) {
            var $t;
            // In PhantomJS some correct tests failed. We will skip them in this environment.
            var isPhantomJs = ClientTestLibrary.Utilities.BrowserHelper.isPhantomJs();

            var expectedCount = isPhantomJs ? 28 : 48;
            assert.expect(expectedCount);

            // TEST ToLower, ToLowerCase, ToLocaleLowerCase
            var s = ("HELLO").toLowerCase();
            assert.deepEqual(s, "hello", "'HELLO'.ToLower()");

            s = "HELLO".toLowerCase();
            assert.deepEqual(s, "hello", "'HELLO'.ToLowerCase()");

            s = "HELLO".toLocaleLowerCase();
            assert.deepEqual(s, "hello", "'HELLO'.ToLocaleLowerCase()");

            // TEST ToUpper, ToUpperCase, ToLocaleUpperCase
            s = ("hello").toUpperCase();
            assert.deepEqual(s, "HELLO", "'hello'.ToUpper()");

            s = "hello".toUpperCase();
            assert.deepEqual(s, "HELLO", "'hello'.ToUpperCase()");

            s = "HELLO".toLocaleUpperCase();
            assert.deepEqual(s, "HELLO", "'hello'.ToLocaleUpperCase()");

            s = "Hello Bridge.NET";
            // TEST String(string) constructor
            assert.deepEqual(String(s), s, "new String('" + s + "')");

            // TEST String(char, count) constructor
            assert.deepEqual(Bridge.String.fromCharCount(45, 4), "----", "new String('-',4)");

            // TEST IndexOfAny
            var anyOf = [120, 98, 105];
            var sAnyOf = "['x','b','i']";

            assert.deepEqual(Bridge.String.indexOfAny(s, anyOf), 8, "'" + s + "'.IndexOfAny(" + sAnyOf + ")");
            assert.throws(function () {
                return Bridge.String.indexOfAny(s, anyOf, 18, 8);
            }, "'" + s + "'.IndexOfAny(" + sAnyOf + ")");
            assert.throws(function () {
                return Bridge.String.indexOfAny(s, null);
            }, "'" + s + "'.IndexOfAny(null)");

            s = "";
            assert.deepEqual(Bridge.String.indexOfAny(s, anyOf), -1, "String.Empty.IndexOfAny(" + sAnyOf + ")");

            s = null;
            assert.deepEqual(Bridge.String.indexOfAny(s, anyOf), -1, "null.IndexOfAny(" + sAnyOf + ")");

            // TEST IndexOf
            s = "Hello Bridge.NET";

            assert.deepEqual(Bridge.String.indexOf(s, String.fromCharCode(101)), 1, "'" + s + "'.IndexOf('e')");
            assert.deepEqual(Bridge.String.indexOf(s, "e."), 11, "'" + s + "'.IndexOf('e.')");
            assert.deepEqual(Bridge.String.indexOf(s, String.fromCharCode(101), 6, 8), 11, "'" + s + "'.IndexOf('e', 6, 8)");
            assert.throws(function () {
                return Bridge.String.indexOf(s, null);
            }, "'" + s + "'.IndexOf(null)");

            if (!isPhantomJs) {
                assert.deepEqual(Bridge.String.indexOf(s, "E", 6, 8, 1), 11, "'" + s + "'.IndexOf('E', 6, 8, StringComparison.CurrentCultureIgnoreCase)");
            }

            s = "";
            assert.deepEqual(Bridge.String.indexOf(s, String.fromCharCode(101)), -1, "String.Empty.IndexOf('e')");

            s = null;
            assert.deepEqual(Bridge.String.indexOf(s, String.fromCharCode(101)), -1, "null.IndexOf('e')");

            // TEST Compare
            var s1 = "Animal";
            var s2 = "animal";

            assert.deepEqual(Bridge.String.compare(s1, s2, true), 0, "String.Compare('" + s1 + "', '" + s2 + "', true)");

            if (!isPhantomJs) {
                assert.deepEqual(Bridge.String.compare(s1, s2, false), 1, "String.Compare('" + s1 + "', '" + s2 + "', false)");
            }

            if (!isPhantomJs) {
                var threeIs = Bridge.Array.init(3, null);
                threeIs[0] = "i";
                threeIs[1] = "ı";
                threeIs[2] = "I";

                var scValues = [0, 1, 2, 3, 4, 5];

                var expected = [-1, -1, 1, -1, 0, 1, -1, -1, 1, -1, 0, 1, -1, 1, 1, 0, 0, 0];
                var expectedIndex = 0;

                $t = Bridge.getEnumerator(scValues);
                while ($t.moveNext()) {
                    var sc = $t.getCurrent();
                    ClientTestLibrary.TestStringFunctions.test(0, 1, sc, threeIs, expected, expectedIndex++, assert);
                    ClientTestLibrary.TestStringFunctions.test(0, 2, sc, threeIs, expected, expectedIndex++, assert);
                    ClientTestLibrary.TestStringFunctions.test(1, 2, sc, threeIs, expected, expectedIndex++, assert);
                }
            }

            // TEST Contains
            s = "Hello Bridge.NET";

            assert.deepEqual(Bridge.String.contains(s,"Bridge"), true, "'" + s + "'.Contains('Bridge')");
            assert.deepEqual(Bridge.String.contains(s,""), true, "'" + s + "'.Contains(String.Empty)");
            assert.deepEqual(Bridge.String.contains("","Bridge"), false, "String.Empty.Contains('Bridge')");
            assert.throws(function () {
                return Bridge.String.contains(s,null);
            }, "null.Contains('Bridge')");

            // TEST Concat
            s = [s, "2", "3", "4"].join('');
            assert.deepEqual(s, "Hello Bridge.NET234", "string.Concat()");

            s = [null, true, 3, false].join('');
            assert.deepEqual(s, "true3false", "string.Concat()");

            s = ["1", "2", "3", "4", "5"].toString().split(',').join('');
            assert.deepEqual(s, "12345", "string.Concat()");

            s = [1, null, 2, null, 3].toString().split(',').join('');
            assert.deepEqual(s, "123", "string.Concat()");
        }        ,
        test: function (x, y, comparison, testI, expected, expectedIndex, assert) {
            var cmpValue = 0;
            cmpValue = Bridge.String.compare(testI[x], testI[y], comparison);
            assert.deepEqual(cmpValue, expected[expectedIndex], "String.Compare('" + testI[x] + "', '" + testI[y] + "'," + comparison + ")");
        },
        enumerable: function (assert) {
            var $t;
            assert.expect(5);

            var a;
            var i = 0;
            var result = Bridge.Array.init(5, function (){
                return new Bridge.Int();
            });
            $t = Bridge.getEnumerator("danny");
            while ($t.moveNext()) {
                var c = $t.getCurrent();
                a = c;
                result[i] = a;

                i++;
            }

            assert.equal(result[0], 100);
            assert.equal(result[1], 97);
            assert.equal(result[2], 110);
            assert.equal(result[3], 110);
            assert.equal(result[4], 121);
        }        ,
        issueBridge393: function (assert) {
            assert.expect(2);

            var a = "testa";
            var b = "testa";

            var result = Bridge.String.equals(a, b, 3);

            assert.ok(result, "testa testa StringComparison.InvariantCultureIgnoreCase");

            var a1 = "testa";
            var b1 = "testb";

            var result1 = Bridge.String.equals(a1, b1, 3);

            assert.notOk(result1, "testa testb StringComparison.InvariantCultureIgnoreCase");
        }
    }
});



Bridge.init();