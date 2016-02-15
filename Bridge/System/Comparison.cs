using Bridge;

namespace System
{
    [Name("Function")]
    public delegate int Comparison<in T>(T x, T y);
}