/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Bridge169', {
    statics: {
        number: 0,
        m1: function () {
            (function () {
                Bridge.get(ClientTestLibrary.Bridge169).number = 1;
            })();
        },
        m2: function () {
            (function () {
                Bridge.get(ClientTestLibrary.Bridge169).number = 2;
            })();
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge240A', {
    config: {
        properties: {
            Data: 0
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge240B', {
    inherits: [ClientTestLibrary.Bridge240A],
    getString: function () {
        this.setData(this.getData()+1);
        return "B";
    }
});

Bridge.define('ClientTestLibrary.Bridge266B', {
    statics: {
        test: function (arg1, arg2) {
            return arg2;
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge272.MyEnum', {
    statics: {
        abc: 1,
        def: 2,
        ghi: 3
    },
    $enum: true
});

Bridge.define('ClientTestLibrary.Bridge277', {
    statics: {
        $int: 0
    },
    $enum: true
});

Bridge.define('ClientTestLibrary.Bridge294', {
    name: null,
    constructor: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    },
    getNameThroughGeneric: function (T) {
        return Bridge.fn.bind(this, function () {
            return this.name;
        });
    }
});

Bridge.define('ClientTestLibrary.Bridge305', {
    inherits: [Bridge.IEnumerable$1(String)],
    config: {
        properties: {
            Items: null
        }
    },
    constructor: function (items) {
        this.setItems(new Bridge.List$1(String)(items));
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this.getItems().getEnumerator();
    }
});

Bridge.define('ClientTestLibrary.Bridge306A.Props', {
    name: null,
    toString: function () {
        return this.name;
    }
});

Bridge.define('ClientTestLibrary.Bridge306Component$1', function (TProps) { return {
    statics: {
        $new: function (TComponent) {
            return Bridge.fn.bind(this, function (props) {
                return Bridge.getTypeName(props) + ":" + props;
            });
        }
    }
}; });

Bridge.define('ClientTestLibrary.Bridge306A', {
    inherits: [ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306A.Props)],
    statics: {
        $new: function (props) {
            return Bridge.get(ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306A.Props)).$new(ClientTestLibrary.Bridge306A)(props);
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge306B.Props', {
    name: null,
    toString: function () {
        return this.name;
    }
});

Bridge.define('ClientTestLibrary.Bridge306B', {
    inherits: [ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306B.Props)],
    statics: {
        $new: function (props) {
            return Bridge.get(ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306B.Props)).$new(ClientTestLibrary.Bridge306B)(props);
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge341A', {
    config: {
        properties: {
            Str: null
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge341B', {
    inherits: function () { return [Bridge.IEquatable$1(ClientTestLibrary.Bridge341B)]; },
    config: {
        properties: {
            Str: null
        }
    },
    equals: function (other) {
        if (other === null) {
            return false;
        }
        return this.getStr() === other.getStr();
    },
    getHashCode: function () {
        return Bridge.getHashCode(this.getStr());
    }
});

Bridge.define('ClientTestLibrary.Bridge342', {
    inherits: [Bridge.IDictionary$2(Bridge.Int,String)],
    _backingDictionary: null,
    constructor: function () {
        ClientTestLibrary.Bridge342.prototype.constructor$1.call(this, new Bridge.Dictionary$2(Bridge.Int,String)());

    },
    constructor$1: function (initialValues) {
        this._backingDictionary = initialValues;
    },
    getItem: function (key) {
        return this._backingDictionary.get(key);
    },
    setItem: function (key, value) {
        this._backingDictionary.set(key, value);
    },
    getKeys: function () {
        return this._backingDictionary.getKeys();
    },
    getValues: function () {
        return this._backingDictionary.getValues();
    },
    getCount: function () {
        return this._backingDictionary.getCount();
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this._backingDictionary.getEnumerator();
    },
    add: function (key, value) {
        this._backingDictionary.add(key, value);
    },
    remove: function (key) {
        return this._backingDictionary.remove(key);
    },
    containsKey: function (key) {
        return this._backingDictionary.containsKey(key);
    },
    tryGetValue: function (key, value) {
        return this._backingDictionary.tryGetValue(key, value);
    },
    clear: function () {
        this._backingDictionary.clear();
    }
});

Bridge.define('ClientTestLibrary.Bridge381.Animal', {
    kind: null,
    order: null,
    constructor: function (kind, order) {
        this.kind = kind;
        this.order = order;
    },
    toString: function () {
        return this.kind;
    }
});

Bridge.define('ClientTestLibrary.Person383', {
    config: {
        properties: {
            Name: null
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge395', {
    config: {
        properties: {
            Id: null,
            data: 0
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge407', {
    statics: {
        op_Addition: function (x, y) {
            return Bridge.merge(new ClientTestLibrary.Bridge407(), {
                setA: x.getA() + y.getA()
            } );
        },
        getDefaultValue: function () { return new ClientTestLibrary.Bridge407(); }
    },
    config: {
        properties: {
            A: 0
        }
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.A == null ? 0 : Bridge.getHashCode(this.A));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,ClientTestLibrary.Bridge407)) {
            return false;
        }
        return Bridge.equals(this.A, o.A);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Bridge407();
        s.A = this.A;
        return s;
    }
});

Bridge.define('ClientTestLibrary.Bridge418', {
    config: {
        properties: {
            Delegate: null
        }
    },
    callDelegate: function (data) {
        return this.getDelegate()(data);
    }
});

Bridge.define('ClientTestLibrary.Bridge422', {
    statics: {
        first: 0,
        next: 100,
        afterNext: 101
    },
    $enum: true
});

Bridge.define('ClientTestLibrary.Bridge436First', {
    toObject: function () {
        return "1";
    }
});

Bridge.define('ClientTestLibrary.Bridge436Second', {
    inherits: [ClientTestLibrary.Bridge436First],
    toObject: function () {
        return ClientTestLibrary.Bridge436First.prototype.toObject.call(this) + "2";
    }
});

Bridge.define('ClientTestLibrary.Bridge436Third', {
    inherits: [ClientTestLibrary.Bridge436Second],
    toObject: function () {
        return ClientTestLibrary.Bridge436Second.prototype.toObject.call(this) + "3";
    }
});

Bridge.define('ClientTestLibrary.Bridge439', {
    config: {
        events: {
            _dispatcher: null
        }
    },
    register: function (callback) {
        this.add_dispatcher(callback);
    },
    callDispatcher: function (s) {
        this._dispatcher(s);
    }
});

Bridge.define('ClientTestLibrary.Bridge467', {
    config: {
        properties: {
            MyProperty: 0
        }
    },
    equals: function (obj) {
        var other = Bridge.as(obj, ClientTestLibrary.Bridge467);
        if (other === null) {
            return false;
        }

        if (this.getMyProperty() < 0 || other.getMyProperty() < 0) {
            return this === other;
        }

        return this.getMyProperty() === other.getMyProperty();
    },
    getHashCode: function () {
        return this.getMyProperty() < 0 ? Bridge.getHashCode(this) : Bridge.getHashCode(this.getMyProperty());
    }
});

Bridge.define('ClientTestLibrary.Bridge470', {
    inherits: function () { return [Bridge.IEqualityComparer$1(ClientTestLibrary.Bridge470)]; },
    statics: {
        isOdd: function (value) {
            return value % 2 !== 0;
        }
    },
    config: {
        properties: {
            Data: 0
        }
    },
    equals: function (x, y) {
        return x.getData() === y.getData();
    },
    getHashCode: function (obj) {
        return Bridge.getHashCode(obj.getData());
    }
});

Bridge.define('ClientTestLibrary.Bridge472', {
    statics: {
        test: function (assert) {
            assert.expect(10);

            var magic1 = new Bridge.List$1(String)();
            magic1.insert(magic1.getCount(), "first");
            magic1.insert(magic1.getCount(), "second");

            assert.equal(magic1.getItem(0), "first", "magic1[0]");
            assert.equal(magic1.getItem(1), "second", "magic1[1]");

            var magic2 = new Bridge.List$1(String)();
            magic2.insertRange(magic2.getCount(), ["first", "second"]);
            magic2.insertRange(magic2.getCount(), ["third", "fourth"]);

            assert.equal(magic2.getItem(0), "first", "magic1[0]");
            assert.equal(magic2.getItem(1), "second", "magic1[1]");
            assert.equal(magic2.getItem(2), "third", "magic1[2]");
            assert.equal(magic2.getItem(3), "fourth", "magic1[3]");

            assert.throws(function () {
                var magic = new Bridge.List$1(String)();
                magic.insert(1, "first");
            }, "Insert at length + 1");

            assert.throws(function () {
                var magic = new Bridge.List$1(String)();
                magic.insert(-1, "first");
            }, "Insert at -1");

            assert.throws(function () {
                var magic = new Bridge.List$1(String)();
                magic.insertRange(1, ["first", "second"]);
            }, "InsertRange at length + 1");

            assert.throws(function () {
                var magic = new Bridge.List$1(String)();
                magic.insertRange(-1, ["first", "second"]);
            }, "InsertRange at -1");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge479', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(3);

            var pair = new Bridge.KeyValuePair$2(Bridge.Int,String)(1, "value");
            assert.equal(pair.key, 1, "Bridge479 Key");
            assert.equal(pair.value, "value", "Bridge479 Value");
            assert.equal(pair.toString(), "[1, value]", "Bridge479 ToString");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge485', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            var list = Bridge.Linq.Enumerable.from([{ lastName: "", firstName: "" }]).skip(1).toList(Object);
            list.add({ lastName: "Ruth", firstName: "Babe" });
            list.add({ lastName: "Johnson", firstName: "Walter" });
            list.add({ lastName: "Cobb", firstName: "Ty" });
            list.add({ lastName: "Schmidt", firstName: "Mike" });

            var query = Bridge.Linq.Enumerable.from(list).where(function (p) {
                return p.lastName.length === 4;
            }).select(function (p) {
                return { lastName: p.lastName, firstName: p.firstName };
            });

            var s = JSON.stringify(query.toList(Object));

            assert.equal(s, "{\"items\":[{\"lastName\":\"Ruth\",\"firstName\":\"Babe\"},{\"lastName\":\"Cobb\",\"firstName\":\"Ty\"}]}", "#485");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge495', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(3);

            var root = document.getElementById("qunit-fixture");

            var button1 = document.createElement('button');
            button1.innerHTML = "Button 1";
            button1.id = "button1";
            button1.style.color = "green";

            root.appendChild(button1);

            var b1 = document.getElementById("button1");
            assert.equal(b1.style.color, "green", "b1.Style.Color green");

            var button2 = document.createElement('button');
            button2.innerHTML = "Button 2";
            button2.id = "button2";
            button2.style.backgroundColor = "yellow";

            root.appendChild(button2);

            var b2 = document.getElementById("button2");
            assert.equal(b2.style.backgroundColor, "yellow", "b2.Style.BackgroundColor HTMLColor.Yellow");

            var hexColor = "#FFEEAA";
            var divElement1 = document.createElement('div');
            divElement1.innerHTML = "Div 1";
            divElement1.id = "div1";
            divElement1.style.color = hexColor;

            root.appendChild(divElement1);

            var div1 = document.getElementById("div1");
            assert.equal(div1.style.color, "rgb(255, 238, 170)", "div1.Style.Color " + hexColor);

        }
    }
});

Bridge.define('ClientTestLibrary.Bridge501B', {
    inherits: [Bridge.List$1(Bridge.Int)]
});

Bridge.define('ClientTestLibrary.Bridge501A', {
    inherits: [Bridge.List$1(Bridge.Int)],
    items$1: "12"
});

Bridge.define('ClientTestLibrary.Bridge502', {
    statics: {
        testUseCase: function (assert) {
            var $t, $t1, $t2, $t3;
            assert.expect(1);

            var numbers = [1, 2, 3];

            var sum = 0;

            $t = Bridge.getEnumerator(numbers);
            while ($t.moveNext()) {
                var a = $t.getCurrent();
                sum = sum + a;
            }

            $t1 = Bridge.getEnumerator(numbers);
            while ($t1.moveNext()) {
                var a1 = $t1.getCurrent();
                sum = sum + a1;
            }

            $t2 = Bridge.getEnumerator(numbers);
            while ($t2.moveNext()) {
                var a2 = $t2.getCurrent();
                sum = sum + a2;
            }

            $t3 = Bridge.getEnumerator(numbers);
            while ($t3.moveNext()) {
                var a3 = $t3.getCurrent();
                sum = sum + a3;
            }

            assert.equal(sum, 24, "Bridge502 sum");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge503', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(4);

            var a = ["a", "b", "c"];
            var list = new Bridge.List$1(String)(a);

            list.addRange(a);

            assert.equal(a.length, 3, "Bridge503: array.Length is correct");
            assert.equal(list.getCount(), 6, "Bridge503: list.Count is correct");

            list.clear();

            assert.equal(a.length, 3, "Bridge503: array.Length is correct");
            assert.equal(list.getCount(), 0, "Bridge503: list.Count is correct");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge508', {
    statics: {
        count: 0,
        config: {
            properties: {
                QUnitAsyncDone: null
            }
        },
        testUseCase: function (assert) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                result, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    for (;;) {
                        switch ($step) {
                            case 0: {
                                Bridge.get(ClientTestLibrary.Bridge508).setQUnitAsyncDone(assert.async());
                                
                                $task1 = Bridge.get(ClientTestLibrary.Bridge508).method1();
                                $step = 1;
                                $task1.continueWith($asyncBody, true);
                                return;
                            }
                            case 1: {
                                $taskResult1 = $task1.getResult();
                                result = $taskResult1;
                                
                                assert.equal(result, "A(0)A(1)B(0)B(1)B(2)", "#508 Method1");
                                
                                Bridge.get(ClientTestLibrary.Bridge508).getQUnitAsyncDone()();
                                return;
                            }
                            default: {
                                return;
                            }
                        }
                    }
                }, arguments);

            $asyncBody();
        },
        method1: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $taskResult2, 
                $task3, 
                $taskResult3, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                result, 
                i, 
                np, 
                np1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    result = "";
                                    
                                    i = 0;
                                    $task3 = Bridge.get(ClientTestLibrary.Bridge508).initPage();
                                    $step = 1;
                                    $task3.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult3 = $task3.getResult();
                                    np = $taskResult3;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( np !== null ) {
                                        $step = 3;
                                        continue;
                                    }
                                    $step = 6;
                                    continue;
                                }
                                case 3: {
                                    result += Bridge.String.format("A({0})", i++);
                                }
                                case 4: {
                                    $task2 = Bridge.get(ClientTestLibrary.Bridge508).nextPage();
                                    $step = 5;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 5: {
                                    $taskResult2 = $task2.getResult();
                                    np = $taskResult2;
                                    $step = 2;
                                    continue;
                                }
                                case 6: {
                                    
                                    Bridge.get(ClientTestLibrary.Bridge508).count = 0;
                                    i = 0;
                                    $task1 = Bridge.get(ClientTestLibrary.Bridge508).initPage();
                                    $step = 7;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 7: {
                                    $taskResult1 = $task1.getResult();
                                    np1 = $taskResult1;
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    if ( np1 !== null ) {
                                        $step = 9;
                                        continue;
                                    }
                                    $step = 11;
                                    continue;
                                }
                                case 9: {
                                    result += Bridge.String.format("B({0})", i++);
                                }
                                case 10: {
                                    np1 = Bridge.get(ClientTestLibrary.Bridge508).nextPage1();
                                    $step = 8;
                                    continue;
                                }
                                case 11: {
                                    
                                    $returnTask.setResult(result);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                }, arguments);

            $asyncBody();
            return $returnTask;
        },
        initPage: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $task1 = Bridge.Task.delay(0);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getResult();
                                    Bridge.get(ClientTestLibrary.Bridge508).count++;
                                    $returnTask.setResult(Bridge.get(ClientTestLibrary.Bridge508).count < 2 ? { } : null);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                }, arguments);

            $asyncBody();
            return $returnTask;
        },
        nextPage: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $task1 = Bridge.Task.delay(0);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getResult();
                                    Bridge.get(ClientTestLibrary.Bridge508).count++;
                                    $returnTask.setResult(Bridge.get(ClientTestLibrary.Bridge508).count < 3 ? { } : null);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                }, arguments);

            $asyncBody();
            return $returnTask;
        },
        nextPage1: function () {
            Bridge.get(ClientTestLibrary.Bridge508).count++;
            return Bridge.get(ClientTestLibrary.Bridge508).count < 4 ? { } : null;
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge514', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            var d1 = 5.43;
            assert.equal(Bridge.Int.sign(d1), 1, "Bridge514 Sign(double 5.43)");

            var d2 = -7.1;
            assert.equal(Bridge.Int.sign(d2), -1, "Bridge514 Sign(double -7.1)");
        },
        testRelated: function (assert) {
            assert.expect(2);

            var d1 = Bridge.Decimal(5.43);
            assert.equal(d1.sign(), 1, "Bridge514 Sign(decimal 5.43)");

            var d2 = Bridge.Decimal(-7.1);
            assert.equal(d2.sign(), -1, "Bridge514 Sign(decimal -7.1)");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge520.Source', {
    config: {
        events: {
            Fired: null
        },
        properties: {
            Counter: 0
        }
    },
    fire: function () {
        var getEvt = function (s) {
            return s.Fired;
        };
        var evt = getEvt(this);

        evt = Bridge.fn.combine(evt, Bridge.fn.bind(this, function (sender, args) {
            this.setCounter(this.getCounter()+1);
        }));

        evt(this, new Object());
    }
});

Bridge.define('ClientTestLibrary.Bridge522.BaseClass', {
    config: {
        init: function () {
            this.values = new Bridge.List$1(Bridge.Int)();
        }
    },
    addValue: function (a) {
        this.values.add(a);
    },
    getValues: function () {
        return this.values;
    }
});

Bridge.define('ClientTestLibrary.Bridge522.DerivedClass2', {
    inherits: [ClientTestLibrary.Bridge522.BaseClass],
    config: {
        properties: {
            B: 0
        }
    },
    constructor: function () {
        ClientTestLibrary.Bridge522.BaseClass.prototype.$constructor.call(this);


    }
});

Bridge.define('ClientTestLibrary.Bridge522.DerivedClass1', {
    inherits: [ClientTestLibrary.Bridge522.BaseClass],
    constructor: function () {
        ClientTestLibrary.Bridge522.BaseClass.prototype.$constructor.call(this);


    }
});

Bridge.define('ClientTestLibrary.Bridge532', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(3);

            var list = new Bridge.List$1(Bridge.Int)([1, 2, 3, 4, 5, 6, 7, 8, 9]);

            assert.deepEqual(list.getRange(0, 2).toArray(), [1, 2], "Bridge532 (0, 2)");
            assert.deepEqual(list.getRange(1, 2).toArray(), [2, 3], "Bridge532 (1, 2)");
            assert.deepEqual(list.getRange(6, 3).toArray(), [7, 8, 9], "Bridge532 (6, 3)");

        }
    }
});

Bridge.define('ClientTestLibrary.Bridge537A', {
    id: 0
});

