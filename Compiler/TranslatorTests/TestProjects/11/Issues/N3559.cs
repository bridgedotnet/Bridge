namespace Issue3559
{
    /// <summary>
    /// TypeScript reference for type parameters must be wrapped in lt and gt
    /// symbols, not parenthesis.
    /// </summary>
    public class C<S, T>
    {
        public struct R
        {
            public int x;
        }
    }
}
