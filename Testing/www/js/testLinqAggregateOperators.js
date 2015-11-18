/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Linq.TestLinqAggregateOperators', {
    statics: {
        test: function (assert) {
            assert.expect(20);

            var numbers = [2, 2, 3, 5, 5, -1, 2, -1];
            var words = ["one", "two", "three"];
            var doubles = [1.7, 2.3, 1.9, 4.1, 2.9];

            // TEST
            var uniqueNumbers = Bridge.Linq.Enumerable.from(numbers).distinct().count();
            assert.deepEqual(uniqueNumbers, 4, "Count() distinct numbers");

            // TEST
            var oddNumbers = Bridge.Linq.Enumerable.from(numbers).count(function (n) {
                return n % 2 === 1;
            });
            assert.deepEqual(oddNumbers, 3, "Count() odd numbers");

            // TEST
            var groupJoin = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Group.getGroups()).groupJoin(ClientTestLibrary.Utilities.Person.getPersons(), function (g) {
                return g.getName();
            }, function (p) {
                return p.getGroup();
            }, function (g, pg) {
                return { group: g.getName(), personCount: Bridge.Linq.Enumerable.from(pg).count() };
            })).toArray();

            var groupJoinExpected = [{ group: "A", personCount: 1 }, { group: "B", personCount: 4 }, { group: "C", personCount: 2 }, { group: "D", personCount: 0 }];

            assert.deepEqual(groupJoin, groupJoinExpected, "Count() within joint collections");

            // TEST
            var grouped = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), personCount: g.count() };
            })).toArray();

            var groupedExpected = [{ group: "A", personCount: 1 }, { group: "C", personCount: 2 }, { group: "B", personCount: 4 }, { group: Bridge.cast(null, String), personCount: 1 }];

            assert.deepEqual(grouped, groupedExpected, "Count() within group");

            // TEST
            var numSum = Bridge.Linq.Enumerable.from(numbers).sum();
            assert.deepEqual(numSum, 17, "Sum() numbers");

            // TEST
            var totalChars = Bridge.Linq.Enumerable.from(words).sum(function (w) {
                return w.length;
            });
            assert.deepEqual(totalChars, 11, "Sum() total chars");

            // TEST
            var groupedSum = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), sum: g.sum(function (x) {
                    return x.getCount();
                }) };
            })).toArray();

            var groupedSumExpected = [{ group: "A", sum: 300 }, { group: "C", sum: 600 }, { group: "B", sum: 2000 }, { group: Bridge.cast(null, String), sum: 3000 }];

            assert.deepEqual(groupedSum, groupedSumExpected, "Sum() within group");

            // TEST
            var minNum = Bridge.Linq.Enumerable.from(numbers).min();
            assert.deepEqual(minNum, -1, "Min() number");

            // TEST
            var shortestWordLength = Bridge.Linq.Enumerable.from(words).min(function (w) {
                return w.length;
            });
            assert.deepEqual(shortestWordLength, 3, "Min() for shortest word");

            // TEST
            var groupedMin = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), min: g.min(function (x) {
                    return x.getCount();
                }) };
            })).toArray();

            var groupedMinExpected = [{ group: "A", min: 300 }, { group: "C", min: 100 }, { group: "B", min: 50 }, { group: Bridge.cast(null, String), min: 3000 }];

            assert.deepEqual(groupedMin, groupedMinExpected, "Min() within group");

            // TEST
            var groupedMinWithLet = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { g: g, minCount: g.min(function (x) {
                    return x.getCount();
                }) };
            }).select(function (x0) {
                return { group: x0.g.key(), name: x0.g.where(function (x) {
                    return x.getCount() === x0.minCount;
                }).select(function (x) {
                    return x.getName();
                }).toArray() };
            })).toArray();

            var groupedMinWithLetExpected = [{ group: "A", name: ["Frank"] }, { group: "C", name: ["Zeppa"] }, { group: "B", name: ["Dora"] }, { group: Bridge.cast(null, String), name: ["Nemo"] }];

            assert.deepEqual(groupedMinWithLet, groupedMinWithLetExpected, "Min() within group with let");

            // TEST
            var maxNum = Bridge.Linq.Enumerable.from(numbers).max();
            assert.deepEqual(maxNum, 5, "Max() number");

            // TEST
            var longestWordLength = Bridge.Linq.Enumerable.from(words).max(function (w) {
                return w.length;
            });
            assert.deepEqual(longestWordLength, 5, "Max() for longest word");

            // TEST
            var groupedMax = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), max: g.max(function (x) {
                    return x.getCount();
                }) };
            })).toArray();

            var groupedMaxExpected = [{ group: "A", max: 300 }, { group: "C", max: 500 }, { group: "B", max: 700 }, { group: Bridge.cast(null, String), max: 3000 }];

            assert.deepEqual(groupedMax, groupedMaxExpected, "Max() within group");

            // TEST
            var groupedMaxWithLet = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { g: g, maxCount: g.max(function (x) {
                    return x.getCount();
                }) };
            }).select(function (x1) {
                return { group: x1.g.key(), name: x1.g.where(function (x) {
                    return x.getCount() === x1.maxCount;
                }).select(function (x) {
                    return x.getName();
                }).toArray() };
            })).toArray();

            var groupedMaxWithLetExpected = [{ group: "A", name: ["Frank"] }, { group: "C", name: ["Billy"] }, { group: "B", name: ["John", "Mary"] }, { group: Bridge.cast(null, String), name: ["Nemo"] }];

            assert.deepEqual(groupedMaxWithLet, groupedMaxWithLetExpected, "Max() within group with let");

            // TEST
            var averageNum = Bridge.Linq.Enumerable.from(numbers).average();
            assert.deepEqual(averageNum, 2.125, "Average() number");

            // TEST
            var averageWordLengths = ["1", "22", "333", "4444", "55555"];
            var averageWordLength = Bridge.Linq.Enumerable.from(averageWordLengths).average(function (w) {
                return w.length;
            });
            assert.deepEqual(averageWordLength, 3, "Average() for word lengths");

            // TEST
            var groupedAverage = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), average: g.average(function (x) {
                    return x.getCount();
                }) };
            })).toArray();

            var groupedAverageExpected = [{ group: "A", average: 300 }, { group: "C", average: 300 }, { group: "B", average: 500 }, { group: Bridge.cast(null, String), average: 3000 }];

            assert.deepEqual(groupedAverage, groupedAverageExpected, "Average() within group");

            // TEST
            var doublesForAggregate = [1.0, 2.0, 3.0, 4.0, 5.0];
            var product = Bridge.Linq.Enumerable.from(doublesForAggregate).aggregate(function (runningProduct, nextFactor) {
                return runningProduct * nextFactor;
            });
            assert.deepEqual(product, 120, "Aggregate() within doubles");

            // TEST
            var startBalance = 100.0;
            var attemptedWithdrawals = [20, 10, 40, 50, 10, 70, 30];

            var endBalance = Bridge.Linq.Enumerable.from(attemptedWithdrawals).aggregate(startBalance, function (balance, nextWithdrawal) {
                return ((nextWithdrawal <= balance) ? (balance - nextWithdrawal) : balance);
            });

            assert.deepEqual(endBalance, 20, "Aggregate() balance");
        },
        bridge315: function (assert) {
            assert.expect(1);

            var q = Bridge.Linq.Enumerable.from("a,b,c,a".toUpperCase().split(",")).aggregate("", function (workingSentence, next) {
                return next + " " + workingSentence;
            });

            assert.equal(q, "A C B A ", "Enumerable.Aggregate");
        }
    }
});



Bridge.init();