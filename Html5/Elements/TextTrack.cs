using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// Represents a text track.
    /// </summary>
    [External]
    public class TextTrack
    {
        /// <summary>
        /// Get the type of the text track
        /// </summary>
        public readonly TextTrackKind Kind;

        /// <summary>
        /// Get the label of the text track
        /// </summary>
        public readonly string Label;

        /// <summary>
        /// Get the language of the text track
        /// </summary>
        public readonly string Language;

        /// <summary>
        /// get or set if the track is active
        /// </summary>
        public TextTrackMode Mode;

        /// <summary>
        /// Get a list of cues as a TextTrackCueList object
        /// </summary>
        public readonly TextTrackCueList Cues;

        /// <summary>
        /// Get the currently active text track cues as a TextTrackCueList object
        /// </summary>
        public readonly TextTrackCueList ActiveCues;

        /// <summary>
        /// Add a cue to the list of cues
        /// </summary>
        /// <param name="cue">The cue to add</param>
        public virtual extern void AddCue(TextTrackCue cue);

        /// <summary>
        /// Remove a cue from the list of cues
        /// </summary>
        /// <param name="cue"></param>
        public virtual extern void RemoveCue(TextTrackCue cue);
    }

    /// <summary>
    /// Represents the available text tracks for the the audio/video.
    /// </summary>
    [External]
    public class TextTrackList : IEnumerable<TextTrack>
    {
        /// <summary>
        /// Get the number of text tracks available in the audio/video
        /// </summary>
        public readonly int Length;

        /// <summary>
        /// Get a TextTrack object by index
        /// </summary>
        /// <param name="index">The index of a TextTrack</param>
        /// <returns>The TextTrack instance</returns>
        public extern virtual TextTrack this[int index] { get; }

        public virtual extern IEnumerator<TextTrack> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }

    /// <summary>
    /// The possible types of a text track
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum TextTrackKind
    {
        /// <summary>
        /// Subtitles
        /// </summary>
        Subtitles,

        /// <summary>
        /// Caption
        /// </summary>
        Caption,

        /// <summary>
        /// descriptions
        /// </summary>
        Descriptions,

        /// <summary>
        /// Chapters
        /// </summary>
        Chapters,

        /// <summary>
        /// MetaData
        /// </summary>
        MetaData
    }

    /// <summary>
    /// The possible modes of a text track
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum TextTrackMode
    {
        /// <summary>
        /// Disabled
        /// </summary>
        Disabled,

        /// <summary>
        /// Hidden
        /// </summary>
        Hidden,

        /// <summary>
        /// Showing
        /// </summary>
        Showing
    }

    /// <summary>
    /// The TextTrackCue object represents the individual cues, and provides methods and properties to access the data and events to act on changes to cue state.
    /// </summary>
    [External]
    public class TextTrackCue // TODO: events?
    {
        /// <summary>
        /// Returns the ending time, in seconds, for a text track cue.
        /// </summary>
        public readonly int EndTime;

        /// <summary>
        /// Returns the TextTrackCue identifier.
        /// </summary>
        public string Id;

        /// <summary>
        /// Returns the pause-on-exit flag on a TextTrackCue. When the flag is true, playback will pause when it reaches the cue's endTime.
        /// </summary>
        public readonly bool PauseOnExit;

        /// <summary>
        /// Returns the text track cue start time in seconds.
        /// </summary>
        public readonly int StartTime;

        /// <summary>
        /// Gets TextTrackCue text in un-parsed form.
        /// </summary>
        public readonly string Text;

        /// <summary>
        /// Returns the TextTrack object that the TextTrackCue belongs to, or null otherwise.
        /// </summary>
        public readonly TextTrack Track;

        /// <summary>
        /// Returns the TextTrackCue text (caption) as a document fragment consisting of HTML elements and other DOM nodes.
        /// </summary>
        public virtual extern string GetCueAsHTML();
    }

    /// <summary>
    /// TextTrackCueList represents a dynamically updating list of text track cues.
    /// </summary>
    [External]
    public class TextTrackCueList : IEnumerable<TextTrackCue>
    {
        /// <summary>
        /// Returns the number of tracks in a TextTrackCueList
        /// </summary>
        public readonly int Length;

        /// <summary>
        /// Returns the TextTrackCue (in cue order) for a specified id.
        /// </summary>
        /// <param name="id">The id of the TextTrackCue</param>
        /// <returns>The TextTrackCue instance</returns>
        public virtual extern TextTrackCue GetCueById(string id);

        /// <summary>
        /// Returns a track from a list that corresponds with the given index based on track order.
        /// </summary>
        /// <param name="index">The index of the TextTrackCue</param>
        /// <returns>The TextTrackCue instance</returns>
        [Name("item")]
        public virtual extern TextTrackCue GetItem(int index);

        public virtual extern IEnumerator<TextTrackCue> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}