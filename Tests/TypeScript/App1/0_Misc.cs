namespace Misc.A
{
    internal class EnumTest
    {
        public enum EnumA
        {
            M1,
            M2
        }

        public EnumA DoSomething(EnumA m)
        {
            return m;
        }
    }

    public class Class1
    {
        public int GetInt(int i)
        {
            return i;
        }
    }
}

namespace Misc.B
{
    public class Class2 : Misc.A.Class1
    {
    }
}
