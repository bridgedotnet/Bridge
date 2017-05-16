using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;
using Paige.PaigeObject;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2667 - {0}")]
    public class Bridge2667
    {
        [Test]
        public static void TestOrder()
        {
            var list = new PaigeObjectList();
            list.AddPaigeObject(null);
            Assert.AreEqual(1, list.Count);
        }
    }
}

namespace Paige.Core
{
    public abstract class BaseObject
    {
        public BaseObject(object incomingData = null)
        {
        }
    }
}

namespace Paige.PaigeObject
{

    public abstract class PaigeObject : Paige.Core.BaseObject
    {
        public long ID { get; set; }

        public long PaigeIdentifierID { get; set; }

        public long OriginatingActionRunInstanceID { get; set; }

        public PaigeObject(object incomingData = null) : base(incomingData)
        {
        }
    }
}

namespace Paige.PaigeObject
{
    public class PaigeObjectList : IEnumerable<Paige.PaigeObject.PaigeObject>
    {
        private List<PaigeObject> mList = new List<PaigeObject>();

        public PaigeObjectList(object incomingData = null)
        {
            if (incomingData != null)
            {
            }
        }

        public void AddPaigeObject(PaigeObject paige_object)
        {
            mList.Add(paige_object);
        }

        public PaigeObject this[int index]
        {
            get { return mList[index]; }
            set { mList.Insert(index, value); }
        }

        public IEnumerator<PaigeObject> GetEnumerator()
        {
            return mList.GetEnumerator();
        }

        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }

        public void RemovePaigeObject(PaigeObject paige_object)
        {
            mList.Remove(paige_object);
        }

        public int Count { get { return mList.Count; } }
    }
}