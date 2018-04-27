using System.Threading.Tasks;

namespace TestProject
{
    public class Test
    {
        public static async Task<int> Main()
        {
            await Task.Delay(1000);
            return 1;
        }
    }
}