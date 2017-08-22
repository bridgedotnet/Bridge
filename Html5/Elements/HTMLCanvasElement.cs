namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLCanvasElement interface provides properties and methods for manipulating the layout and presentation of canvas elements. The HTMLCanvasElement interface also inherits the properties and methods of the HTMLElement interface.
    /// The HTML &lt;canvas&gt; Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the &lt;canvas&gt; block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled.
    /// </summary>
    [External]
    [Name("HTMLCanvasElement")]
    public sealed class HTMLCanvasElement : HTMLElement<HTMLCanvasElement>
    {
        [Template("document.createElement(\"canvas\")")]
        public extern HTMLCanvasElement();

        /// <summary>
        /// Reflects the height HTML attribute, specifying the height of the coordinate space in CSS pixels.
        /// </summary>
        public int Height;

        /// <summary>
        /// Reflects the width HTML attribute, specifying the width of the coordinate space in CSS pixels.
        /// </summary>
        public int Width;

        /// <summary>
        /// Returns a drawing context on the canvas, or null if the context ID is not supported. A drawing context lets you draw on the canvas. Calling getContext with "2d" returns a CanvasRenderingContext2D object, whereas calling it with "experimental-webgl" (or "webgl") returns a WebGLRenderingContext object. This context is only available on browsers that implement WebGL.
        /// </summary>
        /// <param name="contextId">The context's id</param>
        /// <returns>A drawing context. A CanvasRenderingContext2D, IWebGLRenderingContext or IWebGL2RenderingContext object.</returns>
        public extern Union<CanvasRenderingContext2D, IWebGLRenderingContext> GetContext(string contextId);

        /// <summary>
        /// Returns CanvasRenderingContext2D drawing context on the canvas, or null if the context ID is not supported.
        /// A drawing context lets you draw on the canvas.
        /// </summary>
        /// <param name="contextId">The context's id</param>
        /// <returns>A CanvasRenderingContext2D drawing context object.</returns>
        public extern CanvasRenderingContext2D GetContext(CanvasTypes.CanvasContext2DType contextId);

        /// <summary>
        /// Returns WebGLRenderingContext drawing context on the canvas, or null if the context ID is not supported.
        /// A drawing context lets you draw on the canvas. This context is only available on browsers that implement
        /// WebGL (OpenGL ES 2.0).
        /// </summary>
        /// <param name="contextId">The context's id</param>
        /// <returns>A WebGLRenderingContext drawing context object.</returns>
        public extern IWebGLRenderingContext GetContext(CanvasTypes.CanvasContextWebGLType contextId);

        /// <summary>
        /// Returns a data: URL containing a representation of the image in the format specified by type (defaults to PNG). The returned image is 96dpi.
        /// If the height or width of the canvas is 0, "data:," representing the empty string, is returned.
        /// If the type requested is not image/png, and the returned value starts with data:image/png, then the requested type is not supported.
        /// Chrome supports the image/webp type.
        /// If the requested type is image/jpeg or image/webp, then the second argument, if it is between 0.0 and 1.0, is treated as indicating image quality; if the second argument is anything else, the default value for image quality is used. Other arguments are ignored.
        /// </summary>
        /// <returns>URL containing a representation of the image</returns>
        public extern string ToDataURL();

        /// <summary>
        /// Returns a data: URL containing a representation of the image in the format specified by type (defaults to PNG). The returned image is 96dpi.
        /// If the height or width of the canvas is 0, "data:," representing the empty string, is returned.
        /// If the type requested is not image/png, and the returned value starts with data:image/png, then the requested type is not supported.
        /// Chrome supports the image/webp type.
        /// If the requested type is image/jpeg or image/webp, then the second argument, if it is between 0.0 and 1.0, is treated as indicating image quality; if the second argument is anything else, the default value for image quality is used. Other arguments are ignored.
        /// </summary>
        /// <param name="type">The format. Defaults to PNG.</param>
        /// <returns>URL containing a representation of the image</returns>
        public extern string ToDataURL(string type);

        /// <summary>
        /// Returns a data: URL containing a representation of the image in the format specified by type (defaults to PNG). The returned image is 96dpi.
        /// If the height or width of the canvas is 0, "data:," representing the empty string, is returned.
        /// If the type requested is not image/png, and the returned value starts with data:image/png, then the requested type is not supported.
        /// Chrome supports the image/webp type.
        /// If the requested type is image/jpeg or image/webp, then the second argument, if it is between 0.0 and 1.0, is treated as indicating image quality; if the second argument is anything else, the default value for image quality is used. Other arguments are ignored.
        /// </summary>
        /// <param name="type">The format. Defaults to PNG.</param>
        /// /// <param name="args">Any additional parameters</param>
        /// <returns>URL containing a representation of the image</returns>
        public extern string ToDataURL(string type, params object[] args);
    }

    /// <summary>
    /// Implement this interface to use it with canvas.GetContext()
    /// </summary>
    public interface IWebGLRenderingContext
    {
    }
}