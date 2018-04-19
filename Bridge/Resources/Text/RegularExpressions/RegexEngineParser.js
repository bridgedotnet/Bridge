    Bridge.define("System.Text.RegularExpressions.RegexEngineParser", {
        statics: {
            _hexSymbols: "0123456789abcdefABCDEF",
            _octSymbols: "01234567",
            _decSymbols: "0123456789",

            _escapedChars: "abtrvfnexcu",
            _escapedCharClasses: "pPwWsSdD",
            _escapedAnchors: "AZzGbB",
            _escapedSpecialSymbols: " .,$^{}[]()|*+-=?\\|/\"':;~!@#%&",

            _whiteSpaceChars: " \r\n\t\v\f\u00A0\uFEFF", //TODO: This is short version of .NET WhiteSpace category.
            _unicodeCategories: ["Lu", "Ll", "Lt", "Lm", "Lo", "L", "Mn", "Mc", "Me", "M", "Nd", "Nl", "No", "N", "Pc", "Pd", "Ps", "Pe", "Pi", "Pf", "Po", "P", "Sm", "Sc", "Sk", "So", "S", "Zs", "Zl", "Zp", "Z", "Cc", "Cf", "Cs", "Co", "Cn", "C"],
            _namedCharBlocks: ["IsBasicLatin", "IsLatin-1Supplement", "IsLatinExtended-A", "IsLatinExtended-B", "IsIPAExtensions", "IsSpacingModifierLetters", "IsCombiningDiacriticalMarks", "IsGreek", "IsGreekandCoptic", "IsCyrillic", "IsCyrillicSupplement", "IsArmenian", "IsHebrew", "IsArabic", "IsSyriac", "IsThaana", "IsDevanagari", "IsBengali", "IsGurmukhi", "IsGujarati", "IsOriya", "IsTamil", "IsTelugu", "IsKannada", "IsMalayalam", "IsSinhala", "IsThai", "IsLao", "IsTibetan", "IsMyanmar", "IsGeorgian", "IsHangulJamo", "IsEthiopic", "IsCherokee", "IsUnifiedCanadianAboriginalSyllabics", "IsOgham", "IsRunic", "IsTagalog", "IsHanunoo", "IsBuhid", "IsTagbanwa", "IsKhmer", "IsMongolian", "IsLimbu", "IsTaiLe", "IsKhmerSymbols", "IsPhoneticExtensions", "IsLatinExtendedAdditional", "IsGreekExtended", "IsGeneralPunctuation", "IsSuperscriptsandSubscripts", "IsCurrencySymbols", "IsCombiningDiacriticalMarksforSymbols", "IsCombiningMarksforSymbols", "IsLetterlikeSymbols", "IsNumberForms", "IsArrows", "IsMathematicalOperators", "IsMiscellaneousTechnical", "IsControlPictures", "IsOpticalCharacterRecognition", "IsEnclosedAlphanumerics", "IsBoxDrawing", "IsBlockElements", "IsGeometricShapes", "IsMiscellaneousSymbols", "IsDingbats", "IsMiscellaneousMathematicalSymbols-A", "IsSupplementalArrows-A", "IsBraillePatterns", "IsSupplementalArrows-B", "IsMiscellaneousMathematicalSymbols-B", "IsSupplementalMathematicalOperators", "IsMiscellaneousSymbolsandArrows", "IsCJKRadicalsSupplement", "IsKangxiRadicals", "IsIdeographicDescriptionCharacters", "IsCJKSymbolsandPunctuation", "IsHiragana", "IsKatakana", "IsBopomofo", "IsHangulCompatibilityJamo", "IsKanbun", "IsBopomofoExtended", "IsKatakanaPhoneticExtensions", "IsEnclosedCJKLettersandMonths", "IsCJKCompatibility", "IsCJKUnifiedIdeographsExtensionA", "IsYijingHexagramSymbols", "IsCJKUnifiedIdeographs", "IsYiSyllables", "IsYiRadicals", "IsHangulSyllables", "IsHighSurrogates", "IsHighPrivateUseSurrogates", "IsLowSurrogates", "IsPrivateUse or IsPrivateUseArea", "IsCJKCompatibilityIdeographs", "IsAlphabeticPresentationForms", "IsArabicPresentationForms-A", "IsVariationSelectors", "IsCombiningHalfMarks", "IsCJKCompatibilityForms", "IsSmallFormVariants", "IsArabicPresentationForms-B", "IsHalfwidthandFullwidthForms", "IsSpecials"],
            _controlChars: ["@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_"],

            tokenTypes: {
                literal: 0,

                escChar: 110,
                escCharOctal: 111,
                escCharHex: 112,
                escCharCtrl: 113,
                escCharUnicode: 114,
                escCharOther: 115,

                escCharClass: 120,
                escCharClassCategory: 121,
                escCharClassBlock: 122,
                escCharClassDot: 123,

                escAnchor: 130,

                escBackrefNumber: 140,
                escBackrefName: 141,

                charGroup: 200,
                charNegativeGroup: 201,
                charInterval: 202,

                anchor: 300,

                group: 400,
                groupImnsx: 401,
                groupImnsxMisc: 402,

                groupConstruct: 403,
                groupConstructName: 404,
                groupConstructImnsx: 405,
                groupConstructImnsxMisc: 406,

                quantifier: 500,
                quantifierN: 501,
                quantifierNM: 502,

                alternation: 600,
                alternationGroup: 601,
                alternationGroupCondition: 602,
                alternationGroupRefNumberCondition: 603,
                alternationGroupRefNameCondition: 604,

                commentInline: 700,
                commentXMode: 701
            },

            parsePattern: function (pattern, settings) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;

                // Parse tokens in the original pattern:
                var tokens = scope._parsePatternImpl(pattern, settings, 0, pattern.length);

                // Collect and fill group descriptors into Group tokens.
                // We need do it before any token modification.
                var groups = [];
                scope._fillGroupDescriptors(tokens, groups);

                // Fill Sparse Info:
                var sparseSettings = scope._getGroupSparseInfo(groups);

                // Fill balancing info for the groups with "name2":
                scope._fillBalancingGroupInfo(groups, sparseSettings);

                // Transform tokens for usage in JS RegExp:
                scope._preTransformBackrefTokens(pattern, tokens, sparseSettings);
                scope._transformRawTokens(settings, tokens, sparseSettings, [], [], 0);

                // Update group descriptors as tokens have been transformed (at least indexes were changed):
                scope._updateGroupDescriptors(tokens);

                var result = {
                    groups: groups,
                    sparseSettings: sparseSettings,
                    isContiguous: settings.isContiguous || false,
                    shouldFail: settings.shouldFail || false,
                    tokens: tokens
                };

                return result;
            },

            _transformRawTokens: function (settings, tokens, sparseSettings, allowedPackedSlotIds, nestedGroupIds, nestingLevel) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;
                var prevToken;
                var token;
                var value;
                var packedSlotId;
                var groupNumber;
                var matchRes;
                var localNestedGroupIds;
                var localSettings;
                var qtoken;
                var i;

                // Transform/adjust tokens collection to work with JS RegExp:
                for (i = 0; i < tokens.length; i++) {
                    token = tokens[i];

                    if (i < tokens.length - 1) {
                        qtoken = tokens[i + 1];

                        switch (qtoken.type) {
                            case tokenTypes.quantifier:
                            case tokenTypes.quantifierN:
                            case tokenTypes.quantifierNM:
                                token.qtoken = qtoken;
                                tokens.splice(i + 1, 1);
                                --i;
                        }
                    }

                    if (token.type === tokenTypes.escBackrefNumber) {
                        groupNumber = token.data.number;
                        packedSlotId = sparseSettings.getPackedSlotIdBySlotNumber(groupNumber);

                        if (packedSlotId == null) {
                            throw new System.ArgumentException.$ctor1("Reference to undefined group number " + groupNumber.toString() + ".");
                        }

                        if (allowedPackedSlotIds.indexOf(packedSlotId) < 0) {
                            settings.shouldFail = true; // Backreferences to unreachable group number lead to an empty match.

                            continue;
                        }

                        token.data.slotId = packedSlotId;
                    } else if (token.type === tokenTypes.escBackrefName) {
                        value = token.data.name;
                        packedSlotId = sparseSettings.getPackedSlotIdBySlotName(value);

                        if (packedSlotId == null) {
                            // TODO: Move this code to earlier stages
                            // If the name is number, treat the backreference as a numbered:
                            matchRes = scope._matchChars(value, 0, value.length, scope._decSymbols);

                            if (matchRes.matchLength === value.length) {
                                value = "\\" + value;
                                scope._updatePatternToken(token, tokenTypes.escBackrefNumber, token.index, value.length, value);
                                --i; // process the token again

                                continue;
                            }

                            throw new System.ArgumentException.$ctor1("Reference to undefined group name '" + value + "'.");
                        }

                        if (allowedPackedSlotIds.indexOf(packedSlotId) < 0) {
                            settings.shouldFail = true; // Backreferences to unreachable group number lead to an empty match.

                            continue;
                        }

                        token.data.slotId = packedSlotId;
                    } else if (token.type === tokenTypes.anchor || token.type === tokenTypes.escAnchor) {
                        if (token.value === "\\G") {
                            if (nestingLevel === 0 && i === 0) {
                                settings.isContiguous = true;
                            } else {
                                settings.shouldFail = true;
                            }

                            tokens.splice(i, 1);
                            --i;

                            continue;
                        }
                    } else if (token.type === tokenTypes.commentInline || token.type === tokenTypes.commentXMode) {
                        // We can safely remove comments from the pattern
                        tokens.splice(i, 1);
                        --i;

                        continue;
                    } else if (token.type === tokenTypes.literal) {
                        // Combine literal tokens for better performance:
                        if (i > 0 && !token.qtoken) {
                            prevToken = tokens[i - 1];

                            if (prevToken.type === tokenTypes.literal && !prevToken.qtoken) {
                                prevToken.value += token.value;
                                prevToken.length += token.length;

                                tokens.splice(i, 1);
                                --i;

                                continue;
                            }
                        }
                    } else if (token.type === tokenTypes.alternationGroupCondition) {
                        if (token.data != null) {
                            if (token.data.number != null) {
                                packedSlotId = sparseSettings.getPackedSlotIdBySlotNumber(token.data.number);

                                if (packedSlotId == null) {
                                    throw new System.ArgumentException.$ctor1("Reference to undefined group number " + value + ".");
                                }

                                token.data.packedSlotId = packedSlotId;
                                scope._updatePatternToken(token, tokenTypes.alternationGroupRefNumberCondition, token.index, token.length, token.value);
                            } else {
                                packedSlotId = sparseSettings.getPackedSlotIdBySlotName(token.data.name);

                                if (packedSlotId != null) {
                                    token.data.packedSlotId = packedSlotId;
                                    scope._updatePatternToken(token, tokenTypes.alternationGroupRefNameCondition, token.index, token.length, token.value);
                                } else {
                                    delete token.data;
                                }
                            }
                        }
                    }

                    // Update children tokens:
                    if (token.children && token.children.length) {
                        localNestedGroupIds = token.type === tokenTypes.group ? [token.group.rawIndex] : [];
                        localNestedGroupIds = localNestedGroupIds.concat(nestedGroupIds);

                        localSettings = token.localSettings || settings;
                        scope._transformRawTokens(localSettings, token.children, sparseSettings, allowedPackedSlotIds, localNestedGroupIds, nestingLevel + 1);
                        settings.shouldFail = settings.shouldFail || localSettings.shouldFail;
                        settings.isContiguous = settings.isContiguous || localSettings.isContiguous;
                    }

                    // Group is processed. Now it can be referenced with Backref:
                    if (token.type === tokenTypes.group) {
                        allowedPackedSlotIds.push(token.group.packedSlotId);
                    }
                }
            },

            _fillGroupDescriptors: function (tokens, groups) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var group;
                var i;

                // Fill group structure:
                scope._fillGroupStructure(groups, tokens, null);

                // Assign name or id:
                var groupId = 1;

                for (i = 0; i < groups.length; i++) {
                    group = groups[i];

                    if (group.constructs.name1 != null) {
                        group.name = group.constructs.name1;
                        group.hasName = true;
                    } else {
                        group.hasName = false;
                        group.name = groupId.toString();
                        ++groupId;
                    }
                }
            },

            _fillGroupStructure: function (groups, tokens, parentGroup) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;
                var group;
                var token;
                var constructs;
                var constructCandidateToken;
                var hasChildren;
                var i;

                for (i = 0; i < tokens.length; i++) {
                    token = tokens[i];
                    hasChildren = token.children && token.children.length;

                    if (token.type === tokenTypes.group || token.type === tokenTypes.groupImnsx || token.type === tokenTypes.groupImnsxMisc) {
                        group = {
                            rawIndex: groups.length + 1,
                            number: -1,

                            parentGroup: null,
                            innerGroups: [],

                            name: null,
                            hasName: false,

                            constructs: null,
                            quantifier: null,

                            exprIndex: -1,
                            exprLength: 0,
                            expr: null,
                            exprFull: null
                        };

                        token.group = group;

                        if (token.type === tokenTypes.group) {
                            groups.push(group);

                            if (parentGroup != null) {
                                token.group.parentGroup = parentGroup;
                                parentGroup.innerGroups.push(group);
                            }
                        }

                        // fill group constructs:
                        constructCandidateToken = hasChildren ? token.children[0] : null;
                        group.constructs = scope._fillGroupConstructs(constructCandidateToken);
                        constructs = group.constructs;

                        if (token.isNonCapturingExplicit) {
                            delete token.isNonCapturingExplicit;
                            constructs.isNonCapturingExplicit = true;
                        }

                        if (token.isEmptyCapturing) {
                            delete token.isEmptyCapturing;
                            constructs.emptyCapture = true;
                        }

                        constructs.skipCapture =
                            constructs.isNonCapturing ||
                            constructs.isNonCapturingExplicit ||
                            constructs.isNonbacktracking ||
                            constructs.isPositiveLookahead ||
                            constructs.isNegativeLookahead ||
                            constructs.isPositiveLookbehind ||
                            constructs.isNegativeLookbehind ||
                            (constructs.name1 == null && constructs.name2 != null);
                    }

                    // fill group descriptors for inner tokens:
                    if (hasChildren) {
                        scope._fillGroupStructure(groups, token.children, token.group);
                    }
                }
            },

            _getGroupSparseInfo: function (groups) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;

                var explNumberedGroups = {};
                var explNumberedGroupKeys = [];
                var explNamedGroups = {};
                var explGroups;

                var numberedGroups;
                var slotNumber;
                var slotName;
                var group;
                var i;
                var j;

                var sparseSlotMap = { 0: 0 };
                sparseSlotMap.lastSlot = 0;

                var sparseSlotNameMap = { "0": 0 };
                sparseSlotNameMap.keys = ["0"];

                // Fill Explicit Numbers:
                for (i = 0; i < groups.length; i++) {
                    group = groups[i];

                    if (group.constructs.skipCapture) {
                        continue;
                    }

                    if (group.constructs.isNumberName1) {
                        slotNumber = parseInt(group.constructs.name1);
                        explNumberedGroupKeys.push(slotNumber);

                        if (explNumberedGroups[slotNumber]) {
                            explNumberedGroups[slotNumber].push(group);
                        } else {
                            explNumberedGroups[slotNumber] = [group];
                        }
                    } else {
                        slotName = group.constructs.name1;

                        if (explNamedGroups[slotName]) {
                            explNamedGroups[slotName].push(group);
                        } else {
                            explNamedGroups[slotName] = [group];
                        }
                    }
                }

                // Sort explicitly set Number names:
                var sortNum = function (a, b) {
                    return a - b;
                };

                explNumberedGroupKeys.sort(sortNum);

                // Add group without names first (emptyCapture = false first, than emptyCapture = true):
                var allowEmptyCapture = false;

                for (j = 0; j < 2; j++) {
                    for (i = 0; i < groups.length; i++) {
                        group = groups[i];

                        if (group.constructs.skipCapture) {
                            continue;
                        }

                        if ((group.constructs.emptyCapture === true) !== allowEmptyCapture) {
                            continue;
                        }

                        slotNumber = sparseSlotNameMap.keys.length;

                        if (!group.hasName) {
                            numberedGroups = [group];
                            explGroups = explNumberedGroups[slotNumber];

                            if (explGroups != null) {
                                numberedGroups = numberedGroups.concat(explGroups);
                                explNumberedGroups[slotNumber] = null;
                            }

                            scope._addSparseSlotForSameNamedGroups(numberedGroups, slotNumber, sparseSlotMap, sparseSlotNameMap);
                        }
                    }
                    allowEmptyCapture = true;
                }

                // Then add named groups:
                for (i = 0; i < groups.length; i++) {
                    group = groups[i];

                    if (group.constructs.skipCapture) {
                        continue;
                    }

                    if (!group.hasName || group.constructs.isNumberName1) {
                        continue;
                    }

                    // If the slot is already occupied by an explicitly numbered group,
                    // add this group to the slot:
                    slotNumber = sparseSlotNameMap.keys.length;
                    explGroups = explNumberedGroups[slotNumber];

                    while (explGroups != null) {
                        scope._addSparseSlotForSameNamedGroups(explGroups, slotNumber, sparseSlotMap, sparseSlotNameMap);

                        explNumberedGroups[slotNumber] = null; // Group is processed.
                        slotNumber = sparseSlotNameMap.keys.length;
                        explGroups = explNumberedGroups[slotNumber];
                    }

                    if (!group.constructs.isNumberName1) {
                        slotNumber = sparseSlotNameMap.keys.length;
                        explGroups = explNumberedGroups[slotNumber];

                        while (explGroups != null) {
                            scope._addSparseSlotForSameNamedGroups(explGroups, slotNumber, sparseSlotMap, sparseSlotNameMap);

                            explNumberedGroups[slotNumber] = null; // Group is processed.
                            slotNumber = sparseSlotNameMap.keys.length;
                            explGroups = explNumberedGroups[slotNumber];
                        }
                    }

                    // Add the named group(s) to the 1st free slot:
                    slotName = group.constructs.name1;
                    explGroups = explNamedGroups[slotName];

                    if (explGroups != null) {
                        scope._addSparseSlotForSameNamedGroups(explGroups, slotNumber, sparseSlotMap, sparseSlotNameMap);
                        explNamedGroups[slotName] = null;  // Group is processed.
                    }
                }

                // Add the rest explicitly numbered groups:
                for (i = 0; i < explNumberedGroupKeys.length; i++) {
                    slotNumber = explNumberedGroupKeys[i];
                    explGroups = explNumberedGroups[slotNumber];

                    if (explGroups != null) {
                        scope._addSparseSlotForSameNamedGroups(explGroups, slotNumber, sparseSlotMap, sparseSlotNameMap);

                        explNumberedGroups[slotNumber] = null; // Group is processed.
                    }
                }

                return {
                    isSparse: sparseSlotMap.isSparse || false, //sparseSlotNumbers.length !== (1 + sparseSlotNumbers[sparseSlotNumbers.length - 1]),
                    sparseSlotMap: sparseSlotMap,           // <SlotNumber, PackedSlotId>
                    sparseSlotNameMap: sparseSlotNameMap,   // <SlotName, PackedSlotId>

                    getPackedSlotIdBySlotNumber: function (slotNumber) {
                        return this.sparseSlotMap[slotNumber];
                    },

                    getPackedSlotIdBySlotName: function (slotName) {
                        return this.sparseSlotNameMap[slotName];
                    }
                };
            },

            _addSparseSlot: function (group, slotNumber, sparseSlotMap, sparseSlotNameMap) {
                var packedSlotId = sparseSlotNameMap.keys.length; // 0-based index. Raw Slot number, 0,1..n (without gaps)

                group.packedSlotId = packedSlotId;

                sparseSlotMap[slotNumber] = packedSlotId;
                sparseSlotNameMap[group.name] = packedSlotId;
                sparseSlotNameMap.keys.push(group.name);

                if (!sparseSlotMap.isSparse && ((slotNumber - sparseSlotMap.lastSlot) > 1)) {
                    sparseSlotMap.isSparse = true;
                }

                sparseSlotMap.lastSlot = slotNumber;
            },

            _addSparseSlotForSameNamedGroups: function (groups, slotNumber, sparseSlotMap, sparseSlotNameMap) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var i;

                scope._addSparseSlot(groups[0], slotNumber, sparseSlotMap, sparseSlotNameMap);
                var sparseSlotId = groups[0].sparseSlotId;
                var packedSlotId = groups[0].packedSlotId;

                // Assign SlotID for all expl. named groups in this slot.
                if (groups.length > 1) {
                    for (i = 1; i < groups.length; i++) {
                        groups[i].sparseSlotId = sparseSlotId;
                        groups[i].packedSlotId = packedSlotId;
                    }
                }
            },

            _fillGroupConstructs: function (childToken) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;
                var constructs = {
                    name1: null,
                    name2: null,

                    isNumberName1: false,
                    isNumberName2: false,

                    isNonCapturing: false,
                    isNonCapturingExplicit: false,

                    isIgnoreCase: null,
                    isMultiline: null,
                    isExplicitCapture: null,
                    isSingleLine: null,
                    isIgnoreWhitespace: null,

                    isPositiveLookahead: false,
                    isNegativeLookahead: false,
                    isPositiveLookbehind: false,
                    isNegativeLookbehind: false,

                    isNonbacktracking: false
                };

                if (childToken == null) {
                    return constructs;
                }

                if (childToken.type === tokenTypes.groupConstruct) {
                    // ?:
                    // ?=
                    // ?!
                    // ?<=
                    // ?<!
                    // ?>

                    switch (childToken.value) {
                        case "?:":
                            constructs.isNonCapturing = true;
                            break;

                        case "?=":
                            constructs.isPositiveLookahead = true;
                            break;

                        case "?!":
                            constructs.isNegativeLookahead = true;
                            break;

                        case "?>":
                            constructs.isNonbacktracking = true;
                            break;

                        case "?<=":
                            constructs.isPositiveLookbehind = true;
                            break;

                        case "?<!":
                            constructs.isNegativeLookbehind = true;
                            break;

                        default:
                            throw new System.ArgumentException.$ctor1("Unrecognized grouping construct.");
                    }
                } else if (childToken.type === tokenTypes.groupConstructName) {
                    // ?<name1>
                    // ?'name1'
                    // ?<name1-name2>
                    // ?'name1-name2'

                    var nameExpr = childToken.value.slice(2, childToken.length - 1);
                    var groupNames = nameExpr.split("-");

                    if (groupNames.length === 0 || groupNames.length > 2) {
                        throw new System.ArgumentException.$ctor1("Invalid group name.");
                    }

                    if (groupNames[0].length) {
                        constructs.name1 = groupNames[0];

                        var nameRes1 = scope._validateGroupName(groupNames[0]);

                        constructs.isNumberName1 = nameRes1.isNumberName;
                    }

                    if (groupNames.length === 2) {
                        constructs.name2 = groupNames[1];

                        var nameRes2 = scope._validateGroupName(groupNames[1]);

                        constructs.isNumberName2 = nameRes2.isNumberName;
                    }
                } else if (childToken.type === tokenTypes.groupConstructImnsx || childToken.type === tokenTypes.groupConstructImnsxMisc) {
                    // ?imnsx-imnsx:
                    var imnsxPostfixLen = childToken.type === tokenTypes.groupConstructImnsx ? 1 : 0;
                    var imnsxExprLen = childToken.length - 1 - imnsxPostfixLen; // - prefix - postfix
                    var imnsxVal = true;
                    var ch;
                    var i;

                    for (i = 1; i <= imnsxExprLen; i++) {
                        ch = childToken.value[i];

                        if (ch === "-") {
                            imnsxVal = false;
                        } else if (ch === "i") {
                            constructs.isIgnoreCase = imnsxVal;
                        } else if (ch === "m") {
                            constructs.isMultiline = imnsxVal;
                        } else if (ch === "n") {
                            constructs.isExplicitCapture = imnsxVal;
                        } else if (ch === "s") {
                            constructs.isSingleLine = imnsxVal;
                        } else if (ch === "x") {
                            constructs.isIgnoreWhitespace = imnsxVal;
                        }
                    }
                }

                return constructs;
            },

            _validateGroupName: function (name) {
                if (!name || !name.length) {
                    throw new System.ArgumentException.$ctor1("Invalid group name: Group names must begin with a word character.");
                }

                var isDigit = name[0] >= "0" && name[0] <= "9";

                if (isDigit) {
                    var scope = System.Text.RegularExpressions.RegexEngineParser;
                    var res = scope._matchChars(name, 0, name.length, scope._decSymbols);

                    if (res.matchLength !== name.length) {
                        throw new System.ArgumentException.$ctor1("Invalid group name: Group names must begin with a word character.");
                    }
                }

                return {
                    isNumberName: isDigit
                };
            },

            _fillBalancingGroupInfo: function (groups, sparseSettings) {
                var group;
                var i;

                // Assign name or id:
                for (i = 0; i < groups.length; i++) {
                    group = groups[i];

                    if (group.constructs.name2 != null) {
                        group.isBalancing = true;

                        group.balancingSlotId = sparseSettings.getPackedSlotIdBySlotName(group.constructs.name2);

                        if (group.balancingSlotId == null) {
                            throw new System.ArgumentException.$ctor1("Reference to undefined group name '" + group.constructs.name2 + "'.");
                        }
                    }
                }
            },

            _preTransformBackrefTokens: function (pattern, tokens, sparseSettings) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;

                var groupNumber;
                var octalCharToken;
                var extraLength;
                var literalToken;
                var token;
                var i;

                for (i = 0; i < tokens.length; i++) {
                    token = tokens[i];

                    if (token.type === tokenTypes.escBackrefNumber) {
                        groupNumber = token.data.number;

                        if (groupNumber >= 1 && sparseSettings.getPackedSlotIdBySlotNumber(groupNumber) != null) {
                            // Expressions from \10 and greater are considered backreferences
                            // if there is a group corresponding to that number;
                            // otherwise, they are interpreted as octal codes.
                            continue; // validated
                        }

                        if (groupNumber <= 9) {
                            // The expressions \1 through \9 are always interpreted as backreferences, and not as octal codes.
                            throw new System.ArgumentException.$ctor1("Reference to undefined group number " + groupNumber.toString() + ".");
                        }

                        // Otherwise, transform the token to OctalNumber:
                        octalCharToken = scope._parseOctalCharToken(token.value, 0, token.length);

                        if (octalCharToken == null) {
                            throw new System.ArgumentException.$ctor1("Unrecognized escape sequence " + token.value.slice(0, 2) + ".");
                        }

                        extraLength = token.length - octalCharToken.length;
                        scope._modifyPatternToken(token, pattern, tokenTypes.escCharOctal, null, octalCharToken.length);
                        token.data = octalCharToken.data;

                        if (extraLength > 0) {
                            literalToken = scope._createPatternToken(pattern, tokenTypes.literal, token.index + token.length, extraLength);
                            tokens.splice(i + 1, 0, literalToken);
                        }
                    }

                    if (token.children && token.children.length) {
                        scope._preTransformBackrefTokens(pattern, token.children, sparseSettings);
                    }
                }
            },

            _updateGroupDescriptors: function (tokens, parentIndex) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;
                var group;
                var token;
                var quantCandidateToken;
                var childrenValue;
                var childrenIndex;
                var i;

                var index = parentIndex || 0;

                for (i = 0; i < tokens.length; i++) {
                    token = tokens[i];
                    token.index = index;

                    // Calculate children indexes/lengths to update parent length:
                    if (token.children) {
                        childrenIndex = token.childrenPostfix.length;
                        scope._updateGroupDescriptors(token.children, index + childrenIndex);

                        // Update parent value if children have been changed:
                        childrenValue = scope._constructPattern(token.children);
                        token.value = token.childrenPrefix + childrenValue + token.childrenPostfix;
                        token.length = token.value.length;
                    }

                    // Update group information:
                    if (token.type === tokenTypes.group && token.group) {
                        group = token.group;
                        group.exprIndex = token.index;
                        group.exprLength = token.length;

                        if (i + 1 < tokens.length) {
                            quantCandidateToken = tokens[i + 1];

                            if (quantCandidateToken.type === tokenTypes.quantifier ||
                                quantCandidateToken.type === tokenTypes.quantifierN ||
                                quantCandidateToken.type === tokenTypes.quantifierNM) {
                                group.quantifier = quantCandidateToken.value;
                            }
                        }

                        group.expr = token.value;
                        group.exprFull = group.expr + (group.quantifier != null ? group.quantifier : "");
                    }

                    // Update current index:
                    index += token.length;
                }
            },

            _constructPattern: function (tokens) {
                var pattern = "";
                var token;
                var i;

                for (i = 0; i < tokens.length; i++) {
                    token = tokens[i];
                    pattern += token.value;
                }

                return pattern;
            },

            _parsePatternImpl: function (pattern, settings, startIndex, endIndex) {
                if (pattern == null) {
                    throw new System.ArgumentNullException.$ctor1("pattern");
                }

                if (startIndex < 0 || startIndex > pattern.length) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("startIndex");
                }

                if (endIndex < startIndex || endIndex > pattern.length) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("endIndex");
                }

                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;
                var tokens = [];
                var token;
                var ch;
                var i;

                i = startIndex;

                while (i < endIndex) {
                    ch = pattern[i];

                    // Ignore whitespaces (if it was requested):
                    if (settings.ignoreWhitespace && scope._whiteSpaceChars.indexOf(ch) >= 0) {
                        ++i;

                        continue;
                    }

                    if (ch === ".") {
                        token = scope._parseDotToken(pattern, i, endIndex);
                    } else if (ch === "\\") {
                        token = scope._parseEscapeToken(pattern, i, endIndex);
                    } else if (ch === "[") {
                        token = scope._parseCharRangeToken(pattern, i, endIndex);
                    } else if (ch === "^" || ch === "$") {
                        token = scope._parseAnchorToken(pattern, i);
                    } else if (ch === "(") {
                        token = scope._parseGroupToken(pattern, settings, i, endIndex);
                    } else if (ch === "|") {
                        token = scope._parseAlternationToken(pattern, i);
                    } else if (ch === "#" && settings.ignoreWhitespace) {
                        token = scope._parseXModeCommentToken(pattern, i, endIndex);
                    } else {
                        token = scope._parseQuantifierToken(pattern, i, endIndex);
                    }

                    if (token == null) {
                        token = scope._createPatternToken(pattern, tokenTypes.literal, i, 1);
                    }

                    if (token != null) {
                        tokens.push(token);
                        i += token.length;
                    }
                }

                return tokens;
            },

            _parseEscapeToken: function (pattern, i, endIndex) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;

                var ch = pattern[i];

                if (ch !== "\\") {
                    return null;
                }

                if (i + 1 >= endIndex) {
                    throw new System.ArgumentException.$ctor1("Illegal \\ at end of pattern.");
                }

                ch = pattern[i + 1];

                // Parse a sequence for a numbered reference ("Backreference Constructs")
                if (ch >= "1" && ch <= "9") {
                    // check if the number is a group backreference
                    var groupDigits = scope._matchChars(pattern, i + 1, endIndex, scope._decSymbols, 3); // assume: there are not more than 999 groups
                    var backrefNumberToken = scope._createPatternToken(pattern, tokenTypes.escBackrefNumber, i, 1 + groupDigits.matchLength); // "\nnn"

                    backrefNumberToken.data = { number: parseInt(groupDigits.match, 10) };

                    return backrefNumberToken;
                }

                // Parse a sequence for "Anchors"
                if (scope._escapedAnchors.indexOf(ch) >= 0) {
                    return scope._createPatternToken(pattern, tokenTypes.escAnchor, i, 2); // "\A" or "\Z" or "\z" or "\G" or "\b" or "\B"
                }

                // Parse a sequence for "Character Escapes" or "Character Classes"
                var escapedCharToken = scope._parseEscapedChar(pattern, i, endIndex);

                if (escapedCharToken != null) {
                    return escapedCharToken;
                }

                // Parse a sequence for a named backreference ("Backreference Constructs")
                if (ch === "k") {
                    if (i + 2 < endIndex) {
                        var nameQuoteCh = pattern[i + 2];

                        if (nameQuoteCh === "'" || nameQuoteCh === "<") {
                            var closingCh = nameQuoteCh === "<" ? ">" : "'";
                            var refNameChars = scope._matchUntil(pattern, i + 3, endIndex, closingCh);

                            if (refNameChars.unmatchLength === 1 && refNameChars.matchLength > 0) {
                                var backrefNameToken = scope._createPatternToken(pattern, tokenTypes.escBackrefName, i, 3 + refNameChars.matchLength + 1); // "\k<Name>" or "\k'Name'"

                                backrefNameToken.data = { name: refNameChars.match };

                                return backrefNameToken;
                            }
                        }
                    }

                    throw new System.ArgumentException.$ctor1("Malformed \\k<...> named back reference.");
                }

                // Temp fix (until IsWordChar is not supported):
                // See more: https://referencesource.microsoft.com/#System/regex/system/text/regularexpressions/RegexParser.cs,1414
                // Unescaping of any of the following ASCII characters results in the character itself
                var code = ch.charCodeAt(0);

                if ((code >= 0 && code < 48) ||
                    (code > 57 && code < 65) ||
                    (code > 90 && code < 95) ||
                    (code === 96) ||
                    (code > 122 && code < 128)) {
                    var token = scope._createPatternToken(pattern, tokenTypes.escChar, i, 2);

                    token.data = { n: code, ch: ch };

                    return token;
                }

                // Unrecognized escape sequence:
                throw new System.ArgumentException.$ctor1("Unrecognized escape sequence \\" + ch + ".");
            },

            _parseOctalCharToken: function (pattern, i, endIndex) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;

                var ch = pattern[i];

                if (ch === "\\" && i + 1 < endIndex) {
                    ch = pattern[i + 1];

                    if (ch >= "0" && ch <= "7") {
                        var octalDigits = scope._matchChars(pattern, i + 1, endIndex, scope._octSymbols, 3);
                        var octalVal = parseInt(octalDigits.match, 8);
                        var token = scope._createPatternToken(pattern, tokenTypes.escCharOctal, i, 1 + octalDigits.matchLength); // "\0" or "\nn" or "\nnn"

                        token.data = { n: octalVal, ch: String.fromCharCode(octalVal) };

                        return token;
                    }
                }

                return null;
            },

            _parseEscapedChar: function (pattern, i, endIndex) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;
                var token;

                var ch = pattern[i];

                if (ch !== "\\" || i + 1 >= endIndex) {
                    return null;
                }

                ch = pattern[i + 1];

                // Parse a sequence for "Character Escapes"
                if (scope._escapedChars.indexOf(ch) >= 0) {
                    if (ch === "x") {
                        var hexDigits = scope._matchChars(pattern, i + 2, endIndex, scope._hexSymbols, 2);

                        if (hexDigits.matchLength !== 2) {
                            throw new System.ArgumentException.$ctor1("Insufficient hexadecimal digits.");
                        }

                        var hexVal = parseInt(hexDigits.match, 16);

                        token = scope._createPatternToken(pattern, tokenTypes.escCharHex, i, 4); // "\xnn"
                        token.data = { n: hexVal, ch: String.fromCharCode(hexVal) };

                        return token;
                    } else if (ch === "c") {
                        if (i + 2 >= endIndex) {
                            throw new System.ArgumentException.$ctor1("Missing control character.");
                        }

                        var ctrlCh = pattern[i + 2];

                        ctrlCh = ctrlCh.toUpperCase();

                        var ctrlIndex = this._controlChars.indexOf(ctrlCh);

                        if (ctrlIndex >= 0) {
                            token = scope._createPatternToken(pattern, tokenTypes.escCharCtrl, i, 3); // "\cx" or "\cX"
                            token.data = { n: ctrlIndex, ch: String.fromCharCode(ctrlIndex) };

                            return token;
                        }

                        throw new System.ArgumentException.$ctor1("Unrecognized control character.");
                    } else if (ch === "u") {
                        var ucodeDigits = scope._matchChars(pattern, i + 2, endIndex, scope._hexSymbols, 4);

                        if (ucodeDigits.matchLength !== 4) {
                            throw new System.ArgumentException.$ctor1("Insufficient hexadecimal digits.");
                        }

                        var ucodeVal = parseInt(ucodeDigits.match, 16);

                        token = scope._createPatternToken(pattern, tokenTypes.escCharUnicode, i, 6); // "\unnnn"
                        token.data = { n: ucodeVal, ch: String.fromCharCode(ucodeVal) };

                        return token;
                    }

                    token = scope._createPatternToken(pattern, tokenTypes.escChar, i, 2); // "\a" or "\b" or "\t" or "\r" or "\v" or "f" or "n" or "e"-

                    var escVal;

                    switch (ch) {
                        case "a":
                            escVal = 7;
                            break;
                        case "b":
                            escVal = 8;
                            break;
                        case "t":
                            escVal = 9;
                            break;
                        case "r":
                            escVal = 13;
                            break;
                        case "v":
                            escVal = 11;
                            break;
                        case "f":
                            escVal = 12;
                            break;
                        case "n":
                            escVal = 10;
                            break;
                        case "e":
                            escVal = 27;
                            break;

                        default:
                            throw new System.ArgumentException.$ctor1("Unexpected escaped char: '" + ch + "'.");
                    }

                    token.data = { n: escVal, ch: String.fromCharCode(escVal) };

                    return token;
                }

                // Parse a sequence for an octal character("Character Escapes")
                if (ch >= "0" && ch <= "7") {
                    var octalCharToken = scope._parseOctalCharToken(pattern, i, endIndex);

                    return octalCharToken;
                }

                // Parse a sequence for "Character Classes"
                if (scope._escapedCharClasses.indexOf(ch) >= 0) {
                    if (ch === "p" || ch === "P") {
                        var catNameChars = scope._matchUntil(pattern, i + 2, endIndex, "}"); // the longest category name is 37 + 2 brackets, but .NET does not limit the value on this step

                        if (catNameChars.matchLength < 2 || catNameChars.match[0] !== "{" || catNameChars.unmatchLength !== 1) {
                            throw new System.ArgumentException.$ctor1("Incomplete \p{X} character escape.");
                        }

                        var catName = catNameChars.match.slice(1);

                        if (scope._unicodeCategories.indexOf(catName) >= 0) {
                            return scope._createPatternToken(pattern, tokenTypes.escCharClassCategory, i, 2 + catNameChars.matchLength + 1); // "\p{Name}" or "\P{Name}"
                        }

                        if (scope._namedCharBlocks.indexOf(catName) >= 0) {
                            return scope._createPatternToken(pattern, tokenTypes.escCharClassBlock, i, 2 + catNameChars.matchLength + 1); // "\p{Name}" or "\P{Name}"
                        }

                        throw new System.ArgumentException.$ctor1("Unknown property '" + catName + "'.");
                    }

                    return scope._createPatternToken(pattern, tokenTypes.escCharClass, i, 2); // "\w" or "\W" or "\s" or "\S" or "\d" or "\D"
                }

                // Some other literal
                if (scope._escapedSpecialSymbols.indexOf(ch) >= 0) {
                    token = scope._createPatternToken(pattern, tokenTypes.escCharOther, i, 2); // "\." or "\$" or ... "\\"
                    token.data = { n: ch.charCodeAt(0), ch: ch };
                    return token;
                }

                return null;
            },

            _parseCharRangeToken: function (pattern, i, endIndex) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;
                var tokens = [];
                var intervalToken;
                var substractToken;
                var token;
                var isNegative = false;
                var noMoreTokenAllowed = false;
                var hasSubstractToken = false;

                var ch = pattern[i];

                if (ch !== "[") {
                    return null;
                }

                var index = i + 1;
                var closeBracketIndex = -1;
                var toInc;

                if (index < endIndex && pattern[index] === "^") {
                    isNegative = true;
                    index ++;
                }

                var startIndex = index;

                while (index < endIndex) {
                    ch = pattern[index];

                    noMoreTokenAllowed = hasSubstractToken;

                    if (ch === "-" && index + 1 < endIndex && pattern[index + 1] === "[") {
                        substractToken = scope._parseCharRangeToken(pattern, index + 1, endIndex);
                        substractToken.childrenPrefix = "-" + substractToken.childrenPrefix;
                        substractToken.length ++;
                        token = substractToken;
                        toInc = substractToken.length;
                        hasSubstractToken = true;
                    } else if (ch === "\\") {
                        token = scope._parseEscapedChar(pattern, index, endIndex);

                        if (token == null) {
                            throw new System.ArgumentException.$ctor1("Unrecognized escape sequence \\" + ch + ".");
                        }
                        toInc = token.length;
                    } else if (ch === "]" && index > startIndex) {
                        closeBracketIndex = index;

                        break;
                    } else {
                        token = scope._createPatternToken(pattern, tokenTypes.literal, index, 1);
                        toInc = 1;
                    }

                    if (noMoreTokenAllowed) {
                        throw new System.ArgumentException.$ctor1("A subtraction must be the last element in a character class.");
                    }

                    // Check for interval:
                    if (tokens.length > 1) {
                        intervalToken = scope._parseCharIntervalToken(pattern, tokens[tokens.length - 2], tokens[tokens.length - 1], token);

                        if (intervalToken != null) {
                            tokens.pop(); //pop Dush
                            tokens.pop(); //pop Interval start
                            token = intervalToken;
                        }
                    }

                    // Add token:
                    if (token != null) {
                        tokens.push(token);
                        index += toInc;
                    }
                }

                if (closeBracketIndex < 0 || tokens.length < 1) {
                    throw new System.ArgumentException.$ctor1("Unterminated [] set.");
                }

                var groupToken;

                if (!isNegative) {
                    groupToken = scope._createPatternToken(pattern, tokenTypes.charGroup, i, 1 + closeBracketIndex - i, tokens, "[", "]");
                } else {
                    groupToken = scope._createPatternToken(pattern, tokenTypes.charNegativeGroup, i, 1 + closeBracketIndex - i, tokens, "[^", "]");
                }

                // Create full range data:
                var ranges = scope._tidyCharRange(tokens);

                groupToken.data = { ranges: ranges };

                if (substractToken != null) {
                    groupToken.data.substractToken = substractToken;
                }

                return groupToken;
            },

            _parseCharIntervalToken: function (pattern, intervalStartToken, dashToken, intervalEndToken) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;

                if (dashToken.type !== tokenTypes.literal || dashToken.value !== "-") {
                    return null;
                }

                if (intervalStartToken.type !== tokenTypes.literal &&
                    intervalStartToken.type !== tokenTypes.escChar &&
                    intervalStartToken.type !== tokenTypes.escCharOctal &&
                    intervalStartToken.type !== tokenTypes.escCharHex &&
                    intervalStartToken.type !== tokenTypes.escCharCtrl &&
                    intervalStartToken.type !== tokenTypes.escCharUnicode &&
                    intervalStartToken.type !== tokenTypes.escCharOther) {
                    return null;
                }

                if (intervalEndToken.type !== tokenTypes.literal &&
                    intervalEndToken.type !== tokenTypes.escChar &&
                    intervalEndToken.type !== tokenTypes.escCharOctal &&
                    intervalEndToken.type !== tokenTypes.escCharHex &&
                    intervalEndToken.type !== tokenTypes.escCharCtrl &&
                    intervalEndToken.type !== tokenTypes.escCharUnicode &&
                    intervalEndToken.type !== tokenTypes.escCharOther) {
                    return null;
                }

                var startN;
                var startCh;

                if (intervalStartToken.type === tokenTypes.literal) {
                    startN = intervalStartToken.value.charCodeAt(0);
                    startCh = intervalStartToken.value;
                } else {
                    startN = intervalStartToken.data.n;
                    startCh = intervalStartToken.data.ch;
                }

                var endN;
                var endCh;

                if (intervalEndToken.type === tokenTypes.literal) {
                    endN = intervalEndToken.value.charCodeAt(0);
                    endCh = intervalEndToken.value;
                } else {
                    endN = intervalEndToken.data.n;
                    endCh = intervalEndToken.data.ch;
                }

                if (startN > endN) {
                    throw new System.NotSupportedException.$ctor1("[x-y] range in reverse order.");
                }

                var index = intervalStartToken.index;
                var length = intervalStartToken.length + dashToken.length + intervalEndToken.length;
                var intervalToken = scope._createPatternToken(pattern, tokenTypes.charInterval, index, length, [intervalStartToken, dashToken, intervalEndToken], "", "");

                intervalToken.data = {
                    startN: startN,
                    startCh: startCh,
                    endN: endN,
                    endCh: endCh
                };

                return intervalToken;
            },

            _tidyCharRange: function (tokens) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;

                var j;
                var k;
                var n;
                var m;
                var token;
                var ranges = [];
                var classTokens = [];

                var range;
                var nextRange;
                var toSkip;

                for (j = 0; j < tokens.length; j++) {
                    token = tokens[j];

                    if (token.type === tokenTypes.literal) {
                        n = token.value.charCodeAt(0);
                        m = n;
                    } else if (token.type === tokenTypes.charInterval) {
                        n = token.data.startN;
                        m = token.data.endN;
                    } else if (token.type === tokenTypes.literal ||
                        token.type === tokenTypes.escChar ||
                        token.type === tokenTypes.escCharOctal ||
                        token.type === tokenTypes.escCharHex ||
                        token.type === tokenTypes.escCharCtrl ||
                        token.type === tokenTypes.escCharUnicode ||
                        token.type === tokenTypes.escCharOther) {
                        n = token.data.n;
                        m = n;
                    } else if (
                        token.type === tokenTypes.charGroup ||
                        token.type === tokenTypes.charNegativeGroup) {
                        continue;
                    } else {
                        classTokens.push(token);
                        continue;
                    }

                    if (ranges.length === 0) {
                        ranges.push({ n: n, m: m });
                        continue;
                    }

                    //TODO: [Performance] Use binary search
                    for (k = 0; k < ranges.length; k++) {
                        if (ranges[k].n > n) {
                            break;
                        }
                    }

                    ranges.splice(k, 0, { n: n, m: m });
                }

                // Combine ranges:
                for (j = 0; j < ranges.length; j++) {
                    range = ranges[j];

                    toSkip = 0;

                    for (k = j + 1; k < ranges.length; k++) {
                        nextRange = ranges[k];

                        if (nextRange.n > 1 + range.m) {
                            break;
                        }

                        toSkip++;

                        if (nextRange.m > range.m) {
                            range.m = nextRange.m;
                        }
                    }
                    if (toSkip > 0) {
                        ranges.splice(j + 1, toSkip);
                    }
                }

                if (classTokens.length > 0) {
                    var charClassStr = "[" + scope._constructPattern(classTokens) + "]";
                    ranges.charClassToken = scope._createPatternToken(charClassStr, tokenTypes.charGroup, 0, charClassStr.length, tokens, "[", "]");
                }

                return ranges;
            },

            _parseDotToken: function (pattern, i) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;

                var ch = pattern[i];

                if (ch !== ".") {
                    return null;
                }

                return scope._createPatternToken(pattern, tokenTypes.escCharClassDot, i, 1);
            },

            _parseAnchorToken: function (pattern, i) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;

                var ch = pattern[i];

                if (ch !== "^" && ch !== "$") {
                    return null;
                }

                return scope._createPatternToken(pattern, tokenTypes.anchor, i, 1);
            },

            _updateSettingsFromConstructs: function (settings, constructs) {
                if (constructs.isIgnoreWhitespace != null) {
                    settings.ignoreWhitespace = constructs.isIgnoreWhitespace;
                }

                if (constructs.isExplicitCapture != null) {
                    settings.explicitCapture = constructs.isExplicitCapture;
                }
            },

            _parseGroupToken: function (pattern, settings, i, endIndex) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;
                var groupSettings = {
                    ignoreWhitespace: settings.ignoreWhitespace,
                    explicitCapture: settings.explicitCapture
                };

                var ch = pattern[i];

                if (ch !== "(") {
                    return null;
                }

                var bracketLvl = 1;
                var sqBracketCtx = false;
                var bodyIndex = i + 1;
                var closeBracketIndex = -1;

                var isComment = false;
                var isAlternation = false;
                var isInlineOptions = false;
                var isImnsxConstructed = false;
                var isNonCapturingExplicit = false;

                var grConstructs = null;

                // Parse the Group construct, if any:
                var constructToken = scope._parseGroupConstructToken(pattern, groupSettings, i + 1, endIndex);

                if (constructToken != null) {
                    grConstructs = this._fillGroupConstructs(constructToken);

                    bodyIndex += constructToken.length;

                    if (constructToken.type === tokenTypes.commentInline) {
                        isComment = true;
                    } else if (constructToken.type === tokenTypes.alternationGroupCondition) {
                        isAlternation = true;
                    } else if (constructToken.type === tokenTypes.groupConstructImnsx) {
                        this._updateSettingsFromConstructs(groupSettings, grConstructs);
                        isImnsxConstructed = true;
                    } else if (constructToken.type === tokenTypes.groupConstructImnsxMisc) {
                        this._updateSettingsFromConstructs(settings, grConstructs); // parent settings!
                        isInlineOptions = true;
                    }
                }

                if (groupSettings.explicitCapture && (grConstructs == null || grConstructs.name1 == null)) {
                    isNonCapturingExplicit = true;
                }

                var index = bodyIndex;

                while (index < endIndex) {
                    ch = pattern[index];

                    if (ch === "\\") {
                        index ++; // skip the escaped char
                    } else if (ch === "[") {
                        sqBracketCtx = true;
                    } else if (ch === "]" && sqBracketCtx) {
                        sqBracketCtx = false;
                    } else if (!sqBracketCtx) {
                        if (ch === "(" && !isComment) {
                            ++bracketLvl;
                        } else if (ch === ")") {
                            --bracketLvl;

                            if (bracketLvl === 0) {
                                closeBracketIndex = index;
                                break;
                            }
                        }
                    }

                    ++index;
                }

                var result = null;

                if (isComment) {
                    if (closeBracketIndex < 0) {
                        throw new System.ArgumentException.$ctor1("Unterminated (?#...) comment.");
                    }

                    result = scope._createPatternToken(pattern, tokenTypes.commentInline, i, 1 + closeBracketIndex - i);
                } else {
                    if (closeBracketIndex < 0) {
                        throw new System.ArgumentException.$ctor1("Not enough )'s.");
                    }

                    // Parse the "Body" of the group
                    var innerTokens = scope._parsePatternImpl(pattern, groupSettings, bodyIndex, closeBracketIndex);

                    if (constructToken != null) {
                        innerTokens.splice(0, 0, constructToken);
                    }

                    // If there is an Alternation expression, treat the group as Alternation group
                    if (isAlternation) {
                        var innerTokensLen = innerTokens.length;
                        var innerToken;
                        var j;

                        // Check that there is only 1 alternation symbol:
                        var altCount = 0;

                        for (j = 0; j < innerTokensLen; j++) {
                            innerToken = innerTokens[j];

                            if (innerToken.type === tokenTypes.alternation) {
                                ++altCount;

                                if (altCount > 1) {
                                    throw new System.ArgumentException.$ctor1("Too many | in (?()|).");
                                }
                            }
                        }

                        if (altCount === 0) {
                            // Though .NET works with this case, it ends up with unexpected result. Let's avoid this behaviour.
                            throw new System.NotSupportedException.$ctor1("Alternation group without | is not supported.");
                        }

                        var altGroupToken = scope._createPatternToken(pattern, tokenTypes.alternationGroup, i, 1 + closeBracketIndex - i, innerTokens, "(", ")");

                        result = altGroupToken;
                    } else {
                        // Create Group token:
                        var tokenType = tokenTypes.group;

                        if (isInlineOptions) {
                            tokenType = tokenTypes.groupImnsxMisc;
                        } else if (isImnsxConstructed) {
                            tokenType = tokenTypes.groupImnsx;
                        }

                        var groupToken = scope._createPatternToken(pattern, tokenType, i, 1 + closeBracketIndex - i, innerTokens, "(", ")");

                        groupToken.localSettings = groupSettings;
                        result = groupToken;
                    }
                }

                if (isNonCapturingExplicit) {
                    result.isNonCapturingExplicit = true;
                }

                return result;
            },

            _parseGroupConstructToken: function (pattern, settings, i, endIndex) {
                // ?<name1>
                // ?'name1'
                // ?<name1-name2>
                // ?'name1-name2'
                // ?:
                // ?imnsx-imnsx
                // ?=
                // ?!
                // ?<=
                // ?<!
                // ?>
                // ?#

                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;

                var ch = pattern[i];

                if (ch !== "?" || i + 1 >= endIndex) {
                    return null;
                }

                ch = pattern[i + 1];

                if (ch === ":" || ch === "=" || ch === "!" || ch === ">") {
                    return scope._createPatternToken(pattern, tokenTypes.groupConstruct, i, 2);
                }

                if (ch === "#") {
                    return scope._createPatternToken(pattern, tokenTypes.commentInline, i, 2);
                }

                if (ch === "(") {
                    return scope._parseAlternationGroupConditionToken(pattern, settings, i, endIndex);
                }

                if (ch === "<" && i + 2 < endIndex) {
                    var ch3 = pattern[i + 2];

                    if (ch3 === "=" || ch3 === "!") {
                        return scope._createPatternToken(pattern, tokenTypes.groupConstruct, i, 3);
                    }
                }

                if (ch === "<" || ch === "'") {
                    var closingCh = ch === "<" ? ">" : ch;
                    var nameChars = scope._matchUntil(pattern, i + 2, endIndex, closingCh);

                    if (nameChars.unmatchLength !== 1 || nameChars.matchLength === 0) {
                        throw new System.ArgumentException.$ctor1("Unrecognized grouping construct.");
                    }

                    var nameFirstCh = nameChars.match.slice(0, 1);

                    if ("`~@#$%^&*()+{}[]|\\/|'\";:,.?".indexOf(nameFirstCh) >= 0) {
                        // TODO: replace the "black list" of wrong characters with char class check:
                        // According to UTS#18 Unicode Regular Expressions (http://www.unicode.org/reports/tr18/)
                        // RL 1.4 Simple Word Boundaries  The class of <word_character> includes all Alphabetic
                        // values from the Unicode character database, from UnicodeData.txt [UData], plus the U+200C
                        // ZERO WIDTH NON-JOINER and U+200D ZERO WIDTH JOINER.
                        throw new System.ArgumentException.$ctor1("Invalid group name: Group names must begin with a word character.");
                    }

                    return scope._createPatternToken(pattern, tokenTypes.groupConstructName, i, 2 + nameChars.matchLength + 1);
                }

                var imnsxChars = scope._matchChars(pattern, i + 1, endIndex, "imnsx-");

                if (imnsxChars.matchLength > 0 && (imnsxChars.unmatchCh === ":" || imnsxChars.unmatchCh === ")")) {
                    var imnsxTokenType = imnsxChars.unmatchCh === ":" ? tokenTypes.groupConstructImnsx : tokenTypes.groupConstructImnsxMisc;
                    var imnsxPostfixLen = imnsxChars.unmatchCh === ":" ? 1 : 0;

                    return scope._createPatternToken(pattern, imnsxTokenType, i, 1 + imnsxChars.matchLength + imnsxPostfixLen);
                }

                throw new System.ArgumentException.$ctor1("Unrecognized grouping construct.");
            },

            _parseQuantifierToken: function (pattern, i, endIndex) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;
                var token = null;

                var ch = pattern[i];

                if (ch === "*" || ch === "+" || ch === "?") {
                    token = scope._createPatternToken(pattern, tokenTypes.quantifier, i, 1);
                    token.data = { val: ch };
                } else if (ch === "{") {
                    var dec1Chars = scope._matchChars(pattern, i + 1, endIndex, scope._decSymbols);

                    if (dec1Chars.matchLength !== 0) {
                        if (dec1Chars.unmatchCh === "}") {
                            token = scope._createPatternToken(pattern, tokenTypes.quantifierN, i, 1 + dec1Chars.matchLength + 1);
                            token.data = {
                                n: parseInt(dec1Chars.match, 10)
                            };
                        } else if (dec1Chars.unmatchCh === ",") {
                            var dec2Chars = scope._matchChars(pattern, dec1Chars.unmatchIndex + 1, endIndex, scope._decSymbols);

                            if (dec2Chars.unmatchCh === "}") {
                                token = scope._createPatternToken(pattern, tokenTypes.quantifierNM, i, 1 + dec1Chars.matchLength + 1 + dec2Chars.matchLength + 1);
                                token.data = {
                                    n: parseInt(dec1Chars.match, 10),
                                    m: null
                                };

                                if (dec2Chars.matchLength !== 0) {
                                    token.data.m = parseInt(dec2Chars.match, 10);

                                    if (token.data.n > token.data.m) {
                                        throw new System.ArgumentException.$ctor1("Illegal {x,y} with x > y.");
                                    }
                                }
                            }
                        }
                    }
                }

                if (token != null) {
                    var nextChIndex = i + token.length;

                    if (nextChIndex < endIndex) {
                        var nextCh = pattern[nextChIndex];

                        if (nextCh === "?") {
                            this._modifyPatternToken(token, pattern, token.type, token.index, token.length + 1);
                            token.data.isLazy = true;
                        }
                    }
                }

                return token;
            },

            _parseAlternationToken: function (pattern, i) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;

                var ch = pattern[i];

                if (ch !== "|") {
                    return null;
                }

                return scope._createPatternToken(pattern, tokenTypes.alternation, i, 1);
            },

            _parseAlternationGroupConditionToken: function (pattern, settings, i, endIndex) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;
                var constructToken;
                var childToken;
                var data = null;

                var ch = pattern[i];

                if (ch !== "?" || i + 1 >= endIndex || pattern[i + 1] !== "(") {
                    return null;
                }

                // Parse Alternation condition as a group:
                var expr = scope._parseGroupToken(pattern, settings, i + 1, endIndex);

                if (expr == null) {
                    return null;
                }

                if (expr.type === tokenTypes.commentInline) {
                    throw new System.ArgumentException.$ctor1("Alternation conditions cannot be comments.");
                }

                var children = expr.children;

                if (children && children.length) {
                    constructToken = children[0];

                    if (constructToken.type === tokenTypes.groupConstructName) {
                        throw new System.ArgumentException.$ctor1("Alternation conditions do not capture and cannot be named.");
                    }

                    if (constructToken.type === tokenTypes.groupConstruct || constructToken.type === tokenTypes.groupConstructImnsx) {
                        childToken = scope._findFirstGroupWithoutConstructs(children);

                        if (childToken != null) {
                            childToken.isEmptyCapturing = true;
                        }
                    }

                    if (constructToken.type === tokenTypes.literal) {
                        var literalVal = expr.value.slice(1, expr.value.length - 1);
                        var isDigit = literalVal[0] >= "0" && literalVal[0] <= "9";

                        if (isDigit) {
                            var res = scope._matchChars(literalVal, 0, literalVal.length, scope._decSymbols);

                            if (res.matchLength !== literalVal.length) {
                                throw new System.ArgumentException.$ctor1("Malformed Alternation group number: " + literalVal + ".");
                            }

                            var number = parseInt(literalVal, 10);
                            data = { number: number };
                        } else {
                            data = { name: literalVal };
                        }
                    }
                }

                // Add "Noncapturing" construct if there are no other ones.
                if (!children.length || (children[0].type !== tokenTypes.groupConstruct && children[0].type !== tokenTypes.groupConstructImnsx)) {
                    constructToken = scope._createPatternToken("?:", tokenTypes.groupConstruct, 0, 2);
                    children.splice(0, 0, constructToken);
                }

                // Transform Group token to Alternation expression token:
                var token = scope._createPatternToken(pattern, tokenTypes.alternationGroupCondition, expr.index - 1, 1 + expr.length, [expr], "?", "");

                if (data != null) {
                    token.data = data;
                }

                return token;
            },

            _findFirstGroupWithoutConstructs: function (tokens) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;
                var result = null;
                var token;
                var i;

                for (i = 0; i < tokens.length; ++i) {
                    token = tokens[i];

                    if (token.type === tokenTypes.group && token.children && token.children.length) {
                        if (token.children[0].type !== tokenTypes.groupConstruct && token.children[0].type !== tokenTypes.groupConstructImnsx) {
                            result = token;

                            break;
                        }

                        if (token.children && token.children.length) {
                            result = scope._findFirstGroupWithoutConstructs(token.children);

                            if (result != null) {
                                break;
                            }
                        }
                    }
                }

                return result;
            },

            _parseXModeCommentToken: function (pattern, i, endIndex) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var tokenTypes = scope.tokenTypes;

                var ch = pattern[i];

                if (ch !== "#") {
                    return null;
                }

                var index = i + 1;

                while (index < endIndex) {
                    ch = pattern[index];
                    ++index; // index should be changed before breaking

                    if (ch === "\n") {
                        break;
                    }
                }

                return scope._createPatternToken(pattern, tokenTypes.commentXMode, i, index - i);
            },

            _createLiteralToken: function (body) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;
                var token = scope._createPatternToken(body, scope.tokenTypes.literal, 0, body.length);

                return token;
            },

            _createPositiveLookaheadToken: function (body, settings) {
                var scope = System.Text.RegularExpressions.RegexEngineParser;

                var pattern = "(?=" + body + ")";
                var groupToken = scope._parseGroupToken(pattern, settings, 0, pattern.length);

                return groupToken;
            },

            _createPatternToken: function (pattern, type, i, len, innerTokens, innerTokensPrefix, innerTokensPostfix) {
                var token = {
                    type: type,
                    index: i,
                    length: len,
                    value: pattern.slice(i, i + len)
                };

                if (innerTokens != null && innerTokens.length > 0) {
                    token.children = innerTokens;
                    token.childrenPrefix = innerTokensPrefix;
                    token.childrenPostfix = innerTokensPostfix;
                }

                return token;
            },

            _modifyPatternToken: function (token, pattern, type, i, len) {
                if (type != null) {
                    token.type = type;
                }

                if (i != null || len != null) {
                    if (i != null) {
                        token.index = i;
                    }

                    if (len != null) {
                        token.length = len;
                    }

                    token.value = pattern.slice(token.index, token.index + token.length);
                }
            },

            _updatePatternToken: function (token, type, i, len, value) {
                token.type = type;
                token.index = i;
                token.length = len;
                token.value = value;
            },

            _matchChars: function (str, startIndex, endIndex, allowedChars, maxLength) {
                var res = {
                    match: "",
                    matchIndex: -1,
                    matchLength: 0,
                    unmatchCh: "",
                    unmatchIndex: -1,
                    unmatchLength: 0
                };

                var index = startIndex;
                var ch;

                if (maxLength != null && maxLength >= 0) {
                    endIndex = startIndex + maxLength;
                }

                while (index < endIndex) {
                    ch = str[index];

                    if (allowedChars.indexOf(ch) < 0) {
                        res.unmatchCh = ch;
                        res.unmatchIndex = index;
                        res.unmatchLength = 1;

                        break;
                    }

                    index++;
                }

                if (index > startIndex) {
                    res.match = str.slice(startIndex, index);
                    res.matchIndex = startIndex;
                    res.matchLength = index - startIndex;
                }

                return res;
            },

            _matchUntil: function (str, startIndex, endIndex, unallowedChars, maxLength) {
                var res = {
                    match: "",
                    matchIndex: -1,
                    matchLength: 0,
                    unmatchCh: "",
                    unmatchIndex: -1,
                    unmatchLength: 0
                };

                var index = startIndex;
                var ch;

                if (maxLength != null && maxLength >= 0) {
                    endIndex = startIndex + maxLength;
                }

                while (index < endIndex) {
                    ch = str[index];

                    if (unallowedChars.indexOf(ch) >= 0) {
                        res.unmatchCh = ch;
                        res.unmatchIndex = index;
                        res.unmatchLength = 1;

                        break;
                    }

                    index++;
                }

                if (index > startIndex) {
                    res.match = str.slice(startIndex, index);
                    res.matchIndex = startIndex;
                    res.matchLength = index - startIndex;
                }

                return res;
            }
        }
    });
