using Bridge.Test.NUnit;
using System.Reflection;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// Tests related to the C# 7.2 feature 'private protected' member 
    /// accessiblity levels.
    /// </summary>
    /// <remarks>
    /// Documentation: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/accessibility-levels
    /// </remarks>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "C# private protected - {0}")]
    public class TestPrivateProtected
    {
        private protected int testField = 2;

        private protected int TestMethod()
        {
            return 1;
        }

        private protected int TestProp
        {
            get;
            set;
        }

        [Reflectable]
        public class Probe
        {
            public int X = 3;
            private protected int Y = 5;
            private protected int Y1 { get; set; }
            private protected void Y2() { }
            private protected class Y3 { }

            private protected struct Y4 { }
        }

        private protected class PublicMember
        {
            public int X = 4;
            private protected int Y = 5;
        }

        /// <summary>
        /// Just check if the members are accessible from within the class
        /// </summary>
        [Test]
        public void TestModifiers()
        {
            Assert.AreEqual(2, testField, "Private protected field works.");
            Assert.AreEqual(1, TestMethod(), "Private protected method works.");
            Assert.AreEqual(0, TestProp, "Private protected property works.");
            Assert.AreEqual(3, new Probe().X, "Public class with public and 'private protected' members works.");
            Assert.AreEqual(4, new PublicMember().X, "Private protected class with public and private-protected members works.");

            var noX = true;
            var noY = true;
            var noY1 = true;
            var noY2 = true;
            var noY3 = true;
            var noY4 = true;

            foreach (var member in typeof(Probe).GetMembers())
            {
                switch (member.Name)
                {
                    case "X":
                        noX = false;
                        break;
                    case "Y":
                        noY = false;
                        break;
                    case "Y1":
                        noY1 = false;
                        break;
                    case "Y2":
                        noY2 = false;
                        break;
                    case "Y3":
                        noY3 = false;
                        break;
                    case "Y4":
                        noY4 = false;
                        break;
                }
            }

            Assert.False(noX, "The public (publicly accessible) member 'X' is returned by reflection's GetMembers()");
            Assert.True(noY, "The 'private protected' (Family+Assembly accessible) field member  is not returned by reflection's GetMembers()");
            Assert.True(noY1, "The 'private protected' (Family+Assembly accessible) property member is not returned by reflection's GetMembers()");
            Assert.True(noY2, "The 'private protected' (Family+Assembly accessible) method member is not returned by reflection's GetMembers()");
            Assert.True(noY3, "The 'private protected' (Family+Assembly accessible) class member is not returned by reflection's GetMembers()");
            Assert.True(noY4, "The 'private protected' (Family+Assembly accessible) struct member is not returned by reflection's GetMembers()");

            foreach (var member in typeof(Probe).GetMembers(BindingFlags.NonPublic | BindingFlags.Instance))
            {
                if (member.MemberType == MemberTypes.Field && member.Name == "Y")
                {
                    var fi = (FieldInfo)member;
                    Assert.True(!fi.IsPublic && !fi.IsPrivate && !fi.IsStatic && !fi.IsFamily && !fi.IsAssembly && fi.IsFamilyAndAssembly && !fi.IsFamilyOrAssembly, "A private protected field has the correct set of reflection flags.");
                }
            }
        }
    }
}