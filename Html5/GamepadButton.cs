namespace Bridge.Html5
{
    [External]
    [Namespace(false)]
    public class GamepadButton
    {
        /// <summary>
        /// The pressed state of the button. This property must be true if the button is currently pressed, and false if it is not pressed. For buttons which do not have a digital switch to indicate a pure pressed or released state, the user agent must choose a threshold value to indicate the button as pressed when its value is above a certain amount. If the platform API gives a recommended value, the user agent should use that. In other cases, the user agent should choose some other reasonable value.
        /// </summary>
        public readonly bool Pressed;

        /// <summary>
        /// For buttons that have an analog sensor, this property must represent the amount which the button has been pressed. All button values must be linearly normalized to the range [0.0 .. 1.0]. 0.0 must mean fully unpressed, and 1.0 must mean fully pressed. For buttons without an analog sensor, only the values 0.0 and 1.0 for fully unpressed and fully pressed must be provided.
        /// </summary>
        public readonly double Value;
    }
}