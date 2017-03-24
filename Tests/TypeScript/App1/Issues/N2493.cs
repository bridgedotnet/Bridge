using Bridge;

namespace TypeScript.Issues
{
    [Namespace(false)]
    public class N2493Operation1
    {
        public int Add(int n)
        {
            return n + 1;
        }
    }

    [Name("Operation2")]
    public class N2493Operation2
    {
        public int Add(int n)
        {
            return n + 2;
        }
    }

    public class N2493Operation3
    {
        public int Add(int n)
        {
            return n + 3;
        }
    }
}