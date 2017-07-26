/**
 * Bridge Test library - general C# language tests for Portarelle
 * @version 16.0.0-beta5
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2017 Object.NET, Inc.
 * @compiler Bridge.NET 16.0.0-beta5
 */
Bridge.assembly("Bridge.ClientTest.Batch4", function ($asm, globals) {
    "use strict";

    Bridge.define("Bridge.ClientTest.Batch4.ActivatorTests", {
        methods: {
            Instantiate: function (T) {
                return Bridge.createInstance(T);
            },
            CreateInstanceWithNoArgumentsWorksForClassWithJsonDefaultConstructor: function () {
                var c1 = Bridge.createInstance(System.Object);
                var c2 = Bridge.createInstance(System.Object);
                var c3 = this.Instantiate(System.Object);

                Bridge.Test.NUnit.Assert.AreEqual(Object, c1.constructor);
                Bridge.Test.NUnit.Assert.AreEqual(Object, c2.constructor);
                Bridge.Test.NUnit.Assert.AreEqual(Object, c3.constructor);
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.AppDomainTests", {
        methods: {
            GetAssembliesWorks_SPI_1646: function () {
                // #1646
                //var arr = AppDomain.CurrentDomain.GetAssemblies();
                //Assert.AreEqual(arr.Length, 2);
                //Assert.True(arr.Contains(typeof(int).Assembly), "#1");
                //Assert.True(arr.Contains(typeof(AppDomainTests).Assembly), "#2");
                // These tests below to preserve the test counter, uncomment the tests above when fixed
                Bridge.Test.NUnit.Assert.AreEqual(2, 0);
                Bridge.Test.NUnit.Assert.True(false, "#1");
                Bridge.Test.NUnit.Assert.True(false, "#2");
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.DelegateTests", {
        fields: {
            testField: 0
        },
        ctors: {
            init: function () {
                this.testField = 12;
            }
        },
        methods: {
            AddForCreateWorks: function (x) {
                return ((x + this.testField) | 0);
            },
            CreateWorks: function () {
                // Not C# API
                //var d = (Func<int, int>)Delegate.CreateDelegate(this, new Function("x", "{ return x + this.testField; }"));
                // The call above replace with the call below
                var d = Bridge.Reflection.createDelegate(Bridge.Reflection.getMembers(Bridge.getType(this), 8, 284, "AddForCreateWorks"), this);
                Bridge.Test.NUnit.Assert.AreEqual(25, d(13));
            },
            RemoveDoesNotAffectOriginal_SPI_1563: function () {
                // #1563
                var c = new Bridge.ClientTest.Batch4.DelegateTests.C();
                var a = Bridge.fn.cacheBind(c, c.F1);
                var a2 = Bridge.fn.combine(a, Bridge.fn.cacheBind(c, c.F2));
                var a3 = Bridge.fn.remove(a2, a);
                // Test restructure to keep assertion count correct (prevent uncaught test exception)
                var l = 0;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    l = Bridge.fn.getInvocationList(a).length;
                });
                Bridge.Test.NUnit.Assert.AreEqual(1, l);

                var l2 = 0;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    l2 = Bridge.fn.getInvocationList(a2).length;
                });
                Bridge.Test.NUnit.Assert.AreEqual(2, l2);

                var l3 = 0;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    l3 = Bridge.fn.getInvocationList(a3).length;
                });
                Bridge.Test.NUnit.Assert.AreEqual(1, l3);
            },
            A: function () { },
            RemoveWorksWithMethodGroupConversion_SPI_1563: function () {
                // #1563

                var a = $asm.$.Bridge.ClientTest.Batch4.DelegateTests.f1;

                var a2 = Bridge.fn.combine(a, Bridge.fn.cacheBind(this, this.A));
                var a3 = Bridge.fn.remove(a2, Bridge.fn.cacheBind(this, this.A));

                Bridge.Test.NUnit.Assert.False(Bridge.equals(a, a2));
                Bridge.Test.NUnit.Assert.True(Bridge.equals(a, a3));
            },
            CloneWorks_SPI_1563: function () {
                var sb = new System.Text.StringBuilder();
                var d1 = function () {
                    sb.append("1");
                };
                // #1563 Clone not implemented
                // The original call
                // Action d2 = (Action)d1.Clone();
                // The temp call
                var d2 = d1;
                Bridge.Test.NUnit.Assert.False(Bridge.referenceEquals(d1, d2), "Should not be same");
                d2();
                Bridge.Test.NUnit.Assert.AreEqual("1", sb.toString());
            },
            CloningDelegateToTheSameTypeCreatesANewClone_SPI_1563: function () {
                // #1563
                var x = 0;
                var d1 = function () {
                    Bridge.identity(x, (x = (x + 1) | 0));
                };
                var d2 = d1;
                d1();
                d2();

                Bridge.Test.NUnit.Assert.False(Bridge.staticEquals(d1, d2));
                Bridge.Test.NUnit.Assert.AreEqual(2, x);
            },
            EqualityAndInequalityOperatorsAndEqualsMethod_SPI_1563: function () {
                var c1 = new Bridge.ClientTest.Batch4.DelegateTests.C(), c2 = new Bridge.ClientTest.Batch4.DelegateTests.C();
                var n = null;
                var f11 = Bridge.fn.cacheBind(c1, c1.F1), f11_2 = Bridge.fn.cacheBind(c1, c1.F1), f12 = Bridge.fn.cacheBind(c1, c1.F2), f21 = Bridge.fn.cacheBind(c2, c2.F1);

                Bridge.Test.NUnit.Assert.False(Bridge.staticEquals(n, f11), "n == f11");
                Bridge.Test.NUnit.Assert.True(!Bridge.staticEquals(n, f11), "n != f11");
                Bridge.Test.NUnit.Assert.False(Bridge.staticEquals(f11, n), "f11 == n");
                Bridge.Test.NUnit.Assert.False(Bridge.equals(f11, n), "f11.Equals(n)");
                Bridge.Test.NUnit.Assert.True(!Bridge.staticEquals(f11, n), "f11 != n");
                Bridge.Test.NUnit.Assert.True(Bridge.staticEquals(n, n), "n == n");
                Bridge.Test.NUnit.Assert.False(!Bridge.staticEquals(n, n), "n != n");

                Bridge.Test.NUnit.Assert.True(Bridge.staticEquals(f11, f11), "f11 == f11");
                Bridge.Test.NUnit.Assert.True(Bridge.equals(f11, f11), "f11.Equals(f11)");
                Bridge.Test.NUnit.Assert.False(!Bridge.staticEquals(f11, f11), "f11 != f11");

                Bridge.Test.NUnit.Assert.True(Bridge.staticEquals(f11, f11_2), "f11 == f11_2");
                Bridge.Test.NUnit.Assert.True(Bridge.equals(f11, f11_2), "f11.Equals(f11_2)");
                Bridge.Test.NUnit.Assert.False(!Bridge.staticEquals(f11, f11_2), "f11 != f11_2");

                Bridge.Test.NUnit.Assert.False(Bridge.staticEquals(f11, f12), "f11 == f12");
                Bridge.Test.NUnit.Assert.False(Bridge.equals(f11, f12), "f11.Equals(f12)");
                Bridge.Test.NUnit.Assert.True(!Bridge.staticEquals(f11, f12), "f11 != f12");

                Bridge.Test.NUnit.Assert.False(Bridge.staticEquals(f11, f21), "f11 == f21");
                Bridge.Test.NUnit.Assert.False(Bridge.equals(f11, f21), "f11.Equals(f21)");
                Bridge.Test.NUnit.Assert.True(!Bridge.staticEquals(f11, f21), "f11 != f21");

                var m1 = Bridge.fn.combine(f11, f21), m2 = Bridge.fn.combine(f11, f21), m3 = Bridge.fn.combine(f21, f11);

                // #1563
                Bridge.Test.NUnit.Assert.True(Bridge.staticEquals(m1, m2), "m1 == m2");
                Bridge.Test.NUnit.Assert.True(Bridge.equals(m1, m2), "m1.Equals(m2)");
                Bridge.Test.NUnit.Assert.False(!Bridge.staticEquals(m1, m2), "m1 != m2");

                Bridge.Test.NUnit.Assert.False(Bridge.staticEquals(m1, m3), "m1 == m3");
                Bridge.Test.NUnit.Assert.False(Bridge.equals(m1, m3), "m1.Equals(m3)");
                Bridge.Test.NUnit.Assert.True(!Bridge.staticEquals(m1, m3), "m1 != m3");

                Bridge.Test.NUnit.Assert.False(Bridge.staticEquals(m1, f11), "m1 == f11");
                Bridge.Test.NUnit.Assert.False(Bridge.equals(m1, f11), "m1.Equals(f11)");
                Bridge.Test.NUnit.Assert.True(!Bridge.staticEquals(m1, f11), "m1 != f11");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch4.DelegateTests", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch4.DelegateTests, {
        f1: function () { }
    });

    Bridge.define("Bridge.ClientTest.Batch4.DelegateTests.C", {
        methods: {
            F1: function () { },
            F2: function () { }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Exceptions.ContractExceptionTests", {
        methods: {
            TypePropertiesAreCorrect: function () {
                Bridge.Test.NUnit.Assert.AreEqual("System.Diagnostics.Contracts.ContractException", Bridge.Reflection.getTypeFullName(System.Diagnostics.Contracts.ContractException), "Name");
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isClass(System.Diagnostics.Contracts.ContractException), "IsClass");
                Bridge.Test.NUnit.Assert.AreEqual(System.Exception, Bridge.Reflection.getBaseType(System.Diagnostics.Contracts.ContractException), "BaseType");
                var d = new System.Diagnostics.Contracts.ContractException(System.Diagnostics.Contracts.ContractFailureKind.assert, "Contract failed", null, null, null);
                Bridge.Test.NUnit.Assert.True(Bridge.is(d, System.Diagnostics.Contracts.ContractException), "is ContractException");
                Bridge.Test.NUnit.Assert.True(Bridge.is(d, System.Exception), "is Exception");

                var interfaces = Bridge.Reflection.getInterfaces(System.Diagnostics.Contracts.ContractException);
                Bridge.Test.NUnit.Assert.AreEqual(0, interfaces.length, "Interfaces length");
            },
            DefaultConstructorWorks: function () {
                var ex = new System.Diagnostics.Contracts.ContractException(System.Diagnostics.Contracts.ContractFailureKind.assert, "Contract failed", null, null, null);
                Bridge.Test.NUnit.Assert.True(Bridge.is(ex, System.Diagnostics.Contracts.ContractException), "is ContractException");
                Bridge.Test.NUnit.Assert.True(ex.Kind === System.Diagnostics.Contracts.ContractFailureKind.assert, "ContractFailureKind");
                Bridge.Test.NUnit.Assert.True(ex.InnerException == null, "InnerException");
                Bridge.Test.NUnit.Assert.True(ex.Condition == null, "Condition");
                Bridge.Test.NUnit.Assert.True(ex.UserMessage == null, "UserMessage");
                Bridge.Test.NUnit.Assert.AreEqual("Contract failed", ex.Message);
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Exceptions.ErrorExceptionTests", {
        methods: {
            TypePropertiesAreCorrect_SPI_1564: function () {
                Bridge.Test.NUnit.Assert.AreEqual("Bridge.ErrorException", Bridge.Reflection.getTypeFullName(Bridge.ErrorException), "Name");
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isClass(Bridge.ErrorException), "IsClass");
                Bridge.Test.NUnit.Assert.AreEqual(System.Exception, Bridge.Reflection.getBaseType(Bridge.ErrorException), "BaseType");
                // #1564
                var d = null;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    d = new Bridge.ErrorException();
                });
                // Test restructure to keep assertion count correct (prevent uncaught test exception)
                var b1 = false;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    b1 = Bridge.is(d, Bridge.ErrorException);
                });
                Bridge.Test.NUnit.Assert.True(b1, "is InvalidOperationException");
                var b2 = false;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    b2 = Bridge.is(d, System.Exception);
                });
                Bridge.Test.NUnit.Assert.True(b2, "is Exception");

                var interfaces = Bridge.Reflection.getInterfaces(Bridge.ErrorException);
                Bridge.Test.NUnit.Assert.AreEqual(0, interfaces.length, "Interfaces length");
            },
            ErrorOnlyConstructorWorks_SPI_1564: function () {
                //var err = new Error
                //{
                //    Message = "Some message"
                //};
                var err = null;
                var ex = new Bridge.ErrorException("Some message");
                Bridge.Test.NUnit.Assert.True(Bridge.is(ex, Bridge.ErrorException), "is ErrorException");
                Bridge.Test.NUnit.Assert.True(ex.InnerException == null, "InnerException");
                // #1564
                Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(ex.Error, err), "Error");
                Bridge.Test.NUnit.Assert.AreEqual("Some message", ex.Message, "Message");
                Bridge.Test.NUnit.Assert.AreEqual(err.stack, ex.StackTrace, "Stack");
            },
            ErrorAndMessageAndInnerExceptionConstructorWorks_SPI_1564: function () {
                var inner = new System.Exception("a");
                //var err = new Error
                //{
                //    Message = "Some message"
                //};
                var err = null;
                var ex = new Bridge.ErrorException("Overridden message", inner);
                Bridge.Test.NUnit.Assert.True(Bridge.is(ex, Bridge.ErrorException), "is ErrorException");
                // #1564
                Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(ex.InnerException, inner), "InnerException");
                Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(ex.Error, err), "Error");
                Bridge.Test.NUnit.Assert.AreEqual("Overridden message", ex.Message, "Message");
                Bridge.Test.NUnit.Assert.AreEqual(err.stack, ex.StackTrace, "Stack");
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.FormattableStringTests", {
        methods: {
            ToStringWithFormatProviderWorks_SPI_1651: function () {
                var s = System.Runtime.CompilerServices.FormattableStringFactory.create("x = {0}, y = {0:FMT}", [new Bridge.ClientTest.Batch4.FormattableStringTests.MyFormattable()]);
                // #1651
                Bridge.Test.NUnit.Assert.AreEqual("x = Formatted: MyFormatProvider, y = Formatted: FMT, MyFormatProvider", s.toString$1(new Bridge.ClientTest.Batch4.FormattableStringTests.MyFormatProvider()));
            },
            IFormattableToStringWorks_SPI_1633_1651: function () {
                var s = System.Runtime.CompilerServices.FormattableStringFactory.create("x = {0}, y = {0:FMT}", [new Bridge.ClientTest.Batch4.FormattableStringTests.MyFormattable()]);
                // #1633
                // #1651
                Bridge.Test.NUnit.Assert.AreEqual("x = Formatted: MyFormatProvider, y = Formatted: FMT, MyFormatProvider", Bridge.format(s, null, new Bridge.ClientTest.Batch4.FormattableStringTests.MyFormatProvider()));
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.FormattableStringTests.MyFormatProvider", {
        inherits: [System.IFormatProvider],
        alias: ["getFormat", "System$IFormatProvider$getFormat"],
        methods: {
            getFormat: function (type) {
                return System.Globalization.CultureInfo.invariantCulture.getFormat(type);
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.FormattableStringTests.MyFormattable", {
        inherits: [System.IFormattable],
        alias: ["format", "System$IFormattable$format"],
        methods: {
            format: function (format, formatProvider) {
                return System.String.concat("Formatted: ", (!System.String.isNullOrEmpty(format) ? System.String.concat(format, ", ") : ""), Bridge.Reflection.getTypeName(Bridge.getType(formatProvider)));
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.RefParameterTests", {
        methods: {
            RefTestMethod: function (r, expectBefore, write, expectAfter, writeAfter, a) {
                Bridge.Test.NUnit.Assert.AreEqual(expectBefore, r.v);
                r.v = write;
                Bridge.Test.NUnit.Assert.AreEqual(write, r.v);
                a();
                Bridge.Test.NUnit.Assert.AreEqual(expectAfter, r.v);
                r.v = writeAfter;
            },
            CanUseReferenceToThis_SPI_1569: function () {
                // #1569
                new Bridge.ClientTest.Batch4.RefParameterTests.S.ctor().RefThisTest();
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.RefParameterTests.S", {
        $kind: "struct",
        statics: {
            methods: {
                M: function (s) {
                    // Test restructure to keep assertion count correct (prevent uncaught test exception)
                    // copy var required as C# cannot use ref vars in lambdas
                    var copy = new Bridge.ClientTest.Batch4.RefParameterTests.S();
                    try {
                        copy = s.v.$clone();
                    }
                    catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        copy = Bridge.getDefaultValue(Bridge.ClientTest.Batch4.RefParameterTests.S);
                    }

                    var r1 = 0;
                    Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                        r1 = copy.i;
                    });
                    Bridge.Test.NUnit.Assert.AreEqual(11, r1);

                    var r2 = 0;
                    Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                        r2 = copy.j;
                    });
                    Bridge.Test.NUnit.Assert.AreEqual(12, r2);

                    s.v = new Bridge.ClientTest.Batch4.RefParameterTests.S.$ctor1(42, 43);

                    var copy2 = Bridge.getDefaultValue(Bridge.ClientTest.Batch4.RefParameterTests.S);
                    try {
                        copy2 = s.v.$clone();
                    }
                    catch ($e2) {
                        $e2 = System.Exception.create($e2);
                        copy2 = Bridge.getDefaultValue(Bridge.ClientTest.Batch4.RefParameterTests.S);
                    }

                    var r3 = 0;
                    Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                        r3 = copy2.i;
                    });
                    Bridge.Test.NUnit.Assert.AreEqual(42, r3);

                    var r4 = 0;
                    Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                        r4 = copy2.j;
                    });
                    Bridge.Test.NUnit.Assert.AreEqual(43, r4);
                },
                getDefaultValue: function () { return new Bridge.ClientTest.Batch4.RefParameterTests.S(); }
            }
        },
        fields: {
            i: 0,
            j: 0
        },
        ctors: {
            $ctor1: function (i, j) {
                this.$initialize();
                this.i = i;
                this.j = j;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            RefThisTest: function () {
                this.i = 11;
                this.j = 12;
                Bridge.ClientTest.Batch4.RefParameterTests.S.M(Bridge.ref(this));
                Bridge.Test.NUnit.Assert.AreEqual(42, this.i);
                Bridge.Test.NUnit.Assert.AreEqual(43, this.j);
            },
            getHashCode: function () {
                var h = Bridge.addHash([83, this.i, this.j]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.RefParameterTests.S)) {
                    return false;
                }
                return Bridge.equals(this.i, o.i) && Bridge.equals(this.j, o.j);
            },
            $clone: function (to) {
                var s = to || new Bridge.ClientTest.Batch4.RefParameterTests.S();
                s.i = this.i;
                s.j = this.j;
                return s;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Runtime.CompilerServices.RuntimeHelpersTests", {
        methods: {
            GetHashCodeCallsGetHashCodeNonVirtually_SPI_1570: function () {
                // #1570
                var isOK = false;
                for (var i = 0; i < 3; i = (i + 1) | 0) {
                    // Since we might be unlucky and roll a 0 hash code, try 3 times.
                    var c = new Bridge.ClientTest.Batch4.Runtime.CompilerServices.RuntimeHelpersTests.C();
                    if (Bridge.getHashCode(c) !== 0) {
                        isOK = true;
                        break;
                    }
                }
                Bridge.Test.NUnit.Assert.True(isOK, "GetHashCode should be invoked non-virtually");
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Runtime.CompilerServices.RuntimeHelpersTests.C", {
        methods: {
            getHashCode: function () {
                return 0;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Serialization.JsonTests", {
        methods: {
            NonGenericParseWorks_SPI_1574: function () {
                // #1574
                // Test restructure to keep assertion count correct (prevent uncaught test exception)
                var o = null;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    o = Bridge.cast(JSON.parse("{ \"i\": 3, \"s\": \"test\" }"), Bridge.ClientTest.Batch4.Serialization.JsonTests.TestClass2);
                });

                var i = 0;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    i = o.i;
                });
                Bridge.Test.NUnit.Assert.AreEqual(3, i);

                var vs = null;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    vs = o.s;
                });
                Bridge.Test.NUnit.Assert.AreEqual("test", vs);
            },
            GenericParseWorks: function () {
                var o = Bridge.cast(JSON.parse("{ \"i\": 3, \"s\": \"test\" }"), Bridge.ClientTest.Batch4.Serialization.JsonTests.TestClass2);
                Bridge.Test.NUnit.Assert.AreEqual(3, o.i);
                Bridge.Test.NUnit.Assert.AreEqual("test", o.s);
            },
            NonGenericParseWithCallbackWorks_SPI_1574: function () {
                // #1574
                // Test restructure to keep assertion count correct (prevent uncaught test exception)

                var o = null;

                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    o = Bridge.cast(JSON.parse("{ \"i\": 3, \"s\": \"test\" }", $asm.$.Bridge.ClientTest.Batch4.Serialization.JsonTests.f1), Bridge.ClientTest.Batch4.Serialization.JsonTests.TestClass2);
                });

                var i = 0;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    i = o.i;
                });
                Bridge.Test.NUnit.Assert.AreEqual(100, i);

                var vs = null;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    vs = o.s;
                });
                Bridge.Test.NUnit.Assert.AreEqual("test", vs);
            },
            GenericParseWithCallbackWorks_SPI_1574: function () {
                // #1574
                // Test restructure to keep assertion count correct (prevent uncaught test exception)
                var o = null;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    o = Bridge.cast(JSON.parse("{ \"i\": 3, \"s\": \"test\" }", $asm.$.Bridge.ClientTest.Batch4.Serialization.JsonTests.f1), Bridge.ClientTest.Batch4.Serialization.JsonTests.TestClass2);
                });

                var i = 0;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    i = o.i;
                });
                Bridge.Test.NUnit.Assert.AreEqual(100, i);

                var vs = null;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    vs = o.s;
                });
                Bridge.Test.NUnit.Assert.AreEqual("test", vs);
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch4.Serialization.JsonTests", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch4.Serialization.JsonTests, {
        f1: function (s, x) {
            Bridge.cast(x, Bridge.ClientTest.Batch4.Serialization.JsonTests.TestClass2).i = 100;
            return x;
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Serialization.JsonTests.TestClass1", {
        fields: {
            i: 0
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Serialization.JsonTests.TestClass2", {
        fields: {
            i: 0,
            s: null
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.ByteTests", {
        methods: {
            TryParseWorks_SPI_1592: function () {
                var numberResult = { };

                var result = System.Byte.tryParse("54768", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                // #1592
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);

                result = System.Byte.tryParse("-1", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                // #1592
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.CharTests", {
        methods: {
            TypePropertiesAreInt32_SPI_1603: function () {
                Bridge.Test.NUnit.Assert.False(Bridge.is(Bridge.box(0, System.Int32), System.Char));
                Bridge.Test.NUnit.Assert.False(Bridge.is(Bridge.box(0.5, System.Double, System.Double.format, System.Double.getHashCode), System.Char));
                Bridge.Test.NUnit.Assert.False(Bridge.is(Bridge.box(-1, System.Int32), System.Char));
                Bridge.Test.NUnit.Assert.False(Bridge.is(Bridge.box(65536, System.Int32), System.Char));
                Bridge.Test.NUnit.Assert.AreEqual("System.Char", Bridge.Reflection.getTypeFullName(System.Char));
                Bridge.Test.NUnit.Assert.False(Bridge.Reflection.isClass(System.Char));
                Bridge.Test.NUnit.Assert.False(Bridge.Reflection.isAssignableFrom(System.IComparable$1(System.Byte), System.Char));
                Bridge.Test.NUnit.Assert.False(Bridge.Reflection.isAssignableFrom(System.IEquatable$1(System.Byte), System.Char));
                // #1603
                Bridge.Test.NUnit.Assert.False(Bridge.Reflection.isAssignableFrom(System.IFormattable, System.Char));
                var interfaces = Bridge.Reflection.getInterfaces(System.Char);
                Bridge.Test.NUnit.Assert.AreEqual(4, interfaces.length);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IComparable$1(System.Char), Function));
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IEquatable$1(System.Char), Function));
                Bridge.Test.NUnit.Assert.False(System.Array.contains(interfaces, System.IFormattable, Function));
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.DateTests", {
        statics: {
            methods: {
                AddTimezoneMinutesOffset: function (dt) {
                    return new Date(dt.getTime() - Bridge.Int.mul(dt.getTimezoneOffset(), 60000));
                }
            }
        },
        methods: {
            TypePropertiesAreCorrect_SPI_1608_1609: function () {
                Bridge.Test.NUnit.Assert.AreEqual("Date", Bridge.Reflection.getTypeFullName(Date));
                //Assert.True(typeof(Date).IsClass);
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IComparable$1(Date), Date));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IEquatable$1(Date), Date));
                var o = new Date();
                Bridge.Test.NUnit.Assert.True(Bridge.is(o, Date));
                Bridge.Test.NUnit.Assert.True(Bridge.is(o, System.IComparable$1(Date)));
                Bridge.Test.NUnit.Assert.True(Bridge.is(o, System.IEquatable$1(Date)));

                var interfaces = Bridge.Reflection.getInterfaces(Date);
                Bridge.Test.NUnit.Assert.AreEqual(4, interfaces.length);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IComparable$1(Date), Function));
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IEquatable$1(Date), Function));
            },
            DefaultConstructorReturnsTodaysDate: function () {
                var dt = new Date();
                Bridge.Test.NUnit.Assert.True(dt.getFullYear() > 2011);
            },
            CreatingInstanceReturnsTodaysDate_SPI_1604: function () {
                var fullYear = Bridge.createInstance(Date).getFullYear();
                Bridge.Test.NUnit.Assert.True(fullYear > 2011, fullYear + " > 2011");
            },
            MillisecondSinceEpochConstructorWorks: function () {
                var dt = new Date(43200000000.0);
                Bridge.Test.NUnit.Assert.AreEqual(1971, dt.getFullYear());
            },
            StringConstructorWorks: function () {
                var dt = new Date("Aug 12, 2012");
                Bridge.Test.NUnit.Assert.AreEqual(2012, dt.getFullYear());
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getMonth());
                Bridge.Test.NUnit.Assert.AreEqual(12, dt.getDate());
            },
            YMDConstructorWorks: function () {
                var dt = new Date(2011, 7, 12);
                Bridge.Test.NUnit.Assert.AreEqual(2011, dt.getFullYear());
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getMonth());
                Bridge.Test.NUnit.Assert.AreEqual(12, dt.getDate());
            },
            YMDHConstructorWorks: function () {
                var dt = new Date(2011, 7, 12, 13);
                Bridge.Test.NUnit.Assert.AreEqual(2011, dt.getFullYear());
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getMonth());
                Bridge.Test.NUnit.Assert.AreEqual(12, dt.getDate());
                Bridge.Test.NUnit.Assert.AreEqual(13, dt.getHours());
            },
            YMDHNConstructorWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42);
                Bridge.Test.NUnit.Assert.AreEqual(2011, dt.getFullYear());
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getMonth());
                Bridge.Test.NUnit.Assert.AreEqual(12, dt.getDate());
                Bridge.Test.NUnit.Assert.AreEqual(13, dt.getHours());
                Bridge.Test.NUnit.Assert.AreEqual(42, dt.getMinutes());
            },
            YMDHNSConstructorWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56);
                Bridge.Test.NUnit.Assert.AreEqual(2011, dt.getFullYear());
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getMonth());
                Bridge.Test.NUnit.Assert.AreEqual(12, dt.getDate());
                Bridge.Test.NUnit.Assert.AreEqual(13, dt.getHours());
                Bridge.Test.NUnit.Assert.AreEqual(42, dt.getMinutes());
                Bridge.Test.NUnit.Assert.AreEqual(56, dt.getSeconds());
            },
            YMDHNSUConstructorWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(2011, dt.getFullYear());
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getMonth());
                Bridge.Test.NUnit.Assert.AreEqual(12, dt.getDate());
                Bridge.Test.NUnit.Assert.AreEqual(13, dt.getHours());
                Bridge.Test.NUnit.Assert.AreEqual(42, dt.getMinutes());
                Bridge.Test.NUnit.Assert.AreEqual(56, dt.getSeconds());
                Bridge.Test.NUnit.Assert.AreEqual(345, dt.getMilliseconds());
            },
            NowWorks_SPI_1624: function () {
                // #1624
                var d1 = new Date(Date.now());
                var d2 = System.DateTime.getToday();

                Bridge.Test.NUnit.Assert.AreEqual(d1.getFullYear(), System.DateTime.getYear(d2));
            },
            GetFullYearWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(2011, dt.getFullYear());
            },
            GetMonthWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getMonth());
            },
            GetDateWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(12, dt.getDate());
            },
            GetHoursWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(13, dt.getHours());
            },
            GetMinutesWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(42, dt.getMinutes());
            },
            GetSecondsWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(56, dt.getSeconds());
            },
            GetMillisecondsWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(345, dt.getMilliseconds());
            },
            GetDayWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(5, dt.getDay());
            },
            GetTimeWorks: function () {
                var dt = new Date(1970, 0, 2);
                dt = Bridge.ClientTest.Batch4.SimpleTypes.DateTests.AddTimezoneMinutesOffset(dt);
                Bridge.Test.NUnit.Assert.AreEqual(86400000, dt.getTime());
            },
            ValueOfWorks_SPI_1624: function () {
                var dt = new Date(1970, 0, 2);
                dt = Bridge.ClientTest.Batch4.SimpleTypes.DateTests.AddTimezoneMinutesOffset(dt);
                Bridge.Test.NUnit.Assert.AreEqual(86400000, dt.valueOf());
            },
            GetTimezoneOffsetWorks: function () {
                var dt = new Date(0);
                Bridge.Test.NUnit.Assert.AreEqual((new Date(1970, 0, 1).valueOf()) / 60000, dt.getTimezoneOffset());
            },
            GetUtcFullYearWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(2011, dt.getUTCFullYear());
            },
            GetUtcMonthWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getUTCMonth());
            },
            GetUtcDateWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(12, dt.getUTCDate());
            },
            GetUtcHoursWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                dt = Bridge.ClientTest.Batch4.SimpleTypes.DateTests.AddTimezoneMinutesOffset(dt);
                Bridge.Test.NUnit.Assert.AreEqual(13, dt.getUTCHours());
            },
            GetUtcMinutesWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(42, dt.getUTCMinutes());
            },
            GetUtcSecondsWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(56, dt.getUTCSeconds());
            },
            GetUtcMillisecondsWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(345, dt.getUTCMilliseconds());
            },
            GetUtcDayWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
                Bridge.Test.NUnit.Assert.AreEqual(5, dt.getUTCDay());
            },
            ParseWorks_SPI_1624: function () {
                // #1624
                var utc = Date.UTC(2017, 7, 12);
                var local = (new Date(2017, 7, 12)).valueOf();
                var offset = utc - local;

                var d1 = Date.parse("Aug 12, 2012");
                var d2 = Date.parse("1970-01-01");
                var d3 = Date.parse("March 7, 2014");
                var d4 = Date.parse("Wed, 09 Aug 1995 00:00:00 GMT");
                var d5 = Date.parse("Thu, 01 Jan 1970 00:00:00 GMT-0400");

                Bridge.Test.NUnit.Assert.AreEqual(1344729600000.0 - offset, d1);
                Bridge.Test.NUnit.Assert.AreEqual(0.0, d2);
                Bridge.Test.NUnit.Assert.AreEqual(1394150400000.0 - offset, d3);
                Bridge.Test.NUnit.Assert.AreEqual(807926400000.0, d4);
                Bridge.Test.NUnit.Assert.AreEqual(14400000.0, d5);
            },
            ToLocaleDateStringIsWorking_1624: function () {
                var d1 = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

                // Tough to test because varies by timezone/location
                // Just testing that a string is generated
                Bridge.Test.NUnit.Assert.True(!System.String.isNullOrEmpty(d1.toLocaleDateString()));

                //var d2 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));


                //Assert.AreEqual("12/19/2012", d2.ToLocaleDateString("en-US")); // "12/19/2012"

                //Assert.AreEqual("20/12/2012", d2.ToLocaleDateString("en-GB")); // "20/12/2012"

                //Assert.AreEqual("2012. 12. 20.", d2.ToLocaleDateString("ko-KR")); // "2012. 12. 20."

                //Assert.AreEqual("24/12/20", d2.ToLocaleDateString("ja-JP-u-ca-japanese")); // "24/12/20"

                //Assert.AreEqual("20/12/2012", d2.ToLocaleDateString(new string[] { "ban", "id" })); // "20/12/2012"

                //var d3 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

                //var options = new Date.ToLocaleStringOptions
                //{
                //    Weekday = "long",
                //    Year = "numeric",
                //    Month = "long",
                //    Day = "numeric"
                //};

                //Assert.AreEqual("Donnerstag, 20. Dezember 2012", d3.ToLocaleDateString("de-DE", options)); // "Donnerstag, 20. Dezember 2012"

                //options.TimeZone = "UTC";
                //options.TimeZoneName = "short";

                //Assert.AreEqual("Thursday, December 20, 2012, GMT", d3.ToLocaleDateString("en-US", options)); // "Thursday, December 20, 2012, GMT"
            },
            ToDateStringWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42);
                var s = dt.toDateString();
                Bridge.Test.NUnit.Assert.True(System.String.indexOf(s, "2011") >= 0 && System.String.indexOf(s, "42") < 0);
            },
            ToTimeStringWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42);
                var s = dt.toTimeString();
                Bridge.Test.NUnit.Assert.True(System.String.indexOf(s, "2011") < 0 && System.String.indexOf(s, "42") >= 0);
            },
            ToUtcStringWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42);
                var s = dt.toUTCString();
                Bridge.Test.NUnit.Assert.True(System.String.indexOf(s, "2011") >= 0 && System.String.indexOf(s, "42") >= 0);
            },
            ToLocaleDateStringWorks_SPI_1624: function () {
                var dt = new Date(2011, 7, 12, 13, 42);
                var s = dt.toLocaleDateString();
                Bridge.Test.NUnit.Assert.True(System.String.indexOf(s, "2011") >= 0 && System.String.indexOf(s, "42") < 0);
            },
            DateUTCIsWorking_SPI_1624: function () {
                var d = new Date();
                var year = 2017;
                var month = 1;
                var day = 12;
                var hour = 4;
                var minute = 36;
                var second = 55;
                var millisecond = 255;

                d.setUTCFullYear(year); // 2017
                d.setUTCMonth(month); // 1
                d.setUTCDate(day); // 12
                d.setUTCHours(hour); // 4
                d.setUTCMinutes(minute); // 36
                d.setUTCSeconds(second); // 55
                d.setUTCMilliseconds(millisecond); // 255

                var utc1 = Date.UTC(year, month); // 1485907200000
                var utc2 = Date.UTC(year, month, day); // 1486857600000
                var utc3 = Date.UTC(year, month, day, hour); // 1486872000000
                var utc4 = Date.UTC(year, month, day, hour, minute); // 1486874160000
                var utc5 = Date.UTC(year, month, day, hour, minute, second); // 1486874215000
                var utc6 = Date.UTC(year, month, day, hour, minute, second, millisecond); // 1486874215255

                Bridge.Test.NUnit.Assert.AreEqual(1485907200000.0, utc1);
                Bridge.Test.NUnit.Assert.AreEqual(1486857600000.0, utc2);
                Bridge.Test.NUnit.Assert.AreEqual(1486872000000.0, utc3);
                Bridge.Test.NUnit.Assert.AreEqual(1486874160000.0, utc4);
                Bridge.Test.NUnit.Assert.AreEqual(1486874215000.0, utc5);
                Bridge.Test.NUnit.Assert.AreEqual(1486874215255.0, utc6);
            },
            ToLocaleTimeStringWorks: function () {
                var dt = new Date(2011, 7, 12, 13, 42);
                var s = dt.toLocaleTimeString();
                Bridge.Test.NUnit.Assert.True(System.String.indexOf(s, "2011") < 0 && System.String.indexOf(s, "42") >= 0);
            },
            AssertDateUtc: function (dt, year, month, day, hours, minutes, seconds, milliseconds) {
                Bridge.Test.NUnit.Assert.AreEqual(year, dt.getUTCFullYear());
                Bridge.Test.NUnit.Assert.AreEqual(month, dt.getUTCMonth());
                Bridge.Test.NUnit.Assert.AreEqual(day, dt.getUTCDate());
                Bridge.Test.NUnit.Assert.AreEqual(hours, dt.getUTCHours());
                Bridge.Test.NUnit.Assert.AreEqual(minutes, dt.getUTCMinutes());
                Bridge.Test.NUnit.Assert.AreEqual(seconds, dt.getUTCSeconds());
                Bridge.Test.NUnit.Assert.AreEqual(milliseconds, dt.getUTCMilliseconds());
            },
            SubtractingDatesWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(86400000, new Date(2011, 7, 12) - new Date(2011, 7, 11));
            },
            DateEqualityWorks: function () {
                Bridge.Test.NUnit.Assert.True(Bridge.equals(new Date(2011, 7, 12), new Date(2011, 7, 12)));
                Bridge.Test.NUnit.Assert.False(Bridge.equals(new Date(2011, 7, 12), new Date(2011, 7, 13)));
                Bridge.Test.NUnit.Assert.AreStrictEqual(false, Bridge.equals(new Date(2011, 7, 12), null));
                Bridge.Test.NUnit.Assert.AreStrictEqual(false, Bridge.equals(null, new Date(2011, 7, 12)));
                Bridge.Test.NUnit.Assert.AreStrictEqual(true, Bridge.equals(null, null));
            },
            DateInequalityWorks: function () {
                Bridge.Test.NUnit.Assert.False(!Bridge.equals(new Date(2011, 7, 12), new Date(2011, 7, 12)));
                Bridge.Test.NUnit.Assert.True(!Bridge.equals(new Date(2011, 7, 12), new Date(2011, 7, 13)));
                Bridge.Test.NUnit.Assert.AreStrictEqual(true, !Bridge.equals(new Date(2011, 7, 12), null));
                Bridge.Test.NUnit.Assert.AreStrictEqual(true, !Bridge.equals(null, new Date(2011, 7, 12)));
                Bridge.Test.NUnit.Assert.AreStrictEqual(false, !Bridge.equals(null, null));
            },
            DateLessThanWorks: function () {
                Bridge.Test.NUnit.Assert.True(new Date(2011, 7, 11) < new Date(2011, 7, 12));
                Bridge.Test.NUnit.Assert.False(new Date(2011, 7, 12) < new Date(2011, 7, 12));
                Bridge.Test.NUnit.Assert.False(new Date(2011, 7, 13) < new Date(2011, 7, 12));
            },
            DateLessEqualWorks: function () {
                Bridge.Test.NUnit.Assert.True(new Date(2011, 7, 11) <= new Date(2011, 7, 12));
                Bridge.Test.NUnit.Assert.True(new Date(2011, 7, 12) <= new Date(2011, 7, 12));
                Bridge.Test.NUnit.Assert.False(new Date(2011, 7, 13) <= new Date(2011, 7, 12));
            },
            DateGreaterThanWorks: function () {
                Bridge.Test.NUnit.Assert.False(new Date(2011, 7, 11) > new Date(2011, 7, 12));
                Bridge.Test.NUnit.Assert.False(new Date(2011, 7, 12) > new Date(2011, 7, 12));
                Bridge.Test.NUnit.Assert.True(new Date(2011, 7, 13) > new Date(2011, 7, 12));
            },
            DateGreaterEqualWorks: function () {
                Bridge.Test.NUnit.Assert.False(new Date(2011, 7, 11) >= new Date(2011, 7, 12));
                Bridge.Test.NUnit.Assert.True(new Date(2011, 7, 12) >= new Date(2011, 7, 12));
                Bridge.Test.NUnit.Assert.True(new Date(2011, 7, 13) >= new Date(2011, 7, 12));
            },
            SetFullYearWithOneParameterWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setFullYear(2021);
                Bridge.Test.NUnit.Assert.AreEqual(2021, dt.getFullYear());
            },
            SetFullYearWithTwoParametersWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setFullYear(2021, 7);
                Bridge.Test.NUnit.Assert.AreEqual(2021, dt.getFullYear());
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getMonth());
            },
            SetFullYearWithThreeParametersWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setFullYear(2021, 7, 13);
                Bridge.Test.NUnit.Assert.AreEqual(2021, dt.getFullYear());
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getMonth());
                Bridge.Test.NUnit.Assert.AreEqual(13, dt.getDate());
            },
            SetMonthWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setMonth(3);
                Bridge.Test.NUnit.Assert.AreEqual(3, dt.getMonth());
            },
            SetDateWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setDate(12);
                Bridge.Test.NUnit.Assert.AreEqual(12, dt.getDate());
            },
            SetHoursWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setHours(11);
                Bridge.Test.NUnit.Assert.AreEqual(11, dt.getHours());
            },
            SetMinutesWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setMinutes(34);
                Bridge.Test.NUnit.Assert.AreEqual(34, dt.getMinutes());
            },
            SetSecondsWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setSeconds(23);
                Bridge.Test.NUnit.Assert.AreEqual(23, dt.getSeconds());
            },
            SetMillisecondsWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setMilliseconds(435);
                Bridge.Test.NUnit.Assert.AreEqual(435, dt.getMilliseconds());
            },
            SetTimeWorks: function () {
                var dt = new Date();
                dt.setTime(System.Int64([-2095997006,814]));
                Bridge.Test.NUnit.Assert.AreEqual(3498302349234.0, dt.getTime());
            },
            SetTimeAsDoubleWorks: function () {
                var dt = new Date();
                dt.setTime(3498302349234.0);
                Bridge.Test.NUnit.Assert.AreEqual(3498302349234.0, dt.getTime());
            },
            SetUtcFullYearWithOneParameterWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setUTCFullYear(2021);
                Bridge.Test.NUnit.Assert.AreEqual(2021, dt.getUTCFullYear());
            },
            SetUtcFullYearWithTwoParametersWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setUTCFullYear(2021, 7);
                Bridge.Test.NUnit.Assert.AreEqual(2021, dt.getUTCFullYear());
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getUTCMonth());
            },
            SetUtcFullYearWithThreeParametersWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setUTCFullYear(2021, 7, 13);
                Bridge.Test.NUnit.Assert.AreEqual(2021, dt.getUTCFullYear());
                Bridge.Test.NUnit.Assert.AreEqual(7, dt.getUTCMonth());
                Bridge.Test.NUnit.Assert.AreEqual(13, dt.getUTCDate());
            },
            SetUtcMonthWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt = Bridge.ClientTest.Batch4.SimpleTypes.DateTests.AddTimezoneMinutesOffset(dt);

                dt.setUTCMonth(3);
                Bridge.Test.NUnit.Assert.AreEqual(3, dt.getUTCMonth());
            },
            SetUtcDateWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setUTCDate(12);
                Bridge.Test.NUnit.Assert.AreEqual(12, dt.getUTCDate());
            },
            SetUtcHoursWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setUTCHours(11);
                Bridge.Test.NUnit.Assert.AreEqual(11, dt.getUTCHours());
            },
            SetUtcMinutesWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setUTCMinutes(34);
                Bridge.Test.NUnit.Assert.AreEqual(34, dt.getUTCMinutes());
            },
            SetUtcSecondsWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setUTCSeconds(23);
                Bridge.Test.NUnit.Assert.AreEqual(23, dt.getUTCSeconds());
            },
            SetUtcMillisecondsWorks: function () {
                var dt = new Date(2000, 0, 1);
                dt.setUTCMilliseconds(435);
                Bridge.Test.NUnit.Assert.AreEqual(435, dt.getUTCMilliseconds());
            },
            GetHashCodeWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(Bridge.getHashCode(new Date(0)), Bridge.getHashCode(new Date(0)));
                Bridge.Test.NUnit.Assert.AreEqual(Bridge.getHashCode(new Date(1)), Bridge.getHashCode(new Date(1)));
                Bridge.Test.NUnit.Assert.AreNotEqual(Bridge.getHashCode(new Date(1)), Bridge.getHashCode(new Date(0)));
                Bridge.Test.NUnit.Assert.True(System.Int64(Bridge.getHashCode(new Date(3000, 1, 1))).lt(System.Int64([-1,0])));
            },
            EqualsWorks: function () {
                Bridge.Test.NUnit.Assert.True(Bridge.equals(new Date(0), new Date(0)));
                Bridge.Test.NUnit.Assert.False(Bridge.equals(new Date(1), new Date(0)));
                Bridge.Test.NUnit.Assert.False(Bridge.equals(new Date(0), new Date(1)));
                Bridge.Test.NUnit.Assert.True(Bridge.equals(new Date(1), new Date(1)));
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests", {
        methods: {
            GetDefaultValue: function (T) {
                return Bridge.getDefaultValue(T);
            },
            AssertIsDecimalAndEqualTo: function (v, d) {
                Bridge.Test.NUnit.Assert.True(Bridge.is(v, System.Decimal));
                Bridge.Test.NUnit.Assert.AreStrictEqual(System.Double.format(d), v.toString());
            },
            AssertIsDecimalAndEqualTo$1: function (v, s) {
                Bridge.Test.NUnit.Assert.True(Bridge.is(v, System.Decimal));
                Bridge.Test.NUnit.Assert.AreStrictEqual(s, v.toString());
            },
            ConversionsToDecimalWork_SPI_1580: function () {
                var x = 0;
                this.AssertIsDecimalAndEqualTo(System.Decimal(Bridge.Int.sxb((((x + 1) | 0)) & 255)), 1);
                this.AssertIsDecimalAndEqualTo(System.Decimal(((((x + 2) | 0)) & 255)), 2);
                this.AssertIsDecimalAndEqualTo(System.Decimal(Bridge.Int.sxs((((x + 3) | 0)) & 65535)), 3);
                this.AssertIsDecimalAndEqualTo(System.Decimal(((((x + 4) | 0)) & 65535)), 4);
                this.AssertIsDecimalAndEqualTo(System.Decimal(((((x + 5) | 0)) & 65535)), 5);
                this.AssertIsDecimalAndEqualTo(System.Decimal(((x + 6) | 0)), 6);
                this.AssertIsDecimalAndEqualTo(System.Decimal(((((x + 7) | 0)) >>> 0)), 7);
                this.AssertIsDecimalAndEqualTo(System.Decimal(System.Int64(((x + 8) | 0))), 8);
                this.AssertIsDecimalAndEqualTo(System.Decimal(Bridge.Int.clipu64(((x + 9) | 0))), 9);
                this.AssertIsDecimalAndEqualTo(System.Decimal(x + 10.5, null, System.Single), 10.5);
                this.AssertIsDecimalAndEqualTo(System.Decimal(x + 11.5, null, System.Double), 11.5);

                // #1580
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal(x + 7.92281625E+28, null, System.Single);
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal(x - 7.92281625E+28, null, System.Single);
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal(x + 7.9228162514264338E+28, null, System.Double);
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal(x - 7.9228162514264338E+28, null, System.Double);
                });
            },
            NullableConversionsToDecimalWork_SPI_1580_1581_1587: function () {
                var x1 = 0, x2 = null;
                this.AssertIsDecimalAndEqualTo(System.Decimal.lift(Bridge.Int.clip8(Bridge.Int.clip32(System.Nullable.add(x1, 1)))), 1);
                this.AssertIsDecimalAndEqualTo(System.Decimal.lift(Bridge.Int.clipu8(Bridge.Int.clip32(System.Nullable.add(x1, 2)))), 2);
                this.AssertIsDecimalAndEqualTo(System.Decimal.lift(Bridge.Int.clip16(Bridge.Int.clip32(System.Nullable.add(x1, 3)))), 3);
                this.AssertIsDecimalAndEqualTo(System.Decimal.lift(Bridge.Int.clipu16(Bridge.Int.clip32(System.Nullable.add(x1, 4)))), 4);
                this.AssertIsDecimalAndEqualTo(System.Decimal.lift(Bridge.Int.clipu16(Bridge.Int.clip32(System.Nullable.add(x1, 5)))), 5);
                this.AssertIsDecimalAndEqualTo(System.Decimal.lift(Bridge.Int.clip32(System.Nullable.add(x1, 6))), 6);
                this.AssertIsDecimalAndEqualTo(System.Decimal.lift(Bridge.Int.clipu32(Bridge.Int.clip32(System.Nullable.add(x1, 7)))), 7);
                this.AssertIsDecimalAndEqualTo(System.Decimal.lift(System.Int64.lift(Bridge.Int.clip32(System.Nullable.add(x1, 8)))), 8);
                this.AssertIsDecimalAndEqualTo(System.Decimal.lift(Bridge.Int.clipu64(Bridge.Int.clip32(System.Nullable.add(x1, 9)))), 9);
                this.AssertIsDecimalAndEqualTo(System.Decimal(System.Nullable.add(x1, 10.5), null, System.Nullable$1(System.Single)), 10.5);
                this.AssertIsDecimalAndEqualTo(System.Decimal(System.Nullable.add(x1, 11.5), null, System.Nullable$1(System.Double)), 11.5);
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal.lift(Bridge.Int.clip8(x2)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal.lift(Bridge.Int.clipu8(x2)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal.lift(Bridge.Int.clip16(x2)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal.lift(Bridge.Int.clipu16(x2)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal.lift(Bridge.Int.clipu16(x2)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal.lift(x2));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal.lift(Bridge.Int.clipu32(x2)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal.lift(System.Int64.lift(x2)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal.lift(Bridge.Int.clipu64(x2)));

                // #1587
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal(x2, null, System.Nullable$1(System.Single)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal(x2, null, System.Nullable$1(System.Double)));

                // #1581
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal(Bridge.Int.clip8(x2), null, System.Nullable$1(System.SByte));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal(Bridge.Int.clipu8(x2), null, System.Nullable$1(System.Byte));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal(Bridge.Int.clip16(x2), null, System.Nullable$1(System.Int16));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal(Bridge.Int.clipu16(x2), null, System.Nullable$1(System.UInt16));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal(Bridge.Int.clipu16(x2), null, System.Nullable$1(System.Char));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal(x2, null, System.Nullable$1(System.Int32));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal(Bridge.Int.clipu32(x2), null, System.Nullable$1(System.UInt32));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal(System.Int64.lift(x2), null, System.Nullable$1(System.Int64));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal(Bridge.Int.clipu64(x2), null, System.Nullable$1(System.UInt64));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal(x2, null, System.Nullable$1(System.Single));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal(x2, null, System.Nullable$1(System.Double));
                });

                // #1580
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal(System.Nullable.add(x1, 7.92281625E+28), null, System.Nullable$1(System.Single));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal(System.Nullable.sub(x1, 7.92281625E+28), null, System.Nullable$1(System.Single));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal(System.Nullable.add(x1, 7.9228162514264338E+28), null, System.Nullable$1(System.Double));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal(System.Nullable.sub(x1, 7.9228162514264338E+28), null, System.Nullable$1(System.Double));
                });
            },
            DecimalToSByte_SPI_1580: function () {
                var x = System.Decimal(0);
                Bridge.Test.NUnit.Assert.AreEqual(-128, System.Decimal.toInt(x.sub(System.Decimal(128.9)), System.SByte));
                Bridge.Test.NUnit.Assert.AreEqual(127, System.Decimal.toInt(x.add(System.Decimal(127.9)), System.SByte));
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(129)), System.SByte);
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(128)), System.SByte);
                });

                Bridge.Test.NUnit.Assert.AreEqual(-128, System.Decimal.toInt(x.sub(System.Decimal(128.9))));
                Bridge.Test.NUnit.Assert.AreEqual(127, System.Decimal.toInt(x.add(System.Decimal(127.9))));

                // #1580
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(129)));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(128)));
                });
            },
            DecimalToByte_SPI_1580: function () {
                var x = System.Decimal(0);
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Decimal.toInt(x.sub(System.Decimal(0.9)), System.Byte));
                Bridge.Test.NUnit.Assert.AreEqual(255, System.Decimal.toInt(x.add(System.Decimal(255.9)), System.Byte));
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(1)), System.Byte);
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(256)), System.Byte);
                });

                Bridge.Test.NUnit.Assert.AreEqual(0, System.Decimal.toInt(x.sub(System.Decimal(0.9))));
                Bridge.Test.NUnit.Assert.AreEqual(255, System.Decimal.toInt(x.add(System.Decimal(255.9))));

                // #1580
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(1)));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(256)));
                });
            },
            DecimalToShort_SPI_1580: function () {
                var x = System.Decimal(0);
                Bridge.Test.NUnit.Assert.AreEqual(-32768, System.Decimal.toInt(x.sub(System.Decimal(32768.9)), System.Int16));
                Bridge.Test.NUnit.Assert.AreEqual(32767, System.Decimal.toInt(x.add(System.Decimal(32767.9)), System.Int16));
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(32769)), System.Int16);
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(32768)), System.Int16);
                });

                Bridge.Test.NUnit.Assert.AreEqual(-32768, System.Decimal.toInt(x.sub(System.Decimal(32768.9))));
                Bridge.Test.NUnit.Assert.AreEqual(32767, System.Decimal.toInt(x.add(System.Decimal(32767.9))));

                // #1580
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(32769)));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(32768)));
                });
            },
            DecimalToUShort_SPI_1580: function () {
                var x = System.Decimal(0);
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Decimal.toInt(x.sub(System.Decimal(0.9)), System.UInt16));
                Bridge.Test.NUnit.Assert.AreEqual(65535, System.Decimal.toInt(x.add(System.Decimal(65535.9)), System.UInt16));
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(1)), System.UInt16);
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(65536)), System.UInt16);
                });

                Bridge.Test.NUnit.Assert.AreEqual(0, System.Decimal.toInt(x.sub(System.Decimal(0.9))));
                Bridge.Test.NUnit.Assert.AreEqual(65535, System.Decimal.toInt(x.add(System.Decimal(65535.9))));

                // #1580
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(1)));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(65536)));
                });
            },
            DecimalToInt_SPI_1580: function () {
                var x = System.Decimal(0);
                Bridge.Test.NUnit.Assert.AreEqual(-2147483648, System.Decimal.toInt(x.sub(System.Decimal(2147483648.9)), System.Int32));
                Bridge.Test.NUnit.Assert.AreEqual(2147483647, System.Decimal.toInt(x.add(System.Decimal(2147483647.9)), System.Int32));
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(2147483649)), System.Int32);
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(2147483648)), System.Int32);
                });

                Bridge.Test.NUnit.Assert.AreEqual(-2147483648, System.Decimal.toInt(x.sub(System.Decimal(2147483648.9))));
                Bridge.Test.NUnit.Assert.AreEqual(2147483647, System.Decimal.toInt(x.add(System.Decimal(2147483647.9))));

                // #1580
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(2147483649)));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(2147483648)));
                });
            },
            DecimalToUInt_SPI_1580: function () {
                var x = System.Decimal(0);
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Decimal.toInt(x.sub(System.Decimal(0.9)), System.UInt32));
                Bridge.Test.NUnit.Assert.AreEqual(4294967295, System.Decimal.toInt(x.add(System.Decimal(4294967295.9)), System.UInt32));
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(1)), System.UInt32);
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(System.Int64([0,1]))), System.UInt32);
                });

                Bridge.Test.NUnit.Assert.AreEqual(0, System.Decimal.toInt(x.sub(System.Decimal(0.9))));
                Bridge.Test.NUnit.Assert.AreEqual(4294967295, System.Decimal.toInt(x.add(System.Decimal(4294967295.9))));

                // #1580
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(1)));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.add(System.Decimal(System.Int64([0,1]))));
                });
            },
            DecimalToLong_SPI_1578: function () {
                var x = System.Decimal(0);
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([0,-5]), System.Decimal.toInt(x.sub(System.Decimal(21474836480.9)), System.Int64));
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([-10,4]), System.Decimal.toInt(x.add(System.Decimal(21474836470.9)), System.Int64));

                // #1578
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([0,-5]), System.Decimal.toInt(x.sub(System.Decimal(21474836480.9))));
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([-10,4]), System.Decimal.toInt(x.add(System.Decimal(21474836470.9))));
            },
            DecimalToULong_SPI_1584_1585: function () {
                var x = System.Decimal(0);

                // #1585
                // Test restructure to keep assertion count correct(prevent uncaught test exception)
                var u1 = System.UInt64(0);
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    u1 = System.Decimal.toInt(x.sub(System.Decimal(0.9)), System.UInt64);
                });
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), u1);

                var u2 = System.UInt64(0);
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    u2 = System.Decimal.toInt(x.add(System.Decimal(42949672950.9)), System.UInt64);
                });
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64([-10,9]), u2);
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(1)), System.UInt64);
                });

                // #1584
                var u3 = System.UInt64(0);
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    u3 = System.Decimal.toInt(x.sub(System.Decimal(0.9)));
                });
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), u3);

                var u4 = System.UInt64(0);
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    u4 = System.Decimal.toInt(x.add(System.Decimal(42949672950.9)));
                });
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64([-10,9]), u4);

                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(x.sub(System.Decimal(1)));
                });
            },
            NullableDecimalToLong_SPI_1582: function () {
                var x1 = System.Decimal(0), x2 = System.Decimal.lift(null);
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([0,-5]), System.Decimal.toInt(System.Nullable.lift2("sub", x1, System.Decimal(System.Int64([0,5]))), System.Nullable$1(System.Int64)));
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([-10,4]), System.Decimal.toInt(System.Nullable.lift2("add", x1, System.Decimal(System.Int64([-10,4]))), System.Nullable$1(System.Int64)));
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([0,-5]), System.Decimal.toInt(System.Nullable.lift2("sub", x1, System.Decimal(System.Int64([0,5]))), System.Int64));
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([-10,4]), System.Decimal.toInt(System.Nullable.lift2("add", x1, System.Decimal(System.Int64([-10,4]))), System.Int64));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal.toInt(x2, System.Nullable$1(System.Int64)));

                // #1582
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal.toInt(x2, System.Int64);
                });
            },
            NullableDecimalToULong_SPI_1582: function () {
                var x1 = System.Decimal(0), x2 = System.Decimal.lift(null);
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), System.Decimal.toInt(x1, System.Nullable$1(System.UInt64)));
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64([-10,9]), System.Decimal.toInt(System.Nullable.lift2("add", x1, System.Decimal(System.Int64([-10,9]))), System.Nullable$1(System.UInt64)));
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), System.Decimal.toInt(x1, System.UInt64));
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64([-10,9]), System.Decimal.toInt(System.Nullable.lift2("add", x1, System.Decimal(System.Int64([-10,9]))), System.UInt64));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Decimal.toInt(x2, System.Nullable$1(System.UInt64)));
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(System.Nullable.lift2("sub", x1, System.Decimal(1)), System.Nullable$1(System.UInt64));
                });
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var _ = System.Decimal.toInt(System.Nullable.lift2("sub", x1, System.Decimal(1)), System.UInt64);
                });

                // #1582
                Bridge.Test.NUnit.Assert.Throws$2(System.InvalidOperationException, function () {
                    var _ = System.Decimal.toInt(x2, System.UInt64);
                });
            },
            OperatorsWork_SPI_1583: function () {
                var $t;
                var x = System.Decimal(3);
                this.AssertIsDecimalAndEqualTo(x.clone(), 3);
                this.AssertIsDecimalAndEqualTo(x.neg(), -3);
                this.AssertIsDecimalAndEqualTo(x.add(System.Decimal(4.0)), 7);
                this.AssertIsDecimalAndEqualTo(x.sub(System.Decimal(2.0)), 1);
                this.AssertIsDecimalAndEqualTo(($t = x, x = x.inc(), $t), 3);
                this.AssertIsDecimalAndEqualTo(x, 4);
                this.AssertIsDecimalAndEqualTo((x = x.inc()), 5);
                this.AssertIsDecimalAndEqualTo(x, 5);
                this.AssertIsDecimalAndEqualTo(($t = x, x = x.dec(), $t), 5);
                this.AssertIsDecimalAndEqualTo(x, 4);
                this.AssertIsDecimalAndEqualTo((x = x.dec()), 3);
                this.AssertIsDecimalAndEqualTo(x, 3);
                this.AssertIsDecimalAndEqualTo(x.mul(System.Decimal(3.0)), 9);
                this.AssertIsDecimalAndEqualTo(x.div(System.Decimal(2.0)), 1.5);

                // #1583
                Bridge.Test.NUnit.Assert.Throws$2(System.DivideByZeroException, function () {
                    var _ = x.div(System.Decimal(0.0));
                });
                this.AssertIsDecimalAndEqualTo(System.Decimal(14.0).mod(x), 2);
                Bridge.Test.NUnit.Assert.Throws$2(System.DivideByZeroException, function () {
                    var _ = x.mod(System.Decimal(0.0));
                });

                Bridge.Test.NUnit.Assert.True(x.equalsT(System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.False(x.equalsT(System.Decimal(4.0)));
                Bridge.Test.NUnit.Assert.False(x.ne(System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.True(x.ne(System.Decimal(4.0)));
                Bridge.Test.NUnit.Assert.True(x.gt(System.Decimal(1.0)));
                Bridge.Test.NUnit.Assert.False(x.gt(System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.True(x.gte(System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.False(x.gte(System.Decimal(4.0)));
                Bridge.Test.NUnit.Assert.True(x.lt(System.Decimal(4.0)));
                Bridge.Test.NUnit.Assert.False(x.lt(System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.True(x.lte(System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.False(x.lte(System.Decimal(2.0)));
            },
            LiftedOperatorsWork_SPI_1583: function () {
                var $t;
                var x1 = System.Decimal(3), x2 = System.Decimal.lift(null);
                this.AssertIsDecimalAndEqualTo(System.Nullable.lift1("clone", x1), 3);
                this.AssertIsDecimalAndEqualTo(System.Nullable.lift1("neg", x1), -3);
                this.AssertIsDecimalAndEqualTo(System.Nullable.lift2("add", x1, System.Decimal(4.0)), 7);
                this.AssertIsDecimalAndEqualTo(System.Nullable.lift2("sub", x1, System.Decimal(2.0)), 1);
                this.AssertIsDecimalAndEqualTo(Bridge.hasValue(x1) ? ($t = x1, x1 = System.Nullable.lift1('inc', x1), $t) : null, 3);
                this.AssertIsDecimalAndEqualTo(x1, 4);
                this.AssertIsDecimalAndEqualTo(Bridge.hasValue(x1) ? (x1 = System.Nullable.lift1('inc', x1)) : null, 5);
                this.AssertIsDecimalAndEqualTo(x1, 5);
                this.AssertIsDecimalAndEqualTo(Bridge.hasValue(x1) ? ($t = x1, x1 = System.Nullable.lift1('dec', x1), $t) : null, 5);
                this.AssertIsDecimalAndEqualTo(x1, 4);
                this.AssertIsDecimalAndEqualTo(Bridge.hasValue(x1) ? (x1 = System.Nullable.lift1('dec', x1)) : null, 3);
                this.AssertIsDecimalAndEqualTo(x1, 3);
                this.AssertIsDecimalAndEqualTo(System.Nullable.lift2("mul", x1, System.Decimal(3.0)), 9);
                this.AssertIsDecimalAndEqualTo(System.Nullable.lift2("div", x1, System.Decimal(2.0)), 1.5);

                // #1583
                Bridge.Test.NUnit.Assert.Throws$2(System.DivideByZeroException, function () {
                    var _ = System.Nullable.lift2("div", x1, System.Decimal(0.0));
                });
                this.AssertIsDecimalAndEqualTo(System.Nullable.lift2("mod", System.Decimal(14.0), x1), 2);
                Bridge.Test.NUnit.Assert.Throws$2(System.DivideByZeroException, function () {
                    var _ = System.Nullable.lift2("mod", x1, System.Decimal(0.0));
                });

                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift1("clone", x2));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift1("neg", x2));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("add", x2, System.Decimal(4.0)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("add", System.Decimal(4.0), x2));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("sub", x2, System.Decimal(2.0)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("sub", System.Decimal(2.0), x2));
                Bridge.Test.NUnit.Assert.AreEqual(null, Bridge.hasValue(x2) ? ($t = x2, x2 = System.Nullable.lift1('inc', x2), $t) : null);
                Bridge.Test.NUnit.Assert.AreEqual(null, x2);
                Bridge.Test.NUnit.Assert.AreEqual(null, Bridge.hasValue(x2) ? (x2 = System.Nullable.lift1('inc', x2)) : null);
                Bridge.Test.NUnit.Assert.AreEqual(null, x2);
                Bridge.Test.NUnit.Assert.AreEqual(null, Bridge.hasValue(x2) ? ($t = x2, x2 = System.Nullable.lift1('dec', x2), $t) : null);
                Bridge.Test.NUnit.Assert.AreEqual(null, x2);
                Bridge.Test.NUnit.Assert.AreEqual(null, Bridge.hasValue(x2) ? (x2 = System.Nullable.lift1('dec', x2)) : null);
                Bridge.Test.NUnit.Assert.AreEqual(null, x2);
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("mul", x2, System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("mul", System.Decimal(3.0), x2));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("div", x2, System.Decimal(2.0)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("div", System.Decimal(2.0), x2));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("div", x2, System.Decimal(0.0)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("mod", System.Decimal(14.0), x2));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("mod", x2, System.Decimal(14.0)));
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Nullable.lift2("mod", x2, System.Decimal(0.0)));

                Bridge.Test.NUnit.Assert.True(System.Nullable.lifteq("equals", x1, System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.lifteq("equals", x1, System.Decimal(4.0)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.lifteq("equals", x1, System.Decimal.lift(null)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.lifteq("equals", System.Decimal.lift(null), x1));
                Bridge.Test.NUnit.Assert.True(System.Nullable.lifteq("equals", x2, System.Decimal.lift(null)));

                Bridge.Test.NUnit.Assert.False(System.Nullable.liftne("ne", x1, System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.True(System.Nullable.liftne("ne", x1, System.Decimal(4.0)));
                Bridge.Test.NUnit.Assert.True(System.Nullable.liftne("ne", x1, System.Decimal.lift(null)));
                Bridge.Test.NUnit.Assert.True(System.Nullable.liftne("ne", System.Decimal.lift(null), x1));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftne("ne", x2, System.Decimal.lift(null)));

                Bridge.Test.NUnit.Assert.True(System.Nullable.liftcmp("gt", x1, System.Decimal(1.0)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("gt", x1, System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("gt", x1, System.Decimal.lift(null)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("gt", System.Decimal.lift(null), x1));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("gt", x2, System.Decimal.lift(null)));

                Bridge.Test.NUnit.Assert.True(System.Nullable.liftcmp("gte", x1, System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("gte", x1, System.Decimal(4.0)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("gte", x1, System.Decimal.lift(null)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("gte", System.Decimal.lift(null), x1));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("gte", x2, System.Decimal.lift(null)));

                Bridge.Test.NUnit.Assert.True(System.Nullable.liftcmp("lt", x1, System.Decimal(4.0)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("lt", x1, System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("lt", x1, System.Decimal.lift(null)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("lt", System.Decimal.lift(null), x1));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("lt", x2, System.Decimal.lift(null)));

                Bridge.Test.NUnit.Assert.True(System.Nullable.liftcmp("lte", x1, System.Decimal(3.0)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("lte", x1, System.Decimal(2.0)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("lte", x1, System.Decimal.lift(null)));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("lte", System.Decimal.lift(null), x1));
                Bridge.Test.NUnit.Assert.False(System.Nullable.liftcmp("lte", x2, System.Decimal.lift(null)));
            },
            ParseWorks_SPI_1586: function () {
                this.AssertIsDecimalAndEqualTo(System.Decimal("123"), 123);
                this.AssertIsDecimalAndEqualTo(System.Decimal("0.123"), 0.123);
                this.AssertIsDecimalAndEqualTo(System.Decimal(".123"), 0.123);
                this.AssertIsDecimalAndEqualTo(System.Decimal("123.456"), 123.456);
                this.AssertIsDecimalAndEqualTo(System.Decimal("-123.456"), -123.456);

                // #1586
                // Test restructure to keep assertion count correct (prevent uncaught test exception)
                var d1 = System.Decimal(0);
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    d1 = System.Decimal("+123.456");
                });
                this.AssertIsDecimalAndEqualTo(d1, 123.456);
                var d2 = System.Decimal(0);
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    d2 = System.Decimal("  +123.456  ");
                });
                this.AssertIsDecimalAndEqualTo(d2, 123.456);

                Bridge.Test.NUnit.Assert.Throws$2(System.FormatException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests.f1);
                Bridge.Test.NUnit.Assert.Throws$2(System.FormatException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests.f2);
                Bridge.Test.NUnit.Assert.AreEqual(System.Double.format((12.0)), System.Decimal("12.").toString());
                //Assert.Throws<OverflowException>(() => decimal.Parse("999999999999999999999999999999"));
            },
            TryParseWorks_SPI_1586: function () {
                var d = { };
                var b;
                b = System.Decimal.tryParse("123", null, d);
                Bridge.Test.NUnit.Assert.True(b);
                this.AssertIsDecimalAndEqualTo(d.v, 123);

                b = System.Decimal.tryParse("0.123", null, d);
                Bridge.Test.NUnit.Assert.True(b);
                this.AssertIsDecimalAndEqualTo(d.v, 0.123);

                b = System.Decimal.tryParse(".123", null, d);
                Bridge.Test.NUnit.Assert.True(b);
                this.AssertIsDecimalAndEqualTo(d.v, 0.123);

                b = System.Decimal.tryParse("123.456", null, d);
                Bridge.Test.NUnit.Assert.True(b);
                this.AssertIsDecimalAndEqualTo(d.v, 123.456);

                b = System.Decimal.tryParse("-123.456", null, d);
                Bridge.Test.NUnit.Assert.True(b);
                this.AssertIsDecimalAndEqualTo(d.v, -123.456);

                // #1586
                b = System.Decimal.tryParse("+123.456", null, d);
                Bridge.Test.NUnit.Assert.True(b);
                this.AssertIsDecimalAndEqualTo(d.v, 123.456);

                b = System.Decimal.tryParse("  +123.456  ", null, d);
                Bridge.Test.NUnit.Assert.True(b);
                this.AssertIsDecimalAndEqualTo(d.v, 123.456);

                b = System.Decimal.tryParse("A123", null, d);
                Bridge.Test.NUnit.Assert.False(b);
                this.AssertIsDecimalAndEqualTo(d.v, 0);

                b = System.Decimal.tryParse("12.34.56", null, d);
                Bridge.Test.NUnit.Assert.False(b);
                this.AssertIsDecimalAndEqualTo(d.v, 0);

                b = System.Decimal.tryParse("12.", null, d);
                Bridge.Test.NUnit.Assert.True(b);
                this.AssertIsDecimalAndEqualTo(d.v, 12);

                //b = decimal.TryParse("999999999999999999999999999999", out d);
                //Assert.False(b);
                //AssertIsDecimalAndEqualTo(d, 0);
            },
            ImplementationTests_SPI_1588_1590_1650: function () {
                // #1590 All the tests below use decimal.ToString() that uses Template Bridge.Int.format({this}, 'G') with significant digits 15 instead of 29

                Bridge.Test.NUnit.Assert.AreEqual("0", ((System.Decimal(-1)).add(System.Decimal(1))).compareTo(System.Decimal(0)).toString(), "(new Decimal(-1)).add(1).compare(0).ToString() == \"0\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0", (System.Decimal.toDecimalPlaces(System.Decimal(0), 8, 6)).toString(), "(Decimal.round(new Decimal(0), 8, Decimal.MidpointRounding.ToEven)).ToString() == \"0\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("8", ((System.Decimal("8")).sub(System.Decimal("0"))).toString(), "(new Decimal(\"8\").sub(\"0\").ToString() == \"8\" FAILED");
                // #1588
                Bridge.Test.NUnit.Assert.AreEqual("0", (System.Decimal("-0")).toString(), "(new Decimal(\"-0\")).ToString() == \"0\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("0", ((System.Decimal("0.3")).sub((System.Decimal("0.1")).mul(System.Decimal(3)))).toString(), "(new Decimal(\"0.3\")).sub((new Decimal(\"0.1\")).mul(3)).toString() == \"0\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("10000000000000000000000000000", ((System.Decimal("9999999999999999999999999999")).add(System.Decimal("1"))).toString(), "(new Decimal(\"9999999999999999999999999999\")).add(\"1\").toString() == \"10000000000000000000000000000\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-10000000000000000000000000000", (((System.Decimal("-9999999999999999999999999999")).sub(System.Decimal("1")))).toString(), "(new Decimal(\"-9999999999999999999999999999\")).sub(\"1\").toString() == \"-10000000000000000000000000000\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2", (System.Decimal.toDecimalPlaces(System.Decimal("1.5"), 0, 6)).toString(), "(Decimal.round(new Decimal(\"1.5\"), 0, Decimal.MidpointRounding.ToEven)).toString() == \"2\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2", (System.Decimal.toDecimalPlaces(System.Decimal("2.5"), 0, 6)).toString(), "(Decimal.round(new Decimal(\"2.5\"), 0, Decimal.MidpointRounding.ToEven)).toString() == \"2\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3", (System.Decimal.toDecimalPlaces(System.Decimal("2.5"), 0, 4)).toString(), "(Decimal.round(new Decimal(\"2.5\"), 0, Decimal.MidpointRounding.AwayFromZero)).toString() == \"3\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-3", (System.Decimal.toDecimalPlaces(System.Decimal("-2.5"), 0, 4)).toString(), "(Decimal.round(new Decimal(\"2.5\"), 0, Decimal.MidpointRounding.AwayFromZero)).toString() == \"-3\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-2", (System.Decimal.toDecimalPlaces(System.Decimal("-2.5"), 0, 6)).toString(), "(Decimal.round(new Decimal(\"2.5\"), 0, Decimal.MidpointRounding.ToEven)).toString() == \"-2\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("4", (System.Decimal.toDecimalPlaces(System.Decimal("3.5"), 0, 6)).toString(), "(Decimal.round(new Decimal(\"3.5\"), 0, Decimal.MidpointRounding.ToEven)).toString() == \"4\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-4", (System.Decimal.toDecimalPlaces(System.Decimal("-3.5"), 0, 6)).toString(), "(Decimal.round(new Decimal(\"-3.5\"), 0, Decimal.MidpointRounding.ToEven)).toString() == \"-4\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.000000000000000000000000002", (System.Decimal.toDecimalPlaces(System.Decimal("0.0000000000000000000000000015"), 27, 6)).toString(), "(Decimal.round(new Decimal(\"0.0000000000000000000000000015\"), 27, Decimal.MidpointRounding.ToEven)).toString() == \"0.000000000000000000000000002\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.000000000000000000002", (System.Decimal.toDecimalPlaces(System.Decimal("0.0000000000000000000015"), 21, 6)).toString(), "(Decimal.round(new Decimal(\"0.0000000000000000000015\"), 21, Decimal.MidpointRounding.ToEven)).toString() == \"0.000000000000000000002\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("4176.1574388808460777044", ((System.Decimal("4176.15752861656")).sub(System.Decimal("0.0000897357139222956"))).toString(), "(new Decimal(\"4176.15752861656\")).sub(\"0.0000897357139222956\").toString() == \"4176.1574388808460777044\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000000000000000893034", ((System.Decimal("0.00000008487069606076")).div(System.Decimal("950363559159620"))).toString(), "(new Decimal(\"0.00000008487069606076\")).div(\"950363559159620\").toString() == \"0.0000000000000000000000893034\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0446138050763932217", ((System.Decimal("0.0000360056907106217")).add(System.Decimal("0.0445777993856826"))).toString(), "(new Decimal(\"0.0000360056907106217\")).add(\"0.0445777993856826\").toString() == \"0.0446138050763932217\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.3811764806776453983061876207", ((System.Decimal("264385997906.507")).div(System.Decimal("693605223062.264"))).toString(), "(new Decimal(\"264385997906.507\")).div(\"693605223062.264\").toString() == \"0.3811764806776453983061876207\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("59.80408060158849245782", ((System.Decimal("0.00000000734869245782")).add(System.Decimal("59.8040805942398"))).toString(), "(new Decimal(\"0.00000000734869245782\")).add(\"59.8040805942398\").toString() == \"59.80408060158849245782\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("81663498.972849838663929672", ((System.Decimal("81663498.9723859")).add(System.Decimal("0.000463938663929672"))).toString(), "(new Decimal(\"81663498.9723859\")).add(\"0.000463938663929672\").toString() == \"81663498.972849838663929672\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00775515796977892822", ((System.Decimal("0.00775515796977801")).add(System.Decimal("0.00000000000000091822"))).toString(), "(new Decimal(\"0.00775515796977801\")).add(\"0.00000000000000091822\").toString() == \"0.00775515796977892822\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2.1064457175212998398851037786", ((System.Decimal("0.00000016207366118304")).div(System.Decimal("0.00000007694176965251"))).toString(), "(new Decimal(\"0.00000016207366118304\")).div(\"0.00000007694176965251\").toString() == \"2.1064457175212998398851037786\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000002340974167914459", ((System.Decimal("0.00000008179731703447")).div(System.Decimal("349415.71827485"))).toString(), "(new Decimal(\"0.00000008179731703447\")).div(\"349415.71827485\").toString() == \"0.0000000000002340974167914459\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0002294787101020031897957214", ((System.Decimal("0.0059732997352133")).div(System.Decimal("26.029864524505"))).toString(), "(new Decimal(\"0.0059732997352133\")).div(\"26.029864524505\").toString() == \"0.0002294787101020031897957214\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("418.23899073391138947972", ((System.Decimal("0.00000006466138947972")).add(System.Decimal("418.23899066925"))).toString(), "(new Decimal(\"0.00000006466138947972\")).add(\"418.23899066925\").toString() == \"418.23899073391138947972\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0131911163190212695095445568", ((System.Decimal("0.00000034492730644761")).mul(System.Decimal("38243.1778303549"))).toString(), "(new Decimal(\"0.00000034492730644761\")).mul(\"38243.1778303549\").toString() == \"0.0131911163190212695095445568\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("9114466.43914248870254245", ((System.Decimal("9114466.44883345")).sub(System.Decimal("0.00969096129745755"))).toString(), "(new Decimal(\"9114466.44883345\")).sub(\"0.00969096129745755\").toString() == \"9114466.43914248870254245\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.1084411276877017282935587367", ((System.Decimal("86700.1936243382")).div(System.Decimal("799513.943400008"))).toString(), "(new Decimal(\"86700.1936243382\")).div(\"799513.943400008\").toString() == \"0.1084411276877017282935587367\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("7026.76928435766970903", ((System.Decimal("7026.76950349788")).sub(System.Decimal("0.00021914021029097"))).toString(), "(new Decimal(\"7026.76950349788\")).sub(\"0.00021914021029097\").toString() == \"7026.76928435766970903\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.096260924858888151563666271", ((System.Decimal("0.00000857409563314826")).div(System.Decimal("0.0000890714030196291"))).toString(), "(new Decimal(\"0.00000857409563314826\")).div(\"0.0000890714030196291\").toString() == \"0.096260924858888151563666271\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0008115914662837657985794708", ((System.Decimal("514.340747387307")).div(System.Decimal("633743.414950438"))).toString(), "(new Decimal(\"514.340747387307\")).div(\"633743.414950438\").toString() == \"0.0008115914662837657985794708\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3705.2205420798556425449221712", ((System.Decimal("36636.1514835787")).div(System.Decimal("9.88771142432825"))).toString(), "(new Decimal(\"36636.1514835787\")).div(\"9.88771142432825\").toString() == \"3705.2205420798556425449221712\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6218044.0995191186755705386", ((System.Decimal("0.0000196286755705386")).add(System.Decimal("6218044.09949949"))).toString(), "(new Decimal(\"0.0000196286755705386\")).add(\"6218044.09949949\").toString() == \"6218044.0995191186755705386\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("5425486298351.5378945951530291", ((System.Decimal("9271557.35402906")).mul(System.Decimal("585175.293770235"))).toString(), "(new Decimal(\"9271557.35402906\")).mul(\"585175.293770235\").toString() == \"5425486298351.5378945951530291\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.2685349089827301535187896581", ((System.Decimal("0.00000630784588228345")).mul(System.Decimal("42571.5710234696"))).toString(), "(new Decimal(\"0.00000630784588228345\")).mul(\"42571.5710234696\").toString() == \"0.2685349089827301535187896581\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.008990286561656895507628185", ((System.Decimal("79.3662822709262")).div(System.Decimal("8828.00361552648"))).toString(), "(new Decimal(\"79.3662822709262\")).div(\"8828.00361552648\").toString() == \"0.008990286561656895507628185\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000016331518727729320183918", ((System.Decimal("0.000195716225633266")).mul(System.Decimal("0.00834448890217789"))).toString(), "(new Decimal(\"0.000195716225633266\")).mul(\"0.00834448890217789\").toString() == \"0.0000016331518727729320183918\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2.7085135033764363901309324465", ((System.Decimal("1806435.33906268")).div(System.Decimal("666947.141600282"))).toString(), "(new Decimal(\"1806435.33906268\")).div(\"666947.141600282\").toString() == \"2.7085135033764363901309324465\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000252033112738355342", ((System.Decimal("0.00000000625330349722")).div(System.Decimal("248.114362008923"))).toString(), "(new Decimal(\"0.00000000625330349722\")).div(\"248.114362008923\").toString() == \"0.0000000000252033112738355342\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("201.42054334961017180748893008", ((System.Decimal("8526.34712985081")).mul(System.Decimal("0.0236233102267717"))).toString(), "(new Decimal(\"8526.34712985081\")).mul(\"0.0236233102267717\").toString() == \"201.42054334961017180748893008\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("10.754236522481885", ((System.Decimal("0.859148376090055")).add(System.Decimal("9.89508814639183"))).toString(), "(new Decimal(\"0.859148376090055\")).add(\"9.89508814639183\").toString() == \"10.754236522481885\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000264204888310194008", ((System.Decimal("0.0000334460014633117")).mul(System.Decimal("0.00000078994461744556"))).toString(), "(new Decimal(\"0.0000334460014633117\")).mul(\"0.00000078994461744556\").toString() == \"0.0000000000264204888310194008\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000001107996313797422688", ((System.Decimal("0.00000007144519755218")).mul(System.Decimal("0.00155083385834044"))).toString(), "(new Decimal(\"0.00000007144519755218\")).mul(\"0.00155083385834044\").toString() == \"0.0000000001107996313797422688\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("25826.170172550776692", ((System.Decimal("0.911257319576692")).add(System.Decimal("25825.2589152312"))).toString(), "(new Decimal(\"0.911257319576692\")).add(\"25825.2589152312\").toString() == \"25826.170172550776692\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.5746307910946065180997849971", ((System.Decimal("0.00000942942031166955")).mul(System.Decimal("60940.2033318487"))).toString(), "(new Decimal(\"0.00000942942031166955\")).mul(\"60940.2033318487\").toString() == \"0.5746307910946065180997849971\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-7131030.08640726074029256", ((System.Decimal("0.00613527925970744")).sub(System.Decimal("7131030.09254254"))).toString(), "(new Decimal(\"0.00613527925970744\")).sub(\"7131030.09254254\").toString() == \"-7131030.08640726074029256\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("135954446978.90433258950744003", ((System.Decimal("19833.5587139398")).mul(System.Decimal("6854768.17044186"))).toString(), "(new Decimal(\"19833.5587139398\")).mul(\"6854768.17044186\").toString() == \"135954446978.90433258950744003\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000000184016013412280", ((System.Decimal("0.00000070385779892274")).mul(System.Decimal("0.00000002614391908336"))).toString(), "(new Decimal(\"0.00000070385779892274\")).mul(\"0.00000002614391908336\").toString() == \"0.0000000000000184016013412280\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("0.0967324902802857563", ((System.Decimal("0.0966366946681574")).add(System.Decimal("0.0000957956121283563"))).toString(), "(new Decimal(\"0.0966366946681574\")).add(\"0.0000957956121283563\").toString() == \"0.0967324902802857563\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3.4858202900689973161525454314", ((System.Decimal("0.0000390598294507059")).mul(System.Decimal("89243.1006251104"))).toString(), "(new Decimal(\"0.0000390598294507059\")).mul(\"89243.1006251104\").toString() == \"3.4858202900689973161525454314\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.2996117010710819", ((System.Decimal("0.343008653886155")).sub(System.Decimal("0.0433969528150731"))).toString(), "(new Decimal(\"0.343008653886155\")).sub(\"0.0433969528150731\").toString() == \"0.2996117010710819\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1019564526579.2600710122794931", ((System.Decimal("675939.590519266")).mul(System.Decimal("1508366.34054238"))).toString(), "(new Decimal(\"675939.590519266\")).mul(\"1508366.34054238\").toString() == \"1019564526579.2600710122794931\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("11701304382166.336357593545003", ((System.Decimal("9346774.15031324")).div(System.Decimal("0.00000079878053292575"))).toString(), "(new Decimal(\"9346774.15031324\")).div(\"0.00000079878053292575\").toString() == \"11701304382166.336357593545003\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("18.8587275649694", ((System.Decimal("0.8043270324377")).add(System.Decimal("18.0544005325317"))).toString(), "(new Decimal(\"0.8043270324377\")).add(\"18.0544005325317\").toString() == \"18.8587275649694\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.3614881075703330391274611142", ((System.Decimal("8283.88977715927")).div(System.Decimal("22916.0782987792"))).toString(), "(new Decimal(\"8283.88977715927\")).div(\"22916.0782987792\").toString() == \"0.3614881075703330391274611142\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0179138243756634479624427415", ((System.Decimal("0.0000051464565215383")).mul(System.Decimal("3480.80748388581"))).toString(), "(new Decimal(\"0.0000051464565215383\")).mul(\"3480.80748388581\").toString() == \"0.0179138243756634479624427415\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3141.0458269720196", ((System.Decimal("3232.22058975707")).sub(System.Decimal("91.1747627850504"))).toString(), "(new Decimal(\"3232.22058975707\")).sub(\"91.1747627850504\").toString() == \"3141.0458269720196\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.049293336888446162", ((System.Decimal("0.0490677212593461")).add(System.Decimal("0.000225615629100062"))).toString(), "(new Decimal(\"0.0490677212593461\")).add(\"0.000225615629100062\").toString() == \"0.049293336888446162\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000002423683290519788850175", ((System.Decimal("0.802657312156007")).mul(System.Decimal("0.00000030195741742009"))).toString(), "(new Decimal(\"0.802657312156007\")).mul(\"0.00000030195741742009\").toString() == \"0.0000002423683290519788850175\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.2919303207154997", ((System.Decimal("0.205025212003396")).add(System.Decimal("0.0869051087121037"))).toString(), "(new Decimal(\"0.205025212003396\")).add(\"0.0869051087121037\").toString() == \"0.2919303207154997\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-2406054.4941042150782588707", ((System.Decimal("0.0000560349217411293")).sub(System.Decimal("2406054.49416025"))).toString(), "(new Decimal(\"0.0000560349217411293\")).sub(\"2406054.49416025\").toString() == \"-2406054.4941042150782588707\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-5980723.48834614900984", ((System.Decimal("5.51880703099016")).sub(System.Decimal("5980729.00715318"))).toString(), "(new Decimal(\"5.51880703099016\")).sub(\"5980729.00715318\").toString() == \"-5980723.48834614900984\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("35.122946130589056903", ((System.Decimal("0.000517838589156903")).add(System.Decimal("35.1224282919999"))).toString(), "(new Decimal(\"0.000517838589156903\")).add(\"35.1224282919999\").toString() == \"35.122946130589056903\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1.0616395296301390956592254412", ((System.Decimal("1.59909562747883")).div(System.Decimal("1.50625102292106"))).toString(), "(new Decimal(\"1.59909562747883\")).div(\"1.50625102292106\").toString() == \"1.0616395296301390956592254412\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.000000042829703949835811464", ((System.Decimal("0.0037773409643105")).div(System.Decimal("88194.4215335857"))).toString(), "(new Decimal(\"0.0037773409643105\")).div(\"88194.4215335857\").toString() == \"0.000000042829703949835811464\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.4558196858208716574150445539", ((System.Decimal("0.0000338279696804602")).mul(System.Decimal("13474.6391854597"))).toString(), "(new Decimal(\"0.0000338279696804602\")).mul(\"13474.6391854597\").toString() == \"0.4558196858208716574150445539\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("10427310854.650511570542647536", ((System.Decimal("929163.589109277")).div(System.Decimal("0.0000891086495896376"))).toString(), "(new Decimal(\"929163.589109277\")).div(\"0.0000891086495896376\").toString() == \"10427310854.650511570542647536\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00007532895142320958", ((System.Decimal("0.0000743901701990469")).add(System.Decimal("0.00000093878122416268"))).toString(), "(new Decimal(\"0.0000743901701990469\")).add(\"0.00000093878122416268\").toString() == \"0.00007532895142320958\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0264909276176229880949718672", ((System.Decimal("0.00000944754593514258")).mul(System.Decimal("2804.00093309768"))).toString(), "(new Decimal(\"0.00000944754593514258\")).mul(\"2804.00093309768\").toString() == \"0.0264909276176229880949718672\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6656977.0298766358644049502", ((System.Decimal("0.0000534158644049502")).add(System.Decimal("6656977.02982322"))).toString(), "(new Decimal(\"0.0000534158644049502\")).add(\"6656977.02982322\").toString() == \"6656977.0298766358644049502\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("45.06192539196946555197", ((System.Decimal("45.0619251211462")).add(System.Decimal("0.00000027082326555197"))).toString(), "(new Decimal(\"45.0619251211462\")).add(\"0.00000027082326555197\").toString() == \"45.06192539196946555197\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.7532491528292065411818236803", ((System.Decimal("0.0192431670703195")).mul(System.Decimal("39.1437204736954"))).toString(), "(new Decimal(\"0.0192431670703195\")).mul(\"39.1437204736954\").toString() == \"0.7532491528292065411818236803\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("32841.42265702106787944802", ((System.Decimal("32841.4226569428")).add(System.Decimal("0.00000007826787944802"))).toString(), "(new Decimal(\"32841.4226569428\")).add(\"0.00000007826787944802\").toString() == \"32841.42265702106787944802\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.533546652893328", ((System.Decimal("0.586064839077212")).sub(System.Decimal("1.11961149197054"))).toString(), "(new Decimal(\"0.586064839077212\")).sub(\"1.11961149197054\").toString() == \"-0.533546652893328\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0152641533045431917355310935", ((System.Decimal("0.0829612452457479")).div(System.Decimal("5.43503747574754"))).toString(), "(new Decimal(\"0.0829612452457479\")).div(\"5.43503747574754\").toString() == \"0.0152641533045431917355310935\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2.07943625828976430743030201", ((System.Decimal("20551.2384514097")).mul(System.Decimal("0.0001011830145033"))).toString(), "(new Decimal(\"20551.2384514097\")).mul(\"0.0001011830145033\").toString() == \"2.07943625828976430743030201\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00200242491956568541", ((System.Decimal("0.00000000928487284541")).add(System.Decimal("0.00200241563469284"))).toString(), "(new Decimal(\"0.00000000928487284541\")).add(\"0.00200241563469284\").toString() == \"0.00200242491956568541\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("27474.82141819801736601648", ((System.Decimal("27474.8214182792")).sub(System.Decimal("0.00000008118263398352"))).toString(), "(new Decimal(\"27474.8214182792\")).sub(\"0.00000008118263398352\").toString() == \"27474.82141819801736601648\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("19505128.063929281919635586038", ((System.Decimal("6414.16630540703")).mul(System.Decimal("3040.9451727946"))).toString(), "(new Decimal(\"6414.16630540703\")).mul(\"3040.9451727946\").toString() == \"19505128.063929281919635586038\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000000211764764198660", ((System.Decimal("0.00000000801082840562")).mul(System.Decimal("0.00000264348146628751"))).toString(), "(new Decimal(\"0.00000000801082840562\")).mul(\"0.00000264348146628751\").toString() == \"0.0000000000000211764764198660\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("29310.7074822921281587436", ((System.Decimal("29310.7074821883")).add(System.Decimal("0.0000001038281587436"))).toString(), "(new Decimal(\"29310.7074821883\")).add(\"0.0000001038281587436\").toString() == \"29310.7074822921281587436\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("617351.64866589589161", ((System.Decimal("1.61116872989161")).add(System.Decimal("617350.037497166"))).toString(), "(new Decimal(\"1.61116872989161\")).add(\"617350.037497166\").toString() == \"617351.64866589589161\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("337233.524335051926147", ((System.Decimal("337234.288611093")).sub(System.Decimal("0.764276041073853"))).toString(), "(new Decimal(\"337234.288611093\")).sub(\"0.764276041073853\").toString() == \"337233.524335051926147\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("7.6904022918582991385960050287", ((System.Decimal("32138.4941377391")).div(System.Decimal("4179.03939456634"))).toString(), "(new Decimal(\"32138.4941377391\")).div(\"4179.03939456634\").toString() == \"7.6904022918582991385960050287\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0047544230501718142812280295", ((System.Decimal("0.00000007299932379881")).mul(System.Decimal("65129.6861773029"))).toString(), "(new Decimal(\"0.00000007299932379881\")).mul(\"65129.6861773029\").toString() == \"0.0047544230501718142812280295\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("177.17069194538229090005225569", ((System.Decimal("61.8418688242519")).mul(System.Decimal("2.86489873792273"))).toString(), "(new Decimal(\"61.8418688242519\")).mul(\"2.86489873792273\").toString() == \"177.17069194538229090005225569\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.00090633373724312275", ((System.Decimal("0.00000015291550483225")).sub(System.Decimal("0.000906486652747955"))).toString(), "(new Decimal(\"0.00000015291550483225\")).sub(\"0.000906486652747955\").toString() == \"-0.00090633373724312275\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("210814147.39980929140353613261", ((System.Decimal("201009.576768153")).div(System.Decimal("0.0009534918754145"))).toString(), "(new Decimal(\"201009.576768153\")).div(\"0.0009534918754145\").toString() == \"210814147.39980929140353613261\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("65.305649646129420352210897086", ((System.Decimal("61261.8303211694")).div(System.Decimal("938.078568288162"))).toString(), "(new Decimal(\"61261.8303211694\")).div(\"938.078568288162\").toString() == \"65.305649646129420352210897086\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000567043665774743633592246", ((System.Decimal("0.000743901346690907")).mul(System.Decimal("0.0762256538850375"))).toString(), "(new Decimal(\"0.000743901346690907\")).mul(\"0.0762256538850375\").toString() == \"0.0000567043665774743633592246\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.05230421037247136292", ((System.Decimal("0.00000023104058123708")).sub(System.Decimal("0.0523044414130526"))).toString(), "(new Decimal(\"0.00000023104058123708\")).sub(\"0.0523044414130526\").toString() == \"-0.05230421037247136292\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00017292070654543156", ((System.Decimal("0.000172902369020927")).add(System.Decimal("0.00000001833752450456"))).toString(), "(new Decimal(\"0.000172902369020927\")).add(\"0.00000001833752450456\").toString() == \"0.00017292070654543156\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("143190227.86340201590179660913", ((System.Decimal("3255426.24725747")).mul(System.Decimal("43.9850934985956"))).toString(), "(new Decimal(\"3255426.24725747\")).mul(\"43.9850934985956\").toString() == \"143190227.86340201590179660913\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.1676963823218234630227555937", ((System.Decimal("21.2078276654742")).mul(System.Decimal("0.00790728710960005"))).toString(), "(new Decimal(\"21.2078276654742\")).mul(\"0.00790728710960005\").toString() == \"0.1676963823218234630227555937\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("60489172470134.035656681147318", ((System.Decimal("4188316.9832585")).div(System.Decimal("0.00000006924077173194"))).toString(), "(new Decimal(\"4188316.9832585\")).div(\"0.00000006924077173194\").toString() == \"60489172470134.035656681147318\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000318298804579463009", ((System.Decimal("0.00000895273411132057")).mul(System.Decimal("0.00000355532511768645"))).toString(), "(new Decimal(\"0.00000895273411132057\")).mul(\"0.00000355532511768645\").toString() == \"0.0000000000318298804579463009\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000089928800565775915465556", ((System.Decimal("0.00000007554147973449")).div(System.Decimal("0.00840014314204461"))).toString(), "(new Decimal(\"0.00000007554147973449\")).div(\"0.00840014314204461\").toString() == \"0.0000089928800565775915465556\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.8703972221908718709658421930", ((System.Decimal("1970.18939162148")).mul(System.Decimal("0.000441783528980698"))).toString(), "(new Decimal(\"1970.18939162148\")).mul(\"0.000441783528980698\").toString() == \"0.8703972221908718709658421930\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("0.0004450282480720230655413695", ((System.Decimal("85093.5901911434")).mul(System.Decimal("0.00000000522986804379"))).toString(), "(new Decimal(\"85093.5901911434\")).mul(\"0.00000000522986804379\").toString() == \"0.0004450282480720230655413695\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000029398859004321386304627", ((System.Decimal("0.00000063867933891652")).div(System.Decimal("0.21724630157335"))).toString(), "(new Decimal(\"0.00000063867933891652\")).div(\"0.21724630157335\").toString() == \"0.0000029398859004321386304627\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("27880476326.169787243758340455", ((System.Decimal("1174.96172020909")).div(System.Decimal("0.00000004214281371894"))).toString(), "(new Decimal(\"1174.96172020909\")).div(\"0.00000004214281371894\").toString() == \"27880476326.169787243758340455\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3.943883571766263181", ((System.Decimal("0.000293723326313181")).add(System.Decimal("3.94358984843995"))).toString(), "(new Decimal(\"0.000293723326313181\")).add(\"3.94358984843995\").toString() == \"3.943883571766263181\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0600993529068002334144135817", ((System.Decimal("8807.4719481205")).mul(System.Decimal("0.00000682367803846657"))).toString(), "(new Decimal(\"8807.4719481205\")).mul(\"0.00000682367803846657\").toString() == \"0.0600993529068002334144135817\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000431097888386651556", ((System.Decimal("0.00000003024844593846")).div(System.Decimal("701.660730737103"))).toString(), "(new Decimal(\"0.00000003024844593846\")).div(\"701.660730737103\").toString() == \"0.0000000000431097888386651556\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("399060.217697562714717", ((System.Decimal("399059.695377508")).add(System.Decimal("0.522320054714717"))).toString(), "(new Decimal(\"399059.695377508\")).add(\"0.522320054714717\").toString() == \"399060.217697562714717\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0012047312567642078041930781", ((System.Decimal("0.0000555624811237503")).div(System.Decimal("0.0461202287329921"))).toString(), "(new Decimal(\"0.0000555624811237503\")).div(\"0.0461202287329921\").toString() == \"0.0012047312567642078041930781\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00079532968335544253", ((System.Decimal("0.000795415484716844")).sub(System.Decimal("0.00000008580136140147"))).toString(), "(new Decimal(\"0.000795415484716844\")).sub(\"0.00000008580136140147\").toString() == \"0.00079532968335544253\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000000031232274783683", ((System.Decimal("0.0000000384458527148")).mul(System.Decimal("0.00000008123704529425"))).toString(), "(new Decimal(\"0.0000000384458527148\")).mul(\"0.00000008123704529425\").toString() == \"0.0000000000000031232274783683\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("7.09650010408205501", ((System.Decimal("7.10522364224551")).sub(System.Decimal("0.00872353816345499"))).toString(), "(new Decimal(\"7.10522364224551\")).sub(\"0.00872353816345499\").toString() == \"7.09650010408205501\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0007994485260663810953884227", ((System.Decimal("0.00000104549135595816")).mul(System.Decimal("764.66297067919"))).toString(), "(new Decimal(\"0.00000104549135595816\")).mul(\"764.66297067919\").toString() == \"0.0007994485260663810953884227\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00005958359417346475", ((System.Decimal("0.00005906747824469")).add(System.Decimal("0.00000051611592877475"))).toString(), "(new Decimal(\"0.00005906747824469\")).add(\"0.00000051611592877475\").toString() == \"0.00005958359417346475\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("22.984133602578256", ((System.Decimal("23.9156692400182")).sub(System.Decimal("0.931535637439944"))).toString(), "(new Decimal(\"23.9156692400182\")).sub(\"0.931535637439944\").toString() == \"22.984133602578256\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("9044.376757482239651", ((System.Decimal("0.847812742389651")).add(System.Decimal("9043.52894473985"))).toString(), "(new Decimal(\"0.847812742389651\")).add(\"9043.52894473985\").toString() == \"9044.376757482239651\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6.0742324680822732941708751327", ((System.Decimal("0.00575696487713464")).div(System.Decimal("0.000947768283052262"))).toString(), "(new Decimal(\"0.00575696487713464\")).div(\"0.000947768283052262\").toString() == \"6.0742324680822732941708751327\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6530598.5049727231538", ((System.Decimal("1.5620848031538")).add(System.Decimal("6530596.94288792"))).toString(), "(new Decimal(\"1.5620848031538\")).add(\"6530596.94288792\").toString() == \"6530598.5049727231538\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.83028435898026679", ((System.Decimal("0.828937773047452")).add(System.Decimal("0.00134658593281479"))).toString(), "(new Decimal(\"0.828937773047452\")).add(\"0.00134658593281479\").toString() == \"0.83028435898026679\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("325484.521350383343706", ((System.Decimal("0.376231768343706")).add(System.Decimal("325484.145118615"))).toString(), "(new Decimal(\"0.376231768343706\")).add(\"325484.145118615\").toString() == \"325484.521350383343706\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000777304608453940168", ((System.Decimal("0.00000590405144537988")).div(System.Decimal("75955.4411638321"))).toString(), "(new Decimal(\"0.00000590405144537988\")).div(\"75955.4411638321\").toString() == \"0.0000000000777304608453940168\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("12434660348.106831437568180728", ((System.Decimal("3653.47703623282")).mul(System.Decimal("3403514.0291804"))).toString(), "(new Decimal(\"3653.47703623282\")).mul(\"3403514.0291804\").toString() == \"12434660348.106831437568180728\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-9833.95711193194680614", ((System.Decimal("0.00173078235319386")).sub(System.Decimal("9833.9588427143"))).toString(), "(new Decimal(\"0.00173078235319386\")).sub(\"9833.9588427143\").toString() == \"-9833.95711193194680614\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0015484436906515457496509768", ((System.Decimal("0.00744602976247949")).div(System.Decimal("4.80871846191991"))).toString(), "(new Decimal(\"0.00744602976247949\")).div(\"4.80871846191991\").toString() == \"0.0015484436906515457496509768\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.00052546074370409361", ((System.Decimal("0.00000004717649661339")).sub(System.Decimal("0.000525507920200707"))).toString(), "(new Decimal(\"0.00000004717649661339\")).sub(\"0.000525507920200707\").toString() == \"-0.00052546074370409361\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00714578542212060626", ((System.Decimal("0.00714523922984732")).add(System.Decimal("0.00000054619227328626"))).toString(), "(new Decimal(\"0.00714523922984732\")).add(\"0.00000054619227328626\").toString() == \"0.00714578542212060626\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("11896454.256511241955105336836", ((System.Decimal("0.597390746975965")).div(System.Decimal("0.00000005021586550875"))).toString(), "(new Decimal(\"0.597390746975965\")).div(\"0.00000005021586550875\").toString() == \"11896454.256511241955105336836\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("364.437275047617911", ((System.Decimal("363.565448840878")).add(System.Decimal("0.871826206739911"))).toString(), "(new Decimal(\"363.565448840878\")).add(\"0.871826206739911\").toString() == \"364.437275047617911\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000147725045250754551933182", ((System.Decimal("0.932537071375426")).div(System.Decimal("63126.5382110731"))).toString(), "(new Decimal(\"0.932537071375426\")).div(\"63126.5382110731\").toString() == \"0.0000147725045250754551933182\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.4315077590098242678457705989", ((System.Decimal("0.000505016916666653")).mul(System.Decimal("854.442187517156"))).toString(), "(new Decimal(\"0.000505016916666653\")).mul(\"854.442187517156\").toString() == \"0.4315077590098242678457705989\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("412.7330880174277915666407937", ((System.Decimal("0.00000767397499069291")).div(System.Decimal("0.00000001859306950057"))).toString(), "(new Decimal(\"0.00000767397499069291\")).div(\"0.00000001859306950057\").toString() == \"412.7330880174277915666407937\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("4.8954788657062800977983135139", ((System.Decimal("48.1948680468811")).div(System.Decimal("9.84477093436046"))).toString(), "(new Decimal(\"48.1948680468811\")).div(\"9.84477093436046\").toString() == \"4.8954788657062800977983135139\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0064424440545718793484521534", ((System.Decimal("35741.8810649504")).div(System.Decimal("5547876.0486226"))).toString(), "(new Decimal(\"35741.8810649504\")).div(\"5547876.0486226\").toString() == \"0.0064424440545718793484521534\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-7840059.26355683558168130721", ((System.Decimal("0.00000038441831869279")).sub(System.Decimal("7840059.26355722"))).toString(), "(new Decimal(\"0.00000038441831869279\")).sub(\"7840059.26355722\").toString() == \"-7840059.26355683558168130721\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000010412673718308481481839", ((System.Decimal("0.58575165205903")).mul(System.Decimal("0.00000177766015370267"))).toString(), "(new Decimal(\"0.58575165205903\")).mul(\"0.00000177766015370267\").toString() == \"0.0000010412673718308481481839\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0231355645607838738592882811", ((System.Decimal("0.257475164838822")).mul(System.Decimal("0.0898555189789532"))).toString(), "(new Decimal(\"0.257475164838822\")).mul(\"0.0898555189789532\").toString() == \"0.0231355645607838738592882811\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.89438686678278632674", ((System.Decimal("0.894392650525269")).sub(System.Decimal("0.00000578374248267326"))).toString(), "(new Decimal(\"0.894392650525269\")).sub(\"0.00000578374248267326\").toString() == \"0.89438686678278632674\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("337199.86960434358937474129803", ((System.Decimal("0.866065117468156")).mul(System.Decimal("389347.016527013"))).toString(), "(new Decimal(\"0.866065117468156\")).mul(\"389347.016527013\").toString() == \"337199.86960434358937474129803\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6945.02700940949904670415", ((System.Decimal("6945.02700909275")).add(System.Decimal("0.00000031674904670415"))).toString(), "(new Decimal(\"6945.02700909275\")).add(\"0.00000031674904670415\").toString() == \"6945.02700940949904670415\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.6270357829644514", ((System.Decimal("0.0701352525829036")).sub(System.Decimal("0.697171035547355"))).toString(), "(new Decimal(\"0.0701352525829036\")).sub(\"0.697171035547355\").toString() == \"-0.6270357829644514\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("4701135155925.6905911960346018", ((System.Decimal("4111897.07187558")).div(System.Decimal("0.00000087466046720495"))).toString(), "(new Decimal(\"4111897.07187558\")).div(\"0.00000087466046720495\").toString() == \"4701135155925.6905911960346018\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1.2422351601221653564432762392", ((System.Decimal("586.657266871378")).div(System.Decimal("472.25942857203"))).toString(), "(new Decimal(\"586.657266871378\")).div(\"472.25942857203\").toString() == \"1.2422351601221653564432762392\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("110083.27919112734183960167159", ((System.Decimal("5794135.34411887")).div(System.Decimal("52.6341092552217"))).toString(), "(new Decimal(\"5794135.34411887\")).div(\"52.6341092552217\").toString() == \"110083.27919112734183960167159\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2702544.8136089281527176927398", ((System.Decimal("0.836109915671921")).div(System.Decimal("0.00000030937874238444"))).toString(), "(new Decimal(\"0.836109915671921\")).div(\"0.00000030937874238444\").toString() == \"2702544.8136089281527176927398\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("9.5559085980678392684631700448", ((System.Decimal("0.00855813363034191")).div(System.Decimal("0.000895585547152714"))).toString(), "(new Decimal(\"0.00855813363034191\")).div(\"0.000895585547152714\").toString() == \"9.5559085980678392684631700448\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00800141297577573362", ((System.Decimal("0.00800136662460927")).add(System.Decimal("0.00000004635116646362"))).toString(), "(new Decimal(\"0.00800136662460927\")).add(\"0.00000004635116646362\").toString() == \"0.00800141297577573362\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00000763849065389414", ((System.Decimal("0.00000759593656174649")).add(System.Decimal("0.00000004255409214765"))).toString(), "(new Decimal(\"0.00000759593656174649\")).add(\"0.00000004255409214765\").toString() == \"0.00000763849065389414\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("8586.7522222217789298276464381", ((System.Decimal("92.2359921001997")).mul(System.Decimal("93.0954611828064"))).toString(), "(new Decimal(\"92.2359921001997\")).mul(\"93.0954611828064\").toString() == \"8586.7522222217789298276464381\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.9931136155639471788378564663", ((System.Decimal("1609.99809932429")).mul(System.Decimal("0.000616841483217125"))).toString(), "(new Decimal(\"1609.99809932429\")).mul(\"0.000616841483217125\").toString() == \"0.9931136155639471788378564663\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("4.8983950361677169391106759502", ((System.Decimal("7466.33106724654")).mul(System.Decimal("0.000656064537193656"))).toString(), "(new Decimal(\"7466.33106724654\")).mul(\"0.000656064537193656\").toString() == \"4.8983950361677169391106759502\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0940287920654541467547713549", ((System.Decimal("5.9157444098572")).div(System.Decimal("62.9141806452135"))).toString(), "(new Decimal(\"5.9157444098572\")).div(\"62.9141806452135\").toString() == \"0.0940287920654541467547713549\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000081194917301801093808069", ((System.Decimal("0.00000000478547779135")).div(System.Decimal("0.00058938144780201"))).toString(), "(new Decimal(\"0.00000000478547779135\")).div(\"0.00058938144780201\").toString() == \"0.0000081194917301801093808069\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000237129540524444766519", ((System.Decimal("0.242301107962756")).mul(System.Decimal("0.00000009786564432916"))).toString(), "(new Decimal(\"0.242301107962756\")).mul(\"0.00000009786564432916\").toString() == \"0.0000000237129540524444766519\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1985896464.0383833019058040956", ((System.Decimal("414250.732126763")).mul(System.Decimal("4793.94798855947"))).toString(), "(new Decimal(\"414250.732126763\")).mul(\"4793.94798855947\").toString() == \"1985896464.0383833019058040956\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3.2317284500242951973203537433", ((System.Decimal("2102650.26060056")).div(System.Decimal("650627.146777989"))).toString(), "(new Decimal(\"2102650.26060056\")).div(\"650627.146777989\").toString() == \"3.2317284500242951973203537433\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("105.92536134455608", ((System.Decimal("111.791148368172")).sub(System.Decimal("5.86578702361592"))).toString(), "(new Decimal(\"111.791148368172\")).sub(\"5.86578702361592\").toString() == \"105.92536134455608\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.8746476497299917849874735069", ((System.Decimal("1.16457231397022")).mul(System.Decimal("0.751046233228895"))).toString(), "(new Decimal(\"1.16457231397022\")).mul(\"0.751046233228895\").toString() == \"0.8746476497299917849874735069\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-8083400.16197386453424333806", ((System.Decimal("0.00000185546575666194")).sub(System.Decimal("8083400.16197572"))).toString(), "(new Decimal(\"0.00000185546575666194\")).sub(\"8083400.16197572\").toString() == \"-8083400.16197386453424333806\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1498.0600060982110689932047605", ((System.Decimal("90.5140531205172")).div(System.Decimal("0.0604208461290323"))).toString(), "(new Decimal(\"90.5140531205172\")).div(\"0.0604208461290323\").toString() == \"1498.0600060982110689932047605\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0408729994202976123433973094", ((System.Decimal("0.00000006767841650531")).mul(System.Decimal("603929.606081885"))).toString(), "(new Decimal(\"0.00000006767841650531\")).mul(\"603929.606081885\").toString() == \"0.0408729994202976123433973094\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00008319630302265116", ((System.Decimal("0.000082278563073966")).add(System.Decimal("0.00000091773994868516"))).toString(), "(new Decimal(\"0.000082278563073966\")).add(\"0.00000091773994868516\").toString() == \"0.00008319630302265116\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("5.499829306499955", ((System.Decimal("6.2219416937893")).sub(System.Decimal("0.722112387289345"))).toString(), "(new Decimal(\"6.2219416937893\")).sub(\"0.722112387289345\").toString() == \"5.499829306499955\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("367.786135251658876272", ((System.Decimal("367.786185987194")).sub(System.Decimal("0.000050735535123728"))).toString(), "(new Decimal(\"367.786185987194\")).sub(\"0.000050735535123728\").toString() == \"367.786135251658876272\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("10.312338090882360499767870669", ((System.Decimal("517330.180628845")).div(System.Decimal("50166.1384711816"))).toString(), "(new Decimal(\"517330.180628845\")).div(\"50166.1384711816\").toString() == \"10.312338090882360499767870669\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000050661264951214749723215", ((System.Decimal("0.243327718807071")).div(System.Decimal("48030.3283073149"))).toString(), "(new Decimal(\"0.243327718807071\")).div(\"48030.3283073149\").toString() == \"0.0000050661264951214749723215\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.00002335923605396378", ((System.Decimal("0.00000005842985946612")).sub(System.Decimal("0.0000234176659134299"))).toString(), "(new Decimal(\"0.00000005842985946612\")).sub(\"0.0000234176659134299\").toString() == \"-0.00002335923605396378\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("733335461.13670180722389446974", ((System.Decimal("1060005.08231111")).mul(System.Decimal("691.822589697234"))).toString(), "(new Decimal(\"1060005.08231111\")).mul(\"691.822589697234\").toString() == \"733335461.13670180722389446974\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("508358.93909651945980882198688", ((System.Decimal("7.63294460141703")).mul(System.Decimal("66600.6326054226"))).toString(), "(new Decimal(\"7.63294460141703\")).mul(\"66600.6326054226\").toString() == \"508358.93909651945980882198688\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1830847.8153588342112017535059", ((System.Decimal("60437.9311485393")).mul(System.Decimal("30.2930259286859"))).toString(), "(new Decimal(\"60437.9311485393\")).mul(\"30.2930259286859\").toString() == \"1830847.8153588342112017535059\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000810736550010910727", ((System.Decimal("0.0000225892997917669")).div(System.Decimal("278626.883066551"))).toString(), "(new Decimal(\"0.0000225892997917669\")).div(\"278626.883066551\").toString() == \"0.0000000000810736550010910727\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("77.65643053701936456364", ((System.Decimal("0.00000007573536456364")).add(System.Decimal("77.656430461284"))).toString(), "(new Decimal(\"0.00000007573536456364\")).add(\"77.656430461284\").toString() == \"77.65643053701936456364\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0248440823395338596229713692", ((System.Decimal("0.293818466502157")).mul(System.Decimal("0.0845558913818355"))).toString(), "(new Decimal(\"0.293818466502157\")).mul(\"0.0845558913818355\").toString() == \"0.0248440823395338596229713692\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00492439746169578524", ((System.Decimal("0.00000572612989960524")).add(System.Decimal("0.00491867133179618"))).toString(), "(new Decimal(\"0.00000572612989960524\")).add(\"0.00491867133179618\").toString() == \"0.00492439746169578524\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("13138076.691468148650986791474", ((System.Decimal("3923274.88117073")).mul(System.Decimal("3.34875253185106"))).toString(), "(new Decimal(\"3923274.88117073\")).mul(\"3.34875253185106\").toString() == \"13138076.691468148650986791474\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0008676636364626068", ((System.Decimal("0.000932349686013698")).sub(System.Decimal("0.0000646860495510912"))).toString(), "(new Decimal(\"0.000932349686013698\")).sub(\"0.0000646860495510912\").toString() == \"0.0008676636364626068\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("41516.8349721547454", ((System.Decimal("41601.7347674825")).sub(System.Decimal("84.8997953277546"))).toString(), "(new Decimal(\"41601.7347674825\")).sub(\"84.8997953277546\").toString() == \"41516.8349721547454\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.33506006843864413748", ((System.Decimal("0.00000371631919113748")).add(System.Decimal("0.335056352119453"))).toString(), "(new Decimal(\"0.00000371631919113748\")).add(\"0.335056352119453\").toString() == \"0.33506006843864413748\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("216355.8589961767217502328842", ((System.Decimal("873.952093941137")).div(System.Decimal("0.00403941958399463"))).toString(), "(new Decimal(\"873.952093941137\")).div(\"0.00403941958399463\").toString() == \"216355.8589961767217502328842\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("45.974464247116189804566774409", ((System.Decimal("278186.309746553")).mul(System.Decimal("0.000165265013540753"))).toString(), "(new Decimal(\"278186.309746553\")).mul(\"0.000165265013540753\").toString() == \"45.974464247116189804566774409\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("411.8834926940230607258", ((System.Decimal("411.883402341922")).add(System.Decimal("0.0000903521010607258"))).toString(), "(new Decimal(\"411.883402341922\")).add(\"0.0000903521010607258\").toString() == \"411.8834926940230607258\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2010677.7183839557954851115873", ((System.Decimal("0.280687715057604")).mul(System.Decimal("7163397.64984483"))).toString(), "(new Decimal(\"0.280687715057604\")).mul(\"7163397.64984483\").toString() == \"2010677.7183839557954851115873\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0268467935821811160643869611", ((System.Decimal("484.96830299728")).mul(System.Decimal("0.0000553578314629187"))).toString(), "(new Decimal(\"484.96830299728\")).mul(\"0.0000553578314629187\").toString() == \"0.0268467935821811160643869611\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0916931643365465232681665674", ((System.Decimal("0.00000004376192267228")).div(System.Decimal("0.00000047726483199618"))).toString(), "(new Decimal(\"0.00000004376192267228\")).div(\"0.00000047726483199618\").toString() == \"0.0916931643365465232681665674\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0206632160994641183202944665", ((System.Decimal("0.00000039209536760677")).div(System.Decimal("0.000018975524706289"))).toString(), "(new Decimal(\"0.00000039209536760677\")).div(\"0.000018975524706289\").toString() == \"0.0206632160994641183202944665\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("5657.8995636199841461392843417", ((System.Decimal("6198172.99591292")).mul(System.Decimal("0.000912833437748641"))).toString(), "(new Decimal(\"6198172.99591292\")).mul(\"0.000912833437748641\").toString() == \"5657.8995636199841461392843417\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("36474.31596809736535", ((System.Decimal("7.05634104416535")).add(System.Decimal("36467.2596270532"))).toString(), "(new Decimal(\"7.05634104416535\")).add(\"36467.2596270532\").toString() == \"36474.31596809736535\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.4258812461246507845677082109", ((System.Decimal("698.142959595725")).mul(System.Decimal("0.000610020111599015"))).toString(), "(new Decimal(\"698.142959595725\")).mul(\"0.000610020111599015\").toString() == \"0.4258812461246507845677082109\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-3682769.2669420779522", ((System.Decimal("88.0442409720478")).sub(System.Decimal("3682857.31118305"))).toString(), "(new Decimal(\"88.0442409720478\")).sub(\"3682857.31118305\").toString() == \"-3682769.2669420779522\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-8049831.4965358431074197046", ((System.Decimal("0.0000389968925802954")).sub(System.Decimal("8049831.49657484"))).toString(), "(new Decimal(\"0.0000389968925802954\")).sub(\"8049831.49657484\").toString() == \"-8049831.4965358431074197046\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("36155.62014127020986184166", ((System.Decimal("0.00000024290986184166")).add(System.Decimal("36155.6201410273"))).toString(), "(new Decimal(\"0.00000024290986184166\")).add(\"36155.6201410273\").toString() == \"36155.62014127020986184166\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3294378.802389452177", ((System.Decimal("3294319.65169232")).add(System.Decimal("59.150697132177"))).toString(), "(new Decimal(\"3294319.65169232\")).add(\"59.150697132177\").toString() == \"3294378.802389452177\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("126628888131.45293056779587565", ((System.Decimal("29296.0378012136")).mul(System.Decimal("4322389.56648968"))).toString(), "(new Decimal(\"29296.0378012136\")).mul(\"4322389.56648968\").toString() == \"126628888131.45293056779587565\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("15.17547972741327", ((System.Decimal("7.7507224575387")).add(System.Decimal("7.42475726987457"))).toString(), "(new Decimal(\"7.7507224575387\")).add(\"7.42475726987457\").toString() == \"15.17547972741327\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.7623358443707398129", ((System.Decimal("0.762320778221973")).add(System.Decimal("0.0000150661487668129"))).toString(), "(new Decimal(\"0.762320778221973\")).add(\"0.0000150661487668129\").toString() == \"0.7623358443707398129\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-30306.453181107727", ((System.Decimal("745.766049132573")).sub(System.Decimal("31052.2192302403"))).toString(), "(new Decimal(\"745.766049132573\")).sub(\"31052.2192302403\").toString() == \"-30306.453181107727\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("43450065.810652162786851680039", ((System.Decimal("4.03395124898942")).div(System.Decimal("0.0000000928410849035"))).toString(), "(new Decimal(\"4.03395124898942\")).div(\"0.0000000928410849035\").toString() == \"43450065.810652162786851680039\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("89.719799308907125", ((System.Decimal("89.2452192442702")).add(System.Decimal("0.474580064636925"))).toString(), "(new Decimal(\"89.2452192442702\")).add(\"0.474580064636925\").toString() == \"89.719799308907125\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("7616096.4244623971027726383725", ((System.Decimal("0.754648202450317")).div(System.Decimal("0.00000009908595695118"))).toString(), "(new Decimal(\"0.754648202450317\")).div(\"0.00000009908595695118\").toString() == \"7616096.4244623971027726383725\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0001721507228208858110900319", ((System.Decimal("0.00000000703358706414")).div(System.Decimal("0.0000408571451161323"))).toString(), "(new Decimal(\"0.00000000703358706414\")).div(\"0.0000408571451161323\").toString() == \"0.0001721507228208858110900319\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000022714462393900636", ((System.Decimal("0.00000008484566439169")).mul(System.Decimal("0.0000267715063070746"))).toString(), "(new Decimal(\"0.00000008484566439169\")).mul(\"0.0000267715063070746\").toString() == \"0.0000000000022714462393900636\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("95740315594.555877584430293733", ((System.Decimal("753944.105819773")).div(System.Decimal("0.0000078748863646178"))).toString(), "(new Decimal(\"753944.105819773\")).div(\"0.0000078748863646178\").toString() == \"95740315594.555877584430293733\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6.4069192960141739237", ((System.Decimal("6.40685234982839")).add(System.Decimal("0.0000669461857839237"))).toString(), "(new Decimal(\"6.40685234982839\")).add(\"0.0000669461857839237\").toString() == \"6.4069192960141739237\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2.7730492038105317936901033936", ((System.Decimal("7091326.72152078")).mul(System.Decimal("0.00000039104801015512"))).toString(), "(new Decimal(\"7091326.72152078\")).mul(\"0.00000039104801015512\").toString() == \"2.7730492038105317936901033936\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("39.225255132451082330972995533", ((System.Decimal("0.0150400641909987")).mul(System.Decimal("2608.05104514959"))).toString(), "(new Decimal(\"0.0150400641909987\")).mul(\"2608.05104514959\").toString() == \"39.225255132451082330972995533\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2.48947713311905352214", ((System.Decimal("2.48947596293384")).add(System.Decimal("0.00000117018521352214"))).toString(), "(new Decimal(\"2.48947596293384\")).add(\"0.00000117018521352214\").toString() == \"2.48947713311905352214\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("880946682.13701250534829592747", ((System.Decimal("720.791596789282")).div(System.Decimal("0.00000081820115950806"))).toString(), "(new Decimal(\"720.791596789282\")).div(\"0.00000081820115950806\").toString() == \"880946682.13701250534829592747\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("267.25912423523108411359660085", ((System.Decimal("378388.367769489")).mul(System.Decimal("0.000706309038543286"))).toString(), "(new Decimal(\"378388.367769489\")).mul(\"0.000706309038543286\").toString() == \"267.25912423523108411359660085\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-32046.841084978907", ((System.Decimal("978.517128610293")).sub(System.Decimal("33025.3582135892"))).toString(), "(new Decimal(\"978.517128610293\")).sub(\"33025.3582135892\").toString() == \"-32046.841084978907\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00139737929887948", ((System.Decimal("0.00217247345120296")).sub(System.Decimal("0.00077509415232348"))).toString(), "(new Decimal(\"0.00217247345120296\")).sub(\"0.00077509415232348\").toString() == \"0.00139737929887948\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000046530416190453426", ((System.Decimal("0.000136329152219151")).mul(System.Decimal("0.0000000341309363647"))).toString(), "(new Decimal(\"0.000136329152219151\")).mul(\"0.0000000341309363647\").toString() == \"0.0000000000046530416190453426\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-4850951.788916537256405138", ((System.Decimal("0.000426702743594862")).sub(System.Decimal("4850951.78934324"))).toString(), "(new Decimal(\"0.000426702743594862\")).sub(\"4850951.78934324\").toString() == \"-4850951.788916537256405138\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3607.9677572355331381655390708", ((System.Decimal("219.782070359114")).div(System.Decimal("0.0609157523423972"))).toString(), "(new Decimal(\"219.782070359114\")).div(\"0.0609157523423972\").toString() == \"3607.9677572355331381655390708\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-59578.20478480686224", ((System.Decimal("9.13404255133776")).sub(System.Decimal("59587.3388273582"))).toString(), "(new Decimal(\"9.13404255133776\")).sub(\"59587.3388273582\").toString() == \"-59578.20478480686224\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("7579.1908166668147017746539623", ((System.Decimal("0.000786728870489974")).div(System.Decimal("0.00000010380116948104"))).toString(), "(new Decimal(\"0.000786728870489974\")).div(\"0.00000010380116948104\").toString() == \"7579.1908166668147017746539623\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-4.1981967099609962025", ((System.Decimal("0.0000004602920037975")).sub(System.Decimal("4.198197170253"))).toString(), "(new Decimal(\"0.0000004602920037975\")).sub(\"4.198197170253\").toString() == \"-4.1981967099609962025\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00008656549534796066", ((System.Decimal("0.0000866447461706795")).sub(System.Decimal("0.00000007925082271884"))).toString(), "(new Decimal(\"0.0000866447461706795\")).sub(\"0.00000007925082271884\").toString() == \"0.00008656549534796066\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0002938065361778543390344760", ((System.Decimal("0.00000388761161541921")).mul(System.Decimal("75.5750741695869"))).toString(), "(new Decimal(\"0.00000388761161541921\")).mul(\"75.5750741695869\").toString() == \"0.0002938065361778543390344760\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("0.07021769672083374498", ((System.Decimal("0.0702169635660094")).add(System.Decimal("0.00000073315482434498"))).toString(), "(new Decimal(\"0.0702169635660094\")).add(\"0.00000073315482434498\").toString() == \"0.07021769672083374498\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("248795975759.24153521774922170", ((System.Decimal("274391.580035161")).mul(System.Decimal("906718.696424141"))).toString(), "(new Decimal(\"274391.580035161\")).mul(\"906718.696424141\").toString() == \"248795975759.24153521774922170\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("0.0000063518043668020539957365", ((System.Decimal("0.00000067736893644434")).mul(System.Decimal("9.37717102904672"))).toString(), "(new Decimal(\"0.00000067736893644434\")).mul(\"9.37717102904672\").toString() == \"0.0000063518043668020539957365\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-25.24833340239167136", ((System.Decimal("0.00810707191382864")).sub(System.Decimal("25.2564404743055"))).toString(), "(new Decimal(\"0.00810707191382864\")).sub(\"25.2564404743055\").toString() == \"-25.24833340239167136\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("366652481671.12116866091032792", ((System.Decimal("337218.588375123")).div(System.Decimal("0.0000009197226399182"))).toString(), "(new Decimal(\"337218.588375123\")).div(\"0.0000009197226399182\").toString() == \"366652481671.12116866091032792\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00097101861317670853", ((System.Decimal("0.000970961897620448")).add(System.Decimal("0.00000005671555626053"))).toString(), "(new Decimal(\"0.000970961897620448\")).add(\"0.00000005671555626053\").toString() == \"0.00097101861317670853\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("7179480897.0413794612790482633", ((System.Decimal("756541.015466927")).mul(System.Decimal("9489.8766230279"))).toString(), "(new Decimal(\"756541.015466927\")).mul(\"9489.8766230279\").toString() == \"7179480897.0413794612790482633\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-3633.6398901126231489135", ((System.Decimal("0.0000264943868510865")).sub(System.Decimal("3633.63991660701"))).toString(), "(new Decimal(\"0.0000264943868510865\")).sub(\"3633.63991660701\").toString() == \"-3633.6398901126231489135\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-492238.57879213989935796", ((System.Decimal("0.00587727810064204")).sub(System.Decimal("492238.584669418"))).toString(), "(new Decimal(\"0.00587727810064204\")).sub(\"492238.584669418\").toString() == \"-492238.57879213989935796\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("7.9661666768610785486", ((System.Decimal("7.96619214954143")).sub(System.Decimal("0.0000254726803514514"))).toString(), "(new Decimal(\"7.96619214954143\")).sub(\"0.0000254726803514514\").toString() == \"7.9661666768610785486\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1.1127217455466662896347686896", ((System.Decimal("346273.425196425")).div(System.Decimal("311194.983455909"))).toString(), "(new Decimal(\"346273.425196425\")).div(\"311194.983455909\").toString() == \"1.1127217455466662896347686896\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("4.8468358384313691963755308986", ((System.Decimal("85.1793199242928")).div(System.Decimal("17.5742118701219"))).toString(), "(new Decimal(\"85.1793199242928\")).div(\"17.5742118701219\").toString() == \"4.8468358384313691963755308986\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.121457026045982637", ((System.Decimal("0.121196779478899")).add(System.Decimal("0.000260246567083637"))).toString(), "(new Decimal(\"0.121196779478899\")).add(\"0.000260246567083637\").toString() == \"0.121457026045982637\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-30759.91316974471503713", ((System.Decimal("0.00907333258496287")).sub(System.Decimal("30759.9222430773"))).toString(), "(new Decimal(\"0.00907333258496287\")).sub(\"30759.9222430773\").toString() == \"-30759.91316974471503713\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("906.6246250772131248336", ((System.Decimal("906.624596988142")).add(System.Decimal("0.0000280890711248336"))).toString(), "(new Decimal(\"906.624596988142\")).add(\"0.0000280890711248336\").toString() == \"906.6246250772131248336\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("279112366.91872199097653690363", ((System.Decimal("5976325.60691625")).mul(System.Decimal("46.7030053710113"))).toString(), "(new Decimal(\"5976325.60691625\")).mul(\"46.7030053710113\").toString() == \"279112366.91872199097653690363\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3487.68489765640454528", ((System.Decimal("3487.68775513754")).sub(System.Decimal("0.00285748113545472"))).toString(), "(new Decimal(\"3487.68775513754\")).sub(\"0.00285748113545472\").toString() == \"3487.68489765640454528\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000003104791009850215294554", ((System.Decimal("0.000475329228898198")).div(System.Decimal("1530.95402360473"))).toString(), "(new Decimal(\"0.000475329228898198\")).div(\"1530.95402360473\").toString() == \"0.0000003104791009850215294554\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("843.49677454265676470597", ((System.Decimal("843.496774716068")).sub(System.Decimal("0.00000017341123529403"))).toString(), "(new Decimal(\"843.496774716068\")).sub(\"0.00000017341123529403\").toString() == \"843.49677454265676470597\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("27.32456344093503007762349601", ((System.Decimal("0.00197717379870693")).mul(System.Decimal("13820.010895757"))).toString(), "(new Decimal(\"0.00197717379870693\")).mul(\"13820.010895757\").toString() == \"27.32456344093503007762349601\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000133398085305956484381", ((System.Decimal("0.000708901179353195")).div(System.Decimal("53141.7806880277"))).toString(), "(new Decimal(\"0.000708901179353195\")).div(\"53141.7806880277\").toString() == \"0.0000000133398085305956484381\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("63225.9975649597083791267", ((System.Decimal("63225.9976413222")).sub(System.Decimal("0.0000763624916208733"))).toString(), "(new Decimal(\"63225.9976413222\")).sub(\"0.0000763624916208733\").toString() == \"63225.9975649597083791267\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("90165.355585698323663902", ((System.Decimal("90165.3561229656")).sub(System.Decimal("0.000537267276336098"))).toString(), "(new Decimal(\"90165.3561229656\")).sub(\"0.000537267276336098\").toString() == \"90165.355585698323663902\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000004084178640305073762", ((System.Decimal("0.0000351506077382484")).div(System.Decimal("86065.3042728385"))).toString(), "(new Decimal(\"0.0000351506077382484\")).div(\"86065.3042728385\").toString() == \"0.0000000004084178640305073762\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6.36616576073451628351", ((System.Decimal("6.36616601905141")).sub(System.Decimal("0.00000025831689371649"))).toString(), "(new Decimal(\"6.36616601905141\")).sub(\"0.00000025831689371649\").toString() == \"6.36616576073451628351\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("950819.51903543659609543293061", ((System.Decimal("0.0188125421380683")).div(System.Decimal("0.00000001978560784822"))).toString(), "(new Decimal(\"0.0188125421380683\")).div(\"0.00000001978560784822\").toString() == \"950819.51903543659609543293061\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0001281218872841341670208902", ((System.Decimal("0.0000201579493098696")).mul(System.Decimal("6.35589887218359"))).toString(), "(new Decimal(\"0.0000201579493098696\")).mul(\"6.35589887218359\").toString() == \"0.0001281218872841341670208902\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("100501.68372248376", ((System.Decimal("96670.6671736532")).add(System.Decimal("3831.01654883056"))).toString(), "(new Decimal(\"96670.6671736532\")).add(\"3831.01654883056\").toString() == \"100501.68372248376\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.007565086812628940345573773", ((System.Decimal("6377.50250118668")).div(System.Decimal("843017.755003189"))).toString(), "(new Decimal(\"6377.50250118668\")).div(\"843017.755003189\").toString() == \"0.007565086812628940345573773\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("8.6365193165306442105296800123", ((System.Decimal("0.00984376350876119")).mul(System.Decimal("877.359488456212"))).toString(), "(new Decimal(\"0.00984376350876119\")).mul(\"877.359488456212\").toString() == \"8.6365193165306442105296800123\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3395749.5740729445309136648368", ((System.Decimal("9.97239828574117")).div(System.Decimal("0.00000293672959922661"))).toString(), "(new Decimal(\"9.97239828574117\")).div(\"0.00000293672959922661\").toString() == \"3395749.5740729445309136648368\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000503282881253889121331449", ((System.Decimal("0.00000005182576428718")).mul(System.Decimal("971.10556530352"))).toString(), "(new Decimal(\"0.00000005182576428718\")).mul(\"971.10556530352\").toString() == \"0.0000503282881253889121331449\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1755687.77683918075262034347", ((System.Decimal("1755687.77683922")).sub(System.Decimal("0.00000003924737965653"))).toString(), "(new Decimal(\"1755687.77683922\")).sub(\"0.00000003924737965653\").toString() == \"1755687.77683918075262034347\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000667441803526521607590", ((System.Decimal("0.0000688309593912358")).mul(System.Decimal("0.000969682551906296"))).toString(), "(new Decimal(\"0.0000688309593912358\")).mul(\"0.000969682551906296\").toString() == \"0.0000000667441803526521607590\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("5007756.38734349805052136446", ((System.Decimal("5007756.38735283")).sub(System.Decimal("0.00000933194947863554"))).toString(), "(new Decimal(\"5007756.38735283\")).sub(\"0.00000933194947863554\").toString() == \"5007756.38734349805052136446\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("8519.28502213539257358044", ((System.Decimal("8519.28502252292")).sub(System.Decimal("0.00000038752742641956"))).toString(), "(new Decimal(\"8519.28502252292\")).sub(\"0.00000038752742641956\").toString() == \"8519.28502213539257358044\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("8376.91325157743275230985", ((System.Decimal("8376.9132515308")).add(System.Decimal("0.00000004663275230985"))).toString(), "(new Decimal(\"8376.9132515308\")).add(\"0.00000004663275230985\").toString() == \"8376.91325157743275230985\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00610815784999223683", ((System.Decimal("0.0061082019266245")).sub(System.Decimal("0.00000004407663226317"))).toString(), "(new Decimal(\"0.0061082019266245\")).sub(\"0.00000004407663226317\").toString() == \"0.00610815784999223683\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-6.6857970204242414917", ((System.Decimal("0.0000091555889785083")).sub(System.Decimal("6.68580617601322"))).toString(), "(new Decimal(\"0.0000091555889785083\")).sub(\"6.68580617601322\").toString() == \"-6.6857970204242414917\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000049877587914779734645683", ((System.Decimal("0.679050468690251")).mul(System.Decimal("0.00000734519600744601"))).toString(), "(new Decimal(\"0.679050468690251\")).mul(\"0.00000734519600744601\").toString() == \"0.0000049877587914779734645683\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1331757.9219696450201665110972", ((System.Decimal("72.9822536338969")).div(System.Decimal("0.0000548014413354925"))).toString(), "(new Decimal(\"72.9822536338969\")).div(\"0.0000548014413354925\").toString() == \"1331757.9219696450201665110972\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0002184819375517202908665847", ((System.Decimal("0.00000018985219774295")).div(System.Decimal("0.000868960610064194"))).toString(), "(new Decimal(\"0.00000018985219774295\")).div(\"0.000868960610064194\").toString() == \"0.0002184819375517202908665847\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-873438.38944748009399", ((System.Decimal("7.31134765190601")).sub(System.Decimal("873445.700795132"))).toString(), "(new Decimal(\"7.31134765190601\")).sub(\"873445.700795132\").toString() == \"-873438.38944748009399\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("4392083.3322472776428269303282", ((System.Decimal("4389325.52672426")).div(System.Decimal("0.999372096266305"))).toString(), "(new Decimal(\"4389325.52672426\")).div(\"0.999372096266305\").toString() == \"4392083.3322472776428269303282\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3511082.4535909329651685", ((System.Decimal("3511082.54562648")).sub(System.Decimal("0.0920355470348315"))).toString(), "(new Decimal(\"3511082.54562648\")).sub(\"0.0920355470348315\").toString() == \"3511082.4535909329651685\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("619.45098835034374784773429077", ((System.Decimal("310.688569820807")).div(System.Decimal("0.501554724528247"))).toString(), "(new Decimal(\"310.688569820807\")).div(\"0.501554724528247\").toString() == \"619.45098835034374784773429077\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000173331929981605953452824", ((System.Decimal("0.00000003554128810556")).div(System.Decimal("0.00205047553034987"))).toString(), "(new Decimal(\"0.00000003554128810556\")).div(\"0.00205047553034987\").toString() == \"0.0000173331929981605953452824\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2197324.21086973644253935499", ((System.Decimal("2197324.21086976")).sub(System.Decimal("0.00000002355746064501"))).toString(), "(new Decimal(\"2197324.21086976\")).sub(\"0.00000002355746064501\").toString() == \"2197324.21086973644253935499\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("4.4226279162585874248", ((System.Decimal("4.42253004499829")).add(System.Decimal("0.0000978712602974248"))).toString(), "(new Decimal(\"4.42253004499829\")).add(\"0.0000978712602974248\").toString() == \"4.4226279162585874248\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("352307.69884553949094527331", ((System.Decimal("352307.698853457")).sub(System.Decimal("0.00000791750905472669"))).toString(), "(new Decimal(\"352307.698853457\")).sub(\"0.00000791750905472669\").toString() == \"352307.69884553949094527331\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("17096896.787851146291328234831", ((System.Decimal("721.870396156735")).mul(System.Decimal("23684.1639148463"))).toString(), "(new Decimal(\"721.870396156735\")).mul(\"23684.1639148463\").toString() == \"17096896.787851146291328234831\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000058569075628029528804", ((System.Decimal("0.000786162371181959")).div(System.Decimal("134228.236104468"))).toString(), "(new Decimal(\"0.000786162371181959\")).div(\"134228.236104468\").toString() == \"0.0000000058569075628029528804\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-5591696.2786194911832293", ((System.Decimal("0.0291847988167707")).sub(System.Decimal("5591696.30780429"))).toString(), "(new Decimal(\"0.0291847988167707\")).sub(\"5591696.30780429\").toString() == \"-5591696.2786194911832293\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("67077.9713607756712", ((System.Decimal("67027.4105235131")).add(System.Decimal("50.5608372625712"))).toString(), "(new Decimal(\"67027.4105235131\")).add(\"50.5608372625712\").toString() == \"67077.9713607756712\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000442928238101105816891", ((System.Decimal("0.452668749472438")).mul(System.Decimal("0.00000009784820326504"))).toString(), "(new Decimal(\"0.452668749472438\")).mul(\"0.00000009784820326504\").toString() == \"0.0000000442928238101105816891\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("796.73004845438731539809", ((System.Decimal("796.730048394171")).add(System.Decimal("0.00000006021631539809"))).toString(), "(new Decimal(\"796.730048394171\")).add(\"0.00000006021631539809\").toString() == \"796.73004845438731539809\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000001129027912971335249117", ((System.Decimal("0.00393717444219495")).div(System.Decimal("34872.2506942564"))).toString(), "(new Decimal(\"0.00393717444219495\")).div(\"34872.2506942564\").toString() == \"0.0000001129027912971335249117\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0254376983229297496691344205", ((System.Decimal("0.00680742215216505")).mul(System.Decimal("3.73675934213063"))).toString(), "(new Decimal(\"0.00680742215216505\")).mul(\"3.73675934213063\").toString() == \"0.0254376983229297496691344205\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-315.51025068765613449375", ((System.Decimal("0.00000893482386550625")).sub(System.Decimal("315.51025962248"))).toString(), "(new Decimal(\"0.00000893482386550625\")).sub(\"315.51025962248\").toString() == \"-315.51025068765613449375\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0003013325022026421797172656", ((System.Decimal("0.000027297311009512")).mul(System.Decimal("11.0389079018677"))).toString(), "(new Decimal(\"0.000027297311009512\")).mul(\"11.0389079018677\").toString() == \"0.0003013325022026421797172656\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("402.83617806471816721794725061", ((System.Decimal("54243.3473999814")).div(System.Decimal("134.653614430993"))).toString(), "(new Decimal(\"54243.3473999814\")).div(\"134.653614430993\").toString() == \"402.83617806471816721794725061\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000000039584325266911", ((System.Decimal("0.00000021819561916319")).mul(System.Decimal("0.00000001814166820522"))).toString(), "(new Decimal(\"0.00000021819561916319\")).mul(\"0.00000001814166820522\").toString() == \"0.0000000000000039584325266911\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.07274982420726249867", ((System.Decimal("0.00000006649979439867")).add(System.Decimal("0.0727497577074681"))).toString(), "(new Decimal(\"0.00000006649979439867\")).add(\"0.0727497577074681\").toString() == \"0.07274982420726249867\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("125.09829068179389161411857875", ((System.Decimal("0.0942382432959221")).div(System.Decimal("0.000753313596711174"))).toString(), "(new Decimal(\"0.0942382432959221\")).div(\"0.000753313596711174\").toString() == \"125.09829068179389161411857875\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3.1072210310858812077194224446", ((System.Decimal("0.000336303566739105")).mul(System.Decimal("9239.33415638252"))).toString(), "(new Decimal(\"0.000336303566739105\")).mul(\"9239.33415638252\").toString() == \"3.1072210310858812077194224446\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00000293927498163621", ((System.Decimal("0.00000296421897735643")).sub(System.Decimal("0.00000002494399572022"))).toString(), "(new Decimal(\"0.00000296421897735643\")).sub(\"0.00000002494399572022\").toString() == \"0.00000293927498163621\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.95424499521071008787", ((System.Decimal("0.00000005236202508787")).add(System.Decimal("0.954244942848685"))).toString(), "(new Decimal(\"0.00000005236202508787\")).add(\"0.954244942848685\").toString() == \"0.95424499521071008787\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0840038726281231661070730835", ((System.Decimal("0.544814708896361")).div(System.Decimal("6.48559038829319"))).toString(), "(new Decimal(\"0.544814708896361\")).div(\"6.48559038829319\").toString() == \"0.0840038726281231661070730835\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("5.584384619064811", ((System.Decimal("5.92341898285012")).sub(System.Decimal("0.339034363785309"))).toString(), "(new Decimal(\"5.92341898285012\")).sub(\"0.339034363785309\").toString() == \"5.584384619064811\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("768961.59481674478", ((System.Decimal("761069.961246601")).add(System.Decimal("7891.63357014378"))).toString(), "(new Decimal(\"761069.961246601\")).add(\"7891.63357014378\").toString() == \"768961.59481674478\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("7.1449367324811184962392161905", ((System.Decimal("0.0057420220671883")).div(System.Decimal("0.000803649112956435"))).toString(), "(new Decimal(\"0.0057420220671883\")).div(\"0.000803649112956435\").toString() == \"7.1449367324811184962392161905\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000671343925763854248084927", ((System.Decimal("0.00000249094584141436")).div(System.Decimal("0.0371038709939941"))).toString(), "(new Decimal(\"0.00000249094584141436\")).div(\"0.0371038709939941\").toString() == \"0.0000671343925763854248084927\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3379.636871480214643", ((System.Decimal("3379.79016051618")).sub(System.Decimal("0.153289035965357"))).toString(), "(new Decimal(\"3379.79016051618\")).sub(\"0.153289035965357\").toString() == \"3379.636871480214643\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-5537047.53310281883348247913", ((System.Decimal("0.00000000116651752087")).sub(System.Decimal("5537047.53310282"))).toString(), "(new Decimal(\"0.00000000116651752087\")).sub(\"5537047.53310282\").toString() == \"-5537047.53310281883348247913\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-119.1551636528016", ((System.Decimal("46.4980181523124")).sub(System.Decimal("165.653181805114"))).toString(), "(new Decimal(\"46.4980181523124\")).sub(\"165.653181805114\").toString() == \"-119.1551636528016\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("7507411.17052143912417469505", ((System.Decimal("7507411.17052148")).sub(System.Decimal("0.00000004087582530495"))).toString(), "(new Decimal(\"7507411.17052148\")).sub(\"0.00000004087582530495\").toString() == \"7507411.17052143912417469505\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3680288.3885330385286851", ((System.Decimal("3680288.43481107")).sub(System.Decimal("0.0462780314713149"))).toString(), "(new Decimal(\"3680288.43481107\")).sub(\"0.0462780314713149\").toString() == \"3680288.3885330385286851\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.00064079973490480291", ((System.Decimal("0.00000183056355073609")).sub(System.Decimal("0.000642630298455539"))).toString(), "(new Decimal(\"0.00000183056355073609\")).sub(\"0.000642630298455539\").toString() == \"-0.00064079973490480291\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-2.057870254878829", ((System.Decimal("0.390304429638341")).sub(System.Decimal("2.44817468451717"))).toString(), "(new Decimal(\"0.390304429638341\")).sub(\"2.44817468451717\").toString() == \"-2.057870254878829\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.82801381893790463861", ((System.Decimal("0.00000077470167063861")).add(System.Decimal("0.828013044236234"))).toString(), "(new Decimal(\"0.00000077470167063861\")).add(\"0.828013044236234\").toString() == \"0.82801381893790463861\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0575119050604619002876486373", ((System.Decimal("71.2106066156228")).mul(System.Decimal("0.000807631163302637"))).toString(), "(new Decimal(\"71.2106066156228\")).mul(\"0.000807631163302637\").toString() == \"0.0575119050604619002876486373\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000846380225479673155344", ((System.Decimal("0.00000009483140771968")).mul(System.Decimal("0.892510451792046"))).toString(), "(new Decimal(\"0.00000009483140771968\")).mul(\"0.892510451792046\").toString() == \"0.0000000846380225479673155344\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0001071853838444661455520212", ((System.Decimal("2908.7434722617")).mul(System.Decimal("0.00000003684937666955"))).toString(), "(new Decimal(\"2908.7434722617\")).mul(\"0.00000003684937666955\").toString() == \"0.0001071853838444661455520212\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.001658638454349077", ((System.Decimal("0.000959274857751687")).add(System.Decimal("0.00069936359659739"))).toString(), "(new Decimal(\"0.000959274857751687\")).add(\"0.00069936359659739\").toString() == \"0.001658638454349077\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("24639.663275647384108817333496", ((System.Decimal("8683.4491690078")).mul(System.Decimal("2.83754333054532"))).toString(), "(new Decimal(\"8683.4491690078\")).mul(\"2.83754333054532\").toString() == \"24639.663275647384108817333496\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6117906.68505150707818221165", ((System.Decimal("0.00000935707818221165")).add(System.Decimal("6117906.68504215"))).toString(), "(new Decimal(\"0.00000935707818221165\")).add(\"6117906.68504215\").toString() == \"6117906.68505150707818221165\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6.0121773791933949674368568908", ((System.Decimal("6641.46798972109")).mul(System.Decimal("0.000905248265669331"))).toString(), "(new Decimal(\"6641.46798972109\")).mul(\"0.000905248265669331\").toString() == \"6.0121773791933949674368568908\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000100639428179333997221056", ((System.Decimal("0.0000713244643860145")).mul(System.Decimal("0.14110085374727"))).toString(), "(new Decimal(\"0.0000713244643860145\")).mul(\"0.14110085374727\").toString() == \"0.0000100639428179333997221056\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("817567.71241020922149641", ((System.Decimal("0.00126479322149641")).add(System.Decimal("817567.711145416"))).toString(), "(new Decimal(\"0.00126479322149641\")).add(\"817567.711145416\").toString() == \"817567.71241020922149641\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("5911522.4475117541555222", ((System.Decimal("5911522.42660128")).add(System.Decimal("0.0209104741555222"))).toString(), "(new Decimal(\"5911522.42660128\")).add(\"0.0209104741555222\").toString() == \"5911522.4475117541555222\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-50.00480793221098247371", ((System.Decimal("0.00000004386581752629")).sub(System.Decimal("50.0048079760768"))).toString(), "(new Decimal(\"0.00000004386581752629\")).sub(\"50.0048079760768\").toString() == \"-50.00480793221098247371\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.00216393969813354769", ((System.Decimal("0.00000009429415883231")).sub(System.Decimal("0.00216403399229238"))).toString(), "(new Decimal(\"0.00000009429415883231\")).sub(\"0.00216403399229238\").toString() == \"-0.00216393969813354769\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("149554.64804066385942125034", ((System.Decimal("0.00000007785942125034")).add(System.Decimal("149554.648040586"))).toString(), "(new Decimal(\"0.00000007785942125034\")).add(\"149554.648040586\").toString() == \"149554.64804066385942125034\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000401579705382523868391", ((System.Decimal("0.000514483727288658")).mul(System.Decimal("0.0000780548896072688"))).toString(), "(new Decimal(\"0.000514483727288658\")).mul(\"0.0000780548896072688\").toString() == \"0.0000000401579705382523868391\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("4391586.0938727875920041853806", ((System.Decimal("85.0879618362933")).div(System.Decimal("0.0000193752234426212"))).toString(), "(new Decimal(\"85.0879618362933\")).div(\"0.0000193752234426212\").toString() == \"4391586.0938727875920041853806\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000001434686776916788182810", ((System.Decimal("4.70885837669897")).mul(System.Decimal("0.0000000304678260025"))).toString(), "(new Decimal(\"4.70885837669897\")).mul(\"0.0000000304678260025\").toString() == \"0.0000001434686776916788182810\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("0.0000061473669992779179347052", ((System.Decimal("0.00000094580709000389")).div(System.Decimal("0.153855640978485"))).toString(), "(new Decimal(\"0.00000094580709000389\")).div(\"0.153855640978485\").toString() == \"0.0000061473669992779179347052\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.003314572249685679", ((System.Decimal("0.000613740297785839")).add(System.Decimal("0.00270083195189984"))).toString(), "(new Decimal(\"0.000613740297785839\")).add(\"0.00270083195189984\").toString() == \"0.003314572249685679\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("68188.770830719145", ((System.Decimal("68943.9000417217")).sub(System.Decimal("755.129211002555"))).toString(), "(new Decimal(\"68943.9000417217\")).sub(\"755.129211002555\").toString() == \"68188.770830719145\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0185139114429308061", ((System.Decimal("0.0000109071683655061")).add(System.Decimal("0.0185030042745653"))).toString(), "(new Decimal(\"0.0000109071683655061\")).add(\"0.0185030042745653\").toString() == \"0.0185139114429308061\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("88.66685930292445486", ((System.Decimal("0.00319345103725486")).add(System.Decimal("88.6636658518872"))).toString(), "(new Decimal(\"0.00319345103725486\")).add(\"88.6636658518872\").toString() == \"88.66685930292445486\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00000478017811420382", ((System.Decimal("0.00000776580248855325")).sub(System.Decimal("0.00000298562437434943"))).toString(), "(new Decimal(\"0.00000776580248855325\")).sub(\"0.00000298562437434943\").toString() == \"0.00000478017811420382\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.3859582703495206", ((System.Decimal("0.364325482567924")).add(System.Decimal("0.0216327877815966"))).toString(), "(new Decimal(\"0.364325482567924\")).add(\"0.0216327877815966\").toString() == \"0.3859582703495206\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0107406507813914476055243271", ((System.Decimal("0.00000696548845943319")).div(System.Decimal("0.000648516426164897"))).toString(), "(new Decimal(\"0.00000696548845943319\")).div(\"0.000648516426164897\").toString() == \"0.0107406507813914476055243271\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-73.0557380282989268491", ((System.Decimal("0.0000220559127731509")).sub(System.Decimal("73.0557600842117"))).toString(), "(new Decimal(\"0.0000220559127731509\")).sub(\"73.0557600842117\").toString() == \"-73.0557380282989268491\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00000195673171615076", ((System.Decimal("0.00000148999663139228")).add(System.Decimal("0.00000046673508475848"))).toString(), "(new Decimal(\"0.00000148999663139228\")).add(\"0.00000046673508475848\").toString() == \"0.00000195673171615076\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-838.010941593913", ((System.Decimal("2.074972690118")).sub(System.Decimal("840.085914284031"))).toString(), "(new Decimal(\"2.074972690118\")).sub(\"840.085914284031\").toString() == \"-838.010941593913\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000010790590363188315712", ((System.Decimal("0.00000059002973120195")).div(System.Decimal("546.800231815688"))).toString(), "(new Decimal(\"0.00000059002973120195\")).div(\"546.800231815688\").toString() == \"0.0000000010790590363188315712\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0485027328186321794374224174", ((System.Decimal("0.00000004584207597461")).mul(System.Decimal("1058039.62380534"))).toString(), "(new Decimal(\"0.00000004584207597461\")).mul(\"1058039.62380534\").toString() == \"0.0485027328186321794374224174\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("214.85514206927846582617", ((System.Decimal("214.855142037782")).add(System.Decimal("0.00000003149646582617"))).toString(), "(new Decimal(\"214.855142037782\")).add(\"0.00000003149646582617\").toString() == \"214.85514206927846582617\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0001626068155301757850120131", ((System.Decimal("0.000824154042091292")).div(System.Decimal("5.06838559874724"))).toString(), "(new Decimal(\"0.000824154042091292\")).div(\"5.06838559874724\").toString() == \"0.0001626068155301757850120131\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("20.9788078560985709559", ((System.Decimal("20.9787698560296")).add(System.Decimal("0.0000380000689709559"))).toString(), "(new Decimal(\"20.9787698560296\")).add(\"0.0000380000689709559\").toString() == \"20.9788078560985709559\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-81.88357175642793468", ((System.Decimal("0.00617890391786532")).sub(System.Decimal("81.8897506603458"))).toString(), "(new Decimal(\"0.00617890391786532\")).sub(\"81.8897506603458\").toString() == \"-81.88357175642793468\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("36.23358714435498025968", ((System.Decimal("36.2335875333443")).sub(System.Decimal("0.00000038898931974032"))).toString(), "(new Decimal(\"36.2335875333443\")).sub(\"0.00000038898931974032\").toString() == \"36.23358714435498025968\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0013658861233129413838425724", ((System.Decimal("0.00000000292342323946")).mul(System.Decimal("467221.476820866"))).toString(), "(new Decimal(\"0.00000000292342323946\")).mul(\"467221.476820866\").toString() == \"0.0013658861233129413838425724\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000074105712796113834889", ((System.Decimal("0.000342916469715031")).div(System.Decimal("46273.958751128"))).toString(), "(new Decimal(\"0.000342916469715031\")).div(\"46273.958751128\").toString() == \"0.0000000074105712796113834889\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("472.3234209149721", ((System.Decimal("476.05942677523")).sub(System.Decimal("3.7360058602579"))).toString(), "(new Decimal(\"476.05942677523\")).sub(\"3.7360058602579\").toString() == \"472.3234209149721\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("8039026.45502754950084", ((System.Decimal("9.76490417950084")).add(System.Decimal("8039016.69012337"))).toString(), "(new Decimal(\"9.76490417950084\")).add(\"8039016.69012337\").toString() == \"8039026.45502754950084\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("40912917253931.602151150686830", ((System.Decimal("9044513.99065764")).mul(System.Decimal("4523506.43674075"))).toString(), "(new Decimal(\"9044513.99065764\")).mul(\"4523506.43674075\").toString() == \"40912917253931.602151150686830\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("-6914.3160116610779745959", ((System.Decimal("0.0000627560420254041")).sub(System.Decimal("6914.31607441712"))).toString(), "(new Decimal(\"0.0000627560420254041\")).sub(\"6914.31607441712\").toString() == \"-6914.3160116610779745959\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("22.802704082181585914", ((System.Decimal("22.8028122907518")).sub(System.Decimal("0.000108208570214086"))).toString(), "(new Decimal(\"22.8028122907518\")).sub(\"0.000108208570214086\").toString() == \"22.802704082181585914\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("788.3274362681265223337", ((System.Decimal("788.327495468933")).sub(System.Decimal("0.0000592008064776663"))).toString(), "(new Decimal(\"788.327495468933\")).sub(\"0.0000592008064776663\").toString() == \"788.3274362681265223337\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1.6066068917914018575324895115", ((System.Decimal("8866.23474250838")).div(System.Decimal("5518.60868256474"))).toString(), "(new Decimal(\"8866.23474250838\")).div(\"5518.60868256474\").toString() == \"1.6066068917914018575324895115\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("26.72254360394047261816", ((System.Decimal("0.00000009113297261816")).add(System.Decimal("26.7225435128075"))).toString(), "(new Decimal(\"0.00000009113297261816\")).add(\"26.7225435128075\").toString() == \"26.72254360394047261816\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000324317078514770886275385", ((System.Decimal("0.815985052760683")).mul(System.Decimal("0.0000397454680594362"))).toString(), "(new Decimal(\"0.815985052760683\")).mul(\"0.0000397454680594362\").toString() == \"0.0000324317078514770886275385\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("52977.103193989012886457", ((System.Decimal("0.000779760512886457")).add(System.Decimal("52977.1024142285"))).toString(), "(new Decimal(\"0.000779760512886457\")).add(\"52977.1024142285\").toString() == \"52977.103193989012886457\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1913.0060727432645785740118483", ((System.Decimal("126179.391576992")).div(System.Decimal("65.9586989162297"))).toString(), "(new Decimal(\"126179.391576992\")).div(\"65.9586989162297\").toString() == \"1913.0060727432645785740118483\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("770.923422558535548909", ((System.Decimal("0.000830289780548909")).add(System.Decimal("770.922592268755"))).toString(), "(new Decimal(\"0.000830289780548909\")).add(\"770.922592268755\").toString() == \"770.923422558535548909\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000015660607711989182", ((System.Decimal("0.00000279982820283614")).mul(System.Decimal("0.00000055934173732965"))).toString(), "(new Decimal(\"0.00000279982820283614\")).mul(\"0.00000055934173732965\").toString() == \"0.0000000000015660607711989182\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00000161712928522245", ((System.Decimal("0.0000015461405746388")).add(System.Decimal("0.00000007098871058365"))).toString(), "(new Decimal(\"0.0000015461405746388\")).add(\"0.00000007098871058365\").toString() == \"0.00000161712928522245\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("4253730.76659763509554093941", ((System.Decimal("0.00000428509554093941")).add(System.Decimal("4253730.76659335"))).toString(), "(new Decimal(\"0.00000428509554093941\")).add(\"4253730.76659335\").toString() == \"4253730.76659763509554093941\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00008945709535687095", ((System.Decimal("0.00000074108968849345")).add(System.Decimal("0.0000887160056683775"))).toString(), "(new Decimal(\"0.00000074108968849345\")).add(\"0.0000887160056683775\").toString() == \"0.00008945709535687095\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("60849.566901590769612814207798", ((System.Decimal("4.50246398081186")).div(System.Decimal("0.0000739933611704006"))).toString(), "(new Decimal(\"4.50246398081186\")).div(\"0.0000739933611704006\").toString() == \"60849.566901590769612814207798\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("10025471.773941757", ((System.Decimal("9073722.60423085")).add(System.Decimal("951749.169710907"))).toString(), "(new Decimal(\"9073722.60423085\")).add(\"951749.169710907\").toString() == \"10025471.773941757\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6314.57694669888121625", ((System.Decimal("6314.57190789029")).add(System.Decimal("0.00503880859121625"))).toString(), "(new Decimal(\"6314.57190789029\")).add(\"0.00503880859121625\").toString() == \"6314.57694669888121625\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6410200.86892426925435156992", ((System.Decimal("6410200.86892424")).add(System.Decimal("0.00000002925435156992"))).toString(), "(new Decimal(\"6410200.86892424\")).add(\"0.00000002925435156992\").toString() == \"6410200.86892426925435156992\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-50365.02975549733950225974", ((System.Decimal("0.00000903436049774026")).sub(System.Decimal("50365.0297645317"))).toString(), "(new Decimal(\"0.00000903436049774026\")).sub(\"50365.0297645317\").toString() == \"-50365.02975549733950225974\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("706275.0020093632", ((System.Decimal("773516.946366763")).sub(System.Decimal("67241.9443573998"))).toString(), "(new Decimal(\"773516.946366763\")).sub(\"67241.9443573998\").toString() == \"706275.0020093632\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.0007827090090991505", ((System.Decimal("0.0000758509746174565")).sub(System.Decimal("0.000858559983716607"))).toString(), "(new Decimal(\"0.0000758509746174565\")).sub(\"0.000858559983716607\").toString() == \"-0.0007827090090991505\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2221.3994020682519670422887012", ((System.Decimal("0.0072728559734639")).div(System.Decimal("0.00000327399744804669"))).toString(), "(new Decimal(\"0.0072728559734639\")).div(\"0.00000327399744804669\").toString() == \"2221.3994020682519670422887012\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00797715439281503856", ((System.Decimal("0.00000002090733708856")).add(System.Decimal("0.00797713348547795"))).toString(), "(new Decimal(\"0.00000002090733708856\")).add(\"0.00797713348547795\").toString() == \"0.00797715439281503856\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000152803982254922538614", ((System.Decimal("0.0000248115556430125")).mul(System.Decimal("0.00061585812858113"))).toString(), "(new Decimal(\"0.0000248115556430125\")).mul(\"0.00061585812858113\").toString() == \"0.0000000152803982254922538614\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000661183382579908907", ((System.Decimal("0.00000008056083325323")).mul(System.Decimal("0.000820725600617344"))).toString(), "(new Decimal(\"0.00000008056083325323\")).mul(\"0.000820725600617344\").toString() == \"0.0000000000661183382579908907\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.09307075335419262842", ((System.Decimal("0.00000025804988167158")).sub(System.Decimal("0.0930710114040743"))).toString(), "(new Decimal(\"0.00000025804988167158\")).sub(\"0.0930710114040743\").toString() == \"-0.09307075335419262842\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.04808529221801801214", ((System.Decimal("0.0480862194896146")).sub(System.Decimal("0.00000092727159658786"))).toString(), "(new Decimal(\"0.0480862194896146\")).sub(\"0.00000092727159658786\").toString() == \"0.04808529221801801214\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("19.1163499301375422", ((System.Decimal("0.0380818105014422")).add(System.Decimal("19.0782681196361"))).toString(), "(new Decimal(\"0.0380818105014422\")).add(\"19.0782681196361\").toString() == \"19.1163499301375422\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0029230064326764054146103005", ((System.Decimal("0.00000030766995358638")).mul(System.Decimal("9500.46112271979"))).toString(), "(new Decimal(\"0.00000030766995358638\")).mul(\"9500.46112271979\").toString() == \"0.0029230064326764054146103005\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("9220576.9255473874609941571388", ((System.Decimal("8460272.38688444")).mul(System.Decimal("1.08986761937377"))).toString(), "(new Decimal(\"8460272.38688444\")).mul(\"1.08986761937377\").toString() == \"9220576.9255473874609941571388\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00054848860491686019", ((System.Decimal("0.000548521232115348")).sub(System.Decimal("0.00000003262719848781"))).toString(), "(new Decimal(\"0.000548521232115348\")).sub(\"0.00000003262719848781\").toString() == \"0.00054848860491686019\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000381173298826073792060", ((System.Decimal("0.701377586322547")).mul(System.Decimal("0.00000005434637579804"))).toString(), "(new Decimal(\"0.701377586322547\")).mul(\"0.00000005434637579804\").toString() == \"0.0000000381173298826073792060\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("700263936625.28684891174652716", ((System.Decimal("6085116.43301934")).div(System.Decimal("0.00000868974698646448"))).toString(), "(new Decimal(\"6085116.43301934\")).div(\"0.00000868974698646448\").toString() == \"700263936625.28684891174652716\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("64.24562633156503374337", ((System.Decimal("64.2456262671601")).add(System.Decimal("0.00000006440493374337"))).toString(), "(new Decimal(\"64.2456262671601\")).add(\"0.00000006440493374337\").toString() == \"64.24562633156503374337\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00000074888137376349", ((System.Decimal("0.00000079138978840382")).sub(System.Decimal("0.00000004250841464033"))).toString(), "(new Decimal(\"0.00000079138978840382\")).sub(\"0.00000004250841464033\").toString() == \"0.00000074888137376349\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0065667784902605879636671644", ((System.Decimal("0.0068165044332")).mul(System.Decimal("0.963364515436517"))).toString(), "(new Decimal(\"0.0068165044332\")).mul(\"0.963364515436517\").toString() == \"0.0065667784902605879636671644\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("369602.432796381529203", ((System.Decimal("0.259988776529203")).add(System.Decimal("369602.172807605"))).toString(), "(new Decimal(\"0.259988776529203\")).add(\"369602.172807605\").toString() == \"369602.432796381529203\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0039988533838646743", ((System.Decimal("0.0000675051699706843")).add(System.Decimal("0.00393134821389399"))).toString(), "(new Decimal(\"0.0000675051699706843\")).add(\"0.00393134821389399\").toString() == \"0.0039988533838646743\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.1176639241828982721945349704", ((System.Decimal("8668689.53158552")).mul(System.Decimal("0.00000001357343849427"))).toString(), "(new Decimal(\"8668689.53158552\")).mul(\"0.00000001357343849427\").toString() == \"0.1176639241828982721945349704\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.3461079909540908953018615851", ((System.Decimal("0.0000312284355197234")).div(System.Decimal("0.000090227432870412"))).toString(), "(new Decimal(\"0.0000312284355197234\")).div(\"0.000090227432870412\").toString() == \"0.3461079909540908953018615851\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("245.24585835344678889090583956", ((System.Decimal("233330.174457901")).div(System.Decimal("951.413312438602"))).toString(), "(new Decimal(\"233330.174457901\")).div(\"951.413312438602\").toString() == \"245.24585835344678889090583956\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1664628220.3605620253774984042", ((System.Decimal("4790708.12686845")).div(System.Decimal("0.00287794479768628"))).toString(), "(new Decimal(\"4790708.12686845\")).div(\"0.00287794479768628\").toString() == \"1664628220.3605620253774984042\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("246613871.78242208656915520057", ((System.Decimal("331493.556188184")).mul(System.Decimal("743.947709325677"))).toString(), "(new Decimal(\"331493.556188184\")).mul(\"743.947709325677\").toString() == \"246613871.78242208656915520057\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1207.9268535512635351310455273", ((System.Decimal("1259.47609602449")).mul(System.Decimal("0.959070884603574"))).toString(), "(new Decimal(\"1259.47609602449\")).mul(\"0.959070884603574\").toString() == \"1207.9268535512635351310455273\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.393178837592885421", ((System.Decimal("0.393176919963759")).add(System.Decimal("0.000001917629126421"))).toString(), "(new Decimal(\"0.393176919963759\")).add(\"0.000001917629126421\").toString() == \"0.393178837592885421\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("397.1793180554543142", ((System.Decimal("0.0851948050713142")).add(System.Decimal("397.094123250383"))).toString(), "(new Decimal(\"0.0851948050713142\")).add(\"397.094123250383\").toString() == \"397.1793180554543142\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0003282039963622138325073925", ((System.Decimal("4.38505906815876")).mul(System.Decimal("0.0000748459692927291"))).toString(), "(new Decimal(\"4.38505906815876\")).mul(\"0.0000748459692927291\").toString() == \"0.0003282039963622138325073925\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.423324324993102", ((System.Decimal("0.363335922995273")).add(System.Decimal("0.059988401997829"))).toString(), "(new Decimal(\"0.363335922995273\")).add(\"0.059988401997829\").toString() == \"0.423324324993102\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("10895.341807538831547999350349", ((System.Decimal("0.00727318812500368")).div(System.Decimal("0.00000066755024793909"))).toString(), "(new Decimal(\"0.00727318812500368\")).div(\"0.00000066755024793909\").toString() == \"10895.341807538831547999350349\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3388.3696656205705172969049326", ((System.Decimal("0.00994605123994223")).mul(System.Decimal("340674.865218194"))).toString(), "(new Decimal(\"0.00994605123994223\")).mul(\"340674.865218194\").toString() == \"3388.3696656205705172969049326\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0141935145051432937033685765", ((System.Decimal("545.87652978761")).div(System.Decimal("38459.5745887885"))).toString(), "(new Decimal(\"545.87652978761\")).div(\"38459.5745887885\").toString() == \"0.0141935145051432937033685765\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0779477186180520150647853816", ((System.Decimal("73907.2872204274")).div(System.Decimal("948164.853708895"))).toString(), "(new Decimal(\"73907.2872204274\")).div(\"948164.853708895\").toString() == \"0.0779477186180520150647853816\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-561579.6279262661092", ((System.Decimal("21.7019301008908")).sub(System.Decimal("561601.329856367"))).toString(), "(new Decimal(\"21.7019301008908\")).sub(\"561601.329856367\").toString() == \"-561579.6279262661092\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.000009299200099480762053694", ((System.Decimal("0.00000077988295712503")).div(System.Decimal("0.0838655958342671"))).toString(), "(new Decimal(\"0.00000077988295712503\")).div(\"0.0838655958342671\").toString() == \"0.000009299200099480762053694\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0120314006051025781992414906", ((System.Decimal("63.5544158814263")).div(System.Decimal("5282.37883247546"))).toString(), "(new Decimal(\"63.5544158814263\")).div(\"5282.37883247546\").toString() == \"0.0120314006051025781992414906\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3.6151189261791396129", ((System.Decimal("3.61511963587958")).sub(System.Decimal("0.0000007097004403871"))).toString(), "(new Decimal(\"3.61511963587958\")).sub(\"0.0000007097004403871\").toString() == \"3.6151189261791396129\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("94217597633.241379272109185751", ((System.Decimal("466425.827921566")).div(System.Decimal("0.00000495051709699934"))).toString(), "(new Decimal(\"466425.827921566\")).div(\"0.00000495051709699934\").toString() == \"94217597633.241379272109185751\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("705.645818421918175", ((System.Decimal("706.5725502123")).sub(System.Decimal("0.926731790381825"))).toString(), "(new Decimal(\"706.5725502123\")).sub(\"0.926731790381825\").toString() == \"705.645818421918175\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("528.8460503226362118", ((System.Decimal("528.77783893085")).add(System.Decimal("0.0682113917862118"))).toString(), "(new Decimal(\"528.77783893085\")).add(\"0.0682113917862118\").toString() == \"528.8460503226362118\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2587.55019575690444875", ((System.Decimal("2587.55753868611")).sub(System.Decimal("0.00734292920555125"))).toString(), "(new Decimal(\"2587.55753868611\")).sub(\"0.00734292920555125\").toString() == \"2587.55019575690444875\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0007832908360437819528979290", ((System.Decimal("8.61752288817313")).mul(System.Decimal("0.0000908951268488984"))).toString(), "(new Decimal(\"8.61752288817313\")).mul(\"0.0000908951268488984\").toString() == \"0.0007832908360437819528979290\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("85388.15485564442", ((System.Decimal("91330.5146113646")).sub(System.Decimal("5942.35975572018"))).toString(), "(new Decimal(\"91330.5146113646\")).sub(\"5942.35975572018\").toString() == \"85388.15485564442\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0006005125566523128396843158", ((System.Decimal("0.00754608521589361")).mul(System.Decimal("0.0795793500168153"))).toString(), "(new Decimal(\"0.00754608521589361\")).mul(\"0.0795793500168153\").toString() == \"0.0006005125566523128396843158\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1020.1981723776409731715", ((System.Decimal("1020.19813424917")).add(System.Decimal("0.0000381284709731715"))).toString(), "(new Decimal(\"1020.19813424917\")).add(\"0.0000381284709731715\").toString() == \"1020.1981723776409731715\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0025578204022461232891799586", ((System.Decimal("874.749045295058")).div(System.Decimal("341990.017957049"))).toString(), "(new Decimal(\"874.749045295058\")).div(\"341990.017957049\").toString() == \"0.0025578204022461232891799586\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1191.1626737619095274", ((System.Decimal("0.0945538378295274")).add(System.Decimal("1191.06811992408"))).toString(), "(new Decimal(\"0.0945538378295274\")).add(\"1191.06811992408\").toString() == \"1191.1626737619095274\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000012723850728401263936405", ((System.Decimal("0.00174284968606329")).mul(System.Decimal("0.000730060132560348"))).toString(), "(new Decimal(\"0.00174284968606329\")).mul(\"0.000730060132560348\").toString() == \"0.0000012723850728401263936405\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.3878144949689754244652101063", ((System.Decimal("0.0000886363427101804")).div(System.Decimal("0.000228553454963748"))).toString(), "(new Decimal(\"0.0000886363427101804\")).div(\"0.000228553454963748\").toString() == \"0.3878144949689754244652101063\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.6276545818966699448042492771", ((System.Decimal("0.0088596635353098")).div(System.Decimal("0.0141155084195153"))).toString(), "(new Decimal(\"0.0088596635353098\")).div(\"0.0141155084195153\").toString() == \"0.6276545818966699448042492771\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("887642.763737621356332488", ((System.Decimal("887642.763968391")).sub(System.Decimal("0.000230769643667512"))).toString(), "(new Decimal(\"887642.763968391\")).sub(\"0.000230769643667512\").toString() == \"887642.763737621356332488\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("453198251.73558506995962676469", ((System.Decimal("23004.7123148128")).div(System.Decimal("0.0000507608143383455"))).toString(), "(new Decimal(\"23004.7123148128\")).div(\"0.0000507608143383455\").toString() == \"453198251.73558506995962676469\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("83.7146957344276093754", ((System.Decimal("83.7147017399383")).sub(System.Decimal("0.0000060055106906246"))).toString(), "(new Decimal(\"83.7147017399383\")).sub(\"0.0000060055106906246\").toString() == \"83.7146957344276093754\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("87.63923156896568", ((System.Decimal("4.66405350466448")).add(System.Decimal("82.9751780643012"))).toString(), "(new Decimal(\"4.66405350466448\")).add(\"82.9751780643012\").toString() == \"87.63923156896568\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1347.836978065024006220719243", ((System.Decimal("6808.9278446552")).div(System.Decimal("5.05174435444723"))).toString(), "(new Decimal(\"6808.9278446552\")).div(\"5.05174435444723\").toString() == \"1347.836978065024006220719243\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("7712816.5554913010058030163591", ((System.Decimal("8813.68504316252")).div(System.Decimal("0.0011427323572071"))).toString(), "(new Decimal(\"8813.68504316252\")).div(\"0.0011427323572071\").toString() == \"7712816.5554913010058030163591\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0066851887766319767409290909", ((System.Decimal("0.00000007260315151541")).mul(System.Decimal("92078.4929730364"))).toString(), "(new Decimal(\"0.00000007260315151541\")).mul(\"92078.4929730364\").toString() == \"0.0066851887766319767409290909\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000121301184342453339116", ((System.Decimal("0.00000009849602240068")).div(System.Decimal("8.11995554162187"))).toString(), "(new Decimal(\"0.00000009849602240068\")).div(\"8.11995554162187\").toString() == \"0.0000000121301184342453339116\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.3125741895189851492", ((System.Decimal("0.312526527006424")).add(System.Decimal("0.0000476625125611492"))).toString(), "(new Decimal(\"0.312526527006424\")).add(\"0.0000476625125611492\").toString() == \"0.3125741895189851492\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.2038677468092889069882980431", ((System.Decimal("18502.905787203")).div(System.Decimal("90759.3578522836"))).toString(), "(new Decimal(\"18502.905787203\")).div(\"90759.3578522836\").toString() == \"0.2038677468092889069882980431\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000005559422081028409448", ((System.Decimal("0.00000294573398909799")).div(System.Decimal("5298.63346614811"))).toString(), "(new Decimal(\"0.00000294573398909799\")).div(\"5298.63346614811\").toString() == \"0.0000000005559422081028409448\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("46411462.077440048464670213145", ((System.Decimal("3090023.14838116")).div(System.Decimal("0.066578879657471"))).toString(), "(new Decimal(\"3090023.14838116\")).div(\"0.066578879657471\").toString() == \"46411462.077440048464670213145\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.000002581837802588014691071", ((System.Decimal("0.00000043088218729519")).div(System.Decimal("0.166889719742765"))).toString(), "(new Decimal(\"0.00000043088218729519\")).div(\"0.166889719742765\").toString() == \"0.000002581837802588014691071\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("662563.86998257370710896", ((System.Decimal("662563.871900814")).sub(System.Decimal("0.00191824029289104"))).toString(), "(new Decimal(\"662563.871900814\")).sub(\"0.00191824029289104\").toString() == \"662563.86998257370710896\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("4.093541112069757865", ((System.Decimal("4.09383642677862")).sub(System.Decimal("0.000295314708862135"))).toString(), "(new Decimal(\"4.09383642677862\")).sub(\"0.000295314708862135\").toString() == \"4.093541112069757865\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0519240351822827709748263872", ((System.Decimal("17.4083959392311")).mul(System.Decimal("0.00298270072461232"))).toString(), "(new Decimal(\"17.4083959392311\")).mul(\"0.00298270072461232\").toString() == \"0.0519240351822827709748263872\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("56614111357.238158837814773558", ((System.Decimal("1775.79848178467")).div(System.Decimal("0.00000003136671121762"))).toString(), "(new Decimal(\"1775.79848178467\")).div(\"0.00000003136671121762\").toString() == \"56614111357.238158837814773558\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.18047320241517500632", ((System.Decimal("0.00000057644597700632")).add(System.Decimal("0.180472625969198"))).toString(), "(new Decimal(\"0.00000057644597700632\")).add(\"0.180472625969198\").toString() == \"0.18047320241517500632\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.00000014875716676412", ((System.Decimal("0.0000002374956338841")).sub(System.Decimal("0.00000038625280064822"))).toString(), "(new Decimal(\"0.0000002374956338841\")).sub(\"0.00000038625280064822\").toString() == \"-0.00000014875716676412\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("23421549.686072900974999649279", ((System.Decimal("222.322416595333")).div(System.Decimal("0.00000949221633816707"))).toString(), "(new Decimal(\"222.322416595333\")).div(\"0.00000949221633816707\").toString() == \"23421549.686072900974999649279\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3.871063458479728538175789638", ((System.Decimal("0.0221267636037091")).div(System.Decimal("0.00571593926088695"))).toString(), "(new Decimal(\"0.0221267636037091\")).div(\"0.00571593926088695\").toString() == \"3.871063458479728538175789638\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("16214.400846511121144041207000", ((System.Decimal("7016.24042681243")).mul(System.Decimal("2.31098136040893"))).toString(), "(new Decimal(\"7016.24042681243\")).mul(\"2.31098136040893\").toString() == \"16214.400846511121144041207000\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("0.0019490762786253018034972934", ((System.Decimal("0.0681883810871227")).mul(System.Decimal("0.0285837007353938"))).toString(), "(new Decimal(\"0.0681883810871227\")).mul(\"0.0285837007353938\").toString() == \"0.0019490762786253018034972934\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1.157187581135514", ((System.Decimal("0.85837511246017")).add(System.Decimal("0.298812468675344"))).toString(), "(new Decimal(\"0.85837511246017\")).add(\"0.298812468675344\").toString() == \"1.157187581135514\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-5115293.869385163952", ((System.Decimal("193.647991956048")).sub(System.Decimal("5115487.51737712"))).toString(), "(new Decimal(\"193.647991956048\")).sub(\"5115487.51737712\").toString() == \"-5115293.869385163952\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.05504833553420386932", ((System.Decimal("0.0550483308988848")).add(System.Decimal("0.00000000463531906932"))).toString(), "(new Decimal(\"0.0550483308988848\")).add(\"0.00000000463531906932\").toString() == \"0.05504833553420386932\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0226105809476949110796916402", ((System.Decimal("0.0000007991035286333")).mul(System.Decimal("28294.9331813934"))).toString(), "(new Decimal(\"0.0000007991035286333\")).mul(\"28294.9331813934\").toString() == \"0.0226105809476949110796916402\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000430659364069161812657506", ((System.Decimal("0.00000001163869482076")).div(System.Decimal("0.000270252914293787"))).toString(), "(new Decimal(\"0.00000001163869482076\")).div(\"0.000270252914293787\").toString() == \"0.0000430659364069161812657506\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("369.899752887384684", ((System.Decimal("0.882389189620684")).add(System.Decimal("369.017363697764"))).toString(), "(new Decimal(\"0.882389189620684\")).add(\"369.017363697764\").toString() == \"369.899752887384684\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("820.35799529420065", ((System.Decimal("826.882673346848")).sub(System.Decimal("6.52467805264735"))).toString(), "(new Decimal(\"826.882673346848\")).sub(\"6.52467805264735\").toString() == \"820.35799529420065\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("8665.241919876656136", ((System.Decimal("0.916831304746136")).add(System.Decimal("8664.32508857191"))).toString(), "(new Decimal(\"0.916831304746136\")).add(\"8664.32508857191\").toString() == \"8665.241919876656136\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1113295905.5010739272635131771", ((System.Decimal("3431.67145430654")).mul(System.Decimal("324417.975416602"))).toString(), "(new Decimal(\"3431.67145430654\")).mul(\"324417.975416602\").toString() == \"1113295905.5010739272635131771\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("8694915.9254769790620115834586", ((System.Decimal("7011684.364179")).div(System.Decimal("0.80641197962985"))).toString(), "(new Decimal(\"7011684.364179\")).div(\"0.80641197962985\").toString() == \"8694915.9254769790620115834586\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2.9407816183171732729079339674", ((System.Decimal("0.0000716280695384499")).mul(System.Decimal("41056.2735707761"))).toString(), "(new Decimal(\"0.0000716280695384499\")).mul(\"41056.2735707761\").toString() == \"2.9407816183171732729079339674\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.1127935794278807392120038243", ((System.Decimal("80.8113612145238")).div(System.Decimal("716.453557236331"))).toString(), "(new Decimal(\"80.8113612145238\")).div(\"716.453557236331\").toString() == \"0.1127935794278807392120038243\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("89526454.180026033061583476631", ((System.Decimal("721.107919570575")).div(System.Decimal("0.0000080546909421937"))).toString(), "(new Decimal(\"721.107919570575\")).div(\"0.0000080546909421937\").toString() == \"89526454.180026033061583476631\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.00000401257101493542", ((System.Decimal("0.00000087664416240372")).sub(System.Decimal("0.00000488921517733914"))).toString(), "(new Decimal(\"0.00000087664416240372\")).sub(\"0.00000488921517733914\").toString() == \"-0.00000401257101493542\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1404309.5339384196562537720212", ((System.Decimal("2861249.48079756")).mul(System.Decimal("0.49080289690327"))).toString(), "(new Decimal(\"2861249.48079756\")).mul(\"0.49080289690327\").toString() == \"1404309.5339384196562537720212\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("11.799501757305484838541059295", ((System.Decimal("0.329140784372175")).mul(System.Decimal("35.8494064471914"))).toString(), "(new Decimal(\"0.329140784372175\")).mul(\"35.8494064471914\").toString() == \"11.799501757305484838541059295\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("86.579050768902069", ((System.Decimal("0.887126708350669")).add(System.Decimal("85.6919240605514"))).toString(), "(new Decimal(\"0.887126708350669\")).add(\"85.6919240605514\").toString() == \"86.579050768902069\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000066113860385206571", ((System.Decimal("0.00000005458257806235")).div(System.Decimal("8255.84495358907"))).toString(), "(new Decimal(\"0.00000005458257806235\")).div(\"8255.84495358907\").toString() == \"0.0000000000066113860385206571\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("265.78810758325215556973", ((System.Decimal("265.788107768534")).sub(System.Decimal("0.00000018528184443027"))).toString(), "(new Decimal(\"265.788107768534\")).sub(\"0.00000018528184443027\").toString() == \"265.78810758325215556973\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("36432462024050.335938886839157", ((System.Decimal("668461.556857667")).div(System.Decimal("0.00000001834796551538"))).toString(), "(new Decimal(\"668461.556857667\")).div(\"0.00000001834796551538\").toString() == \"36432462024050.335938886839157\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.6342358100146685424", ((System.Decimal("0.634302762632399")).sub(System.Decimal("0.0000669526177304576"))).toString(), "(new Decimal(\"0.634302762632399\")).sub(\"0.0000669526177304576\").toString() == \"0.6342358100146685424\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1.926773046574916", ((System.Decimal("1.00043254485374")).add(System.Decimal("0.926340501721176"))).toString(), "(new Decimal(\"1.00043254485374\")).add(\"0.926340501721176\").toString() == \"1.926773046574916\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-1041.94303693225454352791", ((System.Decimal("0.00000329803545647209")).sub(System.Decimal("1041.94304023029"))).toString(), "(new Decimal(\"0.00000329803545647209\")).sub(\"1041.94304023029\").toString() == \"-1041.94303693225454352791\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1.7320645654257663", ((System.Decimal("0.0218895030309863")).add(System.Decimal("1.71017506239478"))).toString(), "(new Decimal(\"0.0218895030309863\")).add(\"1.71017506239478\").toString() == \"1.7320645654257663\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6.2932320008966984549725959605", ((System.Decimal("0.00000850892723934209")).mul(System.Decimal("739603.456919828"))).toString(), "(new Decimal(\"0.00000850892723934209\")).mul(\"739603.456919828\").toString() == \"6.2932320008966984549725959605\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-41970.90431835076483", ((System.Decimal("5.53383796733517")).sub(System.Decimal("41976.4381563181"))).toString(), "(new Decimal(\"5.53383796733517\")).sub(\"41976.4381563181\").toString() == \"-41970.90431835076483\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-3233365.007464948276", ((System.Decimal("428.763072671724")).sub(System.Decimal("3233793.77053762"))).toString(), "(new Decimal(\"428.763072671724\")).sub(\"3233793.77053762\").toString() == \"-3233365.007464948276\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000002451461856604290637149", ((System.Decimal("0.00000003885374662413")).mul(System.Decimal("6.3094606559302"))).toString(), "(new Decimal(\"0.00000003885374662413\")).mul(\"6.3094606559302\").toString() == \"0.0000002451461856604290637149\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("28932456.422151199951443781242", ((System.Decimal("948527.350532137")).div(System.Decimal("0.0327841969825254"))).toString(), "(new Decimal(\"948527.350532137\")).div(\"0.0327841969825254\").toString() == \"28932456.422151199951443781242\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-39125.788708948956168359", ((System.Decimal("0.000126452543831641")).sub(System.Decimal("39125.7888354015"))).toString(), "(new Decimal(\"0.000126452543831641\")).sub(\"39125.7888354015\").toString() == \"-39125.788708948956168359\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1.3468627933517452321593950195", ((System.Decimal("228915.375763977")).mul(System.Decimal("0.00000588367115514524"))).toString(), "(new Decimal(\"228915.375763977\")).mul(\"0.00000588367115514524\").toString() == \"1.3468627933517452321593950195\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("39277185.990111339554907687023", ((System.Decimal("49193.1172782523")).mul(System.Decimal("798.428482747836"))).toString(), "(new Decimal(\"49193.1172782523\")).mul(\"798.428482747836\").toString() == \"39277185.990111339554907687023\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000000581563489873426", ((System.Decimal("0.00000052592187771849")).mul(System.Decimal("0.00000011057982459226"))).toString(), "(new Decimal(\"0.00000052592187771849\")).mul(\"0.00000011057982459226\").toString() == \"0.0000000000000581563489873426\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("61797.5944984525442125", ((System.Decimal("61797.5818746712")).add(System.Decimal("0.0126237813442125"))).toString(), "(new Decimal(\"61797.5818746712\")).add(\"0.0126237813442125\").toString() == \"61797.5944984525442125\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("198024.145522724504", ((System.Decimal("198087.806439999")).sub(System.Decimal("63.660917274496"))).toString(), "(new Decimal(\"198087.806439999\")).sub(\"63.660917274496\").toString() == \"198024.145522724504\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-3200.88940770525903322953", ((System.Decimal("0.00000982426096677047")).sub(System.Decimal("3200.88941752952"))).toString(), "(new Decimal(\"0.00000982426096677047\")).sub(\"3200.88941752952\").toString() == \"-3200.88940770525903322953\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("5.676451351339672665", ((System.Decimal("0.000242386010122665")).add(System.Decimal("5.67620896532955"))).toString(), "(new Decimal(\"0.000242386010122665\")).add(\"5.67620896532955\").toString() == \"5.676451351339672665\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000776963950158088336964", ((System.Decimal("0.00000055833457250071")).mul(System.Decimal("0.139157413569818"))).toString(), "(new Decimal(\"0.00000055833457250071\")).mul(\"0.139157413569818\").toString() == \"0.0000000776963950158088336964\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("5854.1561337260278061898964648", ((System.Decimal("0.000561036967933661")).div(System.Decimal("0.0000000958356687314"))).toString(), "(new Decimal(\"0.000561036967933661\")).div(\"0.0000000958356687314\").toString() == \"5854.1561337260278061898964648\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000328245876850082616", ((System.Decimal("0.00000084970553864246")).div(System.Decimal("25886.2516963325"))).toString(), "(new Decimal(\"0.00000084970553864246\")).div(\"25886.2516963325\").toString() == \"0.0000000000328245876850082616\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("98.5771713864016781651", ((System.Decimal("0.0000315344957781651")).add(System.Decimal("98.5771398519059"))).toString(), "(new Decimal(\"0.0000315344957781651\")).add(\"98.5771398519059\").toString() == \"98.5771713864016781651\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3769.4758721824018394019909083", ((System.Decimal("0.355002424845007")).div(System.Decimal("0.0000941781926407377"))).toString(), "(new Decimal(\"0.355002424845007\")).div(\"0.0000941781926407377\").toString() == \"3769.4758721824018394019909083\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.34233483194482226", ((System.Decimal("0.347713165147096")).sub(System.Decimal("0.00537833320227374"))).toString(), "(new Decimal(\"0.347713165147096\")).sub(\"0.00537833320227374\").toString() == \"0.34233483194482226\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("2450696.875882343227315", ((System.Decimal("2450696.35214782")).add(System.Decimal("0.523734523227315"))).toString(), "(new Decimal(\"2450696.35214782\")).add(\"0.523734523227315\").toString() == \"2450696.875882343227315\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000078351005114308196", ((System.Decimal("0.00000050161292520427")).div(System.Decimal("64021.2495643744"))).toString(), "(new Decimal(\"0.00000050161292520427\")).div(\"64021.2495643744\").toString() == \"0.0000000000078351005114308196\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-6281.22716877027720895884", ((System.Decimal("0.00000091908279104116")).sub(System.Decimal("6281.22716968936"))).toString(), "(new Decimal(\"0.00000091908279104116\")).sub(\"6281.22716968936\").toString() == \"-6281.22716877027720895884\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0519401725231857052", ((System.Decimal("0.0000851479899069052")).add(System.Decimal("0.0518550245332788"))).toString(), "(new Decimal(\"0.0000851479899069052\")).add(\"0.0518550245332788\").toString() == \"0.0519401725231857052\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00009138627400546624", ((System.Decimal("0.00000002975221119344")).add(System.Decimal("0.0000913565217942728"))).toString(), "(new Decimal(\"0.00000002975221119344\")).add(\"0.0000913565217942728\").toString() == \"0.00009138627400546624\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0927168588963668332272999205", ((System.Decimal("0.00000086909218266098")).div(System.Decimal("0.00000937361546762922"))).toString(), "(new Decimal(\"0.00000086909218266098\")).div(\"0.00000937361546762922\").toString() == \"0.0927168588963668332272999205\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("40553324.964360422490740452752", ((System.Decimal("7678.32436025065")).mul(System.Decimal("5281.53319157731"))).toString(), "(new Decimal(\"7678.32436025065\")).mul(\"5281.53319157731\").toString() == \"40553324.964360422490740452752\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("8581024.565256312363397899", ((System.Decimal("8581024.56600453")).sub(System.Decimal("0.000748217636602101"))).toString(), "(new Decimal(\"8581024.56600453\")).sub(\"0.000748217636602101\").toString() == \"8581024.565256312363397899\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0344964205226649308283349310", ((System.Decimal("0.0000244098234104038")).mul(System.Decimal("1413.21876617764"))).toString(), "(new Decimal(\"0.0000244098234104038\")).mul(\"1413.21876617764\").toString() == \"0.0344964205226649308283349310\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("-0.00144899793000472471", ((System.Decimal("0.00000002482942213529")).sub(System.Decimal("0.00144902275942686"))).toString(), "(new Decimal(\"0.00000002482942213529\")).sub(\"0.00144902275942686\").toString() == \"-0.00144899793000472471\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0145830863052812570331711621", ((System.Decimal("0.000910689151338623")).div(System.Decimal("0.0624483139079289"))).toString(), "(new Decimal(\"0.000910689151338623\")).div(\"0.0624483139079289\").toString() == \"0.0145830863052812570331711621\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("131248.684342948329262", ((System.Decimal("131248.713532113")).sub(System.Decimal("0.029189164670738"))).toString(), "(new Decimal(\"131248.713532113\")).sub(\"0.029189164670738\").toString() == \"131248.684342948329262\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("5019.003774030302274918", ((System.Decimal("0.000344105692274918")).add(System.Decimal("5019.00342992461"))).toString(), "(new Decimal(\"0.000344105692274918\")).add(\"5019.00342992461\").toString() == \"5019.003774030302274918\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000714590274185505401", ((System.Decimal("0.000617910423603798")).div(System.Decimal("8647058.96407695"))).toString(), "(new Decimal(\"0.000617910423603798\")).div(\"8647058.96407695\").toString() == \"0.0000000000714590274185505401\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("890433.23457508275525883108", ((System.Decimal("890433.234577269")).sub(System.Decimal("0.00000218624474116892"))).toString(), "(new Decimal(\"890433.234577269\")).sub(\"0.00000218624474116892\").toString() == \"890433.23457508275525883108\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000043469111168706293851817", ((System.Decimal("7.7632498637602")).div(System.Decimal("1785923.30393657"))).toString(), "(new Decimal(\"7.7632498637602\")).div(\"1785923.30393657\").toString() == \"0.0000043469111168706293851817\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0003295105776320145972457301", ((System.Decimal("5613.03226538609")).mul(System.Decimal("0.00000005870455790251"))).toString(), "(new Decimal(\"5613.03226538609\")).mul(\"0.00000005870455790251\").toString() == \"0.0003295105776320145972457301\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("6769150.5330613094858", ((System.Decimal("6769137.76284509")).add(System.Decimal("12.7702162194858"))).toString(), "(new Decimal(\"6769137.76284509\")).add(\"12.7702162194858\").toString() == \"6769150.5330613094858\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3245807.691775637069", ((System.Decimal("987.946705887069")).add(System.Decimal("3244819.74506975"))).toString(), "(new Decimal(\"987.946705887069\")).add(\"3244819.74506975\").toString() == \"3245807.691775637069\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("373.6556954120196391427", ((System.Decimal("0.0000970930446391427")).add(System.Decimal("373.655598318975"))).toString(), "(new Decimal(\"0.0000970930446391427\")).add(\"373.655598318975\").toString() == \"373.6556954120196391427\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.02061165320041153501", ((System.Decimal("0.00000085500743326499")).sub(System.Decimal("0.0206125082078448"))).toString(), "(new Decimal(\"0.00000085500743326499\")).sub(\"0.0206125082078448\").toString() == \"-0.02061165320041153501\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000008709359977812961424188", ((System.Decimal("0.00000001982638995155")).mul(System.Decimal("43.9281180239879"))).toString(), "(new Decimal(\"0.00000001982638995155\")).mul(\"43.9281180239879\").toString() == \"0.0000008709359977812961424188\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("544246.62011017191540368", ((System.Decimal("544246.617026742")).add(System.Decimal("0.00308342991540368"))).toString(), "(new Decimal(\"544246.617026742\")).add(\"0.00308342991540368\").toString() == \"544246.62011017191540368\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("51.73313984431529452496", ((System.Decimal("51.7331402989724")).sub(System.Decimal("0.00000045465710547504"))).toString(), "(new Decimal(\"51.7331402989724\")).sub(\"0.00000045465710547504\").toString() == \"51.73313984431529452496\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.000000000046298846889617716", ((System.Decimal("0.000107662315064884")).div(System.Decimal("2325377.89378566"))).toString(), "(new Decimal(\"0.000107662315064884\")).div(\"2325377.89378566\").toString() == \"0.000000000046298846889617716\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("18572.0885521773395175914", ((System.Decimal("18572.0885258969")).add(System.Decimal("0.0000262804395175914"))).toString(), "(new Decimal(\"18572.0885258969\")).add(\"0.0000262804395175914\").toString() == \"18572.0885521773395175914\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000027531871725364104883308", ((System.Decimal("5.44742788907486")).mul(System.Decimal("0.00000050541048520497"))).toString(), "(new Decimal(\"5.44742788907486\")).mul(\"0.00000050541048520497\").toString() == \"0.0000027531871725364104883308\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-12716.27520800453493739", ((System.Decimal("0.00937844566506261")).sub(System.Decimal("12716.2845864502"))).toString(), "(new Decimal(\"0.00937844566506261\")).sub(\"12716.2845864502\").toString() == \"-12716.27520800453493739\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000003087983018261781959", ((System.Decimal("0.000613210929377568")).mul(System.Decimal("0.00000050357599160801"))).toString(), "(new Decimal(\"0.000613210929377568\")).mul(\"0.00000050357599160801\").toString() == \"0.0000000003087983018261781959\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("102.32918883824198403740845781", ((System.Decimal("9.79164098845406")).div(System.Decimal("0.095687663506571"))).toString(), "(new Decimal(\"9.79164098845406\")).div(\"0.095687663506571\").toString() == \"102.32918883824198403740845781\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("9928.1819875610465252535811176", ((System.Decimal("3509.39318701131")).mul(System.Decimal("2.82903096304696"))).toString(), "(new Decimal(\"3509.39318701131\")).mul(\"2.82903096304696\").toString() == \"9928.1819875610465252535811176\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.005761883809120339", ((System.Decimal("0.00550658921501906")).add(System.Decimal("0.000255294594101279"))).toString(), "(new Decimal(\"0.00550658921501906\")).add(\"0.000255294594101279\").toString() == \"0.005761883809120339\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.00000018726902063344", ((System.Decimal("0.00000003774064715846")).sub(System.Decimal("0.0000002250096677919"))).toString(), "(new Decimal(\"0.00000003774064715846\")).sub(\"0.0000002250096677919\").toString() == \"-0.00000018726902063344\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000176594645959884060957208", ((System.Decimal("0.000982163002706209")).mul(System.Decimal("0.0179801769638342"))).toString(), "(new Decimal(\"0.000982163002706209\")).mul(\"0.0179801769638342\").toString() == \"0.0000176594645959884060957208\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.60567620163151359006", ((System.Decimal("0.00000156584160940994")).sub(System.Decimal("0.605677767473123"))).toString(), "(new Decimal(\"0.00000156584160940994\")).sub(\"0.605677767473123\").toString() == \"-0.60567620163151359006\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-14377.8227241141224", ((System.Decimal("83.8072135037776")).sub(System.Decimal("14461.6299376179"))).toString(), "(new Decimal(\"83.8072135037776\")).sub(\"14461.6299376179\").toString() == \"-14377.8227241141224\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("82431.57192252187505207205", ((System.Decimal("0.00000005587505207205")).add(System.Decimal("82431.571922466"))).toString(), "(new Decimal(\"0.00000005587505207205\")).add(\"82431.571922466\").toString() == \"82431.57192252187505207205\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("7479590.99871805918841", ((System.Decimal("7479600.39762761")).sub(System.Decimal("9.39890955081159"))).toString(), "(new Decimal(\"7479600.39762761\")).sub(\"9.39890955081159\").toString() == \"7479590.99871805918841\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.85300160231268362844", ((System.Decimal("0.00000060434978762844")).add(System.Decimal("0.853000997962896"))).toString(), "(new Decimal(\"0.00000060434978762844\")).add(\"0.853000997962896\").toString() == \"0.85300160231268362844\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("56119.27283704670739007136", ((System.Decimal("56119.2728374709")).sub(System.Decimal("0.00000042419260992864"))).toString(), "(new Decimal(\"56119.2728374709\")).sub(\"0.00000042419260992864\").toString() == \"56119.27283704670739007136\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000429259949352215200", ((System.Decimal("0.00000008143559702739")).mul(System.Decimal("0.000527115862130707"))).toString(), "(new Decimal(\"0.00000008143559702739\")).mul(\"0.000527115862130707\").toString() == \"0.0000000000429259949352215200\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("0.0002210184665192469105090427", ((System.Decimal("0.177999768954702")).div(System.Decimal("805.361523667984"))).toString(), "(new Decimal(\"0.177999768954702\")).div(\"805.361523667984\").toString() == \"0.0002210184665192469105090427\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("402.38051609824775058238", ((System.Decimal("0.00000008959675058238")).add(System.Decimal("402.380516008651"))).toString(), "(new Decimal(\"0.00000008959675058238\")).add(\"402.380516008651\").toString() == \"402.38051609824775058238\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1157.9235974952320582596435131", ((System.Decimal("3201536.39800918")).mul(System.Decimal("0.000361677474045045"))).toString(), "(new Decimal(\"3201536.39800918\")).mul(\"0.000361677474045045\").toString() == \"1157.9235974952320582596435131\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("596105387691.24201370458414998", ((System.Decimal("9903407.65095475")).mul(System.Decimal("60191.9469238221"))).toString(), "(new Decimal(\"9903407.65095475\")).mul(\"60191.9469238221\").toString() == \"596105387691.24201370458414998\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("159156.866445745", ((System.Decimal("293261.767501599")).sub(System.Decimal("134104.901055854"))).toString(), "(new Decimal(\"293261.767501599\")).sub(\"134104.901055854\").toString() == \"159156.866445745\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("25483.063870515866677174995489", ((System.Decimal("0.0000990216107103143")).div(System.Decimal("0.000000003885781208"))).toString(), "(new Decimal(\"0.0000990216107103143\")).div(\"0.000000003885781208\").toString() == \"25483.063870515866677174995489\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("273.43581025760547419975195832", ((System.Decimal("0.504111655756883")).mul(System.Decimal("542.411204214399"))).toString(), "(new Decimal(\"0.504111655756883\")).mul(\"542.411204214399\").toString() == \"273.43581025760547419975195832\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000054983344821540025900927", ((System.Decimal("0.00000002588138930773")).mul(System.Decimal("212.443559995128"))).toString(), "(new Decimal(\"0.00000002588138930773\")).mul(\"212.443559995128\").toString() == \"0.0000054983344821540025900927\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0401243778893816891004378948", ((System.Decimal("0.00000005520699944124")).div(System.Decimal("0.00000137589670781786"))).toString(), "(new Decimal(\"0.00000005520699944124\")).div(\"0.00000137589670781786\").toString() == \"0.0401243778893816891004378948\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00005649102308903403", ((System.Decimal("0.000056398253821022")).add(System.Decimal("0.00000009276926801203"))).toString(), "(new Decimal(\"0.000056398253821022\")).add(\"0.00000009276926801203\").toString() == \"0.00005649102308903403\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("1217.5521632644127050450346182", ((System.Decimal("0.0854362290750426")).div(System.Decimal("0.0000701704876824145"))).toString(), "(new Decimal(\"0.0854362290750426\")).div(\"0.0000701704876824145\").toString() == \"1217.5521632644127050450346182\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000022138852190770639", ((System.Decimal("0.00000001968172030509")).div(System.Decimal("8890.12679405982"))).toString(), "(new Decimal(\"0.00000001968172030509\")).div(\"8890.12679405982\").toString() == \"0.0000000000022138852190770639\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00004304147600337928", ((System.Decimal("0.00000665923518438788")).add(System.Decimal("0.0000363822408189914"))).toString(), "(new Decimal(\"0.00000665923518438788\")).add(\"0.0000363822408189914\").toString() == \"0.00004304147600337928\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.84670431087102625289", ((System.Decimal("0.846703634525977")).add(System.Decimal("0.00000067634504925289"))).toString(), "(new Decimal(\"0.846703634525977\")).add(\"0.00000067634504925289\").toString() == \"0.84670431087102625289\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.095390208997479793", ((System.Decimal("0.0963102136721417")).sub(System.Decimal("0.000920004674661907"))).toString(), "(new Decimal(\"0.0963102136721417\")).sub(\"0.000920004674661907\").toString() == \"0.095390208997479793\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.00981694733288462955", ((System.Decimal("0.00000990941151041045")).sub(System.Decimal("0.00982685674439504"))).toString(), "(new Decimal(\"0.00000990941151041045\")).sub(\"0.00982685674439504\").toString() == \"-0.00981694733288462955\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-0.00000990941151041045", (System.Decimal("0.00000990941151041045").neg()).toString(), "new Decimal(\"0.00000990941151041045\").neg().toString() == \"-0.00000990941151041045\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0.00000990941151041045", (System.Decimal("-0.00000990941151041045").neg()).toString(), "new Decimal(\"-0.00000990941151041045\").neg().toString() == \"0.00000990941151041045\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-544246.617026742", (System.Decimal("544246.617026742").neg()).toString(), "(new Decimal(\"544246.617026742\")).neg().toString() == \"-544246.617026742\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("544246.617026742", (System.Decimal("-544246.617026742").neg()).toString(), "(new Decimal(\"-544246.617026742\")).neg().toString() == \"544246.617026742\" FAILED");
                // #1588
                Bridge.Test.NUnit.Assert.AreEqual("0", (System.Decimal("0").neg()).toString(), "(new Decimal(\"0\")).neg().toString() == \"0\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("0.8", (System.Decimal("254.9").mod(System.Decimal("12.1"))).toString(), "254.9 % 12.1");
                Bridge.Test.NUnit.Assert.AreEqual("-0.8", (System.Decimal("-254.9").mod(System.Decimal("12.1"))).toString(), "-254.9 % 12.1");
                Bridge.Test.NUnit.Assert.AreEqual("0.8", (System.Decimal("254.9").mod(System.Decimal("-12.1"))).toString(), "254.9 % -12.1");
                Bridge.Test.NUnit.Assert.AreEqual("-0.8", (System.Decimal("-254.9").mod(System.Decimal("-12.1"))).toString(), "-254.9 % -12.1");
                Bridge.Test.NUnit.Assert.AreEqual("12.1", (System.Decimal("12.1").mod(System.Decimal("254.9"))).toString(), "12.1 % 254.9");
                Bridge.Test.NUnit.Assert.AreEqual("-12.1", (System.Decimal("-12.1").mod(System.Decimal("254.9"))).toString(), "-12.1 % 254.9");
                Bridge.Test.NUnit.Assert.AreEqual("12.1", (System.Decimal("12.1").mod(System.Decimal("-254.9"))).toString(), "12.1 % -254.9");
                Bridge.Test.NUnit.Assert.AreEqual("-12.1", (System.Decimal("-12.1").mod(System.Decimal("-254.9"))).toString(), "-12.1 % -254.9");
                Bridge.Test.NUnit.Assert.AreEqual("0", (System.Decimal("254.9").mod(System.Decimal("254.9"))).toString(), "12.1 % 12.1");
                Bridge.Test.NUnit.Assert.AreEqual("0", (System.Decimal("-254.9").mod(System.Decimal("254.9"))).toString(), "-12.1 % 12.1");
                Bridge.Test.NUnit.Assert.AreEqual("0", (System.Decimal("254.9").mod(System.Decimal("-254.9"))).toString(), "12.1 % -12.1");
                Bridge.Test.NUnit.Assert.AreEqual("0", (System.Decimal("-254.9").mod(System.Decimal("-254.9"))).toString(), "-12.1 % -12.1");

                Bridge.Test.NUnit.Assert.AreEqual("0", System.Decimal(".9").trunc().toString(), "(new Decimal(\".9\").trunc() == \"0\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0", System.Decimal(".999").trunc().toString(), "(new Decimal(\".999\").trunc() == \"0\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0", System.Decimal(".999999").trunc().toString(), "(new Decimal(\".999999\").trunc() == \"0\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("3", System.Decimal("3.9999999").trunc().toString(), "(new Decimal(\"3.9999999\").trunc() == \"3\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("12312312313123123123123123", System.Decimal("12312312313123123123123123.99").trunc().toString(), "(new Decimal(\"12312312313123123123123123.99\").trunc() == \"12312312313123123123123123\" FAILED");
                // #1588
                Bridge.Test.NUnit.Assert.AreEqual("0", System.Decimal("-.9").trunc().toString(), "(new Decimal(\"-.9\").trunc() == \"0\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0", System.Decimal("-.999").trunc().toString(), "(new Decimal(\"-.999\").trunc() == \"0\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("0", System.Decimal("-.999999").trunc().toString(), "(new Decimal(\"-.999999\").trunc() == \"0\" FAILED");

                Bridge.Test.NUnit.Assert.AreEqual("-3", System.Decimal("-3.9999999").trunc().toString(), "(new Decimal(\"-3.9999999\").trunc() == \"-3\" FAILED");
                Bridge.Test.NUnit.Assert.AreEqual("-12312312313123123123123123", System.Decimal("-12312312313123123123123123.99").trunc().toString(), "(new Decimal(\"-12312312313123123123123123.99\").trunc() == \"-12312312313123123123123123\" FAILED");

                var d;
                d = System.Decimal(0);
                Bridge.Test.NUnit.Assert.AreEqual("1", ((d = d.inc())).toString(), "(new Decimal(\"0\").inc() == \"1\" FAILED");
                d = System.Decimal(1);
                Bridge.Test.NUnit.Assert.AreEqual("2", ((d = d.inc())).toString(), "(new Decimal(\"1\").inc() == \"2\" FAILED");
                d = System.Decimal(2);
                Bridge.Test.NUnit.Assert.AreEqual("3", ((d = d.inc())).toString(), "(new Decimal(\"2\").inc() == \"3\" FAILED");
                d = System.Decimal(-1);
                Bridge.Test.NUnit.Assert.AreEqual("0", ((d = d.inc())).toString(), "(new Decimal(\"-1\").inc() == \"0\" FAILED");
                d = System.Decimal(-2);
                Bridge.Test.NUnit.Assert.AreEqual("-1", ((d = d.inc())).toString(), "(new Decimal(\"2\").inc() == \"-1\" FAILED");
                d = System.Decimal(1.5);
                Bridge.Test.NUnit.Assert.AreEqual("2.5", ((d = d.inc())).toString(), "(new Decimal(\"1.5\").inc() == \"2.5\" FAILED");
                d = System.Decimal(-1.5);
                Bridge.Test.NUnit.Assert.AreEqual("-0.5", ((d = d.inc())).toString(), "(new Decimal(\"-1.5\").inc() == \"-0.5\" FAILED");

                d = System.Decimal(0);
                Bridge.Test.NUnit.Assert.AreEqual("-1", ((d = d.dec())).toString(), "(new Decimal(\"0\").dec().toString() == \"-1\" FAILED");
                d = System.Decimal(1);
                Bridge.Test.NUnit.Assert.AreEqual("0", ((d = d.dec())).toString(), "(new Decimal(\"1\").dec().toString() == \"0\" FAILED");
                d = System.Decimal(2);
                Bridge.Test.NUnit.Assert.AreEqual("3", ((d = d.inc())).toString(), "(new Decimal(\"2\").inc() == \"1\" FAILED");
                d = System.Decimal(-1);
                Bridge.Test.NUnit.Assert.AreEqual("-2", ((d = d.dec())).toString(), "(new Decimal(\"-1\").dec().toString() == \"-2\" FAILED");
                d = System.Decimal(-2);
                Bridge.Test.NUnit.Assert.AreEqual("-3", ((d = d.dec())).toString(), "(new Decimal(\"2\").dec().toString() == \"-3\" FAILED");
                d = System.Decimal(1.5);
                Bridge.Test.NUnit.Assert.AreEqual("0.5", ((d = d.dec())).toString(), "(new Decimal(\"1.5\").dec().toString() == \"0.5\" FAILED");
                d = System.Decimal(-1.5);
                Bridge.Test.NUnit.Assert.AreEqual("-2.5", ((d = d.dec())).toString(), "(new Decimal(\"-1.5\").dec().toString() == \"-2.5\" FAILED");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests, {
        f1: function () {
            System.Decimal("A123");
        },
        f2: function () {
            System.Decimal("12.34.56");
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests", {
        methods: {
            TryParseWorks_SPI_1592: function () {
                var numberResult = { };
                var result = System.Int16.tryParse("54768", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                // #1592
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);

                result = System.Int16.tryParse("-55678", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                // #1592
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests", {
        methods: {
            IntegerModuloWorks_SPI_1602: function () {
                var a = 17, b = 4, c = 0;
                // #1602
                Bridge.Test.NUnit.Assert.Throws$2(System.DivideByZeroException, function () {
                    var x = a % c;
                });
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.SByteTests", {
        methods: {
            TryParseWorks_SPI_1592: function () {
                var numberResult = { };
                var result = System.SByte.tryParse("54768", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                // #1592
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.StringTests", {
        methods: {
            FormatWorksWithIFormattable_SPI_1598: function () {
                // #1598
                Bridge.Test.NUnit.Assert.AreEqual("Formatted: FMT, null formatProvider", System.String.format("{0:FMT}", new Bridge.ClientTest.Batch4.SimpleTypes.StringTests.MyFormattable()));
            },
            FormatWorksWithIFormattableAndFormatProvider_SPI_1598: function () {
                // #1598
                Bridge.Test.NUnit.Assert.AreEqual("Formatted: FMT, StringTests+MyFormatProvider", System.String.formatProvider(new Bridge.ClientTest.Batch4.SimpleTypes.StringTests.MyFormatProvider(), "{0:FMT}", new Bridge.ClientTest.Batch4.SimpleTypes.StringTests.MyFormattable()));
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.StringTests.MyFormatProvider", {
        inherits: [System.IFormatProvider],
        alias: ["getFormat", "System$IFormatProvider$getFormat"],
        methods: {
            getFormat: function (type) {
                return System.Globalization.CultureInfo.invariantCulture.getFormat(type);
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.StringTests.MyFormattable", {
        inherits: [System.IFormattable],
        alias: ["format", "System$IFormattable$format"],
        methods: {
            format: function (format, formatProvider) {
                return System.String.concat("Formatted: ", format, ", ", (formatProvider == null ? "null formatProvider" : Bridge.Reflection.getTypeFullName(Bridge.getType(formatProvider))));
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests", {
        methods: {
            TypePropertiesAreCorrect_SPI_1717: function () {
                Bridge.Test.NUnit.Assert.AreEqual("System.TimeSpan", Bridge.Reflection.getTypeFullName(System.TimeSpan));
                Bridge.Test.NUnit.Assert.False(Bridge.Reflection.isClass(System.TimeSpan));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IComparable$1(System.TimeSpan), System.TimeSpan));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IEquatable$1(System.TimeSpan), System.TimeSpan));
                var d = new System.TimeSpan();
                Bridge.Test.NUnit.Assert.True(Bridge.is(d, System.TimeSpan));
                Bridge.Test.NUnit.Assert.True(Bridge.is(d, System.IComparable$1(System.TimeSpan)));
                Bridge.Test.NUnit.Assert.True(Bridge.is(d, System.IEquatable$1(System.TimeSpan)));

                var interfaces = Bridge.Reflection.getInterfaces(System.TimeSpan);
                Bridge.Test.NUnit.Assert.AreEqual(3, interfaces.length);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IComparable$1(System.TimeSpan), Function));
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IEquatable$1(System.TimeSpan), Function));
            },
            DefaultConstructorWorks: function () {
                var time = new System.TimeSpan();
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64(0), time.getTicks());
            },
            DefaultValueWorks: function () {
                var ts = Bridge.getDefaultValue(System.TimeSpan);
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64(0), ts.getTicks());
            },
            ZeroWorks: function () {
                var ts = System.TimeSpan.zero;
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64(0), ts.getTicks());
            },
            CreatingInstanceReturnsTimeSpanWithZeroValue: function () {
                var ts = Bridge.createInstance(System.TimeSpan);
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64(0), ts.getTicks());
            },
            ParameterConstructorsWorks: function () {
                var time = new System.TimeSpan(System.Int64(34567));
                Bridge.Test.NUnit.Assert.True(Bridge.is(time, System.TimeSpan), "ticks type");
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64(34567), time.getTicks(), "ticks value");

                time = new System.TimeSpan(10, 20, 5);
                Bridge.Test.NUnit.Assert.True(Bridge.is(time, System.TimeSpan), "h, m, s type");
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([-1612154752,86]), time.getTicks(), "h, m, s value");

                time = new System.TimeSpan(15, 10, 20, 5);
                Bridge.Test.NUnit.Assert.True(Bridge.is(time, System.TimeSpan), "d, h, m, s type");
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([471513216,3104]), time.getTicks(), "d, h, m, s value");

                time = new System.TimeSpan(15, 10, 20, 5, 14);
                Bridge.Test.NUnit.Assert.True(Bridge.is(time, System.TimeSpan), "full type");
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([471653216,3104]), time.getTicks(), "full value");
            },
            FactoryMethodsWork: function () {
                var time = System.TimeSpan.fromDays(3);
                Bridge.Test.NUnit.Assert.True(Bridge.is(time, System.TimeSpan), "FromDays type");
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([2134720512,603]), time.getTicks(), "FromDays value");

                time = System.TimeSpan.fromHours(3);
                Bridge.Test.NUnit.Assert.True(Bridge.is(time, System.TimeSpan), "FromHours type");
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([625817600,25]), time.getTicks(), "FromHours value");

                time = System.TimeSpan.fromMinutes(3);
                Bridge.Test.NUnit.Assert.True(Bridge.is(time, System.TimeSpan), "FromMinutes type");
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64(1800000000), time.getTicks(), "FromMinutes value");

                time = System.TimeSpan.fromSeconds(3);
                Bridge.Test.NUnit.Assert.True(Bridge.is(time, System.TimeSpan), "FromSeconds type");
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64(30000000), time.getTicks(), "FromSeconds value");

                time = System.TimeSpan.fromMilliseconds(3);
                Bridge.Test.NUnit.Assert.True(Bridge.is(time, System.TimeSpan), "FromMilliseconds type");
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64(30000), time.getTicks(), "FromMilliseconds value");

                time = System.TimeSpan.fromTicks(System.Int64(3));
                Bridge.Test.NUnit.Assert.True(Bridge.is(time, System.TimeSpan), "FromTicks type");
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64(3), time.getTicks(), "FromTicks value");
            },
            PropertiesWork: function () {
                var time = new System.TimeSpan(15, 10, 20, 5, 14);
                Bridge.Test.NUnit.Assert.AreEqual(15, time.getDays());
                Bridge.Test.NUnit.Assert.AreEqual(10, time.getHours());
                Bridge.Test.NUnit.Assert.AreEqual(20, time.getMinutes());
                Bridge.Test.NUnit.Assert.AreEqual(5, time.getSeconds());
                Bridge.Test.NUnit.Assert.AreEqual(14, time.getMilliseconds());
                this.AssertAlmostEqual(time.getTotalDays(), 15.430613587962963);
                this.AssertAlmostEqual(time.getTotalHours(), 370.33472611111108);
                this.AssertAlmostEqual(time.getTotalMinutes(), 22220.083566666668);
                this.AssertAlmostEqual(time.getTotalSeconds(), 1333205.014);
                this.AssertAlmostEqual(time.getTotalMilliseconds(), 1333205014.0);
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([471653216,3104]), time.getTicks());
            },
            CompareToWorks: function () {
                var time1 = new System.TimeSpan(15, 10, 20, 5, 14);
                var time2 = new System.TimeSpan(15, 10, 20, 5, 14);
                var time3 = new System.TimeSpan(14, 10, 20, 5, 14);
                var time4 = new System.TimeSpan(15, 11, 20, 5, 14);
                Bridge.Test.NUnit.Assert.AreEqual(time1.compareTo(time1), 0);
                Bridge.Test.NUnit.Assert.AreEqual(time1.compareTo(time2), 0);
                Bridge.Test.NUnit.Assert.AreEqual(time1.compareTo(time3), 1);
                Bridge.Test.NUnit.Assert.AreEqual(time1.compareTo(time4), -1);
            },
            CompareWorks: function () {
                var time1 = new System.TimeSpan(15, 10, 20, 5, 14);
                var time2 = new System.TimeSpan(15, 10, 20, 5, 14);
                var time3 = new System.TimeSpan(14, 10, 20, 5, 14);
                var time4 = new System.TimeSpan(15, 11, 20, 5, 14);
                Bridge.Test.NUnit.Assert.AreEqual(time1.compareTo(time1), 0);
                Bridge.Test.NUnit.Assert.AreEqual(time1.compareTo(time2), 0);
                Bridge.Test.NUnit.Assert.AreEqual(time1.compareTo(time3), 1);
                Bridge.Test.NUnit.Assert.AreEqual(time1.compareTo(time4), -1);
            },
            StaticEqualsWorks: function () {
                var time1 = new System.TimeSpan(15, 10, 20, 5, 14);
                var time2 = new System.TimeSpan(14, 10, 20, 5, 14);
                var time3 = new System.TimeSpan(15, 10, 20, 5, 14);

                Bridge.Test.NUnit.Assert.False((time1).ticks.eq((time2).ticks));
                Bridge.Test.NUnit.Assert.True((time1).ticks.eq((time3).ticks));
            },
            EqualsWorks: function () {
                var time1 = new System.TimeSpan(15, 10, 20, 5, 14);
                var time2 = new System.TimeSpan(14, 10, 20, 5, 14);
                var time3 = new System.TimeSpan(15, 10, 20, 5, 14);

                Bridge.Test.NUnit.Assert.False(time1.equalsT(time2));
                Bridge.Test.NUnit.Assert.True(time1.equalsT(time3));
            },
            IEquatableEqualsWorks: function () {
                var time1 = new System.TimeSpan(15, 10, 20, 5, 14);
                var time2 = new System.TimeSpan(14, 10, 20, 5, 14);
                var time3 = new System.TimeSpan(15, 10, 20, 5, 14);

                Bridge.Test.NUnit.Assert.False(Bridge.equalsT(Bridge.cast(time1, System.IEquatable$1(System.TimeSpan)), time2, System.TimeSpan));
                Bridge.Test.NUnit.Assert.True(Bridge.equalsT(Bridge.cast(time1, System.IEquatable$1(System.TimeSpan)), time3, System.TimeSpan));
            },
            ToStringWorks: function () {
                var time1 = new System.TimeSpan(15, 10, 20, 5, 14);
                var time2 = new System.TimeSpan(14, 10, 20, 5, 2);
                var time3 = new System.TimeSpan(15, 11, 20, 6, 14);
                var time4 = new System.TimeSpan(1, 2, 3);
                Bridge.Test.NUnit.Assert.AreEqual("15.10:20:05.0140000", time1.toString());
                Bridge.Test.NUnit.Assert.AreEqual("14.10:20:05.0020000", time2.toString());
                Bridge.Test.NUnit.Assert.AreEqual("15.11:20:06.0140000", time3.toString());
                Bridge.Test.NUnit.Assert.AreEqual("01:02:03", time4.toString());
            },
            AddWorks: function () {
                var time1 = new System.TimeSpan(2, 3, 4, 5, 6);
                var time2 = new System.TimeSpan(3, 4, 5, 6, 7);
                var actual = time1.add(time2);
                Bridge.Test.NUnit.Assert.True(Bridge.is(actual, System.TimeSpan), "Should be TimeSpan");
                Bridge.Test.NUnit.Assert.AreEqual(457751013, actual.getTotalMilliseconds(), "TotalMilliseconds should be correct");
            },
            SubtractWorks: function () {
                var time1 = new System.TimeSpan(4, 3, 7, 2, 6);
                var time2 = new System.TimeSpan(3, 4, 5, 6, 7);
                var actual = time1.subtract(time2);
                Bridge.Test.NUnit.Assert.True(Bridge.is(actual, System.TimeSpan), "Should be TimeSpan");
                Bridge.Test.NUnit.Assert.AreEqual(82915999, actual.getTotalMilliseconds(), "TotalMilliseconds should be correct");
            },
            DurationWorks: function () {
                var time1 = new System.TimeSpan(-3, -2, -1, -5, -4);
                var time2 = new System.TimeSpan(2, 1, 5, 4, 3);
                var actual1 = time1.duration();
                var actual2 = time2.duration();
                Bridge.Test.NUnit.Assert.True(Bridge.is(time1, System.TimeSpan), "Should be TimeSpan");
                Bridge.Test.NUnit.Assert.AreEqual(266465004, actual1.getTotalMilliseconds(), "Negative should be negated");
                Bridge.Test.NUnit.Assert.AreEqual(176704003, actual2.getTotalMilliseconds(), "Positive should be preserved");
            },
            NegateWorks: function () {
                var time = new System.TimeSpan(-3, 2, -1, 5, -4);
                var actual = time.negate();
                Bridge.Test.NUnit.Assert.True(Bridge.is(actual, System.TimeSpan), "Should be TimeSpan");
                Bridge.Test.NUnit.Assert.AreEqual(252055004, actual.getTotalMilliseconds(), "Ticks should be correct");
            },
            AssertAlmostEqual: function (d1, d2) {
                var diff = d2 - d1;
                if (diff < 0) {
                    diff = -diff;
                }
                Bridge.Test.NUnit.Assert.True(diff < 1E-08);
            },
            ComparisonOperatorsWork: function () {
                var time1 = new System.TimeSpan(15, 10, 20, 5, 14);
                var time2 = new System.TimeSpan(15, 10, 20, 5, 14);
                var time3 = new System.TimeSpan(14, 10, 20, 5, 14);
                var time4 = new System.TimeSpan(15, 11, 20, 5, 14);

                Bridge.Test.NUnit.Assert.False(System.TimeSpan.gt(time1, time2), "> 1");
                Bridge.Test.NUnit.Assert.True(System.TimeSpan.gt(time1, time3), "> 2");
                Bridge.Test.NUnit.Assert.False(System.TimeSpan.gt(time1, time4), "> 3");

                Bridge.Test.NUnit.Assert.True(System.TimeSpan.gte(time1, time2), ">= 1");
                Bridge.Test.NUnit.Assert.True(System.TimeSpan.gte(time1, time3), ">= 2");
                Bridge.Test.NUnit.Assert.False(System.TimeSpan.gte(time1, time4), ">= 3");

                Bridge.Test.NUnit.Assert.False(System.TimeSpan.lt(time1, time2), "< 1");
                Bridge.Test.NUnit.Assert.False(System.TimeSpan.lt(time1, time3), "< 2");
                Bridge.Test.NUnit.Assert.True(System.TimeSpan.lt(time1, time4), "< 3");

                Bridge.Test.NUnit.Assert.True(System.TimeSpan.lte(time1, time2), "<= 1");
                Bridge.Test.NUnit.Assert.False(System.TimeSpan.lte(time1, time3), "<= 2");
                Bridge.Test.NUnit.Assert.True(System.TimeSpan.lte(time1, time4), "<= 3");

                Bridge.Test.NUnit.Assert.True(System.TimeSpan.eq(time1, time1), "== 1");
                Bridge.Test.NUnit.Assert.True(System.TimeSpan.eq(time1, time2), "== 2");
                Bridge.Test.NUnit.Assert.False(System.TimeSpan.eq(time1, time3), "== 3");
                Bridge.Test.NUnit.Assert.False(System.TimeSpan.eq(time1, time4), "== 4");

                Bridge.Test.NUnit.Assert.False(System.TimeSpan.neq(time1, time1), "!= 1");
                Bridge.Test.NUnit.Assert.False(System.TimeSpan.neq(time1, time2), "!= 2");
                Bridge.Test.NUnit.Assert.True(System.TimeSpan.neq(time1, time3), "!= 3");
                Bridge.Test.NUnit.Assert.True(System.TimeSpan.neq(time1, time4), "!= 4");
            },
            AdditionOperatorWorks: function () {
                var time1 = new System.TimeSpan(2, 3, 4, 5, 6);
                var time2 = new System.TimeSpan(3, 4, 5, 6, 7);
                var actual = System.TimeSpan.add(time1, time2);
                Bridge.Test.NUnit.Assert.True(Bridge.is(actual, System.TimeSpan), "Should be TimeSpan");
                Bridge.Test.NUnit.Assert.AreEqual(457751013, actual.getTotalMilliseconds(), "TotalMilliseconds should be correct");
            },
            SubtractionOperatorWorks: function () {
                var time1 = new System.TimeSpan(4, 3, 7, 2, 6);
                var time2 = new System.TimeSpan(3, 4, 5, 6, 7);
                var actual = System.TimeSpan.sub(time1, time2);
                Bridge.Test.NUnit.Assert.True(Bridge.is(actual, System.TimeSpan), "Should be TimeSpan");
                Bridge.Test.NUnit.Assert.AreEqual(82915999, actual.getTotalMilliseconds(), "TotalMilliseconds should be correct");
            },
            UnaryPlusWorks: function () {
                var time = new System.TimeSpan(-3, 2, -1, 5, -4);
                var actual = System.TimeSpan.plus(time);
                Bridge.Test.NUnit.Assert.True(Bridge.is(actual, System.TimeSpan), "Should be TimeSpan");
                Bridge.Test.NUnit.Assert.AreEqual(-252055004, actual.getTotalMilliseconds(), "Ticks should be correct");
            },
            UnaryMinusWorks: function () {
                var time = new System.TimeSpan(-3, 2, -1, 5, -4);
                var actual = System.TimeSpan.neg(time);
                Bridge.Test.NUnit.Assert.True(Bridge.is(actual, System.TimeSpan), "Should be TimeSpan");
                Bridge.Test.NUnit.Assert.AreEqual(252055004, actual.getTotalMilliseconds(), "Ticks should be correct");
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.TupleTests", {
        methods: {
            Tuple1Works: function () {
                for (var i = 0; i <= 1; i = (i + 1) | 0) {
                    var t = i === 0 ? { item1: "a" } : { item1: "a" };
                    Bridge.Test.NUnit.Assert.AreStrictEqual("a", t.item1);
                }
            },
            Tuple2Works: function () {
                for (var i = 0; i <= 1; i = (i + 1) | 0) {
                    var t = i === 0 ? { item1: "a", item2: "b" } : { item1: "a", item2: "b" };
                    Bridge.Test.NUnit.Assert.AreStrictEqual("a", t.item1);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("b", t.item2);
                }
            },
            Tuple3Works: function () {
                for (var i = 0; i <= 1; i = (i + 1) | 0) {
                    var t = i === 0 ? { item1: "a", item2: "b", item3: "c" } : { item1: "a", item2: "b", item3: "c" };
                    Bridge.Test.NUnit.Assert.AreStrictEqual("a", t.item1);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("b", t.item2);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("c", t.item3);
                }
            },
            Tuple4Works: function () {
                for (var i = 0; i <= 1; i = (i + 1) | 0) {
                    var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d" } : { item1: "a", item2: "b", item3: "c", item4: "d" };
                    Bridge.Test.NUnit.Assert.AreStrictEqual("a", t.item1);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("b", t.item2);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("c", t.item3);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("d", t.item4);
                }
            },
            Tuple5Works: function () {
                for (var i = 0; i <= 1; i = (i + 1) | 0) {
                    var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e" };
                    Bridge.Test.NUnit.Assert.AreStrictEqual("a", t.item1);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("b", t.item2);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("c", t.item3);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("d", t.item4);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("e", t.item5);
                }
            },
            Tuple6Works: function () {
                for (var i = 0; i <= 1; i = (i + 1) | 0) {
                    var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f" };
                    Bridge.Test.NUnit.Assert.AreStrictEqual("a", t.item1);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("b", t.item2);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("c", t.item3);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("d", t.item4);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("e", t.item5);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("f", t.item6);
                }
            },
            Tuple7Works: function () {
                for (var i = 0; i <= 1; i = (i + 1) | 0) {
                    var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g" };
                    Bridge.Test.NUnit.Assert.AreStrictEqual("a", t.item1);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("b", t.item2);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("c", t.item3);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("d", t.item4);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("e", t.item5);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("f", t.item6);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("g", t.item7);
                }
            },
            Tuple8Works: function () {
                for (var i = 0; i <= 1; i = (i + 1) | 0) {
                    var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g", rest: "h" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g", rest: "h" };
                    Bridge.Test.NUnit.Assert.AreStrictEqual("a", t.item1);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("b", t.item2);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("c", t.item3);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("d", t.item4);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("e", t.item5);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("f", t.item6);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("g", t.item7);
                    Bridge.Test.NUnit.Assert.AreStrictEqual("h", t.rest);
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests", {
        methods: {
            TypePropertiesAreCorrect_SPI_1717: function () {
                Bridge.Test.NUnit.Assert.True(Bridge.is(Bridge.box(0, System.UInt16), System.UInt16));
                Bridge.Test.NUnit.Assert.False(Bridge.is(Bridge.box(0.5, System.Double, System.Double.format, System.Double.getHashCode), System.UInt16));
                Bridge.Test.NUnit.Assert.False(Bridge.is(Bridge.box(-1, System.Int32), System.UInt16));
                Bridge.Test.NUnit.Assert.False(Bridge.is(Bridge.box(65536, System.Int32), System.UInt16));
                Bridge.Test.NUnit.Assert.AreEqual("System.UInt16", Bridge.Reflection.getTypeFullName(System.UInt16));
                Bridge.Test.NUnit.Assert.False(Bridge.Reflection.isClass(System.UInt16));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IComparable$1(System.UInt16), System.UInt16));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IEquatable$1(System.UInt16), System.UInt16));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IFormattable, System.UInt16));
                var s = Bridge.box(0, System.UInt16);
                Bridge.Test.NUnit.Assert.True(Bridge.is(s, System.UInt16));
                Bridge.Test.NUnit.Assert.True(Bridge.is(s, System.IComparable$1(System.UInt16)));
                Bridge.Test.NUnit.Assert.True(Bridge.is(s, System.IEquatable$1(System.UInt16)));
                Bridge.Test.NUnit.Assert.True(Bridge.is(s, System.IFormattable));

                var interfaces = Bridge.Reflection.getInterfaces(System.UInt16);
                Bridge.Test.NUnit.Assert.AreEqual(4, interfaces.length);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IComparable$1(System.UInt16), Function));
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IEquatable$1(System.UInt16), Function));
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IFormattable, Function));
            },
            CastsWork: function () {
                var i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
                var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

                Bridge.Test.NUnit.Assert.AreStrictEqual(65535, (i1 & 65535), "-1 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, (i2 & 65535), "0 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(234, (i3 & 65535), "234 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(65535, (i4 & 65535), "65535 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, (i5 & 65535), "65536 unchecked");

                Bridge.Test.NUnit.Assert.AreStrictEqual(65535, Bridge.Int.clipu16(ni1), "nullable -1 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, Bridge.Int.clipu16(ni2), "nullable 0 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(234, Bridge.Int.clipu16(ni3), "nullable 234 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(65535, Bridge.Int.clipu16(ni4), "nullable 65535 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, Bridge.Int.clipu16(ni5), "nullable 65536 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(null, Bridge.Int.clipu16(ni6), "null unchecked");

                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var x = Bridge.Int.check(i1, System.UInt16);
                }, "-1 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, Bridge.Int.check(i2, System.UInt16), "0 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(234, Bridge.Int.check(i3, System.UInt16), "234 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(65535, Bridge.Int.check(i4, System.UInt16), "65535 checked");
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var x = Bridge.Int.check(i5, System.UInt16);
                }, "65536 checked");

                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var x = Bridge.Int.check(ni1, System.UInt16);
                }, "nullable -1 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, Bridge.Int.check(ni2, System.UInt16), "nullable 0 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(234, Bridge.Int.check(ni3, System.UInt16), "nullable 234 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(65535, Bridge.Int.check(ni4, System.UInt16), "nullable 65535 checked");
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var x = Bridge.Int.check(ni5, System.UInt16);
                }, "nullable 65536 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(null, Bridge.Int.check(ni6, System.UInt16), "null checked");
            },
            GetDefaultValue: function (T) {
                return Bridge.getDefaultValue(T);
            },
            DefaultValueIs0: function () {
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, this.GetDefaultValue(System.UInt16));
            },
            DefaultConstructorReturnsZero: function () {
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, Number());
            },
            CreatingInstanceReturnsZero: function () {
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, Bridge.createInstance(System.UInt16));
            },
            ConstantsWork: function () {
                Bridge.Test.NUnit.Assert.AreEqual(0, 0);
                Bridge.Test.NUnit.Assert.AreEqual(65535, 65535);
            },
            FormatWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", System.UInt16.format((291), "x"));
            },
            ToStringWithFormatWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", System.UInt16.format((291), "x"));
            },
            ToStringWithFormatAndProviderWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", System.UInt16.format((291), "x", System.Globalization.CultureInfo.invariantCulture));
            },
            IFormattableToStringWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", Bridge.format(291, "x", System.Globalization.CultureInfo.invariantCulture));
            },
            TryParseWorks_SPI_1592: function () {
                var numberResult = { };
                var result = System.UInt16.tryParse("23445", numberResult);
                Bridge.Test.NUnit.Assert.True(result);
                Bridge.Test.NUnit.Assert.AreEqual(23445, numberResult.v);

                result = System.UInt16.tryParse("", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);

                result = System.UInt16.tryParse(null, numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);

                result = System.UInt16.tryParse("notanumber", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);

                result = System.UInt16.tryParse("32768", numberResult);
                Bridge.Test.NUnit.Assert.True(result);
                Bridge.Test.NUnit.Assert.AreEqual(32768, numberResult.v);

                result = System.UInt16.tryParse("-1", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                // #1592
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);

                result = System.UInt16.tryParse("2.5", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);
            },
            ParseWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(23445, System.UInt16.parse("23445"));
                Bridge.Test.NUnit.Assert.Throws$2(System.FormatException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests.f1);
                Bridge.Test.NUnit.Assert.Throws$2(System.ArgumentNullException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests.f2);
                Bridge.Test.NUnit.Assert.Throws$2(System.FormatException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests.f3);
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests.f4);
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests.f5);
                Bridge.Test.NUnit.Assert.Throws$2(System.FormatException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests.f6);
            },
            ToStringWithoutRadixWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", (123).toString());
            },
            ToStringWithRadixWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", (123).toString(10));
                Bridge.Test.NUnit.Assert.AreEqual("123", (291).toString(16));
            },
            GetHashCodeWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(Bridge.getHashCode((0)), Bridge.getHashCode((0)));
                Bridge.Test.NUnit.Assert.AreEqual(Bridge.getHashCode((1)), Bridge.getHashCode((1)));
                Bridge.Test.NUnit.Assert.AreNotEqual(Bridge.getHashCode((1)), Bridge.getHashCode((0)));
            },
            EqualsWorks: function () {
                Bridge.Test.NUnit.Assert.True(System.UInt16.equals((0), Bridge.box(0, System.UInt16)));
                Bridge.Test.NUnit.Assert.False(System.UInt16.equals((1), Bridge.box(0, System.UInt16)));
                Bridge.Test.NUnit.Assert.False(System.UInt16.equals((0), Bridge.box(1, System.UInt16)));
                Bridge.Test.NUnit.Assert.True(System.UInt16.equals((1), Bridge.box(1, System.UInt16)));
            },
            IEquatableEqualsWorks: function () {
                Bridge.Test.NUnit.Assert.True((0) === 0);
                Bridge.Test.NUnit.Assert.False((1) === 0);
                Bridge.Test.NUnit.Assert.False((0) === 1);
                Bridge.Test.NUnit.Assert.True((1) === 1);

                Bridge.Test.NUnit.Assert.True(Bridge.equalsT(0, 0, System.UInt16));
                Bridge.Test.NUnit.Assert.False(Bridge.equalsT(1, 0, System.UInt16));
                Bridge.Test.NUnit.Assert.False(Bridge.equalsT(0, 1, System.UInt16));
                Bridge.Test.NUnit.Assert.True(Bridge.equalsT(1, 1, System.UInt16));
            },
            CompareToWorks: function () {
                Bridge.Test.NUnit.Assert.True(Bridge.compare((0), 0) === 0);
                Bridge.Test.NUnit.Assert.True(Bridge.compare((1), 0) > 0);
                Bridge.Test.NUnit.Assert.True(Bridge.compare((0), 1) < 0);
            },
            IComparableCompareToWorks: function () {
                Bridge.Test.NUnit.Assert.True(Bridge.compare(0, 0, false, System.UInt16) === 0);
                Bridge.Test.NUnit.Assert.True(Bridge.compare(1, 0, false, System.UInt16) > 0);
                Bridge.Test.NUnit.Assert.True(Bridge.compare(0, 1, false, System.UInt16) < 0);
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests, {
        f1: function () {
            System.UInt16.parse("");
        },
        f2: function () {
            System.UInt16.parse(null);
        },
        f3: function () {
            System.UInt16.parse("notanumber");
        },
        f4: function () {
            System.UInt16.parse("65536");
        },
        f5: function () {
            System.UInt16.parse("-1");
        },
        f6: function () {
            System.UInt16.parse("2.5");
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests", {
        methods: {
            TypePropertiesAreCorrect_SPI_1717: function () {
                Bridge.Test.NUnit.Assert.False(Bridge.is(Bridge.box(0, System.Int32), System.UInt32));
                Bridge.Test.NUnit.Assert.False(Bridge.is(Bridge.box(0.5, System.Double, System.Double.format, System.Double.getHashCode), System.UInt32));
                Bridge.Test.NUnit.Assert.False(Bridge.is(Bridge.box(-1, System.Int32), System.UInt32));
                Bridge.Test.NUnit.Assert.False(Bridge.is(System.Int64([0,1]), System.UInt32));
                Bridge.Test.NUnit.Assert.AreEqual("System.UInt32", Bridge.Reflection.getTypeFullName(System.UInt32));
                Bridge.Test.NUnit.Assert.False(Bridge.Reflection.isClass(System.UInt32));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IComparable$1(System.UInt32), System.UInt32));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IEquatable$1(System.UInt32), System.UInt32));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IFormattable, System.UInt32));
                var i = Bridge.box(0, System.UInt32);
                Bridge.Test.NUnit.Assert.True(Bridge.is(i, System.UInt32));
                Bridge.Test.NUnit.Assert.True(Bridge.is(i, System.IComparable$1(System.UInt32)));
                Bridge.Test.NUnit.Assert.True(Bridge.is(i, System.IEquatable$1(System.UInt32)));
                Bridge.Test.NUnit.Assert.True(Bridge.is(i, System.IFormattable));

                var interfaces = Bridge.Reflection.getInterfaces(System.UInt32);
                Bridge.Test.NUnit.Assert.AreEqual(4, interfaces.length);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IComparable$1(System.UInt32), Function));
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IEquatable$1(System.UInt32), Function));
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IFormattable, Function));
            },
            CastsWork: function () {
                var i1 = System.Int64(-1), i2 = System.Int64(0), i3 = System.Int64(234), i4 = System.Int64(4294967295), i5 = System.Int64([0,1]);
                var ni1 = System.Int64.lift(-1), ni2 = System.Int64(0), ni3 = System.Int64(234), ni4 = System.Int64(4294967295), ni5 = System.Int64([0,1]), ni6 = System.Int64.lift(null);

                Bridge.Test.NUnit.Assert.AreStrictEqual(4294967295, System.Int64.clipu32(i1), "-1 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, System.Int64.clipu32(i2), "0 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(234, System.Int64.clipu32(i3), "234 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(4294967295, System.Int64.clipu32(i4), "4294967295 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, System.Int64.clipu32(i5), "4294967296 unchecked");

                Bridge.Test.NUnit.Assert.AreStrictEqual(4294967295, System.Int64.clipu32(ni1), "nullable -1 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, System.Int64.clipu32(ni2), "nullable 0 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(234, System.Int64.clipu32(ni3), "nullable 234 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(4294967295, System.Int64.clipu32(ni4), "nullable 4294967295 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, System.Int64.clipu32(ni5), "nullable 4294967296 unchecked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(null, System.Int64.clipu32(ni6), "null unchecked");

                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var x = System.Int64.check(i1, System.UInt32);
                }, "-1 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, System.Int64.check(i2, System.UInt32), "0 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(234, System.Int64.check(i3, System.UInt32), "234 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(4294967295, System.Int64.check(i4, System.UInt32), "4294967295 checked");
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var x = System.Int64.check(i5, System.UInt32);
                }, "4294967296 checked");

                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var x = System.Int64.check(ni1, System.UInt32);
                }, "nullable -1 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, System.Int64.check(ni2, System.UInt32), "nullable 0 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(234, System.Int64.check(ni3, System.UInt32), "nullable 234 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(4294967295, System.Int64.check(ni4, System.UInt32), "nullable 4294967295 checked");
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var x = System.Int64.check(ni5, System.UInt32);
                }, "nullable 4294967296 checked");
                Bridge.Test.NUnit.Assert.AreStrictEqual(null, System.Int64.check(ni6, System.UInt32), "null checked");
            },
            GetDefaultValue: function (T) {
                return Bridge.getDefaultValue(T);
            },
            DefaultValueIs0: function () {
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, this.GetDefaultValue(System.UInt32));
            },
            DefaultConstructorReturnsZero: function () {
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, Number());
            },
            CreatingInstanceReturnsZero: function () {
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, Bridge.createInstance(System.UInt32));
            },
            ConstantsWork: function () {
                Bridge.Test.NUnit.Assert.AreEqual(0, 0);
                Bridge.Test.NUnit.Assert.AreEqual(4294967295, 4294967295);
            },
            FormatWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", System.UInt32.format((291), "x"));
            },
            ToStringWithFormatWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", System.UInt32.format((291), "x"));
            },
            ToStringWithFormatAndProviderWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", System.UInt32.format((291), "x", System.Globalization.CultureInfo.invariantCulture));
            },
            IFormattableToStringWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", Bridge.format(291, "x", System.Globalization.CultureInfo.invariantCulture));
            },
            TryParseWorks_SPI_1592: function () {
                var numberResult = { };
                var result = System.UInt32.tryParse("23445", numberResult);
                Bridge.Test.NUnit.Assert.True(result);
                Bridge.Test.NUnit.Assert.AreEqual(23445, numberResult.v);

                result = System.UInt32.tryParse("", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);

                result = System.UInt32.tryParse(null, numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);

                result = System.UInt32.tryParse("notanumber", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);

                result = System.UInt32.tryParse("-1", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                // #1592
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);

                result = System.UInt32.tryParse("2.5", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(0, numberResult.v);
            },
            ParseWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(23445, System.UInt32.parse("23445"));
                Bridge.Test.NUnit.Assert.Throws$2(System.FormatException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests.f1);
                Bridge.Test.NUnit.Assert.Throws$2(System.ArgumentNullException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests.f2);
                Bridge.Test.NUnit.Assert.Throws$2(System.FormatException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests.f3);
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests.f4);
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests.f5);
                Bridge.Test.NUnit.Assert.Throws$2(System.FormatException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests.f6);
            },
            ToStringWithoutRadixWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", (123).toString());
            },
            ToStringWithRadixWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", (123).toString(10));
                Bridge.Test.NUnit.Assert.AreEqual("123", (291).toString(16));
            },
            GetHashCodeWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(Bridge.getHashCode((0)), Bridge.getHashCode((0)));
                Bridge.Test.NUnit.Assert.AreEqual(Bridge.getHashCode((1)), Bridge.getHashCode((1)));
                Bridge.Test.NUnit.Assert.AreNotEqual(Bridge.getHashCode((1)), Bridge.getHashCode((0)));
            },
            EqualsWorks: function () {
                Bridge.Test.NUnit.Assert.True(System.UInt32.equals((0), Bridge.box(0, System.UInt32)));
                Bridge.Test.NUnit.Assert.False(System.UInt32.equals((1), Bridge.box(0, System.UInt32)));
                Bridge.Test.NUnit.Assert.False(System.UInt32.equals((0), Bridge.box(1, System.UInt32)));
                Bridge.Test.NUnit.Assert.True(System.UInt32.equals((1), Bridge.box(1, System.UInt32)));
            },
            IEquatableEqualsWorks: function () {
                Bridge.Test.NUnit.Assert.True((0) === 0);
                Bridge.Test.NUnit.Assert.False((1) === 0);
                Bridge.Test.NUnit.Assert.False((0) === 1);
                Bridge.Test.NUnit.Assert.True((1) === 1);

                Bridge.Test.NUnit.Assert.True(Bridge.equalsT(0, 0, System.UInt32));
                Bridge.Test.NUnit.Assert.False(Bridge.equalsT(1, 0, System.UInt32));
                Bridge.Test.NUnit.Assert.False(Bridge.equalsT(0, 1, System.UInt32));
                Bridge.Test.NUnit.Assert.True(Bridge.equalsT(1, 1, System.UInt32));
            },
            CompareToWorks: function () {
                Bridge.Test.NUnit.Assert.True(Bridge.compare((0), 0) === 0);
                Bridge.Test.NUnit.Assert.True(Bridge.compare((1), 0) > 0);
                Bridge.Test.NUnit.Assert.True(Bridge.compare((0), 1) < 0);
            },
            IComparableCompareToWorks: function () {
                Bridge.Test.NUnit.Assert.True(Bridge.compare(0, 0, false, System.UInt32) === 0);
                Bridge.Test.NUnit.Assert.True(Bridge.compare(1, 0, false, System.UInt32) > 0);
                Bridge.Test.NUnit.Assert.True(Bridge.compare(0, 1, false, System.UInt32) < 0);
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests, {
        f1: function () {
            System.UInt32.parse("");
        },
        f2: function () {
            System.UInt32.parse(null);
        },
        f3: function () {
            System.UInt32.parse("notanumber");
        },
        f4: function () {
            System.UInt32.parse("4294967296");
        },
        f5: function () {
            System.UInt32.parse("-1");
        },
        f6: function () {
            System.UInt32.parse("2.5");
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests", {
        methods: {
            TypePropertiesAreCorrect_SPI_1717: function () {
                Bridge.Test.NUnit.Assert.True(Bridge.is(System.UInt64(0), System.UInt64));
                Bridge.Test.NUnit.Assert.False(Bridge.is(Bridge.box(0.5, System.Double, System.Double.format, System.Double.getHashCode), System.UInt64));
                Bridge.Test.NUnit.Assert.AreEqual("System.UInt64", Bridge.Reflection.getTypeFullName(System.UInt64));
                Bridge.Test.NUnit.Assert.False(Bridge.Reflection.isClass(System.UInt64));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IComparable$1(System.UInt64), System.UInt64));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IEquatable$1(System.UInt64), System.UInt64));
                Bridge.Test.NUnit.Assert.True(Bridge.Reflection.isAssignableFrom(System.IFormattable, System.UInt64));
                var l = System.UInt64(0);
                Bridge.Test.NUnit.Assert.True(Bridge.is(l, System.UInt64));
                Bridge.Test.NUnit.Assert.True(Bridge.is(l, System.IComparable$1(System.UInt64)));
                Bridge.Test.NUnit.Assert.True(Bridge.is(l, System.IEquatable$1(System.UInt64)));
                Bridge.Test.NUnit.Assert.True(Bridge.is(l, System.IFormattable));

                var interfaces = Bridge.Reflection.getInterfaces(System.UInt64);
                Bridge.Test.NUnit.Assert.AreEqual(4, interfaces.length);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IComparable$1(System.UInt64), Function));
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IEquatable$1(System.UInt64), Function));
                Bridge.Test.NUnit.Assert.True(System.Array.contains(interfaces, System.IFormattable, Function));
            },
            CastsWork: function () {
                var i1 = System.Int64(-1), i2 = System.Int64(0), i3 = System.Int64(234), i4 = System.Int64([-808,2147483647]);
                var ni1 = System.Int64.lift(-1), ni2 = System.Int64(0), ni3 = System.Int64(234), ni4 = System.Int64([-808,2147483647]), ni6 = System.Int64.lift(null);

                Bridge.Test.NUnit.Assert.True(System.Int64.toNumber(System.Int64.clipu64(i1)) > 1E+18, "-1 unchecked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), System.Int64.clipu64(i2), "0 unchecked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(234), System.Int64.clipu64(i3), "234 unchecked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64([-808,2147483647]), System.Int64.clipu64(i4), "9223372036854775000 unchecked");

                Bridge.Test.NUnit.Assert.True(System.Nullable.gt(System.Int64.clipu64(ni1), 1E+18), "nullable -1 unchecked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), System.Int64.clipu64(ni2), "nullable 0 unchecked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(234), System.Int64.clipu64(ni3), "nullable 234 unchecked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64([-808,2147483647]), System.Int64.clipu64(ni4), "nullable 9223372036854775000 unchecked");
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Int64.clipu64(ni6), "null unchecked");

                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var x = System.Int64.check(i1, System.UInt64);
                }, "-1 checked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), System.Int64.check(i2, System.UInt64), "0 checked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(234), System.Int64.check(i3, System.UInt64), "234 checked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64([-808,2147483647]), System.Int64.check(i4, System.UInt64), "9223372036854775000 checked");

                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                    var x = System.Int64.check(ni1, System.UInt64);
                }, "nullable -1 checked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), System.Int64.check(ni2, System.UInt64), "nullable 0 checked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(234), System.Int64.check(ni3, System.UInt64), "nullable 234 checked");
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64([-808,2147483647]), System.Int64.check(ni4, System.UInt64), "nullable 9223372036854775000 checked");
                Bridge.Test.NUnit.Assert.AreEqual(null, System.Int64.check(ni6, System.UInt64), "null checked");
            },
            GetDefaultValue: function (T) {
                return Bridge.getDefaultValue(T);
            },
            DefaultValueIs0: function () {
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), this.GetDefaultValue(System.UInt64));
            },
            DefaultConstructorReturnsZero: function () {
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), new System.UInt64());
            },
            CreatingInstanceReturnsZero: function () {
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), Bridge.createInstance(System.UInt64));
            },
            ConstantsWork: function () {
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), System.UInt64.MinValue);
            },
            FormatWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", (System.UInt64(291)).format("x"));
            },
            ToStringWithFormatWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", (System.UInt64(291)).toString("x"));
            },
            ToStringWithFormatAndProviderWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", (System.UInt64(291)).format("x", System.Globalization.CultureInfo.invariantCulture));
            },
            IFormattableToStringWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", Bridge.format(System.UInt64(291), "x", System.Globalization.CultureInfo.invariantCulture));
            },
            CastingOfLargeValuesToUInt64Works_SPI_1591: function () {
                var d1 = 5000000000.5, d2 = -d1;
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64([705032704,1]), Bridge.Int.clipu64(d1), "Positive");
                // #1591
                Bridge.Test.NUnit.Assert.True(Bridge.Int.clipu64(d2).gt(System.UInt64(2147483647)), "Negative");
            },
            DivisionOfLargeUInt64Works: function () {
                var v1 = System.UInt64(System.Int64([-1539607552,11])), v2 = System.UInt64(3);
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64([-513202518,3]), v1.div(v2));
            },
            TryParseWorks: function () {
                var numberResult = { };
                var result = System.UInt64.tryParse("23445", numberResult);
                Bridge.Test.NUnit.Assert.True(result);
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(23445), numberResult.v);

                result = System.UInt64.tryParse("", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), numberResult.v);

                result = System.UInt64.tryParse(null, numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), numberResult.v);

                result = System.UInt64.tryParse("notanumber", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), numberResult.v);

                result = System.UInt64.tryParse("-1", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), numberResult.v);

                result = System.UInt64.tryParse("2.5", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), numberResult.v);

                result = System.UInt64.tryParse("100000000000000000000", numberResult);
                Bridge.Test.NUnit.Assert.False(result);
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(0), numberResult.v);
            },
            ParseWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(System.UInt64(23445), System.UInt64.parse("23445"));
                Bridge.Test.NUnit.Assert.Throws$2(System.FormatException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests.f1);
                Bridge.Test.NUnit.Assert.Throws$2(System.ArgumentNullException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests.f2);
                Bridge.Test.NUnit.Assert.Throws$2(System.FormatException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests.f3);
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests.f4);
                Bridge.Test.NUnit.Assert.Throws$2(System.FormatException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests.f5);
                Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, $asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests.f6);
            },
            ToStringWithoutRadixWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", (System.UInt64(123)).toString());
            },
            ToStringWithRadixWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("123", (System.UInt64(123)).toString(10));
                Bridge.Test.NUnit.Assert.AreEqual("123", (System.UInt64(291)).toString(16));
            },
            GetHashCodeWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(Bridge.getHashCode((System.UInt64(0))), Bridge.getHashCode((System.UInt64(0))));
                Bridge.Test.NUnit.Assert.AreEqual(Bridge.getHashCode((System.UInt64(1))), Bridge.getHashCode((System.UInt64(1))));
                Bridge.Test.NUnit.Assert.AreNotEqual(Bridge.getHashCode((System.UInt64(1))), Bridge.getHashCode((System.UInt64(0))));
            },
            EqualsWorks: function () {
                Bridge.Test.NUnit.Assert.True(Bridge.equals((System.UInt64(0)), System.UInt64(0)));
                Bridge.Test.NUnit.Assert.False(Bridge.equals((System.UInt64(1)), System.UInt64(0)));
                Bridge.Test.NUnit.Assert.False(Bridge.equals((System.UInt64(0)), System.UInt64(1)));
                Bridge.Test.NUnit.Assert.True(Bridge.equals((System.UInt64(1)), System.UInt64(1)));
            },
            IEquatableEqualsWorks: function () {
                Bridge.Test.NUnit.Assert.True((System.UInt64(0)).equalsT(System.UInt64(0)));
                Bridge.Test.NUnit.Assert.False((System.UInt64(1)).equalsT(System.UInt64(0)));
                Bridge.Test.NUnit.Assert.False((System.UInt64(0)).equalsT(System.UInt64(1)));
                Bridge.Test.NUnit.Assert.True((System.UInt64(1)).equalsT(System.UInt64(1)));

                Bridge.Test.NUnit.Assert.True(Bridge.equalsT(System.UInt64(0), System.UInt64(0), System.UInt64));
                Bridge.Test.NUnit.Assert.False(Bridge.equalsT(System.UInt64(1), System.UInt64(0), System.UInt64));
                Bridge.Test.NUnit.Assert.False(Bridge.equalsT(System.UInt64(0), System.UInt64(1), System.UInt64));
                Bridge.Test.NUnit.Assert.True(Bridge.equalsT(System.UInt64(1), System.UInt64(1), System.UInt64));
            },
            CompareToWorks: function () {
                Bridge.Test.NUnit.Assert.True((System.UInt64(0)).compareTo(System.UInt64(0)) === 0);
                Bridge.Test.NUnit.Assert.True((System.UInt64(1)).compareTo(System.UInt64(0)) > 0);
                Bridge.Test.NUnit.Assert.True((System.UInt64(0)).compareTo(System.UInt64(1)) < 0);
            },
            IComparableCompareToWorks: function () {
                Bridge.Test.NUnit.Assert.True(Bridge.compare(System.UInt64(0), System.UInt64(0), false, System.UInt64) === 0);
                Bridge.Test.NUnit.Assert.True(Bridge.compare(System.UInt64(1), System.UInt64(0), false, System.UInt64) > 0);
                Bridge.Test.NUnit.Assert.True(Bridge.compare(System.UInt64(0), System.UInt64(1), false, System.UInt64) < 0);
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests, {
        f1: function () {
            System.UInt64.parse("");
        },
        f2: function () {
            System.UInt64.parse(null);
        },
        f3: function () {
            System.UInt64.parse("notanumber");
        },
        f4: function () {
            System.UInt64.parse("-1");
        },
        f5: function () {
            System.UInt64.parse("2.5");
        },
        f6: function () {
            System.UInt64.parse("100000000000000000000");
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.TestHelper", {
        statics: {
            methods: {
                Safe: function (a) {
                    try {
                        a();
                    }
                    catch ($e1) {
                        $e1 = System.Exception.create($e1);
                    }
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests", {
        methods: {
            TypePropertiesAreCorrect: function () {
                var re = new RegExp("");
                Bridge.Test.NUnit.Assert.AreEqual("RegExp", Bridge.Reflection.getTypeFullName(RegExp));
                //Assert.AreEqual(typeof(Regex).IsClass, true);
                Bridge.Test.NUnit.Assert.True(Bridge.hasValue(re));
            },
            StringOnlyConstructorWorks: function () {
                var re = new RegExp("test123");
                Bridge.Test.NUnit.Assert.AreEqual("test123", re.source);
                Bridge.Test.NUnit.Assert.False(re.global);
            },
            ConstructorWithFlagsWorks: function () {
                var re = new RegExp("test123", "g");
                Bridge.Test.NUnit.Assert.AreEqual("test123", re.source);
                Bridge.Test.NUnit.Assert.True(re.global);
            },
            GlobalFlagWorks: function () {
                Bridge.Test.NUnit.Assert.False(new RegExp("x", "").global);
                Bridge.Test.NUnit.Assert.True(new RegExp("x", "g").global);
            },
            IgnoreCaseFlagWorks: function () {
                Bridge.Test.NUnit.Assert.False(new RegExp("x", "").ignoreCase);
                Bridge.Test.NUnit.Assert.True(new RegExp("x", "i").ignoreCase);
            },
            MultilineFlagWorks: function () {
                Bridge.Test.NUnit.Assert.False(new RegExp("x", "").multiline);
                Bridge.Test.NUnit.Assert.True(new RegExp("x", "m").multiline);
            },
            PatternPropertyWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("test123", new RegExp("test123", "").source);
            },
            SourcePropertyWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("test123", new RegExp("test123", "").source);
            },
            ExecWorks: function () {
                var re = new RegExp("a|b", "g");
                var m = re.exec("xaybz");
                //Assert.AreEqual(m.Index, 1);
                Bridge.Test.NUnit.Assert.AreEqual(1, m.length);
                Bridge.Test.NUnit.Assert.AreEqual("a", m[System.Array.index(0, m)]);
            },
            LastIndexWorks: function () {
                var re = new RegExp("a|b", "g");
                re.exec("xaybz");
                Bridge.Test.NUnit.Assert.AreEqual(2, re.lastIndex);
            },
            TestWorks: function () {
                Bridge.Test.NUnit.Assert.True(new RegExp("a|b").test("xaybz"));
                Bridge.Test.NUnit.Assert.False(new RegExp("c").test("xaybz"));
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Threading.AsyncTests", {
        methods: {
            AsyncVoid: function () {
                var done = Bridge.Test.NUnit.Assert.Async();

                var state = 0;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                var someMethod = Bridge.fn.bind(this, function () {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        state = 1;
                                        $task1 = task;
                                        $step = 1;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 1: {
                                        $task1.getAwaitedResult();
                                        state = 2;
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        }, arguments);

                    $asyncBody();
                });

                someMethod();

                Bridge.Test.NUnit.Assert.AreEqual(1, state, "Async method should start running after being invoked");

                task.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.AreEqual(2, state, "Async method should finish after the task is finished");
                    done();
                });

                Bridge.Test.NUnit.Assert.AreEqual(1, state, "Async method should not continue past point 1 until task is finished");

                tcs.setResult(0);
            },
            AsyncTask: function () {
                var done = Bridge.Test.NUnit.Assert.Async();

                var state = 0;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                var someMethod = Bridge.fn.bind(this, function () {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                        $returnValue, 
                        $async_e, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([0,1], $step);
                                    switch ($step) {
                                        case 0: {
                                            state = 1;
                                            $task1 = task;
                                            $step = 1;
                                            $task1.continueWith($asyncBody);
                                            return;
                                        }
                                        case 1: {
                                            $task1.getAwaitedResult();
                                            state = 2;
                                            $tcs.setResult(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.setResult(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                $tcs.setException($async_e);
                            }
                        }, arguments);

                    $asyncBody();
                    return $tcs.task;
                });

                var asyncTask = someMethod();

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, asyncTask.status, "asyncTask should be running immediately");
                Bridge.Test.NUnit.Assert.AreEqual(1, state, "Async method should start running after being invoked");

                asyncTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, asyncTask.status, "asyncTask should run to completion");
                    Bridge.Test.NUnit.Assert.True(asyncTask.exception == null, "asyncTask should not throw an exception");
                    Bridge.Test.NUnit.Assert.AreEqual(2, state, "Async method should finish after the task is finished");

                    done();
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, asyncTask.status, "asyncTask should be running before awaited task is finished");
                Bridge.Test.NUnit.Assert.AreEqual(1, state, "Async method should not continue past point 1 until task is finished");

                tcs.setResult(0);
            },
            AsyncTaskBodyThrowsException: function () {
                var done = Bridge.Test.NUnit.Assert.Async();

                var state = 0;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;
                var ex = new System.Exception("Some text");

                var someMethod = Bridge.fn.bind(this, function () {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                        $returnValue, 
                        $async_e, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([0,1], $step);
                                    switch ($step) {
                                        case 0: {
                                            state = 1;
                                            $task1 = task;
                                            $step = 1;
                                            $task1.continueWith($asyncBody);
                                            return;
                                        }
                                        case 1: {
                                            $task1.getAwaitedResult();
                                            state = 2;
                                            throw ex;
                                            $tcs.setResult(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.setResult(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                $tcs.setException($async_e);
                            }
                        }, arguments);

                    $asyncBody();
                    return $tcs.task;
                });

                var asyncTask = someMethod();

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, asyncTask.status, "asyncTask should be running immediately");
                Bridge.Test.NUnit.Assert.AreEqual(1, state, "Async method should start running after being invoked");

                asyncTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, asyncTask.status, "asyncTask should fault");
                    Bridge.Test.NUnit.Assert.True(asyncTask.exception != null, "asyncTask should have an exception");
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(asyncTask.exception.innerExceptions.get(0), ex), "asyncTask should throw the correct exception");
                    Bridge.Test.NUnit.Assert.AreEqual(2, state, "Async method should finish after the task is finished");

                    done();
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, asyncTask.status, "asyncTask should be running before awaited task is finished");
                Bridge.Test.NUnit.Assert.AreEqual(1, state, "Async method should not continue past point 1 until task is finished");

                tcs.setResult(0);
            },
            AwaitTaskThatFaults: function () {
                var done = Bridge.Test.NUnit.Assert.Async();

                var state = 0;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;
                var ex = new System.Exception("Some text");

                var someMethod = Bridge.fn.bind(this, function () {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                        $returnValue, 
                        $async_e, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([0,1], $step);
                                    switch ($step) {
                                        case 0: {
                                            state = 1;
                                            $task1 = task;
                                            $step = 1;
                                            $task1.continueWith($asyncBody);
                                            return;
                                        }
                                        case 1: {
                                            $task1.getAwaitedResult();
                                            state = 2;
                                            $tcs.setResult(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.setResult(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                $tcs.setException($async_e);
                            }
                        }, arguments);

                    $asyncBody();
                    return $tcs.task;
                });

                var asyncTask = someMethod();

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, asyncTask.status, "asyncTask should be running immediately");
                Bridge.Test.NUnit.Assert.AreEqual(1, state, "Async method should start running after being invoked");

                asyncTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, asyncTask.status, "asyncTask should fault");
                    Bridge.Test.NUnit.Assert.True(asyncTask.exception != null, "asyncTask should have an exception");
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(asyncTask.exception.innerExceptions.get(0), ex), "asyncTask should throw the correct exception");
                    Bridge.Test.NUnit.Assert.AreEqual(1, state, "Async method should not have reach anything after the faulting await");

                    done();
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, asyncTask.status, "asyncTask should be running before awaited task is finished");
                Bridge.Test.NUnit.Assert.AreEqual(1, state, "Async method should not continue past point 1 until task is finished");

                tcs.setException(ex);
            },
            AggregateExceptionsAreUnwrappedWhenAwaitingTask: function () {
                var done = Bridge.Test.NUnit.Assert.Async();

                var state = 0;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                var ex = new System.Exception("Some text");
                tcs.setException(ex);

                var someMethod = Bridge.fn.bind(this, function () {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                        $returnValue, 
                        ex2, 
                        $async_e, 
                        $async_e1, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([1,2,3,4], $step);
                                    switch ($step) {

                                        case 1: {
                                            $task1 = task;
                                            $step = 2;
                                            $task1.continueWith($asyncBody);
                                            return;
                                        }
                                        case 2: {
                                            $task1.getAwaitedResult();
                                            Bridge.Test.NUnit.Assert.Fail("Await should have thrown");
                                            $step = 4;
                                            continue;
                                        }
                                        case 3: {
                                            Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(ex, ex2), "The exception should be correct");
                                            $async_e = null;
                                            $step = 4;
                                            continue;
                                        }
                                        case 4: {
                                            state = 1;
                                            $tcs.setResult(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.setResult(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                if ( $step >= 1 && $step <= 2 ) {
                                    ex2 = $async_e;
                                    $step = 3;
                                    $asyncBody();
                                    return;
                                }
                                $tcs.setException($async_e);
                            }
                        }, arguments);

                    $asyncBody();
                    return $tcs.task;
                });

                someMethod();

                task.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.AreEqual(1, state, "Should have reached the termination state");

                    done();
                });
            },
            AsyncTaskThatReturnsValue: function () {
                var done = Bridge.Test.NUnit.Assert.Async();

                var state = 0;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                var someMethod = Bridge.fn.bind(this, function () {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                        $returnValue, 
                        $async_e, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([0,1], $step);
                                    switch ($step) {
                                        case 0: {
                                            state = 1;
                                            $task1 = task;
                                            $step = 1;
                                            $task1.continueWith($asyncBody);
                                            return;
                                        }
                                        case 1: {
                                            $task1.getAwaitedResult();
                                            state = 2;
                                            $tcs.setResult(42);
                                            return;
                                        }
                                        default: {
                                            $tcs.setResult(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                $tcs.setException($async_e);
                            }
                        }, arguments);

                    $asyncBody();
                    return $tcs.task;
                });

                var asyncTask = someMethod();

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, asyncTask.status, "asyncTask should be running immediately");
                Bridge.Test.NUnit.Assert.AreEqual(1, state, "Async method should start running after being invoked");

                asyncTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, asyncTask.status, "asyncTask should run to completion");
                    Bridge.Test.NUnit.Assert.True(asyncTask.exception == null, "asyncTask should not throw an exception");
                    Bridge.Test.NUnit.Assert.AreEqual(2, state, "Async method should finish after the task is finished");
                    Bridge.Test.NUnit.Assert.AreEqual(42, asyncTask.getResult(), "Result should be correct");

                    done();
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, asyncTask.status, "asyncTask should be running before awaited task is finished");
                Bridge.Test.NUnit.Assert.AreEqual(1, state, "Async method should not continue past point 1 until task is finished");

                tcs.setResult(0);
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Threading.CancellationTokenTests", {
        methods: {
            TypePropertiesForCancellationTokenSourceAreCorrect: function () {
                Bridge.Test.NUnit.Assert.AreEqual("System.Threading.CancellationTokenSource", Bridge.Reflection.getTypeFullName(System.Threading.CancellationTokenSource), "FullName");
                var cts = new System.Threading.CancellationTokenSource();
                Bridge.Test.NUnit.Assert.True(Bridge.is(cts, System.Threading.CancellationTokenSource));
                Bridge.Test.NUnit.Assert.True(Bridge.is(cts, System.IDisposable));
            },
            TypePropertiesForCancellationTokenAreCorrect: function () {
                Bridge.Test.NUnit.Assert.AreEqual("System.Threading.CancellationToken", Bridge.Reflection.getTypeFullName(System.Threading.CancellationToken), "FullName");

                Bridge.Test.NUnit.Assert.True(Bridge.hasValue(new System.Threading.CancellationToken()));
                Bridge.Test.NUnit.Assert.True(Bridge.hasValue(System.Threading.CancellationToken.none));
                Bridge.Test.NUnit.Assert.True(Bridge.hasValue(new System.Threading.CancellationTokenSource().token));
            },
            TypePropertiesForCancellationTokenRegistrationAreCorrect: function () {
                Bridge.Test.NUnit.Assert.AreEqual("System.Threading.CancellationTokenRegistration", Bridge.Reflection.getTypeFullName(System.Threading.CancellationTokenRegistration), "FullName");

                var ctr = new System.Threading.CancellationTokenRegistration();
                Bridge.Test.NUnit.Assert.True(Bridge.is(ctr, System.Threading.CancellationTokenRegistration), "CancellationTokenRegistration");
                Bridge.Test.NUnit.Assert.True(Bridge.is(ctr, System.IDisposable), "IDisposable");
                Bridge.Test.NUnit.Assert.True(Bridge.is(ctr, System.IEquatable$1(System.Threading.CancellationTokenRegistration)), "IEquatable<CancellationTokenRegistration>");
            },
            CancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe: function () {
                var ct = new System.Threading.CancellationToken();
                Bridge.Test.NUnit.Assert.False(ct.getCanBeCanceled(), "CanBeCanceled");
                Bridge.Test.NUnit.Assert.False(ct.getIsCancellationRequested(), "IsCancellationRequested");
                ct.throwIfCancellationRequested();
            },
            CancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe: function () {
                var ct = new System.Threading.CancellationToken(false);
                Bridge.Test.NUnit.Assert.False(ct.getCanBeCanceled(), "CanBeCanceled");
                Bridge.Test.NUnit.Assert.False(ct.getIsCancellationRequested(), "IsCancellationRequested");
                ct.throwIfCancellationRequested();
            },
            CancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled: function () {
                var ct = new System.Threading.CancellationToken(true);
                Bridge.Test.NUnit.Assert.True(ct.getCanBeCanceled(), "CanBeCanceled");
                Bridge.Test.NUnit.Assert.True(ct.getIsCancellationRequested(), "IsCancellationRequested");
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    ct.throwIfCancellationRequested();
                });
            },
            CancellationTokenNoneIsNotCancelledAndCannotBe: function () {
                Bridge.Test.NUnit.Assert.False(System.Threading.CancellationToken.none.getCanBeCanceled(), "CanBeCanceled");
                Bridge.Test.NUnit.Assert.False(System.Threading.CancellationToken.none.getIsCancellationRequested(), "IsCancellationRequested");
                System.Threading.CancellationToken.none.throwIfCancellationRequested();
            },
            CreatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled: function () {
                var ct = Bridge.getDefaultValue(System.Threading.CancellationToken);
                Bridge.Test.NUnit.Assert.False(ct.getCanBeCanceled(), "CanBeCanceled");
                Bridge.Test.NUnit.Assert.False(ct.getIsCancellationRequested(), "IsCancellationRequested");
                ct.throwIfCancellationRequested();
            },
            ActivatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled: function () {
                var ct = Bridge.createInstance(System.Threading.CancellationToken);
                Bridge.Test.NUnit.Assert.False(ct.getCanBeCanceled(), "CanBeCanceled");
                Bridge.Test.NUnit.Assert.False(ct.getIsCancellationRequested(), "IsCancellationRequested");
                ct.throwIfCancellationRequested();
            },
            CanBeCanceledIsTrueForTokenCreatedForCancellationTokenSource: function () {
                var cts = new System.Threading.CancellationTokenSource();
                Bridge.Test.NUnit.Assert.True(cts.token.getCanBeCanceled(), "cts.Token");
            },
            IsCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod: function () {
                var cts = new System.Threading.CancellationTokenSource();
                Bridge.Test.NUnit.Assert.False(cts.isCancellationRequested, "cts.IsCancellationRequested false");
                Bridge.Test.NUnit.Assert.False(cts.token.getIsCancellationRequested(), "cts.Token.IsCancellationRequested false");
                cts.cancel();
                Bridge.Test.NUnit.Assert.True(cts.isCancellationRequested, "cts.IsCancellationRequested true");
                Bridge.Test.NUnit.Assert.True(cts.token.getIsCancellationRequested(), "cts.Token.IsCancellationRequested true");
            },
            ThrowIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled: function () {
                var cts = new System.Threading.CancellationTokenSource();
                cts.token.throwIfCancellationRequested();
                cts.cancel();
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    cts.token.throwIfCancellationRequested();
                }, "cts.Token.ThrowIfCancellationRequested");
            },
            CancelWithoutArgumentsWorks: function () {
                var ex1 = new System.Exception();
                var ex2 = new System.Exception();
                var cts = new System.Threading.CancellationTokenSource();
                var calledHandlers = new (System.Collections.Generic.List$1(System.Int32))();
                cts.token.register(function () {
                    calledHandlers.add(0);
                });
                cts.token.register(function () {
                    calledHandlers.add(1);
                    throw ex1;
                });
                cts.token.register(function () {
                    calledHandlers.add(2);
                });
                cts.token.register(function () {
                    calledHandlers.add(3);
                    throw ex2;
                });
                cts.token.register(function () {
                    calledHandlers.add(4);
                });

                try {
                    cts.cancel();
                    Bridge.Test.NUnit.Assert.Fail("Should have thrown");
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    var ex;
                    if (Bridge.is($e1, System.AggregateException)) {
                        ex = $e1;
                        Bridge.Test.NUnit.Assert.AreEqual(2, ex.innerExceptions.Count, "count");
                        Bridge.Test.NUnit.Assert.True(ex.innerExceptions.contains(ex1), "ex1");
                        Bridge.Test.NUnit.Assert.True(ex.innerExceptions.contains(ex2), "ex2");
                    } else {
                        throw $e1;
                    }
                }

                Bridge.Test.NUnit.Assert.True(calledHandlers.contains(0) && calledHandlers.contains(1) && calledHandlers.contains(2) && calledHandlers.contains(3) && calledHandlers.contains(4));
            },
            CancelWorksWhenThrowOnFirstExceptionIsFalse: function () {
                var ex1 = new System.Exception();
                var ex2 = new System.Exception();
                var cts = new System.Threading.CancellationTokenSource();
                var calledHandlers = new (System.Collections.Generic.List$1(System.Int32))();
                cts.token.register(function () {
                    calledHandlers.add(0);
                });
                cts.token.register(function () {
                    calledHandlers.add(1);
                    throw ex1;
                });
                cts.token.register(function () {
                    calledHandlers.add(2);
                });
                cts.token.register(function () {
                    calledHandlers.add(3);
                    throw ex2;
                });
                cts.token.register(function () {
                    calledHandlers.add(4);
                });

                try {
                    cts.cancel(false);
                    Bridge.Test.NUnit.Assert.Fail("Should have thrown");
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    var ex;
                    if (Bridge.is($e1, System.AggregateException)) {
                        ex = $e1;
                        Bridge.Test.NUnit.Assert.AreEqual(2, ex.innerExceptions.Count, "ex count");
                        Bridge.Test.NUnit.Assert.True(ex.innerExceptions.contains(ex1), "ex1");
                        Bridge.Test.NUnit.Assert.True(ex.innerExceptions.contains(ex2), "ex2");
                    } else {
                        throw $e1;
                    }
                }

                Bridge.Test.NUnit.Assert.AreEqual(5, calledHandlers.Count, "called handler count");
                Bridge.Test.NUnit.Assert.True(calledHandlers.contains(0) && calledHandlers.contains(1) && calledHandlers.contains(2) && calledHandlers.contains(3) && calledHandlers.contains(4));
            },
            CancelWorksWhenThrowOnFirstExceptionIsTrue: function () {
                var ex1 = new System.Exception();
                var ex2 = new System.Exception();
                var cts = new System.Threading.CancellationTokenSource();
                var calledHandlers = new (System.Collections.Generic.List$1(System.Int32))();
                cts.token.register(function () {
                    calledHandlers.add(0);
                });
                cts.token.register(function () {
                    calledHandlers.add(1);
                    throw ex1;
                });
                cts.token.register(function () {
                    calledHandlers.add(2);
                });
                cts.token.register(function () {
                    calledHandlers.add(3);
                    throw ex2;
                });
                cts.token.register(function () {
                    calledHandlers.add(4);
                });

                try {
                    cts.cancel(true);
                    Bridge.Test.NUnit.Assert.Fail("Should have thrown");
                }
                catch (ex) {
                    ex = System.Exception.create(ex);
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(ex, ex1), "ex");
                }

                Bridge.Test.NUnit.Assert.AreEqual(2, calledHandlers.Count, "called handler count");
                Bridge.Test.NUnit.Assert.True(calledHandlers.contains(0) && calledHandlers.contains(1));
            },
            RegisterOnACancelledSourceWithoutContextInvokesTheCallback: function () {
                var cts = new System.Threading.CancellationTokenSource();
                cts.cancel();
                var state = 0;
                cts.token.register(function () {
                    state = 1;
                });
                Bridge.Test.NUnit.Assert.AreEqual(1, state);
            },
            RegisterWithArgumentOnACancelledSourceInvokesTheCallback: function () {
                var cts = new System.Threading.CancellationTokenSource();
                var context = {  };
                cts.cancel();
                var state = 0;
                cts.token.register(function (c) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(context, c), "context");
                    state = 1;
                }, context);
                Bridge.Test.NUnit.Assert.AreEqual(1, state);
            },
            RegisterOnACancelledSourceWithoutContextRethrowsAThrownException: function () {
                var ex1 = new System.Exception();
                var cts = new System.Threading.CancellationTokenSource();
                cts.cancel();
                try {
                    cts.token.register(function () {
                        throw ex1;
                    });
                    Bridge.Test.NUnit.Assert.Fail("Should have thrown");
                }
                catch (ex) {
                    ex = System.Exception.create(ex);
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(ex, ex1), "Exception");
                }
            },
            RegisterOnACancelledSourceWithContextRethrowsAThrownException: function () {
                var ex1 = new System.Exception();
                var context = {  };
                var cts = new System.Threading.CancellationTokenSource();
                cts.cancel();
                try {
                    cts.token.register(function (c) {
                        Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(context, c), "context");
                        throw ex1;
                    }, context);
                    Bridge.Test.NUnit.Assert.Fail("Should have thrown");
                }
                catch (ex) {
                    ex = System.Exception.create(ex);
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(ex, ex1), "Exception");
                }
            },
            RegisterOverloadsWithUseSynchronizationContextWork: function () {
                var cts = new System.Threading.CancellationTokenSource();
                var context = {  };
                cts.cancel();
                var numCalled = 0;
                cts.token.register(function (c) {
                    Bridge.identity(numCalled, (numCalled = (numCalled + 1) | 0));
                }, Bridge.box(true, System.Boolean, System.Boolean.toString));
                cts.token.register(function (c) {
                    Bridge.identity(numCalled, (numCalled = (numCalled + 1) | 0));
                }, Bridge.box(false, System.Boolean, System.Boolean.toString));
                cts.token.register(function (c) {
                        Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(context, c), "context");
                        numCalled = (numCalled + 1) | 0;
                    }, context);
                cts.token.register(function (c) {
                        Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(context, c), "context");
                        numCalled = (numCalled + 1) | 0;
                    }, context);
                Bridge.Test.NUnit.Assert.AreEqual(4, numCalled);
            },
            CancellationTokenSourceCanBeDisposed: function () {
                var cts = new System.Threading.CancellationTokenSource();
                cts.dispose();

                Bridge.Test.NUnit.Assert.True(true);
            },
            RegisterOnCancellationTokenCreatedNonCancelledDoesNothing: function () {
                var ct = new System.Threading.CancellationToken(false);

                var state = 0;
                ct.register(function () {
                    state = 1;
                });

                Bridge.Test.NUnit.Assert.AreEqual(0, state);
            },
            RegisterOnCancellationTokenCreatedCancelledInvokesTheActionImmediately: function () {
                var ct = new System.Threading.CancellationToken(true);

                var state = 0;
                var context = {  };
                ct.register(function () {
                    state = 1;
                });
                Bridge.Test.NUnit.Assert.AreEqual(1, state, "state 1");
                ct.register(function (c) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(context, c), "context");
                    state = 2;
                }, context);
                Bridge.Test.NUnit.Assert.AreEqual(2, state, "state 2");
            },
            DuplicateCancelDoesNotCauseCallbacksToBeCalledTwice: function () {
                var cts = new System.Threading.CancellationTokenSource();
                var calls = 0;
                cts.token.register(function () {
                    calls = 1;
                });
                cts.cancel();
                cts.cancel();

                Bridge.Test.NUnit.Assert.AreEqual(1, calls);
            },
            RegistrationsCanBeCompared: function () {
                var cts = new System.Threading.CancellationTokenSource();
                var ctr1 = cts.token.register($asm.$.Bridge.ClientTest.Batch4.Threading.CancellationTokenTests.f1);
                var ctr2 = cts.token.register($asm.$.Bridge.ClientTest.Batch4.Threading.CancellationTokenTests.f1);

                Bridge.Test.NUnit.Assert.True(ctr1.equalsT(ctr1), "#1");
                Bridge.Test.NUnit.Assert.False(ctr1.equalsT(ctr2), "#2");
                Bridge.Test.NUnit.Assert.True(Bridge.equals(ctr1, ctr1), "#3");
                Bridge.Test.NUnit.Assert.False(Bridge.equals(ctr1, ctr2), "#4");

                Bridge.Test.NUnit.Assert.True(Bridge.equals(ctr1, ctr1), "#5");
                Bridge.Test.NUnit.Assert.False(Bridge.equals(ctr1, ctr2), "#6");
                Bridge.Test.NUnit.Assert.False(!Bridge.equals(ctr1, ctr1), "#7");
                Bridge.Test.NUnit.Assert.True(!Bridge.equals(ctr1, ctr2), "#8");
            },
            RegistrationsCanBeUnregistered: function () {
                var cts = new System.Threading.CancellationTokenSource();
                var calledHandlers = new (System.Collections.Generic.List$1(System.Int32))();
                cts.token.register(function () {
                    calledHandlers.add(0);
                });
                var reg = cts.token.register(function () {
                    calledHandlers.add(1);
                });
                Bridge.Test.NUnit.Assert.True(Bridge.hasValue(reg));

                cts.token.register(function () {
                    calledHandlers.add(2);
                });

                reg.dispose();

                cts.cancel();

                Bridge.Test.NUnit.Assert.AreEqual(2, calledHandlers.Count);
                Bridge.Test.NUnit.Assert.True(calledHandlers.contains(0) && calledHandlers.contains(2));
            },
            CreatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm: function () {
                var ct = Bridge.getDefaultValue(System.Threading.CancellationTokenRegistration);
                Bridge.Test.NUnit.Assert.NotNull(ct, "not null");
                Bridge.Test.NUnit.Assert.True(Bridge.hasValue(ct), "is CancellationTokenRegistration");
                ct.dispose();
            },
            LinkedSourceWithTwoTokensWorks: function () {
                {
                    var cts1 = new System.Threading.CancellationTokenSource();
                    var cts2 = new System.Threading.CancellationTokenSource();
                    var linked = System.Threading.CancellationTokenSource.createLinked(cts1.token, cts2.token);

                    Bridge.Test.NUnit.Assert.False(linked.isCancellationRequested, "#1");
                    cts1.cancel();
                    Bridge.Test.NUnit.Assert.True(linked.isCancellationRequested, "#2");
                }

                {
                    var cts11 = new System.Threading.CancellationTokenSource();
                    var cts21 = new System.Threading.CancellationTokenSource();
                    var linked1 = System.Threading.CancellationTokenSource.createLinked(cts11.token, cts21.token);

                    Bridge.Test.NUnit.Assert.False(linked1.isCancellationRequested, "#1");
                    cts21.cancel();
                    Bridge.Test.NUnit.Assert.True(linked1.isCancellationRequested, "#2");
                }
            },
            LinkedSourceWithThreeTokensWorks: function () {
                {
                    var cts1 = new System.Threading.CancellationTokenSource();
                    var cts2 = new System.Threading.CancellationTokenSource();
                    var cts3 = new System.Threading.CancellationTokenSource();
                    var linked = System.Threading.CancellationTokenSource.createLinked(cts1.token, cts2.token, cts3.token);

                    Bridge.Test.NUnit.Assert.False(linked.isCancellationRequested, "#1 1");
                    cts1.cancel();
                    Bridge.Test.NUnit.Assert.True(linked.isCancellationRequested, "#1 2");
                }

                {
                    var cts11 = new System.Threading.CancellationTokenSource();
                    var cts21 = new System.Threading.CancellationTokenSource();
                    var cts31 = new System.Threading.CancellationTokenSource();
                    var linked1 = System.Threading.CancellationTokenSource.createLinked(cts11.token, cts21.token, cts31.token);

                    Bridge.Test.NUnit.Assert.False(linked1.isCancellationRequested, "#2 1");
                    cts21.cancel();
                    Bridge.Test.NUnit.Assert.True(linked1.isCancellationRequested, "#2 2");
                }

                {
                    var cts12 = new System.Threading.CancellationTokenSource();
                    var cts22 = new System.Threading.CancellationTokenSource();
                    var cts32 = new System.Threading.CancellationTokenSource();
                    var linked2 = System.Threading.CancellationTokenSource.createLinked(cts12.token, cts22.token, cts32.token);

                    Bridge.Test.NUnit.Assert.False(linked2.isCancellationRequested, "#3 1");
                    cts32.cancel();
                    Bridge.Test.NUnit.Assert.True(linked2.isCancellationRequested, "#3 2");
                }
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch4.Threading.CancellationTokenTests", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch4.Threading.CancellationTokenTests, {
        f1: function () { }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Threading.PromiseTests", {
        props: {
            PromiseProgress: 0
        },
        methods: {
            CreatePromise: function () {
                return new Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise();
            },
            TaskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var promise = this.CreatePromise();
                var task = System.Threading.Tasks.Task.fromPromise(promise);

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "Task should be running after being created");

                var continuationRun = false;

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "ContinueWith parameter should be correct");
                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "Task should be running before promise is completed.");
                promise.Resolve([Bridge.box(42, System.Int32), "result 123", Bridge.box(101, System.Int32)]);

                task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "Task should be completed after promise");
                    Bridge.Test.NUnit.Assert.True(continuationRun, "Continuation should have been run after promise was completed.");
                    Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init([Bridge.box(42, System.Int32), "result 123", Bridge.box(101, System.Int32)], System.Object), Bridge.unbox(task.getResult()), "The result should be correct");

                    completeAsync();
                });
            },
            TaskFromPromiseWithResultFactoryWorksWhenPromiseCompletes: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var trh = $asm.$.Bridge.ClientTest.Batch4.Threading.PromiseTests.f1;

                var promise = this.CreatePromise();
                var task = System.Threading.Tasks.Task.fromPromise(promise, trh);

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "Task should be running after being created");

                var continuationRun = false;

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "ContinueWith parameter should be correct");
                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "Task should be running before promise is completed.");
                promise.Resolve([Bridge.box(42, System.Int32), "result 123", Bridge.box(101, System.Int32)]);

                task1.continueWith(function (x) {
                    var $t;
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "Task should be completed after promise");
                    Bridge.Test.NUnit.Assert.True(continuationRun, "Continuation should have been run after promise was completed.");
                    Bridge.Test.NUnit.Assert.AreDeepEqual(($t = new Bridge.ClientTest.Batch4.Threading.PromiseTests.TaskResult(), $t.I = Bridge.box(42, System.Int32), $t.S = "result 123", $t.J = Bridge.box(101, System.Int32), $t), task.getResult());

                    completeAsync();
                });
            },
            TaskFromPromiseWorksWhenPromiseFails: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var promise = this.CreatePromise();
                var task = System.Threading.Tasks.Task.fromPromise(promise);

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "Task should be running after being created");

                var continuationRun = false;

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "ContinueWith parameter should be correct");
                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "Task should be running before promise is completed.");
                promise.Reject([Bridge.box(42, System.Int32), "result 123", Bridge.box(101, System.Int32)]);

                task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, task.status, "Task should have faulted after the promise was rejected.");
                    Bridge.Test.NUnit.Assert.True(continuationRun, "Continuation should have been run after promise was rejected.");
                    Bridge.Test.NUnit.Assert.True(Bridge.is(task.exception, System.AggregateException), "Exception should be an AggregateException");
                    Bridge.Test.NUnit.Assert.AreEqual(1, task.exception.innerExceptions.Count, "Exception should have one inner exception");
                    Bridge.Test.NUnit.Assert.True(Bridge.is(task.exception.innerExceptions.get(0), Bridge.PromiseException), "Inner exception should be a PromiseException");
                    Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init([Bridge.box(42, System.Int32), "result 123", Bridge.box(101, System.Int32)], System.Object), Bridge.unbox(Bridge.cast(task.exception.innerExceptions.get(0), Bridge.PromiseException).arguments), "The PromiseException arguments should be correct");

                    completeAsync();
                });
            },
            CompletingPromiseCanBeAwaited: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    completeAsync, 
                    promise, 
                    result, 
                    task, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    completeAsync = Bridge.Test.NUnit.Assert.Async();

                                    promise = this.CreatePromise();
                                    result = null;

                                    task = System.Threading.Tasks.Task.run(function () {
                                        Bridge.Test.NUnit.Assert.True(result == null, "Await should not finish too early (a).");
                                        promise.Resolve([Bridge.box(42, System.Int32), "result 123", Bridge.box(101, System.Int32)]);
                                    });

                                    Bridge.Test.NUnit.Assert.True(result == null, "Await should not finish too early (b).");

                                    $task1 = System.Threading.Tasks.Task.fromPromise(promise);
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    result = $taskResult1;

                                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([Bridge.box(42, System.Int32), "result 123", Bridge.box(101, System.Int32)], System.Object), Bridge.unbox(result), "The result should be correct");
                                    completeAsync();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            FailingPromiseCanBeAwaited: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $returnValue, 
                    completeAsync, 
                    promise, 
                    continuationRun, 
                    task, 
                    ex, 
                    ex1, 
                    $async_e, 
                    $async_e1, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4,5], $step);
                                switch ($step) {
                                    case 0: {
                                        completeAsync = Bridge.Test.NUnit.Assert.Async();

                                        promise = this.CreatePromise();

                                        continuationRun = false;

                                        task = System.Threading.Tasks.Task.run(function () {
                                            Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early (a).");
                                            promise.Reject([Bridge.box(42, System.Int32), "result 123", Bridge.box(101, System.Int32)]);
                                        });
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early (b).");
                                        $task1 = System.Threading.Tasks.Task.fromPromise(promise);
                                        $step = 2;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        Bridge.Test.NUnit.Assert.Fail("Await should throw");
                                        $step = 5;
                                        continue;
                                    }
                                    case 3: {
                                        continuationRun = true;
                                        Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([Bridge.box(42, System.Int32), "result 123", Bridge.box(101, System.Int32)], System.Object), Bridge.unbox(ex.arguments), "The PromiseException arguments should be correct");
                                        $async_e = null;
                                        $step = 5;
                                        continue;
                                    }
                                    case 4: {
                                        Bridge.Test.NUnit.Assert.Fail(System.String.concat("Thrown exception should have been an AggregateException, was ", Bridge.Reflection.getTypeFullName(Bridge.getType(ex1))));
                                        $async_e = null;
                                        $step = 5;
                                        continue;
                                    }
                                    case 5: {
                                        Bridge.Test.NUnit.Assert.True(continuationRun, "Continuation should have been run after promise was rejected.");

                                        completeAsync();
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            if ( $step >= 1 && $step <= 2 ) {
                                if (Bridge.is($async_e, Bridge.PromiseException)) {
                                    ex = $async_e;
                                    $step = 3;
                                    $asyncBody();
                                    return;
                                } else {
                                    ex1 = $async_e;
                                    $step = 4;
                                    $asyncBody();
                                    return;
                                }
                            }
                            throw $async_e;
                        }
                    }, arguments);

                $asyncBody();
            },
            HandleProgress: function (args) {
                if (args === void 0) { args = []; }
                var i = System.Nullable.getValue(Bridge.cast(Bridge.unbox(args[System.Array.index(0, args)]), System.Int32));
                this.PromiseProgress = i;
            },
            TaskFromPromiseWithProgressWithoutResultFactoryWorksWhenPromiseProgressesAndCompletes: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var promise = this.CreatePromise();

                this.PromiseProgress = -1;
                var task = System.Threading.Tasks.Task.fromPromise(promise, null, null, Bridge.fn.cacheBind(this, this.HandleProgress));

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "Task should be running after being created");

                var continuationRun = false;

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "ContinueWith parameter should be correct");
                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "Task should be running before promise is completed.");

                promise.Progress([Bridge.box(20, System.Int32)]);
                Bridge.Test.NUnit.Assert.AreEqual(20, this.PromiseProgress, "Progress 20");

                // Resolve will set Progress to 100%
                promise.Resolve([Bridge.box(42, System.Int32), "result 123", Bridge.box(101, System.Int32)]);
                Bridge.Test.NUnit.Assert.AreEqual(100, this.PromiseProgress, "Progress 100");

                task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "Task should be completed after promise");
                    Bridge.Test.NUnit.Assert.True(continuationRun, "Continuation should have been run after promise was completed.");
                    Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init([Bridge.box(42, System.Int32), "result 123", Bridge.box(101, System.Int32)], System.Object), task.getResult(), "The result should be correct");

                    completeAsync();
                });
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch4.Threading.PromiseTests", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch4.Threading.PromiseTests, {
        f1: function (i, s, j) {
            var $t;
            return ($t = new Bridge.ClientTest.Batch4.Threading.PromiseTests.TaskResult(), $t.I = Bridge.box(System.Nullable.getValue(Bridge.cast(Bridge.unbox(i), System.Int32)), System.Int32), $t.S = Bridge.cast(s, System.String), $t.J = Bridge.box(System.Nullable.getValue(Bridge.cast(Bridge.unbox(j), System.Int32)), System.Int32), $t);
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise", {
        inherits: [Bridge.IPromise],
        fields: {
            DoThen: null
        },
        props: {
            Thens: null
        },
        alias: ["then", "Bridge$IPromise$then"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this.Thens = new (System.Collections.Generic.List$1(Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise.A))();

                this.DoThen = Bridge.fn.bind(this, $asm.$.Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise.f1);
            }
        },
        methods: {
            then: function (fulfilledHandler, errorHandler, progressHandler) {
                if (errorHandler === void 0) { errorHandler = null; }
                if (progressHandler === void 0) { progressHandler = null; }
                this.DoThen(fulfilledHandler, errorHandler, progressHandler);
            },
            Resolve: function (args) {
                if (args === void 0) { args = []; }
                this.Complete(Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise.Which.Resolve, args);
            },
            Reject: function (args) {
                if (args === void 0) { args = []; }
                this.Complete(Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise.Which.Reject, args);
            },
            Progress: function (args) {
                if (args === void 0) { args = []; }
                var i = 0;
                while (i < this.Thens.Count) {
                    var aThen = this.Thens.getItem(i);

                    if (!Bridge.staticEquals(aThen.Progress, null)) {
                        aThen.Progress(args);
                    }

                    i = (i + 1) | 0;
                }
            },
            Complete: function (which, args) {
                if (args === void 0) { args = []; }
                if (which === Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise.Which.Resolve) {
                    this.DoThen = Bridge.fn.bind(this, function (f, e, p) {
                        this.Resolve(args);
                    });
                } else {
                    this.DoThen = Bridge.fn.bind(this, function (f, e, p) {
                        this.Reject(args);
                    });
                }

                var i = 0;
                while (i < this.Thens.Count) {
                    var aThen = this.Thens.getItem(i);

                    if (which === Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise.Which.Resolve) {
                        if (!Bridge.staticEquals(aThen.Filled, null)) {
                            aThen.Filled.apply(null, args);
                        }
                    } else {
                        if (!Bridge.staticEquals(aThen.Error, null)) {
                            aThen.Error.apply(null, args);
                        }
                    }

                    if (!Bridge.staticEquals(aThen.Progress, null)) {
                        aThen.Progress([Bridge.box(100, System.Int32)]);
                    }

                    i = (i + 1) | 0;
                }
                this.Thens.clear();
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise, {
        f1: function (f, e, p) {
            var $t;
            this.Thens.add(($t = new Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise.A(), $t.Filled = f, $t.Error = e, $t.Progress = p, $t));
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise.A", {
        props: {
            Filled: null,
            Error: null,
            Progress: null
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Threading.PromiseTests.SimplePromise.Which", {
        $kind: "enum",
        statics: {
            fields: {
                Resolve: 0,
                Reject: 1
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Threading.PromiseTests.TaskResult", {
        props: {
            I: null,
            S: null,
            J: null
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.Threading.TaskTests", {
        methods: {
            MakeEnumerable: function (T, args) {
                return new (Bridge.GeneratorEnumerable$1(T))(Bridge.fn.bind(this, function (T, args) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $t,
                        a,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(T))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        if (args === void 0) { args = []; }
                                            $t = Bridge.getEnumerator(args);
                                            $step = 1;
                                            continue;
                                    }
                                    case 1: {
                                        if ($t.moveNext()) {
                                                a = $t.Current;
                                                $step = 2;
                                                continue;
                                            }
                                        $step = 4;
                                        continue;
                                    }
                                    case 2: {
                                        $enumerator.current = a;
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        $step = 1;
                                        continue;
                                    }
                                    case 4: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            TaskCompletionSourceTypePropertiesAreCorrect: function () {
                Bridge.Test.NUnit.Assert.AreEqual("System.Threading.Tasks.TaskCompletionSource", Bridge.Reflection.getTypeFullName(System.Threading.Tasks.TaskCompletionSource), "FullName should be correct");
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                Bridge.Test.NUnit.Assert.True(Bridge.hasValue(tcs));
            },
            TaskTypePropertiesAreCorrect: function () {
                Bridge.Test.NUnit.Assert.AreEqual("System.Threading.Tasks.Task", Bridge.Reflection.getTypeFullName(System.Threading.Tasks.Task), "FullName for non-generic task should be correct");
                Bridge.Test.NUnit.Assert.AreEqual("System.Threading.Tasks.Task`1", Bridge.Reflection.getTypeFullName(System.Threading.Tasks.Task$1), "FullName for generic task should be correct");

                var task = new System.Threading.Tasks.TaskCompletionSource().task;
                Bridge.Test.NUnit.Assert.True(Bridge.hasValue(task));
                Bridge.Test.NUnit.Assert.True(Bridge.is(task, System.Threading.Tasks.Task));
                Bridge.Test.NUnit.Assert.True(Bridge.is(task, System.IDisposable));

                task.dispose(); // Should not throw
            },
            TaskCompletionSourceWorksWhenSettingResult: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var callbackRun = false;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();

                var task = tcs.task;

                task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "Callback parameter should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "Task should be completed when in the callback");
                    Bridge.Test.NUnit.Assert.AreEqual(1, task.getResult(), "Result should be 1 after the callback");
                    Bridge.Test.NUnit.Assert.AreEqual(null, task.exception, "Exception should be null in the callback");

                    callbackRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "The task should be running before SetResult is called");
                Bridge.Test.NUnit.Assert.False(callbackRun, "Callback should not be run before SetResult() is called");

                tcs.setResult(1);

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "Task should be completed directly after SetResult() is called");
                Bridge.Test.NUnit.Assert.AreEqual(1, task.getResult(), "Result should be set immediately");
                Bridge.Test.NUnit.Assert.AreEqual(null, task.exception, "Exception should be null after SetResult()");

                System.Threading.Tasks.Task.run(function () {
                    Bridge.Test.NUnit.Assert.True(callbackRun, "Callback should be run");

                    completeAsync();
                });
            },
            TaskCompletionSourceWorksWhenSettingASingleException: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var callbackRun = false;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                var ex = new System.Exception("Some text");

                task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "Callback parameter should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, task.status, "Task should be faulted in the callback");
                    Bridge.Test.NUnit.Assert.True(Bridge.is(task.exception, System.AggregateException));
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task.exception.innerExceptions.get(0), ex), "The exception should be correct");
                    Bridge.Test.NUnit.Assert.Throws$1(function () {
                        var x = task.getResult();
                    }, "Getting the result property in the callback should throw");

                    callbackRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "The task should be running before the SetException() call");
                Bridge.Test.NUnit.Assert.False(callbackRun, "Callback should not be run before SetException() is called");

                tcs.setException(ex);

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, task.status, "The task should be faulted immediately after the SetException() call");
                Bridge.Test.NUnit.Assert.True(Bridge.is(task.exception, System.AggregateException));
                Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task.exception.innerExceptions.get(0), ex), "The exception should be correct immediately after SetException()");
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    var x = task.getResult();
                }, "Getting the result property after SetException() should throw");

                System.Threading.Tasks.Task.run(function () {
                    Bridge.Test.NUnit.Assert.True(callbackRun, "Callback should be run");

                    completeAsync();
                });
            },
            TaskCompletionSourceWorksWhenSettingTwoExceptions: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var callbackRun = false;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;
                var ex1 = new System.Exception("Some text");
                var ex2 = new System.Exception("Some other text");

                task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "Callback parameter should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, task.status, "Task should be faulted in the callback");
                    Bridge.Test.NUnit.Assert.True(Bridge.is(task.exception, System.AggregateException));
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task.exception.innerExceptions.get(0), ex1), "InnerExceptions[0] should be correct in callback");
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task.exception.innerExceptions.get(1), ex2), "InnerExceptions[1] should be correct in callback");
                    Bridge.Test.NUnit.Assert.Throws$1(function () {
                        var x = task.getResult();
                    }, "Getting the result property in the callback should throw");

                    callbackRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "The task should be running before the SetException() call");
                Bridge.Test.NUnit.Assert.False(callbackRun, "Callback should not be run before SetException() is called");

                tcs.setException(this.MakeEnumerable(System.Exception, System.Array.init([ex1, ex2], System.Exception)));

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, task.status, "The task should be faulted immediately after the SetException() call");
                Bridge.Test.NUnit.Assert.True(Bridge.is(task.exception, System.AggregateException));
                Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task.exception.innerExceptions.get(0), ex1), "InnerExceptions[0] should be correct immediately after SetException");
                Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task.exception.innerExceptions.get(1), ex2), "InnerExceptions[1] should be correct immediately after SetException");
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    var x = task.getResult();
                }, "Getting the result property after SetException() should throw");

                System.Threading.Tasks.Task.run(function () {
                    Bridge.Test.NUnit.Assert.True(callbackRun, "Callback should be run");

                    completeAsync();
                });
            },
            TaskCompletionSourceWorksWhenCancelling: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var callbackRun = false;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "Callback parameter should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.canceled, task.status, "Task should be cancelled in the callback");
                    Bridge.Test.NUnit.Assert.True(task.exception == null, "Exception should be null in the callback");
                    Bridge.Test.NUnit.Assert.Throws$1(function () {
                        var x = task.getResult();
                    }, "Getting the result property in the callback should throw");

                    callbackRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "The task should be running before the SetCanceled() call");
                Bridge.Test.NUnit.Assert.False(callbackRun, "Callback should not be run before SetCanceled() is called");

                tcs.setCanceled();

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.canceled, task.status, "The task should be cancelled immediately after the SetCanceled() call");
                Bridge.Test.NUnit.Assert.True(task.exception == null, "The exception should be correct immediately after SetCanceled()");
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    var x = task.getResult();
                }, "Getting the result property after SetCanceled() should throw");

                task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(callbackRun, "The callback should be run");

                    completeAsync();
                });
            },
            CancelledTaskThrowsTaskCanceledExceptionWhenAwaited: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                tcs.setCanceled();

                var caughtException = null;

                var someMethod = Bridge.fn.bind(this, function () {
                    var $step = 0,
                        $task1, 
                        $taskResult1, 
                        $jumpFromFinally, 
                        $returnValue, 
                        ex, 
                        $async_e, 
                        $async_e1, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([1,2,3,4], $step);
                                    switch ($step) {

                                        case 1: {
                                            $task1 = tcs.task;
                                            $step = 2;
                                            $task1.continueWith($asyncBody, true);
                                            return;
                                        }
                                        case 2: {
                                            $taskResult1 = $task1.getAwaitedResult();
                                            Bridge.Test.NUnit.Assert.Fail("Await should throw");
                                            $step = 4;
                                            continue;
                                        }
                                        case 3: {
                                            caughtException = ex;
                                            $async_e = null;
                                            $step = 4;
                                            continue;
                                        }
                                        case 4: {
                                            return;
                                        }
                                        default: {
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                if ( $step >= 1 && $step <= 2 ) {
                                    if (Bridge.is($async_e, System.Threading.Tasks.TaskCanceledException)) {
                                        ex = $async_e;
                                        $step = 3;
                                        $asyncBody();
                                        return;
                                    }
                                }
                                throw $async_e;
                            }
                        }, arguments);

                    $asyncBody();
                });

                someMethod();

                System.Threading.Tasks.Task.run(function () {
                    Bridge.Test.NUnit.Assert.NotNull(caughtException, "Should catch");
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(tcs.task, caughtException.task));

                    completeAsync();
                });
            },
            CancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed: function () {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                tcs.setCanceled();

                try {
                    var r = tcs.task.getResult();

                    Bridge.Test.NUnit.Assert.Fail("Should throw");
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    var ex;
                    if (Bridge.is($e1, System.AggregateException)) {
                        ex = $e1;
                        Bridge.Test.NUnit.Assert.AreEqual(1, ex.innerExceptions.Count, "InnerExceptions.Count");
                        var tce = Bridge.as(ex.innerExceptions.get(0), System.Threading.Tasks.TaskCanceledException);
                        Bridge.Test.NUnit.Assert.NotNull(tce, "is TaskCanceledException");
                        Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(tcs.task, tce.task), "Task");
                    } else {
                        throw $e1;
                    }
                }
            },
            SetResultFailsWhenTheTaskIsCompleted: function () {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                tcs.setResult(1);
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    tcs.setResult(1);
                });
            },
            SetCanceledFailsWhenTheTaskIsCompleted: function () {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                tcs.setCanceled();
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    tcs.setCanceled();
                });
            },
            SetExceptionFailsWhenTheTaskIsCompleted: function () {
                var ex = new System.Exception();
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                tcs.setException(ex);
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    tcs.setException(ex);
                });
            },
            CompletedTaskHasCorrectIsXProperties: function () {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                tcs.setResult(1);
                Bridge.Test.NUnit.Assert.True(tcs.task.isCompleted());
                Bridge.Test.NUnit.Assert.False(tcs.task.isFaulted());
                Bridge.Test.NUnit.Assert.False(tcs.task.isCanceled());
            },
            CancelledTaskHasCorrectIsXProperties: function () {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                tcs.setCanceled();
                Bridge.Test.NUnit.Assert.True(tcs.task.isCompleted());
                Bridge.Test.NUnit.Assert.False(tcs.task.isFaulted());
                Bridge.Test.NUnit.Assert.True(tcs.task.isCanceled());
            },
            FaultedTaskHasCorrectIsXProperties: function () {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                tcs.setException(new System.Exception());
                Bridge.Test.NUnit.Assert.True(tcs.task.isCompleted());
                Bridge.Test.NUnit.Assert.True(tcs.task.isFaulted());
                Bridge.Test.NUnit.Assert.False(tcs.task.isCanceled());
            },
            TrySetResultReturnsFalseWhenTheTaskIsCompleted: function () {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                Bridge.Test.NUnit.Assert.True(tcs.trySetResult(1));
                Bridge.Test.NUnit.Assert.False(tcs.trySetResult(1));
            },
            TrySetCanceledReturnsFalseWhenTheTaskIsCompleted: function () {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                Bridge.Test.NUnit.Assert.True(tcs.trySetCanceled());
                Bridge.Test.NUnit.Assert.False(tcs.trySetCanceled());
            },
            TrySetExceptionReturnsFalseWhenTheTaskIsCompleted: function () {
                var ex = new System.Exception();
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                Bridge.Test.NUnit.Assert.True(tcs.trySetException(ex));
                Bridge.Test.NUnit.Assert.False(tcs.trySetException(ex));
            },
            ContinueWithForNonGenericTaskWorkWithNoResultAndNoException: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var complete = false;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running at point 1");

                var continuedTask = null;

                continuedTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "argument to task.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "task should have run to completion at point 2");
                    Bridge.Test.NUnit.Assert.AreEqual(null, task.exception, "task should not have an exception");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, continuedTask.status, "continuedTask should be running at point 2");
                });

                Bridge.Test.NUnit.Assert.False(Bridge.referenceEquals(task, continuedTask), "task and continuedTask should not be the same");

                var continuedTask1 = continuedTask.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, continuedTask), "argument to continuedTask.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, continuedTask.status, "continuedTask should have run to completion at point 3");
                    Bridge.Test.NUnit.Assert.AreEqual(null, continuedTask.exception, "continuedTask should not have an exception");

                    complete = true;
                });

                tcs.setResult(0);

                continuedTask1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(complete, "We should not time out");

                    completeAsync();
                });
            },
            ContinueWithWhenCallbackThrowsAnException: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var cb1Invoked = false, cb2Invoked = false;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running at point 1");

                var t1 = task.continueWith(function (t) {
                    cb1Invoked = true;
                    throw new System.Exception("Test");
                });

                var t2 = task.continueWith(function (t) {
                    cb2Invoked = true;
                });

                tcs.setResult(0);

                System.Threading.Tasks.Task.run(function () {
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "task status should be RanToCompletion");

                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, t1.status, "t1 status should be Faulted");
                    Bridge.Test.NUnit.Assert.True(cb1Invoked, "Callback 1 should have been invoked");

                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, t2.status, "t2 status should be RanToCompletion");
                    Bridge.Test.NUnit.Assert.True(cb2Invoked, "Callback 2 should have been invoked");

                    completeAsync();
                });
            },
            ExceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var complete = false;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running at point 1");

                var continuedTask = null;

                continuedTask = task.continueWith($asm.$.Bridge.ClientTest.Batch4.Threading.TaskTests.f1);

                Bridge.Test.NUnit.Assert.False(Bridge.referenceEquals(task, continuedTask), "task and continuedTask should not be the same");

                var continuedTask1 = continuedTask.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, continuedTask), "argument to continuedTask.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, continuedTask.status, "continuedTask should have run to completion at point 3");
                    Bridge.Test.NUnit.Assert.AreNotEqual(null, continuedTask.exception, "continuedTask should have an exception");
                    Bridge.Test.NUnit.Assert.True(Bridge.is(continuedTask.exception, System.AggregateException));
                    Bridge.Test.NUnit.Assert.AreEqual("This is a test message", continuedTask.exception.innerExceptions.get(0).Message);

                    complete = true;
                });

                tcs.setResult(0);

                continuedTask1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(complete, "We should not time out");

                    completeAsync();
                });
            },
            ContinueWithForNonGenericTaskCanReturnAValue: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var done = false;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running at point 1");

                var continuedTask = null;
                continuedTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "argument to task.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "task should have run to completion at point 2");
                    Bridge.Test.NUnit.Assert.AreEqual(null, task.exception, "task should not have an exception");

                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, continuedTask.status, "continuedTask should be running at point 2");

                    return 42;
                });

                Bridge.Test.NUnit.Assert.False(Bridge.referenceEquals(task, continuedTask), "task and continuedTask should not be the same");

                var continuedTask1 = continuedTask.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, continuedTask), "argument to continuedTask.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, continuedTask.status, "continuedTask should have run to completion at point 3");
                    Bridge.Test.NUnit.Assert.AreEqual(null, continuedTask.exception, "continuedTask should not have an exception");
                    Bridge.Test.NUnit.Assert.AreEqual(42, t.getResult());

                    done = true;
                });

                tcs.setResult(0);

                continuedTask1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(done, "We should not time out");

                    completeAsync();
                });
            },
            ContinueWithWithNoReturnValueForGenericTaskWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var done = false;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running at point 1");

                var continuedTask = null;

                continuedTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "argument to task.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "task should have run to completion at point 2");
                    Bridge.Test.NUnit.Assert.AreEqual(null, task.exception, "task should not have an exception");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, continuedTask.status, "continuedTask should be running at point 2");
                });

                Bridge.Test.NUnit.Assert.False(Bridge.referenceEquals(task, continuedTask), "task and continuedTask should not be the same");

                var continuedTask1 = continuedTask.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, continuedTask), "argument to continuedTask.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, continuedTask.status, "continuedTask should have run to completion at point 3");
                    Bridge.Test.NUnit.Assert.AreEqual(null, continuedTask.exception, "continuedTask should not have an exception");

                    done = true;
                });

                tcs.setResult(0);

                continuedTask1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(done, "We should not time out");

                    completeAsync();
                });
            },
            ContinueWithForGenericTaskCanReturnAValue: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var done = false;
                var tcs = new System.Threading.Tasks.TaskCompletionSource();
                var task = tcs.task;

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running at point 1");

                var continuedTask = null;

                continuedTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "argument to task.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "task should have run to completion at point 2");
                    Bridge.Test.NUnit.Assert.AreEqual(null, task.exception, "task should not have an exception");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, continuedTask.status, "continuedTask should be running at point 2");

                    return t.getResult() + "_";
                });

                Bridge.Test.NUnit.Assert.False(Bridge.referenceEquals(task, continuedTask), "task and continuedTask should not be the same");

                var doneTask = continuedTask.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, continuedTask), "argument to continuedTask.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, continuedTask.status, "continuedTask should have run to completion at point 3");
                    Bridge.Test.NUnit.Assert.AreEqual(null, continuedTask.exception, "continuedTask should not have an exception");
                    Bridge.Test.NUnit.Assert.AreEqual("42_", t.getResult());

                    done = true;
                });

                tcs.setResult(42);

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(done, "We should not time out");

                    completeAsync();
                });
            },
            DelayWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var done = false;

                System.Threading.Tasks.Task.run(function () {
                    Bridge.Test.NUnit.Assert.False(done, "Done should not be set too early");
                });

                var delay = System.Threading.Tasks.Task.delay(100);

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, delay.status, "delay should be running at point 1");

                var afterDelay = delay.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, delay), "argument to delay.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, delay.status, "delay should have run to completion at point 2");
                    Bridge.Test.NUnit.Assert.AreEqual(null, delay.exception, "delay should not have an exception");

                    done = true;
                });

                afterDelay.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(done, "We should not time out");

                    completeAsync();
                });
            },
            FromResultWorks: function () {
                var t = System.Threading.Tasks.Task.fromResult(3);
                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, t.status, "Task should be finished");
                Bridge.Test.NUnit.Assert.AreEqual(3, t.getResult(), "Result should be correct");
                Bridge.Test.NUnit.Assert.AreEqual(null, t.exception, "Exception should be null");
            },
            RunWithoutResultWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();
                var bodyRun = false, continuationRun = false;

                var task = System.Threading.Tasks.Task.run(function () {
                    bodyRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running at point 1");

                var doneTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "argument to task.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.True(bodyRun, "Body should be run before continuation");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "task should have run to completion at point 2");
                    Bridge.Test.NUnit.Assert.AreEqual(null, task.exception, "task should not have an exception");

                    continuationRun = true;
                });

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            RunWithResultWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();
                var bodyRun = false, continuationRun = false;

                var task = System.Threading.Tasks.Task.run(function () {
                    bodyRun = true;
                    return 42;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running at point 1");

                var doneTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "argument to task.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.True(bodyRun, "Body should be run before continuation");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "task should have run to completion at point 2");
                    Bridge.Test.NUnit.Assert.AreEqual(42, task.getResult());
                    Bridge.Test.NUnit.Assert.AreEqual(null, task.exception, "task should not have an exception");

                    continuationRun = true;
                });

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            RunWorksWhenBodyThrows: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();
                var bodyRun = false, continuationRun = false;

                var task = System.Threading.Tasks.Task.run(function () {
                    bodyRun = true;
                    eval("throw 'This is a test message'");
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running at point 1");

                var doneTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t, task), "argument to task.ContinueWith callback should be correct");
                    Bridge.Test.NUnit.Assert.True(bodyRun, "Body should be run before continuation");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, task.status, "task should have faulted at point 2");
                    Bridge.Test.NUnit.Assert.True(Bridge.is(task.exception, System.AggregateException));
                    Bridge.Test.NUnit.Assert.AreEqual("This is a test message", task.exception.innerExceptions.get(0).Message);

                    continuationRun = true;
                });

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAllParamArrayWithResultWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;
                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();

                tcs1.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs2.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs3.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                var task = System.Threading.Tasks.Task.whenAll(tcs1.task, tcs2.task, tcs3.task);

                var doneTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs1.task.status, "Task1 should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs2.task.status, "Task2 should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs3.task.status, "Task3 should have run to completion");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([101, 3, 42], System.Int32), t.getResult(), "Result should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(null, t.exception, "Exception for the aggregate task should be null");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, t.status, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setResult(3);
                tcs1.setResult(101);
                tcs3.setResult(42);

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAllEnumerableWithResultWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;
                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();

                tcs1.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs2.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs3.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                var task = System.Threading.Tasks.Task.whenAll(this.MakeEnumerable(System.Threading.Tasks.Task$1, [tcs1.task, tcs2.task, tcs3.task]));

                var doneTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs1.task.status, "Task1 should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs2.task.status, "Task2 should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs3.task.status, "Task3 should have run to completion");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([101, 3, 42], System.Int32), t.getResult(), "Result should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(null, t.exception, "Exception for the aggregate task should be null");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, t.status, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setResult(3);
                tcs1.setResult(101);
                tcs3.setResult(42);

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAllParamArrayWithoutResultWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;
                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();

                tcs1.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs2.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs3.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                var task = System.Threading.Tasks.Task.whenAll(Bridge.cast(tcs1.task, System.Threading.Tasks.Task), Bridge.cast(tcs2.task, System.Threading.Tasks.Task), Bridge.cast(tcs3.task, System.Threading.Tasks.Task));

                var doneTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs1.task.status, "Task1 should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs2.task.status, "Task2 should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs3.task.status, "Task3 should have run to completion");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.AreEqual(null, t.exception, "Exception for the aggregate task should be null");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, t.status, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setResult(3);
                tcs1.setResult(101);
                tcs3.setResult(42);

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAllEnumerableWithoutResultWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;
                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();

                tcs1.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs2.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs3.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                var task = System.Threading.Tasks.Task.whenAll(this.MakeEnumerable(System.Threading.Tasks.Task, [Bridge.cast(tcs1.task, System.Threading.Tasks.Task), Bridge.cast(tcs2.task, System.Threading.Tasks.Task), Bridge.cast(tcs3.task, System.Threading.Tasks.Task)]));

                var doneTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs1.task.status, "Task1 should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs2.task.status, "Task2 should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs3.task.status, "Task3 should have run to completion");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.AreEqual(null, t.exception, "Exception for the aggregate task should be null");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, t.status, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setResult(3);
                tcs1.setResult(101);
                tcs3.setResult(42);

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;
                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs4 = new System.Threading.Tasks.TaskCompletionSource();

                tcs1.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs2.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs3.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs4.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                var ex1 = new System.Exception("exception 1");
                var ex2 = new System.Exception("exception 1");

                var task = System.Threading.Tasks.Task.whenAll(this.MakeEnumerable(System.Threading.Tasks.Task, [Bridge.cast(tcs1.task, System.Threading.Tasks.Task), Bridge.cast(tcs2.task, System.Threading.Tasks.Task), Bridge.cast(tcs3.task, System.Threading.Tasks.Task), Bridge.cast(tcs4.task, System.Threading.Tasks.Task)]));

                var doneTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs1.task.status, "Task1 should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, tcs2.task.status, "Task2 should be faulted");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, tcs3.task.status, "Task3 should be faulted");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.canceled, tcs4.task.status, "Task4 should be cancelled");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.True(Bridge.hasValue(t.exception), "Exception for the aggregate task should be null");
                    Bridge.Test.NUnit.Assert.AreEqual(2, t.exception.innerExceptions.Count, "Should be 2 inner exceptions");
                    Bridge.Test.NUnit.Assert.True(t.exception.innerExceptions.contains(ex1), "ex1 should be propagated");
                    Bridge.Test.NUnit.Assert.True(t.exception.innerExceptions.contains(ex2), "ex2 should be propagated");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, t.status, "Aggregate task should be faulted");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setException(ex1);
                tcs1.setResult(101);
                tcs3.setException(ex2);
                tcs4.setCanceled();

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;
                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();
                tcs1.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs2.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                tcs3.task.continueWith(function (_) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should not be run too early.");
                });

                var task = System.Threading.Tasks.Task.whenAll(tcs1.task, tcs2.task, tcs3.task);

                var doneTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.canceled, tcs1.task.status, "Task1 should be cancelled");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs2.task.status, "Task2 should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs3.task.status, "Task3 should have run to completion");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.AreEqual(null, t.exception, "Exception for the aggregate task should be null");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.canceled, t.status, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setResult(3);
                tcs1.setCanceled();
                tcs3.setResult(42);

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAnyParamArrayWithResultWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;

                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();

                var task = System.Threading.Tasks.Task.whenAny(tcs1.task, tcs2.task, tcs3.task);

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs2.task.status, "Task2 should have run to completion");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t.getResult(), tcs2.task), "Result should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(3, t.getResult().getResult(), "Result should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(null, t.exception, "Exception for the aggregate task should be null");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, t.status, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setResult(3);

                var doneTask = task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.setResult(101);
                    tcs3.setResult(42);
                });

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAnyEnumerableWithResultWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;
                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();

                var task = System.Threading.Tasks.Task.whenAny(this.MakeEnumerable(System.Threading.Tasks.Task$1, [tcs1.task, tcs2.task, tcs3.task]));

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs2.task.status, "Task2 should have run to completion");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t.getResult(), tcs2.task), "Result should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(3, t.getResult().getResult(), "Result should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(null, t.exception, "Exception for the aggregate task should be null");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, t.status, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setResult(3);

                var doneTask = task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.setResult(101);
                    tcs3.setResult(42);
                });

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAnyParamArrayWithoutResultWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;

                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();

                var task = System.Threading.Tasks.Task.whenAny(Bridge.cast(tcs1.task, System.Threading.Tasks.Task), Bridge.cast(tcs2.task, System.Threading.Tasks.Task), Bridge.cast(tcs3.task, System.Threading.Tasks.Task));

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs2.task.status, "Task2 should have run to completion");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t.getResult(), tcs2.task), "Result should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(null, t.exception, "Exception for the aggregate task should be null");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, t.status, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setResult(3);

                var doneTask = task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.setResult(101);
                    tcs3.setResult(42);
                });

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAnyEnumerableWithoutResultWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;

                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();

                var task = System.Threading.Tasks.Task.whenAny(this.MakeEnumerable(System.Threading.Tasks.Task, [Bridge.cast(tcs1.task, System.Threading.Tasks.Task), Bridge.cast(tcs2.task, System.Threading.Tasks.Task), Bridge.cast(tcs3.task, System.Threading.Tasks.Task)]));

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, tcs2.task.status, "Task2 should have run to completion");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t.getResult(), tcs2.task), "Result should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(null, t.exception, "Exception for the aggregate task should be null");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setResult(3);

                var doneTask = task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.setResult(101);
                    tcs3.setResult(42);
                });

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAnyFaultsIfTheFirstTaskFaulted: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;

                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();
                var ex = new System.Exception("Some text");

                var task = System.Threading.Tasks.Task.whenAny(this.MakeEnumerable(System.Threading.Tasks.Task$1, [tcs1.task, tcs2.task, tcs3.task]));

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, tcs2.task.status, "Task2 should have faulted");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.AreEqual(1, t.exception.innerExceptions.Count, "There should be one inner exception");
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(t.exception.innerExceptions.get(0), ex), "Exception for the aggregate task should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, task.status, "Aggregate task should have faulted");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setException(ex);

                var doneTask = task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.setResult(101);
                    tcs3.setResult(42);
                });

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            WhenAnyIsCancelledIfTheFirstTaskWasCancelled: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var continuationRun = false;
                var tcs1 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs2 = new System.Threading.Tasks.TaskCompletionSource();
                var tcs3 = new System.Threading.Tasks.TaskCompletionSource();

                var task = System.Threading.Tasks.Task.whenAny(this.MakeEnumerable(System.Threading.Tasks.Task$1, [tcs1.task, tcs2.task, tcs3.task]));

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.False(continuationRun, "Continuation should only be run once.");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.canceled, tcs2.task.status, "Task2 should be cancelled");

                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task, t), "Callback parameter should be correct");

                    Bridge.Test.NUnit.Assert.AreEqual(null, t.exception, "Aggregate task should not have exception");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.canceled, task.status, "Aggregate task should be cancelled");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status, "task should be running after creation.");

                tcs2.setCanceled();

                var doneTask = task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.setResult(101);
                    tcs3.setResult(42);
                });

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
            },
            ConstructorWithOnlyActionWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var taskRun = false, continuationRun = false;

                var task = new System.Threading.Tasks.Task(function () {
                    taskRun = true;
                });

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(taskRun, "Task should be run before continuation");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "Task should have run to completion");
                    Bridge.Test.NUnit.Assert.True(task.exception == null, "Exception should be null");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.created, task.status);

                System.Threading.Tasks.Task.run(function () {
                    Bridge.Test.NUnit.Assert.False(taskRun, "Task should not be run before being started");

                    task.start();

                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status);
                });

                task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "The continuation should be run");
                    completeAsync();
                });
            },
            ConstructorWithActionAndStateWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var taskRun = false, continuationRun = false;
                var state = {  };

                var task = new System.Threading.Tasks.Task(function (s) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(state, s), "The state should be correct.");
                    taskRun = true;
                }, state);

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(taskRun, "Task should be run before continuation");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "Task should have run to completion");
                    Bridge.Test.NUnit.Assert.True(task.exception == null, "Exception should be null");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.created, task.status);

                System.Threading.Tasks.Task.run(function () {
                    Bridge.Test.NUnit.Assert.False(taskRun, "Task should not be run before being started");

                    task.start();

                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status);
                });

                task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "The continuation should be run");

                    completeAsync();
                });
            },
            ExceptionInManuallyCreatedTaskIsStoredOnTheTask: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var taskRun = false, continuationRun = false;
                var ex = new System.Exception();

                var task = new System.Threading.Tasks.Task(function () {
                    taskRun = true;
                    throw ex;
                });

                var task1 = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(taskRun, "Task should be run before continuation");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.faulted, task.status, "Task should be faulted");
                    Bridge.Test.NUnit.Assert.True(Bridge.is(task.exception, System.AggregateException), "Exception should be correct");
                    Bridge.Test.NUnit.Assert.AreEqual(1, task.exception.innerExceptions.Count, "There should be one inner exception");
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(task.exception.innerExceptions.get(0), ex), "InnerException should be correct");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.created, task.status);

                System.Threading.Tasks.Task.run(function () {
                    Bridge.Test.NUnit.Assert.False(taskRun, "Task should not be run before being started");

                    task.start();
                });

                task1.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "The continuation should be run");

                    completeAsync();
                });
            },
            ConstructorWithOnlyFunctionWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var taskRun = false, continuationRun = false;

                var task = new System.Threading.Tasks.Task$1(function () {
                    taskRun = true;
                    return 42;
                });

                var doneTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(taskRun, "Task should be run before continuation");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "Task should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(42, task.getResult(), "Result should be correct");
                    Bridge.Test.NUnit.Assert.True(task.exception == null, "Exception should be null");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.created, task.status);

                System.Threading.Tasks.Task.run(function () {
                    Bridge.Test.NUnit.Assert.False(taskRun, "Task should not be run before being started");

                    task.start();

                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status);
                });

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "The continuation should be run");

                    completeAsync();
                });
            },
            ConstructorWithFunctionAndStateWorks: function () {
                var completeAsync = Bridge.Test.NUnit.Assert.Async();

                var taskRun = false, continuationRun = false;
                var state = {  };

                var task = new System.Threading.Tasks.Task$1(function (s) {
                    Bridge.Test.NUnit.Assert.True(Bridge.referenceEquals(state, s), "The state should be correct.");
                    taskRun = true;
                    return 42;
                }, state);

                var doneTask = task.continueWith(function (t) {
                    Bridge.Test.NUnit.Assert.True(taskRun, "Task should be run before continuation");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.ranToCompletion, task.status, "Task should have run to completion");
                    Bridge.Test.NUnit.Assert.AreEqual(42, task.getResult(), "Result should be correct");
                    Bridge.Test.NUnit.Assert.True(task.exception == null, "Exception should be null");

                    continuationRun = true;
                });

                Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.created, task.status);

                System.Threading.Tasks.Task.run(function () {
                    Bridge.Test.NUnit.Assert.False(taskRun, "Task should not be run before being started");

                    task.start();

                    Bridge.Test.NUnit.Assert.AreEqual(System.Threading.Tasks.TaskStatus.running, task.status);
                });

                doneTask.continueWith(function (x) {
                    Bridge.Test.NUnit.Assert.True(continuationRun, "The continuation should be run");

                    completeAsync();
                });
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch4.Threading.TaskTests", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch4.Threading.TaskTests, {
        f1: function (t) {
            eval("throw 'This is a test message'");
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests", {
        methods: {
            Create: function (T) {
                return Bridge.createInstance(T);
            },
            DefaultValueOfStructWithInlineCodeDefaultConstructorWorks_SPI_1610: function () {
                var s1 = Bridge.getDefaultValue(Bridge.ClientTest.Batch4.UserDefinedStructTests.S6);
                var s2 = this.Create(Bridge.ClientTest.Batch4.UserDefinedStructTests.S6);
                // #1610
                Bridge.Test.NUnit.Assert.AreEqual(42, s1.i, "#1");
                Bridge.Test.NUnit.Assert.AreEqual(42, s2.i, "#2");
            },
            DefaultValueOfStructWithInlineCodeDefaultConstructorWorksGeneric_SPI_1610: function () {
                var s1 = Bridge.getDefaultValue(Bridge.ClientTest.Batch4.UserDefinedStructTests.S6G$1(System.Int32));
                var s2 = this.Create(Bridge.ClientTest.Batch4.UserDefinedStructTests.S6G$1(System.Int32));
                // #1610
                Bridge.Test.NUnit.Assert.AreEqual(42, s1.i, "#1");
                Bridge.Test.NUnit.Assert.AreEqual(42, s2.i, "#2");
            },
            CanLiftUserDefinedConversionOperator_SPI_1611: function () {
                var a = new Bridge.ClientTest.Batch4.UserDefinedStructTests.S7.$ctor1(42), b = null;
                var d1 = null;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    d1 = Bridge.ClientTest.Batch4.UserDefinedStructTests.S7.op_Explicit(a);
                });
                Bridge.Test.NUnit.Assert.AreEqual(42, d1, "#1");
                // #1611
                var d2 = 1;
                Bridge.ClientTest.Batch4.TestHelper.Safe(function () {
                    d2 = Bridge.ClientTest.Batch4.UserDefinedStructTests.S7.op_Explicit(b);
                });
                Bridge.Test.NUnit.Assert.Null(d2, "#2");
            },
            AutoEventBackingFieldsAreClonedWhenValueTypeIsCopied_SPI_1612: function () {
                var count = 0;
                var a = function () {
                    Bridge.identity(count, (count = (count + 1) | 0));
                };
                var s1 = new Bridge.ClientTest.Batch4.UserDefinedStructTests.MS1();
                s1.addE(a);
                var s2 = s1.$clone();
                s2.addE(a);

                s1.RaiseE();
                Bridge.Test.NUnit.Assert.AreEqual(1, count);

                s2.RaiseE();
                // #1612
                Bridge.Test.NUnit.Assert.AreEqual(3, count);
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.MS1", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Bridge.ClientTest.Batch4.UserDefinedStructTests.MS1(); }
            }
        },
        fields: {
            i: 0,
            N: null
        },
        events: {
            E: null
        },
        props: {
            P1: null,
            P2: 0
        },
        ctors: {
            init: function () {
                this.N = new Bridge.ClientTest.Batch4.UserDefinedStructTests.MS2();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            RaiseE: function () {
                this.E();
            },
            getHashCode: function () {
                var h = Bridge.addHash([3232589, this.i, this.N, this.P1, this.P2]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.MS1)) {
                    return false;
                }
                return Bridge.equals(this.i, o.i) && Bridge.equals(this.N, o.N) && Bridge.equals(this.P1, o.P1) && Bridge.equals(this.P2, o.P2);
            },
            $clone: function (to) {
                var s = to || new Bridge.ClientTest.Batch4.UserDefinedStructTests.MS1();
                s.i = this.i;
                s.N = this.N.$clone();
                s.P1 = this.P1;
                s.P2 = this.P2;
                return s;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.MS2", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Bridge.ClientTest.Batch4.UserDefinedStructTests.MS2(); }
            }
        },
        fields: {
            i: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([3298125, this.i]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.MS2)) {
                    return false;
                }
                return Bridge.equals(this.i, o.i);
            },
            $clone: function (to) {
                var s = to || new Bridge.ClientTest.Batch4.UserDefinedStructTests.MS2();
                s.i = this.i;
                return s;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.MS3$1", function (T) { return {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (Bridge.ClientTest.Batch4.UserDefinedStructTests.MS3$1(T))(); }
            }
        },
        fields: {
            t: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([3363661, this.t]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.MS3$1(T))) {
                    return false;
                }
                return Bridge.equals(this.t, o.t);
            },
            $clone: function (to) {
                var s = to || new (Bridge.ClientTest.Batch4.UserDefinedStructTests.MS3$1(T))();
                s.t = this.t;
                return s;
            }
        }
    }; });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.MS4", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Bridge.ClientTest.Batch4.UserDefinedStructTests.MS4(); }
            }
        },
        fields: {
            i: 0
        },
        ctors: {
            $ctor1: function (_) {
                Bridge.ClientTest.Batch4.UserDefinedStructTests.MS4.ctor.call(this);
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([3429197, this.i]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.MS4)) {
                    return false;
                }
                return Bridge.equals(this.i, o.i);
            },
            $clone: function (to) {
                var s = to || new Bridge.ClientTest.Batch4.UserDefinedStructTests.MS4();
                s.i = this.i;
                return s;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.S1", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Bridge.ClientTest.Batch4.UserDefinedStructTests.S1(); }
            }
        },
        fields: {
            I: 0
        },
        ctors: {
            $ctor1: function (i) {
                this.$initialize();
                this.I = i;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([12627, this.I]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.S1)) {
                    return false;
                }
                return Bridge.equals(this.I, o.I);
            },
            $clone: function (to) {
                var s = to || new Bridge.ClientTest.Batch4.UserDefinedStructTests.S1();
                s.I = this.I;
                return s;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.S2", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Bridge.ClientTest.Batch4.UserDefinedStructTests.S2(); }
            }
        },
        fields: {
            I: 0,
            D: 0,
            DT: null,
            O: null,
            T: 0
        },
        ctors: {
            init: function () {
                this.DT = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([12883, this.I, this.D, this.DT, this.O, this.T]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.S2)) {
                    return false;
                }
                return Bridge.equals(this.I, o.I) && Bridge.equals(this.D, o.D) && Bridge.equals(this.DT, o.DT) && Bridge.equals(this.O, o.O) && Bridge.equals(this.T, o.T);
            },
            $clone: function (to) {
                var s = to || new Bridge.ClientTest.Batch4.UserDefinedStructTests.S2();
                s.I = this.I;
                s.D = this.D;
                s.DT = this.DT;
                s.O = this.O;
                s.T = this.T;
                return s;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.S2G$1", function (TT) { return {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (Bridge.ClientTest.Batch4.UserDefinedStructTests.S2G$1(TT))(); }
            }
        },
        fields: {
            I: 0,
            D: 0,
            DT: null,
            O: null,
            T: Bridge.getDefaultValue(TT)
        },
        ctors: {
            init: function () {
                this.DT = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([4665939, this.I, this.D, this.DT, this.O, this.T]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.S2G$1(TT))) {
                    return false;
                }
                return Bridge.equals(this.I, o.I) && Bridge.equals(this.D, o.D) && Bridge.equals(this.DT, o.DT) && Bridge.equals(this.O, o.O) && Bridge.equals(this.T, o.T);
            },
            $clone: function (to) {
                var s = to || new (Bridge.ClientTest.Batch4.UserDefinedStructTests.S2G$1(TT))();
                s.I = this.I;
                s.D = this.D;
                s.DT = this.DT;
                s.O = this.O;
                s.T = this.T;
                return s;
            }
        }
    }; });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.S3", {
        $kind: "struct",
        statics: {
            fields: {
                StaticField: 0
            },
            methods: {
                getDefaultValue: function () { return new Bridge.ClientTest.Batch4.UserDefinedStructTests.S3(); }
            }
        },
        fields: {
            I1: 0,
            I2: 0
        },
        ctors: {
            $ctor1: function (i1, i2) {
                this.$initialize();
                this.I1 = i1;
                this.I2 = i2;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([13139, this.I1, this.I2]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.S3)) {
                    return false;
                }
                return Bridge.equals(this.I1, o.I1) && Bridge.equals(this.I2, o.I2);
            },
            $clone: function (to) {
                var s = to || new Bridge.ClientTest.Batch4.UserDefinedStructTests.S3();
                s.I1 = this.I1;
                s.I2 = this.I2;
                return s;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.S4", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Bridge.ClientTest.Batch4.UserDefinedStructTests.S4(); }
            }
        },
        fields: {
            I1: 0,
            I2: 0
        },
        ctors: {
            $ctor1: function (i1, i2) {
                this.$initialize();
                this.I1 = i1;
                this.I2 = i2;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([13395, this.I1, this.I2]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.S4)) {
                    return false;
                }
                return Bridge.equals(this.I1, o.I1) && Bridge.equals(this.I2, o.I2);
            },
            $clone: function (to) {
                var s = to || new Bridge.ClientTest.Batch4.UserDefinedStructTests.S4();
                s.I1 = this.I1;
                s.I2 = this.I2;
                return s;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.S5", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Bridge.ClientTest.Batch4.UserDefinedStructTests.S5(); }
            }
        },
        fields: {
            I: 0
        },
        ctors: {
            $ctor1: function (i) {
                this.$initialize();
                this.I = i;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                return ((this.I + 1) | 0);
            },
            equals: function (o) {
                return Math.abs(((System.Nullable.getValue(Bridge.cast(Bridge.unbox(o), Bridge.ClientTest.Batch4.UserDefinedStructTests.S5)).I - this.I) | 0)) <= 1;
            },
            $clone: function (to) {
                var s = to || new Bridge.ClientTest.Batch4.UserDefinedStructTests.S5();
                s.I = this.I;
                return s;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.S6", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Bridge.ClientTest.Batch4.UserDefinedStructTests.S6(); }
            }
        },
        fields: {
            i: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([13907, this.i]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.S6)) {
                    return false;
                }
                return Bridge.equals(this.i, o.i);
            },
            $clone: function (to) {
                var s = to || new Bridge.ClientTest.Batch4.UserDefinedStructTests.S6();
                s.i = this.i;
                return s;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.S6G$1", function (TT) { return {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (Bridge.ClientTest.Batch4.UserDefinedStructTests.S6G$1(TT))(); }
            }
        },
        fields: {
            i: Bridge.getDefaultValue(TT)
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([4666963, this.i]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.S6G$1(TT))) {
                    return false;
                }
                return Bridge.equals(this.i, o.i);
            },
            $clone: function (to) {
                var s = to || new (Bridge.ClientTest.Batch4.UserDefinedStructTests.S6G$1(TT))();
                s.i = this.i;
                return s;
            }
        }
    }; });

    Bridge.define("Bridge.ClientTest.Batch4.UserDefinedStructTests.S7", {
        $kind: "struct",
        statics: {
            methods: {
                op_Addition: function (a, b) {
                    return new Bridge.ClientTest.Batch4.UserDefinedStructTests.S7.$ctor1(((a.I + b.I) | 0));
                },
                op_UnaryNegation: function (s) {
                    return new Bridge.ClientTest.Batch4.UserDefinedStructTests.S7.$ctor1(((-s.I) | 0));
                },
                op_Explicit: function (s) {
                    return s.I;
                },
                getDefaultValue: function () { return new Bridge.ClientTest.Batch4.UserDefinedStructTests.S7(); }
            }
        },
        fields: {
            I: 0
        },
        ctors: {
            $ctor1: function (i) {
                this.$initialize();
                this.I = i;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([14163, this.I]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Bridge.ClientTest.Batch4.UserDefinedStructTests.S7)) {
                    return false;
                }
                return Bridge.equals(this.I, o.I);
            },
            $clone: function (to) {
                var s = to || new Bridge.ClientTest.Batch4.UserDefinedStructTests.S7();
                s.I = this.I;
                return s;
            }
        }
    });

    var $m = Bridge.setMetadata,
        $n = [System,Bridge.ClientTest.Batch4];
    $m($n[1].DelegateTests, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"A","t":8,"sn":"A","rt":$n[0].Void},{"a":1,"n":"AddForCreateWorks","t":8,"pi":[{"n":"x","pt":$n[0].Int32,"ps":0}],"sn":"AddForCreateWorks","rt":$n[0].Int32,"p":[$n[0].Int32]},{"a":2,"n":"Call","t":8,"pi":[{"n":"t","pt":$n[0].Object,"ps":0},{"n":"d","pt":Function,"ps":1},{"n":"args","ip":true,"pt":$n[0].Array.type(System.Object),"ps":2}],"tpc":0,"def":function (t, d, args) { return d.apply(t, args); },"rt":$n[0].Object,"p":[$n[0].Object,Function,$n[0].Array.type(System.Object)]},{"a":2,"n":"CloneWorks_SPI_1563","t":8,"sn":"CloneWorks_SPI_1563","rt":$n[0].Void},{"a":2,"n":"CloningDelegateToTheSameTypeCreatesANewClone_SPI_1563","t":8,"sn":"CloningDelegateToTheSameTypeCreatesANewClone_SPI_1563","rt":$n[0].Void},{"a":2,"n":"CreateWorks","t":8,"sn":"CreateWorks","rt":$n[0].Void},{"a":2,"n":"EqualityAndInequalityOperatorsAndEqualsMethod_SPI_1563","t":8,"sn":"EqualityAndInequalityOperatorsAndEqualsMethod_SPI_1563","rt":$n[0].Void},{"a":2,"n":"RemoveDoesNotAffectOriginal_SPI_1563","t":8,"sn":"RemoveDoesNotAffectOriginal_SPI_1563","rt":$n[0].Void},{"a":2,"n":"RemoveWorksWithMethodGroupConversion_SPI_1563","t":8,"sn":"RemoveWorksWithMethodGroupConversion_SPI_1563","rt":$n[0].Void},{"a":1,"n":"testField","t":4,"rt":$n[0].Int32,"sn":"testField"}]}; });
});
