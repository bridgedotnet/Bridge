using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1526 - {0}")]
    public class Bridge1526
    {

        [Test]
        public static void TestOutInClassMembers()
        {
            Assert.AreEqual(0, StaticMethod(), "StaticMethod");
            Assert.AreEqual(0, StaticProperty1, "StaticProperty1");
            Assert.AreEqual(0, StaticProperty2, "StaticProperty2");
        }

        public static int StaticProperty1
        {
            get
            {
                int levelKey;
                int.TryParse("", out levelKey);

                return levelKey;
            }
        }

        public static int StaticProperty2
        {
            get
            {
                int levelKey = 1;
                int.TryParse("", out levelKey);

                return levelKey;
            }
        }

        public static int StaticMethod()
        {
            int levelKey;
            int.TryParse("", out levelKey);

            return levelKey;
        }

        [Test]
        public void TestRefInClassMembers()
        {
            Assert.AreEqual(1, Property1, "Property1");
            Assert.AreEqual(2, Property2, "Property2");
            Assert.AreEqual(3, Method(), "Method");
            Assert.AreEqual(4, this[0], "Indexer");
        }

        public int Property1
        {
            get
            {
                int i = 1;
                this.RefMethod(ref i);

                return i;
            }
        }

        public int Property2
        {
            get
            {
                int i = 2;
                this.RefMethod(ref i);

                return i;
            }
        }

        public int Method()
        {
            int i = 3;
            this.RefMethod(ref i);

            return i; ;
        }

        public int this[int index]
        {
            get
            {
                int i = 4;
                this.RefMethod(ref i);

                return i;
            }
        }

        int RefMethod(ref int i)
        {
            return i;
        }
    }
}