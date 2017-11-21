namespace Issue3276
{
    // All supported types should be output to the retyped d.ts output.

    using Bridge;

    public class Program
    {
        /// <summary>
        /// All except decimal (c), long (g) and ulong (k) should
        /// imprint 'number' in the .d.ts file.
        /// </summary>
        public static void Demo(byte a, char b, decimal c, double d, short e,
                                int f, long g, sbyte h, ushort i, uint j,
                                ulong k)
        {
            return;
        }
    }
}
