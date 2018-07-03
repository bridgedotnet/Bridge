    Bridge.define("System.ValueTuple", {
        inherits: function () { return [System.IEquatable$1(System.ValueTuple),System.Collections.IStructuralEquatable,System.Collections.IStructuralComparable,System.IComparable,System.IComparable$1(System.ValueTuple)]; },
        $kind: "struct",
        statics: {
            methods: {
                Create: function () {
                    return new System.ValueTuple();
                },
                Create$1: function (T1, item1) {
                    return new (System.ValueTuple$1(T1)).$ctor1(item1);
                },
                Create$2: function (T1, T2, item1, item2) {
                    return new (System.ValueTuple$2(T1,T2)).$ctor1(item1, item2);
                },
                Create$3: function (T1, T2, T3, item1, item2, item3) {
                    return new (System.ValueTuple$3(T1,T2,T3)).$ctor1(item1, item2, item3);
                },
                Create$4: function (T1, T2, T3, T4, item1, item2, item3, item4) {
                    return new (System.ValueTuple$4(T1,T2,T3,T4)).$ctor1(item1, item2, item3, item4);
                },
                Create$5: function (T1, T2, T3, T4, T5, item1, item2, item3, item4, item5) {
                    return new (System.ValueTuple$5(T1,T2,T3,T4,T5)).$ctor1(item1, item2, item3, item4, item5);
                },
                Create$6: function (T1, T2, T3, T4, T5, T6, item1, item2, item3, item4, item5, item6) {
                    return new (System.ValueTuple$6(T1,T2,T3,T4,T5,T6)).$ctor1(item1, item2, item3, item4, item5, item6);
                },
                Create$7: function (T1, T2, T3, T4, T5, T6, T7, item1, item2, item3, item4, item5, item6, item7) {
                    return new (System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)).$ctor1(item1, item2, item3, item4, item5, item6, item7);
                },
                Create$8: function (T1, T2, T3, T4, T5, T6, T7, T8, item1, item2, item3, item4, item5, item6, item7, item8) {
                    return new (System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,System.ValueTuple$1(T8))).$ctor1(item1, item2, item3, item4, item5, item6, item7, System.ValueTuple.Create$1(T8, item8));
                },
                CombineHashCodes: function (h1, h2) {
                    return System.Collections.HashHelpers.Combine(System.Collections.HashHelpers.Combine(System.Collections.HashHelpers.RandomSeed, h1), h2);
                },
                CombineHashCodes$1: function (h1, h2, h3) {
                    return System.Collections.HashHelpers.Combine(System.ValueTuple.CombineHashCodes(h1, h2), h3);
                },
                CombineHashCodes$2: function (h1, h2, h3, h4) {
                    return System.Collections.HashHelpers.Combine(System.ValueTuple.CombineHashCodes$1(h1, h2, h3), h4);
                },
                CombineHashCodes$3: function (h1, h2, h3, h4, h5) {
                    return System.Collections.HashHelpers.Combine(System.ValueTuple.CombineHashCodes$2(h1, h2, h3, h4), h5);
                },
                CombineHashCodes$4: function (h1, h2, h3, h4, h5, h6) {
                    return System.Collections.HashHelpers.Combine(System.ValueTuple.CombineHashCodes$3(h1, h2, h3, h4, h5), h6);
                },
                CombineHashCodes$5: function (h1, h2, h3, h4, h5, h6, h7) {
                    return System.Collections.HashHelpers.Combine(System.ValueTuple.CombineHashCodes$4(h1, h2, h3, h4, h5, h6), h7);
                },
                CombineHashCodes$6: function (h1, h2, h3, h4, h5, h6, h7, h8) {
                    return System.Collections.HashHelpers.Combine(System.ValueTuple.CombineHashCodes$5(h1, h2, h3, h4, h5, h6, h7), h8);
                },
                getDefaultValue: function () { return new System.ValueTuple(); }
            }
        },
        alias: [
            "equalsT", "System$IEquatable$1$System$ValueTuple$equalsT",
            "compareTo", ["System$IComparable$1$System$ValueTuple$compareTo", "System$IComparable$1$compareTo"]
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                return Bridge.is(obj, System.ValueTuple);
            },
            equalsT: function (other) {
                return true;
            },
            System$Collections$IStructuralEquatable$Equals: function (other, comparer) {
                return Bridge.is(other, System.ValueTuple);
            },
            System$IComparable$compareTo: function (other) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                return 0;
            },
            compareTo: function (other) {
                return 0;
            },
            System$Collections$IStructuralComparable$CompareTo: function (other, comparer) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                return 0;
            },
            getHashCode: function () {
                return 0;
            },
            System$Collections$IStructuralEquatable$GetHashCode: function (comparer) {
                return 0;
            },
            toString: function () {
                return "()";
            },
            $clone: function (to) { return this; }
        }
    });

    Bridge.define("System.ValueTuple$1", function (T1) { return {
        inherits: function () { return [System.IEquatable$1(System.ValueTuple$1(T1)),System.Collections.IStructuralEquatable,System.Collections.IStructuralComparable,System.IComparable,System.IComparable$1(System.ValueTuple$1(T1)),System.ITupleInternal]; },
        $kind: "struct",
        statics: {
            fields: {
                s_t1Comparer: null
            },
            ctors: {
                init: function () {
                    this.s_t1Comparer = System.Collections.Generic.EqualityComparer$1(T1).def;
                }
            },
            methods: {
                getDefaultValue: function () { return new (System.ValueTuple$1(T1))(); }
            }
        },
        fields: {
            Item1: Bridge.getDefaultValue(T1)
        },
        props: {
            System$ITupleInternal$Size: {
                get: function () {
                    return 1;
                }
            }
        },
        alias: [
            "equalsT", "System$IEquatable$1$System$ValueTuple$1$" + Bridge.getTypeAlias(T1) + "$equalsT",
            "compareTo", ["System$IComparable$1$System$ValueTuple$1$" + Bridge.getTypeAlias(T1) + "$compareTo", "System$IComparable$1$compareTo"]
        ],
        ctors: {
            $ctor1: function (item1) {
                this.$initialize();
                this.Item1 = item1;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                return Bridge.is(obj, System.ValueTuple$1(T1)) && this.equalsT(System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, System.ValueTuple$1(T1)), System.ValueTuple$1(T1))));
            },
            equalsT: function (other) {
                return System.ValueTuple$1(T1).s_t1Comparer.equals2(this.Item1, other.Item1);
            },
            System$Collections$IStructuralEquatable$Equals: function (other, comparer) {
                if (other == null || !(Bridge.is(other, System.ValueTuple$1(T1)))) {
                    return false;
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$1(T1)), System.ValueTuple$1(T1)));

                return comparer.System$Collections$IEqualityComparer$equals(this.Item1, objTuple.Item1);
            },
            System$IComparable$compareTo: function (other) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$1(T1)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$1(T1)), System.ValueTuple$1(T1)));

                return new (System.Collections.Generic.Comparer$1(T1))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item1, objTuple.Item1);
            },
            compareTo: function (other) {
                return new (System.Collections.Generic.Comparer$1(T1))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item1, other.Item1);
            },
            System$Collections$IStructuralComparable$CompareTo: function (other, comparer) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$1(T1)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$1(T1)), System.ValueTuple$1(T1)));

                return comparer.System$Collections$IComparer$compare(this.Item1, objTuple.Item1);
            },
            getHashCode: function () {
                return System.ValueTuple$1(T1).s_t1Comparer.getHashCode2(this.Item1);
            },
            System$Collections$IStructuralEquatable$GetHashCode: function (comparer) {
                return comparer.System$Collections$IEqualityComparer$getHashCode(this.Item1);
            },
            System$ITupleInternal$GetHashCode: function (comparer) {
                return comparer.System$Collections$IEqualityComparer$getHashCode(this.Item1);
            },
            toString: function () {
                return "(" + ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ")";
            },
            System$ITupleInternal$ToStringEnd: function () {
                return ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ")";
            },
            $clone: function (to) {
                var s = to || new (System.ValueTuple$1(T1))();
                s.Item1 = this.Item1;
                return s;
            }
        }
    }; });

    Bridge.define("System.ValueTuple$2", function (T1, T2) { return {
        inherits: function () { return [System.IEquatable$1(System.ValueTuple$2(T1,T2)),System.Collections.IStructuralEquatable,System.Collections.IStructuralComparable,System.IComparable,System.IComparable$1(System.ValueTuple$2(T1,T2)),System.ITupleInternal]; },
        $kind: "struct",
        statics: {
            fields: {
                s_t1Comparer: null,
                s_t2Comparer: null
            },
            ctors: {
                init: function () {
                    this.s_t1Comparer = System.Collections.Generic.EqualityComparer$1(T1).def;
                    this.s_t2Comparer = System.Collections.Generic.EqualityComparer$1(T2).def;
                }
            },
            methods: {
                getDefaultValue: function () { return new (System.ValueTuple$2(T1,T2))(); }
            }
        },
        fields: {
            Item1: Bridge.getDefaultValue(T1),
            Item2: Bridge.getDefaultValue(T2)
        },
        props: {
            System$ITupleInternal$Size: {
                get: function () {
                    return 2;
                }
            }
        },
        alias: [
            "equalsT", "System$IEquatable$1$System$ValueTuple$2$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$equalsT",
            "compareTo", ["System$IComparable$1$System$ValueTuple$2$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$compareTo", "System$IComparable$1$compareTo"]
        ],
        ctors: {
            $ctor1: function (item1, item2) {
                this.$initialize();
                this.Item1 = item1;
                this.Item2 = item2;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                return Bridge.is(obj, System.ValueTuple$2(T1,T2)) && this.equalsT(System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, System.ValueTuple$2(T1,T2)), System.ValueTuple$2(T1,T2))));
            },
            equalsT: function (other) {
                return System.ValueTuple$2(T1,T2).s_t1Comparer.equals2(this.Item1, other.Item1) && System.ValueTuple$2(T1,T2).s_t2Comparer.equals2(this.Item2, other.Item2);
            },
            System$Collections$IStructuralEquatable$Equals: function (other, comparer) {
                if (other == null || !(Bridge.is(other, System.ValueTuple$2(T1,T2)))) {
                    return false;
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$2(T1,T2)), System.ValueTuple$2(T1,T2)));

                return comparer.System$Collections$IEqualityComparer$equals(this.Item1, objTuple.Item1) && comparer.System$Collections$IEqualityComparer$equals(this.Item2, objTuple.Item2);
            },
            System$IComparable$compareTo: function (other) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$2(T1,T2)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                return this.compareTo(System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$2(T1,T2)), System.ValueTuple$2(T1,T2))));
            },
            compareTo: function (other) {
                var c = new (System.Collections.Generic.Comparer$1(T1))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item1, other.Item1);
                if (c !== 0) {
                    return c;
                }

                return new (System.Collections.Generic.Comparer$1(T2))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item2, other.Item2);
            },
            System$Collections$IStructuralComparable$CompareTo: function (other, comparer) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$2(T1,T2)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$2(T1,T2)), System.ValueTuple$2(T1,T2)));

                var c = comparer.System$Collections$IComparer$compare(this.Item1, objTuple.Item1);
                if (c !== 0) {
                    return c;
                }

                return comparer.System$Collections$IComparer$compare(this.Item2, objTuple.Item2);
            },
            getHashCode: function () {
                return System.ValueTuple.CombineHashCodes(System.ValueTuple$2(T1,T2).s_t1Comparer.getHashCode2(this.Item1), System.ValueTuple$2(T1,T2).s_t2Comparer.getHashCode2(this.Item2));
            },
            System$Collections$IStructuralEquatable$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            System$ITupleInternal$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            GetHashCodeCore: function (comparer) {
                return System.ValueTuple.CombineHashCodes(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item1), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item2));
            },
            toString: function () {
                return "(" + ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ")";
            },
            System$ITupleInternal$ToStringEnd: function () {
                return ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ")";
            },
            $clone: function (to) {
                var s = to || new (System.ValueTuple$2(T1,T2))();
                s.Item1 = this.Item1;
                s.Item2 = this.Item2;
                return s;
            }
        }
    }; });

    Bridge.define("System.ValueTuple$3", function (T1, T2, T3) { return {
        inherits: function () { return [System.IEquatable$1(System.ValueTuple$3(T1,T2,T3)),System.Collections.IStructuralEquatable,System.Collections.IStructuralComparable,System.IComparable,System.IComparable$1(System.ValueTuple$3(T1,T2,T3)),System.ITupleInternal]; },
        $kind: "struct",
        statics: {
            fields: {
                s_t1Comparer: null,
                s_t2Comparer: null,
                s_t3Comparer: null
            },
            ctors: {
                init: function () {
                    this.s_t1Comparer = System.Collections.Generic.EqualityComparer$1(T1).def;
                    this.s_t2Comparer = System.Collections.Generic.EqualityComparer$1(T2).def;
                    this.s_t3Comparer = System.Collections.Generic.EqualityComparer$1(T3).def;
                }
            },
            methods: {
                getDefaultValue: function () { return new (System.ValueTuple$3(T1,T2,T3))(); }
            }
        },
        fields: {
            Item1: Bridge.getDefaultValue(T1),
            Item2: Bridge.getDefaultValue(T2),
            Item3: Bridge.getDefaultValue(T3)
        },
        props: {
            System$ITupleInternal$Size: {
                get: function () {
                    return 3;
                }
            }
        },
        alias: [
            "equalsT", "System$IEquatable$1$System$ValueTuple$3$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$equalsT",
            "compareTo", ["System$IComparable$1$System$ValueTuple$3$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$compareTo", "System$IComparable$1$compareTo"]
        ],
        ctors: {
            $ctor1: function (item1, item2, item3) {
                this.$initialize();
                this.Item1 = item1;
                this.Item2 = item2;
                this.Item3 = item3;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                return Bridge.is(obj, System.ValueTuple$3(T1,T2,T3)) && this.equalsT(System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, System.ValueTuple$3(T1,T2,T3)), System.ValueTuple$3(T1,T2,T3))));
            },
            equalsT: function (other) {
                return System.ValueTuple$3(T1,T2,T3).s_t1Comparer.equals2(this.Item1, other.Item1) && System.ValueTuple$3(T1,T2,T3).s_t2Comparer.equals2(this.Item2, other.Item2) && System.ValueTuple$3(T1,T2,T3).s_t3Comparer.equals2(this.Item3, other.Item3);
            },
            System$Collections$IStructuralEquatable$Equals: function (other, comparer) {
                if (other == null || !(Bridge.is(other, System.ValueTuple$3(T1,T2,T3)))) {
                    return false;
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$3(T1,T2,T3)), System.ValueTuple$3(T1,T2,T3)));

                return comparer.System$Collections$IEqualityComparer$equals(this.Item1, objTuple.Item1) && comparer.System$Collections$IEqualityComparer$equals(this.Item2, objTuple.Item2) && comparer.System$Collections$IEqualityComparer$equals(this.Item3, objTuple.Item3);
            },
            System$IComparable$compareTo: function (other) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$3(T1,T2,T3)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                return this.compareTo(System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$3(T1,T2,T3)), System.ValueTuple$3(T1,T2,T3))));
            },
            compareTo: function (other) {
                var c = new (System.Collections.Generic.Comparer$1(T1))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item1, other.Item1);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T2))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item2, other.Item2);
                if (c !== 0) {
                    return c;
                }

                return new (System.Collections.Generic.Comparer$1(T3))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item3, other.Item3);
            },
            System$Collections$IStructuralComparable$CompareTo: function (other, comparer) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$3(T1,T2,T3)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$3(T1,T2,T3)), System.ValueTuple$3(T1,T2,T3)));

                var c = comparer.System$Collections$IComparer$compare(this.Item1, objTuple.Item1);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item2, objTuple.Item2);
                if (c !== 0) {
                    return c;
                }

                return comparer.System$Collections$IComparer$compare(this.Item3, objTuple.Item3);
            },
            getHashCode: function () {
                return System.ValueTuple.CombineHashCodes$1(System.ValueTuple$3(T1,T2,T3).s_t1Comparer.getHashCode2(this.Item1), System.ValueTuple$3(T1,T2,T3).s_t2Comparer.getHashCode2(this.Item2), System.ValueTuple$3(T1,T2,T3).s_t3Comparer.getHashCode2(this.Item3));
            },
            System$Collections$IStructuralEquatable$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            System$ITupleInternal$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            GetHashCodeCore: function (comparer) {
                return System.ValueTuple.CombineHashCodes$1(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item1), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item2), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item3));
            },
            toString: function () {
                return "(" + ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ")";
            },
            System$ITupleInternal$ToStringEnd: function () {
                return ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ")";
            },
            $clone: function (to) {
                var s = to || new (System.ValueTuple$3(T1,T2,T3))();
                s.Item1 = this.Item1;
                s.Item2 = this.Item2;
                s.Item3 = this.Item3;
                return s;
            }
        }
    }; });

    Bridge.define("System.ValueTuple$4", function (T1, T2, T3, T4) { return {
        inherits: function () { return [System.IEquatable$1(System.ValueTuple$4(T1,T2,T3,T4)),System.Collections.IStructuralEquatable,System.Collections.IStructuralComparable,System.IComparable,System.IComparable$1(System.ValueTuple$4(T1,T2,T3,T4)),System.ITupleInternal]; },
        $kind: "struct",
        statics: {
            fields: {
                s_t1Comparer: null,
                s_t2Comparer: null,
                s_t3Comparer: null,
                s_t4Comparer: null
            },
            ctors: {
                init: function () {
                    this.s_t1Comparer = System.Collections.Generic.EqualityComparer$1(T1).def;
                    this.s_t2Comparer = System.Collections.Generic.EqualityComparer$1(T2).def;
                    this.s_t3Comparer = System.Collections.Generic.EqualityComparer$1(T3).def;
                    this.s_t4Comparer = System.Collections.Generic.EqualityComparer$1(T4).def;
                }
            },
            methods: {
                getDefaultValue: function () { return new (System.ValueTuple$4(T1,T2,T3,T4))(); }
            }
        },
        fields: {
            Item1: Bridge.getDefaultValue(T1),
            Item2: Bridge.getDefaultValue(T2),
            Item3: Bridge.getDefaultValue(T3),
            Item4: Bridge.getDefaultValue(T4)
        },
        props: {
            System$ITupleInternal$Size: {
                get: function () {
                    return 4;
                }
            }
        },
        alias: [
            "equalsT", "System$IEquatable$1$System$ValueTuple$4$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$" + Bridge.getTypeAlias(T4) + "$equalsT",
            "compareTo", ["System$IComparable$1$System$ValueTuple$4$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$" + Bridge.getTypeAlias(T4) + "$compareTo", "System$IComparable$1$compareTo"]
        ],
        ctors: {
            $ctor1: function (item1, item2, item3, item4) {
                this.$initialize();
                this.Item1 = item1;
                this.Item2 = item2;
                this.Item3 = item3;
                this.Item4 = item4;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                return Bridge.is(obj, System.ValueTuple$4(T1,T2,T3,T4)) && this.equalsT(System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, System.ValueTuple$4(T1,T2,T3,T4)), System.ValueTuple$4(T1,T2,T3,T4))));
            },
            equalsT: function (other) {
                return System.ValueTuple$4(T1,T2,T3,T4).s_t1Comparer.equals2(this.Item1, other.Item1) && System.ValueTuple$4(T1,T2,T3,T4).s_t2Comparer.equals2(this.Item2, other.Item2) && System.ValueTuple$4(T1,T2,T3,T4).s_t3Comparer.equals2(this.Item3, other.Item3) && System.ValueTuple$4(T1,T2,T3,T4).s_t4Comparer.equals2(this.Item4, other.Item4);
            },
            System$Collections$IStructuralEquatable$Equals: function (other, comparer) {
                if (other == null || !(Bridge.is(other, System.ValueTuple$4(T1,T2,T3,T4)))) {
                    return false;
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$4(T1,T2,T3,T4)), System.ValueTuple$4(T1,T2,T3,T4)));

                return comparer.System$Collections$IEqualityComparer$equals(this.Item1, objTuple.Item1) && comparer.System$Collections$IEqualityComparer$equals(this.Item2, objTuple.Item2) && comparer.System$Collections$IEqualityComparer$equals(this.Item3, objTuple.Item3) && comparer.System$Collections$IEqualityComparer$equals(this.Item4, objTuple.Item4);
            },
            System$IComparable$compareTo: function (other) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$4(T1,T2,T3,T4)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                return this.compareTo(System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$4(T1,T2,T3,T4)), System.ValueTuple$4(T1,T2,T3,T4))));
            },
            compareTo: function (other) {
                var c = new (System.Collections.Generic.Comparer$1(T1))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item1, other.Item1);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T2))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item2, other.Item2);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T3))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item3, other.Item3);
                if (c !== 0) {
                    return c;
                }

                return new (System.Collections.Generic.Comparer$1(T4))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item4, other.Item4);
            },
            System$Collections$IStructuralComparable$CompareTo: function (other, comparer) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$4(T1,T2,T3,T4)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$4(T1,T2,T3,T4)), System.ValueTuple$4(T1,T2,T3,T4)));

                var c = comparer.System$Collections$IComparer$compare(this.Item1, objTuple.Item1);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item2, objTuple.Item2);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item3, objTuple.Item3);
                if (c !== 0) {
                    return c;
                }

                return comparer.System$Collections$IComparer$compare(this.Item4, objTuple.Item4);
            },
            getHashCode: function () {
                return System.ValueTuple.CombineHashCodes$2(System.ValueTuple$4(T1,T2,T3,T4).s_t1Comparer.getHashCode2(this.Item1), System.ValueTuple$4(T1,T2,T3,T4).s_t2Comparer.getHashCode2(this.Item2), System.ValueTuple$4(T1,T2,T3,T4).s_t3Comparer.getHashCode2(this.Item3), System.ValueTuple$4(T1,T2,T3,T4).s_t4Comparer.getHashCode2(this.Item4));
            },
            System$Collections$IStructuralEquatable$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            System$ITupleInternal$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            GetHashCodeCore: function (comparer) {
                return System.ValueTuple.CombineHashCodes$2(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item1), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item2), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item3), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item4));
            },
            toString: function () {
                return "(" + ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ")";
            },
            System$ITupleInternal$ToStringEnd: function () {
                return ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ")";
            },
            $clone: function (to) {
                var s = to || new (System.ValueTuple$4(T1,T2,T3,T4))();
                s.Item1 = this.Item1;
                s.Item2 = this.Item2;
                s.Item3 = this.Item3;
                s.Item4 = this.Item4;
                return s;
            }
        }
    }; });

    Bridge.define("System.ValueTuple$5", function (T1, T2, T3, T4, T5) { return {
        inherits: function () { return [System.IEquatable$1(System.ValueTuple$5(T1,T2,T3,T4,T5)),System.Collections.IStructuralEquatable,System.Collections.IStructuralComparable,System.IComparable,System.IComparable$1(System.ValueTuple$5(T1,T2,T3,T4,T5)),System.ITupleInternal]; },
        $kind: "struct",
        statics: {
            fields: {
                s_t1Comparer: null,
                s_t2Comparer: null,
                s_t3Comparer: null,
                s_t4Comparer: null,
                s_t5Comparer: null
            },
            ctors: {
                init: function () {
                    this.s_t1Comparer = System.Collections.Generic.EqualityComparer$1(T1).def;
                    this.s_t2Comparer = System.Collections.Generic.EqualityComparer$1(T2).def;
                    this.s_t3Comparer = System.Collections.Generic.EqualityComparer$1(T3).def;
                    this.s_t4Comparer = System.Collections.Generic.EqualityComparer$1(T4).def;
                    this.s_t5Comparer = System.Collections.Generic.EqualityComparer$1(T5).def;
                }
            },
            methods: {
                getDefaultValue: function () { return new (System.ValueTuple$5(T1,T2,T3,T4,T5))(); }
            }
        },
        fields: {
            Item1: Bridge.getDefaultValue(T1),
            Item2: Bridge.getDefaultValue(T2),
            Item3: Bridge.getDefaultValue(T3),
            Item4: Bridge.getDefaultValue(T4),
            Item5: Bridge.getDefaultValue(T5)
        },
        props: {
            System$ITupleInternal$Size: {
                get: function () {
                    return 5;
                }
            }
        },
        alias: [
            "equalsT", "System$IEquatable$1$System$ValueTuple$5$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$" + Bridge.getTypeAlias(T4) + "$" + Bridge.getTypeAlias(T5) + "$equalsT",
            "compareTo", ["System$IComparable$1$System$ValueTuple$5$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$" + Bridge.getTypeAlias(T4) + "$" + Bridge.getTypeAlias(T5) + "$compareTo", "System$IComparable$1$compareTo"]
        ],
        ctors: {
            $ctor1: function (item1, item2, item3, item4, item5) {
                this.$initialize();
                this.Item1 = item1;
                this.Item2 = item2;
                this.Item3 = item3;
                this.Item4 = item4;
                this.Item5 = item5;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                return Bridge.is(obj, System.ValueTuple$5(T1,T2,T3,T4,T5)) && this.equalsT(System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, System.ValueTuple$5(T1,T2,T3,T4,T5)), System.ValueTuple$5(T1,T2,T3,T4,T5))));
            },
            equalsT: function (other) {
                return System.ValueTuple$5(T1,T2,T3,T4,T5).s_t1Comparer.equals2(this.Item1, other.Item1) && System.ValueTuple$5(T1,T2,T3,T4,T5).s_t2Comparer.equals2(this.Item2, other.Item2) && System.ValueTuple$5(T1,T2,T3,T4,T5).s_t3Comparer.equals2(this.Item3, other.Item3) && System.ValueTuple$5(T1,T2,T3,T4,T5).s_t4Comparer.equals2(this.Item4, other.Item4) && System.ValueTuple$5(T1,T2,T3,T4,T5).s_t5Comparer.equals2(this.Item5, other.Item5);
            },
            System$Collections$IStructuralEquatable$Equals: function (other, comparer) {
                if (other == null || !(Bridge.is(other, System.ValueTuple$5(T1,T2,T3,T4,T5)))) {
                    return false;
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$5(T1,T2,T3,T4,T5)), System.ValueTuple$5(T1,T2,T3,T4,T5)));

                return comparer.System$Collections$IEqualityComparer$equals(this.Item1, objTuple.Item1) && comparer.System$Collections$IEqualityComparer$equals(this.Item2, objTuple.Item2) && comparer.System$Collections$IEqualityComparer$equals(this.Item3, objTuple.Item3) && comparer.System$Collections$IEqualityComparer$equals(this.Item4, objTuple.Item4) && comparer.System$Collections$IEqualityComparer$equals(this.Item5, objTuple.Item5);
            },
            System$IComparable$compareTo: function (other) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$5(T1,T2,T3,T4,T5)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                return this.compareTo(System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$5(T1,T2,T3,T4,T5)), System.ValueTuple$5(T1,T2,T3,T4,T5))));
            },
            compareTo: function (other) {
                var c = new (System.Collections.Generic.Comparer$1(T1))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item1, other.Item1);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T2))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item2, other.Item2);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T3))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item3, other.Item3);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T4))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item4, other.Item4);
                if (c !== 0) {
                    return c;
                }

                return new (System.Collections.Generic.Comparer$1(T5))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item5, other.Item5);
            },
            System$Collections$IStructuralComparable$CompareTo: function (other, comparer) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$5(T1,T2,T3,T4,T5)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$5(T1,T2,T3,T4,T5)), System.ValueTuple$5(T1,T2,T3,T4,T5)));

                var c = comparer.System$Collections$IComparer$compare(this.Item1, objTuple.Item1);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item2, objTuple.Item2);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item3, objTuple.Item3);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item4, objTuple.Item4);
                if (c !== 0) {
                    return c;
                }

                return comparer.System$Collections$IComparer$compare(this.Item5, objTuple.Item5);
            },
            getHashCode: function () {
                return System.ValueTuple.CombineHashCodes$3(System.ValueTuple$5(T1,T2,T3,T4,T5).s_t1Comparer.getHashCode2(this.Item1), System.ValueTuple$5(T1,T2,T3,T4,T5).s_t2Comparer.getHashCode2(this.Item2), System.ValueTuple$5(T1,T2,T3,T4,T5).s_t3Comparer.getHashCode2(this.Item3), System.ValueTuple$5(T1,T2,T3,T4,T5).s_t4Comparer.getHashCode2(this.Item4), System.ValueTuple$5(T1,T2,T3,T4,T5).s_t5Comparer.getHashCode2(this.Item5));
            },
            System$Collections$IStructuralEquatable$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            System$ITupleInternal$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            GetHashCodeCore: function (comparer) {
                return System.ValueTuple.CombineHashCodes$3(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item1), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item2), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item3), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item4), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item5));
            },
            toString: function () {
                return "(" + ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ", " + ((this.Item5 != null ? Bridge.toString(this.Item5) : null) || "") + ")";
            },
            System$ITupleInternal$ToStringEnd: function () {
                return ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ", " + ((this.Item5 != null ? Bridge.toString(this.Item5) : null) || "") + ")";
            },
            $clone: function (to) {
                var s = to || new (System.ValueTuple$5(T1,T2,T3,T4,T5))();
                s.Item1 = this.Item1;
                s.Item2 = this.Item2;
                s.Item3 = this.Item3;
                s.Item4 = this.Item4;
                s.Item5 = this.Item5;
                return s;
            }
        }
    }; });

    Bridge.define("System.ValueTuple$6", function (T1, T2, T3, T4, T5, T6) { return {
        inherits: function () { return [System.IEquatable$1(System.ValueTuple$6(T1,T2,T3,T4,T5,T6)),System.Collections.IStructuralEquatable,System.Collections.IStructuralComparable,System.IComparable,System.IComparable$1(System.ValueTuple$6(T1,T2,T3,T4,T5,T6)),System.ITupleInternal]; },
        $kind: "struct",
        statics: {
            fields: {
                s_t1Comparer: null,
                s_t2Comparer: null,
                s_t3Comparer: null,
                s_t4Comparer: null,
                s_t5Comparer: null,
                s_t6Comparer: null
            },
            ctors: {
                init: function () {
                    this.s_t1Comparer = System.Collections.Generic.EqualityComparer$1(T1).def;
                    this.s_t2Comparer = System.Collections.Generic.EqualityComparer$1(T2).def;
                    this.s_t3Comparer = System.Collections.Generic.EqualityComparer$1(T3).def;
                    this.s_t4Comparer = System.Collections.Generic.EqualityComparer$1(T4).def;
                    this.s_t5Comparer = System.Collections.Generic.EqualityComparer$1(T5).def;
                    this.s_t6Comparer = System.Collections.Generic.EqualityComparer$1(T6).def;
                }
            },
            methods: {
                getDefaultValue: function () { return new (System.ValueTuple$6(T1,T2,T3,T4,T5,T6))(); }
            }
        },
        fields: {
            Item1: Bridge.getDefaultValue(T1),
            Item2: Bridge.getDefaultValue(T2),
            Item3: Bridge.getDefaultValue(T3),
            Item4: Bridge.getDefaultValue(T4),
            Item5: Bridge.getDefaultValue(T5),
            Item6: Bridge.getDefaultValue(T6)
        },
        props: {
            System$ITupleInternal$Size: {
                get: function () {
                    return 6;
                }
            }
        },
        alias: [
            "equalsT", "System$IEquatable$1$System$ValueTuple$6$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$" + Bridge.getTypeAlias(T4) + "$" + Bridge.getTypeAlias(T5) + "$" + Bridge.getTypeAlias(T6) + "$equalsT",
            "compareTo", ["System$IComparable$1$System$ValueTuple$6$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$" + Bridge.getTypeAlias(T4) + "$" + Bridge.getTypeAlias(T5) + "$" + Bridge.getTypeAlias(T6) + "$compareTo", "System$IComparable$1$compareTo"]
        ],
        ctors: {
            $ctor1: function (item1, item2, item3, item4, item5, item6) {
                this.$initialize();
                this.Item1 = item1;
                this.Item2 = item2;
                this.Item3 = item3;
                this.Item4 = item4;
                this.Item5 = item5;
                this.Item6 = item6;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                return Bridge.is(obj, System.ValueTuple$6(T1,T2,T3,T4,T5,T6)) && this.equalsT(System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, System.ValueTuple$6(T1,T2,T3,T4,T5,T6)), System.ValueTuple$6(T1,T2,T3,T4,T5,T6))));
            },
            equalsT: function (other) {
                return System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t1Comparer.equals2(this.Item1, other.Item1) && System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t2Comparer.equals2(this.Item2, other.Item2) && System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t3Comparer.equals2(this.Item3, other.Item3) && System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t4Comparer.equals2(this.Item4, other.Item4) && System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t5Comparer.equals2(this.Item5, other.Item5) && System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t6Comparer.equals2(this.Item6, other.Item6);
            },
            System$Collections$IStructuralEquatable$Equals: function (other, comparer) {
                if (other == null || !(Bridge.is(other, System.ValueTuple$6(T1,T2,T3,T4,T5,T6)))) {
                    return false;
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$6(T1,T2,T3,T4,T5,T6)), System.ValueTuple$6(T1,T2,T3,T4,T5,T6)));

                return comparer.System$Collections$IEqualityComparer$equals(this.Item1, objTuple.Item1) && comparer.System$Collections$IEqualityComparer$equals(this.Item2, objTuple.Item2) && comparer.System$Collections$IEqualityComparer$equals(this.Item3, objTuple.Item3) && comparer.System$Collections$IEqualityComparer$equals(this.Item4, objTuple.Item4) && comparer.System$Collections$IEqualityComparer$equals(this.Item5, objTuple.Item5) && comparer.System$Collections$IEqualityComparer$equals(this.Item6, objTuple.Item6);
            },
            System$IComparable$compareTo: function (other) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$6(T1,T2,T3,T4,T5,T6)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                return this.compareTo(System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$6(T1,T2,T3,T4,T5,T6)), System.ValueTuple$6(T1,T2,T3,T4,T5,T6))));
            },
            compareTo: function (other) {
                var c = new (System.Collections.Generic.Comparer$1(T1))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item1, other.Item1);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T2))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item2, other.Item2);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T3))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item3, other.Item3);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T4))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item4, other.Item4);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T5))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item5, other.Item5);
                if (c !== 0) {
                    return c;
                }

                return new (System.Collections.Generic.Comparer$1(T6))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item6, other.Item6);
            },
            System$Collections$IStructuralComparable$CompareTo: function (other, comparer) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$6(T1,T2,T3,T4,T5,T6)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$6(T1,T2,T3,T4,T5,T6)), System.ValueTuple$6(T1,T2,T3,T4,T5,T6)));

                var c = comparer.System$Collections$IComparer$compare(this.Item1, objTuple.Item1);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item2, objTuple.Item2);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item3, objTuple.Item3);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item4, objTuple.Item4);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item5, objTuple.Item5);
                if (c !== 0) {
                    return c;
                }

                return comparer.System$Collections$IComparer$compare(this.Item6, objTuple.Item6);
            },
            getHashCode: function () {
                return System.ValueTuple.CombineHashCodes$4(System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t1Comparer.getHashCode2(this.Item1), System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t2Comparer.getHashCode2(this.Item2), System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t3Comparer.getHashCode2(this.Item3), System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t4Comparer.getHashCode2(this.Item4), System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t5Comparer.getHashCode2(this.Item5), System.ValueTuple$6(T1,T2,T3,T4,T5,T6).s_t6Comparer.getHashCode2(this.Item6));
            },
            System$Collections$IStructuralEquatable$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            System$ITupleInternal$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            GetHashCodeCore: function (comparer) {
                return System.ValueTuple.CombineHashCodes$4(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item1), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item2), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item3), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item4), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item5), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item6));
            },
            toString: function () {
                return "(" + ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ", " + ((this.Item5 != null ? Bridge.toString(this.Item5) : null) || "") + ", " + ((this.Item6 != null ? Bridge.toString(this.Item6) : null) || "") + ")";
            },
            System$ITupleInternal$ToStringEnd: function () {
                return ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ", " + ((this.Item5 != null ? Bridge.toString(this.Item5) : null) || "") + ", " + ((this.Item6 != null ? Bridge.toString(this.Item6) : null) || "") + ")";
            },
            $clone: function (to) {
                var s = to || new (System.ValueTuple$6(T1,T2,T3,T4,T5,T6))();
                s.Item1 = this.Item1;
                s.Item2 = this.Item2;
                s.Item3 = this.Item3;
                s.Item4 = this.Item4;
                s.Item5 = this.Item5;
                s.Item6 = this.Item6;
                return s;
            }
        }
    }; });

    Bridge.define("System.ValueTuple$7", function (T1, T2, T3, T4, T5, T6, T7) { return {
        inherits: function () { return [System.IEquatable$1(System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)),System.Collections.IStructuralEquatable,System.Collections.IStructuralComparable,System.IComparable,System.IComparable$1(System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)),System.ITupleInternal]; },
        $kind: "struct",
        statics: {
            fields: {
                s_t1Comparer: null,
                s_t2Comparer: null,
                s_t3Comparer: null,
                s_t4Comparer: null,
                s_t5Comparer: null,
                s_t6Comparer: null,
                s_t7Comparer: null
            },
            ctors: {
                init: function () {
                    this.s_t1Comparer = System.Collections.Generic.EqualityComparer$1(T1).def;
                    this.s_t2Comparer = System.Collections.Generic.EqualityComparer$1(T2).def;
                    this.s_t3Comparer = System.Collections.Generic.EqualityComparer$1(T3).def;
                    this.s_t4Comparer = System.Collections.Generic.EqualityComparer$1(T4).def;
                    this.s_t5Comparer = System.Collections.Generic.EqualityComparer$1(T5).def;
                    this.s_t6Comparer = System.Collections.Generic.EqualityComparer$1(T6).def;
                    this.s_t7Comparer = System.Collections.Generic.EqualityComparer$1(T7).def;
                }
            },
            methods: {
                getDefaultValue: function () { return new (System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7))(); }
            }
        },
        fields: {
            Item1: Bridge.getDefaultValue(T1),
            Item2: Bridge.getDefaultValue(T2),
            Item3: Bridge.getDefaultValue(T3),
            Item4: Bridge.getDefaultValue(T4),
            Item5: Bridge.getDefaultValue(T5),
            Item6: Bridge.getDefaultValue(T6),
            Item7: Bridge.getDefaultValue(T7)
        },
        props: {
            System$ITupleInternal$Size: {
                get: function () {
                    return 7;
                }
            }
        },
        alias: [
            "equalsT", "System$IEquatable$1$System$ValueTuple$7$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$" + Bridge.getTypeAlias(T4) + "$" + Bridge.getTypeAlias(T5) + "$" + Bridge.getTypeAlias(T6) + "$" + Bridge.getTypeAlias(T7) + "$equalsT",
            "compareTo", ["System$IComparable$1$System$ValueTuple$7$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$" + Bridge.getTypeAlias(T4) + "$" + Bridge.getTypeAlias(T5) + "$" + Bridge.getTypeAlias(T6) + "$" + Bridge.getTypeAlias(T7) + "$compareTo", "System$IComparable$1$compareTo"]
        ],
        ctors: {
            $ctor1: function (item1, item2, item3, item4, item5, item6, item7) {
                this.$initialize();
                this.Item1 = item1;
                this.Item2 = item2;
                this.Item3 = item3;
                this.Item4 = item4;
                this.Item5 = item5;
                this.Item6 = item6;
                this.Item7 = item7;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                return Bridge.is(obj, System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)) && this.equalsT(System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)), System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7))));
            },
            equalsT: function (other) {
                return System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t1Comparer.equals2(this.Item1, other.Item1) && System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t2Comparer.equals2(this.Item2, other.Item2) && System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t3Comparer.equals2(this.Item3, other.Item3) && System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t4Comparer.equals2(this.Item4, other.Item4) && System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t5Comparer.equals2(this.Item5, other.Item5) && System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t6Comparer.equals2(this.Item6, other.Item6) && System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t7Comparer.equals2(this.Item7, other.Item7);
            },
            System$Collections$IStructuralEquatable$Equals: function (other, comparer) {
                if (other == null || !(Bridge.is(other, System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)))) {
                    return false;
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)), System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)));

                return comparer.System$Collections$IEqualityComparer$equals(this.Item1, objTuple.Item1) && comparer.System$Collections$IEqualityComparer$equals(this.Item2, objTuple.Item2) && comparer.System$Collections$IEqualityComparer$equals(this.Item3, objTuple.Item3) && comparer.System$Collections$IEqualityComparer$equals(this.Item4, objTuple.Item4) && comparer.System$Collections$IEqualityComparer$equals(this.Item5, objTuple.Item5) && comparer.System$Collections$IEqualityComparer$equals(this.Item6, objTuple.Item6) && comparer.System$Collections$IEqualityComparer$equals(this.Item7, objTuple.Item7);
            },
            System$IComparable$compareTo: function (other) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                return this.compareTo(System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)), System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7))));
            },
            compareTo: function (other) {
                var c = new (System.Collections.Generic.Comparer$1(T1))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item1, other.Item1);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T2))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item2, other.Item2);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T3))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item3, other.Item3);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T4))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item4, other.Item4);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T5))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item5, other.Item5);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T6))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item6, other.Item6);
                if (c !== 0) {
                    return c;
                }

                return new (System.Collections.Generic.Comparer$1(T7))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item7, other.Item7);
            },
            System$Collections$IStructuralComparable$CompareTo: function (other, comparer) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)), System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7)));

                var c = comparer.System$Collections$IComparer$compare(this.Item1, objTuple.Item1);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item2, objTuple.Item2);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item3, objTuple.Item3);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item4, objTuple.Item4);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item5, objTuple.Item5);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item6, objTuple.Item6);
                if (c !== 0) {
                    return c;
                }

                return comparer.System$Collections$IComparer$compare(this.Item7, objTuple.Item7);
            },
            getHashCode: function () {
                return System.ValueTuple.CombineHashCodes$5(System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t1Comparer.getHashCode2(this.Item1), System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t2Comparer.getHashCode2(this.Item2), System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t3Comparer.getHashCode2(this.Item3), System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t4Comparer.getHashCode2(this.Item4), System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t5Comparer.getHashCode2(this.Item5), System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t6Comparer.getHashCode2(this.Item6), System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7).s_t7Comparer.getHashCode2(this.Item7));
            },
            System$Collections$IStructuralEquatable$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            System$ITupleInternal$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            GetHashCodeCore: function (comparer) {
                return System.ValueTuple.CombineHashCodes$5(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item1), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item2), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item3), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item4), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item5), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item6), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item7));
            },
            toString: function () {
                return "(" + ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ", " + ((this.Item5 != null ? Bridge.toString(this.Item5) : null) || "") + ", " + ((this.Item6 != null ? Bridge.toString(this.Item6) : null) || "") + ", " + ((this.Item7 != null ? Bridge.toString(this.Item7) : null) || "") + ")";
            },
            System$ITupleInternal$ToStringEnd: function () {
                return ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ", " + ((this.Item5 != null ? Bridge.toString(this.Item5) : null) || "") + ", " + ((this.Item6 != null ? Bridge.toString(this.Item6) : null) || "") + ", " + ((this.Item7 != null ? Bridge.toString(this.Item7) : null) || "") + ")";
            },
            $clone: function (to) {
                var s = to || new (System.ValueTuple$7(T1,T2,T3,T4,T5,T6,T7))();
                s.Item1 = this.Item1;
                s.Item2 = this.Item2;
                s.Item3 = this.Item3;
                s.Item4 = this.Item4;
                s.Item5 = this.Item5;
                s.Item6 = this.Item6;
                s.Item7 = this.Item7;
                return s;
            }
        }
    }; });

    Bridge.define("System.ValueTuple$8", function (T1, T2, T3, T4, T5, T6, T7, TRest) { return {
        inherits: function () { return [System.IEquatable$1(System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)),System.Collections.IStructuralEquatable,System.Collections.IStructuralComparable,System.IComparable,System.IComparable$1(System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)),System.ITupleInternal]; },
        $kind: "struct",
        statics: {
            fields: {
                s_t1Comparer: null,
                s_t2Comparer: null,
                s_t3Comparer: null,
                s_t4Comparer: null,
                s_t5Comparer: null,
                s_t6Comparer: null,
                s_t7Comparer: null,
                s_tRestComparer: null
            },
            ctors: {
                init: function () {
                    this.s_t1Comparer = System.Collections.Generic.EqualityComparer$1(T1).def;
                    this.s_t2Comparer = System.Collections.Generic.EqualityComparer$1(T2).def;
                    this.s_t3Comparer = System.Collections.Generic.EqualityComparer$1(T3).def;
                    this.s_t4Comparer = System.Collections.Generic.EqualityComparer$1(T4).def;
                    this.s_t5Comparer = System.Collections.Generic.EqualityComparer$1(T5).def;
                    this.s_t6Comparer = System.Collections.Generic.EqualityComparer$1(T6).def;
                    this.s_t7Comparer = System.Collections.Generic.EqualityComparer$1(T7).def;
                    this.s_tRestComparer = System.Collections.Generic.EqualityComparer$1(TRest).def;
                }
            },
            methods: {
                getDefaultValue: function () { return new (System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest))(); }
            }
        },
        fields: {
            Item1: Bridge.getDefaultValue(T1),
            Item2: Bridge.getDefaultValue(T2),
            Item3: Bridge.getDefaultValue(T3),
            Item4: Bridge.getDefaultValue(T4),
            Item5: Bridge.getDefaultValue(T5),
            Item6: Bridge.getDefaultValue(T6),
            Item7: Bridge.getDefaultValue(T7),
            Rest: Bridge.getDefaultValue(TRest)
        },
        props: {
            System$ITupleInternal$Size: {
                get: function () {
                    var rest = Bridge.as(this.Rest, System.ITupleInternal);
                    return rest == null ? 8 : ((7 + rest.System$ITupleInternal$Size) | 0);
                }
            }
        },
        alias: [
            "equalsT", "System$IEquatable$1$System$ValueTuple$8$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$" + Bridge.getTypeAlias(T4) + "$" + Bridge.getTypeAlias(T5) + "$" + Bridge.getTypeAlias(T6) + "$" + Bridge.getTypeAlias(T7) + "$" + Bridge.getTypeAlias(TRest) + "$equalsT",
            "compareTo", ["System$IComparable$1$System$ValueTuple$8$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$" + Bridge.getTypeAlias(T4) + "$" + Bridge.getTypeAlias(T5) + "$" + Bridge.getTypeAlias(T6) + "$" + Bridge.getTypeAlias(T7) + "$" + Bridge.getTypeAlias(TRest) + "$compareTo", "System$IComparable$1$compareTo"]
        ],
        ctors: {
            $ctor1: function (item1, item2, item3, item4, item5, item6, item7, rest) {
                this.$initialize();
                if (!(Bridge.is(rest, System.ITupleInternal))) {
                    throw new System.ArgumentException.$ctor1(System.SR.ArgumentException_ValueTupleLastArgumentNotAValueTuple);
                }

                this.Item1 = item1;
                this.Item2 = item2;
                this.Item3 = item3;
                this.Item4 = item4;
                this.Item5 = item5;
                this.Item6 = item6;
                this.Item7 = item7;
                this.Rest = rest;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                return Bridge.is(obj, System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)) && this.equalsT(System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest))));
            },
            equalsT: function (other) {
                return System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t1Comparer.equals2(this.Item1, other.Item1) && System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t2Comparer.equals2(this.Item2, other.Item2) && System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t3Comparer.equals2(this.Item3, other.Item3) && System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t4Comparer.equals2(this.Item4, other.Item4) && System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t5Comparer.equals2(this.Item5, other.Item5) && System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t6Comparer.equals2(this.Item6, other.Item6) && System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t7Comparer.equals2(this.Item7, other.Item7) && System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_tRestComparer.equals2(this.Rest, other.Rest);
            },
            System$Collections$IStructuralEquatable$Equals: function (other, comparer) {
                if (other == null || !(Bridge.is(other, System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)))) {
                    return false;
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)));

                return comparer.System$Collections$IEqualityComparer$equals(this.Item1, objTuple.Item1) && comparer.System$Collections$IEqualityComparer$equals(this.Item2, objTuple.Item2) && comparer.System$Collections$IEqualityComparer$equals(this.Item3, objTuple.Item3) && comparer.System$Collections$IEqualityComparer$equals(this.Item4, objTuple.Item4) && comparer.System$Collections$IEqualityComparer$equals(this.Item5, objTuple.Item5) && comparer.System$Collections$IEqualityComparer$equals(this.Item6, objTuple.Item6) && comparer.System$Collections$IEqualityComparer$equals(this.Item7, objTuple.Item7) && comparer.System$Collections$IEqualityComparer$equals(this.Rest, objTuple.Rest);
            },
            System$IComparable$compareTo: function (other) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                return this.compareTo(System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest))));
            },
            compareTo: function (other) {
                var c = new (System.Collections.Generic.Comparer$1(T1))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item1, other.Item1);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T2))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item2, other.Item2);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T3))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item3, other.Item3);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T4))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item4, other.Item4);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T5))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item5, other.Item5);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T6))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item6, other.Item6);
                if (c !== 0) {
                    return c;
                }

                c = new (System.Collections.Generic.Comparer$1(T7))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Item7, other.Item7);
                if (c !== 0) {
                    return c;
                }

                return new (System.Collections.Generic.Comparer$1(TRest))(System.Collections.Generic.Comparer$1.$default.fn).compare(this.Rest, other.Rest);
            },
            System$Collections$IStructuralComparable$CompareTo: function (other, comparer) {
                if (other == null) {
                    return 1;
                }

                if (!(Bridge.is(other, System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)))) {
                    throw new System.ArgumentException.$ctor3(System.SR.ArgumentException_ValueTupleIncorrectType, "other");
                }

                var objTuple = System.Nullable.getValue(Bridge.cast(Bridge.unbox(other, System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest)));

                var c = comparer.System$Collections$IComparer$compare(this.Item1, objTuple.Item1);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item2, objTuple.Item2);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item3, objTuple.Item3);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item4, objTuple.Item4);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item5, objTuple.Item5);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item6, objTuple.Item6);
                if (c !== 0) {
                    return c;
                }

                c = comparer.System$Collections$IComparer$compare(this.Item7, objTuple.Item7);
                if (c !== 0) {
                    return c;
                }

                return comparer.System$Collections$IComparer$compare(this.Rest, objTuple.Rest);
            },
            getHashCode: function () {
                var rest = Bridge.as(this.Rest, System.ITupleInternal);
                if (rest == null) {
                    return System.ValueTuple.CombineHashCodes$5(System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t1Comparer.getHashCode2(this.Item1), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t2Comparer.getHashCode2(this.Item2), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t3Comparer.getHashCode2(this.Item3), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t4Comparer.getHashCode2(this.Item4), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t5Comparer.getHashCode2(this.Item5), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t6Comparer.getHashCode2(this.Item6), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t7Comparer.getHashCode2(this.Item7));
                }

                var size = rest.System$ITupleInternal$Size;
                if (size >= 8) {
                    return Bridge.getHashCode(rest);
                }

                var k = (8 - size) | 0;
                switch (k) {
                    case 1: 
                        return System.ValueTuple.CombineHashCodes(System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t7Comparer.getHashCode2(this.Item7), Bridge.getHashCode(rest));
                    case 2: 
                        return System.ValueTuple.CombineHashCodes$1(System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t6Comparer.getHashCode2(this.Item6), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t7Comparer.getHashCode2(this.Item7), Bridge.getHashCode(rest));
                    case 3: 
                        return System.ValueTuple.CombineHashCodes$2(System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t5Comparer.getHashCode2(this.Item5), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t6Comparer.getHashCode2(this.Item6), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t7Comparer.getHashCode2(this.Item7), Bridge.getHashCode(rest));
                    case 4: 
                        return System.ValueTuple.CombineHashCodes$3(System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t4Comparer.getHashCode2(this.Item4), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t5Comparer.getHashCode2(this.Item5), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t6Comparer.getHashCode2(this.Item6), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t7Comparer.getHashCode2(this.Item7), Bridge.getHashCode(rest));
                    case 5: 
                        return System.ValueTuple.CombineHashCodes$4(System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t3Comparer.getHashCode2(this.Item3), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t4Comparer.getHashCode2(this.Item4), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t5Comparer.getHashCode2(this.Item5), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t6Comparer.getHashCode2(this.Item6), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t7Comparer.getHashCode2(this.Item7), Bridge.getHashCode(rest));
                    case 6: 
                        return System.ValueTuple.CombineHashCodes$5(System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t2Comparer.getHashCode2(this.Item2), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t3Comparer.getHashCode2(this.Item3), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t4Comparer.getHashCode2(this.Item4), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t5Comparer.getHashCode2(this.Item5), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t6Comparer.getHashCode2(this.Item6), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t7Comparer.getHashCode2(this.Item7), Bridge.getHashCode(rest));
                    case 7: 
                    case 8: 
                        return System.ValueTuple.CombineHashCodes$6(System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t1Comparer.getHashCode2(this.Item1), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t2Comparer.getHashCode2(this.Item2), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t3Comparer.getHashCode2(this.Item3), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t4Comparer.getHashCode2(this.Item4), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t5Comparer.getHashCode2(this.Item5), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t6Comparer.getHashCode2(this.Item6), System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest).s_t7Comparer.getHashCode2(this.Item7), Bridge.getHashCode(rest));
                }

                return -1;
            },
            System$Collections$IStructuralEquatable$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            System$ITupleInternal$GetHashCode: function (comparer) {
                return this.GetHashCodeCore(comparer);
            },
            GetHashCodeCore: function (comparer) {
                var rest = Bridge.as(this.Rest, System.ITupleInternal);
                if (rest == null) {
                    return System.ValueTuple.CombineHashCodes$5(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item1), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item2), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item3), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item4), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item5), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item6), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item7));
                }

                var size = rest.System$ITupleInternal$Size;
                if (size >= 8) {
                    return rest.System$ITupleInternal$GetHashCode(comparer);
                }

                var k = (8 - size) | 0;
                switch (k) {
                    case 1: 
                        return System.ValueTuple.CombineHashCodes(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item7), rest.System$ITupleInternal$GetHashCode(comparer));
                    case 2: 
                        return System.ValueTuple.CombineHashCodes$1(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item6), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item7), rest.System$ITupleInternal$GetHashCode(comparer));
                    case 3: 
                        return System.ValueTuple.CombineHashCodes$2(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item5), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item6), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item7), rest.System$ITupleInternal$GetHashCode(comparer));
                    case 4: 
                        return System.ValueTuple.CombineHashCodes$3(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item4), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item5), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item6), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item7), rest.System$ITupleInternal$GetHashCode(comparer));
                    case 5: 
                        return System.ValueTuple.CombineHashCodes$4(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item3), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item4), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item5), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item6), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item7), rest.System$ITupleInternal$GetHashCode(comparer));
                    case 6: 
                        return System.ValueTuple.CombineHashCodes$5(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item2), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item3), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item4), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item5), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item6), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item7), rest.System$ITupleInternal$GetHashCode(comparer));
                    case 7: 
                    case 8: 
                        return System.ValueTuple.CombineHashCodes$6(comparer.System$Collections$IEqualityComparer$getHashCode(this.Item1), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item2), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item3), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item4), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item5), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item6), comparer.System$Collections$IEqualityComparer$getHashCode(this.Item7), rest.System$ITupleInternal$GetHashCode(comparer));
                }

                return -1;
            },
            toString: function () {
                var rest = Bridge.as(this.Rest, System.ITupleInternal);
                if (rest == null) {
                    return "(" + ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ", " + ((this.Item5 != null ? Bridge.toString(this.Item5) : null) || "") + ", " + ((this.Item6 != null ? Bridge.toString(this.Item6) : null) || "") + ", " + ((this.Item7 != null ? Bridge.toString(this.Item7) : null) || "") + ", " + (Bridge.toString(this.Rest) || "") + ")";
                } else {
                    return "(" + ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ", " + ((this.Item5 != null ? Bridge.toString(this.Item5) : null) || "") + ", " + ((this.Item6 != null ? Bridge.toString(this.Item6) : null) || "") + ", " + ((this.Item7 != null ? Bridge.toString(this.Item7) : null) || "") + ", " + (rest.System$ITupleInternal$ToStringEnd() || "");
                }
            },
            System$ITupleInternal$ToStringEnd: function () {
                var rest = Bridge.as(this.Rest, System.ITupleInternal);
                if (rest == null) {
                    return ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ", " + ((this.Item5 != null ? Bridge.toString(this.Item5) : null) || "") + ", " + ((this.Item6 != null ? Bridge.toString(this.Item6) : null) || "") + ", " + ((this.Item7 != null ? Bridge.toString(this.Item7) : null) || "") + ", " + (Bridge.toString(this.Rest) || "") + ")";
                } else {
                    return ((this.Item1 != null ? Bridge.toString(this.Item1) : null) || "") + ", " + ((this.Item2 != null ? Bridge.toString(this.Item2) : null) || "") + ", " + ((this.Item3 != null ? Bridge.toString(this.Item3) : null) || "") + ", " + ((this.Item4 != null ? Bridge.toString(this.Item4) : null) || "") + ", " + ((this.Item5 != null ? Bridge.toString(this.Item5) : null) || "") + ", " + ((this.Item6 != null ? Bridge.toString(this.Item6) : null) || "") + ", " + ((this.Item7 != null ? Bridge.toString(this.Item7) : null) || "") + ", " + (rest.System$ITupleInternal$ToStringEnd() || "");
                }
            },
            $clone: function (to) {
                var s = to || new (System.ValueTuple$8(T1,T2,T3,T4,T5,T6,T7,TRest))();
                s.Item1 = this.Item1;
                s.Item2 = this.Item2;
                s.Item3 = this.Item3;
                s.Item4 = this.Item4;
                s.Item5 = this.Item5;
                s.Item6 = this.Item6;
                s.Item7 = this.Item7;
                s.Rest = this.Rest;
                return s;
            }
        }
    }; });
