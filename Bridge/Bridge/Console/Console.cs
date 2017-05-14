using Bridge;
using System;
using System.Collections.Generic;

namespace Bridge.Utils
{
    /// <summary>
    /// Outputs log messages into a formatted div element on the page
    /// </summary>
    [Namespace("Bridge")]
    [Convention(Target = ConventionTarget.Member, Notation = Notation.LowerCamelCase)]
    public class Console
    {
        #region HTML Wrappers to avoid dynamic

#pragma warning disable 649 // CS0649  Field is never assigned to, and will always have its default value null

        [External]
        [Name("Bridge")]
        private static class BridgeWrap
        {
            [External]
            [Name("global")]
            public class GlobalWrap
            {
                [External]
                [Name("console")]
                public class ConsoleWrap
                {
                    [Name("debug")]
                    public object DebugInstance;

                    public extern void Debug(object value);

                    public extern void Log(object value);
                }

                [External]
                [Name("opera")]
                public class OperaWrap
                {
                    [Name("postError")]
                    public object PostErrorInstance;

                    public extern void PostError(object value);
                }

                private extern GlobalWrap();

                public ConsoleWrap Console;
                public OperaWrap Opera;
                public Element Window;
            }

            public static GlobalWrap Global;
        }

        [External]
        [Name("document")]
        private static class document
        {
            public static extern Element createElementNS(string namespaceURI, string qualifiedName);

            public static extern Element createElement(string tagName);

            public static extern Element getElementById(string id);

            public static readonly Element defaultView;
            public static readonly Element body;
        }

        [External]
        private class Element
        {
            private extern Element();

            public extern Element appendChild(Element child);

            public extern void addEventListener(string type, Action listener);

            public extern void addEventListener(string type, Action<dynamic> listener);

            public extern Element insertBefore(Element newElement, Element referenceElement);

            public extern void removeAttribute(string attrName);

            public extern Element removeChild(Element child);

            public extern void setAttribute(string name, string value);

            // window's method
            public extern cssStyle getComputedStyle(object element, object pseudoElt);

            public string id;
            public string innerHTML;
            public readonly Element firstChild;
            public readonly Element lastChild;
            public readonly cssStyle style;
        }

        [External]
        private class cssStyle
        {
            private extern cssStyle();

            public string color;
            public string display;
            public string marginLeft;
            public string opacity;
            public string paddingTop;
            public string paddingRight;
            public string paddingBottom;
            public string paddingLeft;
            public string marginTop;
            public string marginRight;
            public string marginBottom;
            public string right;
            public string visibility;
        }

#pragma warning restore 649 // CS0649  Field is never assigned to, and will always have its default value null

        #endregion HTML Wrappers to avoid dynamic

        [External]
        [Enum(Emit.Value)]
        private enum MessageType
        {
            Info,
            Debug,
            Error
        }

        [External]
        public static class MessageColor
        {
            [Template("\"#555\"")]
            public const string Info = "#555";

            [Template("\"#1800FF\"")]
            public const string Debug = "#1800FF";

            [Template("\"#d65050\"")]
            public const string Error = "#d65050";
        }

        private const string BODY_WRAPPER_ID = "bridge-body-wrapper";
        private const string CONSOLE_MESSAGES_ID = "bridge-console-messages";

        private string svgNS = "http://www.w3.org/2000/svg";

        // for horizontal position
        private string consoleHeight = "300px";

        private string consoleHeaderHeight = "35px";

        private Element Tooltip;
        private Element ConsoleWrap;
        private Element ConsoleMessages;
        private Element BridgeIcon;
        private Element BridgeIconPath;
        private Element BridgeConsoleLabel;
        private Element CloseBtn;
        private Element CloseIcon;
        private Element CloseIconPath;
        private Element ConsoleHeader;
        private Element ConsoleBody;

        private bool Hidden = true;
        private bool IsNewLine = false;
        public object CurrentMessageElement;
        public string BufferedOutput;

        private static string Position = "horizontal";

        private static Console instance = null;

        private Console()
        {
            this.Init();
        }

        public static Console Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new Console();
                }

