//#1537
using Bridge;

namespace Test.BridgeIssues.N1537
{
    [Priority(-100)]
    public class PlaceMeToTheEnd
    {
    }

    public class A
    {
        public int Property
        {
            get
            {
                // Classes should be in the order A -> B -> C -> PlaceMeToTheEnd
                return 1;
            }
        }
    }
    public class B : A
    {
    }
    public class C : B
    {
    }
}
