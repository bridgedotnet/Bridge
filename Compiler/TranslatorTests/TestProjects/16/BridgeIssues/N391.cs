namespace Test.BridgeIssues.N391
{
    // [#391]
    internal class Class391
    {
        public static void Main()
        {
            var TestArray1 = new[] { "TestA", "TestB", "TestC" };
            var TestArray2 = new[] { "TestA", "TestB", "TestC" };

            bool doSomething = false;
            foreach (var x in TestArray1)
            {
                foreach (var y in TestArray2)
                {
                    doSomething = x.Equals(y);
                }
            }

            foreach (var x in TestArray1)
            {
                foreach (var y in TestArray2)
                {
                    doSomething = x.Equals(y);
                }
            }
        }
    }
}