Bridge.define('ClientTestLibrary.Bridge537B', {
    inherits: [Bridge.IEnumerable$1(ClientTestLibrary.Bridge537A)],
    statics: {
        getCount: function (l) {
            return l.list.getCount();
        },
        testB1: function () {
            var l = new ClientTestLibrary.Bridge537B();

            l.add(Bridge.merge(new ClientTestLibrary.Bridge537A(), {
                id: 101
            } ));
            l.add(Bridge.merge(new ClientTestLibrary.Bridge537A(), {
                id: 102
            } ));

            return l.getCount();
        },
        testB2: function () {
            var l = new ClientTestLibrary.Bridge537B();

            l.add(Bridge.merge(new ClientTestLibrary.Bridge537A(), {
                id: 103
            } ));

            return Bridge.get(ClientTestLibrary.Bridge537B).getCount(l);
        }
    },
    list: null,
    constructor: function () {
        this.list = new Bridge.List$1(ClientTestLibrary.Bridge537A)();
    },
    add: function (value) {
        this.list.add(value);
    },
    getEnumerator$1: function () {
        return this.list.getEnumerator();
    },
    getEnumerator: function () {
        return this.list.getEnumerator();
    },
    getCount: function () {
        return this.list.getCount();
    }
});

Bridge.define('ClientTestLibrary.Bridge538', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            var srcString = "123";
            var destString = "4";

            destString += String.fromCharCode(srcString.charCodeAt(2));

            assert.deepEqual(destString, "43", "Bridge538 '43'");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge546', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            var date = new Date(2015, 1 - 1, 1, 0, 0, 0, 0);

            var i = 1;
            var d = new Date(date.valueOf() + Math.round((10 + 20 * i) * 6e4));

            assert.equal(d.getMinutes(), 30, "Bridge546 30 minutes");
        },
        testRelated: function (assert) {
            assert.expect(5);

            var date = new Date(2015, 1 - 1, 1, 0, 0, 0, 0);
            var span1 = new Bridge.TimeSpan(0, 15, 0);
            var span2 = new Bridge.TimeSpan(0, 7, 0);
            var i = 1;

            var d1 = new Date(new Date(date - new Date((span1).ticks / 10000)) - new Date((span2).ticks / 10000));
            assert.equal(d1.getMinutes(), 38, "Bridge546 d1");

            var d2 = new Date(new Date(date.getTime() + ((span1).ticks / 10000)).getTime() + ((span2).ticks / 10000));
            assert.equal(d2.getMinutes(), 22, "Bridge546 d2");

            var d3 = new Date(date.valueOf() + Math.round((10 + 20 * i) * 864e5));
            assert.equal(d3.getDate(), 31, "Bridge546 d3");

            var d4 = new Date(date.valueOf() + Math.round((10 + 20 * i) * 36e5));
            assert.equal(d4.getHours(), 6, "Bridge546 d4");

            var d5 = new Date(date.valueOf() + Math.round((12 + 20 * i) * 1e3));
            assert.equal(d5.getSeconds(), 32, "Bridge546 d5");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge550', {
    statics: {
        testMethod: function (array, name, assert) {
            assert.ok(array !== null, Bridge.String.format("ArrayBufferView is an alias of {0}", name));
        },
        testUseCase: function (assert) {
            assert.expect(10);

            var array1 = new Int8Array(1);
            Bridge.get(ClientTestLibrary.Bridge550).testMethod(array1, "Int8Array", assert);

            var array2 = new Uint8Array(1);
            Bridge.get(ClientTestLibrary.Bridge550).testMethod(array2, "Uint8Array", assert);

            var array3 = new Uint8ClampedArray(1);
            Bridge.get(ClientTestLibrary.Bridge550).testMethod(array3, "Uint8ClampedArray", assert);

            var array4 = new Int16Array(1);
            Bridge.get(ClientTestLibrary.Bridge550).testMethod(array4, "Int16Array", assert);

            var array5 = new Uint16Array(1);
            Bridge.get(ClientTestLibrary.Bridge550).testMethod(array5, "Uint16Array", assert);

            var array6 = new Int32Array(1);
            Bridge.get(ClientTestLibrary.Bridge550).testMethod(array6, "Int32Array", assert);

            var array7 = new Uint32Array(1);
            Bridge.get(ClientTestLibrary.Bridge550).testMethod(array7, "Uint32Array", assert);

            var array8 = new Float32Array(1);
            Bridge.get(ClientTestLibrary.Bridge550).testMethod(array8, "Float32Array", assert);

            var array9 = new Float64Array(1);
            Bridge.get(ClientTestLibrary.Bridge550).testMethod(array9, "Float64Array", assert);

            var array10 = new DataView(array9.buffer);
            Bridge.get(ClientTestLibrary.Bridge550).testMethod(array10, "DataView", assert);
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge554', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(4);

            var s = "0123456789";

            assert.equal(Bridge.String.remove(s, 5), "01234", "Remove(5)");
            assert.equal(Bridge.String.remove(s, 10), "0123456789", "Remove(10)");
            assert.equal(Bridge.String.remove(s, 1, 2), "03456789", "Remove(1, 2)");
            assert.equal(Bridge.String.remove(s, 1, 10), "0", "Remove(1, 10)");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge555', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(15);

            var s = "0123456789";

            assert.equal(s.substring(-1), "0123456789", "JsSubstring(-1)");
            assert.equal(s.substring(5), "56789", "JsSubstring(5)");
            assert.equal(s.substring(10), "", "JsSubstring(10)");
            assert.equal(s.substring(1, 2), "1", "JsSubstring(1, 2)");
            assert.equal(s.substring(1, 10), "123456789", "JsSubstring(1, 10)");

            assert.equal(s.substr(-1), "9", "Substring(-1)");
            assert.equal(s.substr(5), "56789", "Substring(5)");
            assert.equal(s.substr(10), "", "Substring(10)");
            assert.equal(s.substr(1, 2), "12", "Substring(1, 2)");
            assert.equal(s.substr(1, 10), "123456789", "Substring(1, 10)");

            assert.equal(s.substr(-1), "9", "Substr(-1)");
            assert.equal(s.substr(5), "56789", "Substr(5)");
            assert.equal(s.substr(10), "", "Substr(10)");
            assert.equal(s.substr(1, 2), "12", "Substr(1, 2)");
            assert.equal(s.substr(1, 10), "123456789", "Substr(1, 10)");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge558A', {
    zz: function (a) {
        return 1;
    },
    zz$1: function (a) {
        return 2;
    }
});

Bridge.define('ClientTestLibrary.Bridge558B', {
    inherits: [ClientTestLibrary.Bridge558A],
    zz: function (a) {
        return ClientTestLibrary.Bridge558A.prototype.zz.call(this, a);
    },
    zz$1: function (a) {
        return ClientTestLibrary.Bridge558A.prototype.zz$1.call(this, a);
    }
});

Bridge.define('ClientTestLibrary.Bridge559A3', {
    config: {
        properties: {
            Data: null
        }
    },
    constructor$1: function (value) {
        this.setData(value);
    },
    constructor: function (value) {
        ClientTestLibrary.Bridge559A3.prototype.constructor$1.call(this, value.toString());

    }
});

Bridge.define('ClientTestLibrary.Bridge559A1', {
    result: "",
    constructor: function () {
        this.result += " -> Bridge559A1";
    },
    constructor$1: function (a) {
        ClientTestLibrary.Bridge559A1.prototype.$constructor.call(this);

        this.result += " -> Bridge559A1$1";
    }
});

Bridge.define('ClientTestLibrary.Bridge559B1', {
    inherits: [ClientTestLibrary.Bridge559A1],
    constructor: function () {
        ClientTestLibrary.Bridge559A1.prototype.$constructor.call(this);

        this.result += " -> Bridge559B1 -- unexpected!";
    },
    constructor$1: function (a) {
        ClientTestLibrary.Bridge559A1.prototype.constructor$1.call(this, a);

        this.result += " -> Bridge559B1$1";
    }
});

Bridge.define('ClientTestLibrary.Bridge559A2', {
    result: "",
    constructor: function () {
        this.result += " ClassA";
    },
    constructor$1: function (a) {
        ClientTestLibrary.Bridge559A2.prototype.$constructor.call(this);

        this.result += " ClassA$1";
    }
});

Bridge.define('ClientTestLibrary.Bridge559B2', {
    inherits: [ClientTestLibrary.Bridge559A2],
    constructor: function () {
        ClientTestLibrary.Bridge559A2.prototype.$constructor.call(this);

        this.result += " ClassB -- unexpected!";
    },
    constructor$1: function (a) {
        ClientTestLibrary.Bridge559A2.prototype.constructor$1.call(this, a);

        this.result += " ClassB$1";
    }
});

Bridge.define('ClientTestLibrary.Bridge563', {
    statics: {
        tesForeach: function (assert) {
            var $t, $t1, $t2, $t3;
            assert.expect(2);

            var keys = ["1", "2", "3"];
            var handlers = Bridge.Array.init(3, null);
            var i = 0;
            var result = "";

            $t = Bridge.getEnumerator(keys);
            while ($t.moveNext()) {
                (function () {
                    var itm = $t.getCurrent();
                    handlers[i++] = function () {
                        result += itm;
                    };
                }).call(this);
            }

            $t1 = Bridge.getEnumerator(handlers);
            while ($t1.moveNext()) {
                var handler = $t1.getCurrent();
                handler();
            }

            assert.equal(result, "123", "Bridge563 No block foreach loop");

            i = 0;
            result = "";

            $t2 = Bridge.getEnumerator(keys);
            while ($t2.moveNext()) {
                (function () {
                    var itm1 = $t2.getCurrent();
                    handlers[i++] = function () {
                        result += itm1;
                    };
                }).call(this);
            }

            $t3 = Bridge.getEnumerator(handlers);
            while ($t3.moveNext()) {
                var handler1 = $t3.getCurrent();
                handler1();
            }

            assert.equal(result, "123", "Bridge563 block foreach loop");
        },
        tesFor: function (assert) {
            var $t;
            assert.expect(1);

            var keys = ["1", "2", "3"];
            var handlers = Bridge.Array.init(3, null);
            var i = 0;
            var result = "";

            for (var j = 0; j < keys.length; j++) {
                (function () {
                    var itm = keys[j];
                    handlers[i++] = function () {
                        result += itm;
                    };
                }).call(this);
            }

            $t = Bridge.getEnumerator(handlers);
            while ($t.moveNext()) {
                var handler = $t.getCurrent();
                handler();
            }

            assert.equal(result, "123", "Bridge563 For loop");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge565', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(7);

            var t1 = new Function();
            assert.ok(t1 !== null, "#565 t1");

            var t2 = new Object();
            assert.ok(t2 !== null, "#565 t2");

            var t3 = new Object();
            assert.ok(Bridge.getType(t3) === Object, "#565 t3");

            var t4 = new Object();
            assert.ok(Bridge.getType(t4) === Object, "#565 t4");

            var t5 = new Object();
            assert.ok(t5 !== null, "#565 t5");

            var t6 = new Object();
            assert.ok(Bridge.getType(t6) === Object, "#565 t6");

            var t7 = new Object();
            assert.ok(Bridge.getType(t7) === Object, "#565 t7");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge566A', {
    config: {
        properties: {
            Data: null
        }
    },
    constructor: function () {
        this.setData(this.getName());
    }
});

Bridge.define('ClientTestLibrary.Bridge566B', {
    inherits: [ClientTestLibrary.Bridge566A],
    getName: function () {
        return "Ted";
    }
});

Bridge.define('ClientTestLibrary.Bridge572', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(4);

            var d1 = new Bridge.Dictionary$2(Bridge.Int,String)();

            var d = Bridge.as(d1, Bridge.IDictionary$2(Bridge.Int,String));

            d.add(1, "One");
            d.add(2, "Two");

            assert.equal(d.getItem(1), "One", "#572 getItem One");
            assert.equal(d.getItem(2), "Two", "#572 getItem Two");

            d.setItem(1, "New one");
            d.setItem(2, "New two");

            assert.equal(d.getItem(1), "New one", "#572 setItem New one");
            assert.equal(d.getItem(2), "New two", "#572 setItem New two");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge577.Bridge577UnitA', {
    statics: {
        getDefaultValue: function () { return new ClientTestLibrary.Bridge577.Bridge577UnitA(); }
    },
    $clone: function (to) { return this; }
});

Bridge.define('ClientTestLibrary.Bridge577.Bridge577UnitB', {
    statics: {
        getDefaultValue: function () { return new ClientTestLibrary.Bridge577.Bridge577UnitB(); }
    },
    config: {
        properties: {
            Number: 0
        }
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.Number == null ? 0 : Bridge.getHashCode(this.Number));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,ClientTestLibrary.Bridge577.Bridge577UnitB)) {
            return false;
        }
        return Bridge.equals(this.Number, o.Number);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Bridge577.Bridge577UnitB();
        s.Number = this.Number;
        return s;
    }
});

Bridge.define('ClientTestLibrary.Bridge578', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            var s = "ab|abc&ab&abc|de&ef&";

            var r = Bridge.String.split(s, [124, 38].map(function(i) {{ return String.fromCharCode(i); }}));
            var expected = ["ab", "abc", "ab", "abc", "de", "ef", ""];

            assert.deepEqual(r, expected, "#578 Split(params char[] separator)");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge580', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(10);

            var arrs = ["s1", "s2"];

            var intIndex;

            var dst = Bridge.Array.init(2, null);
            intIndex = 0;
            Bridge.Array.copy(arrs, intIndex, dst, 0, arrs.length - intIndex);

            assert.equal(dst.length, 2, "Bridge580 Length Int");
            assert.equal(dst[0], arrs[0], "Bridge580 0 Int");
            assert.equal(dst[1], arrs[1], "Bridge580 1 Int");

            dst = Bridge.Array.init(1, null);
            intIndex = 1;
            Bridge.Array.copy(arrs, intIndex, dst, 0, arrs.length - intIndex);

            assert.equal(dst.length, 1, "Bridge580 Length 1 Int");
            assert.equal(dst[0], arrs[1], "Bridge580 1_1 Int");

            var longIndex;

            dst = Bridge.Array.init(2, null);
            longIndex = 0;
            Bridge.Array.copy(arrs, longIndex, dst, 0, arrs.length - longIndex);

            assert.equal(dst.length, 2, "Bridge580 Length Long");
            assert.equal(dst[0], arrs[0], "Bridge580 0 Long");
            assert.equal(dst[1], arrs[1], "Bridge580 1 Long");

            dst = Bridge.Array.init(1, null);
            longIndex = 1;
            Bridge.Array.copy(arrs, longIndex, dst, 0, arrs.length - longIndex);

            assert.equal(dst.length, 1, "Bridge580 Length 1 Long");
            assert.equal(dst[0], arrs[1], "Bridge580 1_1 Long");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge582', {
    statics: {
        testAddTimeSpan: function (assert) {
            assert.expect(6);

            var today = new Date(2006, 1 - 1, 1);
            var duration = new Bridge.TimeSpan(36, 0, 0, 0);
            var answer = new Date((today).getTime() + ((duration).ticks / 10000));

            assert.equal(answer.getFullYear(), 2006, "Bridge582 TestAddTimeSpan Year");
            assert.equal((answer.getMonth() + 1), 2, "Bridge582 TestAddTimeSpan Month");
            assert.equal(answer.getDate(), 6, "Bridge582 TestAddTimeSpan Day");
            assert.equal(answer.getHours(), 0, "Bridge582 TestAddTimeSpan Hours");
            assert.equal(answer.getMinutes(), 0, "Bridge582 TestAddTimeSpan Minutes");
            assert.equal(answer.getSeconds(), 0, "Bridge582 TestAddTimeSpan Seconds");
        },
        testAddTicks: function (assert) {
            assert.expect(6);

            var dt = new Date(2001, 1 - 1, 1);
            dt = new Date((dt).getTime() + ((20000000) / 10000));

            assert.equal(dt.getFullYear(), 2001, "Bridge582 TestAddTicks Year");
            assert.equal((dt.getMonth() + 1), 1, "Bridge582 TestAddTicks Month");
            assert.equal(dt.getDate(), 1, "Bridge582 TestAddTicks Day");
            assert.equal(dt.getHours(), 0, "Bridge582 TestAddTicks Hour");
            assert.equal(dt.getMinutes(), 0, "Bridge582 TestAddTicks Minute");
            assert.equal(dt.getSeconds(), 2, "Bridge582 TestAddTicks Second");
        },
        testTicks: function (assert) {
            assert.expect(7);

            var centuryBegin = new Date(2001, 1 - 1, 1);
            var currentDate = new Date(2007, 12 - 1, 14, 15, 23);
            var elapsedTicks = currentDate.getTime() * 10000 - centuryBegin.getTime() * 10000;
            var elapsedSpan = new Bridge.TimeSpan(elapsedTicks);

            assert.equal(elapsedTicks, 2193385800000000, "Bridge582 TestTicks ticks");
            assert.equal(elapsedSpan.getTotalSeconds(), 219338580, "Bridge582 TestTicks seconds");
            assert.equal(elapsedSpan.getTotalMinutes(), 3655643, "Bridge582 TestTicks minutes");
            assert.equal(elapsedSpan.getDays(), 2538, "Bridge582 TestTicks days");
            assert.equal(elapsedSpan.getHours(), 15, "Bridge582 TestTicks hours");
            assert.equal(elapsedSpan.getMinutes(), 23, "Bridge582 TestTicks minutes");
            assert.equal(elapsedSpan.getSeconds(), 0, "Bridge582 TestTicks minutes");
        },
        testSubtractTimeSpan: function (assert) {
            assert.expect(4);

            var date1 = new Date(Date.UTC(1996, 6 - 1, 3, 22, 15, 0));
            var date2 = new Date(Date.UTC(1996, 12 - 1, 6, 13, 2, 0));
            var date3 = new Date(Date.UTC(1996, 10 - 1, 12, 8, 42, 0));

            var diff1 = new Bridge.TimeSpan((date2 - date1) * 10000);
            assert.ok(diff1.equals(new Bridge.TimeSpan(185, 14, 47, 0)), "Bridge582 TestSubtractTimeSpan diff1");

            var date4 = new Date(date3 - new Date((diff1).ticks / 10000));
            assert.ok(Bridge.equalsT(date4, new Date(Date.UTC(1996, 4 - 1, 9, 17, 55, 0))), "Bridge582 TestSubtractTimeSpan date4");

            var diff2 = new Bridge.TimeSpan((date2 - date3) * 10000);
            assert.ok(diff2.equals(new Bridge.TimeSpan(55, 4, 20, 0)), "Bridge582 TestSubtractTimeSpan diff2");

            var date5 = new Date(date1 - new Date((diff2).ticks / 10000));
            assert.ok(Bridge.equalsT(date5, new Date(Date.UTC(1996, 4 - 1, 9, 17, 55, 0))), "Bridge582 TestSubtractTimeSpan date5");
        },
        testTimeOfDay: function (assert) {
            assert.expect(6);

            var date = new Date(2013, 9 - 1, 14, 9, 28, 0);
            assert.ok(Bridge.equalsT(new Date(date.getFullYear(), date.getMonth(), date.getDate()), new Date(2013, 9 - 1, 14)), "Bridge582 TestTimeOfDay Date 2013, 9, 14, 9, 28, 0");
            assert.ok(Bridge.Date.timeOfDay(date).equals(new Bridge.TimeSpan(9, 28, 0)), "Bridge582 TestTimeOfDay TimeOfDay 2013, 9, 14, 9, 28, 0");

            date = new Date(2011, 5 - 1, 28, 10, 35, 0);
            assert.ok(Bridge.equalsT(new Date(date.getFullYear(), date.getMonth(), date.getDate()), new Date(2011, 5 - 1, 28)), "Bridge582 TestTimeOfDay Date 2011, 5, 28, 10, 35, 0");
            assert.ok(Bridge.Date.timeOfDay(date).equals(new Bridge.TimeSpan(10, 35, 0)), "Bridge582 TestTimeOfDay TimeOfDay 2011, 5, 28, 10, 35, 0");

            date = new Date(1979, 12 - 1, 25, 14, 30, 0);
            assert.ok(Bridge.equalsT(new Date(date.getFullYear(), date.getMonth(), date.getDate()), new Date(1979, 12 - 1, 25)), "Bridge582 TestTimeOfDay Date 1979, 12, 25, 14, 30, 0");
            assert.ok(Bridge.Date.timeOfDay(date).equals(new Bridge.TimeSpan(14, 30, 0)), "Bridge582 TestTimeOfDay TimeOfDay 1979, 12, 25, 14, 30, 0");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge586A', {
    statics: {

    },

});

Bridge.define('ClientTestLibrary.Bridge588C.C2', {
    statics: {
        config: {
            init: function () {
                this._default = new ClientTestLibrary.Bridge588C.C2("default");
            }
        },
        getDefault: function () {
            return Bridge.get(ClientTestLibrary.Bridge588C.C2)._default;
        }
    },
    config: {
        properties: {
            Name: null
        }
    },
    constructor: function (name) {
        this.setName(name);
    }
});

Bridge.define('ClientTestLibrary.Bridge588B', {
    statics: {
        Valeur1: 1,
        Valeur2: 2
    }
});

Bridge.define('ClientTestLibrary.Bridge592', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(6);

            var i8_1 = -2;
            var i8_2 = Bridge.cast((i8_1 >> 4), Bridge.Int);
            var u8_1 = 254;
            var u8_2 = Bridge.cast((u8_1 >> 4), Bridge.Int);

            var i16_1 = -2;
            var i16_2 = Bridge.cast((i16_1 >> 8), Bridge.Int);
            var u16_1 = 65534;
            var u16_2 = Bridge.cast((u16_1 >> 8), Bridge.Int);

            var i32_1 = -2;
            var i32_2 = i32_1 >> 16;
            var u32_1 = 4294967294;
            var u32_2 = u32_1 >>> 16;

            assert.equal(i8_2, -1, "Bridge592 i8_2");
            assert.equal(u8_2, 15, "Bridge592 u8_2");
            assert.equal(i16_2, -1, "Bridge592 i16_2");
            assert.equal(u16_2, 255, "Bridge592 u16_2");
            assert.equal(i32_2, -1, "Bridge592 i32_2");
            assert.equal(u32_2, 65535, "Bridge592 u32_2");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge595A', {
    buffer: null,
    constructor: function (buffer) {
        this.buffer = buffer;
    },
    render: function () {
        this.buffer.append("Render0");
        this.render$1(new Date());
    },
    render$1: function (when) {
        this.buffer.append("Render1");
    }
});

