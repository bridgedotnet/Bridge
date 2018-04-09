using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bridge;

namespace TestIssue1754
{
    [Bridge.Convention(Member = ConventionMember.Field | ConventionMember.Property, Notation = Notation.CamelCase)]
    class Issue1754
    {
        public Issue1754()
        {
            // Checking #1754 Do not change member name case if all alpha chars are UPPERCASE

            F_STATIC_S1 = "Name should be F_STATIC_S1";

            F_STaTIC_S2 = "Name should be f_STaTIC_S2";

            F = "Name should be f";

            P_STATIC_S1 = "Name should be P_STATIC_S1";

            P_STaTIC_S2 = "Name should be p_STaTIC_S2";

            P = "Name should be p";
        }

        // Name should be F_STATIC_S1
        public static string F_STATIC_S1;

        // Name should be f_STaTIC_S2
        public static string F_STaTIC_S2;

        // Name should be f
        public static string F;

        // Name should be P_STATIC_S1
        public static string P_STATIC_S1
        {
            get; set;
        }

        // Name should be p_STaTIC_S2
        public static string P_STaTIC_S2
        {
            get; set;
        }

        // Name should be p
        public static string P
        {
            get; set;
        }
    }
}
