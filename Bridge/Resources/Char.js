// @source Char.js

(function () {
    var chr = {
        isDigit: function (str) {
            return str >= '0' && str <= '9';
        }
    };

    Bridge.Char = chr;
})();
