using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether a char converted into an
    /// object can be cast back into char.
    /// </summary>
    [TestFixture(TestNameFormat = "#3385 - {0}")]
    public class Bridge3385
    {
        /// <summary>
        /// Just instantiate an object with a 'char' constant then check
        /// whether it can convert back instead of throwing an exception.
        /// </summary>
        [Test]
        public static void TestObjectToChar()
        {
            object a = 'a';
            Assert.AreEqual('a', Convert.ToChar(a), "Char encapsulated in an object can be cast back to a char.");
        }
    }
}