using Bridge.Test.NUnit;
using System;
using System.Linq;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "ConditionAccess - {0}")]
    public class TestConditionAccess
    {
        [Test]
        public static void TestBasic()
        {
            Customer[] customers1 = null;
            Customer[] customers2 = new Customer[] { new Customer(null), new Customer(new[] { "1", "2" }), null };

            Assert.Null(customers1?[0].Method1(customers1?[0].Orders.Count())?.Length);
            Assert.Null(customers2[2]?.Method1(customers2?[0].Orders.Count())?.Length);
            Assert.AreEqual(1, customers2?[1].Method1(customers2?[1].Orders.Count())?.Length);

            Assert.Null(GetCustomers(customers1)?[0].Method1(customers1?[0].Orders.Count())?.Length);
            Assert.Null(GetCustomers(customers2)[2]?.Method1(customers2?[0].Orders.Count())?.Length);
            Assert.AreEqual(1, GetCustomers(customers2)?[1].Method1(GetCustomers(customers2)?[1].Orders.Count())?.Length);

            Assert.Null(customers1?[0].Orders?.Concat(null)?.Length);
            Assert.Null(customers2[2]?.Orders?.Concat(null)?.Length);
            Assert.Null(customers2[0]?.Orders?.Concat(null)?.Length);
            Assert.AreEqual(2, customers2[1]?.Orders?.Concat(null)?.Length);

            Assert.Null(customers1?[0].Orders?.Length);
            Assert.Null(customers2[2]?.Orders?.Length);
            Assert.Null(customers2[0]?.Orders?.Length);
            Assert.AreEqual(2, customers2?[1]?.Orders?.Length);

            Assert.Null(customers1?[0].Orders?.Count());
            Assert.Null(customers2[2]?.Orders?.Count());
            Assert.Null(customers2[0].Orders?.Count());
            Assert.AreEqual(2, customers2?[1].Orders?.Count());

            Assert.Null(customers1?[0].Orders?.Concat(null).Concat(null)?.Length);
            Assert.Null(customers2[2]?.Orders?.Concat(null).Concat(null)?.Length);
            Assert.Null(customers2?[0].Orders?.Concat(null).Concat(null)?.Length);
            Assert.AreEqual(2, customers2?[1].Orders?.Concat(null).Concat(null)?.Length);

            Assert.Null(customers1?[0].Method1(nameof(GetStrings)));
            Assert.Null(customers2[2]?.Method1(nameof(GetStrings)));
            Assert.AreEqual("GetStrings", customers2?[1].Method1(nameof(GetStrings)));

            Assert.Null(GetCustomers(customers1)?.Select(c => c)?.Select(c2 => c2)?.Count());
            Assert.AreEqual(3, GetCustomers(customers2)?.Select(c => c)?.Select(c2 => c2)?.Count());

            Assert.Null(GetCustomers(customers1)?[0].fields?.Length);
            Assert.Null(GetCustomers(customers1)?[0]?.Orders.Count());
            Assert.Null(GetCustomers(customers1)?[0]?.Orders?.Count());
            Assert.Null(customers1?[0].Orders.Count());
            Assert.Null(customers1?[0]?.Orders?.Count());
            Assert.Null(customers1?[0]?.fields?.Length);
            Assert.Null(GetCustomers(customers1)?[0].Orders?.Count());

            Assert.Null(customers1?[0]?.fields?.Length);
            Assert.Null(customers1?[0]?.Orders?.Count());
            customers1?[0].Method2();
            customers1?[0]?.Method2();

            string[] strings = new string[1];
            Assert.Null(GetStrings(null)?.Length);
            Assert.AreEqual(1, strings?.Length ?? 0);
            Assert.Null(strings?[0]);

            Func<string> action1 = () => "test";
            Func<string> action2 = null;
            Assert.AreEqual("test", action1?.Invoke());
            Assert.Null(action2?.Invoke());

            object o1 = "test";
            object o2 = null;
            Assert.AreEqual(4, (o1 as string)?.Length);
            Assert.Null((o2 as string)?.Length);
        }

        private static string[] GetStrings(string[] strings)
        {
            return strings;
        }

        private static Customer[] GetCustomers(Customer[] customers)
        {
            return customers;
        }

        public class Customer
        {
            public Customer(string[] values)
            {
                fields = values;
                Orders = values;
            }

            public string[] fields;

            public string[] Orders
            {
                get;
                set;
            }

            public string Method1(object s)
            {
                return s.ToString();
            }

            public void Method2()
            {
            }
        }
    }
}