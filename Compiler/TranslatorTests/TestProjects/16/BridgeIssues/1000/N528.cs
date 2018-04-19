using Bridge;
using System.Threading.Tasks;

namespace Test.BridgeIssues.N528
{
    [Module("Bridge528_A")]
    [ModuleDependency("dep1")]
    public class Bridge528_A
    {

    }

    [Module("Bridge528_B")]
    [ModuleDependency("dep2")]
    public class Bridge528_B
    {

    }

    [Module("Bridge528_C")]
    [ModuleDependency("dep1")]
    public class Bridge528_C
    {

    }
}
