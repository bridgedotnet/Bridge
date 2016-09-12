Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define("Classes.Animal", {
        name: null,
        ctor: function () {
            this.$initialize();
            this.name = "Animal";
        },
        $ctor1: function (name) {
            this.$initialize();
            this.name = name;
        },
        getName: function () {
            return this.name;
        },
        move: function () {
            return 1;
        }
    });

    Bridge.define("Classes.MovePoint", {
        statics: {
            move: function (p, dx, dy) {
                return Classes.StaticClass.move(p.$clone(), dx, dy);
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
        move: function (dx, dy) {
            this.setPoint(Classes.MovePoint.move(this.getPoint().$clone(), dx, dy).$clone());
        }
    });

    Bridge.define("Classes.Point", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Classes.Point(); }
        },
        x: 0,
        y: 0,
        $ctor1: function (x, y) {
            this.$initialize();
            this.x = x;
            this.y = y;
        },
        ctor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1852403652;
            hash = hash * 23 + (this.x == null ? 0 : Bridge.getHashCode(this.x));
            hash = hash * 23 + (this.y == null ? 0 : Bridge.getHashCode(this.y));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Classes.Point)) {
                return false;
            }
            return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
        },
        $clone: function (to) {
            var s = to || new Classes.Point();
            s.x = this.x;
            s.y = this.y;
            return s;
        }
    });

    Bridge.define("Classes.StaticClass", {
        statics: {
            move: function (p, dx, dy) {
                return new Classes.Point.$ctor1(((p.x + dx) | 0), ((p.y + dy) | 0));
            }
        }
    });

    Bridge.define("Classes.Dog", {
        inherits: [Classes.Animal],
        ctor: function (name) {
            this.$initialize();
            Classes.Animal.$ctor1.call(this, name);
        },
        move$1: function () {
            return 20;
        }
    });

    Bridge.define("Classes.Employee", {
        inherits: [Classes.Animal],
        name$1: null,
        id: 0,
        ctor: function (name, id) {
            this.$initialize();
            Classes.Animal.$ctor1.call(this, name);
            this.name$1 = name;
            this.id = id;
        }
    });

    Bridge.define("Classes.Snake", {
        inherits: [Classes.Animal],
        ctor: function (name) {
            this.$initialize();
            Classes.Animal.$ctor1.call(this, name);
        },
        move: function () {
            return 5;
        }
    });
});
