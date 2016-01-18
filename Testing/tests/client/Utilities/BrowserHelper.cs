using Bridge;

namespace Bridge.ClientTest.Utilities
{
    public class BrowserHelper
    {
        public static bool IsPhantomJs()
        {
            return Script.Get<string>("navigator.userAgent").Contains("PhantomJS");
        }

        public static bool IsFirefox()
        {
            return Script.Get<string>("navigator.userAgent").Contains("Firefox");
        }

        public static bool IsChrome()
        {
            return Script.Get<string>("navigator.userAgent").Contains("Chrome");
        }

        public static string GetBrowserInfo()
        {
            var userAgent = Script.Get<string>("navigator.userAgent");
            var appVersion = Script.Get<string>("navigator.appVersion");
            var product = Script.Get<string>("navigator.product");
            var appName = Script.Get<string>("navigator.appName");
            var appCodeName = Script.Get<string>("navigator.appCodeName");

            return string.Format("userAgent:{0} appVersion:{1} product:{2} appName:{3} appCodeName:{4}",
                userAgent, appVersion, product, appName, appCodeName);
        }
    }
}