Bridge.define('ClientTestLibrary.Bridge595B', {
    statics: {
        render: function (buffer) {
            buffer.append("Render1");
        }
    },
    buffer: null,
    constructor: function (buffer) {
        this.buffer = buffer;
    },
    render: function () {
        this.buffer.append("Render0");
        Bridge.get(ClientTestLibrary.Bridge595B).render(this.buffer);
    }
});

Bridge.define('ClientTestLibrary.Bridge597A', {
    _something: "HI!",
    get: function () {
        var items = ["a"];
        var mappedItemsWithoutInstanceMemberAccess = Bridge.Linq.Enumerable.from(items).select(function (value, index) {
            return index + ":" + value;
        }).toArray();
        return mappedItemsWithoutInstanceMemberAccess[0];
    },
    getWithMember: function () {
        var items = ["a"];
        var mappedItemsWithInstanceMemberAccess = Bridge.Linq.Enumerable.from(items).select(Bridge.fn.bind(this, function (value, index) {
            return this._something + ":" + index + ":" + value;
        })).toArray();
        return mappedItemsWithInstanceMemberAccess[0];
    }
});

Bridge.define('ClientTestLibrary.Bridge603A', {
    statics: {
        op_Implicit: function (value) {
            var $t;
            value = ($t = value, Bridge.hasValue($t) ? $t : "[Null]");
            return new ClientTestLibrary.Bridge603A("constructor$1", value);
        },
        getDefaultValue: function () { return new ClientTestLibrary.Bridge603A(); }
    },
    value: null,
    constructor$1: function (value) {
        this.value = value;
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,ClientTestLibrary.Bridge603A)) {
            return false;
        }
        return Bridge.equals(this.value, o.value);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Bridge603A();
        s.value = this.value;
        return s;
    }
});

Bridge.define('ClientTestLibrary.Bridge603Class', {
    config: {
        properties: {
            Data: null
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge606C', {
    config: {
        properties: {
            X: null,
            Y: null
        }
    },
    example1: function (x, y) {
        this.setX(x);
        this.setY(y);
    }
});

Bridge.define('ClientTestLibrary.Bridge606B', {
    config: {
        properties: {
            X: null,
            Y: null
        }
    },
    constructor: function (x, y) {
        this.setX(x);
        this.setY(y);
    }
});

Bridge.define('ClientTestLibrary.Bridge606A', {
    statics: {
        example2: function (source, x, y) {
            return source + " - " + x + " - " + y;
        }
    }
});

Bridge.define('ClientTestLibrary.Opti$1', function (T) { return {
    inherits: function () { return [Bridge.IEquatable$1(ClientTestLibrary.Opti$1(T))]; },
    equals: function (obj) {
        return this === obj;
    }
}; });

Bridge.define('ClientTestLibrary.Class1', {
    inherits: function () { return [Bridge.IEquatable$1(ClientTestLibrary.Class1)]; },
    equals: function (other) {
        return this === other;
    }
});

Bridge.define('ClientTestLibrary.Bridge608A', {
    statics: {
        getDefaultValue: function () { return new ClientTestLibrary.Bridge608A(); }
    },
    field: null,
    constructor$1: function (field) {
        this.field = field;
    },
    constructor: function () {
    },
    equals: function (obj) {
        return this.equals$1(obj.toString());
    },
    equals$1: function (other) {
        return other === this.field;
    },
    getHashCode: function () {
        return Bridge.getHashCode(this.field);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Bridge608A();
        s.field = this.field;
        return s;
    }
});

Bridge.define('ClientTestLibrary.Bridge615', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            var i = 0;
            var o = null;

            assert.equal(ClientTestLibrary.Bridge615A.method1$1(o), "object", "Bridge615 object");
            assert.equal(ClientTestLibrary.Bridge615A.method1(i), "int", "Bridge615 int");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge615A', {
    statics: {
        method1$1: function (o) {
            return "object";
        },
        method1: function (i) {
            return "int";
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge623A', {
    foo: 0,
    func: null,
    constructor: function (foo, func) {
        this.foo = foo;
        this.func = func;
    },
    call: function () {
        return this.func();
    }
});

Bridge.define('ClientTestLibrary.Bridge623B1', {
    inherits: [ClientTestLibrary.Bridge623A],
    constructor: function (foo, func) {
        ClientTestLibrary.Bridge623A.prototype.$constructor.call(this, foo, func);

    },
    getFoo: function () {
        return 2 * this.foo;
    }
});

Bridge.define('ClientTestLibrary.Bridge623B2', {
    inherits: [ClientTestLibrary.Bridge623B1],
    constructor: function (foo, func) {
        ClientTestLibrary.Bridge623B1.prototype.$constructor.call(this, foo, func);

    },
    getFoo: function () {
        return 3 * this.foo;
    },
    call: function () {
        return this.func() + 1000;
    }
});

Bridge.define('ClientTestLibrary.Bridge625A', {
    inherits: [Bridge.IEqualityComparer$1(Bridge.Int)],
    equals: function (x, y) {
        return x === y;
    },
    getHashCode: function (obj) {
        return Bridge.getHashCode(obj);
    }
});

Bridge.define('ClientTestLibrary.Bridge634A$1', function (T) { return {

}; });

Bridge.define('ClientTestLibrary.Bridge634A$1.Nested', function (T) { return {

}; });

Bridge.define('ClientTestLibrary.Bridge634A$1.Nested.SubNested', function (T) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1', function (T) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested', function (T) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested', function (T) { return {

}; });

Bridge.define('ClientTestLibrary.Bridge634C');

Bridge.define('ClientTestLibrary.Bridge634C.Nested');

Bridge.define('ClientTestLibrary.Bridge634C.Nested.SubNested');

Bridge.define('Bridge634D');

Bridge.define('Bridge634D.Nested');

Bridge.define('ClientTestLibrary.Bridge634A$1.Nested.SubNested$1', function (T, T1) { return {

}; });

Bridge.define('ClientTestLibrary.Bridge634A$1.Nested$1', function (T, T1) { return {

}; });

Bridge.define('ClientTestLibrary.Bridge634A$1.Nested$1.SubNested', function (T, T1) { return {

}; });

Bridge.define('ClientTestLibrary.Bridge634A$1.Nested$1.SubNested$1', function (T, T1, T2) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$1', function (T, T1) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested$1', function (T, T1) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested', function (T, T1) { return {

}; });

Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$1', function (T, T1, T2) { return {

}; });

Bridge.define('ClientTestLibrary.Bridge634C.Nested.SubNested$1', function (T1) { return {

}; });

Bridge.define('ClientTestLibrary.Bridge634C.Nested$1', function (T1) { return {

}; });

Bridge.define('ClientTestLibrary.Bridge634C.Nested$1.SubNested', function (T1) { return {

}; });

Bridge.define('ClientTestLibrary.Bridge634C.Nested$1.SubNested$1', function (T1, T2) { return {

}; });

Bridge.define('ClientTestLibrary.Bridge635A', {
    internalFunc1: function () {
        return "A.Test1";
    }
});

Bridge.define('ClientTestLibrary.Bridge635B', {
    inherits: [ClientTestLibrary.Bridge635A],
    internalFunc1: function () {
        return "B.Test1";
    }
});

Bridge.define('ClientTestLibrary.Bridge648A', {
    statics: {
        op_Implicit: function (value) {
            return value.getValue();
        }
    },
    config: {
        properties: {
            Value: null
        }
    },
    constructor: function (value) {
        this.setValue(value);
    }
});

Bridge.define('ClientTestLibrary.Bridge652.Bridge652B1', {
    constructor: function () {
        Bridge.get(ClientTestLibrary.Bridge652).log = "Bridge652B1";
    }
});

Bridge.define('ClientTestLibrary.Bridge652.Bridge652B2', {
    inherits: [Bridge.IComparable],
    constructor: function () {
        Bridge.get(ClientTestLibrary.Bridge652).log = "Bridge652B2";
    },
    compareTo: function (obj) {
        return 0;
    }
});

Bridge.define('ClientTestLibrary.Bridge652.Bridge652C$1', function (T) { return {
    bar: null,
    constructor: function () {
        this.bar = new T();
    }
}; });

Bridge.define('ClientTestLibrary.Bridge652.Bridge652A1', {
    inherits: [ClientTestLibrary.Bridge652.Bridge652C$1(ClientTestLibrary.Bridge652.Bridge652B1)]
});

Bridge.define('ClientTestLibrary.Bridge652.Bridge652D$1', function (T) { return {
    bar: null,
    constructor: function () {
        this.bar = new T();
    }
}; });

Bridge.define('ClientTestLibrary.Bridge652.Bridge652A2', {
    inherits: [ClientTestLibrary.Bridge652.Bridge652D$1(ClientTestLibrary.Bridge652.Bridge652B2)]
});

Bridge.define('ClientTestLibrary.Bridge655', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(12);

            var item11 = function () {
                return 11;
            };
            assert.equal(ClientTestLibrary.Bridge655A.isNullOrUndefined(item11), false, "Bridge655 IsNullOrUndefined11");
            assert.equal(item11(), 11, "Bridge655 item11");

            var item12 = function (i) {
                return i;
            };
            assert.equal(ClientTestLibrary.Bridge655A.isNullOrUndefined(item12), false, "Bridge655 IsNullOrUndefined12");
            assert.equal(item12(12), 12, "Bridge655 item12");

            var item21 = function () {
                return 21;
            };
            assert.equal(ClientTestLibrary.Bridge655A.isNullOrUndefined$1(item21, 21), false, "Bridge655 IsNullOrUndefined21 false");
            assert.equal(ClientTestLibrary.Bridge655A.isNullOrUndefined$1(item21, 0), true, "Bridge655 IsNullOrUndefined21 true");
            assert.equal(item21(), 21, "Bridge655 item21");

            var item22 = function (i, s) {
                return i + s.length;
            };
            assert.equal(ClientTestLibrary.Bridge655A.isNullOrUndefined$2(item22, "22"), "false", "Bridge655 IsNullOrUndefined22 false");
            assert.equal(ClientTestLibrary.Bridge655A.isNullOrUndefined$2(item22, ""), "true", "Bridge655 IsNullOrUndefined22 true");
            assert.equal(item22(19, "two"), 22, "Bridge655 item22");

            var item32 = function (i, s) {
                var b = i === s.length;
            };
            assert.equal(ClientTestLibrary.Bridge655A.isNullOrUndefined$2(item32, "32"), "false", "Bridge655 IsNullOrUndefined32 false");
            assert.equal(ClientTestLibrary.Bridge655A.isNullOrUndefined$2(item32, ""), "true", "Bridge655 IsNullOrUndefined32 true");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge655A', {
    statics: {
        isNullOrUndefined: function (subject) {
            return subject === undefined || subject === null;
        },
        isNullOrUndefined$1: function (subject, i) {
            return subject === undefined || subject === null || i === 0;
        },
        isNullOrUndefined$2: function (subject, s) {
            if (subject === undefined || subject === null || Bridge.String.isNullOrEmpty(s)) {
                return "true";
            }

            return "false";
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge660TextInputState', {
    config: {
        properties: {
            Text: null
        }
    },
    constructor: function (text) {
        ClientTestLibrary.Bridge660TextInputState.prototype.constructor$1.call(this, text, Bridge.get(ClientTestLibrary.Bridge660Optional$1(String)).getMissing());

    },
    constructor$1: function (text, validationError) {
        this.setText(text);
    }
});

Bridge.define('ClientTestLibrary.Bridge660MessageEditState', {
    config: {
        properties: {
            Content: null
        }
    },
    constructor: function (content) {
        this.setContent(content);
    }
});

Bridge.define('ClientTestLibrary.Bridge660Optional$1', function (T) { return {
    statics: {
        config: {
            init: function () {
                this._missing = new ClientTestLibrary.Bridge660Optional$1(T)("constructor$2", Bridge.getDefaultValue(T), false);
            }
        },
        getMissing: function () {
            return Bridge.get(ClientTestLibrary.Bridge660Optional$1(T))._missing.$clone();
        },
        getDefaultValue: function () { return new ClientTestLibrary.Bridge660Optional$1(T)(); }
    },
    value: null,
    isDefined: false,
    constructor$1: function (value) {
        ClientTestLibrary.Bridge660Optional$1(T).prototype.constructor$2.call(this, value, value !== null);

    },
    constructor$2: function (value, isDefined) {
        this.isDefined = (value !== null);
        this.value = value;
    },
    constructor: function () {
    },
    getIsDefined: function () {
        return this.isDefined;
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
        hash = hash * 23 + (this.isDefined == null ? 0 : Bridge.getHashCode(this.isDefined));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,ClientTestLibrary.Bridge660Optional$1(T))) {
            return false;
        }
        return Bridge.equals(this.value, o.value) && Bridge.equals(this.isDefined, o.isDefined);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Bridge660Optional$1(T)();
        s.value = this.value;
        s.isDefined = this.isDefined;
        return s;
    }
}; });

Bridge.define('ClientTestLibrary.Bridge661', {
    statics: {
        example1: function (exampleInput) {
            if (exampleInput === void 0) { exampleInput = 0; }
            return exampleInput === 0;
        },
        example2: function (exampleInput) {
            if (exampleInput === void 0) { exampleInput = 49; }
            return exampleInput === 49;
        },
        testUseCase: function (assert) {
            assert.expect(6);

            assert.equal(Bridge.get(ClientTestLibrary.Bridge661).example1(), true, "Bridge661 Example1 true default");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge661).example1(0), true, "Bridge661 Example1 true");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge661).example1(65), false, "Bridge661 Example1 false");

            assert.equal(Bridge.get(ClientTestLibrary.Bridge661).example2(), true, "Bridge661 Example2 true default");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge661).example2(49), true, "Bridge661 Example2 true");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge661).example2(0), false, "Bridge661 Example2 false");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge664', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            var f = function (s) {
                return s;
            };
            // if cast will be emitted then exception will be thrown because Bridge664A is not emitted
            assert.equal(f("test"), "test", "Bridge664");

            assert.throws(function () {
                var b = { };
                var s = Bridge.cast(b, ClientTestLibrary.Bridge664B);
            }, "Bridge664 Should throw exception");


        }
    }
});

Bridge.define('ClientTestLibrary.Bridge666', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            assert.equal(Bridge.get(ClientTestLibrary.Bridge666).getSum(), 360, "Bridge666 GetSum 360");
        },
        getSum: function () {
            var $t;
            var sum = 0;
            var numbers = [1, 2, 3];

            $t = Bridge.getEnumerator(numbers);
            while ($t.moveNext()) {
                (function () {
                    var n = $t.getCurrent();
                    var func = function (i) {
                        var $t1;
                        var bigNumbers = [10, 20, 30];
                        $t1 = Bridge.getEnumerator(bigNumbers);
                        while ($t1.moveNext()) {
                            var bn = $t1.getCurrent();
                            sum = sum + i * bn;
                        }
                    };

                    func(n);
                }).call(this);
            }

            return sum;
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge671', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            assert.equal(new ClientTestLibrary.Bridge671().invoke(), 1);
        }
    },
    one: 1,
    getOne: function () {
        return this.one;
    },
    invoke: function () {
        var b = new ClientTestLibrary.Bridge671A(Bridge.fn.bind(this, this.getOne));
        return b.invoke();
    }
});

Bridge.define('ClientTestLibrary.Bridge671A', {
    func: null,
    constructor: function (func) {
        this.func = func;
    },
    invoke: function () {
        return this.func();
    }
});

Bridge.define('ClientTestLibrary.Bridge674', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            var o = undefined;
            assert.throws(function () {
                var s = Bridge.cast(o, String);
            }, "Unable to cast type 'null' to type String");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge675', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(3);

            var me = Bridge.global.ClientTestLibrary.Bridge675;
            me.id = "str1";
            me.i1 = 1;
            me.i2 = 2;

            assert.equal(me.dynMethod(me.id), "str1", "Bridge675 DynMethod");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge675).method1$1(me.id), "str1", "Bridge675 Method1 id");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge675).method1(me.i1, me.i2), 3, "Bridge675 Method1 i1 i2");
        },
        dynMethod: function (s) {
            return s;
        },
        method1$1: function (s) {
            return s;
        },
        method1: function (i1, i2) {
            return i1 + i2;
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge687A', {
    statics: {
        op_Implicit: function (value) {
            return value.getValue();
        }
    },
    config: {
        properties: {
            Value: null
        }
    },
    constructor: function (value) {
        this.setValue(value);
    }
});

