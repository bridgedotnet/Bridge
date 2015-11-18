/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Linq.TestLinqOrderingOperators', {
    statics: {
        test: function (assert) {
            assert.expect(8);

            // TEST
            var words = ["ab2", "ac", "a", "ab12", "", "ab", "bac", "z"];
            var sortedWords = (Bridge.Linq.Enumerable.from(words).orderBy(function (word) {
                return word;
            })).toArray();
            assert.deepEqual(sortedWords, ["", "a", "ab", "ab12", "ab2", "ac", "bac", "z"], "Order by words");

            // TEST
            var sortedWordsByLength = (Bridge.Linq.Enumerable.from(words).orderBy(function (word) {
                return word.length;
            })).toArray();
            assert.deepEqual(sortedWordsByLength, ["", "a", "z", "ac", "ab", "ab2", "bac", "ab12"], "Order by word length");

            // TEST
            var sortedPersonsByName = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).orderBy(function (p) {
                return p.getName();
            }).select(function (p) {
                return p.getName();
            })).toArray();
            assert.deepEqual(sortedPersonsByName, ["Billy", "Dora", "Frank", "Ian", "John", "Mary", "Nemo", "Zeppa"], "Order by person names");

            // TODO test with System.StringComparison

            // TEST
            var doubles = [1.0, -0.7, 2.1, 0.9, 1.4, 2.9];
            var sortedDoubles = (Bridge.Linq.Enumerable.from(doubles).orderByDescending(function (d) {
                return d;
            })).toArray();
            assert.deepEqual(sortedDoubles, [2.9, 2.1, 1.4, 1.0, 0.9, -0.7], "Order by descending double");

            // TEST
            var sortedPersonsByCountDesc = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).orderByDescending(function (p) {
                return p.getCount();
            }).select(function (p) {
                return p.getCount();
            })).toArray();
            assert.deepEqual(sortedPersonsByCountDesc, [3000, 700, 700, 550, 500, 300, 100, 50], "Order by person count descending");

            // TEST
            var sortedWordsByLengthAndLetters = (Bridge.Linq.Enumerable.from(words).orderBy(function (word) {
                return word.length;
            }).thenBy(function (word) {
                return word;
            })).toArray();
            assert.deepEqual(sortedWordsByLengthAndLetters, ["", "a", "z", "ab", "ac", "ab2", "bac", "ab12"], "Order by word length then by letters");

            // TEST
            var sortedWordsByLengthAndLettersLambda = Bridge.Linq.Enumerable.from(words).orderBy(function (x) {
                return x.length;
            }).thenByDescending(function (x) {
                return x;
            }).toArray();
            assert.deepEqual(sortedWordsByLengthAndLettersLambda, ["", "z", "a", "ac", "ab", "bac", "ab2", "ab12"], "Order by word length then by letters as lambda");

            // TEST
            // var numbers = new[] { 2, 4, 6, 1, 5, 7, 9, 0, 8, 3};
            var numbers = [2, 4, 6, 1, 5];
            var numbersReversed = Bridge.Linq.Enumerable.from(numbers).reverse().toArray();
            assert.deepEqual(numbersReversed, [5, 1, 6, 4, 2], "Reverse() numbers");
        }
    }
});



Bridge.init();