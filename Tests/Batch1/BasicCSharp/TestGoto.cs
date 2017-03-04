using Bridge.Test.NUnit;

namespace Bridge.ClientTest.BasicCSharp
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Goto - {0}")]
    public class TestGoto
    {
        static int CaseGoto(int choice)
        {
            int cost = 0;
            switch (choice)
            {
                case 10:
                    goto default;
                case 1:
                    cost += 25;
                    break;
                case 15:
                    goto default;
                case 2:
                    cost += 25;
                    goto case 1;
                case 20:
                    goto default;
                case 3:
                    cost += 50;
                    goto case 1;
                default:
                    cost = -1;
                    break;
            }

            return cost;
        }

        static int LabelGoto(int count)
        {
            int j = 1;
            link1:
            j++;
            if (j <= count) goto link1;

            return j;
        }

        static int GotoMethod()
        {
            int dummy = 0;
            for (int a = 0; a < 10; a++)
            {
                for (int y = 0; y < 10; y++)
                {
                    for (int x = 0; x < 10; x++)
                    {
                        if (x == 5 &&
                            y == 5)
                        {
                            goto Outer;
                        }
                    }
                    dummy++;
                }
                Outer:
                continue;
            }
            return dummy;
        }

        [Test]
        public static void TestGotoCase()
        {
            Assert.AreEqual(25, CaseGoto(1));
            Assert.AreEqual(50, CaseGoto(2));
            Assert.AreEqual(75, CaseGoto(3));
            Assert.AreEqual(-1, CaseGoto(4));
            Assert.AreEqual(-1, CaseGoto(10));
            Assert.AreEqual(-1, CaseGoto(15));
            Assert.AreEqual(-1, CaseGoto(20));
        }

        [Test]
        public static void TestGotoLabel()
        {
            Assert.AreEqual(6, LabelGoto(5));
            Assert.AreEqual(11, LabelGoto(10));
            Assert.AreEqual(50, GotoMethod());
        }
    }
}