Bridge.define('ClientTestLibrary.Bridge689', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            var fn1 = parseInt;
            assert.equal(fn1("5"), 5, "Bridge689 should equals 5");

            var fn2 = parseInt;
            assert.equal(fn2("6"), 6, "Bridge689 should equals 6");

            //object a = 7;
            //Func<object, bool> fn3 = a.BridgeEquals;
            //assert.Equal(fn3("7"), 7, "Bridge689 should equals 7");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge690A', {
    i3: 3,
    asyncSum: function (i1, i2) {
        var $step = 0,
            $task1, 
            $jumpFromFinally, 
            $returnTask = new Bridge.Task(), 
            $returnValue, 
            $asyncBody = Bridge.fn.bind(this, function () {
                try {
                    for (;;) {
                        switch ($step) {
                            case 0: {
                                $task1 = Bridge.Task.delay(100);
                                $step = 1;
                                $task1.continueWith($asyncBody);
                                return;
                            }
                            case 1: {
                                $task1.getResult();
                                $returnTask.setResult(i1 + i2 + this.i3);
                                return;
                            }
                            default: {
                                $returnTask.setResult(null);
                                return;
                            }
                        }
                    }
                } catch($e1) {
                    $e1 = Bridge.Exception.create($e1);
                    $returnTask.setError($e1);
                }
            }, arguments);

        $asyncBody();
        return $returnTask;
    },
    start: function () {
        var $step = 0,
            $task1, 
            $taskResult1, 
            $jumpFromFinally, 
            $returnTask = new Bridge.Task(), 
            $returnValue, 
            $asyncBody = Bridge.fn.bind(this, function () {
                try {
                    for (;;) {
                        switch ($step) {
                            case 0: {
                                $task1 = this.asyncSum(2, 3);
                                $step = 1;
                                $task1.continueWith($asyncBody);
                                return;
                            }
                            case 1: {
                                $taskResult1 = $task1.getResult();
                                $returnTask.setResult($taskResult1);
                                return;
                            }
                            default: {
                                $returnTask.setResult(null);
                                return;
                            }
                        }
                    }
                } catch($e1) {
                    $e1 = Bridge.Exception.create($e1);
                    $returnTask.setError($e1);
                }
            }, arguments);

        $asyncBody();
        return $returnTask;
    }
});

Bridge.define('ClientTestLibrary.Bridge690B', {
    statics: {
        i3: 17,
        asyncSum: function (i1, i2) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $task1 = Bridge.Task.delay(100);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getResult();
                                    $returnTask.setResult(i1 + i2 + Bridge.get(ClientTestLibrary.Bridge690B).i3);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                }, arguments);

            $asyncBody();
            return $returnTask;
        },
        start: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $task1 = Bridge.get(ClientTestLibrary.Bridge690B).asyncSum(19, 23);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getResult();
                                    $returnTask.setResult($taskResult1);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                }, arguments);

            $asyncBody();
            return $returnTask;
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge691', {
    statics: {
        testUseCase: function (assert) {
            var $t;
            assert.expect(1);

            var pos = 0;
            var lines = ["", "", "str"];
            while (pos < lines.length) {
                var $t = (function () {
                    while (pos < lines.length && lines[pos].length === 0) {
                        pos++;
                    }

                    if (!(pos < lines.length)) {
                        return {jump:2};
                    }

                    var a = function (p) {
                    };

                    if (pos > 0) {
                        return {jump:2};
                    }
                }).call(this) || {};
                if($t.jump == 2) break;
            }

            assert.equal(pos, 2, "Bridge691");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge693A$1', function (T) { return {
    constructor: function (props) {
    }
}; });

Bridge.define('ClientTestLibrary.Bridge694', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(3);

            var fruits = Bridge.Array.init(3, null);
            fruits[0] = "mango";
            fruits[1] = "apple";
            fruits[2] = "lemon";

            var list = Bridge.Linq.Enumerable.from(fruits).select(function(x) { return Bridge.cast(x, String); }).orderBy(function (fruit) {
                return fruit;
            }).select(function (fruit) {
                return fruit;
            }).toList(String);
            assert.equal(list.getItem(0), "apple", "Bridge694 apple");
            assert.equal(list.getItem(1), "lemon", "Bridge694 lemon");
            assert.equal(list.getItem(2), "mango", "Bridge694 mango");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge696', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            var namedCallbacks = new Bridge.Dictionary$2(String,Function)();
            namedCallbacks.add("Shout", function (message) {
                return message.length;
            });
            namedCallbacks.add("Whisper", function (message) {
                return message.length;
            });

            assert.equal(namedCallbacks.get("Shout")("HELLO!"), 6, "Bridge696 HELLO!");
            assert.equal(namedCallbacks.get("Whisper")("HELLO"), 5, "Bridge696 HELLO");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge699', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(5);

            var blob1 = new Blob(["blobData1"], { type: "text/richtext", endings: "transparent" });

            assert.notEqual(blob1, null, "blob1 is not null");
            assert.equal(blob1.size, 9, "blob1.Size equals 9");
            assert.equal(blob1.type, "text/richtext", "blob1.Type equals 'text/richtext'");

            var blob2 = new Blob(["data2"]);
            assert.notEqual(blob2, null, "blob2 is not null");
            assert.equal(blob2.size, 5, "blob2.Size equals 5");

        }
    }
});

Bridge.define('ClientTestLibrary.Bridge708', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);
            assert.equal(Bridge.get(ClientTestLibrary.Bridge708).testIssue(), 12, "Bridge708 TestIssue");
        },
        testIssue: function () {
            var sum = 0;
            var f = function () {
                var $t;
                $t = Bridge.getEnumerator([1, 2, 3]);
                while ($t.moveNext()) {
                    (function () {
                        var n = $t.getCurrent();
                        var g = function (i) {
                            sum += i;
                        };
                        g(n);
                    }).call(this);
                }
                var h = function () {
                    sum *= 2;
                };
                h();
            };

            f();

            return sum;
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge721', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(4);

            var testList = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [3]
            ] );
            assert.equal(Bridge.get(ClientTestLibrary.Bridge721).check(testList), "ThirdLoop", "Bridge721 ThirdLoop");

            testList = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [5]
            ] );
            assert.equal(Bridge.get(ClientTestLibrary.Bridge721).check(testList), "SecondLoop", "Bridge721 SecondLoop");

            testList = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [15]
            ] );
            assert.equal(Bridge.get(ClientTestLibrary.Bridge721).check(testList), "FirstLoop", "Bridge721 FirstLoop");

            testList = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [25]
            ] );
            assert.equal(Bridge.get(ClientTestLibrary.Bridge721).check(testList), "NoLoops", "Bridge721 NoLoops");
        },
        check: function (testList) {
            var $t, $t1, $t2;
            var i = 0;
            while (i < 20) {
                var $t = (function () {
                    while (i < 10) {
                        var $t1 = (function () {
                            while (i < 5) {
                                var $t2 = (function () {
                                    if (Bridge.Linq.Enumerable.from(testList).any(function (x) {
                                        return x === i;
                                    })) {
                                        return {jump: 3, v: "ThirdLoop"};
                                    }
                                    i++;
                                }).call(this) || {};
                                if($t2.jump == 3) return {jump: 3, v: $t2.v};
                            }

                            if (Bridge.Linq.Enumerable.from(testList).any(function (x) {
                                return x === i;
                            })) {
                                return {jump: 3, v: "SecondLoop"};
                            }
                            i++;
                        }).call(this) || {};
                        if($t1.jump == 3) return {jump: 3, v: $t1.v};
                    }

                    if (Bridge.Linq.Enumerable.from(testList).any(function (x) {
                        return x === i;
                    })) {
                        return {jump: 3, v: "FirstLoop"};
                    }
                    i++;
                }).call(this) || {};
                if($t.jump == 3) return $t.v;
            }

            return "NoLoops";
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge722', {
    statics: {
        m1: function (i) {
            return i;
        },
        testUseCase: function (assert) {
            var $t, $t1, $t2, $t3, $t4, $t5, $t6;
            assert.expect(9);

            var c1 = new ClientTestLibrary.Bridge722();
            var asset1 = 1;
            asset1 = ($t = 2, c1.setItem("path", $t), $t);

            assert.equal(asset1, 2, "Bridge722 asset1");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge722).m1(($t1 = 3, c1.setItem("path", $t1), $t1)), 3, "Bridge722 M1 3");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge722).m1(($t2 = ($t3 = 4, c1.setItem("path", $t3), $t3), asset1 = $t2, $t2)), 4, "Bridge722 M1 4");

            var c2 = { };
            var asset2 = ($t4 = 5, c2.path = $t4, $t4);
            assert.equal(asset2, 5, "Bridge722 asset2");
            assert.equal(c2.path, 5, "Bridge722 c2");

            var c3 = new Bridge.Dictionary$2(String,Bridge.Int)();
            var asset3 = ($t5 = 6, c3.set("path", $t5), $t5);
            assert.equal(asset3, 6, "Bridge722 asset3");
            assert.equal(c3.get("path"), 6, "Bridge722 c3");

            var data4 = [Bridge.Decimal(1.0), Bridge.Decimal(2.0), Bridge.Decimal(3.0), Bridge.Decimal(4.0), Bridge.Decimal(7.0)];
            var c4 = new Bridge.Dictionary$2(String,Bridge.Decimal)();
            var asset4 = ($t6 = Bridge.Linq.Enumerable.from(data4).select(function (x) {
                return x;
            }).last(), c4.set("path", $t6), $t6);
            assert.equal(asset4, 7, "Bridge722 asset4");
            assert.equal(c4.get("path"), 7, "Bridge722 c4");
        }
    },
    lastItem: 0,
    getItem: function (item) {
        return this.lastItem;
    },
    setItem: function (item, value) {
        this.lastItem = value;
    }
});

Bridge.define('ClientTestLibrary.Bridge726', {
    statics: {
        testUseCase: function (assert) {
            var $t;
            assert.expect(1);

            var b = true;
            var t = [1, 2, 3];

            var sum = 0;
            if (b) {
                $t = Bridge.getEnumerator(t);
                while ($t.moveNext()) {
                    var i = $t.getCurrent();
                    sum += i;
                }
            }

            assert.equal(sum, 6, "Bridge726");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge732', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            var decimalValue = Bridge.Decimal(5.0);
            var assign = false;
            var test = assign ? decimalValue : Bridge.Decimal(2);
            var test2 = test.mul(decimalValue);

            assert.ok(test2.equalsT(Bridge.Decimal(10)), "Bridge732");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge733', {
    statics: {
        config: {
            init: function () {
                this.dateb = new Date(-864e13);
                Bridge.property(this, "DateA", new Date(-864e13));
            }
        },
        testUseCase: function (assert) {
            assert.expect(2);

            assert.ok(Bridge.equals(Bridge.get(ClientTestLibrary.Bridge733).getDateA(), new Date(-864e13)), "Bridge733 DateA");
            assert.ok(Bridge.equals(Bridge.get(ClientTestLibrary.Bridge733).dateb, new Date(-864e13)), "Bridge733 dateb");

            Bridge.get(ClientTestLibrary.Bridge733).dateb = new Date(); // to prevent warning that dateb is never assigned
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge751', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            for (var i = 0; i < 5; i++) {
                var el = i;
            }

            var values = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [1],
                [2]
            ] );
            var v1 = Bridge.Linq.Enumerable.from(values).count(function (el1) {
                return el1 === 1;
            });

            assert.equal(v1, 1, "Bridge751");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge758', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(3);

            var list = new Bridge.List$1(Date)();
            list.add(new Date(2015, 1 - 1, 2));
            list.add(new Date(2015, 1 - 1, 1));
            list.add(new Date(2015, 1 - 1, 3));

            list.sort();
            assert.ok(Bridge.equals(list.getItem(0), new Date(2015, 1 - 1, 1)), "Bridge758 2015/1/1");
            assert.ok(Bridge.equals(list.getItem(1), new Date(2015, 1 - 1, 2)), "Bridge758 2015/1/2");
            assert.ok(Bridge.equals(list.getItem(2), new Date(2015, 1 - 1, 3)), "Bridge758 2015/1/3");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge760', {
    statics: {
        testUseCase: function (assert) {
            var $t;
            assert.expect(1);

            var a = null;
            var b = 10;

            var c = ($t = b, Bridge.hasValue($t) ? $t : Bridge.get(ClientTestLibrary.Bridge760).doSomething(a));
            assert.equal(c, 10, "Bridge760");
        },
        doSomething: function (test) {
            return Bridge.Nullable.getValue(test);
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge762A', {
    statics: {
        getDefaultValue: function () { return new ClientTestLibrary.Bridge762A(); }
    },
    $clone: function (to) { return this; }
});

Bridge.define('ClientTestLibrary.Bridge762B', {
    statics: {
        getDefaultValue: function () { return new ClientTestLibrary.Bridge762B(); }
    },
    config: {
        properties: {
            Data: 0
        }
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.Data == null ? 0 : Bridge.getHashCode(this.Data));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,ClientTestLibrary.Bridge762B)) {
            return false;
        }
        return Bridge.equals(this.Data, o.Data);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Bridge762B();
        s.Data = this.Data;
        return s;
    }
});

Bridge.define('ClientTestLibrary.Bridge786', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            assert.equal(Bridge.get(ClientTestLibrary.Bridge786).get(true), "true", "Bridge786 true");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge786).get(false), "false", "Bridge786 false");
        },
        get: function ($throws) {
            return $throws ? "true" : "false";
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge788', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            assert.ok(Bridge.Validation.url("http://127.0.0.1"));
            assert.notOk(Bridge.Validation.url("http://127.0.1"));
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge796', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(5);
            var b = { v : true };

            assert.ok(Bridge.get(ClientTestLibrary.Bridge796).method1(true), "Bridge796 Method1");
            assert.ok(Bridge.get(ClientTestLibrary.Bridge796).method1_1(true), "Bridge796 Method1_1");
            assert.ok(Bridge.get(ClientTestLibrary.Bridge796).method2(true), "Bridge796 Method2");
            assert.notOk(Bridge.get(ClientTestLibrary.Bridge796).method3(b), "Bridge796 Method3");
            assert.notOk(b.v, "Bridge796 Method3 b");
        },
        method1: function ($num) {
            return $num;
        },
        method1_1: function ($throws) {
            return $throws;
        },
        method2: function ($throws) {
            return $throws;
        },
        method3: function ($throws) {
            $throws.v = false;
            return $throws.v;
        }
    }
});

Bridge.define('ClientTestLibrary.IBridge304');

Bridge.define('ClientTestLibrary.Bridge304', {
    inherits: [ClientTestLibrary.IBridge304],
    config: {
        properties: {
            X: null
        }
    },
    f: function (x) {
        this.setX(x);
    },
    f$1: function () {
        this.setX("void F()");
    }
});

Bridge.define('ClientTestLibrary.IBridge693D');

Bridge.define('ClientTestLibrary.Bridge693B.Bridge693C', {
    inherits: [ClientTestLibrary.IBridge693D]
});

Bridge.define('ClientTestLibrary.Bridge693B', {
    inherits: [ClientTestLibrary.Bridge693A$1(ClientTestLibrary.Bridge693B.Bridge693C)],
    constructor: function () {
        ClientTestLibrary.Bridge693A$1(ClientTestLibrary.Bridge693B.Bridge693C).prototype.$constructor.call(this, new ClientTestLibrary.Bridge693B.Bridge693C());

    }
});

