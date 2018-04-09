using Bridge;
using System;
using System.Collections.Generic;

namespace Test.BridgeIssues.N3386
{
    /// <summary>
    /// #3386 - the test here consists in checking whether a method with
    /// default parameter values as float/double NaN can be built.
    /// </summary>
    public class N3386
    {
        /// <summary>
        /// Basic test according with the issue report.
        /// </summary>
        /// <param name="d">Double variable with default NaN.</param>
        public static void ConstantNaN(double d = double.NaN) { }

        /// <summary>
        /// Additional constants that fell in the same scenario and needed
        /// to be fixed, for double and float.
        /// </summary>
        /// <param name="fn">Float variable with default NaN.</param>
        /// <param name="fpi">Float variable with default +∞.</param>
        /// <param name="fni">Float variable with default -∞.</param>
        /// <param name="dpi">Double variable with default +∞.</param>
        /// <param name="dni">Double variable with default -∞.</param>
        public static void ConstantCompTime(
            float fn = float.NaN,
            float fpi = float.PositiveInfinity,
            float fni = float.NegativeInfinity,
            double dpi = double.PositiveInfinity,
            double dni = double.NegativeInfinity
            ) { }
    }
}
