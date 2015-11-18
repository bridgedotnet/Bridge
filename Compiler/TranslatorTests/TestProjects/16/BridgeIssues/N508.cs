using Bridge.Html5;
using System.Threading.Tasks;

namespace Test.BridgeIssues.N508
{
    internal class Bridge508
    {
        public static async void Main()
        {
            await Method1();
        }

        public static async Task Method1()
        {
            for (var np = await InitPage(); np != null; np = await NextPage())
            {
                Console.Log("page1");
            }

            count = 0;
            for (var np = await InitPage(); np != null; np = NextPage1())
            {
                Console.Log("page2");
            }
        }

        public static int count = 0;

        public static async Task<object> InitPage()
        {
            await Task.Delay(100);
            count++;
            return count < 4 ? new { } : null;
        }

        public static async Task<object> NextPage()
        {
            await Task.Delay(100);
            count++;
            return count < 4 ? new { } : null;
        }

        public static object NextPage1()
        {
            count++;
            return count < 4 ? new { } : null;
        }
    }
}
