    Bridge.define("TestIssue921Instance.Issue921Instance", {
        statics: {
            config: {
                properties: {
                    NameStatic: null
                }
            }
        },
        _offset: 0,
        config: {
            properties: {
                Name: null
            }
        },
        ctor: function (offset) {
            this.$initialize();
            this._offset = offset;
            TestIssue921Instance.Issue921Instance.setNameStatic("Static");
        },
        computeValue: function (d) {
            return d.add(System.Decimal(10));
        },
        lambaLiftingWithReadOnlyField: function () {
            var localValue = 456;
            return System.Linq.Enumerable.from([1, 2, 3]).select($_.TestIssue921Instance.Issue921Instance.f1).select($_.TestIssue921Instance.Issue921Instance.f1).select($_.TestIssue921Instance.Issue921Instance.f2).select(Bridge.fn.bind(this, $_.TestIssue921Instance.Issue921Instance.f3)).select(Bridge.fn.bind(this, $_.TestIssue921Instance.Issue921Instance.f4)).select(function (value) {
                return ((value + localValue) | 0);
            });
        },
        lambaLiftingWithProperty: function () {
            var localValue = "What a name";

            return System.Linq.Enumerable.from(["one", "two", "three"]).select($_.TestIssue921Instance.Issue921Instance.f5).select($_.TestIssue921Instance.Issue921Instance.f5).select($_.TestIssue921Instance.Issue921Instance.f6).select(Bridge.fn.bind(this, $_.TestIssue921Instance.Issue921Instance.f7)).select(Bridge.fn.bind(this, $_.TestIssue921Instance.Issue921Instance.f8)).select(function (value) {
                return System.String.concat(value, localValue);
            });
        },
        lambaLiftingWithStaticProperty: function () {
            var localValue = "What a name";

            return System.Linq.Enumerable.from(["one", "two", "three"]).select($_.TestIssue921Instance.Issue921Instance.f5).select($_.TestIssue921Instance.Issue921Instance.f5).select($_.TestIssue921Instance.Issue921Instance.f6).select(Bridge.fn.bind(this, $_.TestIssue921Instance.Issue921Instance.f7)).select($_.TestIssue921Instance.Issue921Instance.f9).select(function (value) {
                return System.String.concat(value, localValue);
            });
        },
        lambaLiftingWithInstanceMethod: function () {
            var localValue = System.Decimal(10.0);

            return System.Linq.Enumerable.from([System.Decimal(1.0), System.Decimal(2.0), System.Decimal(3.0)]).select($_.TestIssue921Instance.Issue921Instance.f10).select($_.TestIssue921Instance.Issue921Instance.f10).select(Bridge.fn.bind(this, $_.TestIssue921Instance.Issue921Instance.f11)).select(Bridge.fn.bind(this, $_.TestIssue921Instance.Issue921Instance.f12)).select(Bridge.fn.bind(this, $_.TestIssue921Instance.Issue921Instance.f13)).select(function (value) {
                return value.add(localValue);
            });
        },
        lambaLiftingWithDelegate: function () {
            // Lift
            var addThousand = $_.TestIssue921Instance.Issue921Instance.f14;

            var localValue = 123;

            return System.Linq.Enumerable.from([1, 2, 3]).select(function (value) {
                return addThousand(((value + 1) | 0));
            }).select(function (value) {
                return addThousand(((value + 1) | 0));
            }).select(function (value, index) {
                return addThousand(((value + index) | 0));
            }).select(Bridge.fn.bind(this, function (value) {
                return ((addThousand(value) + this._offset) | 0);
            })).select(Bridge.fn.bind(this, function (value, index) {
                return ((((addThousand(value) + index) | 0) + this._offset) | 0);
            })).select(function (value) {
                return addThousand(((value + addThousand(localValue)) | 0));
            });
        },
        lambaLiftingWithDelegateChangingType: function () {
            // Lift
            var toString = $_.TestIssue921Instance.Issue921Instance.f15;

            var localValue = 7;

            return System.Linq.Enumerable.from([1, 2, 3]).select(function (value) {
                return toString(((value + 1) | 0));
            }).select(function (value) {
                return toString(value.length);
            }).select(function (value, index) {
                return toString(((value.length + index) | 0));
            }).select(Bridge.fn.bind(this, function (value) {
                return System.String.concat(toString(value.length), this._offset);
            })).select(Bridge.fn.bind(this, function (value, index) {
                return System.String.concat(System.String.concat(toString(value.length), index), this._offset);
            })).select(function (value) {
                return toString(((value.length + toString(localValue).length) | 0));
            });
        }
    });

    var $_ = {};

    Bridge.ns("TestIssue921Instance.Issue921Instance", $_);

    Bridge.apply($_.TestIssue921Instance.Issue921Instance, {
        f1: function (value) {
            return ((value + 1) | 0);
        },
        f2: function (value, index) {
            return ((value + index) | 0);
        },
        f3: function (value) {
            return ((value + this._offset) | 0);
        },
        f4: function (value, index) {
            return ((((value + index) | 0) + this._offset) | 0);
        },
        f5: function (value) {
            return System.String.concat(value, 1);
        },
        f6: function (value, index) {
            return System.String.concat(value, index);
        },
        f7: function (value) {
            return System.String.concat(value, this.getName());
        },
        f8: function (value, index) {
            return System.String.concat(System.String.concat(value, index), this.getName());
        },
        f9: function (value, index) {
            return System.String.concat(System.String.concat(value, index), TestIssue921Instance.Issue921Instance.getNameStatic());
        },
        f10: function (value) {
            return value.add(System.Decimal(1));
        },
        f11: function (value, index) {
            return value.add(this.computeValue(System.Decimal(index)));
        },
        f12: function (value) {
            return value.add(this.computeValue(System.Decimal(100.0)));
        },
        f13: function (value, index) {
            return value.add(System.Decimal(index)).add(this.computeValue(System.Decimal(200.0)));
        },
        f14: function (i) {
            return ((i + 1000) | 0);
        },
        f15: function (i) {
            return i.toString();
        }
    });
