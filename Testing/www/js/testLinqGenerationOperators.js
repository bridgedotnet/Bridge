/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Linq.TestLinqGenerationOperators', {
    statics: {
        test: function (assert) {
            assert.expect(2);

            // TEST
            var numbers = (Bridge.Linq.Enumerable.range(0, 6).select(function (n) {
                return { number: n, isOdd: n % 2 === 1 };
            })).toArray();
            var numbersExpected = [{ number: 0, isOdd: false }, { number: 1, isOdd: true }, { number: 2, isOdd: false }, { number: 3, isOdd: true }, { number: 4, isOdd: false }, { number: 5, isOdd: true }];

            assert.deepEqual(numbers, numbersExpected, "Range() 6 items from 0");

            // TEST
            var repeatNumbers = Bridge.Linq.Enumerable.repeat(-3, 4).toArray();
            var repeatNumbersExpected = [-3, -3, -3, -3];

            assert.deepEqual(repeatNumbers, repeatNumbersExpected, "Repeat() -3 four times");
        }
    }
});



Bridge.init();