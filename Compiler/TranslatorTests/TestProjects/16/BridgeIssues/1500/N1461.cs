//#1461
namespace Test.BridgeIssues.N1461
{
    public class CreateAnonymous
    {
        public void Create()
        {
            // The anonymous type name should be  like `$_.$AnonymousType$1` not containig Bridge like `Bridge.$AnonymousType$1`
            var o1 = new { A = 1 };
        }
    }
}
