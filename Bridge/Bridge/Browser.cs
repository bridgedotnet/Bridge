namespace Bridge
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [External]
    [Name("Bridge.Browser")]
    public sealed class Browser
    {
        public static readonly bool IsStrict;
        public static readonly bool IsIEQuirks;
        public static readonly bool IsOpera;
        public static readonly bool IsOpera10_5;
        public static readonly bool IsWebKit;
        public static readonly bool IsChrome;
        public static readonly bool IsSafari;
        public static readonly bool IsSafari3;
        public static readonly bool IsSafari4;
        public static readonly bool IsSafari5;
        public static readonly bool IsSafari5_0;
        public static readonly bool IsSafari2;
        public static readonly bool IsIE;
        public static readonly bool IsIE6;
        public static readonly bool IsIE7;
        public static readonly bool IsIE7m;
        public static readonly bool IsIE7p;
        public static readonly bool IsIE8;
        public static readonly bool IsIE8m;
        public static readonly bool IsIE8p;
        public static readonly bool IsIE9;
        public static readonly bool IsIE9m;
        public static readonly bool IsIE9p;
        public static readonly bool IsIE10;
        public static readonly bool IsIE10m;
        public static readonly bool IsIE10p;
        public static readonly bool IsIE11;
        public static readonly bool IsIE11m;
        public static readonly bool IsIE11p;
        public static readonly bool IsGecko;
        public static readonly bool IsGecko3;
        public static readonly bool IsGecko4;
        public static readonly bool IsGecko5;
        public static readonly bool IsGecko10;
        public static readonly bool IsFF3_0;
        public static readonly bool IsFF3_5;
        public static readonly bool IsFF3_6;
        public static readonly bool IsFF4;
        public static readonly bool IsFF5;
        public static readonly bool IsFF10;
        public static readonly bool IsLinux;
        public static readonly bool IsWindows;
        public static readonly bool IsMac;
        public static readonly double ChromeVersion;
        public static readonly double FirefoxVersion;
        public static readonly double IeVersion;
        public static readonly double OperaVersion;
        public static readonly double SafariVersion;
        public static readonly double WebKitVersion;
        public static readonly bool IsSecure;
        public static readonly bool IsiPhone;
        public static readonly bool IsiPod;
        public static readonly bool IsiPad;
        public static readonly bool IsBlackberry;
        public static readonly bool IsAndroid;
        public static readonly bool IsDesktop;
        public static readonly bool IsTablet;
        public static readonly bool IsPhone;
        public static readonly bool iOS;
        public static readonly bool Standalone;
    }
}