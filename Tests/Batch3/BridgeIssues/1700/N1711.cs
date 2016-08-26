using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1711 - {0}")]
    public class Bridge1711
    {
        public class Wrapper
        {
            private uint value;

            public override object ValueOf()
            {
                return value;
            }

            static public implicit operator Wrapper(uint i)
            {
                return new Wrapper() { value = i };
            }

            static public uint Method(Wrapper w)
            {
                return w.value;
            }

            static public void Call()
            {
                uint a = 5u;
                uint b = 6u;
                // At runtime agument type is uint
                // but Wrapper expected; Because >>> 0 extract value with ValueOf method
                Assert.AreEqual(7, Method(a | b), "First");
                //Agument type is Wrapper as expected;
                Assert.AreEqual(7, Method((a | b)), "Second");
            }
        }

        [Test(ExpectedCount = 2)]
        public void TestImplicitOperatorOrder()
        {
            Wrapper.Call();
        }
    }
}