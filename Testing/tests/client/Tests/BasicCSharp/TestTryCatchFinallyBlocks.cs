using Bridge;
using Bridge.QUnit;
using System;

#pragma warning disable 162    // CS0162: Unreachable code detected. Disable because we want to assert that code does not reach unreachable parts

namespace ClientTestLibrary
{
    [FileName("testTryCatchFinallyBlocks.js")]
    class Data
    {
        public int Count { get; set; }
    }

    // Tests try and catch blocks
    class TestTryCatchFinallyBlocks
    {
        #region Tests

        public static void SimpleTryCatchFinally(Assert assert)
        {
            assert.Expect(1);

            var data = new Data();
            TryCatchFinally(data);

            assert.Equal(data.Count, 2, "TryCatchFinally() executes");
        }

        public static void CaughtExceptions(Assert assert)
        {
            assert.Expect(4);

            var data = new Data();
            TryCatchFinallyWithCaughtException(data);

            assert.Equal(data.Count, 7, "Exception catch, Finally works");

            data = new Data();
            TryCatchFinallyWithCaughtTypedException(data);

            assert.Equal(data.Count, 7, "Typed exception catch, Finally works");

            data = new Data();
            var exceptionMessage = TryCatchFinallyWithCaughtArgumentException(data);

            assert.Equal(exceptionMessage, "catch me", "Typed exception catch with exception message");
            assert.Equal(data.Count, 7, "Typed exception catch with exception message, Finally works");
        }

        public static void ThrownExceptions(Assert assert)
        {
            assert.Expect(16);

            //#230
            assert.Throws(TryCatchFinallyWithNotCaughtTypedException, "catch me", "A. Typed exception is not caught");
            assert.Ok(IsATry, "A. exception not caught - try section called");
            assert.Ok(!IsACatch, "A. exception not caught - catch section not called");
            assert.Ok(IsAFinally, "A. exception not caught - finally section called");

            //#229
            assert.Throws(TryCatchWithNotCaughtTypedExceptionAndArgument, "catch me", "[#229] B. Typed exception is not caught; and argument");
            assert.Ok(IsBTry, "B. exception not caught - try section called");
            assert.Ok(!IsBCatch, "B. exception not caught - catch section not called");
            assert.Ok(IsBFinally, "B. exception not caught - finally section called");

            //#231
            assert.Throws(TryCatchWithRethrow, "catch me", "[#231] C. Rethrow");
            assert.Ok(IsCTry, "C. exception caught and re-thrown  - try section called");
            assert.Ok(IsCCatch, "C. exception caught and re-thrown  - catch section called");
            assert.Ok(IsCFinally, "C. exception caught and re-thrown  - finally section called");

            assert.Throws(TryCatchWithRethrowEx, new Func<object, bool>((error) => { return error.ToString() == "catch me"; }), "D. Rethrow with parameter");
            assert.Ok(IsDTry, "D. exception caught and re-thrown  - try section called");
            assert.Ok(IsDCatch, "D. exception caught and re-thrown  - catch section called");
            assert.Ok(IsDFinally, "D. exception caught and re-thrown  - finally section called");
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

        public static bool IsATry { get; set; }
        public static bool IsACatch { get; set; }
        public static bool IsAFinally { get; set; }

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

        public static bool IsBTry { get; set; }
        public static bool IsBCatch { get; set; }
        public static bool IsBFinally { get; set; }

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

        public static bool IsCTry { get; set; }
        public static bool IsCCatch { get; set; }
        public static bool IsCFinally { get; set; }

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

        public static bool IsDTry { get; set; }
        public static bool IsDCatch { get; set; }
        public static bool IsDFinally { get; set; }

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
