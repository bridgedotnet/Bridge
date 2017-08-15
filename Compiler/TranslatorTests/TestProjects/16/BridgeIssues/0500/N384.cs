using Bridge;

namespace Test.BridgeIssues.N384
{
    public class Person { }

    [External]
    public static class MyExtensions
    {
        public static string DoSomething(this Person Person)
        {
            return "testing";
        }
    }

    class N384
    {
        public class App
        {
            public static void Main1()
            {
                var person = new Person();

                var msg1 = person.DoSomething();
                var msg2 = MyExtensions.DoSomething(person);
            }
        }
    }
}
