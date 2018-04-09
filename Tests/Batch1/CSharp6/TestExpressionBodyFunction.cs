using Bridge.Test.NUnit;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Expression-bodied function members - {0}")]
    public class TestExpressionBodyFunction
    {
        [Test]
        public static void TestBasic()
        {
            var point = new Point(1, 2);
            point = point.Move(3, 4);
            Assert.AreEqual(4, point.v1, "Point's 'Move()' expression works for 'v1' member.");
            Assert.AreEqual(6, point.v2, "Point's 'Move()' expression works for 'v2' member.");

            var person = new Person();
            string s = person;
            Assert.AreEqual("Jane Doe", s, "Expression-embodied string attribution operator works.");
            Assert.AreEqual("Jane Doe", person.Name, "Expression-embodied string query works.");
            Assert.NotNull(person[1], "Static indexer expression supports conditions over the index (true condition).");
            Assert.Null(person[0], "Static indexer expression supports conditions over the index (false condition).");

            var complex1 = new Complex(1);
            var complex2 = new Complex(2);

            Assert.AreEqual(2, (complex1 + complex2).v, "Expression embodiment on operator involving complex members works.");
        }

        /// <summary>
        /// Class implementing an "expression-embodied" member to alter the
        /// internal values by integer arithmetic.
        /// </summary>
        internal class Point
        {
            public int v1;
            public int v2;

            public Point Move(int dx, int dy) => new Point(v1 + dx, v2 + dy);

            public Point(int v1, int v2)
            {
                this.v1 = v1;
                this.v2 = v2;
            }
        }

        /// <summary>
        /// Class implementing expression-embodied on different kinds of
        /// members.
        /// </summary>
        internal class Person
        {
            public string First { get; } = "Jane";
            public string Last { get; } = "Doe";

            public static implicit operator string(Person p) => p.First + " " + p.Last;

            public string Name => First + " " + Last;
            public Person this[int id] => id > 0 ? new Person() : null;
        }

        /// <summary>
        /// Class implementing an "expression-embodied" member to alter the
        /// internal values by arbitrary object manipulation.
        /// </summary>
        public class Complex
        {
            public int v;

            public Complex(int v)
            {
                this.v = v;
            }

            public static Complex operator +(Complex a, Complex b) => a.Add(b);

            public Complex Add(Complex b)
            {
                return b;
            }
        }
    }
}