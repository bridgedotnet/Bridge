using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2310 - {0}")]
    public class Bridge2310
    {
        /*
        statics
        inherits
        events
        properties


        */
        public class BaseComponent
        {
        }

        public class Component : BaseComponent
        {
            public object ctor;
            public object config;
            public object events;
            public object inherits;
            public object properties;
            public object statics;

            public object InstanceField = new object();
            public static object StaticField = new object();
            public object InstanceProperty
            {
                get; set;
            } = new object();
            public static object StaticProperty
            {
                get; set;
            } = new object();

            public event EventHandler<int> InstanceEvent;
            public static event EventHandler<int> StaticEvent;

            public int InstanceEventResult;
            public static int StaticEventResult;

            public Component()
            {
                this.InstanceEvent += Component_InstanceEvent;

                this.InstanceEvent(null, 1);
            }

            static Component()
            {
                StaticEvent += Component_StaticEvent;

                StaticEvent(null, 2);
            }

            private void Component_InstanceEvent(object sender, int e)
            {
                InstanceEventResult = e;
            }

            private static void Component_StaticEvent(object sender, int e)
            {
                StaticEventResult = e;
            }
        }


        public class Component1
        {
            public object config;
            public object any = new object();
        }

        public class Component2
        {
            [Field]
            public object config { get; set; }
            public object any = new object();
        }

        public class Component3
        {
            public object config { get; set; }
            public object any = new object();
        }

        [Test]
        public static void TestBridgeFields()
        {
            var c = new Component();
            Assert.NotNull(c.InstanceField);
            Assert.NotNull(c.InstanceProperty);
            Assert.NotNull(Component.StaticField);
            Assert.NotNull(Component.StaticProperty);

            c.ctor = 6;
            c.config = 1;
            c.events = 2;
            c.inherits = 3;
            c.properties = 4;
            c.statics = 5;

            Assert.AreEqual(6, c.ctor);
            Assert.AreEqual(1, c.config);
            Assert.AreEqual(2, c.events);
            Assert.AreEqual(3, c.inherits);
            Assert.AreEqual(4, c.properties);
            Assert.AreEqual(5, c.statics);

            Assert.AreEqual(1, c.InstanceEventResult);
            Assert.AreEqual(2, Component.StaticEventResult);

            var c1 = new Component1();
            Assert.NotNull(c1.any);

            var c2 = new Component2();
            Assert.NotNull(c2.any);

            var c3 = new Component3();
            Assert.NotNull(c3.any);
        }
    }
}