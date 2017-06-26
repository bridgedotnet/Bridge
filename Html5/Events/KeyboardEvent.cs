// Event WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/event

namespace Bridge.Html5
{
    [External]
    [Name("KeyboardEvent")]
    public class KeyboardEvent : UIEvent
    {
        extern internal KeyboardEvent();

        public extern KeyboardEvent(string type);

        public extern KeyboardEvent(string type, KeyboardEventInit eventInit);

        /// <summary>
        /// Indicates whether the ALT key was pressed when the event fired.
        /// </summary>
        public readonly bool AltKey;

        /// <summary>
        /// The Unicode reference number of the key; this attribute is used only by the 'keypress' event. For keys whose char attribute contains multiple characters, this is the Unicode value of the first character in that attribute. In Firefox 26 this returns codes for printable characters.
        /// </summary>
        public readonly int CharCode;

        /// <summary>
        /// Indicates whether the CTRL key was pressed when the event fired.
        /// </summary>
        public readonly bool CtrlKey;

        /// <summary>
        /// true if the event is fired between after compositionstart and before compositionend.
        /// </summary>
        public readonly bool IsComposing;

        /// <summary>
        /// Returns the Unicode value of a non-character key in a keypress event or any key in any other type of keyboard event.
        ///
        /// In a keypress event, the Unicode value of the key pressed is stored in either the keyCode or charCode property, never both. If the key pressed generates a character (e.g. 'a'), charCode is set to the code of that character, respecting the letter case. (i.e. charCode takes into account whether the shift key is held down). Otherwise, the code of the pressed key is stored in keyCode.
        ///
        /// keyCode is always set in the keydown and keyup events. In these cases, charCode is never set.
        ///
        /// To get the code of the key regardless of whether it was stored in keyCode or charCode, query the which property.
        ///
        /// Characters entered through an IME do not register through keyCode or charCode.
        /// </summary>
        public readonly int KeyCode;

        /// <summary>
        /// The key value of the key represented by the event. If the value has a printed representation, this attribute's value is the same as the char attribute. Otherwise, it's one of the key value strings specified in {{anch("Key values")}}. If the key can't be identified, this is the string "Unidentified". See key names for the detail. In Firefox 26 this has a valid string for non-printable characters, and some printable characters (e.g. Tab, Enter). For regular characters it returns only "MozPrintableKey". charCode works and returns the character code.
        /// </summary>
        public readonly string Key;

        /// <summary>
        /// A locale string indicating the locale the keyboard is configured for. This may be the empty string if the browser or device doesn't know the keyboard's locale.
        /// </summary>
        public readonly string Locale;

        /// <summary>
        /// The location of the key on the keyboard or other input device
        /// </summary>
        public readonly KeyLocation Location;

        /// <summary>
        /// Indicates whether the "meta" key was pressed when the event fired.
        /// Note: On the Macintosh, this is the Command key. On Microsoft Windows, this is the Windows key.
        /// </summary>
        public readonly bool MetaKey;

        /// <summary>
        /// Indicates whether the SHIFT key was pressed when the event fired.
        /// </summary>
        public readonly bool ShiftKey;

        /// <summary>
        /// Returns the numeric keyCode of the key pressed, or the character code (charCode) for an alphanumeric key pressed.
        /// </summary>
        public readonly int Which;

        /// <summary>
        /// true if the key is being held down such that it is automatically repeating.
        /// </summary>
        public readonly bool Repeat;

        /// <summary>
        /// Returns the current state of the specified modifier key.
        /// </summary>
        /// <param name="keyArg">A string identifying the modifier key whose value you wish to determine. This may be an implementation-defined value or one of: "Alt", "AltGraph", "CapsLock", "Control", "Fn", "Meta", "NumLock", "ScrollLock", "Shift", "SymbolLock", or "OS". Note that IE9 uses "Scroll" for "ScrollLock" and "Win" for "OS". If you use these older draft's name, Gecko's getModifierState() always returns false.</param>
        /// <returns>true if the specified modifier key is engaged; otherwise false.</returns>
        public virtual extern bool GetModifierState(string keyArg);

