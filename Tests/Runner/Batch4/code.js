/**
 * Bridge Test library - general C# language tests for Portarelle
 * @version 16.0.0
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2017 Object.NET, Inc.
 * @compiler Bridge.NET 16.0.0
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

    Bridge.define("Bridge.ClientTest.Batch4.Serialization.JsonTests.TestClass2", {
        fields: {
            i: 0,
            s: null
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.CharTests", {
        methods: {
            TypePropertiesAreInt32_SPI_1603: function () {
                // #1603
                Bridge.Test.NUnit.Assert.False(Bridge.Reflection.isAssignableFrom(System.IFormattable, System.Char));
                var interfaces = Bridge.Reflection.getInterfaces(System.Char);
                Bridge.Test.NUnit.Assert.False(System.Array.contains(interfaces, System.IFormattable, Bridge.global.Function));
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.DateTests", {
        methods: {
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
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests", {
        methods: {
            AssertIsDecimalAndEqualTo: function (v, d) {
                Bridge.Test.NUnit.Assert.True(Bridge.is(v, System.Decimal));
                Bridge.Test.NUnit.Assert.AreStrictEqual(System.Double.format(d), v.toString());
            },
            ConversionsToDecimalWork_SPI_1580: function () {
                var x = 0;

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

                // #1578
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([0,-5]), System.Decimal.toInt(x.sub(System.Decimal(21474836480.9))));
                Bridge.Test.NUnit.Assert.AreEqual(System.Int64([-10,4]), System.Decimal.toInt(x.add(System.Decimal(21474836470.9))));
            },
            DecimalToULong_SPI_1584_1585: function () {
                var x = System.Decimal(0);

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
                var x = System.Decimal(3);
                // #1583
                Bridge.Test.NUnit.Assert.Throws$2(System.DivideByZeroException, function () {
                    var _ = x.div(System.Decimal(0.0));
                });
                this.AssertIsDecimalAndEqualTo(System.Decimal(14.0).mod(x), 2);
                Bridge.Test.NUnit.Assert.Throws$2(System.DivideByZeroException, function () {
                    var _ = x.mod(System.Decimal(0.0));
                });
            },
            LiftedOperatorsWork_SPI_1583: function () {
                var x1 = System.Decimal(3);

                // #1583
                Bridge.Test.NUnit.Assert.Throws$2(System.DivideByZeroException, function () {
                    var _ = System.Nullable.lift2("div", x1, System.Decimal(0.0));
                });
                this.AssertIsDecimalAndEqualTo(System.Nullable.lift2("mod", System.Decimal(14.0), x1), 2);
                Bridge.Test.NUnit.Assert.Throws$2(System.DivideByZeroException, function () {
                    var _ = System.Nullable.lift2("mod", x1, System.Decimal(0.0));
                });
            },
            ParseWorks_SPI_1586: function () {
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

                //Assert.Throws<OverflowException>(() => decimal.Parse("999999999999999999999999999999"));
            },
            TryParseWorks_SPI_1586: function () {
                var d = { };
                var b;

                // #1586
                b = System.Decimal.tryParse("+123.456", null, d);
                Bridge.Test.NUnit.Assert.True(b);
                this.AssertIsDecimalAndEqualTo(d.v, 123.456);

                b = System.Decimal.tryParse("  +123.456  ", null, d);
                Bridge.Test.NUnit.Assert.True(b);
                this.AssertIsDecimalAndEqualTo(d.v, 123.456);

                //b = decimal.TryParse("999999999999999999999999999999", out d);
                //Assert.False(b);
                //AssertIsDecimalAndEqualTo(d, 0);
            },
            ImplementationTests_SPI_1588_1590_1650: function () {
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000000184016013412280", ((System.Decimal("0.00000070385779892274")).mul(System.Decimal("0.00000002614391908336"))).toString(), "(new Decimal(\"0.00000070385779892274\")).mul(\"0.00000002614391908336\").toString() == \"0.0000000000000184016013412280\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000000211764764198660", ((System.Decimal("0.00000000801082840562")).mul(System.Decimal("0.00000264348146628751"))).toString(), "(new Decimal(\"0.00000000801082840562\")).mul(\"0.00000264348146628751\").toString() == \"0.0000000000000211764764198660\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.8703972221908718709658421930", ((System.Decimal("1970.18939162148")).mul(System.Decimal("0.000441783528980698"))).toString(), "(new Decimal(\"1970.18939162148\")).mul(\"0.000441783528980698\").toString() == \"0.8703972221908718709658421930\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0002938065361778543390344760", ((System.Decimal("0.00000388761161541921")).mul(System.Decimal("75.5750741695869"))).toString(), "(new Decimal(\"0.00000388761161541921\")).mul(\"75.5750741695869\").toString() == \"0.0002938065361778543390344760\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("248795975759.24153521774922170", ((System.Decimal("274391.580035161")).mul(System.Decimal("906718.696424141"))).toString(), "(new Decimal(\"274391.580035161\")).mul(\"906718.696424141\").toString() == \"248795975759.24153521774922170\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000667441803526521607590", ((System.Decimal("0.0000688309593912358")).mul(System.Decimal("0.000969682551906296"))).toString(), "(new Decimal(\"0.0000688309593912358\")).mul(\"0.000969682551906296\").toString() == \"0.0000000667441803526521607590\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000001434686776916788182810", ((System.Decimal("4.70885837669897")).mul(System.Decimal("0.0000000304678260025"))).toString(), "(new Decimal(\"4.70885837669897\")).mul(\"0.0000000304678260025\").toString() == \"0.0000001434686776916788182810\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("40912917253931.602151150686830", ((System.Decimal("9044513.99065764")).mul(System.Decimal("4523506.43674075"))).toString(), "(new Decimal(\"9044513.99065764\")).mul(\"4523506.43674075\").toString() == \"40912917253931.602151150686830\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000381173298826073792060", ((System.Decimal("0.701377586322547")).mul(System.Decimal("0.00000005434637579804"))).toString(), "(new Decimal(\"0.701377586322547\")).mul(\"0.00000005434637579804\").toString() == \"0.0000000381173298826073792060\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0007832908360437819528979290", ((System.Decimal("8.61752288817313")).mul(System.Decimal("0.0000908951268488984"))).toString(), "(new Decimal(\"8.61752288817313\")).mul(\"0.0000908951268488984\").toString() == \"0.0007832908360437819528979290\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("16214.400846511121144041207000", ((System.Decimal("7016.24042681243")).mul(System.Decimal("2.31098136040893"))).toString(), "(new Decimal(\"7016.24042681243\")).mul(\"2.31098136040893\").toString() == \"16214.400846511121144041207000\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0344964205226649308283349310", ((System.Decimal("0.0000244098234104038")).mul(System.Decimal("1413.21876617764"))).toString(), "(new Decimal(\"0.0000244098234104038\")).mul(\"1413.21876617764\").toString() == \"0.0344964205226649308283349310\" FAILED");
                // #1650
                Bridge.Test.NUnit.Assert.AreEqual("0.0000000000429259949352215200", ((System.Decimal("0.00000008143559702739")).mul(System.Decimal("0.000527115862130707"))).toString(), "(new Decimal(\"0.00000008143559702739\")).mul(\"0.000527115862130707\").toString() == \"0.0000000000429259949352215200\" FAILED");
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