                return instance;
            }
        }

        [Init(InitPosition.After)]
        public static void InitConsoleFunctions()
        {
            var wl = Script.ToDynamic().System.Console.WriteLine;
            var w = Script.ToDynamic().System.Console.Write;
            var clr = Script.ToDynamic().System.Console.Clear;
            var debug = Script.ToDynamic().System.Diagnostics.Debug.writeln;
            var con = Script.ToDynamic().Bridge.global.console;

            if (wl)
            {
                /*@
                    System.Console.WriteLine = function (value) {
                        wl(value);
                        Bridge.Console.log(value, true);
                    }
                 */
            }

            if (w)
            {
                /*@
                    System.Console.Write = function (value) {
                        w(value);
                        Bridge.Console.log(value, false);
                    }
                 */
            }

            if (clr)
            {
                /*@
                    System.Console.Clear = function () {
                        clr();
                        Bridge.Console.clear();
                    }
                 */
            }

            if (debug)
            {
                /*@
                    System.Diagnostics.Debug.writeln = function (value) {
                        debug(value);
                        Bridge.Console.debug(value);
                    }
                 */
            }

            if (con && con.error)
            {
                /*@
                    var err = con.error;

                    con.error = function (msg) {
                        err.apply(con, arguments);
                        Bridge.Console.error(msg);
                    }
                 */
            }

            if (Script.IsDefined(BridgeWrap.Global.Window))
            {
                BridgeWrap.Global.Window.addEventListener("error", (e) =>
                {
                    //@ Bridge.Console.error(System.Exception.create(e));
                });
            }
        }

        private void Init(bool reinit = false)
        {
            Hidden = false;

            var consoleWrapStyles = new Dictionary<string, string> {
                { "position", "fixed" },
                { "left" , "0" },
                { "bottom" , "0" },
                { "padding-top" , consoleHeaderHeight },
                { "background-color" , "#fff" },
                { "font" , "normal normal normal 13px/1 sans-serif" },
                { "color", "#555" }
            };

            var consoleHeaderStyles = new Dictionary<string, string>
            {
                { "position", "absolute" },
                { "top", "0" },
                { "left", "0" },
                { "right", "0" },
                { "height", "35px" },
                { "padding", "9px 15px 7px 10px" },
                { "border-bottom", "1px solid #ccc" },
                { "background-color", "#f3f3f3" },
                { "box-sizing", "border-box" }
            };

            var consoleBodyStyles = new Dictionary<string, string>
            {
                { "overflow-x" ,"auto" },
                { "font-family" ,"Menlo, Monaco, Consolas, 'Courier New', monospace" }
            };

            // Bridge Icon
            BridgeIcon = BridgeIcon ?? document.createElementNS(svgNS, "svg");

            var items = new Dictionary<string, string> {
                { "xmlns", svgNS },
                { "width", "25.5" },
                { "height", "14.4" },
                { "viewBox", "0 0 25.5 14.4" },
                { "style", "margin: 0 3px 3px 0;vertical-align:middle;" },
            };

            SetAttributes(BridgeIcon, items);

            BridgeIconPath = BridgeIconPath ?? document.createElementNS(svgNS, "path");

            var items2 = new Dictionary<string, string>();
            items2["d"] = "M19 14.4h2.2V9.6L19 7.1v7.3zm4.3-2.5v2.5h2.2l-2.2-2.5zm-8.5 2.5H17V4.8l-2.2-2.5v12.1zM0 14.4h3l7.5-8.5v8.5h2.2V0L0 14.4z";
            items2["fill"] = "#555";

            SetAttributes(BridgeIconPath, items2);

            // Bridge Console Label
            BridgeConsoleLabel = BridgeConsoleLabel ?? document.createElement("span");
            BridgeConsoleLabel.innerHTML = "Bridge Console";

            // Close Button
            CloseBtn = CloseBtn ?? document.createElement("span");
            CloseBtn.setAttribute("style", "position: relative;display: inline-block;float: right;cursor: pointer");

            CloseIcon = CloseIcon ?? document.createElementNS(svgNS, "svg");

            var items3 = new Dictionary<string, string>
            {
                { "xmlns", svgNS },
                { "width", "11.4" },
                { "height", "11.4" },
                { "viewBox", "0 0 11.4 11.4" },
                { "style", "vertical-align: middle;" },
            };

            SetAttributes(CloseIcon, items3);

            CloseIconPath = CloseIconPath ?? document.createElementNS(svgNS, "path");

            var items4 = new Dictionary<string, string>
            {
                {  "d", "M11.4 1.4L10 0 5.7 4.3 1.4 0 0 1.4l4.3 4.3L0 10l1.4 1.4 4.3-4.3 4.3 4.3 1.4-1.4-4.3-4.3" },
                { "fill", "#555" }
            };

            SetAttributes(CloseIconPath, items4);

            Tooltip = Tooltip ?? document.createElement("div");
            Tooltip.innerHTML = "Refresh page to open Bridge Console";

            Tooltip.setAttribute("style", "position: absolute;right: 30px;top: -6px;white-space: nowrap;padding: 7px;border-radius: 3px;background-color: rgba(0, 0, 0, 0.75);color: #eee;text-align: center;visibility: hidden;opacity: 0;-webkit-transition: all 0.25s ease-in-out;transition: all 0.25s ease-in-out;z-index: 1;");

            // Styles and other stuff based on position
            // Force to horizontal for now
            Position = "horizontal";

            if (Position == "horizontal")
            {
                WrapBodyContent();

                consoleWrapStyles["right"] = "0";
                consoleHeaderStyles["border-top"] = "1px solid #a3a3a3";
                consoleBodyStyles["height"] = consoleHeight;
            }
            else if (Position == "vertical")
            {
                var consoleWidth = "400px";
                document.body.style.marginLeft = consoleWidth;

                consoleWrapStyles["top"] = "0";
                consoleWrapStyles["width"] = consoleWidth;
                consoleWrapStyles["border-right"] = "1px solid #a3a3a3";
                consoleBodyStyles["height"] = "100%";
            }

            // Console wrapper
            ConsoleWrap = ConsoleWrap ?? document.createElement("div");
            ConsoleWrap.setAttribute("style", Obj2Css(consoleWrapStyles));

            // Console Header
            ConsoleHeader = ConsoleHeader ?? document.createElement("div");
            ConsoleHeader.setAttribute("style", Obj2Css(consoleHeaderStyles));

            // Console Body Wrapper
            ConsoleBody = ConsoleBody ?? document.createElement("div");
            ConsoleBody.setAttribute("style", Obj2Css(consoleBodyStyles));

            // Console Messages Unordered List Element
            ConsoleMessages = ConsoleMessages ?? document.createElement("ul");
            var cm = ConsoleMessages;
            cm.id = CONSOLE_MESSAGES_ID;

            cm.setAttribute("style", "margin: 0;padding: 0;list-style: none;");

            if (!reinit)
            {
                BridgeIcon.appendChild(BridgeIconPath);
                CloseIcon.appendChild(CloseIconPath);
                CloseBtn.appendChild(CloseIcon);
                CloseBtn.appendChild(Tooltip);

                // Add child elements into console header
                ConsoleHeader.appendChild(BridgeIcon);
                ConsoleHeader.appendChild(BridgeConsoleLabel);
                ConsoleHeader.appendChild(CloseBtn);

                // Add messages to console body
                ConsoleBody.appendChild(cm);

                // Add console header and console body into console wrapper
                ConsoleWrap.appendChild(ConsoleHeader);
                ConsoleWrap.appendChild(ConsoleBody);

                // Finally add console to body
                document.body.appendChild(ConsoleWrap);

                // Close console
                CloseBtn.addEventListener("click", this.Close);

                // Show/hide Tooltip
                CloseBtn.addEventListener("mouseover", this.ShowTooltip);
                CloseBtn.addEventListener("mouseout", this.HideTooltip);
            }
        }

        private static void LogBase(object value, bool newLine = true, MessageType messageType = MessageType.Info)
        {
            var self = Instance;
            var v = "";

            if (value != null)
            {
                //@ v = (value.toString == {}.toString) ? JSON.stringify(value, null, 4) : value.toString();
            }

            if (self.BufferedOutput != null)
            {
                self.BufferedOutput += v;

                if (newLine)
                {
                    self.BufferedOutput += System.Environment.NewLine;
                }

                return;
            }

            Show();

            if (self.IsNewLine || self.CurrentMessageElement == null)
            {
                var m = self.BuildConsoleMessage(v, messageType);
                self.ConsoleMessages.appendChild(m);
                self.CurrentMessageElement = m;
            }
            else
            {
                var m = self.CurrentMessageElement.As<Element>();
                m.lastChild.innerHTML += v;
            }

            self.IsNewLine = newLine;
        }

        public static void Error(string value)
        {
            LogBase(value, messageType: MessageType.Error);
        }

        public static void Debug(string value)
        {
            LogBase(value, messageType: MessageType.Debug);
        }

        public static void Log(object value, bool newLine = true)
        {
            LogBase(value, newLine);
        }

        public static void Clear()
        {
            var self = instance;

            if (self == null)
            {
                return;
            }

            var m = self.ConsoleMessages;

            if (m != null)
            {
                while (m.firstChild != null)
                {
                    m.removeChild(m.firstChild);
                }

                self.CurrentMessageElement = null;
            }

            if (self.BufferedOutput != null)
            {
                self.BufferedOutput = "";
            }

            self.IsNewLine = false;
        }

        public static void Hide()
        {
            if (instance == null)
            {
                return;
            }

            var self = Instance;

            if (self.Hidden)
            {
                return;
            }

            self.Close();
        }

        public static void Show()
        {
            var self = Instance;

            if (!self.Hidden)
            {
                return;
            }

            self.Init(true);
        }

        public static void Toggle()
        {
            if (Instance.Hidden)
            {
                Show();
            }
            else
            {
                Hide();
            }
        }

        /******************************************************
          * Helper Functions
          ******************************************************/

        /// <summary>
        /// Show tooltip
        /// </summary>
        public void ShowTooltip()
        {
            var self = Instance;
            self.Tooltip.style.right = "20px";
            self.Tooltip.style.visibility = "visible";
            self.Tooltip.style.opacity = "1";
        }

        /// <summary>
        ///  Hide tooltip
        /// </summary>
        public void HideTooltip()
        {
            var self = Instance;
            self.Tooltip.style.right = "30px";
            self.Tooltip.style.opacity = "0";
        }

        /// <summary>
        /// Close Bridge Console
        /// </summary>
        public void Close()
        {
            Hidden = true;

            ConsoleWrap.style.display = "none";

            if (Position == "horizontal")
            {
                UnwrapBodyContent();
            }
            else if (Position == "vertical")
            {
                document.body.removeAttribute("style");
            }
        }

        /// <summary>
        /// Wraps all existing child elements inside body into a div
        /// </summary>
        private void WrapBodyContent()
        {
            if (document.body == null)
            {
                return;
            }

            // get body margin and padding for proper alignment of scroll if a body margin/padding is used.
            var bodyStyle = document.defaultView.getComputedStyle(document.body, null);

            var bodyPaddingTop = bodyStyle.paddingTop;
            var bodyPaddingRight = bodyStyle.paddingRight;
            var bodyPaddingBottom = bodyStyle.paddingBottom;
            var bodyPaddingLeft = bodyStyle.paddingLeft;

            var bodyMarginTop = bodyStyle.marginTop;
            var bodyMarginRight = bodyStyle.marginRight;
            var bodyMarginBottom = bodyStyle.marginBottom;
            var bodyMarginLeft = bodyStyle.marginLeft;

            var div = document.createElement("div");
            div.id = BODY_WRAPPER_ID;
            div.setAttribute("style",
                "height: calc(100vh - " + consoleHeight + " - " + consoleHeaderHeight + ");" +
                "margin-top: calc(-1 * " + "(" + (bodyMarginTop + " + " + bodyPaddingTop) + "));" +
                "margin-right: calc(-1 * " + "(" + (bodyMarginRight + " + " + bodyPaddingRight) + "));" +
                "margin-left: calc(-1 * " + "(" + (bodyMarginLeft + " + " + bodyPaddingLeft) + "));" +
                "padding-top: calc(" + (bodyMarginTop + " + " + bodyPaddingTop) + ");" +
                "padding-right: calc(" + (bodyMarginRight + " + " + bodyPaddingRight) + ");" +
                "padding-bottom: calc(" + (bodyMarginBottom + " + " + bodyPaddingBottom) + ");" +
                "padding-left: calc(" + (bodyMarginLeft + " + " + bodyPaddingLeft) + ");" +
                "overflow-x: auto;" +
                "box-sizing: border-box !important;"
            );

            while (document.body.firstChild != null)
            {
                div.appendChild(document.body.firstChild);
            }

            document.body.appendChild(div);
        }

        /// <summary>
        /// Unwraps content off the bridge body wrapper div back into the body tag as they used to be
        /// </summary>
        private void UnwrapBodyContent()
        {
            var bridgeBodyWrap = document.getElementById(BODY_WRAPPER_ID);

            if (bridgeBodyWrap == null)
            {
                return;
            }

            while (bridgeBodyWrap.firstChild != null)
            {
                document.body.insertBefore(bridgeBodyWrap.firstChild, bridgeBodyWrap);
            }

            document.body.removeChild(bridgeBodyWrap);
        }

        /// <summary>
        /// Constructs each message list item
        /// </summary>
        /// <param name="message"></param>
        /// <param name="messageType"></param>
        /// <returns></returns>
        private Element BuildConsoleMessage(string message, MessageType messageType)
        {
            var messageItem = document.createElement("li");
            messageItem.setAttribute("style", "padding:5px 10px;border-bottom:1px solid #f0f0f0;position:relative;");

            var messageIcon = document.createElementNS(svgNS, "svg");

            var items5 = new Dictionary<string, string>
            {
                { "xmlns", svgNS },
                { "width", "3.9" },
                { "height", "6.7" },
                { "viewBox", "0 0 3.9 6.7" },
                { "style", "vertical-align:middle;position: absolute;top: 10.5px;" },
            };

            SetAttributes(messageIcon, items5);

            var color = MessageColor.Info;

            if (messageType == MessageType.Error)
            {
                color = MessageColor.Error;
            }
            else if (messageType == MessageType.Debug)
            {
                color = MessageColor.Debug;
            }

            var messageIconPath = document.createElementNS(svgNS, "path");

            var items6 = new Dictionary<string, string>();

            items6["d"] = "M3.8 3.5L.7 6.6s-.1.1-.2.1-.1 0-.2-.1l-.2-.3C0 6.2 0 6.2 0 6.1c0 0 0-.1.1-.1l2.6-2.6L.1.7C0 .7 0 .6 0 .6 0 .5 0 .5.1.4L.4.1c0-.1.1-.1.2-.1s.1 0 .2.1l3.1 3.1s.1.1.1.2-.1.1-.2.1z";
            items6["fill"] = color;

            SetAttributes(messageIconPath, items6);

            messageIcon.appendChild(messageIconPath);

            var messageContainer = document.createElement("div");
            messageContainer.innerHTML = message;
            messageContainer.setAttribute("style", "color:" + color + ";white-space:pre;margin-left:12px;line-height:1.4;min-height:18px;");

            messageItem.appendChild(messageIcon);
            messageItem.appendChild(messageContainer);

            return messageItem;
        }

        /// <summary>
        /// Sets multiple attributes
        /// </summary>
        private void SetAttributes(Element el, Dictionary<string, string> attrs)
        {
            foreach (KeyValuePair<string, string> item in attrs)
            {
                el.setAttribute(item.Key, item.Value);
            }
        }

        /// <summary>
        /// Converts Object to CSS styles format
        /// </summary>
        private string Obj2Css(Dictionary<string, string> obj)
        {
            var str = "";

            foreach (KeyValuePair<string, string> item in obj)
            {
                str += item.Key.ToLower() + ":" + item.Value + ";";
            }

            return str;
        }
    }
}