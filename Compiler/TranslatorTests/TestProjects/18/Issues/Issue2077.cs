using Bridge;

namespace TestIssue2077
{
    // #2077
    class Tests
    {
        public static void CheckUnboxAttribute()
        {
            object o = 1;
            int i = 1;
            string s = "2";

            var ext1 = new Ext1();

            // Should have Bridge.unbox(o) in method calls for object parameters
            ext1.DoSomething(o, 1);
            Ext1.DoSomethingStatic(o, i, 1, s, "s");

            // Should NOT have Bridge.unbox(o) in method calls
            ext1.OverriddenUnbox(o);
            Ext1.OverriddenUnboxStatic(o);

            var ext2 = new Ext2();

            // Should NOT have Bridge.unbox(o) in method calls for object parameters
            ext2.DoSomething(o, 2);
            Ext2.DoSomethingStatic(o, i, 1, s, "s");

            // Should have Bridge.unbox(o) in method calls
            ext2.OverriddenUnbox(o);
            Ext2.OverriddenUnboxStatic(o);

            var ext3 = new Ext3();

            // Should have Bridge.unbox(o) in method calls for object parameters
            ext3.DoSomething(o, 3);
            Ext3.DoSomethingStatic(o, i, 1, s, "s");

            // Should NOT have Bridge.unbox(o) in method calls
            ext3.OverriddenUnbox(o);
            Ext3.OverriddenUnboxStatic(o);
        }
    }

    [External]
    class Ext1
    {
        public static extern void DoSomethingStatic(object parameter, int i, int x, string s1, string s2);
        public extern void DoSomething(object parameter, int i);

        [Unbox(false)]
        public static extern void OverriddenUnboxStatic(object parameter);
        [Unbox(false)]
        public extern void OverriddenUnbox(object parameter);
    }

    [Unbox(false)]
    [External]
    class Ext2
    {
        public static extern void DoSomethingStatic(object parameter, int i, int x, string s1, string s2);
        public extern void DoSomething(object parameter, int i);

        [Unbox(true)]
        public static extern void OverriddenUnboxStatic(object parameter);
        [Unbox(true)]
        public extern void OverriddenUnbox(object parameter);
    }

    [Unbox(true)]
    [External]
    class Ext3
    {
        public static extern void DoSomethingStatic(object parameter, int i, int x, string s1, string s2);
        public extern void DoSomething(object parameter, int i);

        [Unbox(false)]
        public static extern void OverriddenUnboxStatic(object parameter);
        [Unbox(false)]
        public extern void OverriddenUnbox(object parameter);
    }
}
