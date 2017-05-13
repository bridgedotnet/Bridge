namespace Functions
{
    public delegate j j(MiddleBit x);

    public class MiddleBit
    {
        public j fn;
    }

    public class Parameters
    {
        // TODO #292
        public int GetSomething(int i = 5)
        {
            return i;
        }

        public string Join(params int[] numbers)
        {
            string s = string.Empty;
            for (int i = 0; i < numbers.Length; i++)
            {
                s = s + numbers[i];
            }

            return s;
        }
    }

    public class Delegates
    {
        public delegate void VoidDelegate();

        public delegate void StringDelegate(string s);

        public delegate int StringDelegateIntResult(string s);
    }

    // TODO
    public interface DelegateInterface
    {
        event Delegates.VoidDelegate MethodVoidDelegate;

        event Delegates.StringDelegate MethodStringDelegate;

        event Delegates.StringDelegateIntResult MethodStringDelegateIntResult;
    }

    public class DelegateClass
    {
        public Delegates.VoidDelegate MethodVoidDelegate;
        public Delegates.StringDelegate MethodStringDelegate;
        public Delegates.StringDelegateIntResult MethodStringDelegateIntResult;
    }
}