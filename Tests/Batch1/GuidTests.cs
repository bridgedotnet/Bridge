using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_GUID)]
    [TestFixture(TestNameFormat = "Guid - {0}")]
    public class GuidTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(Guid).FullName, "System.Guid");

            object o = new Guid();
            Assert.True(o is Guid);
            Assert.True(o is IComparable<Guid>);
            Assert.True(o is IEquatable<Guid>);

            Assert.False((object)1 is Guid);
            Assert.False((object)"abcd" is Guid);
            Assert.False((object)"{00000000-0000-0000-0000-000000000000}" is Guid);
        }

        [Test]
        public void DefaultValueWorks()
        {
            object result = default(Guid);
            Assert.True(result is Guid);
            Assert.AreEqual("00000000-0000-0000-0000-000000000000", result.ToString());
        }

        [Test]
        public void CreateInstanceWorks()
        {
            object result = Activator.CreateInstance<Guid>();
            Assert.True(result is Guid);
            Assert.AreEqual("00000000-0000-0000-0000-000000000000", result.ToString());
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            object result = new Guid();
            Assert.True(result is Guid);
            Assert.AreEqual("00000000-0000-0000-0000-000000000000", result.ToString());
        }

        [Test]
        public void EmptyWorks()
        {
            Assert.AreEqual("00000000-0000-0000-0000-000000000000", Guid.Empty.ToString());
        }

        [Test]
        public void ToStringWithoutArgumentsWorks()
        {
            var guid = new Guid("223310CC-1F48-4489-B87E-88C779C77CB3");
            Assert.AreEqual("223310cc-1f48-4489-b87e-88c779c77cb3", guid.ToString());
        }

        [Test]
        public void ByteArrayConstructorWorks()
        {
            var g = new Guid(new byte[] { 0x78, 0x95, 0x62, 0xa8, 0x26, 0x7a, 0x45, 0x61, 0x90, 0x32, 0xd9, 0x1a, 0x3d, 0x54, 0xbd, 0x68 });
            Assert.True((object)g is Guid, "Should be Guid");
            Assert.AreEqual("a8629578-7a26-6145-9032-d91a3d54bd68", g.ToString(), "value");
            Assert.Throws(() => new Guid(new byte[] { 0x78, 0x95, 0x62, 0xa8, 0x26, 0x7a }), typeof(ArgumentException), "Invalid array should throw");
        }

        [Test]
        public void Int32Int16Int16ByteArrayConstructorWorks()
        {
            var g = new Guid((int)0x789562a8, (short)0x267a, (short)0x4561, new byte[] { 0x90, 0x32, 0xd9, 0x1a, 0x3d, 0x54, 0xbd, 0x68 });
            Assert.True((object)g is Guid, "Should be Guid");
            Assert.AreEqual("789562a8-267a-4561-9032-d91a3d54bd68", g.ToString(), "value");
        }

        [Test]
        public void Int32Int16Int16BytesConstructorWorks()
        {
            var g = new Guid((int)0x789562a8, (short)0x267a, (short)0x4561, (byte)0x90, (byte)0x32, (byte)0xd9, (byte)0x1a, (byte)0x3d, (byte)0x54, (byte)0xbd, (byte)0x68);
            Assert.True((object)g is Guid, "Should be Guid");
            Assert.AreEqual("789562a8-267a-4561-9032-d91a3d54bd68", g.ToString(), "value");
        }

        [Test]
        public void UInt32UInt16UInt16BytesConstructorWorks()
        {
            var g = new Guid((uint)0x789562a8, (ushort)0x267a, (ushort)0x4561, (byte)0x90, (byte)0x32, (byte)0xd9, (byte)0x1a, (byte)0x3d, (byte)0x54, (byte)0xbd, (byte)0x68);
            Assert.True((object)g is Guid, "Should be Guid");
            Assert.AreEqual("789562a8-267a-4561-9032-d91a3d54bd68", g.ToString(), "value");
        }

        [Test]
        public void StringConstructorWorks()
        {
            object g1 = new Guid("A6993C0A-A8CB-45D9-994B-90E7203E4FC6");
            object g2 = new Guid("{A6993C0A-A8CB-45D9-994B-90E7203E4FC6}");
            object g3 = new Guid("(A6993C0A-A8CB-45D9-994B-90E7203E4FC6)");
            object g4 = new Guid("A6993C0AA8CB45D9994B90E7203E4FC6");
            Assert.True(g1 is Guid);
            Assert.True(g2 is Guid);
            Assert.True(g3 is Guid);
            Assert.True(g4 is Guid);
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g1.ToString(), "g1");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g2.ToString(), "g2");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g3.ToString(), "g3");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g4.ToString(), "g4");
            Assert.Throws(() => new Guid("x"), typeof(FormatException), "Invalid should throw");
        }

        [Test]
        public void ParseWorks()
        {
            object g1 = Guid.Parse("A6993C0A-A8CB-45D9-994B-90E7203E4FC6");
            object g2 = Guid.Parse("{A6993C0A-A8CB-45D9-994B-90E7203E4FC6}");
            object g3 = Guid.Parse("(A6993C0A-A8CB-45D9-994B-90E7203E4FC6)");
            object g4 = Guid.Parse("A6993C0AA8CB45D9994B90E7203E4FC6");
            Assert.True(g1 is Guid);
            Assert.True(g2 is Guid);
            Assert.True(g3 is Guid);
            Assert.True(g4 is Guid);
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g1.ToString(), "g1");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g2.ToString(), "g2");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g3.ToString(), "g3");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g4.ToString(), "g4");
            Assert.Throws(() => Guid.Parse("x"), typeof(FormatException), "Invalid should throw");
        }

        [Test]
        public void ParseExactWorks()
        {
            object g1 = Guid.ParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "D");
            object g2 = Guid.ParseExact("{A6993C0A-A8CB-45D9-994B-90E7203E4FC6}", "B");
            object g3 = Guid.ParseExact("(A6993C0A-A8CB-45D9-994B-90E7203E4FC6)", "P");
            object g4 = Guid.ParseExact("A6993C0AA8CB45D9994B90E7203E4FC6", "N");
            Assert.True(g1 is Guid);
            Assert.True(g2 is Guid);
            Assert.True(g3 is Guid);
            Assert.True(g4 is Guid);
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g1.ToString(), "g1");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g2.ToString(), "g2");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g3.ToString(), "g3");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g4.ToString(), "g4");
            Assert.Throws(() => Guid.ParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "B"), typeof(FormatException), "Invalid B should throw");
            Assert.Throws(() => Guid.ParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "P"), typeof(FormatException), "Invalid P should throw");
            Assert.Throws(() => Guid.ParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "N"), typeof(FormatException), "Invalid N should throw");
            Assert.Throws(() => Guid.ParseExact("A6993C0AA8CB45D9994B90E7203E4FC6", "D"), typeof(FormatException), "Invalid D should throw");
        }

        [Test]
        public void TryParseWorks()
        {
            Guid g1, g2, g3, g4, g5;
            Assert.True(Guid.TryParse("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", out g1), "g1 result");
            Assert.True(Guid.TryParse("{A6993C0A-A8CB-45D9-994B-90E7203E4FC6}", out g2), "g2 result");
            Assert.True(Guid.TryParse("(A6993C0A-A8CB-45D9-994B-90E7203E4FC6)", out g3), "g3 result");
            Assert.True(Guid.TryParse("A6993C0AA8CB45D9994B90E7203E4FC6", out g4), "g4 result");
            Assert.False(Guid.TryParse("x", out g5), "Invalid should throw");
            Assert.True((object)g1 is Guid, "g1 is Guid");
            Assert.True((object)g2 is Guid, "g2 is Guid");
            Assert.True((object)g3 is Guid, "g3 is Guid");
            Assert.True((object)g4 is Guid, "g4 is Guid");
            Assert.True((object)g5 is Guid, "g5 is Guid");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g1.ToString(), "g1");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g2.ToString(), "g2");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g3.ToString(), "g3");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g4.ToString(), "g4");
            Assert.AreEqual("00000000-0000-0000-0000-000000000000", g5.ToString(), "g5");
        }

        [Test]
        public void TryParseExactWorks()
        {
            Guid g1, g2, g3, g4, g5, g6, g7, g8;
            Assert.True(Guid.TryParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "D", out g1), "g1 result");
            Assert.True(Guid.TryParseExact("{A6993C0A-A8CB-45D9-994B-90E7203E4FC6}", "B", out g2), "g2 result");
            Assert.True(Guid.TryParseExact("(A6993C0A-A8CB-45D9-994B-90E7203E4FC6)", "P", out g3), "g3 result");
            Assert.True(Guid.TryParseExact("A6993C0AA8CB45D9994B90E7203E4FC6", "N", out g4), "g4 result");
            Assert.False(Guid.TryParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "B", out g5), "g5 result");
            Assert.False(Guid.TryParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "P", out g6), "g6 result");
            Assert.False(Guid.TryParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "N", out g7), "g7 result");
            Assert.False(Guid.TryParseExact("A6993C0AA8CB45D9994B90E7203E4FC6", "D", out g8), "g8 result");
            Assert.True((object)g1 is Guid);
            Assert.True((object)g2 is Guid);
            Assert.True((object)g3 is Guid);
            Assert.True((object)g4 is Guid);
            Assert.True((object)g5 is Guid);
            Assert.True((object)g6 is Guid);
            Assert.True((object)g7 is Guid);
            Assert.True((object)g8 is Guid);
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g1.ToString(), "g1");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g2.ToString(), "g2");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g3.ToString(), "g3");
            Assert.AreEqual("a6993c0a-a8cb-45d9-994b-90e7203e4fc6", g4.ToString(), "g4");
            Assert.AreEqual("00000000-0000-0000-0000-000000000000", g5.ToString(), "g5");
            Assert.AreEqual("00000000-0000-0000-0000-000000000000", g6.ToString(), "g6");
            Assert.AreEqual("00000000-0000-0000-0000-000000000000", g7.ToString(), "g7");
            Assert.AreEqual("00000000-0000-0000-0000-000000000000", g8.ToString(), "g8");
        }

        [Test]
        public void CompareToWorks()
        {
            var g = new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C");
            Assert.AreEqual(0, g.CompareTo(new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C")), "equal");
            Assert.AreNotEqual(0, g.CompareTo(new Guid("E4C221BE-9B39-4398-B82A-48BA4648CAE0")), "not equal");
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            var g = (IComparable<Guid>)new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C");
            Assert.AreEqual(0, g.CompareTo(new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C")), "Equal");
            Assert.AreNotEqual(0, g.CompareTo(new Guid("E4C221BE-9B39-4398-B82A-48BA4648CAE0")), "Not equal");
        }

        [Test]
        public void EqualsObjectWorks()
        {
            var g = new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C");
            Assert.True(g.Equals((object)new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C")), "Equal");
            Assert.False(g.Equals((object)new Guid("E4C221BE-9B39-4398-B82A-48BA4648CAE0")), "Not equal");
            Assert.False(g.Equals("X"), "Not equal");
        }

        [Test]
        public void EqualsGuidWorks()
        {
            var g = new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C");
            Assert.True(g.Equals(new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C")), "Equal");
            Assert.False(g.Equals(new Guid("E4C221BE-9B39-4398-B82A-48BA4648CAE0")), "Not equal");
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            var g = (IEquatable<Guid>)new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C");
            Assert.True(g.Equals(new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C")), "Equal");
            Assert.False(g.Equals(new Guid("E4C221BE-9B39-4398-B82A-48BA4648CAE0")), "Not equal");
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(new Guid("f3d8b3c0-88f0-4148-844c-232ed03c153c").GetHashCode(), new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C").GetHashCode());
            Assert.AreNotEqual(new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153D").GetHashCode(), new Guid("F3D8B3C0-88F0-4148-844C-232ED03C153C").GetHashCode());
        }

        [Test]
        public void EqualityOperatorWorks()
        {
            Assert.True(new Guid("D311FC20-D7B6-40B6-88DB-9CD92AED6628") == new Guid("D311FC20-D7B6-40B6-88DB-9CD92AED6628"), "Equal");
            Assert.False(new Guid("D311FC20-D7B6-40B6-88DB-9CD92AED6628") == new Guid("A317804C-A583-4857-804F-A0D276008C82"), "Not equal");
        }

        [Test]
        public void InequalityOperatorWorks()
        {
            Assert.False(new Guid("D311FC20-D7B6-40B6-88DB-9CD92AED6628") != new Guid("D311FC20-D7B6-40B6-88DB-9CD92AED6628"), "Equal");
            Assert.True(new Guid("D311FC20-D7B6-40B6-88DB-9CD92AED6628") != new Guid("A317804C-A583-4857-804F-A0D276008C82"), "Not equal");
        }

        [Test]
        public void ToStringWithFormatWorks()
        {
            var g = new Guid("DE33AC65-09CB-465C-AD7E-53124B2104E8");
            Assert.AreEqual("de33ac6509cb465cad7e53124b2104e8", g.ToString("N"), "N");
            Assert.AreEqual("de33ac65-09cb-465c-ad7e-53124b2104e8", g.ToString("D"), "D");
            Assert.AreEqual("{de33ac65-09cb-465c-ad7e-53124b2104e8}", g.ToString("B"), "B");
            Assert.AreEqual("(de33ac65-09cb-465c-ad7e-53124b2104e8)", g.ToString("P"), "P");
            Assert.AreEqual("de33ac65-09cb-465c-ad7e-53124b2104e8", g.ToString(""), "empty");
            Assert.AreEqual("de33ac65-09cb-465c-ad7e-53124b2104e8", g.ToString(null), "null");
        }

        [Test]
        public void NewGuidWorks()
        {
            var d = new Dictionary<string, object>();
            for (int i = 0; i < 1000; i++)
            {
                var g = Guid.NewGuid();
                Assert.True((object)g is Guid, "Generated Guid should be Guid");
                string s = g.ToString("N");
                Assert.True(s[16] == '8' || s[16] == '9' || s[16] == 'a' || s[16] == 'b', "Should be standard guid");
                Assert.True(s[12] == '4', "Should be type 4 guid");
                d[s] = null;
            }
            Assert.AreEqual(1000, d.Count, "No duplicates should have been generated");
        }

        [Test]
        public void ToByteArrayWorks()
        {
            var g = new Guid("8440F854-0C0B-4355-9722-1608D62E8F87");
            Assert.AreEqual(g.ToByteArray(), new byte[] { 0x54, 0xf8, 0x40, 0x84, 0x0b, 0x0c, 0x55, 0x43, 0x97, 0x22, 0x16, 0x08, 0xd6, 0x2e, 0x8f, 0x87 });
        }
    }
}