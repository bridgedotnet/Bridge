    Bridge.define('Bridge.Console', {
        statics: {
            position: "horizontal",
            instance: null,
            config: {
                init: function () {
                    this.instance = new Bridge.Console();
                }
            },
            getInstance: function () {
                return Bridge.Console.instance;
            },
            logBase: function (value, messageType) {
                if (messageType === void 0) { messageType = "info"; }
                var self = Bridge.Console.getInstance();

                if (self.hidden) {
                    Bridge.Console.show();
                }

                var el = self.document.getElementById("bridge-console-messages");

                el.appendChild(self.getConsoleMessage(value.toString(), messageType));

                if (Bridge.isDefined("console")) {
                    console.log(value);
                }
            },
            error: function (value) {
                Bridge.Console.logBase(value, "error");
            },
            log: function (value) {
                Bridge.Console.logBase(value);
            },
            writeLine: function (value) {
                Bridge.Console.logBase(value);
            },
            hide: function () {
                var self = Bridge.Console.getInstance();
                self.hidden = true;

                self.consoleWrapper.style.display = "none";

                if (Bridge.referenceEquals(Bridge.Console.position, "horizontal")) {
                    self.unwrapBodyContent();
                } else if (Bridge.referenceEquals(Bridge.Console.position, "vertical")) {
                    self.body.removeAttribute("style");
                }
            },
            show: function () {
                Bridge.Console.getInstance().hidden = false;
            },
            toggle: function () {
                if (Bridge.Console.getInstance().hidden) {
                    Bridge.Console.show();
                } else {
                    Bridge.Console.hide();
                }
            }
        },
        window: null,
        document: null,
        body: null,
        svgNS: "http://www.w3.org/2000/svg",
        consoleHeight: "300px",
        consolePaddingTop: "38px",
        tooltip: null,
        consoleWrapper: null,
        hidden: true,
        config: {
            init: function () {
                this.window = window;
                this.document = document;
                this.body = document.body;
            }
        },
        constructor: function () {
            this.$initialize();
            this.init();
        },
        init: function () {
            var consoleWrapperStyles = $_.Bridge.Console.f1(new (System.Collections.Generic.Dictionary$2(String,String))());

            var consoleHeaderStyles = $_.Bridge.Console.f2(new (System.Collections.Generic.Dictionary$2(String,String))());

            var consoleBodyStyles = $_.Bridge.Console.f3(new (System.Collections.Generic.Dictionary$2(String,String))());

            // Bridge Icon
            var bridgeIcon = this.document.createElementNS(this.svgNS, "svg");

            var items = Bridge.fn.bind(this, $_.Bridge.Console.f4)(new (System.Collections.Generic.Dictionary$2(String,String))());

            this.setAttributes(bridgeIcon, items);

            var bridgeIconPath = this.document.createElementNS(this.svgNS, "path");

            var items2 = new (System.Collections.Generic.Dictionary$2(String,String))();
            items2.set("d", "M19 14.4h2.2V9.6L19 7.1v7.3zm4.3-2.5v2.5h2.2l-2.2-2.5zm-8.5 2.5H17V4.8l-2.2-2.5v12.1zM0 14.4h3l7.5-8.5v8.5h2.2V0L0 14.4z");
            items2.set("fill", "#555");

            this.setAttributes(bridgeIconPath, items2);

            bridgeIcon.appendChild(bridgeIconPath);

            // Bridge Console Label
            var bridgeConsoleLabel = this.document.createElement("span");
            bridgeConsoleLabel.innerHTML = "Bridge Console";

            // Close Button
            var closeBtn = this.document.createElement("span");
            closeBtn.setAttribute("style", "position: relative;display: inline-block;float: right;cursor: pointer");

            var closeIcon = this.document.createElementNS(this.svgNS, "svg");

            var items3 = Bridge.fn.bind(this, $_.Bridge.Console.f5)(new (System.Collections.Generic.Dictionary$2(String,String))());

            this.setAttributes(closeIcon, items3);

            var closeIconPath = this.document.createElementNS(this.svgNS, "path");

            var items4 = $_.Bridge.Console.f6(new (System.Collections.Generic.Dictionary$2(String,String))());

            this.setAttributes(closeIconPath, items4);

            this.tooltip = this.document.createElement("div");
            this.tooltip.innerHTML = "Refresh page to open Bridge Console";

            this.tooltip.setAttribute("style", "position: absolute;right: 30px;top: -6px;width: 225px;padding: 7px;border-radius: 3px;background-color: rgba(0, 0, 0, 0.75);color: #eee;text-align: center;visibility: hidden;opacity: 0;-webkit-transition: all 0.25s ease-in-out;transition: all 0.25s ease-in-out;z-index: 1;");

            closeIcon.appendChild(closeIconPath);
            closeBtn.appendChild(closeIcon);
            closeBtn.appendChild(this.tooltip);

            // Styles and other stuff based on position
            Bridge.Console.position = ["horizontal", "vertical"].indexOf(this.getConsolePosition()) > -1 ? this.getConsolePosition() : "horizontal";

            if (Bridge.referenceEquals(Bridge.Console.position, "horizontal")) {
                this.wrapBodyContent();

                consoleWrapperStyles.set("right", "0");
                consoleHeaderStyles.set("border-top", "1px solid #a3a3a3");
                consoleBodyStyles.set("height", this.consoleHeight);
            } else if (Bridge.referenceEquals(Bridge.Console.position, "vertical")) {
                var consoleWidth = "400px";
                this.body.style.MarginLeft = consoleWidth;

                consoleWrapperStyles.set("top", "0");
                consoleWrapperStyles.set("width", consoleWidth);
                consoleWrapperStyles.set("border-right", "1px solid #a3a3a3");
                consoleBodyStyles.set("height", "100%");
            }

            // Console wrapper
            this.consoleWrapper = this.document.createElement("div");
            this.consoleWrapper.setAttribute("style", this.obj2Css(consoleWrapperStyles));

            // Console Header
            var consoleHeader = this.document.createElement("div");
            consoleHeader.setAttribute("style", this.obj2Css(consoleHeaderStyles));

            // Add child elements into console header
            consoleHeader.appendChild(bridgeIcon);
            consoleHeader.appendChild(bridgeConsoleLabel);
            consoleHeader.appendChild(closeBtn);

            // Console Body Wrapper
            var consoleBody = this.document.createElement("div");
            consoleBody.setAttribute("style", this.obj2Css(consoleBodyStyles));

            // Console Messages Unordered List Element
            var consoleMessages = this.document.createElement("ul");
            consoleMessages.id = "bridge-console-messages";

            consoleMessages.setAttribute("style", "margin: 0;padding: 0;list-style: none;");

            // Add messages to console body
            consoleBody.appendChild(consoleMessages);

            // Add console header and console body into console wrapper
            this.consoleWrapper.appendChild(consoleHeader);
            this.consoleWrapper.appendChild(consoleBody);

            // Finally add console to body
            this.body.appendChild(this.consoleWrapper);

            // Close console
            closeBtn.addEventListener("click", this.close);

            // Show/hide Tooltip
            closeBtn.addEventListener("mouseover", this.showTooltip);
            closeBtn.addEventListener("mouseout", this.hideTooltip);
        },
        showTooltip: function () {
            var self = Bridge.Console.getInstance();
            self.tooltip.style.right = "20px";
            self.tooltip.style.visibility = "visible";
            self.tooltip.style.opacity = "1";
        },
        hideTooltip: function () {
            var self = Bridge.Console.getInstance();
            self.tooltip.style.right = "30px";
            self.tooltip.style.opacity = "0";
        },
        close: function () {
            var self = Bridge.Console.getInstance();
            self.consoleWrapper.style.display = "none";

            if (Bridge.referenceEquals(Bridge.Console.position, "horizontal")) {
                self.unwrapBodyContent();
            } else if (Bridge.referenceEquals(Bridge.Console.position, "vertical")) {
                this.body.removeAttribute("style");
            }
        },
        wrapBodyContent: function () {
            // get body margin and padding and we'll deduct them from main div height
            // TODO: .CurrentStyle only supported in IE6?
            var bodyStyle = this.body.currentStyle || this.window.getComputedStyle(this.body);
            var bodyPaddingTop = bodyStyle.paddingTop;
            var bodyPaddingBottom = bodyStyle.paddingBottom;
            var bodyMarginTop = bodyStyle.marginTop;
            var bodyMarginBottom = bodyStyle.marginBottom;

            var div = this.document.createElement("div");
            div.id = "bridge-body-wrapper";

            div.setAttribute("style", System.String.concat(System.String.concat(System.String.concat(System.String.concat("height: calc(100vh - ", this.consoleHeight), " - "), this.consolePaddingTop), " - ") + bodyPaddingTop + " - " + bodyPaddingBottom + " - " + bodyMarginTop + " - " + bodyMarginBottom + ");" + "overflow-x: auto");

            while (this.body.firstChild != null) {
                div.appendChild(this.body.firstChild);
            }

            this.body.appendChild(div);
        },
        unwrapBodyContent: function () {
            var bridgeBodyWrapper = this.document.getElementById("bridge-body-wrapper");

            while (bridgeBodyWrapper.firstChild != null) {
                this.body.insertBefore(bridgeBodyWrapper.firstChild, bridgeBodyWrapper);
            }

            this.body.removeChild(bridgeBodyWrapper);
        },
        getConsoleMessage: function (message, messageType) {
            var messageItem = this.document.createElement("li");
            messageItem.setAttribute("style", "padding: 5px 10px;border-bottom: 1px solid #f0f0f0;");

            var messageIcon = this.document.createElementNS(this.svgNS, "svg");

            var items5 = Bridge.fn.bind(this, $_.Bridge.Console.f7)(new (System.Collections.Generic.Dictionary$2(String,String))());

            this.setAttributes(messageIcon, items5);

            var color = "#555";

            if (Bridge.referenceEquals(messageType, "error")) {
                color = "#d65050";
            }

            var messageIconPath = this.document.createElementNS(this.svgNS, "path");

            var items6 = new (System.Collections.Generic.Dictionary$2(String,String))();

            items6.set("d", "M3.8 3.5L.7 6.6s-.1.1-.2.1-.1 0-.2-.1l-.2-.3C0 6.2 0 6.2 0 6.1c0 0 0-.1.1-.1l2.6-2.6L.1.7C0 .7 0 .6 0 .6 0 .5 0 .5.1.4L.4.1c0-.1.1-.1.2-.1s.1 0 .2.1l3.1 3.1s.1.1.1.2-.1.1-.2.1z");
            items6.set("fill", color);

            this.setAttributes(messageIconPath, items6);

            messageIcon.appendChild(messageIconPath);

            var messageContainer = this.document.createElement("span");
            messageContainer.innerHTML = message;

            messageContainer.style.color = color;

            messageItem.appendChild(messageIcon);
            messageItem.appendChild(messageContainer);

            return messageItem;
        },
        getConsolePosition: function () {
            // logic to get console position from bridge.json
            return "horizontal";
        },
        setAttributes: function (el, attrs) {
            var $t;
            $t = Bridge.getEnumerator(attrs);
            while ($t.moveNext()) {
                var item = Bridge.cast($t.getCurrent(), System.Collections.Generic.KeyValuePair$2(String,String));
                el.setAttribute(item.key, item.value);
            }
        },
        obj2Css: function (obj) {
            var $t;
            var str = "";

            $t = Bridge.getEnumerator(obj);
            while ($t.moveNext()) {
                var item = Bridge.cast($t.getCurrent(), System.Collections.Generic.KeyValuePair$2(String,String));
                str = System.String.concat(str, (System.String.concat(System.String.concat(System.String.concat(item.key.toLowerCase(), ":"), item.value), ";")));
            }

            return str;
        }
    });

    var $_ = {};

    Bridge.ns("Bridge.Console", $_);

    Bridge.apply($_.Bridge.Console, {
        f1: function (_o1) {
            _o1.add("position", "fixed");
            _o1.add("left", "0");
            _o1.add("bottom", "0");
            _o1.add("padding-top", "38px");
            _o1.add("background-color", "#fff");
            _o1.add("font", "normal normal normal 13px/1 sans-serif");
            _o1.add("color", "#555");
            return _o1;
        },
        f2: function (_o2) {
            _o2.add("position", "absolute");
            _o2.add("top", "0");
            _o2.add("left", "0");
            _o2.add("right", "0");
            _o2.add("height", "35px");
            _o2.add("padding", "9px 15px 7px 10px");
            _o2.add("border-bottom", "1px solid #ccc");
            _o2.add("background-color", "#f3f3f3");
            _o2.add("box-sizing", "border-box");
            return _o2;
        },
        f3: function (_o3) {
            _o3.add("overflow-x", "auto");
            _o3.add("font-family", "Menlo, Monaco, Consolas, 'Courier New', monospace");
            return _o3;
        },
        f4: function (_o4) {
            _o4.add("xmlns", this.svgNS);
            _o4.add("width", "25.5");
            _o4.add("height", "14.4");
            _o4.add("viewBox", "0 0 25.5 14.4");
            _o4.add("style", "margin: 0 3px 3px 0;vertical-align:middle;");
            return _o4;
        },
        f5: function (_o5) {
            _o5.add("xmlns", this.svgNS);
            _o5.add("width", "11.4");
            _o5.add("height", "11.4");
            _o5.add("viewBox", "0 0 11.4 11.4");
            _o5.add("style", "vertical-align: middle;");
            return _o5;
        },
        f6: function (_o6) {
            _o6.add("d", "M11.4 1.4L10 0 5.7 4.3 1.4 0 0 1.4l4.3 4.3L0 10l1.4 1.4 4.3-4.3 4.3 4.3 1.4-1.4-4.3-4.3");
            _o6.add("fill", "#555");
            return _o6;
        },
        f7: function (_o7) {
            _o7.add("xmlns", this.svgNS);
            _o7.add("width", "3.9");
            _o7.add("height", "6.7");
            _o7.add("viewBox", "0 0 3.9 6.7");
            _o7.add("style", "margin-right: 7px; vertical-align: middle;");
            return _o7;
        }
    });
