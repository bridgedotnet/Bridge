Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define("Classes.Animal", {
        Name: null,
        ctor: function () {
            this.$initialize();
            this.Name = "Animal";
        },
        $ctor1: function (name) {
            this.$initialize();
            this.Name = name;
        },
        GetName: function () {
            return this.Name;
        },
        Move: function () {
            return 1;
        }
    });

    Bridge.define("Classes.MovePoint", {
        statics: {
            Move: function (p, dx, dy) {
                return Classes.StaticClass.Move(p.$clone(), dx, dy);
            }
        },
        config: {
            properties: {
                Point: null
            },
            init: function () {
                this.Point = new Classes.Point();
            }
        },
        Move: function (dx, dy) {
            this.Point = Classes.MovePoint.Move(this.Point.$clone(), dx, dy);
        }
    });

    Bridge.define("Classes.Point", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Classes.Point(); }
        },
        X: 0,
        Y: 0,
        $ctor1: function (x, y) {
            this.$initialize();
            this.X = x;
            this.Y = y;
        },
        ctor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var h = Bridge.addHash([1852403652, this.X, this.Y]);
            return h;
        },
        equals: function (o) {
            if (!Bridge.is(o, Classes.Point)) {
                return false;
            }
            return Bridge.equals(this.X, o.X) && Bridge.equals(this.Y, o.Y);
        },
        $clone: function (to) {
            var s = to || new Classes.Point();
            s.X = this.X;
            s.Y = this.Y;
            return s;
        }
    });

    Bridge.define("Classes.StaticClass", {
        statics: {
            Move: function (p, dx, dy) {
                return new Classes.Point.$ctor1(((p.X + dx) | 0), ((p.Y + dy) | 0));
            }
        }
    });

    Bridge.define("Classes.Dog", {
        inherits: [Classes.Animal],
        ctor: function (name) {
            this.$initialize();
            Classes.Animal.$ctor1.call(this, name);
        },
        Move$1: function () {
            return 20;
        }
    });

    Bridge.define("Classes.Employee", {
        inherits: [Classes.Animal],
        Name$1: null,
        Id: 0,
        ctor: function (name, id) {
            this.$initialize();
            Classes.Animal.$ctor1.call(this, name);
            this.Name$1 = name;
            this.Id = id;
        }
    });

    Bridge.define("Classes.Snake", {
        inherits: [Classes.Animal],
        ctor: function (name) {
            this.$initialize();
            Classes.Animal.$ctor1.call(this, name);
        },
        Move: function () {
            return 5;
        }
    });
});
