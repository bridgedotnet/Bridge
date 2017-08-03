    Bridge.define("TestIssue921Static.Issue921Static", {
        statics: {
            fields: {
                _offset: 0
            },
            props: {
                Name: null
            },
            ctors: {
                ctor: function () {
                    TestIssue921Static.Issue921Static._offset = 10;
                }
            },
            methods: {
                ComputeValue: function ComputeValue (d) {
                    return d.add(System.Decimal(10));
                },
                LambaLiftingWithReadOnlyField: function LambaLiftingWithReadOnlyField () {
                    var localValue = 456;
                    return System.Linq.Enumerable.from(System.Array.init([1, 2, 3], System.Int32)).select($asm.$.TestIssue921Static.Issue921Static.f1).select($asm.$.TestIssue921Static.Issue921Static.f1).select($asm.$.TestIssue921Static.Issue921Static.f2).select($asm.$.TestIssue921Static.Issue921Static.f3).select($asm.$.TestIssue921Static.Issue921Static.f4).select(function (value) {
                        return ((value + localValue) | 0);
                    });
                },
                LambaLiftingWithProperty: function LambaLiftingWithProperty () {
                    var localValue = "What a name";

                    return System.Linq.Enumerable.from(System.Array.init(["one", "two", "three"], System.String)).select($asm.$.TestIssue921Static.Issue921Static.f5).select($asm.$.TestIssue921Static.Issue921Static.f5).select($asm.$.TestIssue921Static.Issue921Static.f6).select($asm.$.TestIssue921Static.Issue921Static.f7).select($asm.$.TestIssue921Static.Issue921Static.f8).select(function (value) {
                        return System.String.concat(value, localValue);
                    });
                },
                LambaLiftingWithInstanceMethod: function LambaLiftingWithInstanceMethod () {
                    var localValue = System.Decimal(10.0);

                    return System.Linq.Enumerable.from(System.Array.init([System.Decimal(1.0), System.Decimal(2.0), System.Decimal(3.0)], System.Decimal)).select($asm.$.TestIssue921Static.Issue921Static.f9).select($asm.$.TestIssue921Static.Issue921Static.f9).select($asm.$.TestIssue921Static.Issue921Static.f10).select($asm.$.TestIssue921Static.Issue921Static.f11).select($asm.$.TestIssue921Static.Issue921Static.f12).select(function (value) {
                        return value.add(localValue);
                    });
                },
                LambaLiftingWithDelegate: function LambaLiftingWithDelegate () {
                    // Lift
                    var addThousand = $asm.$.TestIssue921Static.Issue921Static.f13;

                    var localValue = 123;

                    return System.Linq.Enumerable.from(System.Array.init([1, 2, 3], System.Int32)).select(function (value) {
                            return addThousand(((value + 1) | 0));
                        }).select(function (value) {
                        return addThousand(((value + 1) | 0));
                    }).select(function (value, index) {
                        return addThousand(((value + index) | 0));
                    }).select(function (value) {
                        return ((addThousand(value) + TestIssue921Static.Issue921Static._offset) | 0);
                    }).select(function (value, index) {
                        return ((((addThousand(value) + index) | 0) + TestIssue921Static.Issue921Static._offset) | 0);
                    }).select(function (value) {
                        return addThousand(((value + addThousand(localValue)) | 0));
                    });
                },
                LambaLiftingWithDelegateChangingType: function LambaLiftingWithDelegateChangingType () {
                    // Lift
                    var $toString = $asm.$.TestIssue921Static.Issue921Static.f14;

                    var localValue = 7;

                    return System.Linq.Enumerable.from(System.Array.init([1, 2, 3], System.Int32)).select(function (value) {
                            return $toString(((value + 1) | 0));
                        }).select(function (value) {
                        return $toString(value.length);
                    }).select(function (value, index) {
                        return $toString(((value.length + index) | 0));
                    }).select(function (value) {
                        return System.String.concat($toString(value.length), TestIssue921Static.Issue921Static._offset);
                    }).select(function (value, index) {
                        return System.String.concat($toString(value.length), index, TestIssue921Static.Issue921Static._offset);
                    }).select(function (value) {
                        return $toString(((value.length + $toString(localValue).length) | 0));
                    });
                }
            }
        }
    });

    Bridge.ns("TestIssue921Static.Issue921Static", $asm.$);

    Bridge.apply($asm.$.TestIssue921Static.Issue921Static, {
        f1: function (value) {
            return ((value + 1) | 0);
        },
        f2: function (value, index) {
            return ((value + index) | 0);
        },
        f3: function (value) {
            return ((value + TestIssue921Static.Issue921Static._offset) | 0);
        },
        f4: function (value, index) {
            return ((((value + index) | 0) + TestIssue921Static.Issue921Static._offset) | 0);
        },
        f5: function (value) {
            return System.String.concat(value, 1);
        },
        f6: function (value, index) {
            return System.String.concat(value, index);
        },
        f7: function (value) {
            return System.String.concat(value, TestIssue921Static.Issue921Static.Name);
        },
        f8: function (value, index) {
            return System.String.concat(value, index, TestIssue921Static.Issue921Static.Name);
        },
        f9: function (value) {
            return value.add(System.Decimal(1));
        },
        f10: function (value, index) {
            return value.add(TestIssue921Static.Issue921Static.ComputeValue(System.Decimal(index)));
        },
        f11: function (value) {
            return value.add(TestIssue921Static.Issue921Static.ComputeValue(System.Decimal(100.0)));
        },
        f12: function (value, index) {
            return value.add(System.Decimal(index)).add(TestIssue921Static.Issue921Static.ComputeValue(System.Decimal(200.0)));
        },
        f13: function (i) {
            return ((i + 1000) | 0);
        },
        f14: function (i) {
            return i.toString();
        }
    });
