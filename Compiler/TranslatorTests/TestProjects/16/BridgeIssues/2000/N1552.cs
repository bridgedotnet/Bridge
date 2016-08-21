//#1552
using Bridge;

namespace Test.BridgeIssues.N1552
{
    public class App
    {
        public void Main()
        {
            // Should have initialized like pointer = {v:3}
            Pointer<int> pointer = 3;
            // Should be referencing pointer like pointer.v
            int pointerValue = pointer;
        }
    }

    public class Pointer<T>
    {
        extern Pointer();

        [Template("{v:{value}}")]
        public static extern implicit operator Pointer<T>(T value);
        [Template("{value}.v")]
        public static extern implicit operator T(Pointer<T> value);
    }
}
