using Bridge;

namespace N3208_0_originalReport
{
    /// <summary>
    /// This differs from the original report on the issue because this does
    /// not use an UMD module output (which is used in the next test case for
    /// this same issue. The only difference applied here is, the module name
    /// will be output between double quotes.
    /// </summary>
    [Module("N3208_originalReport_module")]
    public class Program
    {
        public static void Main()
        {
            var msg = "Hello, World!";

            System.Console.WriteLine(msg);
        }
    }
}