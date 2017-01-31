using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2210 - {0}")]
    public class Bridge2210
    {
        public class LoginAgent : Agent_Logic
        {
        }

        public class Agent_Logic
        {
        }

        public class Hello : ObjSingleton<Hello>
        {
        }

        public class ObjSingleton<T> where T : class, new()
        {
            private static T instance = null;

            public static T Instance
            {
                get
                {
                    if (instance == null)
                    {
                        instance = new T();
                    }
                    return instance;
                }
            }
        }

        public class GoSington<T> : object where T : GoSington<T>
        {
            private static T instance = null;

            public static T Instance
            {
                get
                {
                    if (instance == null)
                    {
                    }
                    return instance;
                }
            }
        }

        [Test]
        public static void TestTypeOrdering()
        {
            Assert.NotNull(typeof(Hello));
        }
    }
}