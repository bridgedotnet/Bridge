using Bridge;
using ExternalNS3516;
using System;
using System.Collections.Generic;
using System.Linq;

namespace TestIssue3516
{
    public class ExternalCastRuleTest
    {
        public static void DefaultExternalCast()
        {
            object obj = "test";
            var el = (ExternalClass3516)obj;
        }

        [Rules(ExternalCast = ExternalCastRule.Plain)]
        public static void PlainExternalCast()
        {
            object obj = "test";
            var el = (ExternalClass3516)obj;
        }

        [Rules(ExternalCast = ExternalCastRule.Managed)]
        public static void ManagedExternalCast()
        {
            object obj = "test";
            var el = (ExternalClass3516)obj;
        }
    }
}

namespace ExternalNS3516
{
    [External]
    public class ExternalClass3516
    {
    }
}
