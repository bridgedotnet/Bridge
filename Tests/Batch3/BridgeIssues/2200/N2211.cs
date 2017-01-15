using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2211 - {0}")]
    public class Bridge2211
    {
        public class A
        {
            public A AssistantsRoot;
            public A ParentNode;
            public bool IsAssistantRoot => ParentNode?.AssistantsRoot == this;
        }

        [Test]
        public static void TestConditionAccess()
        {
            Assert.False(new A().IsAssistantRoot);
            Assert.False(new A { ParentNode = new A() }.IsAssistantRoot);

            var a = new A();
            a.ParentNode = new A { AssistantsRoot = a };
            Assert.True(a.IsAssistantRoot);
        }
    }
}