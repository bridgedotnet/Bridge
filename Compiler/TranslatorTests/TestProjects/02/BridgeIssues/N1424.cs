//#1424
namespace Test.BridgeIssues.N1424
{
    using Bridge;

    public class Alpha
    {
        // "autoPropertyToField" config option with not implemented getter and setter should be compilable
        public int Data
        {
            get;
            set;
        }
    }

    public class A
    {
        // "autoPropertyToField" config option with implemented getter and setter should be compilable with [External] on property declaration
        [External]
        public int Data
        {
            get { return 7; }
            set { }
        }
    }

    public class B
    {
        // "autoPropertyToField" config option with implemented getter and setter should be compilable with [Template]
        public int Data
        {
            [Template("Q")]
            get
            { return 8; }
            [Template("W")]
            set
            { }
        }
    }

    [External]
    public class C
    {
        // "autoPropertyToField" config option with implemented getter and setter should be compilable with [External] on class declaration
        public int Data
        {
            get { return 8; }
            set { }
        }
    }
}
