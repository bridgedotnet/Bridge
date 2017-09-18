using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3101 - {0}")]
    public class Bridge3101
    {
        class CKEditor
        {
            public event Action OnChange
            {
                [Template("{this}.on('change', {value})")]
                add
                {
                }
                [Template("{this}.off('change', {value})")]
                remove
                {
                }
            }

            public string name;
            public Action handler;
            public bool isSet;

            public void on(string eventName, Action handler)
            {
                this.isSet = true;
                this.name = eventName;
                this.handler = handler;
            }

            public void off(string eventName, Action handler)
            {
                this.isSet = false;
                this.name = null;
                this.handler = null;
            }
        }

        static int counter;

        static void ckEditor_OnChange()
        {
            counter++;
        }

        [Test]
        public static void TestEventTemplate()
        {
            var editor = new CKEditor();

            Assert.AreEqual(0, counter);
            Assert.False(editor.isSet);
            Assert.Null(editor.name);
            Assert.Null(editor.handler);

            editor.OnChange += ckEditor_OnChange;

            Assert.AreEqual(0, counter);
            Assert.True(editor.isSet);
            Assert.AreEqual("change", editor.name);
            Assert.AreStrictEqual((Action)ckEditor_OnChange, editor.handler);

            editor.handler();
            Assert.AreEqual(1, counter);

            editor.handler();
            Assert.AreEqual(2, counter);

            editor.OnChange -= ckEditor_OnChange;
            Assert.False(editor.isSet);
            Assert.Null(editor.name);
            Assert.Null(editor.handler);
            Assert.AreEqual(2, counter);
        }
    }
}