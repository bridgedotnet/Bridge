using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.BasicCSharp
{
    internal class ClassA
    {
        // TODO Add more types
        public static int StatitIntNotInitialized;

        public static string StatitStringNotInitialized;

        public static int StaticInt;
        public static string StaticString;
        public const char CONST_CHAR = 'Q';

        // TODO Add more to check big/small numbers, precision etc
        public const decimal CONST_DECIMAL = 3.123456789324324324m;

        // TODO Add more types
        public int NumberA
        {
            get;
            set;
        }

        public string StringA
        {
            get;
            set;
        }

        public bool BoolA
        {
            get;
            set;
        }

        public double DoubleA
        {
            get;
            set;
        }

        public decimal DecimalA
        {
            get;
            set;
        }

        private Aux1 data;

        public Aux1 Data
        {
            get
            {
                return data;
            }
            set
            {
                data = value;
            }
        }

        static ClassA()
        {
            ClassA.StaticString = "Defined string";
            ClassA.StaticInt = -340;
        }

        public ClassA()
        {
            this.NumberA = 10;
            this.StringA = "Str";
            this.BoolA = true;
            this.DoubleA = Double.PositiveInfinity;
            this.DecimalA = Decimal.MinusOne;
            this.Data = new Aux1()
            {
                Number = 700
            };
        }

        public ClassA(Aux1 d)
            : this()
        {
            if (d == null)
                throw new Exception("Related should not be null");

            this.Data = d;
        }

        // [#89]
        public ClassA(params object[] p)
            : this()
        {
            if (p == null || p.Length < 6)
            {
                throw new Exception("Should pass six parameters");
            }

            if (p[0] is int)
            {
                this.NumberA = (int)p[0];
            }

            if (p[1] is string)
            {
                this.StringA = (string)p[1];
            }

            if (p[2] is bool)
            {
                this.BoolA = (bool)p[2];
            }

            if (p[3] is double)
            {
                this.DoubleA = (double)p[3];
            }

            if (p[4] is decimal)
            {
                this.DecimalA = (decimal)p[4];
            }

            if (p[5] is Aux1)
            {
                this.Data = (Aux1)p[5];
            }
        }

        public ClassA.Aux1 Method1()
        {
            var a1 = new Aux1()
            {
                Number = 1
            };

            return new Aux1()
            {
                Number = 2,
                Related = a1
            };
        }

        public void Method2(ClassA.Aux1 a)
        {
            a.Related = a;
        }

        public string Method3()
        {
            if (this.Data != null)
            {
                return this.Data.ToString();
            }

            return "no data";
        }

        public int Method4(int i, int add)
        {
            i = i + add;
            return i;
        }

        public int Method5(int i = -5)
        {
            return i;
        }

        public int Method5(int i = -50, int k = -60)
        {
            return i + k;
        }

        public static ClassA StaticMethod1(int i, string s, double d)
        {
            ClassA.StatitIntNotInitialized = i;
            ClassA.StatitStringNotInitialized = s;

            return new ClassA()
            {
                DoubleA = d
            };
        }

        // [#89]
        public static ClassA StaticMethod2(params object[] p)
        {
            var i = (int)p[0] + 1000;
            var s = (string)p[1];
            var d = (double)p[2];

            return ClassA.StaticMethod1(i, s, d);
        }

        public static bool TryParse(object o, out int i)
        {
            i = 3;

            return true;
        }

        public static int GetDefaultInt()
        {
            return default(int);
        }

        // due to [#73] needs priority to be generated after the parent class
        // [Priority(-1)]
        public class Aux1
        {
            public int Number
            {
                get;
                set;
            }

            public Aux1 Related
            {
                get;
                set;
            }

            public override string ToString()
            {
                return string.Format("{0} Has related {1}", this.Number, this.Related != null ? this.Related.Number.ToString() : "No");
            }
        }
    }

    // [#68] Multiple field declaration renders incorrectly
    public class Class68
    {
        public int x, y = 1;

        public void Test()
        {
            // Multiple local vars correctly
            int x = 1, y = 2;

            var z = x + y;
        }
    }

    // Tests:
    // Reference type constructors, params method parameters, method overloading, nested classes, [FileName]
    // Full properties, short get/set properties, exceptions
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Reference types - {0}")]
    public class TestReferenceTypes
    {
        // Check instance methods and constructors
        [Test(ExpectedCount = 26)]
        public static void TestInstanceConstructorsAndMethods()
        {
            // Check parameterless constructor
            var a = new ClassA();

            // TEST
            Assert.AreEqual(10, a.NumberA, "NumberA 10");
            Assert.AreEqual("Str", a.StringA, "StringA Str");
            Assert.AreEqual(true, a.BoolA, "BoolA true");
            Assert.True(a.DoubleA == Double.PositiveInfinity, "DoubleA Double.PositiveInfinity");
            Assert.AreDeepEqual(-1m, a.DecimalA, "DecimalA Decimal.MinusOne");
            Assert.True(a.Data != null, "Data not null");
            Assert.AreEqual(700, a.Data.Number, "Data.Number 700");

            // TEST
            // Check constructor with parameter
            Assert.Throws<Exception>(TestSet1FailureHelper.TestConstructor1Failure, "Related should not be null");

            // TEST
            // Check constructor with parameter
            Assert.Throws<Exception>(TestSet1FailureHelper.TestConstructor2Failure, "Should pass six parameters");

            a = new ClassA(150, "151", true, 1.53d, 1.54m, new ClassA.Aux1()
            {
                Number = 155
            });

            Assert.AreEqual(150, a.NumberA, "NumberA 150");
            Assert.AreEqual("151", a.StringA, "StringA 151");
            Assert.AreEqual(true, a.BoolA, "BoolA true");
            Assert.AreEqual(1.53, a.DoubleA, "DoubleA Double.PositiveInfinity");
            Assert.AreDeepEqual(1.54m, a.DecimalA, "DecimalA 154");
            Assert.True(a.Data != null, "Data not null");
            Assert.AreEqual(155, a.Data.Number, "Data.Number 155");

            // TEST
            // Check instance methods
            var b = a.Method1();

            Assert.True(b != null, "b not null");
            Assert.AreEqual(2, b.Number, "b Number 2");
            Assert.True(b.Related != null, "b.Related not null");
            Assert.AreEqual(1, b.Related.Number, "b.Related Number 1");

            a.Data = b;
            Assert.AreEqual("2 Has related 1", a.Method3(), "Method3 2 Has related 1");
            a.Data = null;
            Assert.AreEqual("no data", a.Method3(), "Method3 no data");

            // TEST
            // Check [#68]
            var c68 = new Class68();

            Assert.AreEqual(0, c68.x, "c68.x 0");
            Assert.AreEqual(1, c68.y, "c68.y 1");

            // TEST
            // Check local vars do not get overridden by fields
            c68.Test();

            Assert.AreEqual(0, c68.x, "c68.x 0");
            Assert.AreEqual(1, c68.y, "c68.y 1");
        }

        // Check static methods and constructor
        [Test(ExpectedCount = 14)]
        public static void TestStaticConstructorsAndMethods()
        {
            // TEST
            // Check static fields initialization
            Assert.AreEqual(0, ClassA.StatitIntNotInitialized, "#74 StatitInt not initialized");
            Assert.AreEqual(null, ClassA.StatitStringNotInitialized, "#74 StatitString not initialized");
            Assert.AreEqual(81, ClassA.CONST_CHAR, "#74 CONST_CHAR Q");
            Assert.AreEqual(true, ClassA.CONST_DECIMAL == 3.123456789324324324m, "#74 CONST_DECIMAL 3.123456789324324324m");

            // TEST
            // Check static constructor
            Assert.AreEqual(-340, ClassA.StaticInt, "StatitInt initialized");
            Assert.AreEqual("Defined string", ClassA.StaticString, "StatitString initialized");

            // TEST
            // Check static methods
            var a = ClassA.StaticMethod1(678, "ASD", double.NaN);

            Assert.AreEqual(678, ClassA.StatitIntNotInitialized, "StatitIntNotInitialized 678");
            Assert.AreEqual("ASD", ClassA.StatitStringNotInitialized, "ClassA.StatitStringNotInitialized ASD");
            Assert.AreDeepEqual(double.NaN, a.DoubleA, "DoubleA double.NaN");

            // Adapts test for original call according to the native C# result: (#3613)
            Assert.Throws<System.InvalidCastException>(() => { a = ClassA.StaticMethod2((object)678, "QWE", 234); }, "Casting int to Double throws InvalidCast Exception.");

            // Introduces different test by issue #3613
            a = ClassA.StaticMethod2((object)678, "QWE", 234.0);
            Assert.AreEqual(1678, ClassA.StatitIntNotInitialized, "StatitIntNotInitialized 1678");
            Assert.AreEqual("QWE", ClassA.StatitStringNotInitialized, "ClassA.StatitStringNotInitialized QWE");
            Assert.AreEqual(234, a.DoubleA, "DoubleA 234");

            Assert.Throws<InvalidCastException>(TestSet1FailureHelper.StaticMethod2Failure, "Cast exception should occur");
        }

        // Check default parameters, method parameters, default values
        [Test(ExpectedCount = 16)]
        public static void TestMethodParameters()
        {
            // Check default parameters
            var ra = new ClassA();
            int r = ra.Method5(5);

            Assert.AreEqual(5, r, "r 5");
            r = ra.Method5(i: 15);
            Assert.AreEqual(15, r, "r 15");
            r = ra.Method5(5, 6);
            Assert.AreEqual(11, r, "r 11");
            r = ra.Method5(k: 6);
            Assert.AreEqual(-44, r, "r -44");

            // Check referencing did not change data
            var a = new ClassA();
            var b = a.Method1();
            var c = b.Related;

            a.Method2(b);
            Assert.True(b != null, "b not null");
            Assert.AreEqual(2, b.Number, "b Number 2");
            Assert.True(b.Related != null, "b.Related not null");
            Assert.AreEqual(2, b.Related.Number, "b.Related Number 2");

            Assert.True(c != null, "c not null");
            Assert.AreEqual(1, c.Number, "c Number 1");
            Assert.True(c.Related == null, "c.Related null");

            // Check value local parameter
            var input = 1;
            var result = a.Method4(input, 4);

            Assert.AreEqual(1, input, "input 1");
            Assert.AreEqual(5, result, "result 5");

            // TEST
            // [#86]
            var di = ClassA.GetDefaultInt();
            Assert.AreEqual(0, di, "di 0");

            // TEST
            // Check  "out parameter"
            // [#85]
            int i;
            var tryResult = ClassA.TryParse("", out i);

            Assert.True(tryResult, "tryResult");
            Assert.AreEqual(3, i, "i 3");
        }
    }

    public class TestSet1FailureHelper
    {
        // For testing exception throwing in constructors we need a separate method as constructors cannot be delegates
        public static void TestConstructor1Failure()
        {
            new ClassA((ClassA.Aux1)null);
        }

        public static void TestConstructor2Failure()
        {
            var t = new ClassA(new object[2]);
        }

        public static void StaticMethod2Failure()
        {
            ClassA.StaticMethod2("1", "some string", "345.345435");
        }
    }
}