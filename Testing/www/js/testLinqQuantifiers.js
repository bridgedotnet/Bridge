/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Linq.TestLinqQuantifiers', {
    statics: {
        test: function (assert) {
            assert.expect(4);

            // TEST
            var words = ["count", "tree", "mount", "five", "doubt"];
            var anyOu = Bridge.Linq.Enumerable.from(words).any(function (w) {
                return Bridge.String.contains(w,"ou");
            });
            assert.ok(anyOu, "Any() to return words containing 'ou'");

            // TEST
            var oddNumbers = [3, 7, 9, 5, 247, 1000001];
            var onlyOdd = Bridge.Linq.Enumerable.from(oddNumbers).all(function (n) {
                return n % 2 === 1;
            });
            assert.ok(onlyOdd, "All() is odd");

            // TEST
            var someNumbers = [2, 3, 7, 9, 5, 247, 1000001];
            var notOnlyOdd = !Bridge.Linq.Enumerable.from(someNumbers).all(function (n) {
                return n % 2 === 1;
            });
            assert.ok(notOnlyOdd, "All() is not only odd");

            // TEST
            var productGroups = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).where(function (pGroup) {
                return pGroup.any(function (p) {
                    return p.getCount() >= 500;
                });
            }).select(function (pGroup) {
                return { group: pGroup.key(), names: pGroup.select(function (x) {
                    return x.getName();
                }).toArray() };
            })).toArray();

            var productGroupsExpected = [{ group: "C", names: ["Zeppa", "Billy"] }, { group: "B", names: ["John", "Dora", "Ian", "Mary"] }, { group: Bridge.cast(null, String), names: ["Nemo"] }];

            assert.deepEqual(productGroups, productGroupsExpected, "Any() to return a grouped array of names only for groups having any item with Count > 500");
        }
    }
});



Bridge.init();