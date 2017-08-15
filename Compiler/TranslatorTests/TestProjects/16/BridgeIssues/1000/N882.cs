namespace Test.BridgeIssues.N882
{
    // #882
    public class Bridge882_Static
    {
        public class Bridge882_A_Static
        {
            static Bridge882_A_Static()
            {
                var a = new[] { 5, 6, 7 };

                foreach (var v in a)
                {

                }
            }
        }

        static Bridge882_Static()
        {
            var a = new[] { 1, 2, 3 };

            foreach (var v in a)
            {

            }
        }
    }

    // #882
    public class Bridge882_Instance
    {
        public class Bridge882_A_Instance
        {
            public Bridge882_A_Instance()
            {
                var a = new[] { 5, 6, 7 };

                foreach (var v in a)
                {

                }
            }
        }

        public Bridge882_Instance()
        {
            var a = new[] { 1, 2, 3 };

            foreach (var v in a)
            {

            }
        }
    }
}
