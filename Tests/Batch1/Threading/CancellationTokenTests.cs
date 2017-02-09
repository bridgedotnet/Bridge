using Bridge.Test.NUnit;

using System;
using System.Collections.Generic;
using System.Threading;

#pragma warning disable 183, 1718

namespace Bridge.ClientTest.Threading
{
    [Category(Constants.MODULE_THREADING)]
    [TestFixture(TestNameFormat = "CancellationToken - {0}")]
    public class CancellationTokenTests
    {
        [Test]
        public void TypePropertiesForCancellationTokenSourceAreCorrect()
        {
            Assert.AreEqual("System.Threading.CancellationTokenSource", typeof(CancellationTokenSource).FullName, "FullName");
            object cts = new CancellationTokenSource();
            Assert.True(cts is CancellationTokenSource);
            Assert.True(cts is IDisposable);
        }

        [Test]
        public void TypePropertiesForCancellationTokenAreCorrect()
        {
            Assert.AreEqual("System.Threading.CancellationToken", typeof(CancellationToken).FullName, "FullName");

            Assert.True(new CancellationToken() is CancellationToken);
            Assert.True(CancellationToken.None is CancellationToken);
            Assert.True(new CancellationTokenSource().Token is CancellationToken);
        }

        [Test]
        public void TypePropertiesForCancellationTokenRegistrationAreCorrect()
        {
            Assert.AreEqual("System.Threading.CancellationTokenRegistration", typeof(CancellationTokenRegistration).FullName, "FullName");

            object ctr = new CancellationTokenRegistration();
            Assert.True(ctr is CancellationTokenRegistration, "CancellationTokenRegistration");
            Assert.True(ctr is IDisposable, "IDisposable");
            Assert.True(ctr is IEquatable<CancellationTokenRegistration>, "IEquatable<CancellationTokenRegistration>");
        }

        [Test]
        public void CancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe()
        {
            var ct = new CancellationToken();
            Assert.False(ct.CanBeCanceled, "CanBeCanceled");
            Assert.False(ct.IsCancellationRequested, "IsCancellationRequested");
            ct.ThrowIfCancellationRequested();
        }

        [Test]
        public void CancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe()
        {
            var ct = new CancellationToken(false);
            Assert.False(ct.CanBeCanceled, "CanBeCanceled");
            Assert.False(ct.IsCancellationRequested, "IsCancellationRequested");
            ct.ThrowIfCancellationRequested();
        }

        [Test]
        public void CancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled()
        {
            var ct = new CancellationToken(true);
            Assert.True(ct.CanBeCanceled, "CanBeCanceled");
            Assert.True(ct.IsCancellationRequested, "IsCancellationRequested");
            Assert.Throws(() => ct.ThrowIfCancellationRequested());
        }

        [Test]
        public void CancellationTokenNoneIsNotCancelledAndCannotBe()
        {
            Assert.False(CancellationToken.None.CanBeCanceled, "CanBeCanceled");
            Assert.False(CancellationToken.None.IsCancellationRequested, "IsCancellationRequested");
            CancellationToken.None.ThrowIfCancellationRequested();
        }

        [Test]
        public void CreatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled()
        {
            var ct = default(CancellationToken);
            Assert.False(ct.CanBeCanceled, "CanBeCanceled");
            Assert.False(ct.IsCancellationRequested, "IsCancellationRequested");
            ct.ThrowIfCancellationRequested();
        }

        [Test]
        public void ActivatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled()
        {
            var ct = Activator.CreateInstance<CancellationToken>();
            Assert.False(ct.CanBeCanceled, "CanBeCanceled");
            Assert.False(ct.IsCancellationRequested, "IsCancellationRequested");
            ct.ThrowIfCancellationRequested();
        }

        [Test]
        public void CanBeCanceledIsTrueForTokenCreatedForCancellationTokenSource()
        {
            var cts = new CancellationTokenSource();
            Assert.True(cts.Token.CanBeCanceled, "cts.Token");
        }

        [Test]
        public void IsCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod()
        {
            var cts = new CancellationTokenSource();
            Assert.False(cts.IsCancellationRequested, "cts.IsCancellationRequested false");
            Assert.False(cts.Token.IsCancellationRequested, "cts.Token.IsCancellationRequested false");
            cts.Cancel();
            Assert.True(cts.IsCancellationRequested, "cts.IsCancellationRequested true");
            Assert.True(cts.Token.IsCancellationRequested, "cts.Token.IsCancellationRequested true");
        }

        [Test]
        public void ThrowIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled()
        {
            var cts = new CancellationTokenSource();
            cts.Token.ThrowIfCancellationRequested();
            cts.Cancel();
            Assert.Throws(() => cts.Token.ThrowIfCancellationRequested(), "cts.Token.ThrowIfCancellationRequested");
        }

