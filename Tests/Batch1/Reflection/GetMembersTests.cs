using Bridge.Test.NUnit;
using System;
using System.Reflection;

namespace Bridge.ClientTest.Reflection
{
    [Category(Constants.MODULE_REFLECTION)]
    [TestFixture(TestNameFormat = "Reflection - GetMembers {0}")]
    public class GetMembersTests
    {
        private void AssertEquivalent(MemberInfo[] actual, int[] expected)
        {
            var actualValues = actual.Filter(m => m.DeclaringType != typeof(object)).Map(m => { var arr = (A1Attribute[])m.GetCustomAttributes(typeof(A1Attribute), true); return arr.Length > 0 ? arr[0].I : 0; }).Filter(x => x != 0);
            actualValues.Sort();
            expected.Sort();
            Assert.AreEqual(expected, actualValues);
        }

        private void AssertEqual(MemberInfo actual, int? expected)
        {
            int? actualValue = actual != null ? ((A1Attribute)actual.GetCustomAttributes(typeof(A1Attribute), true)[0]).I : (int?)null;
            Assert.AreEqual(expected, actualValue);
        }

        private void AssertAmbiguous(Action action)
        {
            Assert.Throws(action);
        }

        private class A1Attribute : Attribute
        {
            public int I
            {
                get; set;
            }

            public A1Attribute(int i)
            {
                I = i;
            }
        }

#pragma warning disable 649, 108, 67, 169

        private class B1
        {
            [A1(101)]
            public B1()
            {
            }

            [A1(102)]
            public B1(int x)
            {
            }

            [A1(103)]
            public B1(int x, string y)
            {
            }

            [A1(111)]
            public void MB()
            {
            }

            [A1(112)]
            public void MB(int x)
            {
            }

            [A1(113)]
            public void MB(int x, string y)
            {
            }

            [A1(114)]
            public void MB2(int x, string y)
            {
            }

            [A1(121)]
            public static void MBS()
            {
            }

            [A1(122)]
            public static void MBS(int x)
            {
            }

            [A1(123)]
            public static void MBS(int x, string y)
            {
            }

            [A1(124)]
            public static void MBS2(int x, string y)
            {
            }

            [A1(131)]
            public int FB1;

            [A1(132)]
            public int FB2;

            [A1(141)]
            public static int FBS1;

            [A1(142)]
            public static int FBS2;

            [A1(151)]
            public int PB1
            {
                [A1(152)]
                get; [A1(153)]
                set;
            }

            [A1(154)]
            public int PB2
            {
                [A1(155)]
                get; [A1(156)]
                set;
            }

            [A1(157)]
            public int this[int x] { [A1(158)] get { return 0; } [A1(159)] set { } }

            [A1(161)]
            public static int PBS1
            {
                [A1(162)]
                get; [A1(163)]
                set;
            }

            [A1(164)]
            public static int PBS2
            {
                [A1(165)]
                get; [A1(166)]
                set;
            }

            [A1(171)]
            public event Action EB1 { [A1(172)] add { } [A1(173)] remove { } }

            [A1(174)]
            public event Action EB2 { [A1(175)] add { } [A1(176)] remove { } }

            [A1(181)]
            public static event Action EBS1 { [A1(182)] add { } [A1(183)] remove { } }

            [A1(184)]
            public static event Action EBS2 { [A1(185)] add { } [A1(186)] remove { } }
        }

#pragma warning disable CS0114 // Member hides inherited member; missing override keyword

        private class C1 : B1
        {
            [A1(201)]
            public C1()
            {
            }

            [A1(202)]
            public C1(int x)
            {
            }

            [A1(203)]
            public C1(int x, string y)
            {
            }

            [A1(211)]
            public void MC()
            {
            }

            [A1(212)]
            public void MC(int x)
            {
            }

            [A1(213)]
            public void MC(int x, string y)
            {
            }

            [A1(214)]
            public void MC2(int x, string y)
            {
            }

            [A1(221)]
            public static void MCS()
            {
            }

            [A1(222)]
            public static void MCS(int x)
            {
            }

            [A1(223)]
            public static void MCS(int x, string y)
            {
            }

            [A1(224)]
            public static void MCS2(int x, string y)
            {
            }

            [A1(231)]
            public int FC1;

            [A1(232)]
            public int FC2;

            [A1(241)]
            public static int FCS1;

            [A1(242)]
            public static int FCS2;

            [A1(251)]
            public int PC1
            {
                [A1(252)]
                get; [A1(253)]
                set;
            }

            [A1(254)]
            public int PC2
            {
                [A1(255)]
                get; [A1(256)]
                set;
            }

            [A1(257)]
            public int this[string x] { [A1(258)] get { return 0; } [A1(259)] set { } }

            [A1(261)]
            public static int PCS1
            {
                [A1(262)]
                get; [A1(263)]
                set;
            }

            [A1(264)]
            public static int PCS2
            {
                [A1(265)]
                get; [A1(266)]
                set;
            }

            [A1(271)]
            public event Action EC1 { [A1(272)] add { } [A1(273)] remove { } }

            [A1(274)]
            public event Action EC2 { [A1(275)] add { } [A1(276)] remove { } }

            [A1(281)]
            public static event Action ECS1 { [A1(282)] add { } [A1(283)] remove { } }

            [A1(284)]
            public static event Action ECS2 { [A1(285)] add { } [A1(286)] remove { } }
        }

        private class D1 : C1, I1
        {
            [A1(301)]
            public D1()
            {
            }

            [A1(302)]
            public D1(int x)
            {
            }

            [A1(303)]
            public D1(int x, string y)
            {
            }

            [A1(311)]
            public void MD()
            {
            }

            [A1(312)]
            public void MD(int x)
            {
            }

