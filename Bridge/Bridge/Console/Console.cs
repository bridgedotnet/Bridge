using System.Collections.Generic;

namespace Bridge.Utils
{
    /// <summary>
    ///
    /// </summary>
    [Namespace("Bridge")]
    public class Console
    {
        // Unfortunately we have to use dynamic types
        // because Bridge.Html5 Assembly is not available here.
        private dynamic window = Script.Get<dynamic>("window");

        private dynamic document = Script.Get<dynamic>("document");
        private dynamic body = Script.Get<dynamic>("document").body;

        private string svgNS = "http://www.w3.org/2000/svg";

        // for horizontal position
        private string consoleHeight = "300px";

        // this is for fixed console header which is 35px actual height + 3px bottom margin.
        private string consolePaddingTop = "38px";

        private dynamic tooltip;
        private dynamic consoleWrapper;

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
                { "padding-top" , "38px" },
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
            var bridgeIcon = document.createElementNS(svgNS, "svg");

            var items = new Dictionary<string, string> {
                { "xmlns", svgNS },
                { "width", "25.5" },
                { "height", "14.4" },
                { "viewBox", "0 0 25.5 14.4" },
                { "style", "margin: 0 3px 3px 0;vertical-align:middle;" },
            };

            SetAttributes(bridgeIcon, items);

            var bridgeIconPath = document.createElementNS(svgNS, "path");

            var items2 = new Dictionary<string, string>();
            items2["d"] = "M19 14.4h2.2V9.6L19 7.1v7.3zm4.3-2.5v2.5h2.2l-2.2-2.5zm-8.5 2.5H17V4.8l-2.2-2.5v12.1zM0 14.4h3l7.5-8.5v8.5h2.2V0L0 14.4z";
            items2["fill"] = "#555";

            SetAttributes(bridgeIconPath, items2);

            bridgeIcon.appendChild(bridgeIconPath);

            // Bridge Console Label
            var bridgeConsoleLabel = document.createElement("span");
            bridgeConsoleLabel.innerHTML = "Bridge Console";

            // Close Button
            var closeBtn = document.createElement("span");
            closeBtn.setAttribute("style", "position: relative;display: inline-block;float: right;cursor: pointer");

            var closeIcon = document.createElementNS(svgNS, "svg");

            var items3 = new Dictionary<string, string>
            {
                { "xmlns", svgNS },
                { "width", "11.4" },
                { "height", "11.4" },
                { "viewBox", "0 0 11.4 11.4" },
                { "style", "vertical-align: middle;" },
            };

            SetAttributes(closeIcon, items3);

            var closeIconPath = document.createElementNS(svgNS, "path");

            var items4 = new Dictionary<string, string>
            {
                {  "d", "M11.4 1.4L10 0 5.7 4.3 1.4 0 0 1.4l4.3 4.3L0 10l1.4 1.4 4.3-4.3 4.3 4.3 1.4-1.4-4.3-4.3" },
                { "fill", "#555" }
            };

            SetAttributes(closeIconPath, items4);

            tooltip = document.createElement("div");
            tooltip.innerHTML = "Refresh page to open Bridge Console";

            tooltip.setAttribute("style", "position: absolute;right: 30px;top: -6px;width: 225px;padding: 7px;border-radius: 3px;background-color: rgba(0, 0, 0, 0.75);color: #eee;text-align: center;visibility: hidden;opacity: 0;-webkit-transition: all 0.25s ease-in-out;transition: all 0.25s ease-in-out;z-index: 1;");

            closeIcon.appendChild(closeIconPath);
            closeBtn.appendChild(closeIcon);
            closeBtn.appendChild(tooltip);

            // Styles and other stuff based on position
            position = new string[] { "horizontal", "vertical" }.IndexOf(GetConsolePosition()) > -1 ? GetConsolePosition() : "horizontal";

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
                body.style.MarginLeft = consoleWidth;

                consoleWrapperStyles["top"] = "0";
                consoleWrapperStyles["width"] = consoleWidth;
                consoleWrapperStyles["border-right"] = "1px solid #a3a3a3";
                consoleBodyStyles["height"] = "100%";
            }

            // Console wrapper
            consoleWrapper = document.createElement("div");
            consoleWrapper.setAttribute("style", Obj2Css(consoleWrapperStyles));

            // Console Header
            var consoleHeader = document.createElement("div");
            consoleHeader.setAttribute("style", Obj2Css(consoleHeaderStyles));

            // Add child elements into console header
            consoleHeader.appendChild(bridgeIcon);
            consoleHeader.appendChild(bridgeConsoleLabel);
            consoleHeader.appendChild(closeBtn);

            // Console Body Wrapper
            var consoleBody = document.createElement("div");
            consoleBody.setAttribute("style", Obj2Css(consoleBodyStyles));

            // Console Messages Unordered List Element
            var consoleMessages = document.createElement("ul");
            consoleMessages.id = "bridge-console-messages";

            consoleMessages.setAttribute("style", "margin: 0;padding: 0;list-style: none;");

            // Add messages to console body
            consoleBody.appendChild(consoleMessages);

            // Add console header and console body into console wrapper
            consoleWrapper.appendChild(consoleHeader);
            consoleWrapper.appendChild(consoleBody);

            // Finally add console to body
            body.appendChild(consoleWrapper);

            // Close console
            closeBtn.addEventListener("click", Script.Write<string>("this.close"));

