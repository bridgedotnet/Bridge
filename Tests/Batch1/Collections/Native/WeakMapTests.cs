using Bridge.Test;
using Bridge.Html5;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_WEAKCOLLECTION)]
    [TestFixture(TestNameFormat = "WeakMap - {0}")]
    public class WeakMapTests
    {
        class SomeCustomClass
        {
            public int SomeProperty
            {
                get; set;
            }
        }

        [Test]
        public void GettingSettingAndDeletingWorks()
        {
            // AppVeyor Chutzpah engine adjustment
            if (Bridge.ClientTest.Utilities.BrowserHelper.IsPhantomJs())
            {
                Assert.True(true, "Not running WeapMap tests as not supported in PhantomJS. See https://github.com/ariya/phantomjs/issues/13652");
                return;
            }

            var someValue = new SomeCustomClass
            {
                SomeProperty = 456
            };

            var someKey = new SomeCustomClass();
            var someOtherKey = new SomeCustomClass();

            Assert.AreEqual(someKey, someOtherKey, "Keys sanity check"); //sanity check

            var amap = new WeakMap();
            amap.Set(someKey, someValue);

            Assert.True(amap.Has(someKey), "Has someKey");
            Assert.False(amap.Has(someOtherKey), "Does not have someOtherKey");
            var v = amap.Get(someKey);
            Assert.NotNull(v, "Get not null");
            var typedV = v as SomeCustomClass;
            Assert.NotNull(typedV, "Get not null SomeCustomClass");
            Assert.AreEqual(typedV.SomeProperty, 456, "Check SomeProperty");
            Assert.AreEqual(someValue, v, "Check references");

            Assert.True(amap.Delete(someKey), "Delete someKey");
            Assert.False(amap.Delete(someKey), "Another delete someKey");
            Assert.False(amap.Has(someKey), "Check if has deleted someKey");

            Assert.AreEqual(Script.Undefined, amap.Get(someKey), "Get deleted someKey");
        }
    }
}