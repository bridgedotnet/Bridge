/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Linq.TestLinqElementOperators', {
    statics: {
        test: function (assert) {
            assert.expect(26);

            // TEST
            var persons = ClientTestLibrary.Utilities.Person.getPersons();
            var person3 = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).where(function (p) {
                return p.getID() === 3;
            })).first();

            assert.deepEqual(person3, ClientTestLibrary.Utilities.Person.getPersons().getItem(2), "First() with ID = 3");
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).first(function (x) {
                return x.getID() === 3;
            }), ClientTestLibrary.Utilities.Person.getPersons().getItem(2), "First() with ID = 3 by lambda");
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).where(function (x) {
                return x.getID() === 3;
            }).first(), ClientTestLibrary.Utilities.Person.getPersons().getItem(2), "First() with Where() with ID = 3 by lambda");
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).first(function (x) {
                return x.getGroup() === "C";
            }), ClientTestLibrary.Utilities.Person.getPersons().getItem(1), "First() with Group = 'C' by lambda");
            assert.throws(ClientTestLibrary.Linq.TestLinqElementOperators.throwExceptionOnFirst1, "First() should throw exception if no element found");
            assert.throws(ClientTestLibrary.Linq.TestLinqElementOperators.throwExceptionOnFirst2, "First() should throw exception on empty collection");

            // TEST
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).firstOrDefault(function (x) {
                return x.getID() === -1;
            }, Bridge.getDefaultValue(ClientTestLibrary.Utilities.Person)), null, "FirstOrDefault() unexisting element by lambda");
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).where(function (x) {
                return x.getID() === -1;
            }).firstOrDefault(null, Bridge.getDefaultValue(ClientTestLibrary.Utilities.Person)), null, "FirstOrDefault() with Where() unexisting element by lambda");
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).firstOrDefault(function (x) {
                return x.getName() === "Nemo";
            }, Bridge.getDefaultValue(ClientTestLibrary.Utilities.Person)), persons.getItem(7), "FirstOrDefault() with Name = 'Nemo' by lambda");
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).where(function (x) {
                return x.getName() === "Nemo";
            }).firstOrDefault(null, Bridge.getDefaultValue(ClientTestLibrary.Utilities.Person)), persons.getItem(7), "FirstOrDefault() with Where() with Name = 'Nemo' by lambda");
            assert.deepEqual(Bridge.Linq.Enumerable.from(([])).firstOrDefault(null, Bridge.getDefaultValue(Object)), null, "FirstOrDefault() within zero-length array by lambda");

            // TEST
            var lastPerson = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).select(function (p) {
                return p;
            })).last();

            assert.deepEqual(lastPerson, ClientTestLibrary.Utilities.Person.getPersons().getItem(7), "Last() person");
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).last(function (x) {
                return x.getID() === 4;
            }), ClientTestLibrary.Utilities.Person.getPersons().getItem(3), "Last() with ID = 4 by lambda");
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).last(function (x) {
                return x.getGroup() === "B";
            }), ClientTestLibrary.Utilities.Person.getPersons().getItem(6), "Last() with Group = 'B' by lambda");
            assert.throws(ClientTestLibrary.Linq.TestLinqElementOperators.throwExceptionOnLast1, "Last() should throw exception if no element found");
            assert.throws(ClientTestLibrary.Linq.TestLinqElementOperators.throwExceptionOnLast2, "Last() should throw exception on empty collection");

            // TEST
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).lastOrDefault(function (x) {
                return x.getID() === -1;
            }, Bridge.getDefaultValue(ClientTestLibrary.Utilities.Person)), null, "LastOrDefault() unexisting element by lambda");
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).where(function (x) {
                return x.getID() === -1;
            }).lastOrDefault(null, Bridge.getDefaultValue(ClientTestLibrary.Utilities.Person)), null, "LastOrDefault() with Where() unexisting element by lambda");
            assert.deepEqual(Bridge.Linq.Enumerable.from(persons).lastOrDefault(function (x) {
                return x.getName() === "Nemo";
            }, Bridge.getDefaultValue(ClientTestLibrary.Utilities.Person)), persons.getItem(7), "LastOrDefault() with Name = 'Nemo' by lambda");
            assert.deepEqual(Bridge.Linq.Enumerable.from(([])).lastOrDefault(null, Bridge.getDefaultValue(Object)), null, "LastOrDefault() within zero-length array by lambda");

            // TEST
            var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
            var elementAt1 = (Bridge.Linq.Enumerable.from(numbers).where(function (n) {
                return n > 5;
            })).elementAt(1);

            assert.deepEqual(elementAt1, 8, "ElementAt() should return 8");
            assert.throws(ClientTestLibrary.Linq.TestLinqElementOperators.throwExceptionOnElementAt1, "ElementAt() should throw exception if no element found");
            assert.throws(ClientTestLibrary.Linq.TestLinqElementOperators.throwExceptionOnElementAt2, "ElementAt() should throw exception on empty collection");

            // TEST
            var elementAt1OrDefault = Bridge.Linq.Enumerable.from(numbers).elementAtOrDefault(1, Bridge.getDefaultValue(Bridge.Int));
            assert.deepEqual(elementAt1OrDefault, 4, "ElementAtOrDefault() should return 4");

            // TEST
            var elementAt2OrDefault = (Bridge.Linq.Enumerable.from(numbers).where(function (n) {
                return n > 5;
            })).elementAtOrDefault(2, Bridge.getDefaultValue(Bridge.Int));
            assert.deepEqual(elementAt2OrDefault, 6, "ElementAtOrDefault() should return 6");

            // TEST
            var elementAt100OrDefault = (Bridge.Linq.Enumerable.from(numbers).where(function (n) {
                return n > 5;
            })).elementAtOrDefault(100, Bridge.getDefaultValue(Bridge.Int));
            assert.deepEqual(elementAt100OrDefault, 0, "ElementAtOrDefault() should return 0");
        },
        throwExceptionOnFirst1: function () {
            var numbers = [3, 4];

            Bridge.Linq.Enumerable.from(numbers).first(function (x) {
                return x === 5;
            });
        },
        throwExceptionOnFirst2: function () {
            var numbers = [];

            Bridge.Linq.Enumerable.from(numbers).first();
        },
        throwExceptionOnLast1: function () {
            var numbers = [3, 4];

            Bridge.Linq.Enumerable.from(numbers).last(function (x) {
                return x === 5;
            });
        },
        throwExceptionOnLast2: function () {
            var numbers = [];

            Bridge.Linq.Enumerable.from(numbers).last();
        },
        throwExceptionOnElementAt1: function () {
            var numbers = [3, 4];

            Bridge.Linq.Enumerable.from(numbers).elementAt(3);
        },
        throwExceptionOnElementAt2: function () {
            var numbers = [];

            Bridge.Linq.Enumerable.from(numbers).elementAt(1);
        }
    }
});



Bridge.init();