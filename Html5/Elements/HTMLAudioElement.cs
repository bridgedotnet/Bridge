namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLAudioElement interface provides access to the properties of &lt;audio&gt; elements, as well as methods to manipulate them. It derives from the HTMLMediaElement interface.
    /// The HTML &lt;audio&gt; element is used to embed sound content in documents. It may contain several audio sources, represented using the src attribute or the &lt;source&gt; element; the browser will choose the most suitable one.
    /// </summary>
    [External]
    [Name("HTMLAudioElement")]
    [Constructor("Audio")]
    public sealed class HTMLAudioElement : HTMLMediaElement<HTMLAudioElement>
    {
        /// <summary>
        /// Constructor for audio elements. The preload property of the returned object is set to auto and the src property is set to the argument value. The browser begins asynchronously selecting the resource before returning the object.
        /// </summary>
        [Template("new Audio()")]
        public extern HTMLAudioElement();

        /// <summary>
        /// Constructor for audio elements. The preload property of the returned object is set to auto and the src property is set to the argument value. The browser begins asynchronously selecting the resource before returning the object.
        /// </summary>
        /// <param name="urlString">The src property of the constructed HTMLAudioElement.</param>
        [Template("new Audio({0})")]
        public extern HTMLAudioElement(string urlString);
    }
}