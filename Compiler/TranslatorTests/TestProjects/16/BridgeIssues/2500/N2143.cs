using Bridge;

namespace Test.BridgeIssues.N2143
{
    [IgnoreGeneric]
    class Level1<T>
    {
        public void DoSomething1(T p)
        {
            // Should not contain generic parameter in function
        }

        public class Level2
        {
            public T Value
            {
                get
                {
                    // Should not contain generic parameter in function
                    return default(T);
                }
            }

            public class Level3
            {
                public T Value
                {
                    get
                    {
                        // Should not contain generic parameter in function
                        return default(T);
                    }
                }
            }
        }
    }
}