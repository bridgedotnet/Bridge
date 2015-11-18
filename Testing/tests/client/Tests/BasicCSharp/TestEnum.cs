using Bridge;
using Bridge.QUnit;

using System;

namespace ClientTestLibrary
{
    internal class TestEnum
    {
        [FileName("testEnum.js")]
        enum Digits
        {
            Zero = 0,
            One,
            Two = 2
        }

        [FileName("testEnum.js")]
        enum Abc
        {
            A = -1,
            B,
            C
        }

        [FileName("testEnum.js")]
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

        [FileName("testEnum.js")]
        public enum Pets1
        {
            None = 0,
            Dog = 1,
            Cat = 2,
            Bird = 4,
            Rabbit = 8,
            Other = 16
        }

        public static void TestParse(Assert assert)
        {
            assert.Expect(6);

            assert.Equal(Enum.Parse(typeof(Digits), "Zero"), Digits.Zero, "Parse Digits.Zero");
            assert.Equal(Enum.Parse(typeof(Digits), "One"), Digits.One, "Parse Digits.One");
            assert.Equal(Enum.Parse(typeof(Digits), "Two"), Digits.Two, "Parse Digits.Two");
            assert.Equal(Enum.Parse(typeof(Pets), "Dog, Cat"), Pets.Dog | Pets.Cat, "Parse Dog, Cat");
            assert.Equal(Enum.Parse(typeof(Pets), "Bird, Cat, Rabbit"), Pets.Bird | Pets.Cat | Pets.Rabbit, "Parse Bird, Cat, Rabbit");

            assert.Throws(() => { var d = Enum.Parse(typeof(Digits), "ONE"); }, "Parse ONE");
        }

        public static void TestParseIgnoreCase(Assert assert)
        {
            assert.Expect(4);

            assert.Equal(Enum.Parse(typeof(Digits), "zero", true), Digits.Zero, "Parse Digits.Zero");
            assert.Equal(Enum.Parse(typeof(Digits), "oNe", true), Digits.One, "Parse Digits.One");
            assert.Equal(Enum.Parse(typeof(Digits), "TWO", true), Digits.Two, "Parse Digits.Two");

            assert.Throws(() => { var d = Enum.Parse(typeof(Digits), "ONN", true); }, "Parse ONN");
        }

        public static void TestToString(Assert assert)
        {
            assert.Expect(4);

            assert.Equal(Enum.ToString(typeof(Digits), Digits.Zero), "Zero", "ToString Digits.Zero");
            assert.Equal(Enum.ToString(typeof(Digits), Digits.One), "One", "ToString Digits.One");
            assert.Equal(Enum.ToString(typeof(Digits), Digits.Two), "Two", "ToString Digits.Two");
            assert.Equal(Enum.ToString(typeof(Digits), (Digits)150), "150", "ToString (Digits)150");
        }

        public static void TestGetValues(Assert assert)
        {
            assert.Expect(2);

            assert.DeepEqual(Enum.GetValues(typeof(Abc)), new[] { Abc.A, Abc.B, Abc.C }, "Abc values");

            assert.DeepEqual(Enum.GetValues(typeof(Digits)), new[] { Digits.Zero, Digits.One, Digits.Two }, "Digits values");
        }

        public static void TestCompareTo(Assert assert)
        {
            assert.Expect(3);

            assert.Equal(Digits.Two.CompareTo(Digits.Two), 0, "CompareTo Digits.Two with Digits.Two");
            assert.Equal(Digits.One.CompareTo(Digits.Two), -1, "CompareTo Digits.One with Digits.Two");
            assert.Equal(Digits.Two.CompareTo(Digits.Zero), 1, "CompareTo Digits.Two with Digits.Zero");
        }

        public static void TestFormat(Assert assert)
        {
            assert.Expect(22);

            assert.Equal(Enum.Format(typeof(Digits), Digits.Two, "G"), "Two", "Format Digits.Two G");
            assert.Equal(Enum.Format(typeof(Digits), Digits.Two, "g"), "Two", "Format Digits.Two g");
            assert.Equal(Enum.Format(typeof(Digits), (Digits)150, "G"), "150", "Format (Digits)150 G");
            assert.Equal(Enum.Format(typeof(Digits), (Digits)150, "g"), "150", "Format (Digits)150 g");
            assert.Equal(Enum.Format(typeof(Pets), Pets.Dog | Pets.Cat, "G"), "Dog, Cat", "Format Pets.Dog | Pets.Cat G");
            assert.Equal(Enum.Format(typeof(Pets), Pets.Bird | Pets.Rabbit | Pets.Other, "g"), "Bird, Rabbit, Other", "Format Pets.Bird | Pets.Rabbit | Pets.Other g");
            assert.Equal(Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "G"), "3", "Format Pets1.Cat | Pets1.Dog G");
            assert.Equal(Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "g"), "3", "Format Pets1.Cat | Pets1.Dog g");