            [A1(313)]
            public void MD(int x, string y)
            {
            }

            [A1(314)]
            public void MD2(int x, string y)
            {
            }

            [A1(321)]
            public static void MDS()
            {
            }

            [A1(322)]
            public static void MDS(int x)
            {
            }

            [A1(323)]
            public static void MDS(int x, string y)
            {
            }

            [A1(324)]
            public static void MDS2(int x, string y)
            {
            }

            [A1(331)]
            public int FD1;

            [A1(332)]
            public int FD2;

            [A1(341)]
            public static int FDS1;

            [A1(342)]
            public static int FDS2;

            [A1(351)]
            public int PD1
            {
                [A1(352)]
                get; [A1(353)]
                set;
            }

            [A1(354)]
            public int PD2
            {
                [A1(355)]
                get; [A1(356)]
                set;
            }

            [A1(357)]
            public int this[double x] { [A1(358)] get { return 0; } [A1(359)] set { } }

            [A1(361)]
            public static int PDS1
            {
                [A1(362)]
                get; [A1(363)]
                set;
            }

            [A1(364)]
            public static int PDS2
            {
                [A1(365)]
                get; [A1(366)]
                set;
            }

            [A1(371)]
            public event Action ED1 { [A1(372)] add { } [A1(373)] remove { } }

            [A1(374)]
            public event Action ED2 { [A1(375)] add { } [A1(376)] remove { } }

            [A1(381)]
            public static event Action EDS1 { [A1(382)] add { } [A1(383)] remove { } }

            [A1(384)]
            public static event Action EDS2 { [A1(385)] add { } [A1(386)] remove { } }

            void I1.MI1()
            {
                throw new NotImplementedException();
            }

            void I1.MI1(int x)
            {
                throw new NotImplementedException();
            }

            void I1.MI1(int x, string y)
            {
                throw new NotImplementedException();
            }

            void I1.MI12(int x, string y)
            {
                throw new NotImplementedException();
            }

            int I1.PI11
            {
                get
                {
                    throw new NotImplementedException();
                }
                set
                {
                    throw new NotImplementedException();
                }
            }

            int I1.PI12
            {
                get
                {
                    throw new NotImplementedException();
                }
                set
                {
                    throw new NotImplementedException();
                }
            }

            event Action I1.EI11 { add { throw new NotImplementedException(); } remove { throw new NotImplementedException(); } }

            event Action I1.EI12 { add { throw new NotImplementedException(); } remove { throw new NotImplementedException(); } }

            int I1.this[int x] { get { return 0; } set { } }
        }

        private class B2
        {
            [A1(111)]
            public void M()
            {
            }

            [A1(112)]
            public void MB()
            {
            }

            [A1(113)]
            public void M2(int x)
            {
            }

            [A1(114)]
            public void M2(string x)
            {
            }

            [A1(115)]
            public void M2B(int x)
            {
            }

            [A1(116)]
            public void M2B(string x)
            {
            }

            [A1(117)]
            public void M3(int x)
            {
            }

            [A1(121)]
            public static void MS()
            {
            }

            [A1(122)]
            public static void MBS()
            {
            }

            [A1(123)]
            public static void M2S(int x)
            {
            }

            [A1(124)]
            public static void M2S(string x)
            {
            }

            [A1(125)]
            public static void M2BS(int x)
            {
            }

            [A1(126)]
            public static void M2BS(string x)
            {
            }

            [A1(127)]
            public static void M3S(int x)
            {
            }

            [A1(131)]
            public int F;

            [A1(132)]
            public int FB;

            [A1(141)]
            public static int FS;

            [A1(142)]
            public static int FBS;

            [A1(151)]
            public int P
            {
                get; set;
            }

            [A1(152)]
            public int PB
            {
                get; set;
            }

            [A1(153)]
            public int this[int x] { get { return 0; } set { } }

            [A1(154)]
            public int this[string x] { get { return 0; } set { } }

            [A1(161)]
            public static int PS
            {
                get; set;
            }

            [A1(162)]
            public static int PBS
            {
                get; set;
            }

            [A1(171)]
            public event Action E;

            [A1(172)]
            public event Action EB;

            [A1(181)]
            public static event Action ES;

            [A1(182)]
            public static event Action EBS;
        }

        private class C2 : B2
        {
            [A1(211)]
            public void M()
            {
            }

            [A1(212)]
            public void MC()
            {
            }

            [A1(213)]
            public void M2(int x)
            {
            }

            [A1(214)]
            public void M2(string x)
            {
            }

            [A1(215)]
            public void M2C(int x)
            {
            }

            [A1(216)]
            public void M2C(string x)
            {
            }

            [A1(217)]
            public void M3(string x)
            {
            }

            [A1(221)]
            public static void MS()
            {
            }

            [A1(222)]
            public static void MCS()
            {
            }

            [A1(223)]
            public static void M2S(int x)
            {
            }

            [A1(224)]
            public static void M2S(string x)
            {
            }

            [A1(225)]
            public static void M2CS(int x)
            {
            }

            [A1(226)]
            public static void M2CS(string x)
            {
            }

            [A1(227)]
            public static void M3S(string x)
            {
            }

            [A1(231)]
            public int F;

            [A1(232)]
            public int FC;

            [A1(241)]
            public static int FS;

            [A1(242)]
            public static int FCS;

            [A1(251)]
            public int P
            {
                get; set;
            }

            [A1(252)]
            public int PC
            {
                get; set;
            }

            [A1(253)]
            public int this[int x] { get { return 0; } set { } }

            [A1(254)]
            public int this[double x] { get { return 0; } set { } }

            [A1(261)]
            public static int PS
            {
                get; set;
            }

            [A1(262)]
            public static int PCS
            {
                get; set;
            }

            [A1(271)]
            public event Action E;

