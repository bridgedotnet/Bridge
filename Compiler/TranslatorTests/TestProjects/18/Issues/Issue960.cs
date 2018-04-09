using Bridge;

//#960
namespace TestIssue960
{
    public class Issue960
    {
        [Bridge.Ready]
        public static void Go()
        {
            var x = new Named("Test");
            // Should not contain generic type parameter
            System.Console.WriteLine(new Example().GetName(x));
        }
    }

    public class Example
    {
        [IgnoreGeneric]
        // Should not contain generic type parameter
        public string GetName<T>(T x) where T : IHaveNamed
        {
            return x.Name;
        }
    }

    public interface IHaveNamed
    {
        string Name { get; }
    }

    public class Named : IHaveNamed
    {
        public Named(string name)
        {
            Name = name;
        }
        public string Name { get; private set; }
    }
}