            assert.Equal(Enum.Format(typeof(Digits), Digits.Two, "X"), "2", "Format Digits.Two X");
            assert.Equal(Enum.Format(typeof(Digits), Digits.One, "x"), "1", "Format Digits.One x");
            assert.Equal(Enum.Format(typeof(Digits), (Digits)255, "X"), "ff", "Format (Digits)255 X");
            assert.Equal(Enum.Format(typeof(Digits), (Digits)255, "x"), "ff", "Format (Digits)255 x");
            assert.Equal(Enum.Format(typeof(Pets), Pets.Rabbit | Pets.Other, "X"), "18", "Format Pets.Rabbit | Pets.Other X");
            assert.Equal(Enum.Format(typeof(Pets), Pets.Other, "x"), "10", "Format Pets.Other x");

            assert.Equal(Enum.Format(typeof(Digits), Digits.Two, "D"), "2", "Format Digits.Two D");
            assert.Equal(Enum.Format(typeof(Digits), Digits.One, "d"), "1", "Format Digits.One d");
            assert.Equal(Enum.Format(typeof(Digits), (Digits)255, "D"), "255", "Format (Digits)255 D");
            assert.Equal(Enum.Format(typeof(Digits), (Digits)255, "d"), "255", "Format (Digits)255 d");
            assert.Equal(Enum.Format(typeof(Pets), Pets.Rabbit | Pets.Other, "D"), "24", "Format Pets.Rabbit | Pets.Other D");
            assert.Equal(Enum.Format(typeof(Pets), Pets.Other, "d"), "16", "Format Pets.Other d");


            assert.Equal(Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "F"), "Dog, Cat", "Format Pets1.Cat | Pets1.Dog F");
            assert.Equal(Enum.Format(typeof(Pets1), Pets1.Cat | Pets1.Dog, "f"), "Dog, Cat", "Format Pets1.Cat | Pets1.Dog f");
        }

        public static void TestGetName(Assert assert)
        {
            assert.Expect(3);

            assert.Equal(Enum.GetName(typeof(Digits), 2), "Two", "GetName 2");
            assert.Equal(Enum.GetName(typeof(Digits), 1), "One", "GetName 1");
            assert.Equal(Enum.GetName(typeof(Digits), 100), null, "GetName 100");
        }

        public static void TestGetNames(Assert assert)
        {
            assert.Expect(2);

            assert.DeepEqual(Enum.GetNames(typeof(Abc)), new[] { "A", "B", "C" }, "Abc names");

            assert.DeepEqual(Enum.GetNames(typeof(Digits)), new[] { "Zero", "One", "Two" }, "Digits names");
        }

        public static void TestHasFlag(Assert assert)
        {
            assert.Expect(5);

            assert.Equal((Pets.Dog | Pets.Cat).HasFlag(Pets.Cat), true, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Cat)");
            assert.Equal((Pets.Dog | Pets.Cat).HasFlag(Pets.Dog), true, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Dog)");
            assert.Equal((Pets.Dog | Pets.Cat).HasFlag(Pets.Bird), false, "(Pets.Dog | Pets.Cat).HasFlag(Pets.Bird)");
            assert.Equal(Pets.Dog.HasFlag(Pets.Dog), true, "Pets.Dog.HasFlag(Pets.Dog)");
            assert.Equal(Pets.Dog.HasFlag(Pets.Cat), false, "Pets.Dog.HasFlag(Pets.Cat)");
        }

        public static void TestIsDefined(Assert assert)
        {
            assert.Expect(6);

            assert.Equal(Enum.IsDefined(typeof(Pets), 1), true, "Enum.IsDefined(typeof(Pets), 1)");
            assert.Equal(Enum.IsDefined(typeof(Pets), 17), false, "Enum.IsDefined(typeof(Pets), 17)");
            assert.Equal(Enum.IsDefined(typeof(Pets), "Rabbit"), true, "Enum.IsDefined(typeof(Pets), \"Rabbit\")");
            assert.Equal(Enum.IsDefined(typeof(Pets), "Parrot"), false, "Enum.IsDefined(typeof(Pets), \"Parrot\")");
            assert.Equal(Enum.IsDefined(typeof(Pets), "RABBIT"), false, "Enum.IsDefined(typeof(Pets), \"RABBIT\")");
            assert.Equal(Enum.IsDefined(typeof(Pets), Pets.Dog | Pets.Cat), false, "Enum.IsDefined(typeof(Pets), Pets.Dog | Pets.Cat)");
        }

        public static void TestTryParse(Assert assert)
        {
            assert.Expect(11);

            Digits outVar;
            Pets outPets;
            assert.Equal(Enum.TryParse<Digits>("Zero", out outVar), true, "TryParse Digits.Zero");
            assert.Equal(outVar, Digits.Zero);
            assert.Equal(Enum.TryParse<Digits>("One", out outVar), true, "TryParse Digits.One");
            assert.Equal(outVar, Digits.One);
            assert.Equal(Enum.TryParse<Digits>("Two", out outVar), true, "TryParse Digits.Two");
            assert.Equal(outVar, Digits.Two);
            assert.Equal(Enum.TryParse<Pets>("Dog, Cat", out outPets), true, "TryParse Dog, Cat");
            assert.Equal(outPets, Pets.Dog | Pets.Cat);
            assert.Equal(Enum.TryParse<Pets>("Bird, Cat, Rabbit", out outPets), true, "TryParse Bird, Cat, Rabbit");
            assert.Equal(outPets, Pets.Bird | Pets.Cat | Pets.Rabbit);
            assert.Equal(Enum.TryParse<Digits>("ONE", out outVar), false, "TryParse ONE");
        }
    }
}
