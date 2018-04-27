using System.Threading.Tasks;

namespace TestProject
{
    public class Test
    {
        public static async Task<int> Main(string[] args)
        {
            await Task.Delay(1000);
            return 1;
        }
    }
}