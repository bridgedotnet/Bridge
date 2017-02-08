    Bridge.define("System.Text.RegularExpressions.Capture", {
        _text: "",
        _index: 0,
        _length: 0,

        ctor: function (text, i, l) {
            this.$initialize();
            this._text = text;
            this._index = i;
            this._length = l;
        },

        getIndex: function () {
            return this._index;
        },

        getLength: function () {
            return this._length;
        },

        getValue: function () {
            return this._text.substr(this._index, this._length);
        },

        toString: function () {
            return this.getValue();
        },

        _getOriginalString: function () {
            return this._text;
        },

        _getLeftSubstring: function () {
            return this._text.slice(0, _index);
        },

        _getRightSubstring: function () {
            return this._text.slice(this._index + this._length, this._text.length);
        }
    });
