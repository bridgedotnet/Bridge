using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2080 - {0}")]
    public class Bridge2080
    {
        public static bool TestProperty1
        {
            get; set;
        }

        class TestClass
        {
            public bool TestProperty
            {
                get; set;
            }
        }

        [Test]
        public static void TestAssigmentOrWithProperty()
        {
            bool testVariable = true;
            bool newValue1 = false;
            testVariable |= newValue1;
            Assert.True(testVariable);

            TestClass myTestClass = new TestClass();
            myTestClass.TestProperty = true;
            bool newValue2 = false;
            myTestClass.TestProperty |= newValue2;
            Assert.True(myTestClass.TestProperty);

            TestProperty1 = true;
            bool newValue3 = false;
            TestProperty1 |= newValue3;
            Assert.True(TestProperty1);
        }

        class TestClass2
        {
            public static int GetCount = 0;

            private bool b = false;
            public bool TestProperty
            {
                get
                {

                    GetCount++;
                    return b;
                }
                set
                {
                    b = value;
                }
            }
        }

        [Test]
        public static void TestAssigmentOrWithPropertyChangingCounter()
        {
            var myTestClass = new TestClass2();

            myTestClass.TestProperty = true;
            Assert.AreEqual(0, TestClass2.GetCount);

            bool newValue2 = false;
            myTestClass.TestProperty |= newValue2;
            Assert.AreEqual(1, TestClass2.GetCount);

            Assert.True(myTestClass.TestProperty);
            Assert.AreEqual(2, TestClass2.GetCount);
        }
    }
}