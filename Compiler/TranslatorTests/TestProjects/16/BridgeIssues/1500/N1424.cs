//#1424
namespace Test.BridgeIssues.N1424
{
    using Bridge;

    public class Alpha
    {
        // [FieldProperty] with not implemented getter and setter should be compilable
        [FieldProperty]
        public int Data
        {
            get;
            set;
        }
    }

    public class A
    {
        // [FieldProperty] with implemented getter and setter should be compilable with [External] on property declaration
        [FieldProperty]
        [External]
        public int Data
        {
            get { return 7; }
            set { }
        }
    }

    public class B
    {
        // [FieldProperty] with implemented getter and setter should be compilable with [Template]
        [FieldProperty]
        public int Data
        {
            [Template("Q")]
            get { return 8; }
            [Template("W")]
            set { }
        }
    }

    [External]
    public class C
    {
        // [FieldProperty] with implemented getter and setter should be compilable with [External] on class declaration
        [FieldProperty]
        public int Data
        {
            get { return 8; }
            set { }
        }
    }
}
