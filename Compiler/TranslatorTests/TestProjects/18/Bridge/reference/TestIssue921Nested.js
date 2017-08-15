    Bridge.define("TestIssue921Nested.Issue921NestedOuter", {
        methods: {
            UseAField1: function UseAField1 () {
                var n = new TestIssue921Nested.Issue921NestedOuter.Issue921Nested(100);

                var t = System.Linq.Enumerable.from(n.Name).select($asm.$.TestIssue921Nested.Issue921NestedOuter.f1);
            },
            UseAField2: function UseAField2 () {
                var n = new TestIssue921Nested.Issue921NestedOuter.Issue921Nested(200);

                var t = System.Linq.Enumerable.from(n.Name).select($asm.$.TestIssue921Nested.Issue921NestedOuter.f1);
            },
            UseNestedFunOneInt: function UseNestedFunOneInt () {
                var n = new TestIssue921Nested.Issue921NestedOuter.Issue921Nested(300);
                System.Linq.Enumerable.from(System.Array.init([1, 2, 3], System.Int32)).select(function (x) {
                        return n.ComputeNumber(x);
                    });
            },
            UseNestedFuncTwoInts: function UseNestedFuncTwoInts () {
                var n = new TestIssue921Nested.Issue921NestedOuter.Issue921Nested(400);
                System.Linq.Enumerable.from(System.Array.init([1, 2, 3], System.Int32)).select(function (x, i) {
                        return n.ComputeTwoNumbers(x, i);
                    });
            },
            UseNestedActionTwoInts: function UseNestedActionTwoInts () {
                var $t;
                var n = new TestIssue921Nested.Issue921NestedOuter.Issue921Nested(400);

                $t = Bridge.getEnumerator(System.Array.init([1, 2, 3], System.Int32));
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        n.DoWithNumbers(item, item, item);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }},
            UseNestedFunOneIntStatic: function UseNestedFunOneIntStatic () {
                var n = new TestIssue921Nested.Issue921NestedOuter.Issue921Nested(500);
                System.Linq.Enumerable.from(System.Array.init([1, 2, 3], System.Int32)).select($asm.$.TestIssue921Nested.Issue921NestedOuter.f2);
            }
        }
    });

    Bridge.ns("TestIssue921Nested.Issue921NestedOuter", $asm.$);

    Bridge.apply($asm.$.TestIssue921Nested.Issue921NestedOuter, {
        f1: function (x) {
            return x;
        },
        f2: function (x) {
            return TestIssue921Nested.Issue921NestedOuter.Issue921Nested.ComputeNumberStatic(x);
        }
    });

    Bridge.define("TestIssue921Nested.Issue921NestedOuter.Issue921Nested", {
        statics: {
            fields: {
                ComputeNumberStatic: null
            },
            props: {
                NameStatic: null,
                IntStatic: 0
            },
            ctors: {
                init: function () {
                    this.ComputeNumberStatic = $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f1;
                }
            }
        },
        fields: {
            _offset: 0,
            ComputeNumber: null,
            ComputeTwoNumbers: null,
            DoWithNumbers: null
        },
        props: {
            Name: null
        },
        ctors: {
            init: function () {
                this.ComputeNumber = $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f2;
                this.ComputeTwoNumbers = $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f3;
                this.DoWithNumbers = $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f4;
            },
            ctor: function (offset) {
                this.$initialize();
                this._offset = offset;
                TestIssue921Nested.Issue921NestedOuter.Issue921Nested.NameStatic = "Static";
            }
        },
        methods: {
            ComputeValue: function ComputeValue (d) {
                return d.add(System.Decimal(10));
            },
            LambaLiftingWithReadOnlyField: function LambaLiftingWithReadOnlyField () {
                var localValue = 456;
                return System.Linq.Enumerable.from(System.Array.init([1, 2, 3], System.Int32)).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f5).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f5).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f6).select(Bridge.fn.bind(this, $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f7)).select(Bridge.fn.bind(this, $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f8)).select(function (value) {
                    return ((value + localValue) | 0);
                });
            },
            LambaLiftingWithProperty: function LambaLiftingWithProperty () {
                var localValue = "What a name";

                return System.Linq.Enumerable.from(System.Array.init(["one", "two", "three"], System.String)).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f9).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f9).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f10).select(Bridge.fn.bind(this, $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f11)).select(Bridge.fn.bind(this, $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f12)).select(function (value) {
                    return System.String.concat(value, localValue);
                });
            },
            LambaLiftingWithStaticProperty: function LambaLiftingWithStaticProperty () {
                var localValue = "What a name";

                return System.Linq.Enumerable.from(System.Array.init(["one", "two", "three"], System.String)).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f9).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f9).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f10).select(Bridge.fn.bind(this, $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f11)).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f13).select(function (value) {
                    return System.String.concat(value, localValue);
                });
            },
            LambaLiftingWithInstanceMethod: function LambaLiftingWithInstanceMethod () {
                var localValue = System.Decimal(10.0);

                return System.Linq.Enumerable.from(System.Array.init([System.Decimal(1.0), System.Decimal(2.0), System.Decimal(3.0)], System.Decimal)).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f14).select($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f14).select(Bridge.fn.bind(this, $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f15)).select(Bridge.fn.bind(this, $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f16)).select(Bridge.fn.bind(this, $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f17)).select(function (value) {
                    return value.add(localValue);
                });
            },
            LambaLiftingWithDelegate: function LambaLiftingWithDelegate () {
                // Lift
                var addThousand = $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f18;

                var localValue = 123;

                return System.Linq.Enumerable.from(System.Array.init([1, 2, 3], System.Int32)).select(function (value) {
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
            LambaLiftingWithDelegateChangingType: function LambaLiftingWithDelegateChangingType () {
                // Lift
                var $toString = $asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested.f19;

                var localValue = 7;

                return System.Linq.Enumerable.from(System.Array.init([1, 2, 3], System.Int32)).select(function (value) {
                        return $toString(((value + 1) | 0));
                    }).select(function (value) {
                    return $toString(value.length);
                }).select(function (value, index) {
                    return $toString(((value.length + index) | 0));
                }).select(Bridge.fn.bind(this, function (value) {
                    return System.String.concat($toString(value.length), this._offset);
                })).select(Bridge.fn.bind(this, function (value, index) {
                    return System.String.concat($toString(value.length), index, this._offset);
                })).select(function (value) {
                    return $toString(((value.length + $toString(localValue).length) | 0));
                });
            }
        }
    });

    Bridge.ns("TestIssue921Nested.Issue921NestedOuter.Issue921Nested", $asm.$);

    Bridge.apply($asm.$.TestIssue921Nested.Issue921NestedOuter.Issue921Nested, {
        f1: function (i) {
            return ((Bridge.Int.mul(3, i) + TestIssue921Nested.Issue921NestedOuter.Issue921Nested.IntStatic) | 0);
        },
        f2: function (i) {
            return ((Bridge.Int.mul(2, i) + TestIssue921Nested.Issue921NestedOuter.Issue921Nested.IntStatic) | 0);
        },
        f3: function (i, j) {
            return ((((i + j) | 0) + TestIssue921Nested.Issue921NestedOuter.Issue921Nested.IntStatic) | 0);
        },
        f4: function (i, j, k) {
            var x = (((((i + j) | 0) + k) | 0) + TestIssue921Nested.Issue921NestedOuter.Issue921Nested.IntStatic) | 0;
        },
        f5: function (value) {
            return ((value + 1) | 0);
        },
        f6: function (value, index) {
            return ((value + index) | 0);
        },
        f7: function (value) {
            return ((value + this._offset) | 0);
        },
        f8: function (value, index) {
            return ((((value + index) | 0) + this._offset) | 0);
        },
        f9: function (value) {
            return System.String.concat(value, 1);
        },
        f10: function (value, index) {
            return System.String.concat(value, index);
        },
        f11: function (value) {
            return System.String.concat(value, this.Name);
        },
        f12: function (value, index) {
            return System.String.concat(value, index, this.Name);
        },
        f13: function (value, index) {
            return System.String.concat(value, index, TestIssue921Nested.Issue921NestedOuter.Issue921Nested.NameStatic);
        },
        f14: function (value) {
            return value.add(System.Decimal(1));
        },
        f15: function (value, index) {
            return value.add(this.ComputeValue(System.Decimal(index)));
        },
        f16: function (value) {
            return value.add(this.ComputeValue(System.Decimal(100.0)));
        },
        f17: function (value, index) {
            return value.add(System.Decimal(index)).add(this.ComputeValue(System.Decimal(200.0)));
        },
        f18: function (i) {
            return ((i + 1000) | 0);
        },
        f19: function (i) {
            return i.toString();
        }
    });
