using Bridge;

namespace TypeScript.Issues
{
    public class N2463
    {
        [ObjectLiteral]
        public class Dummy
        {
            public int Nothing;
        }

        public static Dummy Do(Dummy dummy)
        {
            dummy.Nothing++;
            return dummy;
        }
    }
}