        /// <summary>
        /// The initKeyEvent method is used to initialize the value of an event created using document.createEvent("KeyboardEvent")
        /// </summary>
        /// <param name="type">The type of event.</param>
        /// <param name="bubbles">A boolean indicating whether the event should bubble up through the event chain or not (see bubbles).</param>
        /// <param name="cancelable">A boolean indicating whether the event can be canceled.</param>
        /// <param name="view">Specifies UIEvent.view. This value may be null.</param>
        /// <param name="ctrlKey">bool True if the Virtual Key to be generated is a combination of the Ctrl key and other keys</param>
        /// <param name="altKey">bool True if the Virtual Key to be generated is a combination of the Alt key and other keys</param>
        /// <param name="shiftKey">bool True if the Virtual Key to be generated is a combination of the Shift key and other keys</param>
        /// <param name="metaKey">bool True if the Virtual Key to be generated is a combination of the Meta key and other keys</param>
        /// <param name="keyCode">unsigned long the virtual key code value of the key which was depressed, otherwise zero</param>
        /// <param name="charCode">unsigned long the Unicode character associated with the depressed key otherwise zero</param>
        public virtual extern void InitKeyEvent(string type, bool bubbles, bool cancelable, WindowInstance view, bool ctrlKey, bool altKey, bool shiftKey, bool metaKey, int keyCode, int charCode);

        #region Key codes consts

        /// <summary>
        /// Cancel key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_CANCEL = 3;

        /// <summary>
        /// Help key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_HELP = 6;

        /// <summary>
        /// Backspace key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_BACK_SPACE = 8;

        /// <summary>
        /// Tab key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_TAB = 9;

        /// <summary>
        /// "5" key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_CLEAR = 12;

        /// <summary>
        /// Return/enter key on the main keyboard.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_RETURN = 13;

        /// <summary>
        /// Reserved, but not used. Obsolete since Gecko 30 (Dropped, see bug 969247.)
        /// </summary>
        [InlineConst]
        public const int DOM_VK_ENTER = 14;

        /// <summary>
        /// Shift key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_SHIFT = 16;

        /// <summary>
        /// Control key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_CONTROL = 17;

        /// <summary>
        /// Alt (Option on Mac) key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_ALT = 18;

        /// <summary>
        /// Pause key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_PAUSE = 19;

        /// <summary>
        /// Caps lock.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_CAPS_LOCK = 20;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_KANA = 21;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_HANGUL = 21;

        /// <summary>
        /// "英数" key on Japanese Mac keyboard.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_EISU = 22;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_JUNJA = 23;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_FINAL = 24;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_HANJA = 25;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_KANJI = 25;

        /// <summary>
        /// Escape key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_ESCAPE = 27;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_CONVERT = 28;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NONCONVERT = 29;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_ACCEPT = 30;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_MODECHANGE = 31;

        /// <summary>
        /// Space bar.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_SPACE = 32;

        /// <summary>
        /// Page Up key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_PAGE_UP = 33;

        /// <summary>
        /// Page Down key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_PAGE_DOWN = 34;

        /// <summary>
        /// End key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_END = 35;

        /// <summary>
        /// Home key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_HOME = 36;

        /// <summary>
        /// Left arrow.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_LEFT = 37;

        /// <summary>
        /// Up arrow.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_UP = 38;

        /// <summary>
        /// Right arrow.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_RIGHT = 39;

        /// <summary>
        /// Down arrow.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_DOWN = 40;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_SELECT = 41;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_PRINT = 42;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_EXECUTE = 43;

        /// <summary>
        /// Print Screen key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_PRINTSCREEN = 44;

        /// <summary>
        /// Ins(ert) key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_INSERT = 45;

