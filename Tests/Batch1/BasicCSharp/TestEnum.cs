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
            Assert.AreEqual(Digits.Zero, Enum.Parse(typeof(Digits), "Zero"), "Parse Digits.Zero");
            Assert.AreEqual(Digits.One, Enum.Parse(typeof(Digits), "One"), "Parse Digits.One");
            Assert.AreEqual(Digits.Two, Enum.Parse(typeof(Digits), "Two"), "Parse Digits.Two");
            Assert.AreEqual(Pets.Dog | Pets.Cat, Enum.Parse(typeof(Pets), "Dog, Cat"), "Parse Dog, Cat");
            Assert.AreEqual(Pets.Bird | Pets.Cat | Pets.Rabbit, Enum.Parse(typeof(Pets), "Bird, Cat, Rabbit"), "Parse Bird, Cat, Rabbit");

            Assert.Throws(() => { var d = Enum.Parse(typeof(Digits), "ONE"); }, "Parse ONE");
        }

        [Test(ExpectedCount = 4)]
        public static void TestParseIgnoreCase()
        {
            Assert.AreEqual(Digits.Zero, Enum.Parse(typeof(Digits), "zero", true), "Parse Digits.Zero");
            Assert.AreEqual(Digits.One, Enum.Parse(typeof(Digits), "oNe", true), "Parse Digits.One");
            Assert.AreEqual(Digits.Two, Enum.Parse(typeof(Digits), "TWO", true), "Parse Digits.Two");

            Assert.Throws(() => { var d = Enum.Parse(typeof(Digits), "ONN", true); }, "Parse ONN");
        }

        [Test(ExpectedCount = 4)]
        public static void TestToString()
        {
            Assert.AreEqual("Zero", Enum.ToString(typeof(Digits), Digits.Zero), "ToString Digits.Zero");
            Assert.AreEqual("One", Enum.ToString(typeof(Digits), Digits.One), "ToString Digits.One");
            Assert.AreEqual("Two", Enum.ToString(typeof(Digits), Digits.Two), "ToString Digits.Two");
            Assert.AreEqual("150", Enum.ToString(typeof(Digits), (Digits)150), "ToString (Digits)150");
        }

        [Test(ExpectedCount = 2)]
        public static void TestGetValues()
        {
            Assert.AreDeepEqual(new[] { Abc.A, Abc.B, Abc.C }, Enum.GetValues(typeof(Abc)), "Abc values");

            Assert.AreDeepEqual(new[] { Digits.Zero, Digits.One, Digits.Two }, Enum.GetValues(typeof(Digits)), "Digits values");
        }

        [Test(ExpectedCount = 3)]
        public static void TestCompareTo()
        {
            Assert.AreEqual(0, Digits.Two.CompareTo(Digits.Two), "CompareTo Digits.Two with Digits.Two");
            Assert.AreEqual(-1, Digits.One.CompareTo(Digits.Two), "CompareTo Digits.One with Digits.Two");
            Assert.AreEqual(1, Digits.Two.CompareTo(Digits.Zero), "CompareTo Digits.Two with Digits.Zero");
        }

        [Test(ExpectedCount = 22)]
        public static void TestFormat()
        {
            Assert.AreEqual("Two", Enum.Format(typeof(Digits), Digits.Two, "G"), "Format Digits.Two G");
            Assert.AreEqual("Two", Enum.Format(typeof(Digits), Digits.Two, "g"), "Format Digits.Two g");
            Assert.AreEqual("150", Enum.Format(typeof(Digits), (Digits)150, "G"), "Format (Digits)150 G");
            Assert.AreEqual("150", Enum.Format(typeof(Digits), (Digits)150, "g"), "Format (Digits)150 g");
            Assert.AreEqual("Dog, Cat", Enum.Format(typeof(Pets), Pets.Dog | Pets.Cat, "G"), "Format Pets.Dog | Pets.Cat G");
            Assert.AreEqual("Bird, Rabbit, Other", Enum.Format(typeof(Pets), Pets.Bird | Pets.Rabbit | Pets.Other, "g"), "Format Pets.Bird | Pets.Rabbit | Pets.Other g");
            Assert.AreEqual("3", Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "G"), "Format Pets1.Cat | Pets1.Dog G");
            Assert.AreEqual("3", Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "g"), "Format Pets1.Cat | Pets1.Dog g");

            Assert.AreEqual("2", Enum.Format(typeof(Digits), Digits.Two, "X"), "Format Digits.Two X");
            Assert.AreEqual("1", Enum.Format(typeof(Digits), Digits.One, "x"), "Format Digits.One x");
            Assert.AreEqual("ff", Enum.Format(typeof(Digits), (Digits)255, "X"), "Format (Digits)255 X");
            Assert.AreEqual("ff", Enum.Format(typeof(Digits), (Digits)255, "x"), "Format (Digits)255 x");
            Assert.AreEqual("18", Enum.Format(typeof(Pets), Pets.Rabbit | Pets.Other, "X"), "Format Pets.Rabbit | Pets.Other X");
            Assert.AreEqual("10", Enum.Format(typeof(Pets), Pets.Other, "x"), "Format Pets.Other x");

            Assert.AreEqual("2", Enum.Format(typeof(Digits), Digits.Two, "D"), "Format Digits.Two D");
            Assert.AreEqual("1", Enum.Format(typeof(Digits), Digits.One, "d"), "Format Digits.One d");
            Assert.AreEqual("255", Enum.Format(typeof(Digits), (Digits)255, "D"), "Format (Digits)255 D");
            Assert.AreEqual("255", Enum.Format(typeof(Digits), (Digits)255, "d"), "Format (Digits)255 d");
            Assert.AreEqual("24", Enum.Format(typeof(Pets), Pets.Rabbit | Pets.Other, "D"), "Format Pets.Rabbit | Pets.Other D");
            Assert.AreEqual("16", Enum.Format(typeof(Pets), Pets.Other, "d"), "Format Pets.Other d");


            Assert.AreEqual("Dog, Cat", Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "F"), "Format Pets1.Cat | Pets1.Dog F");
            Assert.AreEqual("Dog, Cat", Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "f"), "Format Pets1.Cat | Pets1.Dog f");
        }

        [Test(ExpectedCount = 3)]
        public static void TestGetName()
        {
            Assert.AreEqual("Two", Enum.GetName(typeof(Digits), 2), "GetName 2");
            Assert.AreEqual("One", Enum.GetName(typeof(Digits), 1), "GetName 1");
            Assert.AreEqual(null, Enum.GetName(typeof(Digits), 100), "GetName 100");
        }

        [Test(ExpectedCount = 2)]
        public static void TestGetNames()
        {
            Assert.AreDeepEqual(new[] { "A", "B", "C" }, Enum.GetNames(typeof(Abc)), "Abc names");

            Assert.AreDeepEqual(new[] { "Zero", "One", "Two" }, Enum.GetNames(typeof(Digits)), "Digits names");
        }

        [Test(ExpectedCount = 5)]
        public static void TestHasFlag()
        {
            Assert.AreEqual(true, (Pets.Dog | Pets.Cat).HasFlag(Pets.Cat), "(Pets.Dog | Pets.Cat).HasFlag(Pets.Cat)");
            Assert.AreEqual(true, (Pets.Dog | Pets.Cat).HasFlag(Pets.Dog), "(Pets.Dog | Pets.Cat).HasFlag(Pets.Dog)");
            Assert.AreEqual(false, (Pets.Dog | Pets.Cat).HasFlag(Pets.Bird), "(Pets.Dog | Pets.Cat).HasFlag(Pets.Bird)");
            Assert.AreEqual(true, Pets.Dog.HasFlag(Pets.Dog), "Pets.Dog.HasFlag(Pets.Dog)");
            Assert.AreEqual(false, Pets.Dog.HasFlag(Pets.Cat), "Pets.Dog.HasFlag(Pets.Cat)");
        }

        [Test(ExpectedCount = 6)]
        public static void TestIsDefined()
        {
            Assert.AreEqual(true, Enum.IsDefined(typeof(Pets), 1), "Enum.IsDefined(typeof(Pets), 1)");
            Assert.AreEqual(false, Enum.IsDefined(typeof(Pets), 17), "Enum.IsDefined(typeof(Pets), 17)");
            Assert.AreEqual(true, Enum.IsDefined(typeof(Pets), "Rabbit"), "Enum.IsDefined(typeof(Pets), \"Rabbit\")");
            Assert.AreEqual(false, Enum.IsDefined(typeof(Pets), "Parrot"), "Enum.IsDefined(typeof(Pets), \"Parrot\")");
            Assert.AreEqual(false, Enum.IsDefined(typeof(Pets), "RABBIT"), "Enum.IsDefined(typeof(Pets), \"RABBIT\")");
            Assert.AreEqual(false, Enum.IsDefined(typeof(Pets), Pets.Dog | Pets.Cat), "Enum.IsDefined(typeof(Pets), Pets.Dog | Pets.Cat)");
        }

        [Test(ExpectedCount = 11)]
        public static void TestTryParse()
        {
            Digits outVar;
            Pets outPets;
            Assert.AreEqual(true, Enum.TryParse<Digits>("Zero", out outVar), "TryParse Digits.Zero");
            Assert.AreEqual(Digits.Zero, outVar);
            Assert.AreEqual(true, Enum.TryParse<Digits>("One", out outVar), "TryParse Digits.One");
            Assert.AreEqual(Digits.One, outVar);
            Assert.AreEqual(true, Enum.TryParse<Digits>("Two", out outVar), "TryParse Digits.Two");
            Assert.AreEqual(Digits.Two, outVar);
            Assert.AreEqual(true, Enum.TryParse<Pets>("Dog, Cat", out outPets), "TryParse Dog, Cat");
            Assert.AreEqual(Pets.Dog | Pets.Cat, outPets);
            Assert.AreEqual(true, Enum.TryParse<Pets>("Bird, Cat, Rabbit", out outPets), "TryParse Bird, Cat, Rabbit");
            Assert.AreEqual(Pets.Bird | Pets.Cat | Pets.Rabbit, outPets);
            Assert.AreEqual(false, Enum.TryParse<Digits>("ONE", out outVar), "TryParse ONE");
        }
    }
}
