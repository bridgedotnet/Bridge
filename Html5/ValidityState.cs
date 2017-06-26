namespace Bridge.Html5
{
    /// <summary>
    /// The ValidityState interface represents the validity states that an element can be in, with respect to constraint validation. Together, they help explain why an element's value fails to validate, if it's not valid.
    /// </summary>
    [External]
    [Name("ValidityState")]
    public class ValidityState
    {
        extern internal ValidityState();

        /// <summary>
        /// The element's custom validity message has been set to a non-empty string by calling the element's setCustomValidity() method.
        /// </summary>
        public readonly bool CustomError;

        /// <summary>
        /// The value does not match the specified pattern.
        /// </summary>
        public readonly bool PatternMismatch;

        /// <summary>
        /// The value is greater than the maximum specified by the max attribute.
        /// </summary>
        public readonly bool RangeOverflow;

        /// <summary>
        /// The value is less than the minimum specified by the min attribute.
        /// </summary>
        public readonly bool RangeUnderflow;

        /// <summary>
        /// The value does not fit the rules determined by the step attribute (that is, it's not evenly divisible by the step value).
        /// </summary>
        public readonly bool StepMismatch;

        /// <summary>
        /// The value exceeds the specified maxlength for HTMLInputElement or HTMLTextAreaElement objects.
        /// </summary>
        public readonly bool TooLong;

        /// <summary>
        /// The value is not in the required syntax (when type is email or url).
        /// </summary>
        public readonly bool TypeMismatch;

        /// <summary>
        /// The element meets all constraint validations, and is therefore considered to be valid.
        /// </summary>
        public readonly bool Valid;

        /// <summary>
        /// The element has a required attribute, but no value.
        /// </summary>
        public readonly bool ValueMissing;
    }
}