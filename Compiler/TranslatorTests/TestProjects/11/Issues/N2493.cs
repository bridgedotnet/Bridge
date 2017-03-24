namespace Issue2493
{
    // Classes with no namespace specified should be outside of Issue2493 namespace in JS
    // and outside of Issue2493 module in TypeScript definition

    using Bridge;

    [Namespace(false)]
    public class Operation
    {
        public int Add(int a, int b)
        {
            return a + b;
        }
    }

    [Name("o2")]
    public class Operation2
    {
        public int Add(int a, int b)
        {
            return a + b;
        }
    }

    public class Operation3
    {
        public int Add(int a, int b)
        {
            return a + b;
        }
    }
}
