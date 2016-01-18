using Bridge;
using Bridge.Test;

using System;

namespace Bridge.ClientTest.BasicCSharp
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Enum - {0}")]
    public class TestEnum
    {
        enum Digits
        {
            Zero = 0,
            One,
            Two = 2
        }

        enum Abc
        {
            A = -1,
            B,
            C
        }

        [Flags]
        public enum Pets
        {
            None = 0,
            Dog = 1,
            Cat = 2,
            Bird = 4,
            Rabbit = 8,
            Other = 16
        }

        public enum Pets1
        {
            None = 0,
            Dog = 1,
            Cat = 2,
            Bird = 4,
            Rabbit = 8,
            Other = 16
        }

        [Test(ExpectedCount = 6)]
        public static void TestParse()
        {
            Assert.AreEqual(Enum.Parse(typeof(Digits), "Zero"), Digits.Zero, "Parse Digits.Zero");
            Assert.AreEqual(Enum.Parse(typeof(Digits), "One"), Digits.One, "Parse Digits.One");
            Assert.AreEqual(Enum.Parse(typeof(Digits), "Two"), Digits.Two, "Parse Digits.Two");
            Assert.AreEqual(Enum.Parse(typeof(Pets), "Dog, Cat"), Pets.Dog | Pets.Cat, "Parse Dog, Cat");
            Assert.AreEqual(Enum.Parse(typeof(Pets), "Bird, Cat, Rabbit"), Pets.Bird | Pets.Cat | Pets.Rabbit, "Parse Bird, Cat, Rabbit");

            Assert.Throws(() => { var d = Enum.Parse(typeof(Digits), "ONE"); }, "Parse ONE");
        }

        [Test(ExpectedCount = 4)]
        public static void TestParseIgnoreCase()
        {
            Assert.AreEqual(Enum.Parse(typeof(Digits), "zero", true), Digits.Zero, "Parse Digits.Zero");
            Assert.AreEqual(Enum.Parse(typeof(Digits), "oNe", true), Digits.One, "Parse Digits.One");
            Assert.AreEqual(Enum.Parse(typeof(Digits), "TWO", true), Digits.Two, "Parse Digits.Two");

            Assert.Throws(() => { var d = Enum.Parse(typeof(Digits), "ONN", true); }, "Parse ONN");
        }

        [Test(ExpectedCount = 4)]
        public static void TestToString()
        {
            Assert.AreEqual(Enum.ToString(typeof(Digits), Digits.Zero), "Zero", "ToString Digits.Zero");
            Assert.AreEqual(Enum.ToString(typeof(Digits), Digits.One), "One", "ToString Digits.One");
            Assert.AreEqual(Enum.ToString(typeof(Digits), Digits.Two), "Two", "ToString Digits.Two");
            Assert.AreEqual(Enum.ToString(typeof(Digits), (Digits)150), "150", "ToString (Digits)150");
        }

        [Test(ExpectedCount = 2)]
        public static void TestGetValues()
        {
            Assert.AreDeepEqual(Enum.GetValues(typeof(Abc)), new[] { Abc.A, Abc.B, Abc.C }, "Abc values");

            Assert.AreDeepEqual(Enum.GetValues(typeof(Digits)), new[] { Digits.Zero, Digits.One, Digits.Two }, "Digits values");
        }

        [Test(ExpectedCount = 3)]
        public static void TestCompareTo()
        {
            Assert.AreEqual(Digits.Two.CompareTo(Digits.Two), 0, "CompareTo Digits.Two with Digits.Two");
            Assert.AreEqual(Digits.One.CompareTo(Digits.Two), -1, "CompareTo Digits.One with Digits.Two");
            Assert.AreEqual(Digits.Two.CompareTo(Digits.Zero), 1, "CompareTo Digits.Two with Digits.Zero");
        }

        [Test(ExpectedCount = 22)]
        public static void TestFormat()
        {
            Assert.AreEqual(Enum.Format(typeof(Digits), Digits.Two, "G"), "Two", "Format Digits.Two G");
            Assert.AreEqual(Enum.Format(typeof(Digits), Digits.Two, "g"), "Two", "Format Digits.Two g");
            Assert.AreEqual(Enum.Format(typeof(Digits), (Digits)150, "G"), "150", "Format (Digits)150 G");
            Assert.AreEqual(Enum.Format(typeof(Digits), (Digits)150, "g"), "150", "Format (Digits)150 g");
            Assert.AreEqual(Enum.Format(typeof(Pets), Pets.Dog | Pets.Cat, "G"), "Dog, Cat", "Format Pets.Dog | Pets.Cat G");
            Assert.AreEqual(Enum.Format(typeof(Pets), Pets.Bird | Pets.Rabbit | Pets.Other, "g"), "Bird, Rabbit, Other", "Format Pets.Bird | Pets.Rabbit | Pets.Other g");
            Assert.AreEqual(Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "G"), "3", "Format Pets1.Cat | Pets1.Dog G");
            Assert.AreEqual(Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "g"), "3", "Format Pets1.Cat | Pets1.Dog g");

            Assert.AreEqual(Enum.Format(typeof(Digits), Digits.Two, "X"), "2", "Format Digits.Two X");
            Assert.AreEqual(Enum.Format(typeof(Digits), Digits.One, "x"), "1", "Format Digits.One x");
            Assert.AreEqual(Enum.Format(typeof(Digits), (Digits)255, "X"), "ff", "Format (Digits)255 X");
            Assert.AreEqual(Enum.Format(typeof(Digits), (Digits)255, "x"), "ff", "Format (Digits)255 x");
            Assert.AreEqual(Enum.Format(typeof(Pets), Pets.Rabbit | Pets.Other, "X"), "18", "Format Pets.Rabbit | Pets.Other X");
            Assert.AreEqual(Enum.Format(typeof(Pets), Pets.Other, "x"), "10", "Format Pets.Other x");

            Assert.AreEqual(Enum.Format(typeof(Digits), Digits.Two, "D"), "2", "Format Digits.Two D");
            Assert.AreEqual(Enum.Format(typeof(Digits), Digits.One, "d"), "1", "Format Digits.One d");
            Assert.AreEqual(Enum.Format(typeof(Digits), (Digits)255, "D"), "255", "Format (Digits)255 D");
            Assert.AreEqual(Enum.Format(typeof(Digits), (Digits)255, "d"), "255", "Format (Digits)255 d");
            Assert.AreEqual(Enum.Format(typeof(Pets), Pets.Rabbit | Pets.Other, "D"), "24", "Format Pets.Rabbit | Pets.Other D");
            Assert.AreEqual(Enum.Format(typeof(Pets), Pets.Other, "d"), "16", "Format Pets.Other d");


            Assert.AreEqual(Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "F"), "Dog, Cat", "Format Pets1.Cat | Pets1.Dog F");
            Assert.AreEqual(Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "f"), "Dog, Cat", "Format Pets1.Cat | Pets1.Dog f");
        }

        [Test(ExpectedCount = 3)]
        public static void TestGetName()
        {
            Assert.AreEqual(Enum.GetName(typeof(Digits), 2), "Two", "GetName 2");
            Assert.AreEqual(Enum.GetName(typeof(Digits), 1), "One", "GetName 1");
            Assert.AreEqual(Enum.GetName(typeof(Digits), 100), null, "GetName 100");
        }

        [Test(ExpectedCount = 2)]
        public static void TestGetNames()
        {
            Assert.AreDeepEqual(Enum.GetNames(typeof(Abc)), new[] { "A", "B", "C" }, "Abc names");

            Assert.AreDeepEqual(Enum.GetNames(typeof(Digits)), new[] { "Zero", "One", "Two" }, "Digits names");
        }

        [Test(ExpectedCount = 5)]
        public static void TestHasFlag()
        {
            Assert.AreEqual((Pets.Dog | Pets.Cat).HasFlag(Pets.Cat), true, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Cat)");
            Assert.AreEqual((Pets.Dog | Pets.Cat).HasFlag(Pets.Dog), true, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Dog)");
            Assert.AreEqual((Pets.Dog | Pets.Cat).HasFlag(Pets.Bird), false, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Bird)");
            Assert.AreEqual(Pets.Dog.HasFlag(Pets.Dog), true, "Pets.Dog.HasFlag(Pets.Dog)");
            Assert.AreEqual(Pets.Dog.HasFlag(Pets.Cat), false, "Pets.Dog.HasFlag(Pets.Cat)");
        }

        [Test(ExpectedCount = 6)]
        public static void TestIsDefined()
        {
            Assert.AreEqual(Enum.IsDefined(typeof(Pets), 1), true, "Enum.IsDefined(typeof(Pets), 1)");
            Assert.AreEqual(Enum.IsDefined(typeof(Pets), 17), false, "Enum.IsDefined(typeof(Pets), 17)");
            Assert.AreEqual(Enum.IsDefined(typeof(Pets), "Rabbit"), true, "Enum.IsDefined(typeof(Pets), \"Rabbit\")");
            Assert.AreEqual(Enum.IsDefined(typeof(Pets), "Parrot"), false, "Enum.IsDefined(typeof(Pets), \"Parrot\")");
            Assert.AreEqual(Enum.IsDefined(typeof(Pets), "RABBIT"), false, "Enum.IsDefined(typeof(Pets), \"RABBIT\")");
            Assert.AreEqual(Enum.IsDefined(typeof(Pets), Pets.Dog | Pets.Cat), false, "Enum.IsDefined(typeof(Pets), Pets.Dog | Pets.Cat)");
        }

        [Test(ExpectedCount = 11)]
        public static void TestTryParse()
        {
            Digits outVar;
            Pets outPets;
            Assert.AreEqual(Enum.TryParse<Digits>("Zero", out outVar), true, "TryParse Digits.Zero");
            Assert.AreEqual(outVar, Digits.Zero);
            Assert.AreEqual(Enum.TryParse<Digits>("One", out outVar), true, "TryParse Digits.One");
            Assert.AreEqual(outVar, Digits.One);
            Assert.AreEqual(Enum.TryParse<Digits>("Two", out outVar), true, "TryParse Digits.Two");
            Assert.AreEqual(outVar, Digits.Two);
            Assert.AreEqual(Enum.TryParse<Pets>("Dog, Cat", out outPets), true, "TryParse Dog, Cat");
            Assert.AreEqual(outPets, Pets.Dog | Pets.Cat);
            Assert.AreEqual(Enum.TryParse<Pets>("Bird, Cat, Rabbit", out outPets), true, "TryParse Bird, Cat, Rabbit");
            Assert.AreEqual(outPets, Pets.Bird | Pets.Cat | Pets.Rabbit);
            Assert.AreEqual(Enum.TryParse<Digits>("ONE", out outVar), false, "TryParse ONE");
        }
    }
}
