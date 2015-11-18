/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Linq.TestLinqSetOperators', {
    statics: {
        test: function (assert) {
            // TEST
            var a = [1, 2];
            var b = [1, 2];

            var result = Bridge.Linq.Enumerable.from(a).intersect(b).toArray();

            assert.expect(8);

            // TEST
            var numbers = [1, 2, 3, 3, 1, 5, 4, 2, 3];

            var uniqueNumbers = Bridge.Linq.Enumerable.from(numbers).distinct().toArray();
            assert.deepEqual(uniqueNumbers, [1, 2, 3, 5, 4], "Distinct() to remove duplicate elements");

            // TEST
            var distinctPersonGroups = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).select(function (p) {
                return p.getGroup();
            })).distinct().toArray();
            assert.deepEqual(distinctPersonGroups, ["A", "C", "B", null], "Distinct() to remove duplicate Group elements");

            // TEST
            var numbersA = [0, 2, 4, 5, 6, 8, 9];
            var numbersB = [1, 3, 5, 7, 8];

            var uniqueNumbersAB = Bridge.Linq.Enumerable.from(numbersA).union(numbersB).toArray();
            assert.deepEqual(uniqueNumbersAB, [0, 2, 4, 5, 6, 8, 9, 1, 3, 7], "Union() to get unique number sequence");

            // TEST
            var nameChars = Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).select(function (p) {
                return p.getName().charCodeAt(0);
            });
            var cityChars = Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).select(function (p) {
                return p.getCity().charCodeAt(0);
            });
            var uniqueFirstChars = nameChars.union(cityChars).toArray();

            assert.deepEqual(uniqueFirstChars, [Bridge.cast(70, Bridge.Int), Bridge.cast(90, Bridge.Int), Bridge.cast(74, Bridge.Int), Bridge.cast(66, Bridge.Int), Bridge.cast(68, Bridge.Int), Bridge.cast(73, Bridge.Int), Bridge.cast(77, Bridge.Int), Bridge.cast(78, Bridge.Int), Bridge.cast(69, Bridge.Int), Bridge.cast(84, Bridge.Int), Bridge.cast(76, Bridge.Int), Bridge.cast(80, Bridge.Int), Bridge.cast(82, Bridge.Int), Bridge.cast(79, Bridge.Int)], "Union to get unique first letters of Name and City");

            // TEST
            var commonNumbersCD = Bridge.Linq.Enumerable.from(numbersA).intersect(numbersB).toArray();
            assert.deepEqual(commonNumbersCD, [5, 8], "Intersect() to get common number sequence");

            // TEST
            nameChars = Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).select(function (p) {
                return p.getName().charCodeAt(0);
            });
            cityChars = Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).select(function (p) {
                return p.getCity().charCodeAt(0);
            });

            var commonFirstChars = Bridge.Linq.Enumerable.from(nameChars).intersect(cityChars).toArray();
            assert.deepEqual(commonFirstChars, [Bridge.cast(66, Bridge.Int), Bridge.cast(68, Bridge.Int)], "Intersect() to get common first letters of Name and City");

            // TEST
            var exceptNumbersCD = Bridge.Linq.Enumerable.from(numbersA).except(numbersB).toArray();
            assert.deepEqual(exceptNumbersCD, [0, 2, 4, 6, 9], "Except() to get numbers from first sequence and does not contain the second sequence numbers");

            // TEST
            var exceptFirstChars = nameChars.except(cityChars).toArray();
            assert.deepEqual(exceptFirstChars, [Bridge.cast(70, Bridge.Int), Bridge.cast(90, Bridge.Int), Bridge.cast(74, Bridge.Int), Bridge.cast(73, Bridge.Int), Bridge.cast(77, Bridge.Int), Bridge.cast(78, Bridge.Int)], "Except() to get letters from Name sequence and does not contain City letters");
        }
    }
});



Bridge.init();