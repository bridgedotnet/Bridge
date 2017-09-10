using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTestHelper
{
    public static class NumberHelper
    {
        public static void AssertNumberByRepresentation(object expected, object actual, string message = null)
        {
            var a = actual != null ? actual.ToString() : "[null]";
            var e = expected != null ? expected.ToString() : "[null]";

            Assert.AreEqual(e, a, message + " representation");
        }

        public static void AssertNumber(object expected, object actual, string message = null)
        {
            Assert.AreEqual(expected.GetType().Name, actual.GetType().Name, message + " type");
            Assert.AreEqual(expected.ToString(), actual.ToString(), message + " representation");
        }

        public static void AssertNumberWithEpsilon1<T>(T expected, T actual, string message)
        {
            var useEpsilon = typeof(T) == typeof(double) || typeof(T) == typeof(float);

            if (useEpsilon)
            {
                var epsilon = 1e-1;

                if (typeof(T) == typeof(double))
                {
                    var diff = expected.As<double>() - actual.As<double>();

                    if (diff < 0)
                    {
                        diff = -diff;
                    }

                    if (diff < epsilon)
                    {
                        Assert.True(true, message + expected + " vs " + actual);
                    }
                    else
                    {
                        Assert.AreEqual(expected.ToString(), actual.ToString(), message + "Counted with epsilon: " + epsilon);
                    }
                }
                else
                {
                    var diff = expected.As<float>() - actual.As<float>();

                    if (diff < 0)
                    {
                        diff = -diff;
                    }

                    if (diff < epsilon)
                    {
                        Assert.True(true, message + expected + " vs " + actual);
                    }
                    else
                    {
                        Assert.AreEqual(expected.ToString(), actual.ToString(), message + "Counted with epsilon: " + epsilon);
                    }
                }
            }
            else
            {
                Assert.AreEqual(expected.ToString(), actual.ToString(), message);
            }
        }

        public static void AssertDouble(string expected, double actual, string message = null)
        {
            Assert.AreEqual("Double", actual.GetType().Name, message + " type");
            Assert.AreEqual(expected.ToString(), actual.ToString(), message + " representation");
        }

        public static void AssertDouble(object expected, double actual, string message = null)
        {
            Assert.AreEqual("Double", actual.GetType().Name, message + " type");
            Assert.AreEqual(expected.ToString(), actual.ToString(), message + " representation");
        }

        public static void AssertDoubleWithEpsilon8(double expected, double actual)
        {
            var se = expected.ToString();
            var sa = actual.ToString();

            if (sa == se)
            {
                Assert.True(true, "Actual:" + actual + " vs Expected:" + expected);
                return;
            }

            var diff = actual - expected;
            if (diff < 0)
            {
                diff = -diff;
            }

            Assert.True(diff < 1e-8, "Expected " + expected + " but was " + actual);
        }

        public static void AssertDoubleTryParse(bool r, double expected, string s, string message)
        {
            double actual;
            var b = double.TryParse(s, out actual);

            Assert.AreEqual(r, b, message + " result");
            Assert.AreEqual("Double", actual.GetType().Name, message + " type");
            Assert.AreEqual(expected.ToString(), actual.ToString(), message + " representation");
        }

        public static void AssertFloat(string expected, float actual, string message = null)
        {
            Assert.AreEqual("Single", actual.GetType().Name, message + " type");
            Assert.AreEqual(expected.ToString(), actual.ToString(), message + " representation");
        }

        public static void AssertDecimal(object expected, object actual, string message = null)
        {
            Assert.AreEqual("Decimal", actual.GetType().Name, message + " type");
            Assert.AreEqual(expected.ToString(), actual.ToString(), message + " representation");
        }

        public static void AssertDecimal(string expected, decimal actual, string message = null)
        {
            Assert.AreEqual("Decimal", actual.GetType().Name, message + " type");
            Assert.AreEqual(expected.ToString(), actual.ToString(), message + " representation");
        }

        public static void AssertDecimal(double expected, decimal actual, string message = null)
        {
            Assert.AreEqual("Decimal", actual.GetType().Name, message + " type");
            Assert.AreEqual(expected.ToString(), actual.ToString(), message + " representation");
        }

        public static void AssertLong(object expected, object actual, string message = "")
        {
            Assert.AreEqual("System.Int64", actual.GetType().FullName, message + " type");
            Assert.AreEqual(expected.ToString(), actual.ToString(), message);
        }

        public static void AssertULong(object expected, object actual, string message = "")
        {
            Assert.AreEqual("System.UInt64", actual.GetType().FullName, message + " type");
            Assert.AreEqual(expected.ToString(), actual.ToString(), message);
        }
    }
}