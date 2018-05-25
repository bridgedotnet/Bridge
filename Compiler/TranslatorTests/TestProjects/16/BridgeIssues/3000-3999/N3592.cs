namespace Test.BridgeIssues.N3592
{
    /// <summary>
    /// #3592 ensure System.Diagnostics.Debugger.Break() actually just adds a
    /// 'debugger;' call instead of doing so within another method, ensuring
    /// the code should stop (on browsers supporting the 'debugger' directive)
    /// on the line debugger is called and not within a helper function.
    /// </summary>
    public class N3592
    {
        /// <summary>
        /// Just call Break() and ensure its output is just 'debugger;' in the
        /// output javascript code.
        /// </summary>
        public static void TestBreakOutput()
        {
            // We expect here to have just: debugger;
            System.Diagnostics.Debugger.Break();
        }
    }
}
