namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLTrackElement interface provides access to the properties of &lt;track&gt; elements, as well as methods to manipulate them.
    /// The HTML &lt;track&gt; element is used as a child of the media elements — &lt;audio&gt; and &lt;video&gt;. It lets you specify timed text tracks (or time-based data), for example to automaticaly handle subtitles.
    /// </summary>
    [External]
    [Name("HTMLTrackElement")]
    public sealed class HTMLTrackElement : HTMLElement<HTMLTrackElement>
    {
        [Template("document.createElement(\"track\")")]
        public extern HTMLTrackElement();

        /// <summary>
        /// Reflects the kind HTML attribute, indicating how the text track is meant to be used. Possible values are: subtitles, captions, descriptions, chapters, metadata. See kind attribute documentation for details.
        /// </summary>
        public string Kind;

        /// <summary>
        /// Reflects the src HTML attribute, indicating the address of the text track data.
        /// </summary>
        public string Src;

        /// <summary>
        /// Reflects the srclang HTML attribute, indicating the language of the text track data.
        /// </summary>
        [Name("srclang")]
        public string SrcLang;

        /// <summary>
        /// Reflects the label HTML attribute, indicating a user-readable title for the track.
        /// </summary>
        public string Label;

        /// <summary>
        /// Reflects the default HTML attribute, indicating that the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate.
        /// </summary>
        public bool Default;

        /// <summary>
        /// The readiness state of the track.
        /// NONE 	    0 	Indicates that the text track's cues have not been obtained.
        /// LOADING 	1 	Indicates that the text track is loading and there have been no fatal errors encountered so far. Further cues might still be added to the track by the parser.
        /// LOADED 	    2 	Indicates that the text track has been loaded with no fatal errors.
        /// ERROR 	    3 	Indicates that the text track was enabled, but when the user agent attempted to obtain it, this failed in some way. Some or all of the cues are likely missing and will not be obtained.
        /// </summary>
        public readonly int ReadyState;

        /// <summary>
        /// The track element's text track data.
        /// </summary>
        public readonly TextTrack Track;
    }
}