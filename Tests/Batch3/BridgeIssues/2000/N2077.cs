using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2065 - {0}")]
    public class Bridge2065
    {
        public enum VehicleType
        {
            Car,
            Plane,
            Boat
        }

        [Test]
        public static void TestBoxedEnum()
        {
            VehicleType vehicleType = VehicleType.Boat;
            object box = vehicleType;

            Assert.AreEqual(VehicleType.Boat, vehicleType);
            Assert.AreEqual("Boat", box.ToString());
            Assert.AreEqual("Boat", System.Enum.Parse(typeof(VehicleType), "Boat").ToString());
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1357 - {0}")]
    public class Bridge1357
    {
        [Test]
        public static void TestBoxedValueType()
        {
            object a1 = 7;
            object b1 = 7;
            object c1 = a1;

            var r1 = a1 == b1;
            var r2 = a1 == c1;
            Assert.False(r1);
            Assert.True(r2);
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1292 - {0}")]
    public class Bridge1292
    {
        [Test]
        public static void TestBoxedChar()
        {
            object v = 'a';
            Assert.AreEqual("System.Char", v.GetType().FullName);
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1290 - {0}")]
    public class Bridge1290
    {
        [Test]
        public static void TestBoxedChar()
        {
            object v = 'a';
            Assert.AreEqual("a", v.ToString());
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1301 - {0}")]
    public class Bridge1301
    {
        [Test]
        public static void TestBoxedNumbers()
        {
            object v = (byte)3;
            Assert.AreEqual("System.Byte", v.GetType().FullName);
            v = (uint)3;
            Assert.AreEqual("System.UInt32", v.GetType().FullName);
            v = (ushort)3;
            Assert.AreEqual("System.UInt16", v.GetType().FullName);
            v = (short)3;
            Assert.AreEqual("System.Int16", v.GetType().FullName);
            v = 1.0;
            Assert.AreEqual("System.Double", v.GetType().FullName);
            v = 1f;
            Assert.AreEqual("System.Single", v.GetType().FullName);
        }
    }
}