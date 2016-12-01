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

        // [#2113] Please consider single-line comment JavaScript inlining
        public static string Test3()
        {
            //@ var tmp1;
            //@ var  tmp2;
            //@ var tmp3; // test
            //@ var tmp4; //@ test

            return "";
        }
    }
}