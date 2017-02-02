using Bridge;

namespace TestMethodsWithNameAttributes
{
    public class Example
    {
        [Name("GetName")]
        public static string GetName() { return "Test"; }

        [Name("GetInstanceName")]
        public string GetInstanceName() { return "Test"; }
    }
}
