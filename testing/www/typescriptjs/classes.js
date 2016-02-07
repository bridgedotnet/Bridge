/* global Bridge */

(function (globals) {
    "use strict";

    Bridge.define('Classes.Animal', {
        name: null,
        constructor: function () {
            this.name = "Animal";
        },
        constructor$1: function (name) {
            this.name = name;
        },
        getName: function () {
            return this.name;
        },
        move: function () {
            return 1;
        }
    });
    
    Bridge.define('Classes.Point', {
        x: 0,
        y: 0,
        constructor$1: function (x, y) {
            this.x = x;
            this.y = y;
        },
        constructor: function () {
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + (this.x == null ? 0 : Bridge.getHashCode(this.x));
            hash = hash * 23 + (this.y == null ? 0 : Bridge.getHashCode(this.y));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o,Classes.Point)) {
                return false;
            }
            return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
        },
        $clone: function (to) {
            var s = to || new Classes.Point();
            s.x = this.x;
            s.y = this.y;
            return s;
        },
        statics: {
            getDefaultValue: function () { return new Classes.Point(); }
        }
    });
    
    Bridge.define('Classes.Dog', {
        inherits: [Classes.Animal],
        constructor: function (name) {
            Classes.Animal.prototype.constructor$1.call(this, name);
    
        },
        move$1: function () {
            return 20;
        }
    });
    
    Bridge.define('Classes.Employee', {
        inherits: [Classes.Animal],
        name$1: null,
        id: 0,
        constructor: function (name, id) {
            Classes.Animal.prototype.constructor$1.call(this, name);
    
            this.name$1 = name;
            this.id = id;
        }
    });
    
    Bridge.define('Classes.Snake', {
        inherits: [Classes.Animal],
        constructor: function (name) {
            Classes.Animal.prototype.constructor$1.call(this, name);
    
        },
        move: function () {
            return 5;
        }
    });
    
    Bridge.define('Classes.StaticClass', {
        statics: {
            move: function (p, dx, dy) {
                return new Classes.Point("constructor$1", p.x + dx, p.y + dy);
            }
        }
    });
    
    Bridge.define('Classes.MovePoint', {
        config: {
            init: function () {
                Bridge.property(this, "Point", new Classes.Point());
            }
        },
        move: function (dx, dy) {
            this.setPoint(Bridge.get(Classes.MovePoint).move(this.getPoint().$clone(), dx, dy).$clone());
        },
        statics: {
            move: function (p, dx, dy) {
                return Bridge.get(Classes.StaticClass).move(p.$clone(), dx, dy);
            }
        }
    });
    
    
    
    Bridge.init();
})(this);
