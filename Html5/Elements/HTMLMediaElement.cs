namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLMediaElement interface has special properties and methods (beyond the properties and methods available for all children of HTMLElement), that are common to all media-related objects.
    /// This interface is inherited by HTMLVideoElement and HTMLAudioElement.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type of all MediaElement's events</typeparam>
    [External]
    [Namespace(false)]
    [IgnoreGeneric]
    public abstract class HTMLMediaElement<TCurrentTarget> : HTMLElement<TCurrentTarget> where TCurrentTarget : HTMLElement<TCurrentTarget>
    {
        /// <summary>
        /// Reflects the autoplay HTML attribute, indicating whether playback should automatically begin as soon as enough media is available to do so without interruption.
        /// </summary>
        [Name("autoplay")]
        public bool AutoPlay;

        /// <summary>
        /// The ranges of the media source that the browser has buffered (if any) at the moment the buffered property is accessed. The returned TimeRanges object is normalized.
        /// </summary>
        public readonly TimeRanges Buffered;

        /// <summary>
        /// Reflects the controls HTML attribute, indicating whether user interface items for controlling the resource should be displayed.
        /// </summary>
        public bool Controls;

        /// <summary>
        /// The CORS setting for this image element.
        /// </summary>
        public string CrossOrigin;

        /// <summary>
        /// The absolute URL of the chosen media resource (if, for example, the server selects a media file based on the resolution of the user's display), or an empty string if the networkState is EMPTY.
        /// </summary>
        public readonly string CurrentSrc;

        /// <summary>
        /// The current playback time, in seconds. Setting this value seeks the media to the new time.
        /// </summary>
        public double CurrentTime;

        /// <summary>
        /// Reflects the muted HTML attribute, indicating whether the media element's audio output should be muted by default. This property has no dynamic effect, to mute and unmute the audio output, use the muted property.
        /// </summary>
        public bool DefaultMuted;

        /// <summary>
        /// The default playback rate for the media. 1.0 is "normal speed," values lower than 1.0 make the media play slower than normal, higher values make it play faster. The value 0.0 is invalid and throws a NOT_SUPPORTED_ERR exception.
        /// </summary>
        public double DefaultPlaybackRate;

        /// <summary>
        /// The length of the media in seconds, or zero if no media data is available.  If the media data is available but the length is unknown, this value is NaN.  If the media is streamed and has no predefined length, the value is Inf.
        /// </summary>
        public readonly double Duration;

        /// <summary>
        /// Indicates whether the media element has ended playback.
        /// </summary>
        public bool Ended;

        /// <summary>
        /// The MediaError object for the most recent error, or null if there has not been an error.
        /// </summary>
        public MediaError Error;

        /// <summary>
        /// Reflects the loop HTML attribute, indicating whether the media element should start over when it reaches the end.
        /// </summary>
        public bool Loop;

        /// <summary>
        /// Reflects the mediagroup HTML attribute, indicating the name of the group of elements it belongs to. A group of media elements shares a common controller.
        /// </summary>
        public string MediaGroup;

        /// <summary>
        /// True if the audio is muted, and false otherwise.
        /// </summary>
        public bool Muted;

        /// <summary>
        /// The current state of fetching the media over the network.
        /// NETWORK_EMPTY 	    0 	There is no data yet.  The readyState is also HAVE_NOTHING.
        /// NETWORK_IDLE 	    1
        /// NETWORK_LOADING 	2 	The media is loading.
        /// NETWORK_NO_SOURCE 	3
        /// </summary>
        public readonly int NetworkState;

        /// <summary>
        /// Indicates whether the media element is paused.
        /// </summary>
        public readonly bool Paused;

        /// <summary>
        /// The current rate at which the media is being played back. This is used to implement user controls for fast forward, slow motion, and so forth. The normal playback rate is multiplied by this value to obtain the current rate, so a value of 1.0 indicates normal speed.
        /// If the playbackRate is negative, the media is played backwards.
        /// The audio is muted when the media plays backwards or if the fast forward or slow motion is outside a useful range (E.g. Gecko mute the sound outside the range 0.25 and 5.0).
        /// The pitch of the audio is corrected by default and is the same for every speed. Some navigators implement the non-standard preservespitch property to control this.
        /// </summary>
        public double PlaybackRate;

        /// <summary>
        /// The ranges of the media source that the browser has played, if any.
        /// </summary>
        public readonly TimeRanges Played;

        /// <summary>
        /// Reflects the preload HTML attribute, indicating what data should be preloaded, if any.
        /// It may have one of the following values:
        ///     none: hints that either the author thinks that the user won't need to consult that video or that the server wants to minimize its traffic; in others terms this hint indicates that the video should not be cached.
        ///     metadata: hints that though the author thinks that the user won't need to consult that video, fetching the metadata (e.g. length) is reasonable.
        ///     auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole video could be downloaded, even if the user is not expected to use it.
        ///     the empty string: which is a synonym of the auto value.
        /// </summary>
        public string Preload;

        /// <summary>
        /// The readiness state of the media.
        /// HAVE_NOTHING 	    0 	No information is available about the media resource.
        /// HAVE_METADATA 	    1 	Enough of the media resource has been retrieved that the metadata attributes are initialized.  Seeking will no longer raise an exception.
        /// HAVE_CURRENT_DATA 	2 	Data is available for the current playback position, but not enough to actually play more than one frame.
        /// HAVE_FUTURE_DATA 	3 	Data for the current playback position as well as for at least a little bit of time into the future is available (in other words, at least two frames of video, for example).
        /// HAVE_ENOUGH_DATA 	4 	Enough data is available—and the download rate is high enough—that the media can be played through to the end without interruption.
        /// </summary>
        public int ReadyState;

        /// <summary>
        /// The time ranges that the user is able to seek to, if any.
        /// </summary>
        public readonly TimeRanges Seekable;

        /// <summary>
        /// Indicates whether the media is in the process of seeking to a new position.
        /// </summary>
        public bool Seeking;

        /// <summary>
        /// Reflects the src HTML attribute, containing the URL of a media resource to use.
        /// </summary>
        public string Src;

        /// <summary>
        /// Represents the list of TextTrack objects contained in the element.
        /// </summary>
        public TextTrackList TextTracks;

        /// <summary>
        /// The audio volume, from 0.0 (silent) to 1.0 (loudest).
        /// </summary>
        public double Volume;

        /// <summary>
        /// Determines whether the specified media type can be played back.
        /// Returns:
        ///
        ///     probably         : if the specified type appears to be playable.
        ///     maybe            : if it's impossible to tell whether the type is playable without playing it.
        ///     The empty string : if the specified type definitely cannot be played.
        /// </summary>
        /// <param name="type">The media type</param>
        /// <returns>The string representing that the specified type may be played or not</returns>
        public virtual extern string CanPlayType(string type);

        /// <summary>
        /// Directly seek to the given time.
        /// </summary>
        /// <param name="time">The time to seek</param>
        public virtual extern void FastSeek(double time);

        /// <summary>
        /// Begins loading the media content from the server.
        /// </summary>
        public virtual extern void Load();

        /// <summary>
        /// Pauses the media playback.
        /// </summary>
        public virtual extern void Pause();

        /// <summary>
        /// Begins playback of the media. If you have changed the src attribute of the media element since the page was loaded, you must call load() before play(), otherwise the original media plays again.
        /// </summary>
        public virtual extern void Play();
    }

    /// <summary>
    /// The non-generic MediaElement class. Events' CurrentTarget has the MediaElement type.
    /// </summary>
    [External]
    [Name("HTMLMediaElement")]
    public abstract class MediaElement : HTMLElement<MediaElement>
    {
    }

    /// <summary>
    /// The TimeRanges interface is used to represent a set of time ranges, primarily for the purpose of tracking which portions of media have been buffered when loading it for use by the &lt;audio&gt; and &lt;video&gt; elements.
    /// A TimeRanges object includes one or more ranges of time, each specified by a starting and ending time offset. You reference each time range by using the start() and end() methods, passing the index number of the time range you want to retrieve.
    /// The term "normalized TimeRanges object" indicates that ranges in such an object are ordered, don't overlap, aren't empty, and don't touch (adjacent ranges are folded into one bigger range).
    /// </summary>
    public class TimeRanges
    {
        /// <summary>
        /// The number of time ranges represented by the time range object.
        /// </summary>
        public readonly int Length;

        /// <summary>
        /// Returns the time offset at which a specified time range begins.
        /// A DOMException thrown if the specified index doesn't correspond to an existing range.
        /// </summary>
        /// <param name="index">The range number to return the starting time for.</param>
        /// <returns>Returns the time offset at which a specified time range begins.</returns>
        public virtual extern double Start(int index);

        /// <summary>
        /// Returns the time offset at which a specified time range ends.
        /// A DOMException thrown if the specified index doesn't correspond to an existing range.
        /// </summary>
        /// <param name="index">The range number to return the ending time for.</param>
        /// <returns>Returns the time offset at which a specified time range ends.</returns>
        public virtual extern double End(int index);
    }

    public class MediaError
    {
        /// <summary>
        /// The fetching process for the media resource was aborted by the user agent at the user's request.
        /// </summary>
        public const int MEDIA_ERR_ABORTED = 1;

        /// <summary>
        /// A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.
        /// </summary>
        public const int MEDIA_ERR_NETWORK = 2;

        /// <summary>
        /// An error of some description occurred while decoding the media resource, after the resource was established to be usable.
        /// </summary>
        public const int MEDIA_ERR_DECODE = 3;

        /// <summary>
        /// The media resource indicated by the src attribute was not suitable.
        /// </summary>
        public const int MEDIA_ERR_SRC_NOT_SUPPORTED = 4;

        /// <summary>
        /// Returns the current error's error code.
        /// </summary>
        public readonly int Code;
    }
}