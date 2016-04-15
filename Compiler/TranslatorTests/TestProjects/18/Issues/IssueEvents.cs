using Bridge.Html5;

namespace TestIssueEvents
{
    public class IssueEvents
    {

        public delegate bool SomeDel();

        class NotWorking<T>
        {
            public event SomeDel IsNotWorking;
        }
        
        [Ready]
        public static void Main()
        {
            var wrong = new NotWorking<int>();
            wrong.IsNotWorking += () => true;
        }
    }
}
