namespace Bridge.ClientTestHelper
{
    using Bridge.Test.NUnit;
    using System;

    public static class CommonHelper
    {
        public static void Safe(Action a, string failMessage = null)
        {
            try
            {
                a();
            }
            catch (Exception ex)
            {
                Assert.Fail(failMessage + ex.ToString());
            }
        }
    }
}