            [A1(272)]
            public event Action EC;

            [A1(281)]
            public static event Action ES;

            [A1(282)]
            public static event Action ECS;
        }

        private class D2 : C2
        {
            [A1(311)]
            public void M()
            {
            }

            [A1(312)]
            public void MD()
            {
            }

            [A1(313)]
            public void M2(int x)
            {
            }

            [A1(314)]
            public void M2(string x)
            {
            }

            [A1(315)]
            public void M2D(int x)
            {
            }

            [A1(316)]
            public void M2D(string x)
            {
            }

            [A1(317)]
            public void M3(DateTime x)
            {
            }

            [A1(321)]
            public static void MS()
            {
            }

            [A1(322)]
            public static void MDS()
            {
            }

            [A1(323)]
            public static void M2S(int x)
            {
            }

            [A1(324)]
            public static void M2S(string x)
            {
            }

            [A1(325)]
            public static void M2DS(int x)
            {
            }

            [A1(326)]
            public static void M2DS(string x)
            {
            }

            [A1(327)]
            public static void M3S(DateTime x)
            {
            }

            [A1(331)]
            public int F;

            [A1(332)]
            public int FD;

            [A1(341)]
            public static int FS;

            [A1(342)]
            public static int FDS;

            [A1(351)]
            public int P
            {
                get; set;
            }

            [A1(352)]
            public int PD
            {
                get; set;
            }

            [A1(353)]
            public int this[int x] { get { return 0; } set { } }

            [A1(354)]
            public int this[DateTime x] { get { return 0; } set { } }

            [A1(361)]
            public static int PS
            {
                get; set;
            }

            [A1(362)]
            public static int PDS
            {
                get; set;
            }

            [A1(371)]
            public event Action E;

            [A1(372)]
            public event Action ED;

            [A1(381)]
            public static event Action ES;

            [A1(382)]
            public static event Action EDS;
        }

        private class C3
        {
            [A1(1)]
            public int this[int x] { get { return 0; } set { } }
        }

        private interface I1
        {
            [A1(411)]
            void MI1();

            [A1(412)]
            void MI1(int x);

            [A1(413)]
            void MI1(int x, string y);

            [A1(414)]
            void MI12(int x, string y);

            [A1(451)]
            int PI11
            {
                [A1(452)]
                get; [A1(453)]
                set;
            }

            [A1(454)]
            int PI12
            {
                [A1(455)]
                get; [A1(456)]
                set;
            }

            [A1(457)]
            int this[int x] { [A1(458), Name("get_i1item")] get; [A1(459), Name("set_i1item")] set; }

            [A1(471)]
            event Action EI11;

            [A1(474)]
            event Action EI12;
        }

        private interface I2 : I1
        {
            [A1(511)]
            void MI2();

            [A1(512)]
            void MI2(int x);

            [A1(513)]
            void MI2(int x, string y);

            [A1(514)]
            void MI22(int x, string y);

            [A1(551)]
            int PI21
            {
                [A1(552)]
                get; [A1(553)]
                set;
            }

            [A1(554)]
            int PI22
            {
                [A1(555)]
                get; [A1(556)]
                set;
            }

            [A1(557)]
            int this[string x] { [A1(558), Name("get_item2")] get; [A1(559), Name("set_item2")] set; }

            [A1(571)]
            event Action EI21;

            [A1(574)]
            event Action EI22;
        }

#pragma warning restore 649, 108, 67

        [Test]
        public void GetMembersWithoutBindingFlagsWorks()
        {
            AssertEquivalent(typeof(D1).GetMembers(), new[] {
                                                111, 112, 113, 114,                     131, 132,           151, 152, 153, 154, 155, 156, 157, 158, 159,                               171, 172, 173, 174, 175, 176,
                                                211, 212, 213, 214,                     231, 232,           251, 252, 253, 254, 255, 256, 257, 258, 259,                               271, 272, 273, 274, 275, 276,
                                 301, 302, 303, 311, 312, 313, 314, 321, 322, 323, 324, 331, 332, 341, 342, 351, 352, 353, 354, 355, 356, 357, 358, 359, 361, 362, 363, 364, 365, 366, 371, 372, 373, 374, 375, 376, 381, 382, 383, 384, 385, 386,
                             });
        }

        [Test]
        public void GetMembersWorksForInterface()
        {
            AssertEquivalent(typeof(I2).GetMembers(), new[] {
                                                511, 512, 513, 514,                                         551, 552, 553, 554, 555, 556, 557, 558, 559,                               571,           574,
                             });
        }

