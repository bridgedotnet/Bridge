using Bridge;
using Bridge.Html5;

namespace Test.BridgeIssues.N411
{
    public class App
    {
        public void TestFillText()
        {
            var canvas = Document.GetElementById<HTMLCanvasElement>("mycanvas");
            var ctx = canvas.GetContext(CanvasTypes.CanvasContext2DType.CanvasRenderingContext2D);
            ctx.FillText("text", 50, 50);
        }
    }
}