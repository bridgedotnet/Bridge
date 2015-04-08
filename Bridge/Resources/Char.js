// @source Char.js

(function () {
    var chr = {
        isDigit: function (str) {
            if (str.length > 1) {
                return false;
            }

            return str >= "0" && str <= "9";
        }
    };

    Bridge.Char = chr;
})();
