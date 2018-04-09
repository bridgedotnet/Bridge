    Bridge.define("System.Text.RegularExpressions.RegexParser", {
        statics: {
            _Q: 5, // quantifier
            _S: 4, // ordinary stopper
            _Z: 3, // ScanBlank stopper
            _X: 2, // whitespace
            _E: 1, // should be escaped

            _category: [
                //0 1 2  3  4  5  6  7  8  9  A  B  C  D  E  F  0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F
                0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                //! " #  $  %  &  '  (  )  *  +  ,  -  .  /  0  1  2  3  4  5  6  7  8  9  :  ;  <  =  >  ?
                2, 0, 0, 3, 4, 0, 0, 0, 4, 4, 5, 5, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
                //@ A B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z  [  \  ]  ^  _
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 4, 0,
                //' a b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z  {  |  }  ~
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 0, 0, 0
            ],

            escape: function (input) {
                var sb;
                var ch;
                var lastpos;
                var i;

                for (i = 0; i < input.length; i++) {
                    if (System.Text.RegularExpressions.RegexParser._isMetachar(input[i])) {
                        sb = "";
                        ch = input[i];

                        sb += input.slice(0, i);

                        do {
                            sb += "\\";

                            switch (ch) {
                                case "\n":
                                    ch = "n";
                                    break;
                                case "\r":
                                    ch = "r";
                                    break;
                                case "\t":
                                    ch = "t";
                                    break;
                                case "\f":
                                    ch = "f";
                                    break;
                            }

                            sb += ch;
                            i++;
                            lastpos = i;

                            while (i < input.length) {
                                ch = input[i];

                                if (System.Text.RegularExpressions.RegexParser._isMetachar(ch)) {
                                    break;
                                }

                                i++;
                            }

                            sb += input.slice(lastpos, i);
                        } while (i < input.length);

                        return sb;
                    }
                }

                return input;
            },

            unescape: function (input) {
                var culture = System.Globalization.CultureInfo.invariantCulture;
                var sb;
                var lastpos;
                var i;
                var p;

                for (i = 0; i < input.length; i++) {
                    if (input[i] === "\\") {
                        sb = "";
                        p = new System.Text.RegularExpressions.RegexParser(culture);
                        p._setPattern(input);

                        sb += input.slice(0, i);

                        do {
                            i++;

                            p._textto(i);

                            if (i < input.length) {
                                sb += p._scanCharEscape();
                            }

                            i = p._textpos();
                            lastpos = i;

                            while (i < input.length && input[i] !== "\\") {
                                i++;
                            }

                            sb += input.slice(lastpos, i);
                        } while (i < input.length);

                        return sb;
                    }
                }

                return input;
            },

            parseReplacement: function (rep, caps, capsize, capnames, op) {
                var culture = System.Globalization.CultureInfo.getCurrentCulture(); // TODO: InvariantCulture
                var p = new System.Text.RegularExpressions.RegexParser(culture);

                p._options = op;
                p._noteCaptures(caps, capsize, capnames);
                p._setPattern(rep);

                var root = p._scanReplacement();

                return new System.Text.RegularExpressions.RegexReplacement(rep, root, caps);
            },

            _isMetachar: function (ch) {
                var code = ch.charCodeAt(0);

                return (code <= "|".charCodeAt(0) && System.Text.RegularExpressions.RegexParser._category[code] >= System.Text.RegularExpressions.RegexParser._E);
            }
        },

        _caps: null,
        _capsize: 0,
        _capnames: null,
        _pattern: "",
        _currentPos: 0,
        _concatenation: null,
        _culture: null,

        config: {
            init: function () {
                this._options = System.Text.RegularExpressions.RegexOptions.None;
            }
        },

        ctor: function (culture) {
            this.$initialize();
            this._culture = culture;
            this._caps = {};
        },

        _noteCaptures: function (caps, capsize, capnames) {
            this._caps = caps;
            this._capsize = capsize;
            this._capnames = capnames;
        },

        _setPattern: function (pattern) {
            if (pattern == null) {
                pattern = "";
            }

            this._pattern = pattern || "";
            this._currentPos = 0;
        },

        _scanReplacement: function () {
            this._concatenation = new System.Text.RegularExpressions.RegexNode(System.Text.RegularExpressions.RegexNode.Concatenate, this._options);
            var c;
            var startpos;
            var dollarNode;

            while (true) {
                c = this._charsRight();

                if (c === 0) {
                    break;
                }

                startpos = this._textpos();

                while (c > 0 && this._rightChar() !== "$") {
                    this._moveRight();
                    c--;
                }

                this._addConcatenate(startpos, this._textpos() - startpos);

                if (c > 0) {
                    if (this._moveRightGetChar() === "$") {
                        dollarNode = this._scanDollar();
                        this._concatenation.addChild(dollarNode);
                    }
                }
            }

            return this._concatenation;
        },

        _addConcatenate: function (pos, cch /*, bool isReplacement*/ ) {
            if (cch === 0) {
                return;
            }

            var node;

            if (cch > 1) {
                var str = this._pattern.slice(pos, pos + cch);

                node = new System.Text.RegularExpressions.RegexNode(System.Text.RegularExpressions.RegexNode.Multi, this._options, str);
            } else {
                var ch = this._pattern[pos];

                node = new System.Text.RegularExpressions.RegexNode(System.Text.RegularExpressions.RegexNode.One, this._options, ch);
            }

            this._concatenation.addChild(node);
        },

        _useOptionE: function () {
            return (this._options & System.Text.RegularExpressions.RegexOptions.ECMAScript) !== 0;
        },

        _makeException: function (message) {
            return new System.ArgumentException("Incorrect pattern. " + message);
        },

        _scanDollar: function () {
            var maxValueDiv10 = 214748364; // Int32.MaxValue / 10;
            var maxValueMod10 = 7; // Int32.MaxValue % 10;

            if (this._charsRight() === 0) {
                return new System.Text.RegularExpressions.RegexNode(System.Text.RegularExpressions.RegexNode.One, this._options, "$");
            }

            var ch = this._rightChar();
            var angled;
            var backpos = this._textpos();
            var lastEndPos = backpos;

            // Note angle
            if (ch === "{" && this._charsRight() > 1) {
                angled = true;
                this._moveRight();
                ch = this._rightChar();
            } else {
                angled = false;
            }

            // Try to parse backreference: \1 or \{1} or \{cap}

            var capnum;
            var digit;

            if (ch >= "0" && ch <= "9") {
                if (!angled && this._useOptionE()) {
                    capnum = -1;
                    var newcapnum = ch - "0";

                    this._moveRight();

                    if (this._isCaptureSlot(newcapnum)) {
                        capnum = newcapnum;
                        lastEndPos = this._textpos();
                    }

                    while (this._charsRight() > 0 && (ch = this._rightChar()) >= "0" && ch <= "9") {
                        digit = ch - "0";
                        if (newcapnum > (maxValueDiv10) || (newcapnum === (maxValueDiv10) && digit > (maxValueMod10))) {
                            throw this._makeException("Capture group is out of range.");
                        }

                        newcapnum = newcapnum * 10 + digit;

                        this._moveRight();

                        if (this._isCaptureSlot(newcapnum)) {
                            capnum = newcapnum;
                            lastEndPos = this._textpos();
                        }
                    }
                    this._textto(lastEndPos);

                    if (capnum >= 0) {
                        return new System.Text.RegularExpressions.RegexNode(System.Text.RegularExpressions.RegexNode.Ref, this._options, capnum);
                    }
                } else {
                    capnum = this._scanDecimal();

                    if (!angled || this._charsRight() > 0 && this._moveRightGetChar() === "}") {
                        if (this._isCaptureSlot(capnum)) {
                            return new System.Text.RegularExpressions.RegexNode(System.Text.RegularExpressions.RegexNode.Ref, this._options, capnum);
                        }
                    }
                }
            } else if (angled && this._isWordChar(ch)) {
                var capname = this._scanCapname();

                if (this._charsRight() > 0 && this._moveRightGetChar() === "}") {
                    if (this._isCaptureName(capname)) {
                        var captureSlot = this._captureSlotFromName(capname);

                        return new System.Text.RegularExpressions.RegexNode(System.Text.RegularExpressions.RegexNode.Ref, this._options, captureSlot);
                    }
                }
            } else if (!angled) {
                capnum = 1;

                switch (ch) {
                    case "$":
                        this._moveRight();
                        return new System.Text.RegularExpressions.RegexNode(System.Text.RegularExpressions.RegexNode.One, this._options, "$");

                    case "&":
                        capnum = 0;
                        break;

                    case "`":
                        capnum = System.Text.RegularExpressions.RegexReplacement.LeftPortion;
                        break;

                    case "\'":
                        capnum = System.Text.RegularExpressions.RegexReplacement.RightPortion;
                        break;

                    case "+":
                        capnum = System.Text.RegularExpressions.RegexReplacement.LastGroup;
                        break;

                    case "_":
                        capnum = System.Text.RegularExpressions.RegexReplacement.WholeString;
                        break;
                }

                if (capnum !== 1) {
                    this._moveRight();

                    return new System.Text.RegularExpressions.RegexNode(System.Text.RegularExpressions.RegexNode.Ref, this._options, capnum);
                }
            }

            // unrecognized $: literalize

            this._textto(backpos);

            return new System.Text.RegularExpressions.RegexNode(System.Text.RegularExpressions.RegexNode.One, this._options, "$");
        },

        _scanDecimal: function () {
            // Scans any number of decimal digits (pegs value at 2^31-1 if too large)

            var maxValueDiv10 = 214748364; // Int32.MaxValue / 10;
            var maxValueMod10 = 7; // Int32.MaxValue % 10;
            var i = 0;
            var ch;
            var d;

            while (this._charsRight() > 0) {
                ch = this._rightChar();

                if (ch < "0" || ch > "9") {
                    break;
                }

                d = ch - "0";

                this._moveRight();

                if (i > (maxValueDiv10) || (i === (maxValueDiv10) && d > (maxValueMod10))) {
                    throw this._makeException("Capture group is out of range.");
                }

                i *= 10;
                i += d;
            }

            return i;
        },

        _scanOctal: function () {
            var d;
            var i;
            var c;

            // Consume octal chars only up to 3 digits and value 0377

            c = 3;

            if (c > this._charsRight()) {
                c = this._charsRight();
            }

            for (i = 0; c > 0 && (d = this._rightChar() - "0") <= 7; c -= 1) {
                this._moveRight();

                i *= 8;
                i += d;

                if (this._useOptionE() && i >= 0x20) {
                    break;
                }
            }

            // Octal codes only go up to 255.  Any larger and the behavior that Perl follows
            // is simply to truncate the high bits.
            i &= 0xFF;

            return String.fromCharCode(i);
        },

        _scanHex: function (c) {
            var i;
            var d;

            i = 0;

            if (this._charsRight() >= c) {
                for (; c > 0 && ((d = this._hexDigit(this._moveRightGetChar())) >= 0); c -= 1) {
                    i *= 0x10;
                    i += d;
                }
            }

            if (c > 0) {
                throw this._makeException("Insufficient hexadecimal digits.");
            }

            return i;
        },

        _hexDigit: function (ch) {
            var d;

            var code = ch.charCodeAt(0);

            if ((d = code - "0".charCodeAt(0)) <= 9) {
                return d;
            }

            if ((d = code - "a".charCodeAt(0)) <= 5) {
                return d + 0xa;
            }

            if ((d = code - "A".charCodeAt(0)) <= 5) {
                return d + 0xa;
            }

            return -1;
        },

        _scanControl: function () {
            if (this._charsRight() <= 0) {
                throw this._makeException("Missing control character.");
            }

            var ch = this._moveRightGetChar();

            // \ca interpreted as \cA

            var code = ch.charCodeAt(0);

            if (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) {
                code = code - ("a".charCodeAt(0) - "A".charCodeAt(0));
            }

            if ((code = (code - "@".charCodeAt(0))) < " ".charCodeAt(0)) {
                return String.fromCharCode(code);
            }

            throw this._makeException("Unrecognized control character.");
        },

        _scanCapname: function () {
            var startpos = this._textpos();

            while (this._charsRight() > 0) {
                if (!this._isWordChar(this._moveRightGetChar())) {
                    this._moveLeft();

                    break;
                }
            }

            return _pattern.slice(startpos, this._textpos());
        },

        _scanCharEscape: function () {
            var ch = this._moveRightGetChar();

            if (ch >= "0" && ch <= "7") {
                this._moveLeft();

                return this._scanOctal();
            }

            switch (ch) {
                case "x":
                    return this._scanHex(2);
                case "u":
                    return this._scanHex(4);
                case "a":
                    return "\u0007";
                case "b":
                    return "\b";
                case "e":
                    return "\u001B";
                case "f":
                    return "\f";
                case "n":
                    return "\n";
                case "r":
                    return "\r";
                case "t":
                    return "\t";
                case "v":
                    return "\u000B";
                case "c":
                    return this._scanControl();
                default:
                    var isInvalidBasicLatin = ch === '8' || ch === '9' || ch === '_';
                    if (isInvalidBasicLatin || (!this._useOptionE() && this._isWordChar(ch))) {
                        throw this._makeException("Unrecognized escape sequence \\" + ch + ".");
                    }
                    return ch;
            }
        },

        _captureSlotFromName: function (capname) {
            return this._capnames[capname];
        },

        _isCaptureSlot: function (i) {
            if (this._caps != null) {
                return this._caps[i] != null;
            }

            return (i >= 0 && i < this._capsize);
        },

        _isCaptureName: function (capname) {
            if (this._capnames == null) {
                return false;
            }

            return _capnames[capname] != null;
        },

        _isWordChar: function (ch) {
            // Partial implementation,
            // see the link for more details (http://referencesource.microsoft.com/#System/regex/system/text/regularexpressions/RegexParser.cs,1156)
            return System.Char.isLetter(ch.charCodeAt(0));
        },

        _charsRight: function () {
            return this._pattern.length - this._currentPos;
        },

        _rightChar: function () {
            return this._pattern[this._currentPos];
        },

        _moveRightGetChar: function () {
            return this._pattern[this._currentPos++];
        },

        _moveRight: function () {
            this._currentPos++;
        },

        _textpos: function () {
            return this._currentPos;
        },

        _textto: function (pos) {
            this._currentPos = pos;
        },

        _moveLeft: function () {
            this._currentPos--;
        }
    });
