Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1151.renderTarget", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[System.Object,System.Int32,System.Int32,System.Int32],"pi":[{"n":"gl","pt":System.Object,"ps":0},{"n":"w","pt":System.Int32,"ps":1},{"n":"h","pt":System.Int32,"ps":2},{"n":"nCmp","pt":System.Int32,"ps":3}],"sn":"ctor"}]}; },
        ctors: {
            ctor: function (gl, w, h, nCmp) {
                this.$initialize();
                /* *************************************************************************/
                /* ACCORDING TO SOME EXAMPLES, WE DONT NEED RENDERBUFFER STORAGE FOR RENDER
                /* TO TEXTURE ON THE COLOR CHANNEL * gl.bindRenderBuffer(gl.RENDERBUFFER,
                /* this.colorRenderBuffer); gl.RenderBufferStorage(gl.RENDERBUFFER,
                /* this.internalFormat, this.width, this.height); /
                *************************************************************************/
                var i = 0;
                i = (i + 1) | 0;
            }
        }
    });
});
