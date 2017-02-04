using System;
using System.Linq;
using System.Collections.Generic;

using Bridge.Contract;

using Mono.Cecil;

using NSubstitute;

namespace Bridge.Translator.Tests.Helpers
{
    class TestAssemblyHelper
    {
        public class TestClassNames
        {
            private const string PREFIX = "Bridge.Translator.Tests.Assembly.";

            /// <summary>
            /// ObjectLiteral tests
            /// </summary>
            public const string ISSUES_N2276_SHOULD_FAIL = PREFIX + "Issues.N2276.ShouldFail";
        }
    }
}
