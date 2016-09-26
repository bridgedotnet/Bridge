using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1871 - {0}")]
    public class Bridge1871
    {
        /// <summary>
        /// </summary>
        ///<param name="args"></param>
        ///<param name="args1"></param>
        private static void DoSomething(string args)
        {

        }

        [Test]
        public void TestErrorCommentNotThrowCompilerException()
        {
            Assert.True(true, "Should compile successfully");
        }
    }
}