    Bridge.define("System.Text.RegularExpressions.Regex", {
        statics: {
            _cacheSize: 15,
            _defaultMatchTimeout: System.TimeSpan.fromMilliseconds(-1),

            getCacheSize: function () {
                return System.Text.RegularExpressions.Regex._cacheSize;
            },

            setCacheSize: function (value) {
                if (value < 0) {
                    throw new System.ArgumentOutOfRangeException("value");
                }

                System.Text.RegularExpressions.Regex._cacheSize = value;
                //TODO: remove extra items from cache
            },

            escape: function (str) {
                if (str == null) {
                    throw new System.ArgumentNullException("str");
                }

                return System.Text.RegularExpressions.RegexParser.escape(str);
            },

            unescape: function (str) {
                if (str == null) {
                    throw new System.ArgumentNullException("str");
                }

                return System.Text.RegularExpressions.RegexParser.unescape(str);
            },

            isMatch: function (input, pattern, options, matchTimeout) {
                var scope = System.Text.RegularExpressions;

                if (!Bridge.isDefined(options)) {
                    options = scope.RegexOptions.None;
                }

                if (!Bridge.isDefined(matchTimeout)) {
                    matchTimeout = scope.Regex._defaultMatchTimeout;
                }

                var regex = new System.Text.RegularExpressions.Regex.ctor(pattern, options, matchTimeout, true);
                return regex.isMatch(input);
            },

            match: function (input, pattern, options, matchTimeout) {
                var scope = System.Text.RegularExpressions;

                if (!Bridge.isDefined(options)) {
                    options = scope.RegexOptions.None;
                }

                if (!Bridge.isDefined(matchTimeout)) {
                    matchTimeout = scope.Regex._defaultMatchTimeout;
                }

                var regex = new System.Text.RegularExpressions.Regex.ctor(pattern, options, matchTimeout, true);
                return regex.match(input);
            },

            matches: function (input, pattern, options, matchTimeout) {
                var scope = System.Text.RegularExpressions;

                if (!Bridge.isDefined(options)) {
                    options = scope.RegexOptions.None;
                }

                if (!Bridge.isDefined(matchTimeout)) {
                    matchTimeout = scope.Regex._defaultMatchTimeout;
                }

                var regex = new System.Text.RegularExpressions.Regex.ctor(pattern, options, matchTimeout, true);
                return regex.matches(input);
            },

            replace: function (input, pattern, replacement, options, matchTimeout) {
                var scope = System.Text.RegularExpressions;

                if (!Bridge.isDefined(options)) {
                    options = scope.RegexOptions.None;
                }

                if (!Bridge.isDefined(matchTimeout)) {
                    matchTimeout = scope.Regex._defaultMatchTimeout;
                }

                var regex = new System.Text.RegularExpressions.Regex.ctor(pattern, options, matchTimeout, true);
                return regex.replace(input, replacement);
            },

            split: function (input, pattern, options, matchTimeout) {
                var scope = System.Text.RegularExpressions;

                if (!Bridge.isDefined(options)) {
                    options = scope.RegexOptions.None;
                }

                if (!Bridge.isDefined(matchTimeout)) {
                    matchTimeout = scope.Regex._defaultMatchTimeout;
                }

                var regex = new System.Text.RegularExpressions.Regex.ctor(pattern, options, matchTimeout, true);
                return regex.split(input);
            }
        },

        _pattern: "",
        _matchTimeout: System.TimeSpan.fromMilliseconds(-1),
        _runner: null,
        _caps: null,
        _capsize: 0,
        _capnames: null,
        _capslist: null,

        config: {
            init: function () {
                this._options = System.Text.RegularExpressions.RegexOptions.None;
            }
        },

        ctor: function (pattern, options, matchTimeout, useCache) {
            this.$initialize();
            if (!Bridge.isDefined(options)) {
                options = System.Text.RegularExpressions.RegexOptions.None;
            }

            if (!Bridge.isDefined(matchTimeout)) {
                matchTimeout = System.TimeSpan.fromMilliseconds(-1);
            }

            if (!Bridge.isDefined(useCache)) {
                useCache = false;
            }
            
            var scope = System.Text.RegularExpressions;

            if (pattern == null) {
                throw new System.ArgumentNullException("pattern");
            }

            if (options < scope.RegexOptions.None || ((options >> 10) !== 0)) {
                throw new System.ArgumentOutOfRangeException("options");
            }

            if (((options & scope.RegexOptions.ECMAScript) !== 0) &&
                ((options & ~(scope.RegexOptions.ECMAScript |
                    scope.RegexOptions.IgnoreCase |
                    scope.RegexOptions.Multiline |
                    scope.RegexOptions.CultureInvariant
                )) !== 0)) {
                throw new System.ArgumentOutOfRangeException("options");
            }

            // Check if the specified options are supported.
            var supportedOptions =
                System.Text.RegularExpressions.RegexOptions.IgnoreCase |
                System.Text.RegularExpressions.RegexOptions.Multiline |
                System.Text.RegularExpressions.RegexOptions.Singleline |
                System.Text.RegularExpressions.RegexOptions.IgnorePatternWhitespace |
                System.Text.RegularExpressions.RegexOptions.ExplicitCapture;

            if ((options | supportedOptions) !== supportedOptions) {
                throw new System.NotSupportedException("Specified Regex options are not supported.");
            }

            this._validateMatchTimeout(matchTimeout);

            this._pattern = pattern;
            this._options = options;
            this._matchTimeout = matchTimeout;
            this._runner = new scope.RegexRunner(this);

            //TODO: cache
            var patternInfo = this._runner.parsePattern();

            this._capnames = patternInfo.sparseSettings.sparseSlotNameMap;
            this._capslist = patternInfo.sparseSettings.sparseSlotNameMap.keys;
            this._capsize = this._capslist.length;
        },

        getMatchTimeout: function () {
            return this._matchTimeout;
        },

        getOptions: function () {
            return this._options;
        },

        getRightToLeft: function () {
            return (this._options & System.Text.RegularExpressions.RegexOptions.RightToLeft) !== 0;
        },

        isMatch: function (input, startat) {
            if (input == null) {
                throw new System.ArgumentNullException("input");
            }

            if (!Bridge.isDefined(startat)) {
                startat = this.getRightToLeft() ? input.length : 0;
            }

            var match = this._runner.run(true, -1, input, 0, input.length, startat);

            return match == null;
        },

        match: function (input, startat, arg3) {
            if (input == null) {
                throw new System.ArgumentNullException("input");
            }

            var length = input.length,
                beginning = 0;

            if (arguments.length === 3) {
                beginning = startat;
                length = arg3;
                startat = this.getRightToLeft() ? beginning + length : beginning;
            } else if (!Bridge.isDefined(startat)) {
                startat = this.getRightToLeft() ? length : 0;
            }

            return this._runner.run(false, -1, input, beginning, length, startat);
        },

        matches: function (input, startat) {
            if (input == null) {
                throw new System.ArgumentNullException("input");
            }

            if (!Bridge.isDefined(startat)) {
                startat = this.getRightToLeft() ? input.length : 0;
            }

            return new System.Text.RegularExpressions.MatchCollection(this, input, 0, input.length, startat);
        },

        getGroupNames: function () {
            if (this._capslist == null) {
                var invariantCulture = System.Globalization.CultureInfo.invariantCulture;

                var result = [];
                var max = this._capsize;
                var i;

                for (i = 0; i < max; i++) {
                    result[i] = System.Convert.toString(i, invariantCulture, System.Convert.typeCodes.Int32);
                }

                return result;
            } else {
                return this._capslist.slice();
            }
        },

        getGroupNumbers: function () {
            var caps = this._caps;
            var result;
            var key;
            var max;
            var i;

            if (caps == null) {
                result = [];
                max = this._capsize;
                for (i = 0; i < max; i++) {
                    result.push(i);
                }
            } else {
                result = [];
                for (key in caps) {
                    if (caps.hasOwnProperty(key)) {
                        result[caps[key]] = key;
                    }
                }
            }

            return result;
        },

        groupNameFromNumber: function (i) {
            if (this._capslist == null) {
                if (i >= 0 && i < this._capsize) {
                    var invariantCulture = System.Globalization.CultureInfo.invariantCulture;

                    return System.Convert.toString(i, invariantCulture, System.Convert.typeCodes.Int32);
                }

                return "";
            } else {
                if (this._caps != null) {
                    var obj = this._caps[i];

                    if (obj == null) {
                        return "";
                    }

                    return parseInt(obj);
                }

                if (i >= 0 && i < this._capslist.length) {
                    return this._capslist[i];
                }

                return "";
            }
        },

        groupNumberFromName: function (name) {
            if (name == null) {
                throw new System.ArgumentNullException("name");
            }

            // look up name if we have a hashtable of names
            if (this._capnames != null) {
                var ret = this._capnames[name];

                if (ret == null) {
                    return -1;
                }

                return parseInt(ret);
            }

            // convert to an int if it looks like a number
            var result = 0;
            var ch;
            var i;

            for (i = 0; i < name.Length; i++) {
                ch = name[i];

                if (ch > "9" || ch < "0") {
                    return -1;
                }

                result *= 10;
                result += (ch - "0");
            }

            // return int if it's in range
            if (result >= 0 && result < this._capsize) {
                return result;
            }

            return -1;
        },

        replace: function (input, evaluator, count, startat) {
            if (input == null) {
                throw new System.ArgumentNullException("input");
            }

            if (!Bridge.isDefined(count)) {
                count = -1;
            }

            if (!Bridge.isDefined(startat)) {
                startat = this.getRightToLeft() ? input.length : 0;
            }

            if (evaluator == null) {
                throw new System.ArgumentNullException("evaluator");
            }

            if (Bridge.isFunction(evaluator)) {
                return System.Text.RegularExpressions.RegexReplacement.replace(evaluator, this, input, count, startat);
            }

            var repl = System.Text.RegularExpressions.RegexParser.parseReplacement(evaluator, this._caps, this._capsize, this._capnames, this._options);
            //TODO: Cache

            return repl.replace(this, input, count, startat);
        },

        split: function (input, count, startat) {
            if (input == null) {
                throw new System.ArgumentNullException("input");
            }

            if (!Bridge.isDefined(count)) {
                count = 0;
            }

            if (!Bridge.isDefined(startat)) {
                startat = this.getRightToLeft() ? input.length : 0;
            }

            return System.Text.RegularExpressions.RegexReplacement.split(this, input, count, startat);
        },

        _validateMatchTimeout: function (matchTimeout) {
            var ms = matchTimeout.getTotalMilliseconds();

            if (-1 === ms) {
                return;
            }

            if (ms > 0 && ms <= 2147483646) {
                return;
            }

            throw new System.ArgumentOutOfRangeException("matchTimeout");
        }
    });
