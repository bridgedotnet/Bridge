using System;
using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This tests whether the conversion of the ObjectLiteral type into
    /// a string works when there's an implicit operator for comparing
    /// the class instance with a string.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3242 - Test ObjectLiteral with implicit attribution operator - {0}")]
    public class Bridge3242
    {
        /// <summary>
        /// Test class, that implements the implicit string operator.
        /// It also is an ObjectLiteral class.
        /// </summary>
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class MyString
        {
            public MyString(string value)
            {
                Value = value;
            }

            public string Value { get; }

            public static implicit operator string(MyString value)
            {
                return (value == null) ? null : value.Value;
            }
        }

        /// <summary>
        /// Test class, that implements the implicit int operator.
        /// It also is an ObjectLiteral class.
        /// </summary>
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class MyInt
        {
            public MyInt(int value)
            {
                Value = value;
            }

            public int Value { get; }

            public static implicit operator int(MyInt value)
            {
                return (value == null) ? int.MinValue : value.Value;
            }
        }

        /// <summary>
        /// Test class, that implements the implicit double operator.
        /// It also is an ObjectLiteral class.
        /// </summary>
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class MyDbl
        {
            public MyDbl(double value)
            {
                Value = value;
            }

            public double Value { get; }

            public static implicit operator double(MyDbl value)
            {
                return (value == null) ? double.NaN : value.Value;
            }
        }

        /// <summary>
        /// Test class, that implements a generic type operator.
        /// It also is an ObjectLiteral class.
        /// </summary>
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class MyGeneric<T>
        {
            public MyGeneric(T value)
            {
                Value = value;
            }

            public T Value { get; }

            public static implicit operator T(MyGeneric<T> value)
            {
                if (value == null)
                {
                    throw new NullReferenceException();
                }
                return value.Value;
            }
        }

        /// <summary>
        /// The test will then just check whether
        /// </summary>
        [Test]
        public static void TestObjectLiteralOperator()
        {
            // Base variable values to check against:
            string str = "Hello, World!";
            string str2 = "Different hello, world!";
            int int_base = 5;
            float float_base = 5.2F;
            double dbl_base = 5.2;

            // String test
            // Binding the class instance to a specified type variable is
            // important to trigger the actual implicit operator.
            string msg = new MyString(str);
            Assert.AreEqual(str, msg, "String");

            // Integer
            int int_instance = new MyInt(int_base);
            Assert.AreEqual(int_base, int_instance, "Integer");

            // Double
            double dbl_instance = new MyDbl(dbl_base);
            Assert.AreEqual(dbl_base, dbl_instance, "Double");

            // Generic as String
            string msg2 = new MyGeneric<string>(str);
            Assert.AreEqual(str, msg2, "Generic as String");

            // Generic as String, replacing the 'msg' variable from assertion 1 above
            msg = new MyGeneric<string>(str2);
            Assert.AreEqual(str2, msg, "Generic as String, replacing the 'msg' variable from assertion 1 above");

            // Generic as Int
            int int_instance2 = new MyGeneric<int>(int_base);
            Assert.AreEqual(int_base, int_instance2, "Generic as Int");

            // Generic as Float
            float float_gval = new MyGeneric<float>(float_base);
            Assert.AreEqual(float_base, float_gval, "Generic as Float");

            // Generic as Double
            double dbl_gval = new MyGeneric<double>(dbl_base);
            Assert.AreEqual(dbl_base, dbl_gval, "Generic as Double");
        }
    }
}