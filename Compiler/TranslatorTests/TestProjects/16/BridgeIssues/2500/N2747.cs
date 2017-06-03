using Bridge;
using Bridge.Html5;
using System;
using System.Collections.Generic;

namespace Test.BridgeIssues.N2747
{
    // #2747
    public class N2747
    {
        public static void Output()
        {
            var inputElement = new HTMLInputElement();
			var file = ((FileL)inputElement.Files)[0d];
        }
    }

    [External, Name("FileList")]
	public partial interface FileL
	{
		System.Double length { get; }
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