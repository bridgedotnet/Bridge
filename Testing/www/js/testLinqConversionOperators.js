/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Linq.TestLinqConversionOperators', {
    statics: {
        test: function (assert) {
            assert.expect(13);

            // TEST
            var doubles = [1.7, 2.3, 1.9, 4.1, 2.9];

            var sameDoubles = Bridge.Linq.Enumerable.from(doubles).select(function (d) {
                return d;
            });
            var doublesArray = sameDoubles.toArray();

            assert.ok(Bridge.String.contains(Bridge.getType(doublesArray).toString(),"function Array()"), "ToArray() conversion for doubles - check type name");
            assert.deepEqual(doublesArray, doubles, "ToArray() conversion for doubles - check content");

            // TEST
            var words = ["1.one", "2.two", "3.three"];

            var wordList1 = Bridge.Linq.Enumerable.from((Bridge.Linq.Enumerable.from(words).orderByDescending(function (w) {
                return w;
            }))).toList(String);
            var wordListExpected1 = new Bridge.List$1(String)(["3.three", "2.two", "1.one"]);

            assert.deepEqual(ClientTestLibrary.Utilities.TypeHelper.getTypeName(wordList1), "Bridge.List$1$String", "ToList() conversion with explicit String type for string - check type name");
            assert.deepEqual(wordList1, wordListExpected1, "ToList() conversion for strings with explicit String type - check content");

            // TEST
            var wordList2 = (Bridge.Linq.Enumerable.from(words).orderByDescending(function (w) {
                return w;
            })).toList(String);
            var wordListExpected2 = new Bridge.List$1(String)(["3.three", "2.two", "1.one"]);

            assert.deepEqual(ClientTestLibrary.Utilities.TypeHelper.getTypeName(wordList2), "Bridge.List$1$String", "ToList() conversion for string - check type name");
            assert.deepEqual(wordList2, wordListExpected2, "ToList() conversion for strings - check content");

            // TEST
            var groups = ClientTestLibrary.Utilities.Group.getGroups();
            var groupDictionary1 = (Bridge.Linq.Enumerable.from(groups).select(function (g) {
                return g;
            })).toDictionary(function (g) {
                return g.getName();
            }, function (g) {
                return g;
            }, String, ClientTestLibrary.Utilities.Group);
            var expectedGroupDictionary1 = new Bridge.Dictionary$2(String,ClientTestLibrary.Utilities.Group)();

            expectedGroupDictionary1.add("A", Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "A",
                setLimit: 1000
            } ));
            expectedGroupDictionary1.add("B", Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "B",
                setLimit: 400
            } ));
            expectedGroupDictionary1.add("C", Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "C",
                setLimit: 800
            } ));
            expectedGroupDictionary1.add("D", Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "D",
                setLimit: 200
            } ));
            assert.deepEqual(ClientTestLibrary.Utilities.TypeHelper.getTypeName(groupDictionary1), "Bridge.Dictionary$2$String$ClientTestLibrary.Utilities.Group", "ToDictionary(keySelector, elementSelector) conversion for <string, Group> - check type name");
            assert.deepEqual(groupDictionary1, expectedGroupDictionary1, "ToDictionary(keySelector, elementSelector) conversion for <string, Group> - check content");

            // TEST
            var comparer = new ClientTestLibrary.Linq.TestLinqConversionOperatorsIEqualityComparer();
            var expectedGroupDictionary2 = new Bridge.Dictionary$2(String, ClientTestLibrary.Utilities.Group)(null, comparer);

            expectedGroupDictionary2.add("A", Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "A",
                setLimit: 1000
            } ));
            expectedGroupDictionary2.add("B", Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "B",
                setLimit: 400
            } ));
            expectedGroupDictionary2.add("C", Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "C",
                setLimit: 800
            } ));
            expectedGroupDictionary2.add("D", Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "D",
                setLimit: 200
            } ));

            var groupDictionary2 = (Bridge.Linq.Enumerable.from(groups).select(function (g) {
                return g;
            })).toDictionary(function (g) {
                return g.getName();
            }, function (g) {
                return g;
            }, String, ClientTestLibrary.Utilities.Group, comparer);

            assert.deepEqual(ClientTestLibrary.Utilities.TypeHelper.getTypeName(groupDictionary2), "Bridge.Dictionary$2$String$ClientTestLibrary.Utilities.Group", "ToDictionary(keySelector, elementSelector, IEqualityComparer) conversion for <string, Group> - check type name");
            assert.deepEqual(groupDictionary2, expectedGroupDictionary2, "ToDictionary(keySelector, elementSelector, IEqualityComparer) conversion for <string, Group> - check content");

            // TEST
            var groupDictionary3 = (Bridge.Linq.Enumerable.from(groups).select(function (g) {
                return g;
            })).toDictionary(function (g) {
                return g.getName();
            }, null, String, ClientTestLibrary.Utilities.Group);

            assert.deepEqual(ClientTestLibrary.Utilities.TypeHelper.getTypeName(groupDictionary3), "Bridge.Dictionary$2$String$ClientTestLibrary.Utilities.Group", "ToDictionary(keySelector) conversion for <string, Group> - check type name");
            assert.deepEqual(groupDictionary3, expectedGroupDictionary1, "ToDictionary(keySelector) conversion for <string, Group> - check content");

            // TEST
            var numbers = [null, 1.0, "two", 3, "four", 5, "six", 7.0];

            var doubleNumbers = Bridge.Linq.Enumerable.from(numbers).ofType(Number).toArray();

            assert.deepEqual(doubleNumbers, [1.0, 3, 5, 7.0], "Issue #218. OfType<double> should get only double type items");
        }
    }
});

Bridge.define('ClientTestLibrary.Linq.TestLinqConversionOperatorsIEqualityComparer', {
    inherits: [Bridge.EqualityComparer$1(String)],
    equals: function (x, y) {
        return Bridge.String.equals(x, y);
    },
    getHashCode: function (obj) {
        if (obj === null) {
            return 0;
        }

        return Bridge.getHashCode(obj);
    }
});

