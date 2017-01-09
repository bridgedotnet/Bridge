using System;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2199 - {0}")]
    public class Bridge2199
    {
        static void AssertTypeName<T>(T value, Type realType)
        {
            Assert.AreEqual(realType, value.GetType());
            Assert.AreEqual(realType, typeof(T));
        }

        [Test]
        public static void TestTypeParameterName()
        {
            ushort x = 2;
            Bridge2199.AssertTypeName(x, typeof(ushort));

            float f = 1.0f;
            Bridge2199.AssertTypeName(f, typeof(float));

            TaskStatus ts = TaskStatus.Running;
            Bridge2199.AssertTypeName(ts, typeof(TaskStatus));

            char c = 'a';
            Bridge2199.AssertTypeName(c, typeof(char));

            long l = 1;
            Bridge2199.AssertTypeName(l, typeof(long));

            decimal d = 10;
            Bridge2199.AssertTypeName(d, typeof(decimal));

            string s = "s";
            Bridge2199.AssertTypeName(s, typeof(string));

        }
    }
}
