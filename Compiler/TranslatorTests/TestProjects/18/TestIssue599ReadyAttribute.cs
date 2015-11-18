using Bridge.Html5;

namespace TestIssue599
{
    public class Issue599
    {
        private string _something = "HI!";

        [Ready]
        public static void Main()
        {
            var inst = new Issue599();
        }

        [Ready]
        public void Test()
        {
            Console.WriteLine(_something);
        }
    }
}