        [Test]
        public void GetMembersWithBindingFlagsWorks()
        {
            AssertEquivalent(typeof(D1).GetMembers(BindingFlags.Default), new int[0]);

            AssertEquivalent(typeof(D1).GetMembers(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance), new[] {
                                                111, 112, 113, 114,                     131, 132,           151, 152, 153, 154, 155, 156, 157, 158, 159,                               171, 172, 173, 174, 175, 176,
                                                211, 212, 213, 214,                     231, 232,           251, 252, 253, 254, 255, 256, 257, 258, 259,                               271, 272, 273, 274, 275, 276,
                                 301, 302, 303, 311, 312, 313, 314, 321, 322, 323, 324, 331, 332, 341, 342, 351, 352, 353, 354, 355, 356, 357, 358, 359, 361, 362, 363, 364, 365, 366, 371, 372, 373, 374, 375, 376, 381, 382, 383, 384, 385, 386,
                             });

            AssertEquivalent(typeof(D1).GetMembers(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance | BindingFlags.FlattenHierarchy), new[] {
                                                111, 112, 113, 114, 121, 122, 123, 124, 131, 132, 141, 142, 151, 152, 153, 154, 155, 156, 157, 158, 159, 161, 162, 163, 164, 165, 166, 171, 172, 173, 174, 175, 176, 181, 182, 183, 184, 185, 186,
                                                211, 212, 213, 214, 221, 222, 223, 224, 231, 232, 241, 242, 251, 252, 253, 254, 255, 256, 257, 258, 259, 261, 262, 263, 264, 265, 266, 271, 272, 273, 274, 275, 276, 281, 282, 283, 284, 285, 286,
                                 301, 302, 303, 311, 312, 313, 314, 321, 322, 323, 324, 331, 332, 341, 342, 351, 352, 353, 354, 355, 356, 357, 358, 359, 361, 362, 363, 364, 365, 366, 371, 372, 373, 374, 375, 376, 381, 382, 383, 384, 385, 386,
                             });

            AssertEquivalent(typeof(D1).GetMembers(BindingFlags.Public | BindingFlags.Instance), new[] {
                                                111, 112, 113, 114,                     131, 132,           151, 152, 153, 154, 155, 156, 157, 158, 159,                               171, 172, 173, 174, 175, 176,
                                                211, 212, 213, 214,                     231, 232,           251, 252, 253, 254, 255, 256, 257, 258, 259,                               271, 272, 273, 274, 275, 276,
                                 301, 302, 303, 311, 312, 313, 314,                     331, 332,           351, 352, 353, 354, 355, 356, 357, 358, 359,                               371, 372, 373, 374, 375, 376,
                             });

            AssertEquivalent(typeof(D1).GetMembers(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly), new[] {
                                 301, 302, 303, 311, 312, 313, 314,                     331, 332,           351, 352, 353, 354, 355, 356, 357, 358, 359,                               371, 372, 373, 374, 375, 376,
                             });

            AssertEquivalent(typeof(D1).GetMembers(BindingFlags.Public | BindingFlags.Static), new[] {
                                                                    321, 322, 323, 324,           341, 342,                                              361, 362, 363, 364, 365, 366,                               381, 382, 383, 384, 385, 386,
                             });

            AssertEquivalent(typeof(D1).GetMembers(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), new[] {
                                                                    121, 122, 123, 124,           141, 142,                                              161, 162, 163, 164, 165, 166,                               181, 182, 183, 184, 185, 186,
                                                                    221, 222, 223, 224,           241, 242,                                              261, 262, 263, 264, 265, 266,                               281, 282, 283, 284, 285, 286,
                                                                    321, 322, 323, 324,           341, 342,                                              361, 362, 363, 364, 365, 366,                               381, 382, 383, 384, 385, 386,
                             });
        }

        [Test]
        public void GetMemberWithNameWorks()
        {
            AssertEquivalent(typeof(D2).GetMember("FB"), new[] { 132 });
            AssertEquivalent(typeof(D2).GetMember("MB"), new[] { 112 });
            AssertEquivalent(typeof(D2).GetMember("MD"), new[] { 312 });
            AssertEquivalent(typeof(D2).GetMember("M"), new[] { 111, 211, 311 });
            AssertEquivalent(typeof(D2).GetMember("X"), new int[0]);
        }

        [Test]
        public void GetMemberWithNameAndBindingFlagsWorks()
        {
            AssertEquivalent(typeof(D2).GetMember("FB", BindingFlags.Public | BindingFlags.Instance), new[] { 132 });
            AssertEquivalent(typeof(D2).GetMember("FB", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly), new int[0]);
            AssertEquivalent(typeof(D2).GetMember("FB", BindingFlags.Public | BindingFlags.Static), new int[0]);
            AssertEquivalent(typeof(D2).GetMember("FDS", BindingFlags.Public | BindingFlags.Instance), new int[0]);
            AssertEquivalent(typeof(D2).GetMember("FDS", BindingFlags.Public | BindingFlags.Static), new[] { 342 });
            AssertEquivalent(typeof(D2).GetMember("FBS", BindingFlags.Public | BindingFlags.Static), new int[0]);
            AssertEquivalent(typeof(D2).GetMember("FBS", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), new[] { 142 });
            AssertEquivalent(typeof(D2).GetMember("F", BindingFlags.Public | BindingFlags.Instance), new[] { 131, 231, 331 });
            AssertEquivalent(typeof(D2).GetMember("FS", BindingFlags.Public | BindingFlags.Static), new[] { 341 });
            AssertEquivalent(typeof(D2).GetMember("FS", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), new[] { 141, 241, 341 });
        }

        [Test]
        public void GetConstructorsWorks()
        {
            AssertEquivalent(typeof(D1).GetConstructors(), new[] { 301, 302, 303 });
        }

        [Test]
        public void GetConstructorWorks()
        {
            AssertEqual(typeof(D1).GetConstructor(new Type[0]), 301);
            AssertEqual(typeof(D1).GetConstructor(new[] { typeof(int), typeof(string) }), 303);
            AssertEqual(typeof(D1).GetConstructor(new[] { typeof(DateTime) }), null);
        }

        [Test]
        public void GetMethodsWithoutBindingFlagsWorks()
        {
            AssertEquivalent(typeof(D1).GetMethods(), new[] {
                                 111, 112, 113, 114,                     152, 153, 155, 156, 158, 159,                     172, 173, 175, 176,
                                 211, 212, 213, 214,                     252, 253, 255, 256, 258, 259,                     272, 273, 275, 276,
                                 311, 312, 313, 314, 321, 322, 323, 324, 352, 353, 355, 356, 358, 359, 362, 363, 365, 366, 372, 373, 375, 376, 382, 383, 385, 386,
                             });
        }

