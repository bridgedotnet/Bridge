using Bridge;
using Bridge.Test.NUnit;

namespace SomeExternalNamespace
{
    [External]
    public class SomeNonBridgeClass
    {
        public SomeNonBridgeClass()
        {
        }

        public virtual int Foo()
        {
            return 0;
        }
    }
}

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1027]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1027 - {0}")]
    public class Bridge1027
    {
        public class MyClass : SomeExternalNamespace.SomeNonBridgeClass
        {
            public int number;

            public MyClass(int n)
            {
                this.number = n;
            }

            public override int Foo()
            {
                var r = base.Foo();

                return r + 1;
            }
        }

        [Init(InitPosition.Top)]
        public static void Top()
        {
            /*@
            var SomeExternalNamespace = {
                SomeNonBridgeClass: function () {
                }
            };
            SomeExternalNamespace.SomeNonBridgeClass.prototype.foo = function(){return 1;};
            */
        }

        [Test]
        public static void TestNonBridgeInherits()
        {
            var obj = new MyClass(11);
            Assert.AreEqual(11, obj.number);
            Assert.AreEqual(2, obj.Foo());
        }
    }
}