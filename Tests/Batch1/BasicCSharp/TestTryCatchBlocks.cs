using Bridge.Test.NUnit;
using System;

#pragma warning disable 162    // CS0162: Unreachable code detected. Disable because we want to assert that code does not reach unreachable parts

namespace Bridge.ClientTest.BasicCSharp
{
    // Tests try and catch blocks
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Try/Catch - {0}")]
    public class TestTryCatchBlocks
    {
        #region Tests

        // [#84] Does not compile
        [Test(ExpectedCount = 1)]
        public static void SimpleTryCatch()
        {
            var result = TryCatch("Good");

            Assert.AreEqual("Good", result, "TryCatch() executes");
        }

        [Test(ExpectedCount = 3)]
        public static void CaughtExceptions()
        {
            TryCatchWithCaughtException();
            Assert.True(true, "Exception catch");

            TryCatchWithCaughtTypedException();
            Assert.True(true, "Typed exception catch");

            var exceptionMessage = TryCatchWithCaughtArgumentException();
            Assert.AreEqual("catch me", exceptionMessage, "Typed exception catch with exception message");
        }

        [Test(ExpectedCount = 12)]
        public static void ThrownExceptions()
        {
            // #230
            Assert.Throws<Exception>(TryCatchWithNotCaughtTypedException, "A.Typed exception is not Caught");
            Assert.True(IsATry, "A. exception not caught - try section called");
            Assert.True(!IsACatch, "A. exception not caught - catch section not called");

            // #229
            Assert.Throws<Exception>(TryCatchWithNotCaughtTypedExceptionAndArgument, "[#229] B. Typed exception is not Caught; and argument");
            Assert.True(IsBTry, "[#229] B. exception not caught - try section called");
            Assert.True(!IsBCatch, "B. exception not caught - catch section not called");

            // #231
            Assert.Throws<InvalidOperationException>(TryCatchWithRethrow, "[#231] C. Rethrow");
            Assert.True(IsCTry, "C. exception caught and re-thrown - try section called");
            Assert.True(IsCCatch, "C. exception caught and re-thrown - catch section called");

            Assert.Throws(TryCatchWithRethrowEx, new Func<object, bool>((error) =>
            {
                return ((Exception)error).Message == "catch me";
            }), "D. Rethrow with parameter");
            Assert.True(IsDTry, "D. exception caught and re-thrown  - try section called");
            Assert.True(IsDCatch, "D. exception caught and re-thrown  - catch section called");
        }

        [Test(ExpectedCount = 1)]
        public static void Bridge320()
        {
            string exceptionMessage = string.Empty;

            try
            {
                Script.Write("\"someString\".SomeNotExistingMethod();");
            }
            catch (Exception ex)
            {
                exceptionMessage = ex.Message;
            }

            // var expectedMessage = Utilities.BrowserHelper.IsPhantomJs()
            //    ? "undefined is not a constructor (evaluating '\"someString\".SomeNotExistingMethod()')"
            //    : "\"someString\".SomeNotExistingMethod is not a function";

            Assert.True(exceptionMessage.Contains("SomeNotExistingMethod"), "ex.Message works on built-in JavaScript type");
        }

        [Test(ExpectedCount = 1)]
        public static void Bridge343()
        {
            string exceptionMessage = string.Empty;

            var i = 0;

            try
            {
                var r = 10 / i;
            }
            catch (ArgumentException)
            {
            }
            catch (Exception ex)
            {
                exceptionMessage = ex.Message;
            }

            Assert.True(!string.IsNullOrEmpty(exceptionMessage), "Double catch block with general Exception works");
        }

        #endregion Tests

        private static string TryCatch(string s)
        {
            try
            {
                return s;
            }
            catch
            {
                return string.Empty;
            }
        }

        #region CaughtExceptions

        private static void TryCatchWithCaughtException()
        {
            try
            {
                throw new Exception();
            }
            catch
            {
            }
        }

        private static void TryCatchWithCaughtTypedException()
        {
            try
            {
                throw new Exception();
            }
            catch (Exception)
            {
            }
        }

        private static string TryCatchWithCaughtArgumentException()
        {
            try
            {
                throw new ArgumentException("catch me");
            }
            catch (ArgumentException ex)
            {
                return ex.Message;
            }
        }

        #endregion CaughtExceptions

        #region ThrownExceptions

        public static bool IsATry
        {
            get;
            set;
        }

        public static bool IsACatch
        {
            get;
            set;
        }

        private static void TryCatchWithNotCaughtTypedException()
        {
            IsATry = false;
            IsACatch = false;

            try
            {
                IsATry = true;
                throw new Exception("catch me");
            }
            catch (ArgumentException)
            {
                IsATry = true;
            }

            IsATry = false;
        }

        public static bool IsBTry
        {
            get;
            set;
        }

        public static bool IsBCatch
        {
            get;
            set;
        }

        private static void TryCatchWithNotCaughtTypedExceptionAndArgument()
        {
            IsBTry = false;
            IsBCatch = false;

            try
            {
                IsBTry = true;
                throw new Exception("catch me");
                IsBTry = false;
            }
            catch (InvalidCastException ex)
            {
                IsBCatch = true;
                var s = ex.Message;
            }

            IsBTry = false;
        }

        public static bool IsCTry
        {
            get;
            set;
        }

        public static bool IsCCatch
        {
            get;
            set;
        }

        private static void TryCatchWithRethrow()
        {
            IsCTry = false;
            IsCCatch = false;

            try
            {
                IsCTry = true;
                throw new InvalidOperationException("catch me");
                IsCTry = false;
            }
            catch (Exception)
            {
                IsCCatch = true;
                throw;
            }

            IsCTry = false;
        }

        public static bool IsDTry
        {
            get;
            set;
        }

        public static bool IsDCatch
        {
            get;
            set;
        }

        private static void TryCatchWithRethrowEx()
        {
            IsDTry = false;
            IsDCatch = false;

            try
            {
                IsDTry = true;
                throw new ArgumentException("catch me");
                IsDTry = false;
            }
            catch (Exception ex)
            {
                IsDCatch = true;
                throw ex;
            }

            IsDTry = false;
        }

        #endregion ThrownExceptions
    }
}