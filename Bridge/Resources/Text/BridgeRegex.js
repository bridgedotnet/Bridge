    (function () {
        var specials = [
                // order matters for these
                  "-"
                , "["
                , "]"
                // order doesn't matter for any of these
                , "/"
                , "{"
                , "}"
                , "("
                , ")"
                , "*"
                , "+"
                , "?"
                , "."
                , "\\"
                , "^"
                , "$"
                , "|"
        ],

        regex = RegExp("[" + specials.join("\\") + "]", "g"),

        regexpEscape = function (s) {
            return s.replace(regex, "\\$&");
        };

        Bridge.regexpEscape = regexpEscape;
    })();
