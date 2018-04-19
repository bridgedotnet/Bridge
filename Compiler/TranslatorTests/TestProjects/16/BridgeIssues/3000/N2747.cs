using Bridge;
using System;
using System.Collections.Generic;

namespace Test.BridgeIssues.N2747
{
    // #2747
    public class N2747
    {
        public static void Output()
        {
            // TODO: Move to HTML5 tests
            //var inputElement = new HTMLInputElement();
            //var file = ((FileL)inputElement.Files)[0d];
        }
    }

    [External]
    [Name("FileList")]
    public partial interface FileL
    {
        System.Double length
        {
            get;
        }
        [Name("item")]
        dynamic _item(System.Double index);
        dynamic this[System.Double index]
        {
            [Template("{this}[{index}]")]
            get;
            [Template("{this}[{index}]")]
            set;
        }
    }
}