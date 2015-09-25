/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Bridge169', {
    statics: {
        number: 0,
        m1: function () {
            (function () {
                ClientTestLibrary.Bridge169.number = 1;
            })();
        },
        m2: function () {
            (function () {
                return ClientTestLibrary.Bridge169.number = 2;
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

Bridge.define('ClientTestLibrary.Bridge266A', {
    statics: {
        test: function () {
            // Nothing gets written for Class1 in the output JavaScript due to the "new object()" argument.
            // If null is used instead (as commented-out) then it works as expected.
            // No compile error.
            return ClientTestLibrary.Bridge266B.test("test", { });
            //Bridge266B.Test("test", null);
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge266B', {
    statics: {
        test: function (arg1, arg2) {
            return arg2;
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

Bridge.define('ClientTestLibrary.Bridge272.MyEnum', {
    statics: {
        abc: 1,
        def: 2,
        ghi: 3
    }
});

Bridge.define('ClientTestLibrary.Bridge277', {
    statics: {
        $int: 0
    }
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

Bridge.define('ClientTestLibrary.Bridge306B.Props', {
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

Bridge.define('ClientTestLibrary.Bridge306B', {
    inherits: [ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306B.Props)],
    statics: {
        $new: function (props) {
            return ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306B.Props).$new(ClientTestLibrary.Bridge306B)(props);
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge306A', {
    inherits: [ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306A.Props)],
    statics: {
        $new: function (props) {
            return ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306A.Props).$new(ClientTestLibrary.Bridge306A)(props);
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
        this.constructor$1(new Bridge.Dictionary$2(Bridge.Int,String)());

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

Bridge.define('ClientTestLibrary.Bridge383', {
    statics: {
        doSomething: function (person) {
            return person.getName();
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
        }
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
    }
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
        if (other === null)
            return false;

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

Bridge.define('ClientTestLibrary.Person383', {
    config: {
        properties: {
            Name: null
        }
    }
});

Bridge.define('ClientTestLibrary.TestBridgeIssues', {
    statics: {
        n169: function (assert) {
            assert.expect(2);

            // TEST
            ClientTestLibrary.Bridge169.m1();
            assert.deepEqual(ClientTestLibrary.Bridge169.number, 1, "M1()");

            // TEST
            ClientTestLibrary.Bridge169.m2();
            assert.deepEqual(ClientTestLibrary.Bridge169.number, 2, "M2()");
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
            assert.ok(ClientTestLibrary.Bridge266A.test() !== null, "new object() call transpiled");
        },
        n272: function (assert) {
            assert.expect(3);

            // TEST
            assert.deepEqual(ClientTestLibrary.Bridge272.test(1), ClientTestLibrary.Bridge272.MyEnum.abc, "Casted MyEnum.Abc");
            assert.deepEqual(ClientTestLibrary.Bridge272.test(3), ClientTestLibrary.Bridge272.MyEnum.ghi, "Casted MyEnum.Ghi");
            assert.deepEqual(ClientTestLibrary.Bridge272.test(4), 4, "Casted MyEnum.Abc");
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

            assert.equal(ClientTestLibrary.Bridge277.$int, 0, "Enum member with reserved name initialized");
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
        }        ,
        n306: function (assert) {
            assert.expect(2);

            var b = ClientTestLibrary.Bridge306B.$new(Bridge.merge(new ClientTestLibrary.Bridge306B.Props(), {
                name: "B"
            } ));
            assert.equal(b, "ClientTestLibrary.Bridge306B.Props:B", "Bridge306B.New() works");

            var a = ClientTestLibrary.Bridge306A.$new(Bridge.merge(new ClientTestLibrary.Bridge306A.Props(), {
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
            var msg2 = ClientTestLibrary.Bridge383.doSomething(person2);

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
        }        ,
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
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, a, "4", "Math.Round(3.5M)");

            var b = Bridge.Decimal.round(Bridge.Decimal(4.5), 6);
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, b, "4", "Math.Round(4.5M)");
        },
        ensureNumber: function (assert, actual, expected, message) {
            assert.equal(actual.toString(), expected, message);
        },
        n410: function (assert) {
            // Decimal consts
            var DecimalZero = Bridge.Decimal.Zero;
            var DecimalOne = Bridge.Decimal.One;
            var DecimalMinusOne = Bridge.Decimal.MinusOne;
            var DecimalMaxValue = Bridge.Decimal.MaxValue;
            var DecimalMinValue = Bridge.Decimal.MinValue;

            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DecimalZero, "0", "DecimalZero");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DecimalOne, "1", "DecimalOne");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DecimalMinusOne, "-1", "DecimalMinusOne");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DecimalMaxValue, "7.9228162514264337593543950335e+28", "DecimalMaxValue");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DecimalMinValue, "-7.9228162514264337593543950335e+28", "DecimalMinValue");

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

            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DecimalZero, "0", "DecimalZeroin expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DecimalOne, "1", "DecimalOnein expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DecimalMinusOne, "-1", "DecimalMinusOnein expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DecimalMaxValue, "7.9228162514264337593543950335e+28", "DecimalMaxValuein expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DecimalMinValue, "-7.9228162514264337593543950335e+28", "DecimalMinValuein expression");

            // Double consts
            var DoubleMaxValue = Number.MAX_VALUE;
            var DoubleMinValue = Number.MIN_VALUE;
            var DoubleEpsilon = 4.94065645841247E-324;
            var DoubleNegativeInfinity = Number.NEGATIVE_INFINITY;
            var DoublePositiveInfinity = Number.POSITIVE_INFINITY;
            var DoubleNaN = Number.NaN;

            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoubleMaxValue, "1.7976931348623157e+308", "DoubleMaxValue");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoubleMinValue, "5e-324", "DoubleMinValue");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoubleEpsilon, "5e-324", "DoubleEpsilon");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoubleNegativeInfinity, "-Infinity", "DoubleNegativeInfinity");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoublePositiveInfinity, "Infinity", "DoublePositiveInfinity");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoubleNaN, "NaN", "DoubleNaN");

            // Double consts in expressions
            DoubleMaxValue = Number.MAX_VALUE + 0;
            DoubleMinValue = Number.MIN_VALUE + 0;
            DoubleEpsilon = 4.94065645841247E-324;
            DoubleNegativeInfinity = Number.NEGATIVE_INFINITY + 0;
            DoublePositiveInfinity = Number.POSITIVE_INFINITY + 0;
            DoubleNaN = Number.NaN + 0;

            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoubleMaxValue, "1.7976931348623157e+308", "DoubleMaxValuein expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoubleMinValue, "5e-324", "DoubleMinValuein expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoubleEpsilon, "5e-324", "DoubleEpsilonin expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoubleNegativeInfinity, "-Infinity", "DoubleNegativeInfinityin expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoublePositiveInfinity, "Infinity", "DoublePositiveInfinityin expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, DoubleNaN, "NaN", "DoubleNaNin expression");

            // Math consts
            var MathE = Math.E;
            var MathLN10 = Math.LN10;
            var MathLN2 = Math.LN2;
            var MathLOG2E = Math.LOG2E;
            var MathLOG10E = Math.LOG10E;
            var MathPI = Math.PI;
            var MathSQRT1_2 = Math.SQRT1_2;
            var MathSQRT2 = Math.SQRT2;

            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathE, "2.718281828459045", "MathE");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathLN10, "2.302585092994046", "MathLN10");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathLN2, "0.6931471805599453", "MathLN2");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathLOG2E, "1.4426950408889634", "MathLOG2E");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathLOG10E, "0.4342944819032518", "MathLOG10E");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathPI, "3.141592653589793", "MathPI");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathSQRT1_2, "0.7071067811865476", "MathSQRT1_2");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathSQRT2, "1.4142135623730951", "MathSQRT2");

            // Math consts in expression
            MathE = Math.E + 0;
            MathLN10 = Math.LN10 + 0;
            MathLN2 = Math.LN2 + 0;
            MathLOG2E = Math.LOG2E + 0;
            MathLOG10E = Math.LOG10E + 0;
            MathPI = Math.PI + 0;
            MathSQRT1_2 = Math.SQRT1_2 + 0;
            MathSQRT2 = Math.SQRT2 + 0;

            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathE, "2.718281828459045", "MathEin expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathLN10, "2.302585092994046", "MathLN10in expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathLN2, "0.6931471805599453", "MathLN2in expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathLOG2E, "1.4426950408889634", "MathLOG2Ein expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathLOG10E, "0.4342944819032518", "MathLOG10Ein expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathPI, "3.141592653589793", "MathPIin expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathSQRT1_2, "0.7071067811865476", "MathSQRT1_2in expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, MathSQRT2, "1.4142135623730951", "MathSQRT2in expression");

            // Single consts
            var SingleMaxValue = 3.40282347E+38;
            var SingleMinValue = -3.40282347E+38;
            var SingleEpsilon = 1.401298E-45;
            var SingleNaN = Number.NaN;
            var SingleNegativeInfinity = Number.NEGATIVE_INFINITY;
            var SinglePositiveInfinity = Number.POSITIVE_INFINITY;

            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SingleMaxValue, "3.40282347e+38", "SingleMaxValue");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SingleMinValue, "-3.40282347e+38", "SingleMinValue");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SingleEpsilon, "1.401298e-45", "SingleEpsilon");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SingleNaN, "NaN", "SingleNaN");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SingleNegativeInfinity, "-Infinity", "SingleNegativeInfinity");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SinglePositiveInfinity, "Infinity", "SinglePositiveInfinity");

            // Single consts in expression
            SingleMaxValue = 3.40282347E+38;
            SingleMinValue = -3.40282347E+38;
            SingleEpsilon = 1.401298E-45;
            SingleNaN = Number.NaN + 0;
            SingleNegativeInfinity = Number.NEGATIVE_INFINITY + 0;
            SinglePositiveInfinity = Number.POSITIVE_INFINITY + 0;

            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SingleMaxValue, "3.40282347e+38", "SingleMaxValuein expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SingleMinValue, "-3.40282347e+38", "SingleMinValuein expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SingleEpsilon, "1.401298e-45", "SingleEpsilonin expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SingleNaN, "NaN", "SingleNaNin expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SingleNegativeInfinity, "-Infinity", "SingleNegativeInfinityin expression");
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, SinglePositiveInfinity, "Infinity", "SinglePositiveInfinityin expression");
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
            var v0 = ClientTestLibrary.Bridge422.first;
            var v100 = ClientTestLibrary.Bridge422.next;
            var v101 = ClientTestLibrary.Bridge422.afterNext;

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
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, a.round(), "4", "a.Round(3.5M)");

            var b = Bridge.Decimal(4.5);
            ClientTestLibrary.TestBridgeIssues.ensureNumber(assert, b.round(), "4", "b.Round(4.5M)");
        },
        n460: function (assert) {
            var number;

            number = -12345.6789;
            assert.equal(Bridge.Int.format(number, "G", Bridge.CultureInfo.invariantCulture), "-12345.6789", "ToString(\"G\") for negative numbers in InvariantCulture");
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

            for (var i = 0; i < 10; i++)
            {
                var $t = (function () {
                    if (!Bridge.Linq.Enumerable.from(testList).any(function (x) {
                        return x === i;
                    }))
                        return 1;

                    count++;
                }).call(this);
                if($t == 1) continue;
            }

            assert.equal(count, 1, "\"continue\" generated correctly");
        }        ,
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

