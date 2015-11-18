using Bridge;
using Bridge.Html5;

namespace TestIssue461
{
    public class Issue461
    {
        public static void Test()
        {
            InputElement input = new InputElement();

            input.OnChange += (ev) =>
            {
                // Tests if ev.CurrentTarget.Value compiles
                Console.Log("ev.CurrentTarget.Value: " + ev.CurrentTarget.Value);

                // Tests if ev.IsMouseEvent() compiles
                Console.Log("IsMouseEvent: " + ev.IsMouseEvent());
            };

            AnchorElement anchor = new AnchorElement();

            anchor.OnClick += (ev) =>
            {
                // Tests if ev.CurrentTarget.Href compiles
                Console.Log("ev.CurrentTarget.Href: " + ev.CurrentTarget.Href);
            };

            // Test if Document.GetElementById<>() compiles
            DivElement div = Document.GetElementById<DivElement>("div1");

            // Tests if Element is still a superclass of all the element classes and the following code compiles
            Element element;

            element = new InputElement();
            element = new TextAreaElement();
        }
    }
}
