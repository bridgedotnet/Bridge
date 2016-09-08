using System;
using System.Collections.Generic;

namespace Bridge.Utils
{
    /// <summary>
    ///
    /// </summary>
    [Namespace("Bridge")]
    public class Console
    {
        #region HTML Wrappers to avoid dynamic
#pragma warning disable 649 // CS0649  Field is never assigned to, and will always have its default value null
        [External]
        [Name("Bridge")]
        private static class BridgeWrapper
        {
            [External]
            [Name("global")]
            public class GlobalWraper
            {
                [External]
                [Name("console")]
                public class ConsoleWraper
                {
                    [Name("debug")]
                    public object DebugInstance;
                    public extern void Debug(object value);
                    public extern void Log(object value);
                }

                [External]
                [Name("opera")]
                public class OperaWraper
                {
                    [Name("postError")]
                    public object PostErrorInstance;
                    public extern void PostError(object value);
                }

                private extern GlobalWraper();

                public ConsoleWraper Console;
                public OperaWraper Opera;
            }

            public static GlobalWraper Global;
        }

        [External]
        [Name("document")]
        private static class Document
        {
            public static extern Element CreateElementNS(string namespaceURI, string qualifiedName);
            public static extern Element CreateElement(string tagName);
            public static extern Element GetElementById(string id);

            public static readonly Element DefaultView;
            public static readonly Element Body;
        }

        [External]
        private class Element
        {
            private extern Element();

            public extern Element AppendChild(Element child);
            public extern void AddEventListener(string type, Action listener);
            public extern Element InsertBefore(Element newElement, Element referenceElement);
            public extern void RemoveAttribute(string attrName);
            public extern Element RemoveChild(Element child);
            public extern void SetAttribute(string name, string value);

            // window's method
            public extern CssStyle GetComputedStyle(object element, object pseudoElt);

            public string Id;
            public string InnerHTML;
            public readonly Element FirstChild;
            public readonly CssStyle Style;
        }

        [External]
        private class CssStyle
        {
            private extern CssStyle();

            public string Color;
            public string Display;
            public string MarginLeft;
            public string Opacity;
            public string PaddingTop;
            public string PaddingRight;
            public string PaddingBottom;
            public string PaddingLeft;
            public string MarginTop;
            public string MarginRight;
            public string MarginBottom;
            public string Right;
            public string Visibility;
        }
#pragma warning restore 649 // CS0649  Field is never assigned to, and will always have its default value null
        #endregion HTML Wrappers

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
        private Element ConsoleWrapper;
        private Element ConsoleMessages;
        private bool Hidden;

        private bool ConsoleDefined;
        private bool ConsoleDebugDefined;
        private bool OperaPostErrorDefined;

        public string DebugOutput;

        private static string position = "horizontal";

        private static readonly Console instance = new Console { };

        private Console()
        {
            this.Init();
        }

        public static Console Instance
        {
            get
            {
                return instance;
            }
        }