        [Test]
        public void GetMethodsWithBindingFlagsWorks()
        {
            AssertEquivalent(typeof(D1).GetMethods(BindingFlags.Default), new int[0]);

            AssertEquivalent(typeof(D1).GetMethods(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance), new[] {
                                 111, 112, 113, 114,                     152, 153, 155, 156, 158, 159,                     172, 173, 175, 176,
                                 211, 212, 213, 214,                     252, 253, 255, 256, 258, 259,                     272, 273, 275, 276,
                                 311, 312, 313, 314, 321, 322, 323, 324, 352, 353, 355, 356, 358, 359, 362, 363, 365, 366, 372, 373, 375, 376, 382, 383, 385, 386,
                             });

            AssertEquivalent(typeof(D1).GetMethods(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance | BindingFlags.FlattenHierarchy), new[] {
                                 111, 112, 113, 114, 121, 122, 123, 124, 152, 153, 155, 156, 158, 159, 162, 163, 165, 166, 172, 173, 175, 176, 182, 183, 185, 186,
                                 211, 212, 213, 214, 221, 222, 223, 224, 252, 253, 255, 256, 258, 259, 262, 263, 265, 266, 272, 273, 275, 276, 282, 283, 285, 286,
                                 311, 312, 313, 314, 321, 322, 323, 324, 352, 353, 355, 356, 358, 359, 362, 363, 365, 366, 372, 373, 375, 376, 382, 383, 385, 386,
                             });

            AssertEquivalent(typeof(D1).GetMethods(BindingFlags.Public | BindingFlags.Instance), new[] {
                                 111, 112, 113, 114,                     152, 153, 155, 156, 158, 159,                     172, 173, 175, 176,
                                 211, 212, 213, 214,                     252, 253, 255, 256, 258, 259,                     272, 273, 275, 276,
                                 311, 312, 313, 314,                     352, 353, 355, 356, 358, 359,                     372, 373, 375, 376,
                             });

            AssertEquivalent(typeof(D1).GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly), new[] {
                                 311, 312, 313, 314,                     352, 353, 355, 356, 358, 359,                     372, 373, 375, 376,
                             });

            AssertEquivalent(typeof(D1).GetMethods(BindingFlags.Public | BindingFlags.Static), new[] {
                                                     321, 322, 323, 324,                               362, 363, 365, 366,                     382, 383, 385, 386,
                             });

            AssertEquivalent(typeof(D1).GetMethods(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), new[] {
                                                     121, 122, 123, 124,                               162, 163, 165, 166,                     182, 183, 185, 186,
                                                     221, 222, 223, 224,                               262, 263, 265, 266,                     282, 283, 285, 286,
                                                     321, 322, 323, 324,                               362, 363, 365, 366,                     382, 383, 385, 386,
                             });
        }

        [Test]
        public void GetMethodWithNameWorks()
        {
            AssertEqual(typeof(D2).GetMethod("MB"), 112);
            AssertEqual(typeof(D2).GetMethod("MD"), 312);
            AssertEqual(typeof(D2).GetMethod("M"), 311);
            AssertAmbiguous(() => typeof(D2).GetMethod("M2"));
            AssertEqual(typeof(D2).GetMethod("F"), null);
            AssertEqual(typeof(D2).GetMethod("X"), null);

            AssertEqual(typeof(D1).GetMethod("get_PD1"), 352);
            AssertEqual(typeof(D1).GetMethod("set_PD1"), 353);
            AssertEqual(typeof(D1).GetMethod("add_ED1"), 372);
            AssertEqual(typeof(D1).GetMethod("remove_ED1"), 373);
        }

        [Test]
        public void GetMethodWithNameAndBindingFlagsWorks()
        {
            AssertEqual(typeof(D2).GetMethod("MB", BindingFlags.Public | BindingFlags.Instance), 112);
            AssertEqual(typeof(D2).GetMethod("MB", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly), null);
            AssertEqual(typeof(D2).GetMethod("MB", BindingFlags.Public | BindingFlags.Static), null);
            AssertEqual(typeof(D2).GetMethod("MDS", BindingFlags.Public | BindingFlags.Instance), null);
            AssertEqual(typeof(D2).GetMethod("MDS", BindingFlags.Public | BindingFlags.Static), 322);
            AssertEqual(typeof(D2).GetMethod("MBS", BindingFlags.Public | BindingFlags.Static), null);
            AssertEqual(typeof(D2).GetMethod("MBS", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), 122);
            AssertEqual(typeof(D2).GetMethod("M", BindingFlags.Public | BindingFlags.Instance), 311);
            AssertEqual(typeof(D2).GetMethod("MS", BindingFlags.Public | BindingFlags.Static), 321);
            AssertEqual(typeof(D2).GetMethod("MS", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), 321);
            AssertAmbiguous(() => typeof(D2).GetMethod("M2D", BindingFlags.Public | BindingFlags.Instance));
            AssertAmbiguous(() => typeof(D2).GetMethod("M2DS", BindingFlags.Public | BindingFlags.Static));
            AssertEqual(typeof(D2).GetMethod("F", BindingFlags.Public | BindingFlags.Instance), null);
            AssertEqual(typeof(D2).GetMethod("X", BindingFlags.Public | BindingFlags.Instance), null);

            AssertEqual(typeof(D1).GetMethod("get_PD1", BindingFlags.Public | BindingFlags.Instance), 352);
            AssertEqual(typeof(D1).GetMethod("set_PD1", BindingFlags.Public | BindingFlags.Instance), 353);
            AssertEqual(typeof(D1).GetMethod("add_ED1", BindingFlags.Public | BindingFlags.Instance), 372);
            AssertEqual(typeof(D1).GetMethod("remove_ED1", BindingFlags.Public | BindingFlags.Instance), 373);
            AssertEqual(typeof(D1).GetMethod("get_PDS1", BindingFlags.Public | BindingFlags.Static), 362);
            AssertEqual(typeof(D1).GetMethod("set_PDS1", BindingFlags.Public | BindingFlags.Static), 363);
            AssertEqual(typeof(D1).GetMethod("add_EDS1", BindingFlags.Public | BindingFlags.Static), 382);
            AssertEqual(typeof(D1).GetMethod("remove_EDS1", BindingFlags.Public | BindingFlags.Static), 383);
        }

