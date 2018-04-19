using Bridge.Test.NUnit;
using System;

#pragma warning disable 162    // CS0162: Unreachable code detected. Disable because we want to assert that code does not reach unreachable parts

namespace Bridge.ClientTest.BasicCSharp
{
    internal class Data
    {
        public int Count
        {
            get;
            set;
        }
    }

    // Tests try and catch blocks
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Try/Catch/Finally - {0}")]
    public class TestTryCatchFinallyBlocks
    {
        #region Tests

        [Test(ExpectedCount = 1)]
        public static void SimpleTryCatchFinally()
        {
            var data = new Data();
            TryCatchFinally(data);

            Assert.AreEqual(2, data.Count, "TryCatchFinally() executes");
        }

        [Test(ExpectedCount = 4)]
        public static void CaughtExceptions()
        {
            var data = new Data();
            TryCatchFinallyWithCaughtException(data);

            Assert.AreEqual(7, data.Count, "Exception catch, Finally works");

            data = new Data();
            TryCatchFinallyWithCaughtTypedException(data);

            Assert.AreEqual(7, data.Count, "Typed exception catch, Finally works");

            data = new Data();
            var exceptionMessage = TryCatchFinallyWithCaughtArgumentException(data);

            Assert.AreEqual("catch me", exceptionMessage, "Typed exception catch with exception message");
            Assert.AreEqual(7, data.Count, "Typed exception catch with exception message, Finally works");
        }

        [Test(ExpectedCount = 16)]
        public static void ThrownExceptions()
        {
            //#230
            Assert.Throws<Exception>(TryCatchFinallyWithNotCaughtTypedException, "A. Typed exception is not caught");
            Assert.True(IsATry, "A. exception not caught - try section called");
            Assert.True(!IsACatch, "A. exception not caught - catch section not called");
            Assert.True(IsAFinally, "A. exception not caught - finally section called");

            //#229
            Assert.Throws<Exception>(TryCatchWithNotCaughtTypedExceptionAndArgument, "[#229] B. Typed exception is not caught; and argument");
            Assert.True(IsBTry, "B. exception not caught - try section called");
            Assert.True(!IsBCatch, "B. exception not caught - catch section not called");
            Assert.True(IsBFinally, "B. exception not caught - finally section called");

            //#231
            Assert.Throws<InvalidOperationException>(TryCatchWithRethrow, "[#231] C. Rethrow");
            Assert.True(IsCTry, "C. exception caught and re-thrown  - try section called");
            Assert.True(IsCCatch, "C. exception caught and re-thrown  - catch section called");
            Assert.True(IsCFinally, "C. exception caught and re-thrown  - finally section called");

            Assert.Throws(TryCatchWithRethrowEx, new Func<object, bool>((error) =>
            {
                return ((Exception)error).Message == "catch me";
            }), "D. Rethrow with parameter");
            Assert.True(IsDTry, "D. exception caught and re-thrown  - try section called");
            Assert.True(IsDCatch, "D. exception caught and re-thrown  - catch section called");
            Assert.True(IsDFinally, "D. exception caught and re-thrown  - finally section called");
        }

        #endregion Tests

        private static void TryCatchFinally(Data data)
        {
            try
            {
                data.Count++;
            }
            catch
            {
            }
            finally
            {
                data.Count++;
            }
        }

        #region CaughtExceptions

        private static void TryCatchFinallyWithCaughtException(Data data)
        {
            try
            {
                data.Count = data.Count + 1;
                throw new Exception();
                data.Count = data.Count - 1;
            }
            catch
            {
                data.Count = data.Count + 2;
            }
            finally
            {
                data.Count = data.Count + 4;
            }
        }

        private static void TryCatchFinallyWithCaughtTypedException(Data data)
        {
            try
            {
                data.Count = data.Count + 1;
                throw new Exception("catch me");
                data.Count = data.Count - 1;
            }
            catch (Exception)
            {
                data.Count = data.Count + 2;
            }
            finally
            {
                data.Count = data.Count + 4;
            }
        }

        private static string TryCatchFinallyWithCaughtArgumentException(Data data)
        {
            try
            {
                data.Count = data.Count + 1;
                throw new ArgumentException("catch me");
                data.Count = data.Count - 1;
            }
            catch (ArgumentException ex)
            {
                data.Count = data.Count + 2;

                return ex.Message;
            }
            finally
            {
                data.Count = data.Count + 4;
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

        public static bool IsAFinally
        {
            get;
            set;
        }

        private static void TryCatchFinallyWithNotCaughtTypedException()
        {
            IsATry = false;
            IsACatch = false;
            IsAFinally = false;

            try
            {
                IsATry = true;
                throw new Exception("catch me");
                IsATry = false;
            }
            catch (ArgumentException)
            {
                IsACatch = true;
            }
            finally
            {
                IsAFinally = true;
            }
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

        public static bool IsBFinally
        {
            get;
            set;
        }

        private static void TryCatchWithNotCaughtTypedExceptionAndArgument()
        {
            IsBTry = false;
            IsBCatch = false;
            IsBFinally = false;

            try
            {
                IsBTry = true;
                throw new Exception("catch me");
                IsBTry = false;
            }
            catch (InvalidCastException ex)
            {
                var s = ex.Message;
                IsBCatch = true;
            }
            finally
            {
                IsBFinally = true;
            }
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

        public static bool IsCFinally
        {
            get;
            set;
        }

        private static void TryCatchWithRethrow()
        {
            IsCTry = false;
            IsCCatch = false;
            IsCFinally = false;

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
            finally
            {
                IsCFinally = true;
            }
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

        public static bool IsDFinally
        {
            get;
            set;
        }

        private static void TryCatchWithRethrowEx()
        {
            IsDTry = false;
            IsDCatch = false;
            IsDFinally = false;

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
            finally
            {
                IsDFinally = true;
            }
        }

        #endregion ThrownExceptions
    }
}