        public void Init()
        {
            var consoleWrapperStyles = new Dictionary<string, string> {
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
            var bridgeIcon = Document.CreateElementNS(svgNS, "svg");

            var items = new Dictionary<string, string> {
                { "xmlns", svgNS },
                { "width", "25.5" },
                { "height", "14.4" },
                { "viewBox", "0 0 25.5 14.4" },
                { "style", "margin: 0 3px 3px 0;vertical-align:middle;" },
            };

            SetAttributes(bridgeIcon, items);

            var bridgeIconPath = Document.CreateElementNS(svgNS, "path");

            var items2 = new Dictionary<string, string>();
            items2["d"] = "M19 14.4h2.2V9.6L19 7.1v7.3zm4.3-2.5v2.5h2.2l-2.2-2.5zm-8.5 2.5H17V4.8l-2.2-2.5v12.1zM0 14.4h3l7.5-8.5v8.5h2.2V0L0 14.4z";
            items2["fill"] = "#555";

            SetAttributes(bridgeIconPath, items2);

            bridgeIcon.AppendChild(bridgeIconPath);

            // Bridge Console Label
            var bridgeConsoleLabel = Document.CreateElement("span");
            bridgeConsoleLabel.InnerHTML = "Bridge Console";

            // Close Button
            var closeBtn = Document.CreateElement("span");
            closeBtn.SetAttribute("style", "position: relative;display: inline-block;float: right;cursor: pointer");

            var closeIcon = Document.CreateElementNS(svgNS, "svg");

            var items3 = new Dictionary<string, string>
            {
                { "xmlns", svgNS },
                { "width", "11.4" },
                { "height", "11.4" },
                { "viewBox", "0 0 11.4 11.4" },
                { "style", "vertical-align: middle;" },
            };

            SetAttributes(closeIcon, items3);

            var closeIconPath = Document.CreateElementNS(svgNS, "path");

            var items4 = new Dictionary<string, string>
            {
                {  "d", "M11.4 1.4L10 0 5.7 4.3 1.4 0 0 1.4l4.3 4.3L0 10l1.4 1.4 4.3-4.3 4.3 4.3 1.4-1.4-4.3-4.3" },
                { "fill", "#555" }
            };

            SetAttributes(closeIconPath, items4);

            Tooltip = Document.CreateElement("div");
            Tooltip.InnerHTML = "Refresh page to open Bridge Console";

            Tooltip.SetAttribute("style", "position: absolute;right: 30px;top: -6px;white-space: nowrap;padding: 7px;border-radius: 3px;background-color: rgba(0, 0, 0, 0.75);color: #eee;text-align: center;visibility: hidden;opacity: 0;-webkit-transition: all 0.25s ease-in-out;transition: all 0.25s ease-in-out;z-index: 1;");

            closeIcon.AppendChild(closeIconPath);
            closeBtn.AppendChild(closeIcon);
            closeBtn.AppendChild(Tooltip);

            // Styles and other stuff based on position
            // Force to horizontal for now
            position = "horizontal";

            if (position == "horizontal")
            {
                WrapBodyContent();

                consoleWrapperStyles["right"] = "0";
                consoleHeaderStyles["border-top"] = "1px solid #a3a3a3";
                consoleBodyStyles["height"] = consoleHeight;
            }
            else if (position == "vertical")
            {
                var consoleWidth = "400px";
                Document.Body.Style.MarginLeft = consoleWidth;

                consoleWrapperStyles["top"] = "0";
                consoleWrapperStyles["width"] = consoleWidth;
                consoleWrapperStyles["border-right"] = "1px solid #a3a3a3";
                consoleBodyStyles["height"] = "100%";
            }

            // Console wrapper
            ConsoleWrapper = Document.CreateElement("div");
            ConsoleWrapper.SetAttribute("style", Obj2Css(consoleWrapperStyles));

            // Console Header
            var consoleHeader = Document.CreateElement("div");
            consoleHeader.SetAttribute("style", Obj2Css(consoleHeaderStyles));

            // Add child elements into console header
            consoleHeader.AppendChild(bridgeIcon);
            consoleHeader.AppendChild(bridgeConsoleLabel);
            consoleHeader.AppendChild(closeBtn);

            // Console Body Wrapper
            var consoleBody = Document.CreateElement("div");
            consoleBody.SetAttribute("style", Obj2Css(consoleBodyStyles));

            // Console Messages Unordered List Element
            var cm = Document.CreateElement("ul");
            ConsoleMessages = cm;
            cm.Id = CONSOLE_MESSAGES_ID;

            cm.SetAttribute("style", "margin: 0;padding: 0;list-style: none;");

            // Add messages to console body
            consoleBody.AppendChild(cm);

            // Add console header and console body into console wrapper
            ConsoleWrapper.AppendChild(consoleHeader);
            ConsoleWrapper.AppendChild(consoleBody);

            // Finally add console to body
            Document.Body.AppendChild(ConsoleWrapper);

            // Close console
            closeBtn.AddEventListener("click", this.Close);

            // Show/hide Tooltip
            closeBtn.AddEventListener("mouseover", this.ShowTooltip);
            closeBtn.AddEventListener("mouseout", this.HideTooltip);

            ConsoleDefined = Script.IsDefined(BridgeWrapper.Global) && Script.IsDefined(BridgeWrapper.Global.Console);
            ConsoleDebugDefined = ConsoleDefined && Script.IsDefined(BridgeWrapper.Global.Console.DebugInstance);
            OperaPostErrorDefined = Script.IsDefined(BridgeWrapper.Global.Opera) && Script.IsDefined(BridgeWrapper.Global.Opera.PostErrorInstance);
        }

        private static void LogBase(object value, MessageType messageType = MessageType.Info)
        {
            var self = Instance;

            var v = value != null ? value.ToString() : "null";

            if (self.DebugOutput != null)
            {
                self.DebugOutput += v.ToString();
                return;
            }

            if (self.Hidden)
            {
                Show();
            }

            var m = self.BuildConsoleMessage(v.ToString(), messageType);
            self.ConsoleMessages.AppendChild(m);

            if (self.ConsoleDefined)
            {
                if (messageType == MessageType.Debug && self.ConsoleDebugDefined)
                {
                    BridgeWrapper.Global.Console.Debug(v);
                }
                else
                {
                    BridgeWrapper.Global.Console.Log(v);
                }
            }
            else if (self.OperaPostErrorDefined)
            {
                BridgeWrapper.Global.Opera.PostError(v);
            }
        }

        public static void Error(string value)
        {
            LogBase(value, MessageType.Error);
        }

        public static void Debug(string value)
        {
            LogBase(value, MessageType.Debug);
        }

        [External]
        [Template("Bridge.Console.log({value})")]
        public static void Log(object value)
        {
            LogBase(value);
        }

        public static void Log(string value)
        {
            LogBase(value);
        }

        public static void Hide()
        {
            var self = Instance;
            self.Hidden = true;

            self.Close();
        }

        public static void Show()
        {
            Instance.Hidden = false;
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
            self.Tooltip.Style.Right = "20px";
            self.Tooltip.Style.Visibility = "visible";
            self.Tooltip.Style.Opacity = "1";
        }

        /// <summary>
        ///  Hide tooltip
        /// </summary>
        public void HideTooltip()
        {
            var self = Instance;
            self.Tooltip.Style.Right = "30px";
            self.Tooltip.Style.Opacity = "0";
        }

        /// <summary>
        /// Close Bridge Console
        /// </summary>
        public void Close()
        {
            ConsoleWrapper.Style.Display = "none";

            if (position == "horizontal")
            {
                UnwrapBodyContent();
            }
            else if (position == "vertical")
            {
                Document.Body.RemoveAttribute("style");
            }
        }

        /// <summary>
        /// Wraps all existing child elements inside body into a div
        /// </summary>
        private void WrapBodyContent()
        {
            // get body margin and padding for proper alignment of scroll if a body margin/padding is used.
            var bodyStyle = Document.DefaultView.GetComputedStyle(Document.Body, null);

            var bodyPaddingTop = bodyStyle.PaddingTop;
            var bodyPaddingRight = bodyStyle.PaddingRight;
            var bodyPaddingBottom = bodyStyle.PaddingBottom;
            var bodyPaddingLeft = bodyStyle.PaddingLeft;

            var bodyMarginTop = bodyStyle.MarginTop;
            var bodyMarginRight = bodyStyle.MarginRight;
            var bodyMarginBottom = bodyStyle.MarginBottom;
            var bodyMarginLeft = bodyStyle.MarginLeft;

            var div = Document.CreateElement("div");
            div.Id = BODY_WRAPPER_ID;
            div.SetAttribute("style",
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

            while (Document.Body.FirstChild != null)
            {
                div.AppendChild(Document.Body.FirstChild);
            }

            Document.Body.AppendChild(div);
        }

        /// <summary>
        /// Unwraps content off the bridge body wrapper div back into the body tag as they used to be
        /// </summary>
        private void UnwrapBodyContent()
        {
            var bridgeBodyWrapper = Document.GetElementById(BODY_WRAPPER_ID);

            while (bridgeBodyWrapper.FirstChild != null)
            {
                Document.Body.InsertBefore(bridgeBodyWrapper.FirstChild, bridgeBodyWrapper);
            }

            Document.Body.RemoveChild(bridgeBodyWrapper);
        }

        /// <summary>
        /// Constructs each message list item
        /// </summary>
        /// <param name="message"></param>
        /// <param name="messageType"></param>
        /// <returns></returns>
        private Element BuildConsoleMessage(string message, MessageType messageType)
        {
            var messageItem = Document.CreateElement("li");
            messageItem.SetAttribute("style", "padding: 5px 10px;border-bottom: 1px solid #f0f0f0;");

            var messageIcon = Document.CreateElementNS(svgNS, "svg");

            var items5 = new Dictionary<string, string>
            {
                { "xmlns", svgNS },
                { "width", "3.9" },
                { "height", "6.7" },
                { "viewBox", "0 0 3.9 6.7" },
                { "style", "margin-right: 7px; vertical-align: middle;" },
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

            var messageIconPath = Document.CreateElementNS(svgNS, "path");

            var items6 = new Dictionary<string, string>();

            items6["d"] = "M3.8 3.5L.7 6.6s-.1.1-.2.1-.1 0-.2-.1l-.2-.3C0 6.2 0 6.2 0 6.1c0 0 0-.1.1-.1l2.6-2.6L.1.7C0 .7 0 .6 0 .6 0 .5 0 .5.1.4L.4.1c0-.1.1-.1.2-.1s.1 0 .2.1l3.1 3.1s.1.1.1.2-.1.1-.2.1z";
            items6["fill"] = color;

            SetAttributes(messageIconPath, items6);

            messageIcon.AppendChild(messageIconPath);

            var messageContainer = Document.CreateElement("span");
            messageContainer.InnerHTML = message;
            messageContainer.Style.Color = color;

            messageItem.AppendChild(messageIcon);
            messageItem.AppendChild(messageContainer);

            return messageItem;
        }

        /// <summary>
        /// Sets multiple attributes
        /// </summary>
        private void SetAttributes(Element el, Dictionary<string, string> attrs)
        {
            foreach (KeyValuePair<string, string> item in attrs)
            {
                el.SetAttribute(item.Key, item.Value);
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