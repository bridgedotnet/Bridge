using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace System
{
    [External]
    [Namespace(false)]
    public class Random
    {
        public extern Random ();
        public extern Random (int seed);

        [Name("integer")]
        public extern int Next(int min = 1, int max = int.MaxValue);

        [Template("Math.random()")]
        public extern double NextDouble();
    }
}
