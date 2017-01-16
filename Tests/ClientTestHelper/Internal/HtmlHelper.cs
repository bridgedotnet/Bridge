using Bridge.Html5;

namespace Bridge.ClientTestHelper
{
    public static class HtmlHelper
    {
        private const string TEST_FIXTURE_ELEMENT = "qunit-fixture";

        public static HTMLDivElement FixtureElement
        {
            get
            {
                return Document.GetElementById<HTMLDivElement>(TEST_FIXTURE_ELEMENT);
            }
        }
    }
}