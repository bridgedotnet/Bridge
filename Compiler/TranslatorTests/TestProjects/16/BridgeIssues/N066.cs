namespace Test.BridgeIssues.N066
{
    // [#66]
    public struct Rectangle66
    {
        public Rectangle66(int x1)
        {
            this = new Rectangle66();
        }

        public Rectangle66(int x1, int x2)
        {
        }
    }
}