        [Test]
        public void GetMethodWithNameAndArgumentTypesWorks()
        {
            AssertEqual(typeof(D2).GetMethod("MD", new Type[0]), 312);
            AssertEqual(typeof(D2).GetMethod("M2D", new[] { typeof(int) }), 315);
            AssertEqual(typeof(D2).GetMethod("M2D", new[] { typeof(string) }), 316);
            AssertEqual(typeof(D2).GetMethod("M2D", new[] { typeof(DateTime) }), null);
            AssertEqual(typeof(D2).GetMethod("M3", new[] { typeof(int) }), 117);
            AssertEqual(typeof(D2).GetMethod("M3", new[] { typeof(string) }), 217);
            AssertEqual(typeof(D2).GetMethod("M3", new[] { typeof(DateTime) }), 317);
            AssertEqual(typeof(D2).GetMethod("M3", new[] { typeof(DateTime), typeof(int) }), null);
            AssertEqual(typeof(D2).GetMethod("M3S", new[] { typeof(string) }), null);
            AssertEqual(typeof(D2).GetMethod("M3S", new[] { typeof(DateTime) }), 327);
        }

        [Test]
        public void GetMethodWithNameAndArgumentTypesAndBindingFlagsWorks()
        {
            AssertEqual(typeof(D2).GetMethod("MD", BindingFlags.Public | BindingFlags.Instance, new Type[0]), 312);
            AssertEqual(typeof(D2).GetMethod("MD", BindingFlags.Public | BindingFlags.Static, new Type[0]), null);
            AssertEqual(typeof(D2).GetMethod("M2D", BindingFlags.Public | BindingFlags.Instance, new[] { typeof(int) }), 315);
            AssertEqual(typeof(D2).GetMethod("M3", BindingFlags.Public | BindingFlags.Instance, new[] { typeof(int) }), 117);
            AssertEqual(typeof(D2).GetMethod("M3", BindingFlags.Public | BindingFlags.Instance, new[] { typeof(string) }), 217);
            AssertEqual(typeof(D2).GetMethod("M3", BindingFlags.Public | BindingFlags.Instance, new[] { typeof(DateTime) }), 317);
            AssertEqual(typeof(D2).GetMethod("M3", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly, new[] { typeof(string) }), null);
            AssertEqual(typeof(D2).GetMethod("M3", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly, new[] { typeof(DateTime) }), 317);
            AssertEqual(typeof(D2).GetMethod("M3", BindingFlags.Public | BindingFlags.Static, new[] { typeof(DateTime) }), null);

            AssertEqual(typeof(D2).GetMethod("M3S", BindingFlags.Public | BindingFlags.Static, new[] { typeof(string) }), null);
            AssertEqual(typeof(D2).GetMethod("M3S", BindingFlags.Public | BindingFlags.Static, new[] { typeof(DateTime) }), 327);
            AssertEqual(typeof(D2).GetMethod("M3S", BindingFlags.Public | BindingFlags.Static, new[] { typeof(int) }), null);
            AssertEqual(typeof(D2).GetMethod("M3S", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy, new[] { typeof(string) }), 227);
            AssertEqual(typeof(D2).GetMethod("M3S", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy, new[] { typeof(DateTime) }), 327);
        }

        [Test]
        public void GetPropertiesWithoutBindingFlagsWorks()
        {
            AssertEquivalent(typeof(D1).GetProperties(), new[] {
                                 151, 154, 157,
                                 251, 254, 257,
                                 351, 354, 357, 361, 364,
                             });
        }

        [Test]
        public void GetPropertiesWithBindingFlagsWorks()
        {
            AssertEquivalent(typeof(D1).GetProperties(BindingFlags.Default), new int[0]);

            AssertEquivalent(typeof(D1).GetProperties(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance), new[] {
                                 151, 154, 157,
                                 251, 254, 257,
                                 351, 354, 357, 361, 364,
                             });

            AssertEquivalent(typeof(D1).GetProperties(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance | BindingFlags.FlattenHierarchy), new[] {
                                 151, 154, 157, 161, 164,
                                 251, 254, 257, 261, 264,
                                 351, 354, 357, 361, 364,
                             });

            AssertEquivalent(typeof(D1).GetProperties(BindingFlags.Public | BindingFlags.Instance), new[] {
                                 151, 154, 157,
                                 251, 254, 257,
                                 351, 354, 357,
                             });

            AssertEquivalent(typeof(D1).GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly), new[] {
                                 351, 354, 357,
                             });

            AssertEquivalent(typeof(D1).GetProperties(BindingFlags.Public | BindingFlags.Static), new[] {
                                 361, 364,
                             });

