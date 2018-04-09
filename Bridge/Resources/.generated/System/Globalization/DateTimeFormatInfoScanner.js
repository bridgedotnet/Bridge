    Bridge.define("System.Globalization.DateTimeFormatInfoScanner", {
        statics: {
            fields: {
                MonthPostfixChar: 0,
                IgnorableSymbolChar: 0,
                CJKYearSuff: null,
                CJKMonthSuff: null,
                CJKDaySuff: null,
                KoreanYearSuff: null,
                KoreanMonthSuff: null,
                KoreanDaySuff: null,
                KoreanHourSuff: null,
                KoreanMinuteSuff: null,
                KoreanSecondSuff: null,
                CJKHourSuff: null,
                ChineseHourSuff: null,
                CJKMinuteSuff: null,
                CJKSecondSuff: null,
                s_knownWords: null
            },
            props: {
                KnownWords: {
                    get: function () {
                        if (System.Globalization.DateTimeFormatInfoScanner.s_knownWords == null) {
                            var temp = new (System.Collections.Generic.Dictionary$2(System.String,System.String))();

                            temp.add("/", "");
                            temp.add("-", "");
                            temp.add(".", "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.CJKYearSuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.CJKMonthSuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.CJKDaySuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.KoreanYearSuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.KoreanMonthSuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.KoreanDaySuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.KoreanHourSuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.KoreanMinuteSuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.KoreanSecondSuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.CJKHourSuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.ChineseHourSuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.CJKMinuteSuff, "");
                            temp.add(System.Globalization.DateTimeFormatInfoScanner.CJKSecondSuff, "");

                            System.Globalization.DateTimeFormatInfoScanner.s_knownWords = temp;
                        }
                        return (System.Globalization.DateTimeFormatInfoScanner.s_knownWords);
                    }
                }
            },
            ctors: {
                init: function () {
                    this.MonthPostfixChar = 57344;
                    this.IgnorableSymbolChar = 57345;
                    this.CJKYearSuff = "年";
                    this.CJKMonthSuff = "月";
                    this.CJKDaySuff = "日";
                    this.KoreanYearSuff = "년";
                    this.KoreanMonthSuff = "월";
                    this.KoreanDaySuff = "일";
                    this.KoreanHourSuff = "시";
                    this.KoreanMinuteSuff = "분";
                    this.KoreanSecondSuff = "초";
                    this.CJKHourSuff = "時";
                    this.ChineseHourSuff = "时";
                    this.CJKMinuteSuff = "分";
                    this.CJKSecondSuff = "秒";
                }
            },
            methods: {
                SkipWhiteSpacesAndNonLetter: function (pattern, currentIndex) {
                    while (currentIndex < pattern.length) {
                        var ch = pattern.charCodeAt(currentIndex);
                        if (ch === 92) {
                            currentIndex = (currentIndex + 1) | 0;
                            if (currentIndex < pattern.length) {
                                ch = pattern.charCodeAt(currentIndex);
                                if (ch === 39) {
                                    continue;
                                }
                            } else {
                                break;
                            }
                        }
                        if (System.Char.isLetter(ch) || ch === 39 || ch === 46) {
                            break;
                        }
                        currentIndex = (currentIndex + 1) | 0;
                    }
                    return (currentIndex);
                },
                ScanRepeatChar: function (pattern, ch, index, count) {
                    count.v = 1;
                    while (((index = (index + 1) | 0)) < pattern.length && pattern.charCodeAt(index) === ch) {
                        count.v = (count.v + 1) | 0;
                    }
                    return (index);
                },
                GetFormatFlagGenitiveMonth: function (monthNames, genitveMonthNames, abbrevMonthNames, genetiveAbbrevMonthNames) {
                    return ((!System.Globalization.DateTimeFormatInfoScanner.EqualStringArrays(monthNames, genitveMonthNames) || !System.Globalization.DateTimeFormatInfoScanner.EqualStringArrays(abbrevMonthNames, genetiveAbbrevMonthNames)) ? 1 : 0);
                },
                GetFormatFlagUseSpaceInMonthNames: function (monthNames, genitveMonthNames, abbrevMonthNames, genetiveAbbrevMonthNames) {
                    var formatFlags = 0;
                    formatFlags |= (System.Globalization.DateTimeFormatInfoScanner.ArrayElementsBeginWithDigit(monthNames) || System.Globalization.DateTimeFormatInfoScanner.ArrayElementsBeginWithDigit(genitveMonthNames) || System.Globalization.DateTimeFormatInfoScanner.ArrayElementsBeginWithDigit(abbrevMonthNames) || System.Globalization.DateTimeFormatInfoScanner.ArrayElementsBeginWithDigit(genetiveAbbrevMonthNames) ? 32 : 0);

                    formatFlags |= (System.Globalization.DateTimeFormatInfoScanner.ArrayElementsHaveSpace(monthNames) || System.Globalization.DateTimeFormatInfoScanner.ArrayElementsHaveSpace(genitveMonthNames) || System.Globalization.DateTimeFormatInfoScanner.ArrayElementsHaveSpace(abbrevMonthNames) || System.Globalization.DateTimeFormatInfoScanner.ArrayElementsHaveSpace(genetiveAbbrevMonthNames) ? 4 : 0);
                    return (formatFlags);
                },
                GetFormatFlagUseSpaceInDayNames: function (dayNames, abbrevDayNames) {
                    return ((System.Globalization.DateTimeFormatInfoScanner.ArrayElementsHaveSpace(dayNames) || System.Globalization.DateTimeFormatInfoScanner.ArrayElementsHaveSpace(abbrevDayNames)) ? 16 : 0);
                },
                GetFormatFlagUseHebrewCalendar: function (calID) {
                    return (calID === 8 ? 10 : 0);
                },
                EqualStringArrays: function (array1, array2) {
                    if (Bridge.referenceEquals(array1, array2)) {
                        return true;
                    }

                    if (array1.length !== array2.length) {
                        return false;
                    }

                    for (var i = 0; i < array1.length; i = (i + 1) | 0) {
                        if (!System.String.equals(array1[System.Array.index(i, array1)], array2[System.Array.index(i, array2)])) {
                            return false;
                        }
                    }

                    return true;
                },
                ArrayElementsHaveSpace: function (array) {
                    for (var i = 0; i < array.length; i = (i + 1) | 0) {
                        for (var j = 0; j < array[System.Array.index(i, array)].length; j = (j + 1) | 0) {
                            if (System.Char.isWhiteSpace(String.fromCharCode(array[System.Array.index(i, array)].charCodeAt(j)))) {
                                return true;
                            }
                        }
                    }

                    return false;
                },
                ArrayElementsBeginWithDigit: function (array) {
                    for (var i = 0; i < array.length; i = (i + 1) | 0) {
                        if (array[System.Array.index(i, array)].length > 0 && array[System.Array.index(i, array)].charCodeAt(0) >= 48 && array[System.Array.index(i, array)].charCodeAt(0) <= 57) {
                            var index = 1;
                            while (index < array[System.Array.index(i, array)].length && array[System.Array.index(i, array)].charCodeAt(index) >= 48 && array[System.Array.index(i, array)].charCodeAt(index) <= 57) {
                                index = (index + 1) | 0;
                            }
                            if (index === array[System.Array.index(i, array)].length) {
                                return (false);
                            }

                            if (index === ((array[System.Array.index(i, array)].length - 1) | 0)) {
                                switch (array[System.Array.index(i, array)].charCodeAt(index)) {
                                    case 26376: 
                                    case 50900: 
                                        return (false);
                                }
                            }

                            if (index === ((array[System.Array.index(i, array)].length - 4) | 0)) {
                                if (array[System.Array.index(i, array)].charCodeAt(index) === 39 && array[System.Array.index(i, array)].charCodeAt(((index + 1) | 0)) === 32 && array[System.Array.index(i, array)].charCodeAt(((index + 2) | 0)) === 26376 && array[System.Array.index(i, array)].charCodeAt(((index + 3) | 0)) === 39) {
                                    return (false);
                                }
                            }
                            return (true);
                        }
                    }

                    return false;
                }
            }
        },
        fields: {
            m_dateWords: null,
            _ymdFlags: 0
        },
        ctors: {
            init: function () {
                this.m_dateWords = new (System.Collections.Generic.List$1(System.String)).ctor();
                this._ymdFlags = System.Globalization.DateTimeFormatInfoScanner.FoundDatePattern.None;
            }
        },
        methods: {
            AddDateWordOrPostfix: function (formatPostfix, str) {
                if (str.length > 0) {
                    if (System.String.equals(str, ".")) {
                        this.AddIgnorableSymbols(".");
                        return;
                    }
                    var words = { };
                    if (System.Globalization.DateTimeFormatInfoScanner.KnownWords.tryGetValue(str, words) === false) {
                        if (this.m_dateWords == null) {
                            this.m_dateWords = new (System.Collections.Generic.List$1(System.String)).ctor();
                        }
                        if (Bridge.referenceEquals(formatPostfix, "MMMM")) {
                            var temp = String.fromCharCode(System.Globalization.DateTimeFormatInfoScanner.MonthPostfixChar) + (str || "");
                            if (!this.m_dateWords.contains(temp)) {
                                this.m_dateWords.add(temp);
                            }
                        } else {
                            if (!this.m_dateWords.contains(str)) {
                                this.m_dateWords.add(str);
                            }
                            if (str.charCodeAt(((str.length - 1) | 0)) === 46) {
                                var strWithoutDot = str.substr(0, ((str.length - 1) | 0));
                                if (!this.m_dateWords.contains(strWithoutDot)) {
                                    this.m_dateWords.add(strWithoutDot);
                                }
                            }
                        }
                    }
                }
            },
            AddDateWords: function (pattern, index, formatPostfix) {
                var newIndex = System.Globalization.DateTimeFormatInfoScanner.SkipWhiteSpacesAndNonLetter(pattern, index);
                if (newIndex !== index && formatPostfix != null) {
                    formatPostfix = null;
                }
                index = newIndex;

                var dateWord = new System.Text.StringBuilder();

                while (index < pattern.length) {
                    var ch = pattern.charCodeAt(index);
                    if (ch === 39) {
                        this.AddDateWordOrPostfix(formatPostfix, dateWord.toString());
                        index = (index + 1) | 0;
                        break;
                    } else if (ch === 92) {

                        index = (index + 1) | 0;
                        if (index < pattern.length) {
                            dateWord.append(String.fromCharCode(pattern.charCodeAt(index)));
                            index = (index + 1) | 0;
                        }
                    } else if (System.Char.isWhiteSpace(String.fromCharCode(ch))) {
                        this.AddDateWordOrPostfix(formatPostfix, dateWord.toString());
                        if (formatPostfix != null) {
                            formatPostfix = null;
                        }
                        dateWord.setLength(0);
                        index = (index + 1) | 0;
                    } else {
                        dateWord.append(String.fromCharCode(ch));
                        index = (index + 1) | 0;
                    }
                }
                return (index);
            },
            AddIgnorableSymbols: function (text) {
                if (this.m_dateWords == null) {
                    this.m_dateWords = new (System.Collections.Generic.List$1(System.String)).ctor();
                }
                var temp = String.fromCharCode(System.Globalization.DateTimeFormatInfoScanner.IgnorableSymbolChar) + (text || "");
                if (!this.m_dateWords.contains(temp)) {
                    this.m_dateWords.add(temp);
                }
            },
            ScanDateWord: function (pattern) {
                this._ymdFlags = System.Globalization.DateTimeFormatInfoScanner.FoundDatePattern.None;

                var i = 0;
                while (i < pattern.length) {
                    var ch = pattern.charCodeAt(i);
                    var chCount = { };

                    switch (ch) {
                        case 39: 
                            i = this.AddDateWords(pattern, ((i + 1) | 0), null);
                            break;
                        case 77: 
                            i = System.Globalization.DateTimeFormatInfoScanner.ScanRepeatChar(pattern, 77, i, chCount);
                            if (chCount.v >= 4) {
                                if (i < pattern.length && pattern.charCodeAt(i) === 39) {
                                    i = this.AddDateWords(pattern, ((i + 1) | 0), "MMMM");
                                }
                            }
                            this._ymdFlags |= System.Globalization.DateTimeFormatInfoScanner.FoundDatePattern.FoundMonthPatternFlag;
                            break;
                        case 121: 
                            i = System.Globalization.DateTimeFormatInfoScanner.ScanRepeatChar(pattern, 121, i, chCount);
                            this._ymdFlags |= System.Globalization.DateTimeFormatInfoScanner.FoundDatePattern.FoundYearPatternFlag;
                            break;
                        case 100: 
                            i = System.Globalization.DateTimeFormatInfoScanner.ScanRepeatChar(pattern, 100, i, chCount);
                            if (chCount.v <= 2) {
                                this._ymdFlags |= System.Globalization.DateTimeFormatInfoScanner.FoundDatePattern.FoundDayPatternFlag;
                            }
                            break;
                        case 92: 
                            i = (i + 2) | 0;
                            break;
                        case 46: 
                            if (this._ymdFlags === System.Globalization.DateTimeFormatInfoScanner.FoundDatePattern.FoundYMDPatternFlag) {
                                this.AddIgnorableSymbols(".");
                                this._ymdFlags = System.Globalization.DateTimeFormatInfoScanner.FoundDatePattern.None;
                            }
                            i = (i + 1) | 0;
                            break;
                        default: 
                            if (this._ymdFlags === System.Globalization.DateTimeFormatInfoScanner.FoundDatePattern.FoundYMDPatternFlag && !System.Char.isWhiteSpace(String.fromCharCode(ch))) {
                                this._ymdFlags = System.Globalization.DateTimeFormatInfoScanner.FoundDatePattern.None;
                            }
                            i = (i + 1) | 0;
                            break;
                    }
                }
            },
            GetDateWordsOfDTFI: function (dtfi) {
                var datePatterns = dtfi.getAllDateTimePatterns(68);
                var i;

                for (i = 0; i < datePatterns.length; i = (i + 1) | 0) {
                    this.ScanDateWord(datePatterns[System.Array.index(i, datePatterns)]);
                }

                datePatterns = dtfi.getAllDateTimePatterns(100);
                for (i = 0; i < datePatterns.length; i = (i + 1) | 0) {
                    this.ScanDateWord(datePatterns[System.Array.index(i, datePatterns)]);
                }
                datePatterns = dtfi.getAllDateTimePatterns(121);
                for (i = 0; i < datePatterns.length; i = (i + 1) | 0) {
                    this.ScanDateWord(datePatterns[System.Array.index(i, datePatterns)]);
                }

                this.ScanDateWord(dtfi.monthDayPattern);

                datePatterns = dtfi.getAllDateTimePatterns(84);
                for (i = 0; i < datePatterns.length; i = (i + 1) | 0) {
                    this.ScanDateWord(datePatterns[System.Array.index(i, datePatterns)]);
                }

                datePatterns = dtfi.getAllDateTimePatterns(116);
                for (i = 0; i < datePatterns.length; i = (i + 1) | 0) {
                    this.ScanDateWord(datePatterns[System.Array.index(i, datePatterns)]);
                }

                var result = null;
                if (this.m_dateWords != null && this.m_dateWords.Count > 0) {
                    result = System.Array.init(this.m_dateWords.Count, null, System.String);
                    for (i = 0; i < this.m_dateWords.Count; i = (i + 1) | 0) {
                        result[System.Array.index(i, result)] = this.m_dateWords.getItem(i);
                    }
                }
                return (result);
            }
        }
    });
