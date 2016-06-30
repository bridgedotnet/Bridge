using Bridge;
using Bridge.Linq;
using Bridge.Test;
using Bridge.ClientTest;

using System;
using System.Collections.Generic;
using Bridge.Html5;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_WEAKCOLLECTION)]
    [TestFixture(TestNameFormat = "WeakMap - {0}")]
    public class WeakMapTests
    {
        class SomeCustomClass
        {
            public int SomeProperty {get; set; }
        }

        [Test]
        public void GettingSettingAndDeletingWorks()
        {
            var someValue = new SomeCustomClass
            {
                SomeProperty = 456
            };

            var someKey = new SomeCustomClass();
            var someOtherKey = new SomeCustomClass();

            Assert.NotEqual(someKey, someOtherKey); //sanity check
            
            var amap = new WeakMap();
            amap.Set(someKey, someValue);
            
            Assert.True(amap.Has(someKey));
            Assert.False(amap.Has(someOtherKey));
            Assert.Equals(someValue, amap.Get(someKey));

            Assert.True(amap.Delete(someKey));
            Assert.False(amap.Delete(someKey));
            Assert.False(amap.Has(someKey));
            
            Assert.Equals(null, amap.Get(someKey));
        }
    }
}
