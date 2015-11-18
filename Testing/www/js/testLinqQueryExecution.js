/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Linq.TestLinqQueryExecution', {
    statics: {
        test: function (assert) {
            assert.expect(6);

            // TEST
            var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
            var i = 0;

            var aQuery = Bridge.Linq.Enumerable.from(numbers).select(function (n) {
                return ++i;
            });
            assert.equal(i, 0, "Query is not executed until you enumerate over them");

            // TEST
            aQuery.toList(Bridge.Int);
            assert.equal(i, 10, "Query is  executed after you enumerate over them");

            i = 0;

            // TEST
            var bQuery = (Bridge.Linq.Enumerable.from(numbers).select(function (n) {
                return ++i;
            })).max();
            assert.equal(i, 10, "Max() executes immediately");

            // TEST
            var smallNumbers = Bridge.Linq.Enumerable.from(numbers).where(function (n) {
                return n <= 3;
            });
            var smallerEvenNumbers = smallNumbers.where(function (n) {
                return n % 2 === 0;
            });
            assert.deepEqual(smallerEvenNumbers.toArray(), [2, 0], "Query in a query");

            // TEST
            Bridge.Linq.Enumerable.from(numbers).forEach(function (x, index) {
                return numbers[index] = -numbers[index];
            });
            assert.deepEqual(Bridge.Linq.Enumerable.from(numbers).toArray(), [-5, -4, -1, -3, -9, -8, -6, -7, -2, 0], "ForEach()");

            // TEST
            assert.deepEqual(smallerEvenNumbers.toArray(), [-4, -8, -6, -2, 0], "Second query run on a modified source");
        }
    }
});



Bridge.init();