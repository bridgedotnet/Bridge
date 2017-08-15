//#1215
namespace Test.BridgeIssues.N1215
{
    public class TestExtraBrackets
    {
        public void TestDouble()
        {
            double v = 0;
            v = --v;
            v = ++v;
        }

        public void TestDecimal()
        {
            decimal v = 0;
            v = --v;
            v = ++v;
        }

        public void TestSingle()
        {
            float v = 0;
            v = --v;
            v = ++v;
        }

        public void TestLong()
        {
            long v = 0;
            v = --v;
            v = ++v;
        }
    }
}
