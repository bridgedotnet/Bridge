using Bridge.Linq;
using Bridge.Test;
using System.Linq;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_BRIDGECONSOLE)]
    [TestFixture]
    public class BridgeConsoleTests
    {
        [TearDown]
        public static void HideConsole()
        {
            Bridge.Utils.Console.Hide();
        }

        [Test]
        public void TestLogMessageObject()
        {
            AssertLogMessageObject("#0 - ", "Test Bridge Console Log Message Object", "Test Bridge Console Log Message Object");
            AssertLogMessageObject("#1 - ", true, "true");
            AssertLogMessageObject("#2 - ", false, "false");
            AssertLogMessageObject("#3 - ", -1, "-1");
            AssertLogMessageObject("#4 - ", 1, "1");
            AssertLogMessageObject("#5 - ", -12345678, "-12345678");
            AssertLogMessageObject("#6 - ", 12345678, "12345678");
            AssertLogMessageObject("#7 - ", -1L, "-1");
            AssertLogMessageObject("#8 - ", 1L, "1");
            AssertLogMessageObject("#9 - ", -12345678L, "-12345678");
            AssertLogMessageObject("#10 - ", 12345678L, "12345678");
            AssertLogMessageObject("#11 - ", 1UL, "1");
            AssertLogMessageObject("#12 - ", 12345678UL, "12345678");
            AssertLogMessageObject("#13 - ", -1d, "-1");
            AssertLogMessageObject("#14 - ", 1d, "1");
            AssertLogMessageObject("#15 - ", -12345678d, "-12345678");
            AssertLogMessageObject("#16 - ", 12345678d, "12345678");
            AssertLogMessageObject("#17 - ", -1.12345678, "-1.12345678");
            AssertLogMessageObject("#18 - ", 1.12345678, "1.12345678");
            AssertLogMessageObject("#19 - ", -12345678.12345678, "-12345678.12345678");
            AssertLogMessageObject("#20 - ", 12345678.12345678, "12345678.12345678");
            AssertLogMessageObject("#21 - ", -1m, "-1");
            AssertLogMessageObject("#22 - ", 1m, "1");
            AssertLogMessageObject("#23 - ", -12345678m, "-12345678");
            AssertLogMessageObject("#24 - ", 12345678m, "12345678");
            AssertLogMessageObject("#25 - ", -1.12345678m, "-1.12345678");
            AssertLogMessageObject("#26 - ", 1.12345678m, "1.12345678");
            AssertLogMessageObject("#27 - ", -12345678.12345678m, "-12345678.12345678");
            AssertLogMessageObject("#28 - ", 12345678.12345678m, "12345678.12345678");
            AssertLogMessageObject("#29 - ", null, "null");
            AssertLogMessageObject("#30 - ", new object(), "[object Object]");
            AssertLogMessageObject("#31 - ", new ClassA(), "I'm ClassA");
            AssertLogMessageObject("#32 - ", new ClassB(), "[object Object]");
        }

        [Test]
        public void TestLogMessageString()
        {
            AssertLogMessageObject("#1 - ", "Test Bridge Console Log Message String", "Test Bridge Console Log Message String");
            AssertLogMessageObject("#2 - ", null, "null");
        }

        [Test]
        public void TestDebugMessageString()
        {
            AssertDebugMessageString("#1 - ", "Test Bridge Console Debug Message String", "Test Bridge Console Debug Message String");
            AssertDebugMessageString("#2 - ", null, "null");
        }

        [Test]
        public void TestErrorMessageString()
        {
            AssertErrorMessageString("#1 - ", "Test Bridge Console Error Message String", "Test Bridge Console Error Message String");
            AssertErrorMessageString("#2 - ", null, "null");
        }

        [Test]
        public void TestToggling()
        {
            Bridge.Utils.Console.Hide();
            Bridge.Utils.Console.Log("Hide/Log");
            AssertMessage("#1 - ", "Hide/Log");

            Bridge.Utils.Console.Instance.Close();
            Bridge.Utils.Console.Instance.Close();
            Bridge.Utils.Console.Hide();
            Bridge.Utils.Console.Log("Close/Close/Hide/Log");
            AssertMessage("#2 - ", "Close/Close/Hide/Log");

            Bridge.Utils.Console.Instance.Close();
            Bridge.Utils.Console.Hide();
            Bridge.Utils.Console.Hide();
            Bridge.Utils.Console.Log("Close/Hide/Hide/Log");
            AssertMessage("#3 - ", "Close/Hide/Hide/Log");

            Bridge.Utils.Console.Instance.Close();
            Bridge.Utils.Console.Hide();
            Bridge.Utils.Console.Show();
            Bridge.Utils.Console.Show();
            Bridge.Utils.Console.Log("Close/Hide/Show/Show/Log");
            AssertMessage("#4 - ", "Close/Hide/Show/Show/Log");

            Bridge.Utils.Console.Hide();
            Bridge.Utils.Console.Show();
            AssertMessage("#5 Messages preserved after - ", "Close/Hide/Show/Show/Log");
            Bridge.Utils.Console.Hide();
            Bridge.Utils.Console.Show();
            Bridge.Utils.Console.Log("Hide/Show/Hide/Show/Log");
            AssertMessage("#6 - ", "Hide/Show/Hide/Show/Log");
        }

        private class ClassA
        {
            public override string ToString()
            {
                return "I'm ClassA";
            }
        }

        private class ClassB
        {
        }

        private void AssertLogMessageObject(string description, object message, string expected)
        {
            Bridge.Utils.Console.Log(message);
            AssertMessage(description, expected);
        }

        private void AssertLogMessageString(string description, string message, string expected)
        {
            Bridge.Utils.Console.Log(message);
            AssertMessage(description, expected);
        }

        private void AssertDebugMessageString(string description, string message, string expected)
        {
            Bridge.Utils.Console.Debug(message);
            AssertMessage(description, expected, Bridge.Utils.Console.MessageColor.Debug);
        }

        private void AssertErrorMessageString(string description, string message, string expected)
        {
            Bridge.Utils.Console.Error(message);
            AssertMessage(description, expected, Bridge.Utils.Console.MessageColor.Error);
        }

        private void AssertMessage(string description, string expected, string color = Bridge.Utils.Console.MessageColor.Info)
        {
            var el = Bridge.Utils.Console.Instance.CurrentMessageElement as Html5.HTMLLIElement;

            if (el == null)
            {
                Assert.Fail(description + "Could not get current message as HTMLLIElement");
                return;
            }

            Assert.True(true, description + "Message <li> element exists");

            var span = el.GetElementsByTagName("span").FirstOrDefault();

            if (span == null)
            {
                Assert.Fail(description + "Could not get message span element");
                return;
            }

            Assert.True(true, description + "Message <span> element exists");
            Assert.AreEqual(expected, span.InnerHTML, description + "Message is correct");
            Assert.AreEqual(NormalizeHexStyleColor(color), ConvertStyleColor(span.Style.Color), description + "Message <span> color (" + span.Style.Color + ") should be " + color);
        }

        private string ConvertStyleColor(string styleColor)
        {
            var r = new Bridge.Text.RegularExpressions.Regex("^rgb\\((\\d+),\\s*(\\d+),\\s*(\\d+)\\)$");

            var items = r.Exec(styleColor);

            if (items != null && items.Length >= 4)
            {
                styleColor = RgbToHex(items[1], items[2], items[3]);
            }

            return NormalizeHexStyleColor(styleColor);
        }

        private string NormalizeHexStyleColor(string styleColor)
        {
            if (string.IsNullOrEmpty(styleColor) || !styleColor.StartsWith("#"))
            {
                return styleColor;
            }

            var subColor = styleColor.Substring(1);
            if (subColor.Length < 1)
            {
                return styleColor;
            }
            else if (subColor.Length == 3)
            {
                subColor = Duplicate(subColor);
            }

            if (subColor.Length < 6)
            {
                var toAdd = "000000".Substring(0, 6 - subColor.Length);
                subColor = toAdd + subColor;
            }

            styleColor = (styleColor[0] + subColor).ToUpper();

            return styleColor;
        }

        private string Duplicate(char c)
        {
            return c.ToString() + c.ToString();
        }

        private string Duplicate(string s)
        {
            if (s == null)
            {
                return null;
            }

            string r = string.Empty;
            for (int i = 0; i < s.Length; i++)
            {
                r += Duplicate(s[i]);
            }

            return r;
        }

        private string RgbToHex(string r, string g, string b)
        {
            return "#" + ToHexNumber(r) + ToHexNumber(g) + ToHexNumber(b);
        }

        private string ToHexNumber(string n)
        {
            var i = 0;
            int.TryParse(n, out i);

            var r = i.ToString("X2");

            return r;
        }
    }
}