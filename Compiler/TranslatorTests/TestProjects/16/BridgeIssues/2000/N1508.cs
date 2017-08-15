//#1508
using System;

namespace Test.BridgeIssues.N1508
{
    public static class App
    {
        public static int[] UpTo(this int value)
        {
            return new int[] { value };
        }

        public static bool DoIt()
        {
            // Should create var $t, $t1, $t2;
            for (int dimensionNActual = 0; dimensionNActual < 4; dimensionNActual++)
            {
                // $t should not be re-created with var
                foreach (var dimensionN in dimensionNActual.UpTo())
                {
                    // $t2 should not be re-created with var
                    Action action;
                    int xOut = 0;
                    action = () => ++xOut;
                    return true;
                }
            }
            return false;
        }
    }
}
