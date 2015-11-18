/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Linq.TestLinqPartitioningOperators', {
    statics: {
        test: function (assert) {
            assert.expect(8);

            // TEST
            var numbers = [1, 3, 5, 7, 9];
            var firstTwo = Bridge.Linq.Enumerable.from(numbers).take(2).toArray();
            assert.deepEqual(firstTwo, [1, 3], "Take() the first two array elements");

            // TEST
            var lastThree = Bridge.Linq.Enumerable.from(numbers).takeFromLast(3).toArray();
            assert.deepEqual(lastThree, [5, 7, 9], "TakeFromLast() the last three array elements");

            // TEST
            var exceptTwoLast = Bridge.Linq.Enumerable.from(numbers).takeExceptLast(2).toArray();
            assert.deepEqual(exceptTwoLast, [1, 3, 5], "TakeExceptLast() the first array elements except the last two");

            // TEST
            var takeWhileLessTwo = Bridge.Linq.Enumerable.from(numbers).takeWhile(function (number) {
                return number < 2;
            }).toArray();
            assert.deepEqual(takeWhileLessTwo, [1], "TakeWhile() less two");

            // TEST
            var takeWhileSome = Bridge.Linq.Enumerable.from(numbers).takeWhile(function (number, index) {
                return number - index <= 4;
            }).toArray();
            assert.deepEqual(takeWhileSome, [1, 3, 5, 7], "TakeWhile() by value and index");

            // TEST
            var skipThree = Bridge.Linq.Enumerable.from(numbers).skip(3).toArray();
            assert.deepEqual(skipThree, [7, 9], "Skip() the first three");

            // TEST
            var skipWhileLessNine = Bridge.Linq.Enumerable.from(numbers).skipWhile(function (number) {
                return number < 9;
            }).toArray();
            assert.deepEqual(skipWhileLessNine, [9], "SkipWhile() less then 9");

            // TEST
            var skipWhileSome = Bridge.Linq.Enumerable.from(numbers).skipWhile(function (number, index) {
                return number <= 3 && index < 2;
            }).toArray();
            assert.deepEqual(skipWhileSome, [5, 7, 9], "SkipWhile() by value and index");
        }
    }
});



Bridge.init();