namespace System.Threading
{
    [Bridge.External]
    public static class Timeout
    {
        /// <summary>
        /// A constant used to specify an infinite waiting period, for threading methods that accept an Int32 parameter.
        /// </summary>
        [Bridge.InlineConst]
        public const int Infinite = -1;
    }
}