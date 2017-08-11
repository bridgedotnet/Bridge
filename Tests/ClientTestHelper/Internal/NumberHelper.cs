using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTestHelper
{
    public static class NumberHelper
    {
        public static void AssertNumber(object expected, object actual, string message)
        {
            Assert.AreEqual(expected.ToString(), actual.ToString(), message + " representation");
            Assert.AreEqual(expected.GetType().Name, actual.GetType().Name, message + " type");
        }
    }
}