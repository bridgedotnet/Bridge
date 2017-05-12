namespace Test.BridgeIssues.N2113
{
    // [#2113] Please consider single-line comment JavaScript inlining
    public class Bridge2113
    {
        public static string Test()
        {
            //@ var tmp1;
            //@ var  tmp2;
            //@ var tmp3; // test
            //@ var tmp4; //@ test

            return "";
        }
    }
}