        /// <summary>
        /// Del(ete) key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_DELETE = 46;

        /// <summary>
        /// "0" key in standard key location.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_0 = 48;

        /// <summary>
        /// "1" key in standard key location.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_1 = 49;

        /// <summary>
        /// "2" key in standard key location.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_2 = 50;

        /// <summary>
        /// "3" key in standard key location.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_3 = 51;

        /// <summary>
        /// "4" key in standard key location.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_4 = 52;

        /// <summary>
        /// "5" key in standard key location.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_5 = 53;

        /// <summary>
        /// "6" key in standard key location.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_6 = 54;

        /// <summary>
        /// "7" key in standard key location.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_7 = 55;

        /// <summary>
        /// "8" key in standard key location.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_8 = 56;

        /// <summary>
        /// "9" key in standard key location.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_9 = 57;

        /// <summary>
        /// Colon (":") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_COLON = 58;

        /// <summary>
        /// Semicolon (";") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_SEMICOLON = 59;

        /// <summary>
        /// Less-than ("&lt;") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_LESS_THAN = 60;

        /// <summary>
        /// Equals ("=") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_EQUALS = 61;

        /// <summary>
        /// Greater-than (">") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_GREATER_THAN = 62;

        /// <summary>
        /// Question mark ("?") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_QUESTION_MARK = 63;

        /// <summary>
        /// Atmark ("@") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_AT = 64;

        /// <summary>
        /// "A" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_A = 65;

        /// <summary>
        /// "B" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_B = 66;

        /// <summary>
        /// "C" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_C = 67;

        /// <summary>
        /// "D" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_D = 68;

        /// <summary>
        /// "E" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_E = 69;

        /// <summary>
        /// "F" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F = 70;

        /// <summary>
        /// "G" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_G = 71;

        /// <summary>
        /// "H" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_H = 72;

        /// <summary>
        /// "I" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_I = 73;

        /// <summary>
        /// "J" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_J = 74;

        /// <summary>
        /// "K" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_K = 75;

        /// <summary>
        /// "L" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_L = 76;

        /// <summary>
        /// "M" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_M = 77;

        /// <summary>
        /// "N" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_N = 78;

        /// <summary>
        /// "O" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_O = 79;

        /// <summary>
        /// "P" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_P = 80;

        /// <summary>
        /// "Q" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_Q = 81;

        /// <summary>
        /// "R" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_R = 82;

        /// <summary>
        /// "S" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_S = 83;

        /// <summary>
        /// "T" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_T = 84;

        /// <summary>
        /// "U" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_U = 85;

        /// <summary>
        /// "V" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_V = 86;

        /// <summary>
        /// "W" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_W = 87;

        /// <summary>
        /// "X" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_X = 88;

        /// <summary>
        /// "Y" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_Y = 89;

        /// <summary>
        /// "Z" key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_Z = 90;

        /// <summary>
        /// Windows logo key on Windows. Or Super or Hyper key on Linux.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN = 91;

        /// <summary>
        /// Opening context menu key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_CONTEXT_MENU = 93;

        /// <summary>
        /// Linux support for this keycode was added in Gecko 4.0.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_SLEEP = 95;

        /// <summary>
        /// "0" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NUMPAD0 = 96;

        /// <summary>
        /// "1" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NUMPAD1 = 97;

        /// <summary>
        /// "2" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NUMPAD2 = 98;

        /// <summary>
        /// "3" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NUMPAD3 = 99;

        /// <summary>
        /// "4" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NUMPAD4 = 100;

        /// <summary>
        /// "5" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NUMPAD5 = 101;

        /// <summary>
        /// "6" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NUMPAD6 = 102;

        /// <summary>
        /// "7" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NUMPAD7 = 103;

        /// <summary>
        /// "8" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NUMPAD8 = 104;

        /// <summary>
        /// "9" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NUMPAD9 = 105;

        /// <summary>
        /// "*" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_MULTIPLY = 106;

