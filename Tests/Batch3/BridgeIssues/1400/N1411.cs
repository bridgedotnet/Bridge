using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1411 - {0}")]
    public class Bridge1411
    {
        public class Thing
        {
            public int Data { get; set; }

            [Template("'test_string'")]
            public extern Thing();

            public Thing(int x)
            {
                // 2
                Data = 2;
            }
        }

        public class Doodad : Thing
        {
            public Doodad() : base()
            {
                // 3
                Data = 3;
            }

            public Doodad(int x) : base(x)
            {
                // 4
                Data = 4;
            }
        }

        public class Gizmo
        {
            public int Data { get; set; }

            [Template("'test_gizmo5'")]
            public Gizmo()
            {
                // 5
            }

            [Template("'test_gizmo6'")]
            public Gizmo(int x) : this()
            {
                // 6
                Data = 6;
            }
        }

        [Test]
        public static void TestTemplateCtorThing()
        {
            var c1 = new Thing();
            Assert.AreEqual("test_string", c1);

            var c2 = new Thing(1);
            Assert.True(c2 is Thing);
        }

        [Test]
        public static void TestTemplateCtorDoodad()
        {
            var c1 = new Doodad();
            Assert.True(c1 is Doodad);
            Assert.AreDeepEqual(3, c1.Data);

            var c2 = new Doodad(1);
            Assert.True(c2 is Doodad);
            Assert.AreDeepEqual(4, c2.Data);
        }

        [Test]
        public static void TestTemplateCtorGizmo()
        {
            var c1 = new Gizmo();
            Assert.AreEqual("test_gizmo5", c1);

            var c2 = new Gizmo(1);
            Assert.AreEqual("test_gizmo6", c2);
        }
    }
}