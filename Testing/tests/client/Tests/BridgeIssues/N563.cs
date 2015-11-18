using System;
using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#563]
    [FileName("testBridgeIssues.js")]
    internal class Bridge563
    {
        public static void TesForeach(Assert assert)
        {
            assert.Expect(2);

            string[] keys = new[] { "1", "2", "3" };
            Action[] handlers = new Action[3];
            int i = 0;
            string result = "";

            foreach (var itm in keys)
                handlers[i++] = () => result += itm;

            foreach (var handler in handlers)
            {
                handler();
            }

            assert.Equal(result, "123", "Bridge563 No block foreach loop");

            i = 0;
            result = "";

            foreach (var itm in keys)
            {
                handlers[i++] = () => result += itm;
            }

            foreach (var handler in handlers)
            {
                handler();
            }

            assert.Equal(result, "123", "Bridge563 block foreach loop");
        }

        public static void TesFor(Assert assert)
        {
            assert.Expect(1);

            string[] keys = new[] { "1", "2", "3" };
            Action[] handlers = new Action[3];
            int i = 0;
            string result = "";

            for (int j = 0; j < keys.Length; j++)
            {
                var itm = keys[j];
                handlers[i++] = () => result += itm;
            }    

            foreach (var handler in handlers)
            {
                handler();
            }

            assert.Equal(result, "123", "Bridge563 For loop");
        }
    }
}