            AssertEquivalent(typeof(D1).GetProperties(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), new[] {
                                 161, 164,
                                 261, 264,
                                 361, 364,
                             });
        }

        [Test]
        public void GetPropertyWithNameWorks()
        {
            AssertEqual(typeof(D2).GetProperty("PB"), 152);
            AssertEqual(typeof(D2).GetProperty("PD"), 352);
            AssertEqual(typeof(D2).GetProperty("P"), 351);
            AssertEqual(typeof(D2).GetProperty("F"), null);
            AssertEqual(typeof(D2).GetProperty("X"), null);
            AssertAmbiguous(() => typeof(D2).GetProperty("Item"));
            AssertEqual(typeof(C3).GetProperty("Item"), 1);
        }

        [Test]
        public void GetPropertyWithNameAndBindingFlagsWorks()
        {
            AssertEqual(typeof(D2).GetProperty("PB", BindingFlags.Public | BindingFlags.Instance), 152);
            AssertEqual(typeof(D2).GetProperty("PB", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly), null);
            AssertEqual(typeof(D2).GetProperty("PB", BindingFlags.Public | BindingFlags.Static), null);
            AssertEqual(typeof(D2).GetProperty("PDS", BindingFlags.Public | BindingFlags.Instance), null);
            AssertEqual(typeof(D2).GetProperty("PDS", BindingFlags.Public | BindingFlags.Static), 362);
            AssertEqual(typeof(D2).GetProperty("PBS", BindingFlags.Public | BindingFlags.Static), null);
            AssertEqual(typeof(D2).GetProperty("PBS", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), 162);
            AssertEqual(typeof(D2).GetProperty("P", BindingFlags.Public | BindingFlags.Instance), 351);
            AssertEqual(typeof(D2).GetProperty("PS", BindingFlags.Public | BindingFlags.Static), 361);
            AssertEqual(typeof(D2).GetProperty("PS", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), 361);
            AssertAmbiguous(() => typeof(D2).GetProperty("Item", BindingFlags.Public | BindingFlags.Instance));
            AssertEqual(typeof(C3).GetProperty("Item", BindingFlags.Public | BindingFlags.Instance), 1);
            AssertEqual(typeof(C3).GetProperty("Item", BindingFlags.Public | BindingFlags.Static), null);
            AssertEqual(typeof(D2).GetProperty("F", BindingFlags.Public | BindingFlags.Instance), null);
            AssertEqual(typeof(D2).GetProperty("X", BindingFlags.Public | BindingFlags.Instance), null);
        }

        [Test]
        public void GetPropertyWithNameAndArgumentTypesWorks()
        {
            AssertEqual(typeof(D2).GetProperty("PD", new Type[0]), 352);
            AssertEqual(typeof(D2).GetProperty("Item", new[] { typeof(string) }), 154);
            AssertEqual(typeof(D2).GetProperty("Item", new[] { typeof(double) }), 254);
            AssertEqual(typeof(D2).GetProperty("Item", new[] { typeof(DateTime) }), 354);
            AssertEqual(typeof(D2).GetProperty("Item", new[] { typeof(int) }), 353);
            AssertEqual(typeof(D2).GetProperty("Item", new[] { typeof(int), typeof(string) }), null);
        }

        [Test]
        public void GetPropertyWithNameAndArgumentTypesAndBindingFlagsWorks()
        {
            AssertEqual(typeof(D2).GetProperty("PD", BindingFlags.Public | BindingFlags.Instance, new Type[0]), 352);
            AssertEqual(typeof(D2).GetProperty("PD", BindingFlags.Public | BindingFlags.Static, new Type[0]), null);
            AssertEqual(typeof(D2).GetProperty("Item", BindingFlags.Public | BindingFlags.Instance, new[] { typeof(string) }), 154);
            AssertEqual(typeof(D2).GetProperty("Item", BindingFlags.Public | BindingFlags.Instance, new[] { typeof(double) }), 254);
            AssertEqual(typeof(D2).GetProperty("Item", BindingFlags.Public | BindingFlags.Instance, new[] { typeof(DateTime) }), 354);
            AssertEqual(typeof(D2).GetProperty("Item", BindingFlags.Public | BindingFlags.Instance, new[] { typeof(int) }), 353);
            AssertEqual(typeof(D2).GetProperty("Item", BindingFlags.Public | BindingFlags.Instance, new[] { typeof(int), typeof(string) }), null);
            AssertEqual(typeof(D2).GetProperty("Item", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly, new[] { typeof(string) }), null);
            AssertEqual(typeof(D2).GetProperty("Item", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly, new[] { typeof(double) }), null);
            AssertEqual(typeof(D2).GetProperty("Item", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly, new[] { typeof(DateTime) }), 354);
            AssertEqual(typeof(D2).GetProperty("Item", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly, new[] { typeof(int) }), 353);
        }

        [Test]
        public void GetFieldsWithoutBindingFlagsWorks()
        {
            AssertEquivalent(typeof(D1).GetFields(), new[] {
                                 131, 132,
                                 231, 232,
                                 331, 332, 341, 342,
                             });
        }

        [Test]
        public void GetFieldsWithBindingFlagsWorks()
        {
            AssertEquivalent(typeof(D1).GetFields(BindingFlags.Default), new int[0]);

            AssertEquivalent(typeof(D1).GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance), new[] {
                                 131, 132,
                                 231, 232,
                                 331, 332, 341, 342,
                             });

            AssertEquivalent(typeof(D1).GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance | BindingFlags.FlattenHierarchy), new[] {
                                 131, 132, 141, 142,
                                 231, 232, 241, 242,
                                 331, 332, 341, 342,
                             });

            AssertEquivalent(typeof(D1).GetFields(BindingFlags.Public | BindingFlags.Instance), new[] {
                                 131, 132,
                                 231, 232,
                                 331, 332,
                             });

            AssertEquivalent(typeof(D1).GetFields(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly), new[] {
                                 331, 332,
                             });

            AssertEquivalent(typeof(D1).GetFields(BindingFlags.Public | BindingFlags.Static), new[] {
                                 341, 342,
                             });

            AssertEquivalent(typeof(D1).GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), new[] {
                                 141, 142,
                                 241, 242,
                                 341, 342,
                             });
        }

        [Test]
        public void GetFieldWithNameWorks()
        {
            AssertEqual(typeof(D2).GetField("FB"), 132);
            AssertEqual(typeof(D2).GetField("FD"), 332);
            AssertEqual(typeof(D2).GetField("F"), 331);
            AssertEqual(typeof(D2).GetField("E"), null);
            AssertEqual(typeof(D2).GetField("X"), null);
        }

        [Test]
        public void GetFieldWithNameAndBindingFlagsWorks()
        {
            AssertEqual(typeof(D2).GetField("FB", BindingFlags.Public | BindingFlags.Instance), 132);
            AssertEqual(typeof(D2).GetField("FB", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly), null);
            AssertEqual(typeof(D2).GetField("FB", BindingFlags.Public | BindingFlags.Static), null);
            AssertEqual(typeof(D2).GetField("FDS", BindingFlags.Public | BindingFlags.Instance), null);
            AssertEqual(typeof(D2).GetField("FDS", BindingFlags.Public | BindingFlags.Static), 342);
            AssertEqual(typeof(D2).GetField("FBS", BindingFlags.Public | BindingFlags.Static), null);
            AssertEqual(typeof(D2).GetField("FBS", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), 142);
            AssertEqual(typeof(D2).GetField("F", BindingFlags.Public | BindingFlags.Instance), 331);
            AssertEqual(typeof(D2).GetField("FS", BindingFlags.Public | BindingFlags.Static), 341);
            AssertEqual(typeof(D2).GetField("FS", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), 341);
            AssertEqual(typeof(D2).GetField("E", BindingFlags.Public | BindingFlags.Instance), null);
            AssertEqual(typeof(D2).GetField("X", BindingFlags.Public | BindingFlags.Instance), null);
        }

        [Test]
        public void GetEventsWithoutBindingFlagsWorks()
        {
            AssertEquivalent(typeof(D1).GetEvents(), new[] {
                                 171, 174,
                                 271, 274,
                                 371, 374, 381, 384,
                             });
        }

        [Test]
        public void GetEventsWithBindingFlagsWorks()
        {
            AssertEquivalent(typeof(D1).GetEvents(BindingFlags.Default), new int[0]);

            AssertEquivalent(typeof(D1).GetEvents(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance), new[] {
                                 171, 174,
                                 271, 274,
                                 371, 374, 381, 384,
                             });

            AssertEquivalent(typeof(D1).GetEvents(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance | BindingFlags.FlattenHierarchy), new[] {
                                 171, 174, 181, 184,
                                 271, 274, 281, 284,
                                 371, 374, 381, 384,
                             });

            AssertEquivalent(typeof(D1).GetEvents(BindingFlags.Public | BindingFlags.Instance), new[] {
                                 171, 174,
                                 271, 274,
                                 371, 374,
                             });

            AssertEquivalent(typeof(D1).GetEvents(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly), new[] {
                                 371, 374,
                             });

            AssertEquivalent(typeof(D1).GetEvents(BindingFlags.Public | BindingFlags.Static), new[] {
                                 381, 384,
                             });

            AssertEquivalent(typeof(D1).GetEvents(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), new[] {
                                 181, 184,
                                 281, 284,
                                 381, 384,
                             });
        }

        [Test]
        public void GetEventWithNameWorks()
        {
            AssertEqual(typeof(D2).GetEvent("EB"), 172);
            AssertEqual(typeof(D2).GetEvent("ED"), 372);
            AssertEqual(typeof(D2).GetEvent("E"), 371);
            AssertEqual(typeof(D2).GetEvent("F"), null);
            AssertEqual(typeof(D2).GetEvent("X"), null);
        }

        [Test]
        public void GetEventWithNameAndBindingFlagsWorks()
        {
            AssertEqual(typeof(D2).GetEvent("EB", BindingFlags.Public | BindingFlags.Instance), 172);
            AssertEqual(typeof(D2).GetEvent("EB", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly), null);
            AssertEqual(typeof(D2).GetEvent("EB", BindingFlags.Public | BindingFlags.Static), null);
            AssertEqual(typeof(D2).GetEvent("EDS", BindingFlags.Public | BindingFlags.Instance), null);
            AssertEqual(typeof(D2).GetEvent("EDS", BindingFlags.Public | BindingFlags.Static), 382);
            AssertEqual(typeof(D2).GetEvent("EBS", BindingFlags.Public | BindingFlags.Static), null);
            AssertEqual(typeof(D2).GetEvent("EBS", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), 182);
            AssertEqual(typeof(D2).GetEvent("E", BindingFlags.Public | BindingFlags.Instance), 371);
            AssertEqual(typeof(D2).GetEvent("ES", BindingFlags.Public | BindingFlags.Static), 381);
            AssertEqual(typeof(D2).GetEvent("ES", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy), 381);
            AssertEqual(typeof(D2).GetEvent("F", BindingFlags.Public | BindingFlags.Instance), null);
            AssertEqual(typeof(D2).GetEvent("X", BindingFlags.Public | BindingFlags.Instance), null);
        }

        [Test]
        public void IsOperatorForMemberInfoWorks()
        {
            Assert.True((object)typeof(B1).GetConstructor(new Type[0]) is ConstructorInfo);
            Assert.False((object)typeof(B1).GetField("FB1") is ConstructorInfo);

            Assert.True((object)typeof(B1).GetMethod("MB2") is MethodInfo);
            Assert.False((object)typeof(B1).GetField("FB1") is MethodInfo);

            Assert.True((object)typeof(B1).GetField("FB1") is FieldInfo);
            Assert.False((object)typeof(B1).GetMethod("MB2") is FieldInfo);

            Assert.True((object)typeof(B1).GetProperty("PB1") is PropertyInfo);
            Assert.False((object)typeof(B1).GetField("FB1") is PropertyInfo);

            Assert.True((object)typeof(B1).GetEvent("EB1") is EventInfo);
            Assert.False((object)typeof(B1).GetField("FB1") is EventInfo);
        }
    }
}