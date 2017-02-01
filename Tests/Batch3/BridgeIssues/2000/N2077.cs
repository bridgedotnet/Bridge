using Bridge.Test.NUnit;

using System;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // #2077
    public class Bridge2077
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
        [TestFixture(TestNameFormat = "#1309 - {0}")]
        public class Bridge1309
        {
            [Test]
            public static void TestBoxedBooleans()
            {
                object val1 = false;
                Assert.True(val1.ToString() == bool.FalseString);

                object val2 = true;
                Assert.True(val2.ToString() == bool.TrueString);
            }
        }

        [Category(Constants.MODULE_ISSUES)]
        [TestFixture(TestNameFormat = "#1312 - {0}")]
        public class Bridge1312
        {
            public enum SimpleEnum
            {
                A,
                B = 3,
                C,
                D = 10
            }

            public enum ByteEnum : byte
            {
                A,
                B = 3,
            }

            [Test]
            public static void TestStringFormatForEnums()
            {
                var r1 = string.Format("{0} {1} {2}", SimpleEnum.A, SimpleEnum.B, SimpleEnum.C);
                Assert.AreEqual("A B C", r1);

                var r2 = string.Format("{0} {1}", ByteEnum.A, ByteEnum.B);
                Assert.AreEqual("A B", r2);

                var r3 = string.Format("{0} {1} {2}", (int)SimpleEnum.A, (int)SimpleEnum.B, (int)SimpleEnum.C);
                Assert.AreEqual("0 3 4", r3);

                var r4 = string.Format("{0} {1}", (int)ByteEnum.A, (int)ByteEnum.B);
                Assert.AreEqual("0 3", r4);
            }
        }

        [Category(Constants.MODULE_ISSUES)]
        [TestFixture(TestNameFormat = "#1317 - {0}")]
        public class Bridge1317
        {
            enum Enum
            {
                English
            }

            [Test]
            public static void TestStringFormatForEnums()
            {
                Bridge.Utils.Console.Instance.BufferedOutput = string.Empty;

                try
                {
                    Console.WriteLine("Language: " + Enum.English);

                    Assert.AreEqual("Language: English", Bridge.Utils.Console.Instance.BufferedOutput);
                }
                finally
                {
                    Bridge.Utils.Console.Instance.BufferedOutput = null;
                    Bridge.Utils.Console.Hide();
                }
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
        [TestFixture(TestNameFormat = "#1248 #1301 #2055 - {0}")]
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

        [Category(Constants.MODULE_ISSUES)]
        [TestFixture(TestNameFormat = "#1514 - {0}")]
        public class Bridge1514
        {
            public static string a = "hello";
            public static readonly string b = "hello";
            public string c = "hello";
            public readonly string d = "hello";

            [Test]
            public void TestBoxedChar()
            {
                Assert.True(a == "hello");
                Assert.True(b == "hello");
                Assert.True(c == "hello");
                Assert.True(d == "hello");
            }
        }

        [Category(Constants.MODULE_ISSUES)]
        [TestFixture(TestNameFormat = "#1347 - {0}")]
        public class Bridge1347
        {
            [Test]
            public void TestFixed()
            {
                var types = new object[]
                {
                    7,
                    (byte)7,
                    7U,
                    7L,
                    7LU,
                    (short)7,
                    (ushort)8,
                    (sbyte)9,
                    3.0,
                    3f,
                    'a',
                    7m,
                    new { Id=3 },
                    new System.Collections.Generic.List<int>{ 1, 2, 3 }
                };

                var expected = new[]
                {
                "System.Int32", "System.Byte", "System.UInt32", "System.Int64", "System.UInt64", "System.Int16", "System.UInt16", "System.SByte",
                "System.Double", "System.Single", "System.Char", "System.Decimal",
                "$AnonymousType$15",
                "System.Collections.Generic.List$1[[System.Int32, mscorlib]]"
                };


                var actual = types.ToList().ConvertAll(v => v.GetType().FullName).ToArray();

                for (int i = 0; i < actual.Length; i++)
                {
                    Assert.AreEqual(expected[i], actual[i], "#" + i);
                }
            }
        }
    }
}