        [Test]
        public void CancelWithoutArgumentsWorks()
        {
            var ex1 = new Exception();
            var ex2 = new Exception();
            var cts = new CancellationTokenSource();
            var calledHandlers = new List<int>();
            cts.Token.Register(() =>
            {
                calledHandlers.Add(0);
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(1);
                throw ex1;
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(2);
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(3);
                throw ex2;
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(4);
            });

            try
            {
                cts.Cancel();
                Assert.Fail("Should have thrown");
            }
            catch (AggregateException ex)
            {
                Assert.AreEqual(2, ex.InnerExceptions.Count, "count");
                Assert.True(ex.InnerExceptions.Contains(ex1), "ex1");
                Assert.True(ex.InnerExceptions.Contains(ex2), "ex2");
            }

            Assert.True(calledHandlers.Contains(0) && calledHandlers.Contains(1) && calledHandlers.Contains(2) && calledHandlers.Contains(3) && calledHandlers.Contains(4));
        }

        [Test]
        public void CancelWorksWhenThrowOnFirstExceptionIsFalse()
        {
            var ex1 = new Exception();
            var ex2 = new Exception();
            var cts = new CancellationTokenSource();
            var calledHandlers = new List<int>();
            cts.Token.Register(() =>
            {
                calledHandlers.Add(0);
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(1);
                throw ex1;
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(2);
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(3);
                throw ex2;
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(4);
            });

            try
            {
                cts.Cancel(false);
                Assert.Fail("Should have thrown");
            }
            catch (AggregateException ex)
            {
                Assert.AreEqual(2, ex.InnerExceptions.Count, "ex count");
                Assert.True(ex.InnerExceptions.Contains(ex1), "ex1");
                Assert.True(ex.InnerExceptions.Contains(ex2), "ex2");
            }

            Assert.AreEqual(5, calledHandlers.Count, "called handler count");
            Assert.True(calledHandlers.Contains(0) && calledHandlers.Contains(1) && calledHandlers.Contains(2) && calledHandlers.Contains(3) && calledHandlers.Contains(4));
        }

        [Test]
        public void CancelWorksWhenThrowOnFirstExceptionIsTrue()
        {
            var ex1 = new Exception();
            var ex2 = new Exception();
            var cts = new CancellationTokenSource();
            var calledHandlers = new List<int>();
            cts.Token.Register(() =>
            {
                calledHandlers.Add(0);
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(1);
                throw ex1;
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(2);
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(3);
                throw ex2;
            });
            cts.Token.Register(() =>
            {
                calledHandlers.Add(4);
            });

            try
            {
                cts.Cancel(true);
                Assert.Fail("Should have thrown");
            }
            catch (Exception ex)
            {
                Assert.True(object.ReferenceEquals(ex, ex1), "ex");
            }

            Assert.AreEqual(2, calledHandlers.Count, "called handler count");
            Assert.True(calledHandlers.Contains(0) && calledHandlers.Contains(1));
        }

        [Test]
        public void RegisterOnACancelledSourceWithoutContextInvokesTheCallback()
        {
            var cts = new CancellationTokenSource();
            cts.Cancel();
            int state = 0;
            cts.Token.Register(() => state = 1);
            Assert.AreEqual(1, state);
        }

        [Test]
        public void RegisterWithArgumentOnACancelledSourceInvokesTheCallback()
        {
            var cts = new CancellationTokenSource();
            var context = new object();
            cts.Cancel();
            int state = 0;
            cts.Token.Register(c =>
            {
                Assert.True(ReferenceEquals(context, c), "context");
                state = 1;
            }, context);
            Assert.AreEqual(1, state);
        }

        [Test]
        public void RegisterOnACancelledSourceWithoutContextRethrowsAThrownException()
        {
            var ex1 = new Exception();
            var cts = new CancellationTokenSource();
            cts.Cancel();
            try
            {
                cts.Token.Register(() =>
                {
                    throw ex1;
                });
                Assert.Fail("Should have thrown");
            }
            catch (Exception ex)
            {
                Assert.True(ReferenceEquals(ex, ex1), "Exception");
            }
        }

        [Test]
        public void RegisterOnACancelledSourceWithContextRethrowsAThrownException()
        {
            var ex1 = new Exception();
            var context = new object();
            var cts = new CancellationTokenSource();
            cts.Cancel();
            try
            {
                cts.Token.Register(c =>
                {
                    Assert.True(ReferenceEquals(context, c), "context");
                    throw ex1;
                }, context);
                Assert.Fail("Should have thrown");
            }
            catch (Exception ex)
            {
                Assert.True(ReferenceEquals(ex, ex1), "Exception");
            }
        }

        [Test]
        public void RegisterOverloadsWithUseSynchronizationContextWork()
        {
            var cts = new CancellationTokenSource();
            var context = new object();
            cts.Cancel();
            int numCalled = 0;
            cts.Token.Register(c => numCalled++, true);
            cts.Token.Register(c => numCalled++, false);
            cts.Token.Register(c =>
            {
                Assert.True(ReferenceEquals(context, c), "context");
                numCalled++;
            }, context, true);
            cts.Token.Register(c =>
            {
                Assert.True(ReferenceEquals(context, c), "context");
                numCalled++;
            }, context, false);
            Assert.AreEqual(4, numCalled);
        }

        public void CancellationTokenSourceCanBeDisposed()
        {
            var cts = new CancellationTokenSource();
            cts.Dispose();

            Assert.True(true);
        }

