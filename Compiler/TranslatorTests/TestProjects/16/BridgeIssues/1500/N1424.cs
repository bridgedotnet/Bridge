//#1424
namespace Test.BridgeIssues.N1424
{
    using Bridge;

    public class Alpha
    {
        // [Field] with not implemented getter and setter should be compilable
        [Field]
        public int Data
        {
            get;
            set;
        }
    }

    public class A
    {
        // [Field] with implemented getter and setter should be compilable with [External] on property declaration
        [Field]
        [External]
        public int Data
        {
            get
            {
                return 7;
            }
            set
            {
            }
        }
    }

    public class B
    {
        // [Field] with implemented getter and setter should be compilable with [Template]
        [Field]
        public int Data
        {
            [Template("Q")]
            get
            {
                return 8;
            }
            [Template("W")]
            set
            {
            }
        }
    }

    [External]
    public class C
    {
        // [Field] with implemented getter and setter should be compilable with [External] on class declaration
        [Field]
        public int Data
        {
            get
            {
                return 8;
            }
            set
            {
            }
        }
    }
}