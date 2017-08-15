//#1151
namespace Test.BridgeIssues.N1151
{
    public class renderTarget
    {
        public renderTarget(object gl, int w, int h, int nCmp)
        {
            /***************************************************************************/
            /* ACCORDING TO SOME EXAMPLES, WE DONT NEED RENDERBUFFER STORAGE FOR RENDER
            /* TO TEXTURE ON THE COLOR CHANNEL * gl.bindRenderBuffer(gl.RENDERBUFFER,
            /* this.colorRenderBuffer); gl.RenderBufferStorage(gl.RENDERBUFFER,
            /* this.internalFormat, this.width, this.height); /
            **************************************************************************/
            var i = 0;
            i++;
        }
    }
}
