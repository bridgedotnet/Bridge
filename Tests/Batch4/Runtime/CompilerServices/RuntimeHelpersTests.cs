using Bridge.Test.NUnit;
using System.Runtime.CompilerServices;

namespace Bridge.ClientTest.Batch4.Runtime.CompilerServices
{
    [TestFixture(TestNameFormat = "RuntimeHelpersTests - {0}")]
    public class RuntimeHelpersTests
    {
        private class C
        {
            public override int GetHashCode()
            {
                return 0;
            }
        }

        [Test]
        public void GetHashCodeCallsGetHashCodeNonVirtually_SPI_1570()
        {
            // #1570
            bool isOK = false;
            for (int i = 0; i < 3; i++)
            {
                // Since we might be unlucky and roll a 0 hash code, try 3 times.
                var c = new C();
                if (RuntimeHelpers.GetHashCode(c) != 0)
                {
                    isOK = true;
                    break;
                }
            }
            Assert.True(isOK, "GetHashCode should be invoked non-virtually");
        }
    }
}