Bridge.define('ClientTestLibrary.Bridge266A', {
    statics: {
        test: function () {
            // Nothing gets written for Class1 in the output JavaScript due to the "new object()" argument.
            // If null is used instead (as commented-out) then it works as expected.
            // No compile error.
            return Bridge.get(ClientTestLibrary.Bridge266B).test("test", { });
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge272', {
    statics: {
        test: function (i) {
            return i;
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge381', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(6);

            var s1 = ["a", "b"].join(",");
            assert.equal(s1, "a,b", "Join1");

            var animals = new Bridge.List$1(ClientTestLibrary.Bridge381.Animal)();
            animals.add(new ClientTestLibrary.Bridge381.Animal("Squirrel", "Rodent"));
            animals.add(new ClientTestLibrary.Bridge381.Animal("Gray Wolf", "Carnivora"));
            animals.add(new ClientTestLibrary.Bridge381.Animal("Capybara", "Rodent"));

            var s2 = Bridge.toArray(animals).join(" ");
            assert.equal(s2, "Squirrel Gray Wolf Capybara", "Join2");

            var values = [null, "Cobb", 4189, 11434, 0.366];
            var s31 = values.join("|");
            assert.equal(s31, "|Cobb|4189|11434|0.366", "Join31");

            values[0] = "";
            var s32 = values.join("|");
            assert.equal(s32, "|Cobb|4189|11434|0.366", "Join32");


            var sArr = Bridge.Array.init(10, null);
            for (var i = 0; i < 10; i++) {
                sArr[i] = Bridge.String.format("{0,-3}", i * 5);
            }

            var s4 = sArr.join(":");
            assert.equal(s4, "0  :5  :10 :15 :20 :25 :30 :35 :40 :45 ", "Join4");

            var val = ["apple", "orange", "grape", "pear"];
            var s5 = val.slice(1, 1 + 2).join(", ");
            assert.equal(s5, "orange, grape", "Join5");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge383', {
    statics: {
        doSomething: function (person) {
            return person.getName();
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge501', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(5);

            var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [7]
            ] );
            var z = JSON.stringify(list); // this is ok
            assert.equal(z, "{\"items\":[7]}", "List<int>");

            var b = Bridge.merge(new ClientTestLibrary.Bridge501B(), [
                [1],
                [2]
            ] );
            var y = JSON.stringify(b); // wrong, missing items
            assert.equal(y, "{\"items\":[1,2]}", "Bridge501B");

            var a = Bridge.merge(new ClientTestLibrary.Bridge501A(), [
                [7]
            ] ); // sine items is defined as member, push fails
            var x = JSON.stringify(a);
            assert.equal(x, "{\"items\":[7]}", "Bridge501A");

            var c = Bridge.merge(new ClientTestLibrary.Bridge501A(), JSON.parse(x));
            assert.equal(c.items$1, "12", "Bridge501A Parse c.Items");
            assert.equal(c.getItem(0), 7, "Bridge501A Parse c[0]");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge520', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            var s = new ClientTestLibrary.Bridge520.Source();
            s.fire();

            assert.equal(s.getCounter(), 1, "Bridge520 Counter");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge522', {
    statics: {
        testUseCase1: function (assert) {
            assert.expect(2);

            var dc1 = new ClientTestLibrary.Bridge522.DerivedClass1();
            dc1.addValue(5);

            assert.equal(dc1.getValues().getCount(), 1, "Bridge522 dc1.Count = 1");

            var dc2 = new ClientTestLibrary.Bridge522.DerivedClass1();
            assert.equal(dc2.getValues().getCount(), 0, "Bridge522 dc2.Count = 0");
        },
        testUseCase2: function (assert) {
            assert.expect(2);

            var dc1 = new ClientTestLibrary.Bridge522.DerivedClass2();
            dc1.addValue(5);

            assert.equal(dc1.getValues().getCount(), 1, "Bridge522 dc1.Count = 1");

            var dc2 = new ClientTestLibrary.Bridge522.DerivedClass2();
            assert.equal(dc2.getValues().getCount(), 0, "Bridge522 dc2.Count = 0");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge544', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            var o = Bridge.merge(new Boolean(), JSON.parse("true"));
            assert.equal(o, true, "Bridge544 bool");
        },
        testRelated: function (assert) {
            assert.expect(5);

            var i = Bridge.merge(new Bridge.Int(), JSON.parse("25"));
            assert.equal(i, 25, "Bridge544 int");

            var dbl = Bridge.merge(new Number(), JSON.parse("26.1"));
            assert.equal(dbl, 26.1, "Bridge544 double");

            var d = Bridge.merge(new Bridge.Decimal(), JSON.parse("27.2"));
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, d, 27.2, "Bridge544 decimal");

            var s = Bridge.merge(new String(), JSON.parse("\"Some string\""));
            assert.equal(s, "Some string", "Bridge544 string");
        }
    }
});

/** @namespace ClientTestLibrary */

/**
 * This test will check whether TypedArray types are emitted to JavaScript
 the right way. [#548]
 *
 * @class ClientTestLibrary.Bridge548
 */
Bridge.define('ClientTestLibrary.Bridge548', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(18);

            var isSpecialTypeName = Bridge.get(ClientTestLibrary.Utilities.BrowserHelper).isPhantomJs();

            var v1 = new Float32Array(1);
            var thisType = "Float32Array";
            assert.ok(v1 !== null, thisType + " created");
            var thisName = isSpecialTypeName ? "Object" : thisType;
            assert.equal(Bridge.getTypeName(v1), thisName, thisType + " class name");

            var v2 = new Float64Array(1);
            thisType = "Float64Array";
            assert.ok(v2 !== null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.equal(Bridge.getTypeName(v2), thisName, thisType + " class name");

            var v3 = new Int16Array(1);
            thisType = "Int16Array";
            assert.ok(v3 !== null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.equal(Bridge.getTypeName(v3), thisName, thisType + " class name");

            var v4 = new Int32Array(1);
            thisType = "Int32Array";
            assert.ok(v4 !== null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.equal(Bridge.getTypeName(v4), thisName, thisType + " class name");

            var v5 = new Int8Array(1);
            thisType = "Int8Array";
            assert.ok(v5 !== null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.equal(Bridge.getTypeName(v5), thisName, thisType + " class name");

            var v6 = new Uint16Array(1);
            thisType = "Uint16Array";
            assert.ok(v6 !== null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.equal(Bridge.getTypeName(v6), thisName, thisType + " class name");

            var v7 = new Uint32Array(1);
            thisType = "Uint32Array";
            assert.ok(v7 !== null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.equal(Bridge.getTypeName(v7), thisName, thisType + " class name");

            var v8 = new Uint8Array(1);
            thisType = "Uint8Array";
            assert.ok(v8 !== null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.equal(Bridge.getTypeName(v8), thisName, thisType + " class name");

            var v9 = new Uint8ClampedArray(1);
            thisType = "Uint8ClampedArray";
            assert.ok(v9 !== null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            assert.equal(Bridge.getTypeName(v9), thisName, thisType + " class name");
        }
    }
});

/**
 * This test will check whether TypedArray types correctly inherit from
 the prototype common methods and fields. [#549]
 *
 * @class ClientTestLibrary.Bridge549
 */
Bridge.define('ClientTestLibrary.Bridge549', {
    statics: {
        testUseCase: function (assert) {
            var isToStringToTypeNameLogic = !Bridge.get(ClientTestLibrary.Utilities.BrowserHelper).isChrome();

            assert.expect(153);

            var v1 = new Float32Array(10);
            assert.ok(v1 !== null, "Float32Array created");

            v1[1] = 11;
            v1[5] = 5;
            v1[9] = 99;
            assert.equal(v1[1], 11, "Float32Array indexier works 1");
            assert.equal(v1[9], 99, "Float32Array indexier works 9");

            // Check just a select number of references inside the Prototype inheritance.
            assert.ok(v1.buffer !== null, "Float32Array Buffer");
            assert.equal(v1.byteLength, 40, "Float32Array ByteLength");
            assert.equal(v1.byteOffset, 0, "Float32Array ByteOffset");
            assert.equal(v1.length, 10, "Float32Array Length");

            /* 
             * Commented out. Reason: Only Firefox implements them.
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
            var mA = v1.Join();
            v1.Reverse();
            var mB = v1.Slice();
            var mC = v1.Sort();
             */

            var expectedToStringFloat32Array1 = isToStringToTypeNameLogic ? "[object Float32Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.equal(v1.toLocaleString(), expectedToStringFloat32Array1, "Float32Array ToLocaleString");
            assert.equal(v1.toString(), expectedToStringFloat32Array1, "Float32Array ToString");

            // Some browsers do not support SubArray() with no parameters.
            // At least 'begin' must be provided.
            var subArray11 = v1.subarray(1);
            var expectedToStringFloat32Array2 = isToStringToTypeNameLogic ? "[object Float32Array]" : "11,0,0,0,5,0,0,0,99";
            assert.ok(subArray11 !== null, "Float32Array SubArray1");
            assert.equal(subArray11.length, 9, "Float32Array SubArray1 Length");
            assert.equal(subArray11.toString(), expectedToStringFloat32Array2, "Float32Array SubArray1 ToString");
            assert.equal(subArray11.byteOffset, 4, "Float32Array SubArray1 ByteOffset");

            var subArray12 = subArray11.subarray(2, 6);
            var expectedToStringFloat32Array3 = isToStringToTypeNameLogic ? "[object Float32Array]" : "0,0,5,0";
            assert.ok(subArray12 !== null, "Float32Array SubArray2");
            assert.equal(subArray12.length, 4, "Float32Array SubArray2 Length");
            assert.equal(subArray12.toString(), expectedToStringFloat32Array3, "Float32Array SubArray2 ToString");
            assert.equal(subArray12.byteOffset, 12, "Float32Array SubArray2 ByteOffset");

            var v2 = new Float64Array(10);
            assert.ok(v2 !== null, "Float64Array created");

            v2[1] = 11;
            v2[5] = 5;
            v2[9] = 99;
            assert.equal(v2[1], 11, "Float64Array indexier works 1");
            assert.equal(v2[9], 99, "Float64Array indexier works 9");

            assert.ok(v2.buffer !== null, "Float64Array Buffer");
            assert.equal(v2.byteLength, 80, "Float64Array ByteLength");
            assert.equal(v2.byteOffset, 0, "Float64Array ByteOffset");
            assert.equal(v2.length, 10, "Float64Array Length");

            var expectedToStringFloat64Array1 = isToStringToTypeNameLogic ? "[object Float64Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.equal(v2.toLocaleString(), expectedToStringFloat64Array1, "Float64Array ToLocaleString");
            assert.equal(v2.toString(), expectedToStringFloat64Array1, "Float64Array ToString");

            var subArray21 = v2.subarray(1);
            var expectedToStringFloat64Array2 = isToStringToTypeNameLogic ? "[object Float64Array]" : "11,0,0,0,5,0,0,0,99";
            assert.ok(subArray21 !== null, "Float64Array SubArray1");
            assert.equal(subArray21.length, 9, "Float64Array SubArray1 Length");
            assert.equal(subArray21.toString(), expectedToStringFloat64Array2, "Float64Array SubArray1 ToString");
            assert.equal(subArray21.byteOffset, 8, "Float64Array SubArray1 ByteOffset");

            var subArray22 = subArray21.subarray(2, 6);
            var expectedToStringFloat64Array3 = isToStringToTypeNameLogic ? "[object Float64Array]" : "0,0,5,0";
            assert.ok(subArray22 !== null, "Float64Array SubArray2");
            assert.equal(subArray22.length, 4, "Float64Array SubArray2 Length");
            assert.equal(subArray22.toString(), expectedToStringFloat64Array3, "Float64Array SubArray2 ToString");
            assert.equal(subArray22.byteOffset, 24, "Float64Array SubArray2 ByteOffset");

            var v3 = new Int16Array(10);
            assert.ok(v3 !== null, "Int16Array created");

            v3[1] = 11;
            v3[5] = 5;
            v3[9] = 99;
            assert.equal(v3[1], 11, "Int16Array indexier works 1");
            assert.equal(v3[9], 99, "Int16Array indexier works 9");

            assert.ok(v3.buffer !== null, "Int16Array Buffer");
            assert.equal(v3.byteLength, 20, "Int16Array ByteLength");
            assert.equal(v3.byteOffset, 0, "Int16Array ByteOffset");
            assert.equal(v3.length, 10, "Int16Array Length");

            var expectedToStringInt16Array1 = isToStringToTypeNameLogic ? "[object Int16Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.equal(v3.toLocaleString(), expectedToStringInt16Array1, "Int16Array ToLocaleString");
            assert.equal(v3.toString(), expectedToStringInt16Array1, "Int16Array ToString");

            var subArray31 = v3.subarray(1);
            var expectedToStringInt16Array2 = isToStringToTypeNameLogic ? "[object Int16Array]" : "11,0,0,0,5,0,0,0,99";
            assert.ok(subArray31 !== null, "Int16Array SubArray1");
            assert.equal(subArray31.length, 9, "Int16Array SubArray1 Length");
            assert.equal(subArray31.toString(), expectedToStringInt16Array2, "Int16Array SubArray1 ToString");
            assert.equal(subArray31.byteOffset, 2, "Int16Array SubArray1 ByteOffset");

            var subArray32 = subArray31.subarray(2, 6);
            var expectedToStringInt16Array3 = isToStringToTypeNameLogic ? "[object Int16Array]" : "0,0,5,0";
            assert.ok(subArray32 !== null, "Int16Array SubArray2");
            assert.equal(subArray32.length, 4, "Int16Array SubArray2 Length");
            assert.equal(subArray32.toString(), expectedToStringInt16Array3, "Int16Array SubArray2 ToString");
            assert.equal(subArray32.byteOffset, 6, "Int16Array SubArray2 ByteOffset");

            var v4 = new Int32Array(10);
            assert.ok(v4 !== null, "Int32Array created");

            v4[1] = 11;
            v4[5] = 5;
            v4[9] = 99;
            assert.equal(v4[1], 11, "Int32Array indexier works 1");
            assert.equal(v4[9], 99, "Int32Array indexier works 9");

            assert.ok(v4.buffer !== null, "Int32Array Buffer");
            assert.equal(v4.byteLength, 40, "Int32Array ByteLength");
            assert.equal(v4.byteOffset, 0, "Int32Array ByteOffset");
            assert.equal(v4.length, 10, "Int32Array Length");

            var expectedToStringInt32Array1 = isToStringToTypeNameLogic ? "[object Int32Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.equal(v4.toLocaleString(), expectedToStringInt32Array1, "Int32Array ToLocaleString");
            assert.equal(v4.toString(), expectedToStringInt32Array1, "Int32Array ToString");

            var subArray41 = v4.subarray(1);
            var expectedToStringInt32Array2 = isToStringToTypeNameLogic ? "[object Int32Array]" : "11,0,0,0,5,0,0,0,99";
            assert.ok(subArray41 !== null, "Int32Array SubArray1");
            assert.equal(subArray41.length, 9, "Int32Array SubArray1 Length");
            assert.equal(subArray41.toString(), expectedToStringInt32Array2, "Int32Array SubArray1 ToString");
            assert.equal(subArray41.byteOffset, 4, "Int32Array SubArray1 ByteOffset");

            var subArray42 = subArray41.subarray(2, 6);
            var expectedToStringInt32Array3 = isToStringToTypeNameLogic ? "[object Int32Array]" : "0,0,5,0";
            assert.ok(subArray42 !== null, "Int32Array SubArray2");
            assert.equal(subArray42.length, 4, "Int32Array SubArray2 Length");
            assert.equal(subArray42.toString(), expectedToStringInt32Array3, "Int32Array SubArray2 ToString");
            assert.equal(subArray42.byteOffset, 12, "Int32Array SubArray2 ByteOffset");

            var v5 = new Int8Array(10);
            assert.ok(v5 !== null, "Int8Array created");

            v5[1] = 11;
            v5[5] = 5;
            v5[9] = 99;
            assert.equal(v5[1], 11, "Int8Array indexier works 1");
            assert.equal(v5[9], 99, "Int8Array indexier works 9");

            assert.ok(v5.buffer !== null, "Int8Array Buffer");
            assert.equal(v5.byteLength, 10, "Int8Array ByteLength");
            assert.equal(v5.byteOffset, 0, "Int8Array ByteOffset");
            assert.equal(v5.length, 10, "Int8Array Length");

            var expectedToStringInt8Array1 = isToStringToTypeNameLogic ? "[object Int8Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.equal(v5.toLocaleString(), expectedToStringInt8Array1, "Int8Array ToLocaleString");
            assert.equal(v5.toString(), expectedToStringInt8Array1, "Int8Array ToString");

            var subArray51 = v5.subarray(1);
            var expectedToStringInt8Array2 = isToStringToTypeNameLogic ? "[object Int8Array]" : "11,0,0,0,5,0,0,0,99";
            assert.ok(subArray51 !== null, "Int8Array SubArray1");
            assert.equal(subArray51.length, 9, "Int8Array SubArray1 Length");
            assert.equal(subArray51.toString(), expectedToStringInt8Array2, "Int8Array SubArray1 ToString");
            assert.equal(subArray51.byteOffset, 1, "Int8Array SubArray1 ByteOffset");

            var subArray52 = subArray51.subarray(2, 6);
            var expectedToStringInt8Array3 = isToStringToTypeNameLogic ? "[object Int8Array]" : "0,0,5,0";
            assert.ok(subArray52 !== null, "Int8Array SubArray2");
            assert.equal(subArray52.length, 4, "Int8Array SubArray2 Length");
            assert.equal(subArray52.toString(), expectedToStringInt8Array3, "Int8Array SubArray2 ToString");
            assert.equal(subArray52.byteOffset, 3, "Int8Array SubArray2 ByteOffset");

            var v6 = new Uint16Array(10);
            assert.ok(v6 !== null, "Uint16Array created");

            v6[1] = 11;
            v6[5] = 5;
            v6[9] = 99;
            assert.equal(v6[1], 11, "Uint16Array indexier works 1");
            assert.equal(v6[9], 99, "Uint16Array indexier works 9");

            assert.ok(v6.buffer !== null, "Uint16Array Buffer");
            assert.equal(v6.byteLength, 20, "Uint16Array ByteLength");
            assert.equal(v6.byteOffset, 0, "Uint16Array ByteOffset");
            assert.equal(v6.length, 10, "Uint16Array Length");

            var expectedToStringUint16Array1 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.equal(v6.toLocaleString(), expectedToStringUint16Array1, "Uint16Array ToLocaleString");
            assert.equal(v6.toString(), expectedToStringUint16Array1, "Uint16Array ToString");

            var subArray61 = v6.subarray(1);
            var expectedToStringUint16Array2 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "11,0,0,0,5,0,0,0,99";
            assert.ok(subArray61 !== null, "Uint16Array SubArray1");
            assert.equal(subArray61.length, 9, "Uint16Array SubArray1 Length");
            assert.equal(subArray61.toString(), expectedToStringUint16Array2, "Uint16Array SubArray1 ToString");
            assert.equal(subArray61.byteOffset, 2, "Uint16Array SubArray1 ByteOffset");

            var subArray62 = subArray61.subarray(2, 6);
            var expectedToStringUint16Array3 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "0,0,5,0";
            assert.ok(subArray62 !== null, "Uint16Array SubArray2");
            assert.equal(subArray62.length, 4, "Uint16Array SubArray2 Length");
            assert.equal(subArray62.toString(), expectedToStringUint16Array3, "Uint16Array SubArray2 ToString");
            assert.equal(subArray62.byteOffset, 6, "Uint16Array SubArray2 ByteOffset");

            var v7 = new Uint32Array(10);
            assert.ok(v7 !== null, "Uint32Array created");

            v7[1] = 11;
            v7[5] = 5;
            v7[9] = 99;
            assert.equal(v7[1], 11, "Uint32Array indexier works 1");
            assert.equal(v7[9], 99, "Uint32Array indexier works 9");

            assert.ok(v7.buffer !== null, "Uint32Array Buffer");
            assert.equal(v7.byteLength, 40, "Uint32Array ByteLength");
            assert.equal(v7.byteOffset, 0, "Uint32Array ByteOffset");
            assert.equal(v7.length, 10, "Uint32Array Length");

            var expectedToStringUint32Array1 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.equal(v7.toLocaleString(), expectedToStringUint32Array1, "Uint32Array ToLocaleString");
            assert.equal(v7.toString(), expectedToStringUint32Array1, "Uint32Array ToString");

            var subArray71 = v7.subarray(1);
            var expectedToStringUint32Array2 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "11,0,0,0,5,0,0,0,99";
            assert.ok(subArray71 !== null, "Uint32Array SubArray1");
            assert.equal(subArray71.length, 9, "Uint32Array SubArray1 Length");
            assert.equal(subArray71.toString(), expectedToStringUint32Array2, "Uint32Array SubArray1 ToString");
            assert.equal(subArray71.byteOffset, 4, "Uint32Array SubArray1 ByteOffset");

            var subArray72 = subArray71.subarray(2, 6);
            var expectedToStringUint32Array3 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "0,0,5,0";
            assert.ok(subArray72 !== null, "Uint32Array SubArray2");
            assert.equal(subArray72.length, 4, "Uint32Array SubArray2 Length");
            assert.equal(subArray72.toString(), expectedToStringUint32Array3, "Uint32Array SubArray2 ToString");
            assert.equal(subArray72.byteOffset, 12, "Uint32Array SubArray2 ByteOffset");

            var v8 = new Uint8Array(10);
            assert.ok(v8 !== null, "Uint8Array created");

            v8[1] = 11;
            v8[5] = 5;
            v8[9] = 99;
            assert.equal(v8[1], 11, "Uint8Array indexier works 1");
            assert.equal(v8[9], 99, "Uint8Array indexier works 9");

            assert.ok(v8.buffer !== null, "Uint8Array Buffer");
            assert.equal(v8.byteLength, 10, "Uint8Array ByteLength");
            assert.equal(v8.byteOffset, 0, "Uint8Array ByteOffset");
            assert.equal(v8.length, 10, "Uint8Array Length");

            var expectedToStringUint8Array1 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "0,11,0,0,0,5,0,0,0,99";
            assert.equal(v8.toLocaleString(), expectedToStringUint8Array1, "Uint8Array ToLocaleString");
            assert.equal(v8.toString(), expectedToStringUint8Array1, "Uint8Array ToString");

            var subArray81 = v8.subarray(1);
            var expectedToStringUint8Array2 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "11,0,0,0,5,0,0,0,99";
            assert.ok(subArray81 !== null, "Uint8Array SubArray1");
            assert.equal(subArray81.length, 9, "Uint8Array SubArray1 Length");
            assert.equal(subArray81.toString(), expectedToStringUint8Array2, "Uint8Array SubArray1 ToString");
            assert.equal(subArray81.byteOffset, 1, "Uint8Array SubArray1 ByteOffset");

            var subArray82 = subArray81.subarray(2, 6);
            var expectedToStringUint8Array3 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "0,0,5,0";
            assert.ok(subArray82 !== null, "Uint8Array SubArray2");
            assert.equal(subArray82.length, 4, "Uint8Array SubArray2 Length");
            assert.equal(subArray82.toString(), expectedToStringUint8Array3, "Uint8Array SubArray2 ToString");
            assert.equal(subArray82.byteOffset, 3, "Uint8Array SubArray2 ByteOffset");

            var v9 = new Uint8ClampedArray(10);
            assert.ok(v9 !== null, "Uint8ClampedArray created");

            v9[1] = 11;
            v9[5] = 5;
            v9[9] = 99;
            assert.equal(v9[1], 11, "Uint8ClampedArray indexier works 1");
            assert.equal(v9[9], 99, "Uint8ClampedArray indexier works 9");

            assert.ok(v9.buffer !== null, "Uint8ClampedArray Buffer");
            assert.equal(v9.byteLength, 10, "Uint8ClampedArray ByteLength");
            assert.equal(v9.byteOffset, 0, "Uint8ClampedArray ByteOffset");
            assert.equal(v9.length, 10, "Uint8ClampedArray Length");

            var expectedToStringUint8ClampedArray1 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "0,11,0,0,0,5,0,0,0,99";
            assert.equal(v9.toLocaleString(), expectedToStringUint8ClampedArray1, "Uint8ClampedArray ToLocaleString");
            assert.equal(v9.toString(), expectedToStringUint8ClampedArray1, "Uint8ClampedArray ToString");

            var subArray91 = v9.subarray(1);
            var expectedToStringUint8ClampedArray2 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "11,0,0,0,5,0,0,0,99";
            assert.ok(subArray91 !== null, "Uint8ClampedArray SubArray1");
            assert.equal(subArray91.length, 9, "Uint8ClampedArray SubArray1 Length");
            assert.equal(subArray91.toString(), expectedToStringUint8ClampedArray2, "Uint8ClampedArray SubArray1 ToString");
            assert.equal(subArray91.byteOffset, 1, "Uint8ClampedArray SubArray1 ByteOffset");

            var subArray92 = subArray91.subarray(2, 6);
            var expectedToStringUint8ClampedArray3 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "0,0,5,0";
            assert.ok(subArray92 !== null, "Uint8ClampedArray SubArray2");
            assert.equal(subArray92.length, 4, "Uint8ClampedArray SubArray2 Length");
            assert.equal(subArray92.toString(), expectedToStringUint8ClampedArray3, "Uint8ClampedArray SubArray2 ToString");
            assert.equal(subArray92.byteOffset, 3, "Uint8ClampedArray SubArray2 ByteOffset");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge558', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(4);

            var a = new ClientTestLibrary.Bridge558A();
            var b = new ClientTestLibrary.Bridge558B();

            assert.equal(a.zz(1), 1, "Bridge558 a.zz int");
            assert.equal(a.zz$1(""), 2, "Bridge558 a.zz string");

            assert.equal(b.zz(1), 1, "Bridge558 b.zz int");
            assert.equal(b.zz$1(""), 2, "Bridge558 b.zz string");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge559', {
    statics: {
        testUseCase1: function (assert) {
            var b = new ClientTestLibrary.Bridge559B1("constructor$1", 1);

            assert.expect(1);

            assert.equal(b.result, " -> Bridge559A1 -> Bridge559A1$1 -> Bridge559B1$1", "Bridge559 TestUseCase1");
        },
        testUseCase2: function (assert) {
            var b = new ClientTestLibrary.Bridge559B2("constructor$1", 1);

            assert.expect(1);

            assert.equal(b.result, " ClassA ClassA$1 ClassB$1", "Bridge559 TestUseCase2");
        },
        testUseCase3: function (assert) {
            var a = new ClientTestLibrary.Bridge559A3("constructor", 1);
            var b = new ClientTestLibrary.Bridge559A3("constructor", 2);

            assert.expect(1);

            var r = a.getData() + "|" + b.getData();
            assert.equal(r, "1|2", "Bridge559 TestUseCase3");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge566', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            var ted = new ClientTestLibrary.Bridge566B();
            assert.equal(ted.getData(), "Ted", "#566 Ted");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge577', {
    statics: {
        someMethodA: function (j) {
            return new ClientTestLibrary.Bridge577.Bridge577UnitA();
        },
        someMethodB: function (j) {
            var v = new ClientTestLibrary.Bridge577.Bridge577UnitB();
            v.setNumber(j);

            return v.$clone();
        },
        testUseCase: function (assert) {
            assert.expect(2);

            var a = Bridge.get(ClientTestLibrary.Bridge577).someMethodA(1);
            assert.ok(a.$clone(), "#577 Bridge577UnitA created");

            var b = Bridge.get(ClientTestLibrary.Bridge577).someMethodB(7);
            assert.equal(b.getNumber(), 7, "#577 Bridge577UnitB created");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge583', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(120);

            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 6), Bridge.Decimal(1.4), "Bridge583 1");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 6), Bridge.Decimal(1.6), "Bridge583 2");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 6), Bridge.Decimal(123.4568), "Bridge583 3");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 6), Bridge.Decimal(123.456789), "Bridge583 4");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 6), Bridge.Decimal(123.456789), "Bridge583 5");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 6), Bridge.Decimal(-123.0), "Bridge583 6");

            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 0), 1.5, "Bridge583 Up 1");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 0), 1.6, "Bridge583 Up 2");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 0), 123.4568, "Bridge583 Up 3");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 0), 123.456789, "Bridge583 Up 4");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 0), 123.456789, "Bridge583 Up 5");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 0), -124.0, "Bridge583 Up 6");

            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 4), 1.5, "Bridge583 AwayFromZero 1");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 4), 1.6, "Bridge583 AwayFromZero 2");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 4), 123.4568, "Bridge583 AwayFromZero 3");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 4), 123.456789, "Bridge583 AwayFromZero 4");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 4), 123.456789, "Bridge583 AwayFromZero 5");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 4), -123.0, "Bridge583 AwayFromZero 6");

            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 1), 1.4, "Bridge583 Down 1");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 1), 1.5, "Bridge583 Down 2");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 1), 123.4567, "Bridge583 Down 3");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 1), 123.456789, "Bridge583 Down 4");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 1), 123.456789, "Bridge583 Down 5");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 1), -123.0, "Bridge583 Down 6");

            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 2), 1.5, "Bridge583 InfinityPos 1");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 2), 1.6, "Bridge583 InfinityPos 2");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 2), 123.4568, "Bridge583 InfinityPos 3");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 2), 123.456789, "Bridge583 InfinityPos 4");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 2), 123.456789, "Bridge583 InfinityPos 5");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 2), -123.0, "Bridge583 InfinityPos 6");

            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 3), 1.4, "Bridge583 InfinityNeg 1");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 3), 1.5, "Bridge583 InfinityNeg 2");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 3), 123.4567, "Bridge583 InfinityNeg 3");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 3), 123.456789, "Bridge583 InfinityNeg 4");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 3), 123.456789, "Bridge583 InfinityNeg 5");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 3), -124.0, "Bridge583 InfinityNeg 6");

            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 5), 1.4, "Bridge583 TowardsZero 1");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 5), 1.5, "Bridge583 TowardsZero 2");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 5), 123.4568, "Bridge583 TowardsZero 3");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 5), 123.456789, "Bridge583 TowardsZero 4");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 5), 123.456789, "Bridge583 TowardsZero 5");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 5), -123.0, "Bridge583 TowardsZero 6");

            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 6), 1.4, "Bridge583 ToEven 1");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 6), 1.6, "Bridge583 ToEven 2");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 6), 123.4568, "Bridge583 ToEven 3");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 6), 123.456789, "Bridge583 ToEven 4");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 6), 123.456789, "Bridge583 ToEven 5");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 6), -123.0, "Bridge583 ToEven 6");

            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 7), 1.5, "Bridge583 Ceil 1");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 7), 1.6, "Bridge583 Ceil 2");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 7), 123.4568, "Bridge583 Ceil 3");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 7), 123.456789, "Bridge583 Ceil 4");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 7), 123.456789, "Bridge583 Ceil 5");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 7), -123.0, "Bridge583 Ceil 6");

            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.45), 1, 8), 1.4, "Bridge583 Floor 1");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(1.55), 1, 8), 1.5, "Bridge583 Floor 2");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 4, 8), 123.4568, "Bridge583 Floor 3");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 6, 8), 123.456789, "Bridge583 Floor 4");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(123.456789), 8, 8), 123.456789, "Bridge583 Floor 5");
            Bridge.get(ClientTestLibrary.Utilities.DecimalHelper).assertIsDecimalAndEqualTo$1(assert, Bridge.Decimal.toDecimalPlaces(Bridge.Decimal(-123.456), 0, 8), -123.0, "Bridge583 Floor 6");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge586', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(4);

            assert.throws(function () {
                Bridge.get(ClientTestLibrary.Bridge586A).setSomeDataStatic(Bridge.Decimal(4));
            }, "a.SomeDataStatic is external");
            assert.throws(function () {
                Bridge.get(ClientTestLibrary.Bridge586A).doSomethingStatic();
            }, "a.DoSomethingStatic() is external");

            assert.throws(function () {
                ClientTestLibrary.Bridge586B.setSomeDataStatic(Bridge.Decimal(4));
            }, "b.SomeDataStatic is external");
            assert.throws(function () {
                ClientTestLibrary.Bridge586B.doSomethingStatic();
            }, "b.DoSomethingStatic() is external");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge588A', {
    statics: {
        config: {
            init: function () {
                this.valeur3 = Bridge.get(ClientTestLibrary.Bridge588A).add(Bridge.get(ClientTestLibrary.Bridge588B).Valeur2, 1);
            }
        },
        add: function (a, b) {
            return a + b;
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge588C.C1', {
    statics: {
        config: {
            init: function () {
                this._default = new ClientTestLibrary.Bridge588C.C1(Bridge.get(ClientTestLibrary.Bridge588C.C2).getDefault());
            }
        },
        getDefault: function () {
            return Bridge.get(ClientTestLibrary.Bridge588C.C1)._default;
        }
    },
    config: {
        properties: {
            Value: null
        }
    },
    constructor: function (value) {
        this.setValue(value);
    }
});

