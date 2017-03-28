#define TEST_ONE
#define TEST_TWO

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2497 - {0}")]
    public class Bridge2497
    {
        public abstract partial class ConnectOptions
        {
#if !TEST_ONE

#endif
            public abstract string AssemblyName
            { get; }

#if !TEST_ONE

#endif
            public virtual string BrandName => Provider.ToString();

#if !TEST_ONE

#endif
            public bool HasHdsAlwaysEnabled
            { get; set; }

#if !TEST_ONE

#endif
            public string Name
            { get; set; } = string.Empty;

#if !TEST_ONE

#endif
            public string Password
            { get; set; } = string.Empty;

#if !TEST_ONE

#endif
            public object Provider
            { get; set; } = new object();

#if !TEST_ONE

#endif
            public string User
            { get; set; } = string.Empty;
        }

        [EditorBrowsable(EditorBrowsableState.Never)]
        public class NTConnectOptions : ConnectOptions
        {
#if !TEST_ONE

#endif
            public override string AssemblyName => "test.dll";

#if !TEST_ONE

#endif
            public override string BrandName => "test";

#if !TEST_ONE
#endif
            public bool LogConnectionLoss { get; set; }

            public NTConnectOptions()
            {
                HasHdsAlwaysEnabled = true;
                LogConnectionLoss = true;
                Provider = new object();
                Server = string.Empty;
                System = "NT";
            }

#if !TEST_ONE
#endif
            public int Port { get; set; }

#if !TEST_ONE
#endif
            public string Server { get; set; }

#if !TEST_ONE

#endif
            public string System { get; set; }


#if !TEST_ONE
            public bool UseWebSocket { get; set; }
#else
            internal bool UseWebSocket { get; private set; } = true;
#endif
        }

        public class Options
        {
#if !TEST_ONE
            [Browsable(false)]
#endif
            public Object TraceLevels
            { get; set; } = new object();
        }

        public sealed partial class GeneralOptions
        {
#if !TEST_ONE
            [Browsable(false)]
#endif
            public CultureInfo CurrentCulture
            { get; set; }
#if !TEST_TWO
            = System.Threading.Thread.CurrentThread.CurrentCulture;
#else
            = CultureInfo.CurrentCulture;
#endif

#if !TEST_ONE
            [Browsable(false)]
#endif
            public CultureInfo CurrentUICulture
            { get; set; }
#if !TEST_TWO
            = System.Threading.Thread.CurrentThread.CurrentUICulture;
#else
            = CultureInfo.CurrentCulture;
#endif

#if !TEST_TWO
#if !TEST_ONE
            [Browsable(false)]
#endif
            public int LogsMaintainedDays
            { get; set; } = 20;

#if !TEST_ONE
            [Display(ResourceType = typeof(Resource), GroupName = "GuiPreferences", Name = "GuiGeneralOptionsMailAlertMsgs", Order = 6)]
#endif
            public string MailAlertMessagesTo
            { get; set; } = string.Empty;
#endif
        }

        public class ServerOptions
        {
#if !TEST_ONE
            [Display(ResourceType = typeof(Resource), GroupName = "GuiGeneral", Name = "GuiApplicationType", Order = 12)]
#endif
            public Object ApplicationType
            { get; set; } = new object();

#if !TEST_TWO
#if !TEST_ONE
            [Display(ResourceType = typeof(Resource), GroupName = "GuiGeneral", Name = "GuiServerName", Order = 11)]
#endif
            public string ServerName
            { get; set; } = string.Empty;

#if !THIN_CLIENT
            [Browsable(false)]
#endif
            public bool UseNagle
            { get; set; }
#endif
        }

        [Test]
        public static void TestPropertyInitializerWithDirective()
        {
            Assert.NotNull(new Options().TraceLevels);
            Assert.NotNull(new GeneralOptions().CurrentCulture);
            Assert.NotNull(new GeneralOptions().CurrentUICulture);
            Assert.NotNull(new ServerOptions().ApplicationType);
        }
    }
}