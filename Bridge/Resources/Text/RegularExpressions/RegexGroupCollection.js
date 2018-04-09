    Bridge.define("System.Text.RegularExpressions.GroupCollection", {
        inherits: function () {
            return [System.Collections.ICollection];
        },

        config: {
            properties: {
                Count: {
                    get: function () {
                        return this._match._matchcount.length;
                    }
                }
            },
            alias: [
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "getCount", "System$Collections$ICollection$getCount",
            "Count", "System$Collections$ICollection$Count",
            "copyTo", "System$Collections$ICollection$copyTo"
            ]
        },

        _match: null,
        _captureMap: null,
        _groups: null,

        ctor: function (match, caps) {
            this.$initialize();
            this._match = match;
            this._captureMap = caps;
        },

        getSyncRoot: function () {
            return this._match;
        },

        getIsSynchronized: function () {
            return false;
        },

        getIsReadOnly: function () {
            return true;
        },

        getCount: function () {
            return this._match._matchcount.length;
        },

        get: function (groupnum) {
            return this._getGroup(groupnum);
        },

        getByName: function (groupname) {
            if (this._match._regex == null) {
                return System.Text.RegularExpressions.Group.getEmpty();
            }

            var groupnum = this._match._regex.groupNumberFromName(groupname);

            return this._getGroup(groupnum);
        },

        copyTo: function (array, arrayIndex) {
            if (array == null) {
                throw new System.ArgumentNullException.$ctor1("array");
            }

            var count = this.getCount();

            if (array.length < arrayIndex + count) {
                throw new System.IndexOutOfRangeException();
            }

            var group;
            var i;
            var j;

            for (i = arrayIndex, j = 0; j < count; i++, j++) {
                group = this._getGroup(j);
                System.Array.set(array, group, [i]);
            }
        },

        GetEnumerator: function () {
            return new System.Text.RegularExpressions.GroupEnumerator(this);
        },

        _getGroup: function (groupnum) {
            var group;

            if (this._captureMap != null) {
                var num = this._captureMap[groupnum];

                if (num == null) {
                    group = System.Text.RegularExpressions.Group.getEmpty();
                } else {
                    group = this._getGroupImpl(num);
                }
            } else {
                if (groupnum >= this._match._matchcount.length || groupnum < 0) {
                    group = System.Text.RegularExpressions.Group.getEmpty();
                } else {
                    group = this._getGroupImpl(groupnum);
                }
            }

            return group;
        },

        _getGroupImpl: function (groupnum) {
            if (groupnum === 0) {
                return this._match;
            }

            this._ensureGroupsInited();

            return this._groups[groupnum];
        },

        _ensureGroupsInited: function () {
            // Construct all the Group objects the first time GetGroup is called
            if (this._groups == null) {
                var groups = [];

                groups.length = this._match._matchcount.length;

                if (groups.length > 0) {
                    groups[0] = this._match;
                }

                var matchText;
                var matchCaps;
                var matchCapcount;
                var i;

                for (i = 0; i < groups.length - 1; i++) {
                    matchText = this._match._text;
                    matchCaps = this._match._matches[i + 1];
                    matchCapcount = this._match._matchcount[i + 1];
                    groups[i + 1] = new System.Text.RegularExpressions.Group(matchText, matchCaps, matchCapcount);
                }

                this._groups = groups;
            }
        }
    });

    Bridge.define("System.Text.RegularExpressions.GroupEnumerator", {
        inherits: function () {
            return [System.Collections.IEnumerator];
        },

        config: {
            properties: {
                Current: {
                    get: function () {
                        return this.getCurrent();
                    }
                }
            },

            alias: [
                "getCurrent", "System$Collections$IEnumerator$getCurrent",
                "moveNext", "System$Collections$IEnumerator$moveNext",
                "reset", "System$Collections$IEnumerator$reset",
                "Current", "System$Collections$IEnumerator$Current"
            ]
        },

        _groupColl: null,
        _curindex: 0,

        ctor: function (groupColl) {
            this.$initialize();
            this._curindex = -1;
            this._groupColl = groupColl;
        },

        moveNext: function () {
            var size = this._groupColl.getCount();

            if (this._curindex >= size) {
                return false;
            }

            this._curindex++;

            return (this._curindex < size);
        },

        getCurrent: function () {
            return this.getCapture();
        },

        getCapture: function () {
            if (this._curindex < 0 || this._curindex >= this._groupColl.getCount()) {
                throw new System.InvalidOperationException.$ctor1("Enumeration has either not started or has already finished.");
            }

            return this._groupColl.get(this._curindex);
        },

        reset: function () {
            this._curindex = -1;
        }
    });