Bridge.define('ClientTestLibrary.Bridge595', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            var buffer = new Bridge.Text.StringBuilder();
            var a = new ClientTestLibrary.Bridge595A(buffer);
            a.render();
            assert.equal(buffer.toString(), "Render0Render1", "Bridge595 A");

            buffer.clear();
            var b = new ClientTestLibrary.Bridge595B(buffer);
            b.render();
            assert.equal(buffer.toString(), "Render0Render1", "Bridge595 B");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge597', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            var inst = new ClientTestLibrary.Bridge597A();
            assert.equal(inst.get(), "0:a", "Bridge597 Without instance member access");
            assert.equal(inst.getWithMember(), "HI!:0:a", "Bridge597 With instance member access");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge603B', {
    statics: {
        op_Implicit$2: function (value) {
            var $t;
            value = ($t = value, Bridge.hasValue($t) ? $t : "[Null]");
            return new ClientTestLibrary.Bridge603B("constructor$3", value);
        },
        op_Implicit$1: function (value) {
            return new ClientTestLibrary.Bridge603B("constructor$2", value);
        },
        op_Implicit: function (value) {
            var $t;
            value = ($t = value, Bridge.hasValue($t) ? $t : Bridge.merge(new ClientTestLibrary.Bridge603Class(), {
                setData: "[Null]"
            } ));
            return new ClientTestLibrary.Bridge603B("constructor$1", value);
        },
        getDefaultValue: function () { return new ClientTestLibrary.Bridge603B(); }
    },
    value: null,
    intValue: 0,
    constructor$3: function (value) {
        this.value = value;
        this.intValue = 0;
    },
    constructor$2: function (value) {
        this.value = null;
        this.intValue = value;
    },
    constructor$1: function (value) {
        this.value = value.getData().toString();
        this.intValue = 0;
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
        hash = hash * 23 + (this.intValue == null ? 0 : Bridge.getHashCode(this.intValue));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,ClientTestLibrary.Bridge603B)) {
            return false;
        }
        return Bridge.equals(this.value, o.value) && Bridge.equals(this.intValue, o.intValue);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Bridge603B();
        s.value = this.value;
        s.intValue = this.intValue;
        return s;
    }
});

Bridge.define('ClientTestLibrary.Bridge606', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(5);

            var c = new ClientTestLibrary.Bridge606C();
            c.example1("b", "a");
            assert.equal(c.getX(), "b", "Bridge606 C X");
            assert.equal(c.getY(), "a", "Bridge606 C Y");

            var b = new ClientTestLibrary.Bridge606B("b", "a");
            assert.equal(b.getX(), "b", "Bridge606 B X");
            assert.equal(b.getY(), "a", "Bridge606 B Y");

            var s = ClientTestLibrary.Bridge606A.example2("123", "b", "a");
            assert.equal(s, "123 - b - a", "Bridge606 123");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge607', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(4);

            var c = new ClientTestLibrary.Opti$1(String)();
            var c1 = new ClientTestLibrary.Class1();

            assert.ok(c.equals(c));
            assert.notOk(c.equals(null));

            assert.ok(c1.equals(c1));
            assert.notOk(c1.equals(null));
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge608', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            var s = new ClientTestLibrary.Bridge608A("constructor$1", "test");
            var o = "test";
            assert.ok(s.equals(o), "Bridge608 Object");
            assert.ok(s.equals$1("test"), "Bridge608 String");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge623', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(8);

            var func1 = function () {
                return (Bridge.caller[0] || this).foo;
            };

            var point1 = new ClientTestLibrary.Bridge623A(1, func1);
            var point2 = new ClientTestLibrary.Bridge623A(2, func1);

            assert.equal(point1.call(), 1, "Bridge623A point1 func1");
            assert.equal(point2.call(), 2, "Bridge623A point2 func1");

            var point3 = new ClientTestLibrary.Bridge623B1(3, func1);
            var point4 = new ClientTestLibrary.Bridge623B1(4, func1);

            assert.equal(point3.call(), 3, "Bridge623B1 point3 func1");
            assert.equal(point4.call(), 4, "Bridge623B1 point4 func1");

            var func2 = function () {
                return (Bridge.caller[0] || this).getFoo();
            };

            var point5 = new ClientTestLibrary.Bridge623B1(5, func2);
            var point6 = new ClientTestLibrary.Bridge623B1(6, func2);

            assert.equal(point5.call(), 10, "Bridge623B1 point5 func2");
            assert.equal(point6.call(), 12, "Bridge623B1 point6 func2");

            var func3 = function () {
                return (Bridge.caller[0] || this).getFoo();
            };

            var point7 = new ClientTestLibrary.Bridge623B2(7, func3);
            var point8 = new ClientTestLibrary.Bridge623B2(8, func3);

            assert.equal(point7.call(), 1021, "Bridge623B2 point7 func3");
            assert.equal(point8.call(), 1024, "Bridge623B2 point8 func3");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge625', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(4);

            var list = [1, 2, 3];

            var d1 = Bridge.Linq.Enumerable.from(list).toDictionary(function (x) {
                return x;
            }, null, Bridge.Int, Bridge.Int);
            assert.ok(true, "Bridge625 d1");

            var d2 = Bridge.Linq.Enumerable.from(list).toDictionary(function (x) {
                return x;
            }, null, Bridge.Int, Bridge.Int, new ClientTestLibrary.Bridge625A());
            assert.ok(true, "Bridge625 d2");

            var d3 = Bridge.Linq.Enumerable.from(list).toDictionary(function (x) {
                return x;
            }, function (y) {
                return y;
            }, Bridge.Int, Bridge.Int);
            assert.ok(true, "Bridge625 d3");

            var d4 = Bridge.Linq.Enumerable.from(list).toDictionary(function (x) {
                return x;
            }, function (y) {
                return y;
            }, Bridge.Int, Bridge.Int, new ClientTestLibrary.Bridge625A());
            assert.ok(true, "Bridge625 d4");

        }
    }
});

