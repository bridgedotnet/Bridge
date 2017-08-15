namespace Test.BridgeIssues.N447
{
    using Bridge;

    public class N447
    {
        public const int Five = 5;
        public const string Another = "Another";
        public const decimal Ten = 10m;

        [InlineConst]
        public const int InlineFifteen = 15;
        [InlineConst]
        public const string InlineSome = "Some";
        [InlineConst]
        public const decimal InlineHalf = 0.5m;

        public static void CheckInlineExpression()
        {
            var s = Another + InlineSome;
            var i = Five + InlineFifteen;
            var d = Ten + InlineHalf;
        }

        public static void CheckInlineCalls()
        {
            var s = Math447.GetSum(Another, InlineSome);
            var i = Math447.GetSum(Five, InlineFifteen);
            var d = Math447.GetSum(Ten, InlineHalf);
        }
    }

    public class Math447
    {
        public static int GetSum(int a, int b)
        {
            return a + b;
        }

        public static string GetSum(string a, string b)
        {
            return a + b;
        }

        public static decimal GetSum(decimal a, decimal b)
        {
            return a + b;
        }
    }
}
