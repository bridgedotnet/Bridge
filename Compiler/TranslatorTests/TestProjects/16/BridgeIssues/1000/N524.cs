using Bridge;

namespace Test.BridgeIssues.N524
{
    internal class Bridge524
    {
        [External]
        public class ImmutableList<T>
        {
            /// <summary>
            /// This should never be instantiated directly
            /// </summary>
            public ImmutableList() { }

            public extern T this[int index]
            {
                [Name("get")]
                get;
            }

            public extern int Count
            {
                [Name("count")]
                get;
            }

            [External]
            public extern ImmutableList<T> push(params T[] values);

            [External]
            public extern T[] ToArray();
        }

        public static void CallAsGetter()
        {
            var list = new ImmutableList<int>();
            var firstValue = list[0];
        }
    }
}
