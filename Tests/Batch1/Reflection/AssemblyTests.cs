using Bridge.ClientTest.Reflection;
using Bridge.Test;
using Bridge.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Bridge.ClientTest.Batch1.Reflection
{
    [Category(Constants.MODULE_REFLECTION)]
    [TestFixture(TestNameFormat = "Reflection - Assembly {0}")]
    public class AssemblyTests
    {
        private class C
        {
        }

        private Assembly ImportedModuleTestCase
        {
            [Script(@"
	var x = {
		Foo: {
			Bar: {
				Inner: {
					OtherFunction: function() { }
				},
				Something: function() { }
			},
			baz: function() {
			},
			Bar2: 0
		}
	};
	x.Foo.baz.Test = function() {};
	return x;")]
            get
            { return null; }
        }

        private class G<T1, T2>
        { }

        private string CompilerVersion
        {
            get
            {
                //return AssemblyVersionMarker.GetVersion(AssemblyVersionMarker.VersionType.Compiler);
                return "";
            }
        }

        private string MscorlibName
        {
            get
            {
                return "mscorlib";
            }
        }

        private string MscorlibWithVersion
        {
            get
            {
                //return MscorlibName + ", Version=" + CompilerVersion;
                return MscorlibName;
            }
        }

        private string AssemblyName
        {
            get
            {
                return "Bridge.ClientTest";
            }
        }

        private string AssemblyWithVersion
        {
            get
            {
                //return AssemblyName + ", Version=" + AssemblyVersionMarker.GetVersion(AssemblyVersionMarker.VersionType.CurrentAssembly);
                return AssemblyName;
            }
        }

        [Test]
        public void GetExecutingAssemblyWorks()
        {
            Assert.AreEqual(Assembly.GetExecutingAssembly().FullName, AssemblyWithVersion);
        }

        [Test]
        public void GetAssemblyForTypeWorks()
        {
            Assert.AreEqual(Assembly.GetAssembly(typeof(int)).FullName, MscorlibWithVersion);
            Assert.AreEqual(Assembly.GetAssembly(typeof(AssemblyTests)).FullName, AssemblyWithVersion);
        }

        [Test]
        public void FullNameWorks()
        {
            Assert.AreEqual(typeof(int).Assembly.FullName, MscorlibWithVersion);
            Assert.AreEqual(typeof(AssemblyTests).Assembly.FullName, AssemblyWithVersion);
        }

        [Test]
        public void ToStringWorks()
        {
            Assert.AreEqual(typeof(int).Assembly.ToString(), MscorlibWithVersion);
            Assert.AreEqual(typeof(AssemblyTests).Assembly.ToString(), AssemblyWithVersion);
        }

        [Test]
        public void GetTypesWorks()
        {
            var types = new List<string>();
            foreach (var t in Assembly.GetExecutingAssembly().GetTypes())
                types.Add(t.FullName);
            Assert.True(types.Contains(typeof(AssemblyTests).FullName));
            Assert.True(types.Contains(typeof(ReflectionTests.C1).FullName));
        }

        [Test]
        public void GetTypesWithImportedModuleWorks()
        {
            var asm = ImportedModuleTestCase;
            var types = asm.GetTypes();
            Assert.AreEqual(types.Length, 3, "Length");
            Assert.True(types.Contains((Type)((dynamic)asm).Foo.Bar.Inner.OtherFunction), "#1");
            Assert.True(types.Contains((Type)((dynamic)asm).Foo.Bar.Something), "#2");
            Assert.True(types.Contains((Type)((dynamic)asm).Foo.baz.Test), "#3");
        }

        [Test]
        public void GetTypeWorks()
        {
            Assert.True(Assembly.GetExecutingAssembly().GetType(typeof(AssemblyTests).FullName) == typeof(AssemblyTests));
            Assert.True(Assembly.GetExecutingAssembly().GetType(typeof(Dictionary<,>).FullName) == null);
            Assert.True(typeof(int).Assembly.GetType(typeof(Dictionary<,>).FullName) == typeof(Dictionary<,>));
        }

        [Test]
        public void GetTypeWorksWithGenerics()
        {
            Assert.True(Assembly.GetExecutingAssembly().GetType(typeof(G<,>).FullName) == typeof(G<,>));
            Assert.True(Assembly.GetExecutingAssembly().GetType(typeof(G<int, string>).FullName) == typeof(G<int, string>));
        }

        [Test]
        public void GetTypeWithImportedModuleWorks()
        {
            var asm = ImportedModuleTestCase;
            Assert.True(asm.GetType("Foo.Bar.Inner.OtherFunction") == (Type)((dynamic)asm).Foo.Bar.Inner.OtherFunction, "#1");
            Assert.True(asm.GetType("Foo.Bar.Something") == (Type)((dynamic)asm).Foo.Bar.Something, "#2");
            Assert.True(asm.GetType("Foo.baz.Test") == (Type)((dynamic)asm).Foo.baz.Test, "#3");
            Assert.True(asm.GetType("Foo.Bar") == null, "#4");
        }

        [Test]
        public void AssemblyOfBuiltInTypes()
        {
            Assert.AreEqual(typeof(DateTime).Assembly.FullName, MscorlibWithVersion);
            Assert.AreEqual(typeof(double).Assembly.FullName, MscorlibWithVersion);
            Assert.AreEqual(typeof(bool).Assembly.FullName, MscorlibWithVersion);
            Assert.AreEqual(typeof(string).Assembly.FullName, MscorlibWithVersion);
            Assert.AreEqual(typeof(Delegate).Assembly.FullName, MscorlibWithVersion);
            Assert.AreEqual(typeof(int[]).Assembly.FullName, MscorlibWithVersion);
        }

        [Test]
        public void CreateInstanceWorks()
        {
            Assert.True(typeof(C).Assembly.CreateInstance(typeof(C).FullName) is C, "#1");
            Assert.AreEqual(typeof(int).Assembly.CreateInstance(typeof(int).FullName), 0, "#2");
            Assert.True(typeof(C).Assembly.CreateInstance("NonExistentType") == null, "#3");
        }

        [Test]
        public void GetCustomAttributesWorks()
        {
            var asm = Assembly.GetExecutingAssembly();
            foreach (var a in new[] { asm.GetCustomAttributes(), asm.GetCustomAttributes(true), asm.GetCustomAttributes(false) })
            {
                Assert.False(a.Some(x => x.GetType().Name == "A1Attribute"));
                var a2 = a.Filter(x => x is AssemblyAttributes.A2Attribute);
                Assert.AreEqual(a2.Length, 1);
                Assert.True(((AssemblyAttributes.A2Attribute)a2[0]).X == 64);
                Assert.True(((AssemblyAttributes.A2Attribute)a2[0]).P == 23);

                var a3 = a.Filter(x => x is AssemblyAttributes.A3Attribute);
                Assert.AreEqual(a3.Length, 1);
                Assert.True(((AssemblyAttributes.A3Attribute)a3[0]).X == 15);
                Assert.True(((AssemblyAttributes.A3Attribute)a3[0]).P == 45);
            }

            foreach (var a in new[] { asm.GetCustomAttributes(typeof(AssemblyAttributes.A2Attribute)), asm.GetCustomAttributes(typeof(AssemblyAttributes.A2Attribute), true), asm.GetCustomAttributes(typeof(AssemblyAttributes.A2Attribute), false) })
            {
                Assert.AreEqual(a.Length, 1);
                Assert.True(((AssemblyAttributes.A2Attribute)a[0]).X == 64);
                Assert.True(((AssemblyAttributes.A2Attribute)a[0]).P == 23);
            }
        }

        [Test]
        public void LoadCanReturnReferenceToLoadedAssembly()
        {
            Assert.True(Assembly.Load(AssemblyName) == Assembly.GetExecutingAssembly(), AssemblyName);
            Assert.True(Assembly.Load(MscorlibName) == typeof(int).Assembly, MscorlibName);

            Assert.True(Assembly.Load(AssemblyWithVersion) == Assembly.GetExecutingAssembly(), AssemblyWithVersion);
            Assert.True(Assembly.Load(MscorlibWithVersion) == typeof(int).Assembly, MscorlibWithVersion);
        }

        [Test]
        public void GetManifestResourceNamesWorks()
        {
            var names = Assembly.GetExecutingAssembly().GetManifestResourceNames();
            names.Sort((a, b) => a.CompareTo(b));
            Assert.AreEqual(names, new[] { "Bridge.ClientTest.Batch1.Reflection.Resource1.bin", "Bridge.ClientTest.Batch1.Reflection.Resource2.bin" });
        }

        [Test]
        public void GetManifestResourceDataAsBase64WithoutTypeWorks()
        {
            Assert.AreEqual(Assembly.GetExecutingAssembly().GetManifestResourceDataAsBase64("Bridge.ClientTest.Batch1.Reflection.Resource1.bin"), "AAECAwQFBgc=", "#1");
            Assert.AreEqual(Assembly.GetExecutingAssembly().GetManifestResourceDataAsBase64("Bridge.ClientTest.Batch1.Reflection.Resource2.bin"), "EBESExQV", "#2");
            Assert.Null(Assembly.GetExecutingAssembly().GetManifestResourceDataAsBase64("NonExistent"), "#3");
        }

        [Test]
        public void GetManifestResourceDataAsBase64WithTypeWorks()
        {
            Assert.AreEqual(Assembly.GetExecutingAssembly().GetManifestResourceDataAsBase64(typeof(AssemblyTests), "Resource1.bin"), "AAECAwQFBgc=", "#1");
            Assert.AreEqual(Assembly.GetExecutingAssembly().GetManifestResourceDataAsBase64(typeof(AssemblyTests), "Resource2.bin"), "EBESExQV", "#2");
            Assert.Null(Assembly.GetExecutingAssembly().GetManifestResourceDataAsBase64(typeof(AssemblyTests), "NonExistent"), "#3");
        }

        [Test]
        public void GetManifestResourceDataWithoutTypeWorks()
        {
            Assert.AreEqual(Assembly.GetExecutingAssembly().GetManifestResourceData("Bridge.ClientTest.Batch1.Reflection.Resource1.bin"), new[] { 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07 }, "#1");
            Assert.AreEqual(Assembly.GetExecutingAssembly().GetManifestResourceData("Bridge.ClientTest.Batch1.Reflection.Resource2.bin"), new[] { 0x10, 0x11, 0x12, 0x13, 0x14, 0x15 }, "#2");
            Assert.Null(Assembly.GetExecutingAssembly().GetManifestResourceData("NonExistent"), "#3");
        }

        [Test]
        public void GetManifestResourceDataWithTypeWorks()
        {
            Assert.AreEqual(Assembly.GetExecutingAssembly().GetManifestResourceData(typeof(AssemblyTests), "Resource1.bin"), new[] { 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07 }, "#1");
            Assert.AreEqual(Assembly.GetExecutingAssembly().GetManifestResourceData(typeof(AssemblyTests), "Resource2.bin"), new[] { 0x10, 0x11, 0x12, 0x13, 0x14, 0x15 }, "#2");
            Assert.Null(Assembly.GetExecutingAssembly().GetManifestResourceData(typeof(AssemblyTests), "NonExistent"), "#3");
        }
    }
}