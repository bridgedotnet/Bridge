Bridge.define("Bridge.GeneratorEnumerable", {
    inherits: [System.Collections.IEnumerable],
    config: {
        alias: [
        "getEnumerator", "System$Collections$IEnumerable$getEnumerator"
        ]
    },
    ctor: function(action)
    {
        this.$initialize();
        this.getEnumerator = action;
        this.System$Collections$IEnumerable$getEnumerator = action;
    },
    getEnumerator: function()
    {
        return null;
    }
});

Bridge.define("Bridge.GeneratorEnumerator", {
    inherits: [System.Collections.IEnumerator],
    current: null,
    step: 0,
    config: {
        alias: [
        "getCurrent", "System$Collections$IEnumerator$getCurrent",
        "moveNext", "System$Collections$IEnumerator$moveNext",
        "reset", "System$Collections$IEnumerator$reset"
        ]
    },
    ctor: function(action)
    {
        this.$initialize();
        this.moveNext = action;
        this.System$Collections$IEnumerator$moveNext = action;
    },
    getCurrent: function()
    {
        return this.current;
    },
    moveNext: function()
    {
        return false;
    },
    reset: function()
    {
        throw new System.NotSupportedException();
    }
});