namespace TypeScript.Issues
{
    public class N1060
    {
        public partial class B<T>
        {
            public C GetC()
            {
                return new C();
            }
        }

        public partial class B<T>
        {
            public class C
            {
            }
        }
    }
}