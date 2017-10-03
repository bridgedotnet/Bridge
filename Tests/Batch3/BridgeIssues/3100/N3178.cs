using System;
using Bridge.Test.NUnit;
using System.Globalization;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3178 - {0}")]
    public class Bridge3178
    {
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public interface IDispatcherAction { }

        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class MyAction : IDispatcherAction
        {
            public MyAction(string value)
            {
                Value = value;
            }
            public string Value { get; }
        }

        [ObjectLiteral]
        [Cast("{this}.Foo != null")]
        public class Derp
        {
            public int Foo { get; set; }
        }

        [Test]
        public void TestObjectLiteralIs()
        {
            var myAction = new MyAction("test");
            Assert.True(myAction is MyAction);
            Assert.NotNull(myAction as MyAction);
            Assert.True(myAction is IDispatcherAction);
            Assert.NotNull(myAction as IDispatcherAction);
        }

        [Test]
        public void TestObjectLiteralCastAttr()
        {
            object o = "string";
            Assert.False(o is Derp);

            o = Script.ToPlainObject(new { });
            Assert.False(o is Derp);

            o = new Derp();
            Assert.False(o is Derp); // no Foo

            o = Script.ToPlainObject(new { Foo = 1 });
            Assert.True(o is Derp);

            o = new Derp { Foo = 2 };
            Assert.True(o is Derp);
        }
    }
}