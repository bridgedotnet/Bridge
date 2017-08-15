//#1212
namespace Test.BridgeIssues.N1212
{
    public class TestIncrementDecrement
    {
        public void TestDouble()
        {
            double v = 0;
            v++;
            v--;
            v = v--;
            v = --v;
            v = v++;
            v = ++v;
            var v1 = v++;
            var v2 = v--;
            var v3 = ++v;
            var v4 = --v;
        }

        public void TestDecimal()
        {
            decimal v = 0;
            v++;
            v--;
            v = v--;
            v = --v;
            v = v++;
            v = ++v;
            var v1 = v++;
            var v2 = v--;
            var v3 = ++v;
            var v4 = --v;
        }

        public void TestSingle()
        {
            float v = 0;
            v++;
            v--;
            v = v--;
            v = --v;
            v = v++;
            v = ++v;
            var v1 = v++;
            var v2 = v--;
            var v3 = ++v;
            var v4 = --v;
        }

        public void TestLong()
        {
            long v = 0;
            v++;
            v--;
            v = v--;
            v = --v;
            v = v++;
            v = ++v;
            var v1 = v++;
            var v2 = v--;
            var v3 = ++v;
            var v4 = --v;
        }
    }
}
