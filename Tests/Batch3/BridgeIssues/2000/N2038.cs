using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2038 - {0}")]
    public class Bridge2038
    {
        public struct SimpleStruct
        {
            private readonly int field1;

            public SimpleStruct(int f)
            {
                this.field1 = f;
            }

            public static SimpleStruct operator +(SimpleStruct t, int val)
            {
                return new SimpleStruct(t.field1 + 1);
            }

            public void DoubleIncrement()
            {
                this += 1;
                this = this + 1;
            }

            public int GetField()
            {
                return this.field1;
            }
        }

        [Test]
        public static void TestIncrementAssignmentInStructs()
        {
            var ss = new SimpleStruct(5);
            ss.DoubleIncrement();

            Assert.AreEqual(7, ss.GetField());
        }
    }
}