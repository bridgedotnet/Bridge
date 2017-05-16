using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2638 - {0}")]
    public class Bridge2638
    {
        public class Props : IHaveStore<FormEditStore>
        {
            public FormEditStore Store { get; set; }
        }

        public class FormEditStore : IAmSinglePropertyStore<string>
        {
            public string ViewModel { get { return "It works!"; } }
        }

        public interface IAmSinglePropertyStore<TViewModel>
        {
            TViewModel ViewModel { get; }
        }

        public interface IHaveStore<out TStore>
        {
            TStore Store { get; }
        }

        private static void DoSomething<TProps, TStoreState>(TProps props) where TProps : IHaveStore<IAmSinglePropertyStore<TStoreState>>
        {
            Assert.AreEqual("It works!", props.Store.ViewModel);
        }

        [Test]
        public static void TestContrvariance()
        {
            DoSomething<Props, string>(new Props { Store = new FormEditStore() });
        }
    }
}