        /// <summary>
        /// "+" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_ADD = 107;

        /// <summary>
        ///
        /// </summary>
        [InlineConst]
        public const int DOM_VK_SEPARATOR = 108;

        /// <summary>
        /// "-" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_SUBTRACT = 109;

        /// <summary>
        /// Decimal point on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_DECIMAL = 110;

        /// <summary>
        /// "/" on the numeric keypad.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_DIVIDE = 111;

        /// <summary>
        /// F1 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F1 = 112;

        /// <summary>
        /// F2 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F2 = 113;

        /// <summary>
        /// F3 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F3 = 114;

        /// <summary>
        /// F4 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F4 = 115;

        /// <summary>
        /// F5 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F5 = 116;

        /// <summary>
        /// F6 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F6 = 117;

        /// <summary>
        /// F7 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F7 = 118;

        /// <summary>
        /// F8 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F8 = 119;

        /// <summary>
        /// F9 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F9 = 120;

        /// <summary>
        /// F10 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F10 = 121;

        /// <summary>
        /// F11 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F11 = 122;

        /// <summary>
        /// F12 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F12 = 123;

        /// <summary>
        /// F13 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F13 = 124;

        /// <summary>
        /// F14 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F14 = 125;

        /// <summary>
        /// F15 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F15 = 126;

        /// <summary>
        /// F16 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F16 = 127;

        /// <summary>
        /// F17 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F17 = 128;

        /// <summary>
        /// F18 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F18 = 129;

        /// <summary>
        /// F19 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F19 = 130;

        /// <summary>
        /// F20 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F20 = 131;

        /// <summary>
        /// F21 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F21 = 132;

        /// <summary>
        /// F22 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F22 = 133;

        /// <summary>
        /// F23 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F23 = 134;

        /// <summary>
        /// F24 key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_F24 = 135;

        /// <summary>
        /// Num Lock key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_NUM_LOCK = 144;

        /// <summary>
        /// Scroll Lock key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_SCROLL_LOCK = 145;

        /// <summary>
        /// An OEM specific key on Windows. This was used for "Dictionary" key on Fujitsu OASYS. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_FJ_JISHO = 146;

        /// <summary>
        /// An OEM specific key on Windows. This was used for "Unregister word" key on Fujitsu OASYS. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_FJ_MASSHOU = 147;

        /// <summary>
        /// An OEM specific key on Windows. This was used for "Register word" key on Fujitsu OASYS. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_FJ_TOUROKU = 148;

        /// <summary>
        /// An OEM specific key on Windows. This was used for "Left OYAYUBI" key on Fujitsu OASYS. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_FJ_LOYA = 149;

        /// <summary>
        /// An OEM specific key on Windows. This was used for "Right OYAYUBI" key on Fujitsu OASYS. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_FJ_ROYA = 150;

        /// <summary>
        /// Circumflex ("^") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_CIRCUMFLEX = 160;

        /// <summary>
        /// Exclamation ("!") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_EXCLAMATION = 161;

        /// <summary>
        /// Double quote (""") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_DOUBLE_QUOTE = 162;

        /// <summary>
        /// Hash ("#") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_HASH = 163;

        /// <summary>
        /// Dollar sign ("$") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_DOLLAR = 164;

        /// <summary>
        /// Percent ("%") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_PERCENT = 165;

        /// <summary>
        /// Ampersand ("&amp;") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_AMPERSAND = 166;

        /// <summary>
        /// Underscore ("_") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_UNDERSCORE = 167;

        /// <summary>
        /// Open parenthesis ("(") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_OPEN_PAREN = 168;

        /// <summary>
        /// Close parenthesis (")") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_CLOSE_PAREN = 169;

        /// <summary>
        /// Asterisk ("*") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_ASTERISK = 170;

        /// <summary>
        /// Plus ("+") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_PLUS = 171;

        /// <summary>
        /// Pipe ("|") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_PIPE = 172;

