namespace Test.BridgeIssues.N542
{
    public class Bridge542
    {
        public static string Test1()
        {
            var blable = "";
            /*
                vBoubli (@"/faaa");
            */

            return blable;
        }

        public static string Test2()
        {
            var blable = "";
            /*@
                vBoubli (@"/faaa");
            */

            return blable;
        }
    }
}