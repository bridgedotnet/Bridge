using System;
using System.ComponentModel;

namespace Bridge.ClientTest.Batch1.ComponentModel
{
    [External]
    [Browsable(false)]
    public class BrowsableAttributeTests
    {
        [External]
        [Browsable(false)]
        struct Struct
        {
        }

        [Browsable(false)]
        public string Name1
        {
            get; set;
        }

        [Browsable(false)]
        public string Name2;

        [Browsable(false)]
        public void CheckBrowsable()
        {
            var a = new BrowsableAttribute(true);
            // Browsable property exists
            var b = a.Browsable;
        }
    }
}