        /// <summary>
        /// Hyphen-US/docs/Minus ("-") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_HYPHEN_MINUS = 173;

        /// <summary>
        /// Open curly bracket ("{") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_OPEN_CURLY_BRACKET = 174;

        /// <summary>
        /// Close curly bracket ("}") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_CLOSE_CURLY_BRACKET = 175;

        /// <summary>
        /// Tilde ("~") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_TILDE = 176;

        /// <summary>
        /// Audio mute key. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_VOLUME_MUTE = 181;

        /// <summary>
        /// Audio volume down key Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_VOLUME_DOWN = 182;

        /// <summary>
        /// Audio volume up key Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_VOLUME_UP = 183;

        /// <summary>
        /// Comma (",") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_COMMA = 188;

        /// <summary>
        /// Period (".") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_PERIOD = 190;

        /// <summary>
        /// Slash ("/") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_SLASH = 191;

        /// <summary>
        /// Back tick ("`") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_BACK_QUOTE = 192;

        /// <summary>
        /// Open square bracket ("[") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_OPEN_BRACKET = 219;

        /// <summary>
        /// Back slash ("\") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_BACK_SLASH = 220;

        /// <summary>
        /// Close square bracket ("]") key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_CLOSE_BRACKET = 221;

        /// <summary>
        /// Quote (''') key.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_QUOTE = 222;

        /// <summary>
        /// Meta key on Linux, Command key on Mac.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_META = 224;

        /// <summary>
        /// AltGr key (Level 3 Shift key or Level 5 Shift key) on Linux.
        /// </summary>
        [InlineConst]
        public const int DOM_VK_ALTGR = 225;

        /// <summary>
        /// An OEM specific key on Windows. This is (was?) used for Olivetti ICO keyboard.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_ICO_HELP = 227;

        /// <summary>
        /// An OEM specific key on Windows. This is (was?) used for Olivetti ICO keyboard.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_ICO_00 = 228;

        /// <summary>
        /// An OEM specific key on Windows. This is (was?) used for Olivetti ICO keyboard.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_ICO_CLEAR = 230;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_RESET = 233;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_JUMP = 234;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_PA1 = 235;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_PA2 = 236;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_PA3 = 237;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_WSCTRL = 238;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_CUSEL = 239;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_ATTN = 240;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_FINISH = 241;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_COPY = 242;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_AUTO = 243;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_ENLW = 244;

        /// <summary>
        /// An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_BACKTAB = 245;

        /// <summary>
        /// Attn (Attension) key of IBM midrange computers, e.g., AS/400. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_ATTN = 246;

        /// <summary>
        /// CrSel (Cursor Selection) key of IBM 3270 keyboard layout. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_CRSEL = 247;

        /// <summary>
        /// ExSel (Extend Selection) key of IBM 3270 keyboard layout. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_EXSEL = 248;

        /// <summary>
        /// Erase EOF key of IBM 3270 keyboard layout. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_EREOF = 249;

        /// <summary>
        /// Play key of IBM 3270 keyboard layout. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_PLAY = 250;

        /// <summary>
        /// Zoom key. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_ZOOM = 251;

        /// <summary>
        /// PA1 key of IBM 3270 keyboard layout. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_PA1 = 253;

        /// <summary>
        /// Clear key, but we're not sure the meaning difference from DOM_VK_CLEAR. Requires Gecko 21.0
        /// </summary>
        [InlineConst]
        public const int DOM_VK_WIN_OEM_CLEAR = 254;

        #endregion Key codes consts
    }

    [External]
    [Name("Object")]
    public class KeyboardEventInit : UIEventInit
    {
        /// <summary>
        /// Indicates whether the ALT key was pressed when the event fired.
        /// </summary>
        public bool AltKey;

        /// <summary>
        /// Indicates whether the CTRL key was pressed when the event fired.
        /// </summary>
        public bool CtrlKey;

