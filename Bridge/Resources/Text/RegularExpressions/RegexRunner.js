    Bridge.define("System.Text.RegularExpressions.RegexRunner", {
        statics: {},

        _runregex: null,
        _netEngine: null,

        _runtext: "", // text to search
        _runtextpos: 0, // current position in text

        _runtextbeg: 0, // beginning of text to search
        _runtextend: 0, // end of text to search
        _runtextstart: 0, // starting point for search
        _quick: false, // true value means IsMatch method call
        _prevlen: 0,

        ctor: function (regex) {
            this.$initialize();

            if (regex == null) {
                throw new System.ArgumentNullException.$ctor1("regex");
            }

            this._runregex = regex;

            var options = regex.getOptions();
            var optionsEnum = System.Text.RegularExpressions.RegexOptions;

            var isCaseInsensitive = (options & optionsEnum.IgnoreCase) === optionsEnum.IgnoreCase;
            var isMultiline = (options & optionsEnum.Multiline) === optionsEnum.Multiline;
            var isSingleline = (options & optionsEnum.Singleline) === optionsEnum.Singleline;
            var isIgnoreWhitespace = (options & optionsEnum.IgnorePatternWhitespace) === optionsEnum.IgnorePatternWhitespace;
            var isExplicitCapture = (options & optionsEnum.ExplicitCapture) === optionsEnum.ExplicitCapture;

            var timeoutMs = regex._matchTimeout.getTotalMilliseconds();

            this._netEngine = new System.Text.RegularExpressions.RegexEngine(regex._pattern, isCaseInsensitive, isMultiline, isSingleline, isIgnoreWhitespace, isExplicitCapture, timeoutMs);
        },

        run: function (quick, prevlen, input, beginning, length, startat) {
            if (startat < 0 || startat > input.Length) {
                throw new System.ArgumentOutOfRangeException.$ctor4("start", "Start index cannot be less than 0 or greater than input length.");
            }

            if (length < 0 || length > input.Length) {
                throw new ArgumentOutOfRangeException("length", "Length cannot be less than 0 or exceed input length.");
            }

            this._runtext = input;
            this._runtextbeg = beginning;
            this._runtextend = beginning + length;
            this._runtextstart = startat;
            this._quick = quick;
            this._prevlen = prevlen;

            var stoppos;
            var bump;

            if (this._runregex.getRightToLeft()) {
                stoppos = this._runtextbeg;
                bump = -1;
            } else {
                stoppos = this._runtextend;
                bump = 1;
            }

            if (this._prevlen === 0) {
                if (this._runtextstart === stoppos) {
                    return System.Text.RegularExpressions.Match.getEmpty();
                }

                this._runtextstart += bump;
            }

            // Execute Regex:
            var jsMatch = this._netEngine.match(this._runtext, this._runtextstart);

            // Convert the results:
            var result = this._convertNetEngineResults(jsMatch);
            return result;
        },

        parsePattern: function () {
            var result = this._netEngine.parsePattern();

            return result;
        },

        _convertNetEngineResults: function (jsMatch) {
            if (jsMatch.success && this._quick) {
                return null; // in quick mode, a successful match returns null
            }

            if (!jsMatch.success) {
                return System.Text.RegularExpressions.Match.getEmpty();
            }

            var patternInfo = this.parsePattern();
            var match;

            if (patternInfo.sparseSettings.isSparse) {
                match = new System.Text.RegularExpressions.MatchSparse(this._runregex, patternInfo.sparseSettings.sparseSlotMap, jsMatch.groups.length, this._runtext, 0, this._runtext.length, this._runtextstart);
            } else {
                match = new System.Text.RegularExpressions.Match(this._runregex, jsMatch.groups.length, this._runtext, 0, this._runtext.length, this._runtextstart);
            }

            var jsGroup;
            var jsCapture;
            var grOrder;
            var i;
            var j;

            for (i = 0; i < jsMatch.groups.length; i++) {
                jsGroup = jsMatch.groups[i];

                // Paste group index/length according to group ordering:
                grOrder = 0;

                if (jsGroup.descriptor != null) {
                    grOrder = this._runregex.groupNumberFromName(jsGroup.descriptor.name);
                }

                for (j = 0; j < jsGroup.captures.length; j++) {
                    jsCapture = jsGroup.captures[j];
                    match._addMatch(grOrder, jsCapture.capIndex, jsCapture.capLength);
                }
            }

            var textEndPos = jsMatch.capIndex + jsMatch.capLength;

            match._tidy(textEndPos);

            return match;
        }
    });
