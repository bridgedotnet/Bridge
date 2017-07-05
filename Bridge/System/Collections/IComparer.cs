using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace System.Collections
{
    [External, Reflectable]
    public interface IComparer
    {
        int Compare(object x, object y);
    }
}