        /// <summary>
        /// Indicates whether the "meta" key was pressed when the event fired.
        /// Note: On the Macintosh, this is the Command key. On Microsoft Windows, this is the Windows key.
        /// </summary>
        public bool MetaKey;

        /// <summary>
        /// Indicates whether the SHIFT key was pressed when the event fired.
        /// </summary>
        public bool ShiftKey;

        /// <summary>
        /// Returns the Unicode value of a non-character key in a keypress event or any key in any other type of keyboard event.
        ///
        /// In a keypress event, the Unicode value of the key pressed is stored in either the keyCode or charCode property, never both. If the key pressed generates a character (e.g. 'a'), charCode is set to the code of that character, respecting the letter case. (i.e. charCode takes into account whether the shift key is held down). Otherwise, the code of the pressed key is stored in keyCode.
        ///
        /// keyCode is always set in the keydown and keyup events. In these cases, charCode is never set.
        ///
        /// To get the code of the key regardless of whether it was stored in keyCode or charCode, query the which property.
        ///
        /// Characters entered through an IME do not register through keyCode or charCode.
        /// </summary>
        public int KeyCode;

        /// <summary>
        /// The Unicode reference number of the key; this attribute is used only by the 'keypress' event. For keys whose char attribute contains multiple characters, this is the Unicode value of the first character in that attribute. In Firefox 26 this returns codes for printable characters.
        /// </summary>
        public int CharCode;
    }

    /// <summary>
    /// These constants describe the location on the keyboard of key events.
    /// </summary>
    [External]
    [Enum(Emit.Value)]
    public enum KeyLocation
    {
        /// <summary>
        /// The key must not be distinguished between the left and right versions of the key, and was not pressed on the numeric keypad or a key that is considered to be part of the keypad.
        /// </summary>
        Standard = 0,

        /// <summary>
        /// The key was the left-hand version of the key; for example, this is the value of the location attribute when the left-hand Control key is pressed on a standard 101 key US keyboard. This value is only used for keys that have more that one possible location on the keyboard.
        /// </summary>
        Left = 1,

        /// <summary>
        /// The key was the right-hand version of the key; for example, this is the value of the location attribute when the right-hand Control key is pressed on a standard 101 key US keyboard. This value is only used for keys that have more that one possible location on the keyboard.
        /// </summary>
        Right = 2,

        /// <summary>
        /// The key was on the numeric keypad, or has a virtual key code that corresponds to the numeric keypad.
        /// </summary>
        Numpad = 3,

        /// <summary>
        /// The key was on a mobile device; this can be on either a physical keypad or a virtual keyboard.
        /// </summary>
        Mobile = 4,

        /// <summary>
        /// The key was a button on a game controller or a joystick on a mobile device.
        /// </summary>
        Joystick = 5
    }

    /// <summary>
    /// A generic version of the KeyboardEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type</typeparam>
    [External]
    [Name("KeyboardEvent")]
    [IgnoreGeneric]
    public class KeyboardEvent<TCurrentTarget> : KeyboardEvent where TCurrentTarget : HTMLElement
    {
        /// <summary>
        /// Identifies the current target for the event, as the event traverses the DOM. It always refers to the element the event handler has been attached to as opposed to event.target which identifies the element on which the event occurred.
        /// On Internet Explorer 6 through 8, the event model is different. Event listeners are attached with the non-standard element.attachEvent method. In this model, there is no equivalent to event.currentTarget and this is the global object.
        /// </summary>
        public new readonly TCurrentTarget CurrentTarget;

        /// <summary>
        /// This property of event objects is the object the event was dispatched on. It is different than event.currentTarget when the event handler is called in bubbling or capturing phase of the event.
        /// On IE6-8, the event model is different. Event listeners are attached with the non-standard element.attachEvent method. In this model, the event object is not passed as an argument to the event handler function but is the window.event object. This object has an srcElement property which has the same semantics than event.target.
        /// </summary>
        public new readonly TCurrentTarget Target;
    }
}