            // Show/hide Tooltip
            closeBtn.addEventListener("mouseover", Script.Write<string>("this.showTooltip"));
            closeBtn.addEventListener("mouseout", Script.Write<string>("this.hideTooltip"));
        }

        private static void LogBase(object value, string messageType = "info")
        {
            var self = Instance;

            if (self.Hidden)
            {
                Show();
            }

            var el = self.document.getElementById("bridge-console-messages");

            el.appendChild(self.GetConsoleMessage(value.ToString(), messageType));

            if (Script.IsDefined("console"))
            {
                Script.Write("console.log(value);");
            }
        }

        public static void Error(string value)
        {
            LogBase(value, "error");
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

        public static void WriteLine(string value)
        {
            LogBase(value);
        }

        [External]
        [Template("Bridge.Console.log({value})")]
        public static void WriteLine(object value)
        {
            LogBase(value);
        }

        public bool Hidden = true;

        public static void Hide()
        {
            var self = Instance;
            self.Hidden = true;

            self.consoleWrapper.style.display = "none";

            if (position == "horizontal")
            {
                self.UnwrapBodyContent();
            }
            else if (position == "vertical")
            {
                self.body.removeAttribute("style");
            }
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
            self.tooltip.style.right = "20px";
            self.tooltip.style.visibility = "visible";
            self.tooltip.style.opacity = "1";
        }

        /// <summary>
        ///  Hide tooltip
        /// </summary>
        public void HideTooltip()
        {
            var self = Instance;
            self.tooltip.style.right = "30px";
            self.tooltip.style.opacity = "0";
        }

        /// <summary>
        /// Close Bridge Console
        /// </summary>
        public void Close()
        {
            var self = Instance;
            self.consoleWrapper.style.display = "none";

            if (position == "horizontal")
            {
                self.UnwrapBodyContent();
            }
            else if (position == "vertical")
            {
                body.removeAttribute("style");
            }
        }

        /// <summary>
        /// Wraps all existing child elements inside body into a div
        /// </summary>
        private void WrapBodyContent()
        {
            // get body margin and padding and we'll deduct them from main div height
            // TODO: .CurrentStyle only supported in IE6?
            var bodyStyle = body.currentStyle || window.getComputedStyle(body);
            var bodyPaddingTop = bodyStyle.paddingTop;
            var bodyPaddingBottom = bodyStyle.paddingBottom;
            var bodyMarginTop = bodyStyle.marginTop;
            var bodyMarginBottom = bodyStyle.marginBottom;

            var div = document.createElement("div");
            div.id = "bridge-body-wrapper";

            div.setAttribute("style", "height: calc(100vh - " + consoleHeight + " - " + consolePaddingTop + " - " + bodyPaddingTop + " - " + bodyPaddingBottom + " - " + bodyMarginTop + " - " + bodyMarginBottom + ");" + "overflow-x: auto");

            while (body.firstChild != null)
            {
                div.appendChild(body.firstChild);
            }

            body.appendChild(div);
        }

        /// <summary>
        /// Unwraps content off the bridge body wrapper div back into the body tag as they used to be
        /// </summary>
        private void UnwrapBodyContent()
        {
            var bridgeBodyWrapper = document.getElementById("bridge-body-wrapper");

            while (bridgeBodyWrapper.firstChild != null)
            {
                body.insertBefore(bridgeBodyWrapper.firstChild, bridgeBodyWrapper);
            }

            body.removeChild(bridgeBodyWrapper);
        }

        /// <summary>
        /// Constructs each message list item
        /// </summary>
        /// <param name="message"></param>
        /// <param name="messageType"></param>
        /// <returns></returns>
        private dynamic GetConsoleMessage(string message, string messageType)
        {
            var messageItem = document.createElement("li");
            messageItem.setAttribute("style", "padding: 5px 10px;border-bottom: 1px solid #f0f0f0;");

            var messageIcon = document.createElementNS(svgNS, "svg");

            var items5 = new Dictionary<string, string>
            {
                { "xmlns", svgNS },
                { "width", "3.9" },
                { "height", "6.7" },
                { "viewBox", "0 0 3.9 6.7" },
                { "style", "margin-right: 7px; vertical-align: middle;" },
            };

            SetAttributes(messageIcon, items5);

            var color = "#555";

            if (messageType == "error")
            {
                color = "#d65050";
            }

            var messageIconPath = document.createElementNS(svgNS, "path");

            var items6 = new Dictionary<string, string>();

            items6["d"] = "M3.8 3.5L.7 6.6s-.1.1-.2.1-.1 0-.2-.1l-.2-.3C0 6.2 0 6.2 0 6.1c0 0 0-.1.1-.1l2.6-2.6L.1.7C0 .7 0 .6 0 .6 0 .5 0 .5.1.4L.4.1c0-.1.1-.1.2-.1s.1 0 .2.1l3.1 3.1s.1.1.1.2-.1.1-.2.1z";
            items6["fill"] = color;

            SetAttributes(messageIconPath, items6);

            messageIcon.appendChild(messageIconPath);

            var messageContainer = document.createElement("span");
            messageContainer.innerHTML = message;

            messageContainer.style.color = color;

            messageItem.appendChild(messageIcon);
            messageItem.appendChild(messageContainer);

            return messageItem;
        }

        /// <summary>
        /// Returns console position set in bridge.json
        /// </summary>
        /// <returns></returns>
        private string GetConsolePosition()
        {
            // logic to get console position from bridge.json
            return "horizontal";
        }

        /// <summary>
        /// Sets multiple attributes
        /// </summary>
        private void SetAttributes(dynamic el, Dictionary<string, string> attrs)
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