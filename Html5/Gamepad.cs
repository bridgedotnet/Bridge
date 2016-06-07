namespace Bridge.Html5
{
    [External]
    [Namespace(false)]
    public class Gamepad
    {
        /// <summary>
        /// Returns the VRDisplay.displayId of the associated VRDisplay — the VRDisplay that the gamepad is controlling the displayed scene of.
        /// </summary>
        public readonly int DisplayId;

        /// <summary>
        /// An identification string for the gamepad. This string identifies the brand or style of connected gamepad device. Typically, this will include the USB vendor and a product ID.
        /// </summary>
        public readonly string Id;

        /// <summary>
        /// The index of the gamepad in the Navigator. When multiple gamepads are connected to a user agent, indices must be assigned on a first-come, first-serve basis, starting at zero. If a gamepad is disconnected, previously assigned indices must not be reassigned to gamepads that continue to be connected. However, if a gamepad is disconnected, and subsequently the same or a different gamepad is then connected, index entries must be reused.
        /// </summary>
        public readonly int Index;

        /// <summary>
        /// Indicates whether the physical device represented by this object is still connected to the system. When a gamepad becomes unavailable, whether by being physically disconnected, powered off or otherwise unusable, the connected attribute must be set to false.
        /// </summary>
        public readonly bool Connected;

        /// <summary>
        /// Last time the data for this gamepad was updated. Timestamp is a monotonically increasing value that allows the author to determine if the axes and button data have been updated from the hardware. The value must be relative to the navigationStart attribute of the PerformanceTiming interface. Since values are monotonically increasing they can be compared to determine the ordering of updates, as newer values will always be greater than or equal to older values. If no data has been received from the hardware, the value of the timestamp attribute should be the time relative to navigationStart when the Gamepad object was first made available to script.
        /// </summary>
        public readonly double Timestamp;

        /// <summary>
        /// The mapping in use for this device. If the user agent has knowledge of the layout of the device, then it should indicate that a mapping is in use by setting this property to a known mapping name. Currently the only known mapping is "standard", which corresponds to the Standard Gamepad layout. If the user agent does not have knowledge of the device layout and is simply providing the controls as represented by the driver in use, then it must set the mapping property to an empty string.
        /// </summary>
        public readonly GamepadMappingType Mapping;

        /// <summary>
        /// Array of values for all axes of the gamepad. All axis values must be linearly normalized to the range [-1.0 .. 1.0]. As appropriate, -1.0 should correspond to "up" or "left", and 1.0 should correspond to "down" or "right". Axes that are drawn from a 2D input device should appear next to each other in the axes array, X then Y. It is recommended that axes appear in decreasing order of importance, such that element 0 and 1 typically represent the X and Y axis of a directional stick.
        /// </summary>
        public readonly double[] Axes;

        /// <summary>
        /// Array of button states for all buttons of the gamepad. It is recommended that buttons appear in decreasing importance such that the primary button, secondary button, tertiary button, and so on appear as elements 0, 1, 2, ... in the buttons array.
        /// </summary>
        public readonly GamepadButton[] Buttons;
    }
}