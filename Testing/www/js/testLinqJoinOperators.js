/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Linq.TestLinqJoinOperators', {
    statics: {
        test: function (assert) {
            assert.expect(5);

            // TEST
            var persons = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).join(ClientTestLibrary.Utilities.Group.getGroups(), function (p) {
                return p.getGroup();
            }, function (g) {
                return g.getName();
            }, function (p, g) {
                return { name: p.getName(), limit: g.getLimit() };
            })).toArray();

            var personsExpected = [{ name: "Frank", limit: 1000 }, { name: "Zeppa", limit: 800 }, { name: "John", limit: 400 }, { name: "Billy", limit: 800 }, { name: "Dora", limit: 400 }, { name: "Ian", limit: 400 }, { name: "Mary", limit: 400 }];

            assert.deepEqual(persons, personsExpected, "Join Persons and Groups");

            // TEST
            var personsByLambda = Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).join(ClientTestLibrary.Utilities.Group.getGroups(), function (p) {
                return p.getGroup();
            }, function (g) {
                return g.getName();
            }, function (p, g) {
                return { name: p.getName(), limit: g.getLimit() };
            }).toArray();

            var personsByLambdaExpected = [{ name: "Frank", limit: 1000 }, { name: "Zeppa", limit: 800 }, { name: "John", limit: 400 }, { name: "Billy", limit: 800 }, { name: "Dora", limit: 400 }, { name: "Ian", limit: 400 }, { name: "Mary", limit: 400 }];

            assert.deepEqual(personsByLambda, personsByLambdaExpected, "Join Persons and Groups by lambda");

            // TEST
            var groupJoin = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Group.getGroups()).groupJoin(ClientTestLibrary.Utilities.Person.getPersons(), function (g) {
                return g.getName();
            }, function (p) {
                return p.getGroup();
            }, function (g, pg) {
                return { group: g.getName(), persons: Bridge.Linq.Enumerable.from(pg).select(function (x) {
                    return x.getName();
                }).toArray() };
            })).toArray();

            var groupJoinExpected = [{ group: "A", persons: ["Frank"] }, { group: "B", persons: ["John", "Dora", "Ian", "Mary"] }, { group: "C", persons: ["Zeppa", "Billy"] }, { group: "D", persons: [] }];

            assert.deepEqual(groupJoin, groupJoinExpected, "Grouped join Persons and Groups");

            // TEST
            var groupJoinWithDefault = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Group.getGroups()).groupJoin(ClientTestLibrary.Utilities.Person.getPersons(), function (g) {
                return g.getName();
            }, function (p) {
                return p.getGroup();
            }, function (g, pg) {
                return { g: g, pg: pg };
            }).selectMany(function (x0) {
                return Bridge.Linq.Enumerable.from(x0.pg).defaultIfEmpty(Bridge.getDefaultValue(ClientTestLibrary.Utilities.Person));
            }, function (x1, ep) {
                return { groupName: x1.g.getName(), personName: ep !== null ? ep.getName() : "" };
            })).toArray();

            var groupJoinWithDefaultExpected = [{ groupName: "A", personName: "Frank" }, { groupName: "B", personName: "John" }, { groupName: "B", personName: "Dora" }, { groupName: "B", personName: "Ian" }, { groupName: "B", personName: "Mary" }, { groupName: "C", personName: "Zeppa" }, { groupName: "C", personName: "Billy" }, { groupName: "D", personName: "" }];

            assert.deepEqual(groupJoinWithDefault, groupJoinWithDefaultExpected, "Grouped join Persons and Groups with DefaultIfEmpty");

            // TEST
            var groupJoinWithDefaultAndComplexEquals = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Group.getGroups()).groupJoin(ClientTestLibrary.Utilities.Person.getPersons(), function (g) {
                return { name: g.getName(), digit: 1 };
            }, function (p) {
                return { name: p.getGroup(), digit: 1 };
            }, function (g, pg) {
                return { g: g, pg: pg };
            }).selectMany(function (x2) {
                return Bridge.Linq.Enumerable.from(x2.pg).defaultIfEmpty(Bridge.getDefaultValue(ClientTestLibrary.Utilities.Person));
            }, function (x3, ep) {
                return { x3: x3, ep: ep };
            }).orderByDescending(function (x4) {
                return x4.ep !== null ? x4.ep.getName() : null;
            }).select(function (x5) {
                return { groupName: x5.x3.g !== null ? x5.x3.g.getName() : null, personName: x5.ep !== null ? x5.ep.getName() : null };
            })).toArray();

            var groupJoinWithDefaultAndComplexEqualsExpected = [{ groupName: "C", personName: "Zeppa" }, { groupName: "B", personName: "Mary" }, { groupName: "B", personName: "John" }, { groupName: "B", personName: "Ian" }, { groupName: "A", personName: "Frank" }, { groupName: "B", personName: "Dora" }, { groupName: "C", personName: "Billy" }, { groupName: "D", personName: Bridge.cast(null, String) }];

            assert.deepEqual(groupJoinWithDefaultAndComplexEquals, groupJoinWithDefaultAndComplexEqualsExpected, "Issue #209. Grouped join Persons and Groups with DefaultIfEmpty, complex equals and ordering");
        }
    }
});



Bridge.init();