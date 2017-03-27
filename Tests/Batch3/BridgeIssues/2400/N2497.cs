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