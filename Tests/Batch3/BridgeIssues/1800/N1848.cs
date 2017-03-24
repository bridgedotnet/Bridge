using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1848 - {0}")]
    public class Bridge1848
    {
        [External]
        public interface ITest
        {
            int GetNewId();

            [FieldProperty]
            string Name { get; }
        }

        [ExternalInterface(true)]
        [Name("Bridge1848_ITest")]
        public interface ITest2
        {
            int GetNewId();

            [FieldProperty]
            string Name { get; }
        }

        [Test]
        public void TestExternalInterfaceProperty()
        {
            /*@Bridge.Bridge1848_ITest = {
                getNewId: function () { return 123; },
                Name: "editor"
            };
            Bridge.Bridge1848_ITest2 = {
                Bridge1848_ITest$getNewId: function () { return 123; },
                Bridge1848_ITest$Name: "editor"
            };*/

            var initialiser = Script.Write<ITest>("Bridge.Bridge1848_ITest");
            Assert.AreEqual(123, initialiser.GetNewId());
            Assert.AreEqual("editor", initialiser.Name);

            var initialiser2 = Script.Write<ITest2>("Bridge.Bridge1848_ITest2");
            Assert.AreEqual(123, initialiser2.GetNewId());
            Assert.AreEqual("editor", initialiser2.Name);
        }
    }
}