Bridge.define('ClientTestLibrary.Bridge634', {
    statics: {
        testUseCase1: function (assert) {
            var $t;
            assert.expect(1);

            var hashSet = new Bridge.Collections.HashSet$1(String)("constructor");

            hashSet.add$1("a");
            hashSet.add$1("b");
            hashSet.add$1("c");

            var text = "";

            $t = Bridge.getEnumerator(hashSet);
            while ($t.moveNext()) {
                var s = $t.getCurrent();
                text += s;
            }

            assert.equal(text, "abc", "Bridge634: foreach works for HashSet");
        },
        testUseCase2: function (assert) {
            assert.expect(21);

            var a = new ClientTestLibrary.Bridge634A$1(String)();
            var a1 = new ClientTestLibrary.Bridge634A$1.Nested(String)();
            var a2 = new ClientTestLibrary.Bridge634A$1.Nested$1(String,Bridge.Int)();
            var a3 = new ClientTestLibrary.Bridge634A$1.Nested.SubNested(String)();
            var a4 = new ClientTestLibrary.Bridge634A$1.Nested.SubNested$1(String,Bridge.Int)();
            var a5 = new ClientTestLibrary.Bridge634A$1.Nested$1.SubNested(String,Bridge.Int)();
            var a6 = new ClientTestLibrary.Bridge634A$1.Nested$1.SubNested$1(String,Bridge.Int,Bridge.Int)();

            assert.equal(Bridge.getTypeName(a), "ClientTestLibrary.Bridge634A$1$String", "Bridge634 A a");
            assert.equal(Bridge.getTypeName(a1), "ClientTestLibrary.Bridge634A$1.Nested$String", "Bridge634 A a1");
            assert.equal(Bridge.getTypeName(a2), "ClientTestLibrary.Bridge634A$1.Nested$1$String$Bridge.Int", "Bridge634 A a2");
            assert.equal(Bridge.getTypeName(a3), "ClientTestLibrary.Bridge634A$1.Nested.SubNested$String", "Bridge634 A a3");
            assert.equal(Bridge.getTypeName(a4), "ClientTestLibrary.Bridge634A$1.Nested.SubNested$1$String$Bridge.Int", "Bridge634 A a4");
            assert.equal(Bridge.getTypeName(a5), "ClientTestLibrary.Bridge634A$1.Nested$1.SubNested$String$Bridge.Int", "Bridge634 A a5");
            assert.equal(Bridge.getTypeName(a6), "ClientTestLibrary.Bridge634A$1.Nested$1.SubNested$1$String$Bridge.Int$Bridge.Int", "Bridge634 A a6");

            var b = new ClientTestLibraryCustom.Bridge634B$1(String)();
            var b1 = new ClientTestLibraryCustom.Bridge634B$1.Nested(String)();
            var b2 = new ClientTestLibraryCustom.Bridge634B$1.Nested$1(String,Bridge.Int)();
            var b3 = new ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested(String)();
            var b4 = new ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$1(String,Bridge.Int)();
            var b5 = new ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested(String,Bridge.Int)();
            var b6 = new ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$1(String,Bridge.Int,Bridge.Int)();

            assert.equal(Bridge.getTypeName(b), "ClientTestLibraryCustom.Bridge634B$1$String", "Bridge634 B b");
            assert.equal(Bridge.getTypeName(b1), "ClientTestLibraryCustom.Bridge634B$1.Nested$String", "Bridge634 B b1");
            assert.equal(Bridge.getTypeName(b2), "ClientTestLibraryCustom.Bridge634B$1.Nested$1$String$Bridge.Int", "Bridge634 B b2");
            assert.equal(Bridge.getTypeName(b3), "ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$String", "Bridge634 B b3");
            assert.equal(Bridge.getTypeName(b4), "ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$1$String$Bridge.Int", "Bridge634 B b4");
            assert.equal(Bridge.getTypeName(b5), "ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$String$Bridge.Int", "Bridge634 B b5");
            assert.equal(Bridge.getTypeName(b6), "ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$1$String$Bridge.Int$Bridge.Int", "Bridge634 B b6");

            var c = new ClientTestLibrary.Bridge634C();
            var c1 = new ClientTestLibrary.Bridge634C.Nested();
            var c2 = new ClientTestLibrary.Bridge634C.Nested$1(Bridge.Int)();
            var c3 = new ClientTestLibrary.Bridge634C.Nested.SubNested();
            var c4 = new ClientTestLibrary.Bridge634C.Nested.SubNested$1(Bridge.Int)();
            var c5 = new ClientTestLibrary.Bridge634C.Nested$1.SubNested(Bridge.Int)();
            var c6 = new ClientTestLibrary.Bridge634C.Nested$1.SubNested$1(Bridge.Int,Bridge.Int)();

            assert.equal(Bridge.getTypeName(c), "ClientTestLibrary.Bridge634C", "Bridge634 C c");
            assert.equal(Bridge.getTypeName(c1), "ClientTestLibrary.Bridge634C.Nested", "Bridge634 C c1");
            assert.equal(Bridge.getTypeName(c2), "ClientTestLibrary.Bridge634C.Nested$1$Bridge.Int", "Bridge634 C c2");
            assert.equal(Bridge.getTypeName(c3), "ClientTestLibrary.Bridge634C.Nested.SubNested", "Bridge634 C c3");
            assert.equal(Bridge.getTypeName(c4), "ClientTestLibrary.Bridge634C.Nested.SubNested$1$Bridge.Int", "Bridge634 C c4");
            assert.equal(Bridge.getTypeName(c5), "ClientTestLibrary.Bridge634C.Nested$1.SubNested$Bridge.Int", "Bridge634 C c5");
            assert.equal(Bridge.getTypeName(c6), "ClientTestLibrary.Bridge634C.Nested$1.SubNested$1$Bridge.Int$Bridge.Int", "Bridge634 C c6");
        },
        testUseCaseFor658: function (assert) {
            assert.expect(2);

            var d = new Bridge634D();
            var d1 = new Bridge634D.Nested();

            assert.equal(Bridge.getTypeName(d), "Bridge634D", "Bridge634 D d");
            assert.equal(Bridge.getTypeName(d1), "Bridge634D.Nested", "Bridge634 D d1");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge635', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(4);

            var a = new ClientTestLibrary.Bridge635A();
            var b = new ClientTestLibrary.Bridge635B();

            assert.equal(typeof a.internalFunc1, "function", "Bridge635 A.internalFunc1");
            assert.equal(a["internalFunc1"](), "A.Test1", "Bridge635 A.internalFunc1 Invoke");

            assert.equal(typeof b.internalFunc1, "function", "Bridge635 B.internalFunc1");
            assert.equal(b["internalFunc1"](), "B.Test1", "Bridge635 B.internalFunc1 Invoke");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge647', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(3);

            var a = { bar: 1 };
            assert.equal(a.bar, 1, "Bridge647 A");

            var b = { bar: 1, bar1: 12 };
            assert.equal(b.bar, 1, "Bridge647 B bar");
            assert.equal(b.bar1, 12, "Bridge647 B bar1");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge648', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            var wrappedString = new ClientTestLibrary.Bridge648A("test");
            var stringArray = Bridge.Array.init(0, null);
            stringArray.push(ClientTestLibrary.Bridge648A.op_Implicit(wrappedString));

            assert.equal(stringArray[0], "test");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge652', {
    statics: {
        log: null,
        testUseCase: function (assert) {
            assert.expect(4);

            Bridge.get(ClientTestLibrary.Bridge652).log = null;
            var c = new ClientTestLibrary.Bridge652.Bridge652A1();
            assert.notEqual(c.bar, null, "Bridge652A1 Bar NotNull");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge652).log, "Bridge652B1", "Bridge652A1 log");

            Bridge.get(ClientTestLibrary.Bridge652).log = null;
            var d = new ClientTestLibrary.Bridge652.Bridge652A2();
            assert.notEqual(d.bar, null, "Bridge652A2 Bar NotNull");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge652).log, "Bridge652B2", "Bridge652A2 log");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge660MessageStore', {
    statics: {
        config: {
            init: function () {
                this._initialEditState = new ClientTestLibrary.Bridge660MessageEditState(new ClientTestLibrary.Bridge660TextInputState("constructor", "Message"));
            }
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge687', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            var c = new ClientTestLibrary.Bridge687A(null);
            var case1 = false;
            if (c === null) {
                case1 = true;
            }
            assert.equal(case1, false, "Bridge687 case1");

            c = new ClientTestLibrary.Bridge687A("test");
            var case2 = false;
            if (ClientTestLibrary.Bridge687A.op_Implicit(c) === "test") {
                case2 = true;
            }
            assert.equal(case2, true, "Bridge687 case2");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge690', {
    statics: {
        testUseCaseForInstance: function (assert) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                done, 
                c, 
                r, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    for (;;) {
                        switch ($step) {
                            case 0: {
                                assert.expect(1);
                                
                                done = assert.async();
                                c = new ClientTestLibrary.Bridge690A();
                                $task1 = c.start();
                                $step = 1;
                                $task1.continueWith($asyncBody, true);
                                return;
                            }
                            case 1: {
                                $taskResult1 = $task1.getResult();
                                r = $taskResult1;
                                
                                assert.equal(r, 8, "Bridge690 TestUseCaseForInstance");
                                done();
                                return;
                            }
                            default: {
                                return;
                            }
                        }
                    }
                }, arguments);

            $asyncBody();
        },
        testUseCaseForStatic: function (assert) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                done, 
                r, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    for (;;) {
                        switch ($step) {
                            case 0: {
                                assert.expect(1);
                                
                                done = assert.async();
                                $task1 = Bridge.get(ClientTestLibrary.Bridge690B).start();
                                $step = 1;
                                $task1.continueWith($asyncBody, true);
                                return;
                            }
                            case 1: {
                                $taskResult1 = $task1.getResult();
                                r = $taskResult1;
                                
                                assert.equal(r, 59, "Bridge690 TestUseCaseForStatic");
                                done();
                                return;
                            }
                            default: {
                                return;
                            }
                        }
                    }
                }, arguments);

            $asyncBody();
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge693', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            var c = new ClientTestLibrary.Bridge693B();
            assert.notEqual(c, null, "Bridge693 not null");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge762', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(4);

            var test1 = null;
            var test2 = null;
            var test3 = null;

            var value1 = Bridge.Nullable.getValueOrDefault(test1, Bridge.getDefaultValue(Bridge.Int));
            var value2 = Bridge.Nullable.getValueOrDefault(test2, Bridge.getDefaultValue(ClientTestLibrary.Bridge762A));
            var value3 = Bridge.Nullable.getValueOrDefault(test3, Bridge.getDefaultValue(ClientTestLibrary.Bridge762B));

            assert.equal(value1, 0, "Bridge762 int");
            assert.notEqual(value2.$clone(), null, "Bridge762A struct");
            assert.notEqual(value3.$clone(), null, "Bridge762B struct");
            assert.equal(value3.getData(), 0, "Bridge762B.Data struct");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge537', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            assert.equal(Bridge.get(ClientTestLibrary.Bridge537B).testB1(), 2, "Bridge537 TestB1");

            assert.equal(Bridge.get(ClientTestLibrary.Bridge537B).testB2(), 1, "Bridge537 TestB2");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge588C', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(9);

            var c2 = new ClientTestLibrary.Bridge588C.C2("C2 value");
            assert.ok(c2 !== null, "Bridge588 C2");
            assert.equal(c2.getName(), "C2 value", "Bridge588 C2.Name");

            var c1 = new ClientTestLibrary.Bridge588C.C1(c2);
            assert.ok(c1 !== null, "Bridge588 C1");
            assert.equal(c1.getValue().getName(), "C2 value", "Bridge588 C1.Value.Name");

            assert.ok(Bridge.get(ClientTestLibrary.Bridge588C.C1).getDefault() !== null, "Bridge588 C1.Default");
            assert.ok(Bridge.get(ClientTestLibrary.Bridge588C.C1).getDefault().getValue() !== null, "Bridge588 C1.Default.Value");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge588C.C1).getDefault().getValue().getName(), "default", "Bridge588 C1.Default.Value.Name");
            assert.ok(Bridge.get(ClientTestLibrary.Bridge588C.C2).getDefault() !== null, "Bridge588 C2.Default");
            assert.ok(Bridge.get(ClientTestLibrary.Bridge588C.C2).getDefault().getName() !== null, "Bridge588 C2.Default.Name");

        }
    }
});

Bridge.define('ClientTestLibrary.Bridge603', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            var c = ClientTestLibrary.Bridge603A.op_Implicit(null);
            assert.equal(c.value, "[Null]", "Bridge603A TestUseCase Null");

            c = ClientTestLibrary.Bridge603A.op_Implicit("Test");
            assert.equal(c.value, "Test", "Bridge603A TestUseCase String");
        },
        testRelated: function (assert) {
            assert.expect(5);

            var b = ClientTestLibrary.Bridge603B.op_Implicit$1(12345);
            assert.equal(b.intValue, 12345, "Bridge603B TestRelated Int");

            var c = ClientTestLibrary.Bridge603B.op_Implicit$2(Bridge.cast(null, String));
            assert.equal(c.value, "[Null]", "Bridge603B TestRelated String Null");

            c = ClientTestLibrary.Bridge603B.op_Implicit$2("Test");
            assert.equal(c.value, "Test", "Bridge603B TestRelated String");

            var d = ClientTestLibrary.Bridge603B.op_Implicit(Bridge.cast(null, ClientTestLibrary.Bridge603Class));
            assert.equal(d.value, "[Null]", "Bridge603B TestRelated Bridge603Class Null");

            d = ClientTestLibrary.Bridge603B.op_Implicit(Bridge.merge(new ClientTestLibrary.Bridge603Class(), {
                setData: "Test 603B"
            } ));
            assert.equal(d.value, "Test 603B", "Bridge603B TestRelated Bridge603Class");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge660', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(1);

            assert.equal(Bridge.get(ClientTestLibrary.Bridge660MessageStore)._initialEditState.getContent().getText(), "Message", "Bridge660 Initialize static members before first access to the class");
        }
    }
});