        [Test]
        public void RegisterOnCancellationTokenCreatedNonCancelledDoesNothing()
        {
            var ct = new CancellationToken(false);

            int state = 0;
            ct.Register(() => state = 1);

            Assert.AreEqual(0, state);
        }

        [Test]
        public void RegisterOnCancellationTokenCreatedCancelledInvokesTheActionImmediately()
        {
            var ct = new CancellationToken(true);

            int state = 0;
            var context = new object();
            ct.Register(() => state = 1);
            Assert.AreEqual(1, state, "state 1");
            ct.Register(c =>
            {
                Assert.True(ReferenceEquals(context, c), "context");
                state = 2;
            }, context);
            Assert.AreEqual(2, state, "state 2");
        }

        [Test]
        public void DuplicateCancelDoesNotCauseCallbacksToBeCalledTwice()
        {
            var cts = new CancellationTokenSource();
            int calls = 0;
            cts.Token.Register(() => calls = 1);
            cts.Cancel();
            cts.Cancel();

            Assert.AreEqual(1, calls);
        }

        [Test]
        public void RegistrationsCanBeCompared()
        {
            var cts = new CancellationTokenSource();
            var ctr1 = cts.Token.Register(() =>
            {
            });
            var ctr2 = cts.Token.Register(() =>
            {
            });

            Assert.True(ctr1.Equals(ctr1), "#1");
            Assert.False(ctr1.Equals(ctr2), "#2");
            Assert.True(ctr1.Equals((object)ctr1), "#3");
            Assert.False(ctr1.Equals((object)ctr2), "#4");

            Assert.True(ctr1 == ctr1, "#5");
            Assert.False(ctr1 == ctr2, "#6");
            Assert.False(ctr1 != ctr1, "#7");
            Assert.True(ctr1 != ctr2, "#8");
        }

        [Test]
        public void RegistrationsCanBeUnregistered()
        {
            var cts = new CancellationTokenSource();
            var calledHandlers = new List<int>();
            cts.Token.Register(() =>
            {
                calledHandlers.Add(0);
            });
            var reg = cts.Token.Register(() =>
            {
                calledHandlers.Add(1);
            });
            Assert.True(reg is CancellationTokenRegistration);

            cts.Token.Register(() =>
            {
                calledHandlers.Add(2);
            });

            reg.Dispose();

            cts.Cancel();

            Assert.AreEqual(2, calledHandlers.Count);
            Assert.True(calledHandlers.Contains(0) && calledHandlers.Contains(2));
        }

        [Test]
        public void CreatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm()
        {
            var ct = default(CancellationTokenRegistration);
            Assert.NotNull(ct, "not null");
            Assert.True(ct is CancellationTokenRegistration, "is CancellationTokenRegistration");
            ct.Dispose();
        }

        [Test]
        public void LinkedSourceWithTwoTokensWorks()
        {
            {
                var cts1 = new CancellationTokenSource();
                var cts2 = new CancellationTokenSource();
                var linked = CancellationTokenSource.CreateLinkedTokenSource(cts1.Token, cts2.Token);

                Assert.False(linked.IsCancellationRequested, "#1");
                cts1.Cancel();
                Assert.True(linked.IsCancellationRequested, "#2");
            }

            {
                var cts1 = new CancellationTokenSource();
                var cts2 = new CancellationTokenSource();
                var linked = CancellationTokenSource.CreateLinkedTokenSource(cts1.Token, cts2.Token);

                Assert.False(linked.IsCancellationRequested, "#1");
                cts2.Cancel();
                Assert.True(linked.IsCancellationRequested, "#2");
            }
        }

        [Test]
        public void LinkedSourceWithThreeTokensWorks()
        {
            {
                var cts1 = new CancellationTokenSource();
                var cts2 = new CancellationTokenSource();
                var cts3 = new CancellationTokenSource();
                var linked = CancellationTokenSource.CreateLinkedTokenSource(cts1.Token, cts2.Token, cts3.Token);

                Assert.False(linked.IsCancellationRequested, "#1 1");
                cts1.Cancel();
                Assert.True(linked.IsCancellationRequested, "#1 2");
            }

            {
                var cts1 = new CancellationTokenSource();
                var cts2 = new CancellationTokenSource();
                var cts3 = new CancellationTokenSource();
                var linked = CancellationTokenSource.CreateLinkedTokenSource(cts1.Token, cts2.Token, cts3.Token);

                Assert.False(linked.IsCancellationRequested, "#2 1");
                cts2.Cancel();
                Assert.True(linked.IsCancellationRequested, "#2 2");
            }

            {
                var cts1 = new CancellationTokenSource();
                var cts2 = new CancellationTokenSource();
                var cts3 = new CancellationTokenSource();
                var linked = CancellationTokenSource.CreateLinkedTokenSource(cts1.Token, cts2.Token, cts3.Token);

                Assert.False(linked.IsCancellationRequested, "#3 1");
                cts3.Cancel();
                Assert.True(linked.IsCancellationRequested, "#3 2");
            }
        }
    }
}