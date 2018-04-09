using System.Collections.Generic;

namespace Test.BridgeIssues.N3438
{
    /// <summary>
    /// #3438 - the test here consists in checking whether the IReadOnlyList
    /// and IReadOnlyCollection interfaces have the correct variance.
    /// </summary>
    public class N3438
    {
        /// <summary>
        /// Bridge should be able to build this code, albeit it will not
        /// generate any runnable output (code has no client-side effect).
        /// </summary>
        public interface INotifyListChangedEventArgs<out T>
        {
            IReadOnlyList<T> Items { get; }
            IReadOnlyCollection<T> Items2 { get; }
        }
    }
}