Bridge.define('ClientTestLibrary.TestBridgeIssues', {
    statics: {
        n169: function (assert) {
            assert.expect(2);

            // TEST
            Bridge.get(ClientTestLibrary.Bridge169).m1();
            assert.deepEqual(Bridge.get(ClientTestLibrary.Bridge169).number, 1, "M1()");

            // TEST
            Bridge.get(ClientTestLibrary.Bridge169).m2();
            assert.deepEqual(Bridge.get(ClientTestLibrary.Bridge169).number, 2, "M2()");
        },
        n240: function (assert) {
            assert.expect(3);

            // TEST
            var b = new ClientTestLibrary.Bridge240B();
            assert.ok(b !== null, "Instance of B created");
            assert.equal(b.getString(), "B", "b.GetString() = 'B'");
            assert.equal(b.getData(), 1, "b.Data = 1");
        },
        n264: function (assert) {
            assert.expect(1);

            // TEST
            var oldHash = Bridge.global.location.hash;
            Bridge.global.location.hash = "#new-hash";
            assert.equal(Bridge.global.location.hash, "#new-hash", "Setting Location.Hash works");
            Bridge.global.location.hash = oldHash; // to clean up the url
        },
        n266: function (assert) {
            assert.expect(1);

            // TEST
            assert.ok(Bridge.get(ClientTestLibrary.Bridge266A).test() !== null, "new object() call transpiled");
        },
        n272: function (assert) {
            assert.expect(3);

            // TEST
            assert.deepEqual(Bridge.get(ClientTestLibrary.Bridge272).test(1), Bridge.get(ClientTestLibrary.Bridge272.MyEnum).abc, "Casted MyEnum.Abc");
            assert.deepEqual(Bridge.get(ClientTestLibrary.Bridge272).test(3), Bridge.get(ClientTestLibrary.Bridge272.MyEnum).ghi, "Casted MyEnum.Ghi");
            assert.deepEqual(Bridge.get(ClientTestLibrary.Bridge272).test(4), 4, "Casted MyEnum.Abc");
        },
        n273: function (assert) {
            assert.expect(4);

            // TEST
            var items = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [0],
                [1],
                [2],
                [3],
                [4]
            ] );

            var r = items.slice(-1).toArray();
            assert.deepEqual(r, [4], "Slices start = -1");

            r = items.slice(1).toArray();
            assert.deepEqual(r, [1, 2, 3, 4], "Slices start = 1");

            r = items.slice(-3, 4).toArray();
            assert.deepEqual(r, [2, 3], "Slices start = -3, end = 3");

            r = items.slice(1, 3).toArray();
            assert.deepEqual(r, [1, 2], "Slices start = 1, end = 2");
        },
        n277: function (assert) {
            assert.expect(1);

            assert.equal(Bridge.get(ClientTestLibrary.Bridge277).$int, 0, "Enum member with reserved name initialized");
        },
        n294: function (assert) {
            assert.expect(2);

            var c = new ClientTestLibrary.Bridge294("Vlad");

            assert.equal(c.getName(), "Vlad", "Class method works");
            assert.equal(c.getNameThroughGeneric(Bridge.Int)(), "Vlad", "Generic class method works");
        },
        n304: function (assert) {
            assert.expect(2);

            var c = new ClientTestLibrary.Bridge304();
            var i = c;

            i.f("1");
            assert.equal(c.getX(), "1", "Interface method works");

            c.f$1();
            assert.equal(c.getX(), "void F()", "Class method works");
        },
        n305: function (assert) {
            var $t;
            assert.expect(1);

            var c = new ClientTestLibrary.Bridge305(["1", "2", "3"]);

            var result = "";
            $t = Bridge.getEnumerator(c);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                result = result + item;
            }

            assert.equal(result, "123", "IEnumerator works");
        },
        n306: function (assert) {
            assert.expect(2);

            var b = Bridge.get(ClientTestLibrary.Bridge306B).$new(Bridge.merge(new ClientTestLibrary.Bridge306B.Props(), {
                name: "B"
            } ));
            assert.equal(b, "ClientTestLibrary.Bridge306B.Props:B", "Bridge306B.New() works");

            var a = Bridge.get(ClientTestLibrary.Bridge306A).$new(Bridge.merge(new ClientTestLibrary.Bridge306A.Props(), {
                name: "A"
            } ));
            assert.equal(a, "ClientTestLibrary.Bridge306A.Props:A", "Bridge306A.New() works");
        },
        n335: function (assert) {
            assert.expect(1);

            var l = new Bridge.List$1(String)(["1", "2", "3", "1"]);
            assert.equal(l.indexOf("1", 2), 3, "IndexOf with startIndex used");
        },
        n336: function (assert) {
            assert.expect(2);

            var l = new Bridge.List$1(String)(["4"]);

            l.insertRange(0, ["1", "2"]);
            assert.deepEqual(l.toArray(), ["1", "2", "4"], "InsertRange works (1)");

            l.insertRange(2, ["3"]);
            assert.deepEqual(l.toArray(), ["1", "2", "3", "4"], "InsertRange works (2)");
        },
        n337: function (assert) {
            assert.expect(4);

            var l = new Bridge.List$1(String)(["1", "2"]);

            var b = l.remove("7");
            assert.notOk(b, "Remove() not existing element returns false");
            assert.deepEqual(l.toArray(), ["1", "2"], "Remove() not existing does not change the List");

            b = l.remove("2");
            assert.ok(b, "Remove() existing element returns true");
            assert.deepEqual(l.toArray(), ["1"], "Remove() not existing changes the List");
        },
        n338: function (assert) {
            assert.expect(1);

            var l = new Bridge.List$1(String)(1000);

            var b = Bridge.is(l, Bridge.IList$1(String));

            assert.ok(b, "List<T> declares it implemets IList<T>");
        },
        n339: function (assert) {
            assert.expect(2);

            var c = new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn);

            assert.ok(c !== null, "Comparer<int>.Default works");
            assert.ok(Bridge.is(c, Bridge.IComparer$1(Bridge.Int)), "Comparer<T> declares it implemets IComparer<T>");
        },
        n340: function (assert) {
            assert.expect(6);

            var c = new Bridge.EqualityComparer$1(Bridge.Int)();

            assert.ok(c !== null, "EqualityComparer<int>.Default works");
            assert.ok(c.equals(10, 10), "EqualityComparer<int>.Default.Equals(10, 10) works");
            assert.notOk(c.equals(10, 11), "EqualityComparer<int>.Default.Equals(10, 11) works");

            var s = new Bridge.EqualityComparer$1(String)();
            assert.ok(s !== null, "EqualityComparer<string>.Default works");
            assert.ok(s.equals("a", "a"), "EqualityComparer<string>.Default.Equals(\"a\", \"a\") works");
            assert.notOk(s.equals("a", "b"), "EqualityComparer<string>.Default.Equals(\"a\", \"b\") works");
        },
        n341: function (assert) {
            assert.expect(4);

            var o11 = { };
            var o12 = { };
            var b1 = new Bridge.EqualityComparer$1(Object)().equals(o11, o12);
            assert.notOk(b1, "EqualityComparer<object>.Default.Equals(o11, o12) works");

            var o21 = { i: 7 };
            var o22 = { i: 7 };
            var b2 = new Bridge.EqualityComparer$1(Object)().equals(o21, o22);
            assert.ok(b2, "EqualityComparer<object>.Default.Equals(o21, o22) works");

            var o31 = Bridge.merge(new ClientTestLibrary.Bridge341A(), {
                setStr: "String"
            } );
            var o32 = Bridge.merge(new ClientTestLibrary.Bridge341A(), {
                setStr: "String"
            } );
            var b3 = new Bridge.EqualityComparer$1(Object)().equals(o31, o32);
            assert.notOk(b3, "EqualityComparer<object>.Default.Equals(o31, o32) works");

            var o41 = Bridge.merge(new ClientTestLibrary.Bridge341B(), {
                setStr: "String"
            } );
            var o42 = Bridge.merge(new ClientTestLibrary.Bridge341B(), {
                setStr: "String"
            } );
            var b4 = new Bridge.EqualityComparer$1(Object)().equals(o41, o42);
            assert.ok(b4, "EqualityComparer<object>.Default.Equals(o41, o42) works");
        },
        n342: function (assert) {
            assert.expect(2);

            var dictionary = new ClientTestLibrary.Bridge342("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
                [3, "b"],
                [6, "z"],
                [9, "x"]
            ] ));

            var interfacedDictionary = Bridge.cast(dictionary, Bridge.IDictionary$2(Bridge.Int,String));

            assert.equal(interfacedDictionary.getItem(6), "z", "IDictionary getter works");
            assert.throws(function () {
                var r = interfacedDictionary.getItem(1);
            }, "IDictionary getter throws exception when incorrect key used");
        },
        n377: function (assert) {
            assert.expect(6);

            var objectLiteralInstance = { field1: "field1 value", field3: 7 };

            assert.equal(objectLiteralInstance.hasOwnProperty("field1"), true, "ObjectLiteral's field with an explicit value is emitted");
            assert.equal(objectLiteralInstance.field1, "field1 value", "ObjectLiteral's field with an explicit value is emitted correctly");

            assert.equal(objectLiteralInstance.hasOwnProperty("field3"), true, "ObjectLiteral's field with an explicit value is emitted");
            assert.equal(objectLiteralInstance.field3, 7, "ObjectLiteral's field with an explicit value is emitted correctly");

            assert.equal(objectLiteralInstance.hasOwnProperty("field2"), false, "ObjectLiteral's field without an explicit value is not emitted");
            assert.equal(objectLiteralInstance.hasOwnProperty("field4"), false, "ObjectLiteral's field without an explicit value is not emitted");
        },
        n383: function (assert) {
            assert.expect(2);

            var person1 = Bridge.merge(new ClientTestLibrary.Person383(), {
                setName: "Johnny"
            } );
            var msg1 = ClientTestLibrary.Bridge383.doSomething(person1);

            assert.equal(msg1, "Johnny", "Instance extention Johnny");

            var person2 = Bridge.merge(new ClientTestLibrary.Person383(), {
                setName: "Madison"
            } );
            var msg2 = Bridge.get(ClientTestLibrary.Bridge383).doSomething(person2);

            assert.equal(msg2, "Madison", "Static extention Madison");
        },
        n395: function (assert) {
            var $t;
            assert.expect(3);

            var _dictOfTests = new Bridge.Dictionary$2(String,ClientTestLibrary.Bridge395)();

            var tests = [Bridge.merge(new ClientTestLibrary.Bridge395(), {
                setId: "a"
            } ), Bridge.merge(new ClientTestLibrary.Bridge395(), {
                setId: "b"
            } )];

            $t = Bridge.getEnumerator(tests);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                if (!_dictOfTests.containsKey(item.getId())) {
                    _dictOfTests.set(item.getId(), item);
                }
            }

            assert.equal(_dictOfTests.getCount(), 2, "All items added");
            assert.equal(_dictOfTests.get("a").getId(), "a", "First element is a");
            assert.equal(_dictOfTests.get("b").getId(), "b", "Second element is b");
        },
        n406: function (assert) {
            var TESTA = "TESTA";
            var TESTB = "TESTB";
            var TESTC = "TESTC";
            var TESTD = "TESTD";
            var TESTE = "TESTE";
            var TESTF = "TESTF";
            var TESTG = "TESTG";

            var test = TESTD;
            var result = null;
            switch (test) {
                case TESTA: 
                    result = TESTA;
                    break;
                case TESTB: 
                    result = TESTB;
                    break;
                case TESTC: 
                    result = TESTC;
                    break;
                case TESTD: 
                    result = TESTD;
                    break;
                case TESTE: 
                    result = TESTE;
                    break;
                case TESTF: 
                    result = TESTF;
                    break;
                case TESTG: 
                    result = TESTG;
                    break;
            }

            assert.equal(result, "TESTD", "TESTD");
        },
        n407: function (assert) {
            var vec = Bridge.merge(new ClientTestLibrary.Bridge407(), {
                setA: 1
            } );
            vec = ClientTestLibrary.Bridge407.op_Addition(vec.$clone(), Bridge.merge(new ClientTestLibrary.Bridge407(), {
                setA: 2
            } ));

            assert.equal(vec.getA(), 3, "Vec.A = 3");

            var a = 2;
            a += 5;
            assert.equal(a, 7, "a = 7");
        },
        n409: function (assert) {
            var a = Bridge.Decimal.round(Bridge.Decimal(3.5), 6);
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, a, "4", "Math.Round(3.5M)");

            var b = Bridge.Decimal.round(Bridge.Decimal(4.5), 6);
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, b, "4", "Math.Round(4.5M)");
        },
        ensureNumber: function (assert, actual, expected, message) {
            assert.equal(actual.toString(), expected, message);
        },
        assertAlmostEqual: function (assert, actual, expected, message) {
            var diff = expected - actual;
            if (diff < 0) {
                diff = -diff;
            }

            assert.ok(diff < 1E-08, message + "actual: " + actual + "expeted:" + expected);
        },
        n410: function (assert) {
            // Decimal consts
            var DecimalZero = Bridge.Decimal.Zero;
            var DecimalOne = Bridge.Decimal.One;
            var DecimalMinusOne = Bridge.Decimal.MinusOne;
            var DecimalMaxValue = Bridge.Decimal.MaxValue;
            var DecimalMinValue = Bridge.Decimal.MinValue;

            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DecimalZero, "0", "DecimalZero");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DecimalOne, "1", "DecimalOne");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DecimalMinusOne, "-1", "DecimalMinusOne");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DecimalMaxValue, "7.9228162514264337593543950335e+28", "DecimalMaxValue");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DecimalMinValue, "-7.9228162514264337593543950335e+28", "DecimalMinValue");

            // Decimal consts in expressions
            DecimalZero  = Bridge.Decimal.Zero.add(Bridge.Decimal(0));
            DecimalOne  = Bridge.Decimal.One.add(Bridge.Decimal(0));
            ;
            DecimalMinusOne  = Bridge.Decimal.MinusOne.add(Bridge.Decimal(0));
            ;
            DecimalMaxValue  = Bridge.Decimal.MaxValue.add(Bridge.Decimal(0));
            ;
            DecimalMinValue  = Bridge.Decimal.MinValue.add(Bridge.Decimal(0));
            ;

            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DecimalZero, "0", "DecimalZeroin expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DecimalOne, "1", "DecimalOnein expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DecimalMinusOne, "-1", "DecimalMinusOnein expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DecimalMaxValue, "7.9228162514264337593543950335e+28", "DecimalMaxValuein expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DecimalMinValue, "-7.9228162514264337593543950335e+28", "DecimalMinValuein expression");

            // Double consts
            var DoubleMaxValue = Number.MAX_VALUE;
            var DoubleMinValue = Number.MIN_VALUE;
            var DoubleEpsilon = 4.94065645841247E-324;
            var DoubleNegativeInfinity = Number.NEGATIVE_INFINITY;
            var DoublePositiveInfinity = Number.POSITIVE_INFINITY;
            var DoubleNaN = Number.NaN;

            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoubleMaxValue, "1.7976931348623157e+308", "DoubleMaxValue");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoubleMinValue, "5e-324", "DoubleMinValue");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoubleEpsilon, "5e-324", "DoubleEpsilon");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoubleNegativeInfinity, "-Infinity", "DoubleNegativeInfinity");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoublePositiveInfinity, "Infinity", "DoublePositiveInfinity");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoubleNaN, "NaN", "DoubleNaN");

            // Double consts in expressions
            DoubleMaxValue = Number.MAX_VALUE + 0;
            DoubleMinValue = Number.MIN_VALUE + 0;
            DoubleEpsilon = 4.94065645841247E-324;
            DoubleNegativeInfinity = Number.NEGATIVE_INFINITY + 0;
            DoublePositiveInfinity = Number.POSITIVE_INFINITY + 0;
            DoubleNaN = Number.NaN + 0;

            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoubleMaxValue, "1.7976931348623157e+308", "DoubleMaxValuein expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoubleMinValue, "5e-324", "DoubleMinValuein expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoubleEpsilon, "5e-324", "DoubleEpsilonin expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoubleNegativeInfinity, "-Infinity", "DoubleNegativeInfinityin expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoublePositiveInfinity, "Infinity", "DoublePositiveInfinityin expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, DoubleNaN, "NaN", "DoubleNaNin expression");

            // Math consts
            var MathE = Math.E;
            var MathLN10 = Math.LN10;
            var MathLN2 = Math.LN2;
            var MathLOG2E = Math.LOG2E;
            var MathLOG10E = Math.LOG10E;
            var MathPI = Math.PI;
            var MathSQRT1_2 = Math.SQRT1_2;
            var MathSQRT2 = Math.SQRT2;

            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathE, "2.718281828459045", "MathE");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathLN10, "2.302585092994046", "MathLN10");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathLN2, "0.6931471805599453", "MathLN2");
            //IE has Math.LOG2E defined as 1.4426950408889633 instead of standard 1.4426950408889634
            Bridge.get(ClientTestLibrary.TestBridgeIssues).assertAlmostEqual(assert, MathLOG2E, 1.4426950408889634, "MathLOG2E");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathLOG10E, "0.4342944819032518", "MathLOG10E");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathPI, "3.141592653589793", "MathPI");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathSQRT1_2, "0.7071067811865476", "MathSQRT1_2");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathSQRT2, "1.4142135623730951", "MathSQRT2");

            // Math consts in expression
            MathE = Math.E + 0;
            MathLN10 = Math.LN10 + 0;
            MathLN2 = Math.LN2 + 0;
            MathLOG2E = Math.LOG2E + 0;
            MathLOG10E = Math.LOG10E + 0;
            MathPI = Math.PI + 0;
            MathSQRT1_2 = Math.SQRT1_2 + 0;
            MathSQRT2 = Math.SQRT2 + 0;

            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathE, "2.718281828459045", "MathEin expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathLN10, "2.302585092994046", "MathLN10in expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathLN2, "0.6931471805599453", "MathLN2in expression");
            //IE has Math.LOG2E defined as 1.4426950408889633 instead of standard 1.4426950408889634
            Bridge.get(ClientTestLibrary.TestBridgeIssues).assertAlmostEqual(assert, MathLOG2E, 1.4426950408889634, "MathLOG2Ein expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathLOG10E, "0.4342944819032518", "MathLOG10Ein expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathPI, "3.141592653589793", "MathPIin expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathSQRT1_2, "0.7071067811865476", "MathSQRT1_2in expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, MathSQRT2, "1.4142135623730951", "MathSQRT2in expression");

            // Single consts
            var SingleMaxValue = 3.40282347E+38;
            var SingleMinValue = -3.40282347E+38;
            var SingleEpsilon = 1.401298E-45;
            var SingleNaN = Number.NaN;
            var SingleNegativeInfinity = Number.NEGATIVE_INFINITY;
            var SinglePositiveInfinity = Number.POSITIVE_INFINITY;

            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SingleMaxValue, "3.40282347e+38", "SingleMaxValue");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SingleMinValue, "-3.40282347e+38", "SingleMinValue");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SingleEpsilon, "1.401298e-45", "SingleEpsilon");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SingleNaN, "NaN", "SingleNaN");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SingleNegativeInfinity, "-Infinity", "SingleNegativeInfinity");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SinglePositiveInfinity, "Infinity", "SinglePositiveInfinity");

            // Single consts in expression
            SingleMaxValue = 3.40282347E+38;
            SingleMinValue = -3.40282347E+38;
            SingleEpsilon = 1.401298E-45;
            SingleNaN = Number.NaN + 0;
            SingleNegativeInfinity = Number.NEGATIVE_INFINITY + 0;
            SinglePositiveInfinity = Number.POSITIVE_INFINITY + 0;

            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SingleMaxValue, "3.40282347e+38", "SingleMaxValuein expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SingleMinValue, "-3.40282347e+38", "SingleMinValuein expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SingleEpsilon, "1.401298e-45", "SingleEpsilonin expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SingleNaN, "NaN", "SingleNaNin expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SingleNegativeInfinity, "-Infinity", "SingleNegativeInfinityin expression");
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, SinglePositiveInfinity, "Infinity", "SinglePositiveInfinityin expression");
        },
        n418: function (assert) {
            var t = new ClientTestLibrary.Bridge418();
            t.setDelegate(Bridge.fn.combine(t.getDelegate(), function (i) {
                return i * 2;
            }));
            var r = t.callDelegate(10);

            assert.equal(r, 20, "Delegate added and called var r = t.CallDelegate(10);");
        },
        n422: function (assert) {
            var v0 = Bridge.get(ClientTestLibrary.Bridge422).first;
            var v100 = Bridge.get(ClientTestLibrary.Bridge422).next;
            var v101 = Bridge.get(ClientTestLibrary.Bridge422).afterNext;

            assert.equal(v0, 0, "Bridge422.first");
            assert.equal(v100, 100, "Bridge422.next");
            assert.equal(v101, 101, "Bridge422.afterNext");
        },
        n428: function (assert) {
            var number2 = Bridge.Decimal(11.37);
            var sum = "0.13 + " + number2;

            assert.equal(sum, "0.13 + 11.37", "0.13 + 11.37");
        },
        n435: function (assert) {
            var i = 0;
            assert.equal(Bridge.Int.format(i, "E"), "0E+000", "i.Format(\"E\")");
            assert.equal(Bridge.Int.format(i, "a"), "a", "Test custom formatting in \"use strict\" mode");
        },
        n436: function (assert) {
            var b1 = new ClientTestLibrary.Bridge436First();
            assert.equal(b1.toObject(), "1", "Bridge436First.ToObject()");

            var b2 = new ClientTestLibrary.Bridge436Second();
            assert.equal(b2.toObject(), "12", "Bridge436Second.ToObject()");

            var b3 = new ClientTestLibrary.Bridge436Third();
            assert.equal(b3.toObject(), "123", "Bridge436Third.ToObject()");
        },
        n438: function (assert) {
            var magic = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [0],
                [1],
                [2],
                [3],
                [4]
            ] );
            var epic = magic.getRange(0, 3);
            assert.equal(Bridge.getTypeName(Bridge.getType(epic)), "Bridge.List$1$Bridge.Int", "epic.GetType().GetClassName()");
        },
        n439: function (assert) {
            var b = new ClientTestLibrary.Bridge439();
            var accumulator = "";
            b.register(function (s) {
                accumulator = accumulator + s;
            });

            b.callDispatcher("1");
            assert.equal(accumulator, "1", "accumulator 1");

            b.callDispatcher("2");
            assert.equal(accumulator, "12", "accumulator 12");
        },
        n442: function (assert) {
            var a = Bridge.Decimal(3.5);
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, a.round(), "4", "a.Round(3.5M)");

            var b = Bridge.Decimal(4.5);
            Bridge.get(ClientTestLibrary.TestBridgeIssues).ensureNumber(assert, b.round(), "4", "b.Round(4.5M)");
        },
        n460: function (assert) {
            var number;

            number = -12345.6789;
            assert.equal(Bridge.Int.format(number, "G", Bridge.get(Bridge.CultureInfo).invariantCulture), "-12345.6789", "ToString(\"G\") for negative numbers in InvariantCulture");
        },
        n467: function (assert) {
            var a = Bridge.merge(new ClientTestLibrary.Bridge467(), {
                setMyProperty: -1
            } );

            var b = Bridge.merge(new ClientTestLibrary.Bridge467(), {
                setMyProperty: -1
            } );

            assert.equal(a.getHashCode(), b.getHashCode(), "Call to base.GetHashCode() causes compilation to fail");
        },
        n469: function (assert) {
            var $t;
            var testList = new Bridge.List$1(Bridge.Int)();
            testList.add(5);

            var count = 0;

            for (var i = 0; i < 10; i++) {
                var $t = (function () {
                    if (!Bridge.Linq.Enumerable.from(testList).any(function (x) {
                        return x === i;
                    })) {
                        return {jump:1};
                    }

                    count++;
                }).call(this) || {};
                if($t.jump == 1) continue;
            }

            assert.equal(count, 1, "\"continue\" generated correctly");
        },
        n470: function (assert) {
            var a = Bridge.merge(new ClientTestLibrary.Bridge470(), {
                setData: 1
            } );
            var b = Bridge.merge(new ClientTestLibrary.Bridge470(), {
                setData: 2
            } );
            var c = Bridge.merge(new ClientTestLibrary.Bridge470(), {
                setData: 3
            } );

            assert.equal(Bridge.equals(a, b), false, "a.Equals(b)");
            assert.equal(Bridge.equals(a, Bridge.merge(new ClientTestLibrary.Bridge470(), {
                setData: 1
            } )), true, "a.Equals(new Bridge470 { Data = 1 })");
            assert.equal(Bridge.equals(a, null), false, "a.Equals(null)");

            assert.equal(a.equals(b, b), true, "a.Equals(b, b)");
            assert.equal(a.equals(a, Bridge.merge(new ClientTestLibrary.Bridge470(), {
                setData: 1
            } )), true, "a.Equals(a, new Bridge470 { Data = 1 })");
            assert.equal(a.equals(a, Bridge.merge(new ClientTestLibrary.Bridge470(), {
                setData: 2
            } )), false, "a.Equals(a, new Bridge470 { Data = 2 })");
            assert.equal(a.equals(Bridge.merge(new ClientTestLibrary.Bridge470(), {
                setData: 5
            } ), Bridge.merge(new ClientTestLibrary.Bridge470(), {
                setData: 5
            } )), true, "new Bridge470 { Data = 5 }, new Bridge470 { Data = 5 }");

            assert.equal(Bridge.getHashCode(a), 1, "a.GetHashCode()");
            assert.equal(Bridge.getHashCode(c), 3, "c.GetHashCode()");

            assert.equal(a.getHashCode(b), 2, "a.GetHashCode(b)");
            assert.equal(c.getHashCode(c), 3, "c.GetHashCode(c)");

            var test1 = new Bridge.List$1(ClientTestLibrary.Bridge470)();
            test1.add(a);
            test1.add(b);
            test1.add(c);

            var comparer = new ClientTestLibrary.Bridge470();

            // EqualityComparer's methods do not handle null values intentionally
            assert.equal(Bridge.Linq.Enumerable.from(test1).contains(a, comparer), true, "test1 Contains a");
            assert.equal(Bridge.Linq.Enumerable.from(test1).contains(b, comparer), true, "test1 Contains b");
            assert.equal(Bridge.Linq.Enumerable.from(test1).contains(c, comparer), true, "test1 Contains c");
            assert.equal(Bridge.Linq.Enumerable.from(test1).contains(Bridge.merge(new ClientTestLibrary.Bridge470(), {
                setData: 4
            } ), comparer), false, "test1 Contains 4");
            assert.equal(Bridge.Linq.Enumerable.from(test1).contains(Bridge.merge(new ClientTestLibrary.Bridge470(), {
                setData: 5
            } ), comparer), false, "test1 Contains 5");
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge588', {
    statics: {
        testUseCase: function (assert) {
            assert.expect(2);

            assert.equal(Bridge.get(ClientTestLibrary.Bridge588A).valeur3, 3, "Bridge588 TestUseCase");
            assert.equal(Bridge.get(ClientTestLibrary.Bridge588C.C1).getDefault().getValue().getName(), "default", "Bridge588_2 TestUseCase");
        }
    }
});



Bridge.init();