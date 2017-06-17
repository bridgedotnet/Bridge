    Bridge.define("System.Text.RegularExpressions.RegexReplacement", {
        statics: {
            replace: function (evaluator, regex, input, count, startat) {
                if (evaluator == null) {
                    throw new System.ArgumentNullException("evaluator");
                }

                if (count < -1) {
                    throw new System.ArgumentOutOfRangeException("count", "Count cannot be less than -1.");
                }

                if (startat < 0 || startat > input.length) {
                    throw new System.ArgumentOutOfRangeException("startat", "Start index cannot be less than 0 or greater than input length.");
                }

                if (count === 0) {
                    return input;
                }

                var match = regex.match(input, startat);

                if (!match.getSuccess()) {
                    return input;
                } else {
                    var sb = "";
                    var prevat;
                    var matchIndex;
                    var matchLength;

                    if (!regex.getRightToLeft()) {
                        prevat = 0;

                        do {
                            matchIndex = match.getIndex();
                            matchLength = match.getLength();

                            if (matchIndex !== prevat) {
                                sb += input.slice(prevat, matchIndex);
                            }

                            prevat = matchIndex + matchLength;
                            sb += evaluator(match);

                            if (--count === 0) {
                                break;
                            }

                            match = match.nextMatch();
                        } while (match.getSuccess());

                        if (prevat < input.length) {
                            sb += input.slice(prevat, input.length);
                        }
                    } else {
                        var al = [];

                        prevat = input.length;

                        do {
                            matchIndex = match.getIndex();
                            matchLength = match.getLength();

                            if (matchIndex + matchLength !== prevat) {
                                al.push(input.slice(matchIndex + matchLength, prevat));
                            }

                            prevat = matchIndex;
                            al.push(evaluator(match));

                            if (--count === 0) {
                                break;
                            }

                            match = match.nextMatch();
                        } while (match.getSuccess());

                        sb = new StringBuilder();

                        if (prevat > 0) {
                            sb += sb.slice(0, prevat);
                        }

                        var i;
                        for (i = al.length - 1; i >= 0; i--) {
                            sb += al[i];
                        }
                    }

                    return sb;
                }
            },

            split: function (regex, input, count, startat) {
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count", "Count can't be less than 0.");
                }

                if (startat < 0 || startat > input.length) {
                    throw new System.ArgumentOutOfRangeException("startat", "Start index cannot be less than 0 or greater than input length.");
                }

                var result = [];

                if (count === 1) {
                    result.push(input);

                    return result;
                }

                --count;
                var match = regex.match(input, startat);

                if (!match.getSuccess()) {
                    result.push(input);
                } else {
                    var i;
                    var prevat;
                    var matchIndex;
                    var matchLength;
                    var matchGroups;
                    var matchGroupsCount;

                    if (!regex.getRightToLeft()) {
                        prevat = 0;

                        for (;;) {
                            matchIndex = match.getIndex();
                            matchLength = match.getLength();
                            matchGroups = match.getGroups();
                            matchGroupsCount = matchGroups.getCount();

                            result.push(input.slice(prevat, matchIndex));
                            prevat = matchIndex + matchLength;

                            // add all matched capture groups to the list.
                            for (i = 1; i < matchGroupsCount; i++) {
                                if (match._isMatched(i)) {
                                    result.push(matchGroups.get(i).toString());
                                }
                            }

                            --count;
                            if (count === 0) {
                                break;
                            }

                            match = match.nextMatch();

                            if (!match.getSuccess()) {
                                break;
                            }
                        }

                        result.push(input.slice(prevat, input.length));
                    } else {
                        prevat = input.length;

                        for (;;) {
                            matchIndex = match.getIndex();
                            matchLength = match.getLength();
                            matchGroups = match.getGroups();
                            matchGroupsCount = matchGroups.getCount();

                            result.push(input.slice(matchIndex + matchLength, prevat));
                            prevat = matchIndex;

                            // add all matched capture groups to the list.
                            for (i = 1; i < matchGroupsCount; i++) {
                                if (match._isMatched(i)) {
                                    result.push(matchGroups.get(i).toString());
                                }
                            }

                            --count;
                            if (count === 0) {
                                break;
                            }

                            match = match.nextMatch();
                            if (!match.getSuccess()) {
                                break;
                            }
                        }

                        result.push(input.slice(0, prevat));
                        result.reverse();
                    }
                }

                return result;
            },

            Specials: 4,
            LeftPortion: -1,
            RightPortion: -2,
            LastGroup: -3,
            WholeString: -4
        },

        _rep: "",
        _strings: [], // table of string constants
        _rules: [], // negative -> group #, positive -> string #

        ctor: function (rep, concat, caps) {
            this.$initialize();
            this._rep = rep;

            if (concat._type !== System.Text.RegularExpressions.RegexNode.Concatenate) {
                throw new System.ArgumentException("Replacement error.");
            }

            var sb = "";
            var strings = [];
            var rules = [];
            var slot;
            var child;
            var i;

            for (i = 0; i < concat.childCount(); i++) {
                child = concat.child(i);

                switch (child._type) {
                    case System.Text.RegularExpressions.RegexNode.Multi:
                    case System.Text.RegularExpressions.RegexNode.One:
                        sb += child._str;
                        break;

                    case System.Text.RegularExpressions.RegexNode.Ref:
                        if (sb.length > 0) {
                            rules.push(strings.length);
                            strings.push(sb);
                            sb = "";
                        }

                        slot = child._m;

                        if (caps != null && slot >= 0) {
                            slot = caps[slot];
                        }

                        rules.push(-System.Text.RegularExpressions.RegexReplacement.Specials - 1 - slot);
                        break;
                    default:
                        throw new System.ArgumentException("Replacement error.");
                }
            }

            if (sb.length > 0) {
                rules.push(strings.length);
                strings.push(sb);
            }

            this._strings = strings;
            this._rules = rules;
        },

        getPattern: function () {
            return _rep;
        },

        replacement: function (match) {
            return this._replacementImpl("", match);
        },

        replace: function (regex, input, count, startat) {
            if (count < -1) {
                throw new System.ArgumentOutOfRangeException("count", "Count cannot be less than -1.");
            }
            if (startat < 0 || startat > input.length) {
                throw new System.ArgumentOutOfRangeException("startat", "Start index cannot be less than 0 or greater than input length.");
            }

            if (count === 0) {
                return input;
            }

            var match = regex.match(input, startat);

            if (!match.getSuccess()) {
                return input;
            } else {
                var sb = "";
                var prevat;
                var matchIndex;
                var matchLength;

                if (!regex.getRightToLeft()) {
                    prevat = 0;

                    do {
                        matchIndex = match.getIndex();
                        matchLength = match.getLength();

                        if (matchIndex !== prevat) {
                            sb += input.slice(prevat, matchIndex);
                        }

                        prevat = matchIndex + matchLength;
                        sb = this._replacementImpl(sb, match);

                        if (--count === 0) {
                            break;
                        }

                        match = match.nextMatch();
                    } while (match.getSuccess());

                    if (prevat < input.length) {
                        sb += input.slice(prevat, input.length);
                    }
                } else {
                    var al = [];
                    prevat = input.length;

                    do {
                        matchIndex = match.getIndex();
                        matchLength = match.getLength();

                        if (matchIndex + matchLength !== prevat) {
                            al.push(input.slice(matchIndex + matchLength, prevat));
                        }

                        prevat = matchIndex;
                        this._replacementImplRTL(al, match);

                        if (--count === 0) {
                            break;
                        }

                        match = match.nextMatch();
                    } while (match.getSuccess());

                    if (prevat > 0) {
                        sb += sb.slice(0, prevat);
                    }

                    var i;
                    for (i = al.length - 1; i >= 0; i--) {
                        sb += al[i];
                    }
                }

                return sb;
            }
        },

        _replacementImpl: function (sb, match) {
            var specials = System.Text.RegularExpressions.RegexReplacement.Specials;
            var r;
            var i;

            for (i = 0; i < this._rules.length; i++) {
                r = this._rules[i];

                if (r >= 0) {
                    // string lookup
                    sb += this._strings[r];
                } else if (r < -specials) {
                    // group lookup
                    sb += match._groupToStringImpl(-specials - 1 - r);
                } else {
                    // special insertion patterns
                    switch (-specials - 1 - r) {
                        case System.Text.RegularExpressions.RegexReplacement.LeftPortion:
                            sb += match._getLeftSubstring();
                            break;
                        case System.Text.RegularExpressions.RegexReplacement.RightPortion:
                            sb += match._getRightSubstring();
                            break;
                        case System.Text.RegularExpressions.RegexReplacement.LastGroup:
                            sb += match._lastGroupToStringImpl();
                            break;
                        case System.Text.RegularExpressions.RegexReplacement.WholeString:
                            sb += match._getOriginalString();
                            break;
                    }
                }
            }

            return sb;
        },

        _replacementImplRTL: function (al, match) {
            var specials = System.Text.RegularExpressions.RegexReplacement.Specials;
            var r;
            var i;

            for (i = _rules.length - 1; i >= 0; i--) {
                r = this._rules[i];

                if (r >= 0) {
                    // string lookup
                    al.push(this._strings[r]);
                } else if (r < -specials) {
                    // group lookup
                    al.push(match._groupToStringImpl(-specials - 1 - r));
                } else {
                    // special insertion patterns
                    switch (-specials - 1 - r) {
                        case System.Text.RegularExpressions.RegexReplacement.LeftPortion:
                            al.push(match._getLeftSubstring());
                            break;
                        case System.Text.RegularExpressions.RegexReplacement.RightPortion:
                            al.push(match._getRightSubstring());
                            break;
                        case System.Text.RegularExpressions.RegexReplacement.LastGroup:
                            al.push(match._lastGroupToStringImpl());
                            break;
                        case System.Text.RegularExpressions.RegexReplacement.WholeString:
                            al.push(match._getOriginalString());
                            break;
                    }
                }
            }
        }
    });
