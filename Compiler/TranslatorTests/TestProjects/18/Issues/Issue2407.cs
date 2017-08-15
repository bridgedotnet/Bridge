using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bridge;

namespace TestIssue2407
{
    class Bridge2407
    {
        [Name("ChangedStaticName")]
        public static string DoSomethingStaticWithName()
        {
            // Should use named function expressions
            // like doSomething: function doSomething() { }
            return "Static";
        }

        [Name("ChangedInstanceName")]
        public string DoSomethingInstanceWithName()
        {
            // Should use named function expressions
            // like doSomething: function doSomething() { }
            return "Instance";
        }

        public static void DoSomethingStatic()
        {
            // Should use named function expressions
            // like doSomething: function doSomething() { }
        }

        public void DoSomethingInstance()
        {
            // Should use named function expressions
            // like doSomething: function doSomething() { }
        }
    }
}
