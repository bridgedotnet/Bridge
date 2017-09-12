using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3092 - {0}")]
    public class Bridge3092
    {
        private static bool EndsWithSaurus(String s)
        {
            return s.ToLower().EndsWith("saurus");
        }

        [Test]
        public static void TestListTRemoveAll()
        {
            List<string> dinosaurs = new List<string>();

            dinosaurs.Add("Compsognathus");
            dinosaurs.Add("Amargasaurus");
            dinosaurs.Add("Oviraptor");
            dinosaurs.Add("Velociraptor");
            dinosaurs.Add("Deinonychus");
            dinosaurs.Add("Dilophosaurus");
            dinosaurs.Add("Gallimimus");
            dinosaurs.Add("Triceratops");

            foreach (string dinosaur in dinosaurs)
            {
                Console.WriteLine(dinosaur);
            }

            Assert.False(dinosaurs.TrueForAll(EndsWithSaurus));
            Assert.AreEqual("Amargasaurus", dinosaurs.Find(EndsWithSaurus));
            Assert.AreEqual("Dilophosaurus", dinosaurs.FindLast(EndsWithSaurus));

            List<string> sublist = dinosaurs.FindAll(EndsWithSaurus);
            Assert.AreEqual(2, sublist.Count);
            Assert.AreEqual("Amargasaurus", sublist[0]);
            Assert.AreEqual("Dilophosaurus", sublist[1]);
            Assert.AreEqual(2, dinosaurs.RemoveAll(EndsWithSaurus));

            Assert.AreEqual(6, dinosaurs.Count);
            Assert.False(dinosaurs.Exists(EndsWithSaurus));
        }
    }
}