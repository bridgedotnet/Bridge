namespace System.Runtime.CompilerServices
{
    public static class FormattableStringFactory
    {
        public static FormattableString Create(string format, params object[] args)
        {
            return new FormattableStringImpl(format, args);
        }
    }
}
