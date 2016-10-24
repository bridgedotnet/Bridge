using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1969 - {0}")]
    public class Bridge1969
    {
        public class Test1
        {
            static Test1()
            {
                buffer += "Test1";
            }
        }

        public class Test2 : Test1
        {
            static Test2()
            {
                buffer += "Test2";
            }
        }

        public class Test3 : Test2
        {
            public static void Foo()
            {
            }

            static Test3()
            {
                buffer += "Test3";
            }
        }

        private static string buffer;
        [Test]
        public void TestCase()
        {
            Bridge1969.buffer = "";
            Test3.Foo();
            Assert.AreEqual("Test3", Bridge1969.buffer);

            Bridge1969.buffer = "";
            var test = new Test3();
            Assert.AreEqual("Test2Test1", Bridge1969.buffer);
        }
    }
}