namespace TestProject1
{
    class TestClassA
    {
        /// <summary>
        /// Some property
        /// </summary>
        public int Value1 { get; set; }

        /// <summary>
        /// GetMyValue method
        /// </summary>
        /// <param name="i">Number of somethng</param>
        /// <returns>A good string</returns>
        public string GetMyValue(int i)
        {
            return string.Empty;
        }
    }

#if (TEST1)
    public class ExistsIfTest1Defined { }
#endif
#if (TEST2)
    public class ExistsIfTest2Defined { }
#endif
#if (TEST3)
    public class NotExistsTest3{ }
#endif
}
