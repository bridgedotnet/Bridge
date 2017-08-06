using Bridge.Test.NUnit;
using System.Runtime.CompilerServices;

namespace Bridge.ClientTest.Runtime.CompilerServices
{
    [Category(Constants.MODULE_RUNTIME)]
    [TestFixture]
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
        public void GetHashCodeWoksForObject_SPI_1570()
        {
            // #1570
            object o1 = new object(), o2 = new object();
            Assert.AreEqual(RuntimeHelpers.GetHashCode(o1), o1.GetHashCode());
            Assert.AreEqual(o2.GetHashCode(), RuntimeHelpers.GetHashCode(o2));
        }

        //[Test]
        //public void GetHashCodeCallsGetHashCodeNonVirtually_SPI_1570()
        //{
        //    // #1570
        //    bool isOK = false;
        //    for (int i = 0; i < 3; i++)
        //    {
        //        // Since we might be unlucky and roll a 0 hash code, try 3 times.
        //        var c = new C();
        //        if (RuntimeHelpers.GetHashCode(c) != 0)
        //        {
        //            isOK = true;
        //            break;
        //        }
        //    }
        //    Assert.True(isOK, "GetHashCode should be invoked non-virtually");
        //}
    }
}