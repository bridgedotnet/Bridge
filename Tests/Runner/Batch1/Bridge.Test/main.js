Bridge.assembly("Bridge.Test.Bridge.ClientTest", function ($asm, globals) {
    

    Bridge.define("Bridge.Test.Runtime.TestFixture$1", function (T) { return {
        statics: {
            fields: {
                instanceFabric: null,
                fixtureFabric: Bridge.getDefaultValue(T)
            },
            props: {
                FixtureFabric: {
                    get: function () {
                        if (Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric == null) {
                            Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric = Bridge.createInstance(T);
                        }

                        return Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric;
                    },
                    set: function (value) {
                        Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric = value;
                    }
                }
            },
            methods: {
                InstanceFabric: function (type) {
                    if (Bridge.Test.Runtime.TestFixture$1(T).instanceFabric == null) {
                        Bridge.Test.Runtime.TestFixture$1(T).instanceFabric = Bridge.cast(Bridge.createInstance(type), Bridge.Test.Runtime.TestFixture$1(T));
                    }

                    return Bridge.Test.Runtime.TestFixture$1(T).instanceFabric;
                },
                BeforeTest: function (needInstance, assert, type, expectedCount, testContext) {
                    var $t;
                    if (expectedCount === void 0) { expectedCount = null; }
                    if (testContext === void 0) { testContext = null; }
                    Bridge.Test.NUnit.Assert.assert = assert;

                    if (System.Nullable.hasValue(expectedCount)) {
                        assert.expect(System.Nullable.getValue(expectedCount));
                    }

                    var instance = Bridge.Test.Runtime.TestFixture$1(T).InstanceFabric(type);
                    instance.Fixture = needInstance ? Bridge.Test.Runtime.TestFixture$1(T).FixtureFabric : Bridge.getDefaultValue(T);

                    var fixtureContext = instance.GetContext();

                    if (testContext != null || fixtureContext != null) {
                        Bridge.Test.Runtime.ContextHelper.SetContext(assert, ($t=new Bridge.Test.Runtime.Context(), $t.FixtureCtx = fixtureContext, $t.TestCtx = testContext, $t));
                    }

                    try {
                        instance.SetUp();
                    }
                    catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        assert.ok(false, "The test failed SetUp");

                        throw $e1;
                    }

                    return instance;
                }
            }
        },
        props: {
            Fixture: Bridge.getDefaultValue(T)
        },
        methods: {
            GetContext: function () {
                return null;
            },
            SetUp: function () { },
            TearDown: function () { }
        }
    }; });

    Bridge.define("Bridge.Test.Runtime.Context", {
        fields: {
            FixtureCtx: null,
            TestCtx: null,
            Stack: null
        }
    });

    Bridge.define("Bridge.Test.Runtime.ContextHelper", {
        statics: {
            fields: {
                contextName: null
            },
            ctors: {
                init: function () {
                    this.contextName = "BridgeTestContext";
                }
            },
            methods: {
                SetContext: function (assert, ctx) {
                    if (assert == null) {
                        return;
                    }

                    assert[System.Array.index(Bridge.Test.Runtime.ContextHelper.contextName, assert)] = ctx;
                },
                GetTestId: function (details) {
                    return Bridge.as(details.testId, System.String);
                },
                GetAssert: function () {
                    var $t;
                    var a = ($t = QUnit.config.current).assert;

                    return a;
                },
                GetContext$1: function (assert) {
                    if (assert == null) {
                        return null;
                    }

                    return Bridge.as(assert[System.Array.index(Bridge.Test.Runtime.ContextHelper.contextName, assert)], Bridge.Test.Runtime.Context);
                },
                GetContext: function () {
                    return Bridge.Test.Runtime.ContextHelper.GetContext$1(Bridge.Test.Runtime.ContextHelper.GetAssert());
                },
                GetTestOutput: function (testId) {
                    if (testId == null) {
                        return null;
                    }

                    return document.getElementById(System.String.concat("qunit-test-output-", testId));
                },
                GetQUnitSource: function (output) {
                    if (output == null) {
                        return null;
                    }

                    var source = output.getElementsByClassName("qunit-source");

                    if (source == null || source.length <= 0) {
                        return null;
                    }

                    return source[System.Array.index(0, source)];
                },
                AdjustSourceElement: function (ctx, testItem) {
                    var $t;
                    if (testItem == null) {
                        return null;
                    }

                    var fc = ctx.FixtureCtx;
                    var tc = ctx.TestCtx;

                    var project = null;
                    var file = null;
                    var method = null;
                    var line = null;

                    if (fc != null) {
                        project = fc.Project;
                        file = fc.File;
                        method = fc.ClassName;
                    }

                    if (tc != null) {
                        if (tc.File != null) {
                            file = tc.File;
                        }

                        if (tc.Method != null) {
                            method = System.String.concat((($t = method, $t != null ? $t : "")), ".", tc.Method);
                        }

                        line = tc.Line;
                    }

                    if (project != null || file != null || method != null) {
                        var qunitSourceName = Bridge.Test.Runtime.ContextHelper.GetQUnitSource(testItem);

                        if (qunitSourceName == null) {
                            return null;
                        }

                        var html = "";

                        if (project != null) {
                            html = System.String.concat(html, (System.String.concat(" <strong>Project: </strong>", project)));
                        }

                        if (method != null) {
                            html = System.String.concat(html, (System.String.concat(" at ", Bridge.Test.Runtime.ContextHelper.AdjustTags(method))));
                        }

                        if (file != null) {
                            html = System.String.concat(html, " in ");

                            if (System.String.startsWith(file, "file:")) {
                                html = System.String.concat(html, (System.String.format("<a href = \"{0}\" target = \"_blank\">{0}</a>", file)));
                            } else {
                                html = System.String.concat(html, file);
                            }
                        }

                        if (line != null) {
                            html = System.String.concat(html, (System.String.concat(": line ", line)));
                        }

                        var assertList = null;

                        var els = testItem.getElementsByTagName("ol");
                        if (els != null && els.length > 0) {
                            assertList = els[System.Array.index(0, els)];
                        }

                        var testTitle = testItem.firstChild;

                        qunitSourceName.insertAdjacentHTML("afterbegin", System.String.concat(html, "<br/>"));
                        //testItem.InsertBefore(csSourceName, qunitSourceName);

                        if (assertList != null) {
                            testTitle.addEventListener("click", function () {
                                // A Qunit fix to make source element collapsed the same as assert list
                                Bridge.Test.Runtime.ContextHelper.ToggleClass(assertList, "qunit-collapsed", [qunitSourceName]);
                            }, false);
                        }

                        return qunitSourceName;
                    }

                    return null;
                },
                GetTestSource: function (output) {
                    if (output == null) {
                        return null;
                    }

                    var source = output.getElementsByClassName("test-source");

                    if (source == null || source.length <= 0) {
                        return null;
                    }

                    return source[System.Array.index(0, source)];
                },
                GetTestSource$1: function (testId) {
                    var output = Bridge.Test.Runtime.ContextHelper.GetTestOutput(testId);

                    return Bridge.Test.Runtime.ContextHelper.GetTestSource(output);
                },
                UpdateTestSource: function (testSource, stack) {
                    if (testSource != null) {
                        testSource.innerHTML = System.String.concat("<th>Source: </th><td><pre> ", stack, "  </pre></td>");
                    }
                },
                AdjustTags: function (s) {
                    if (s == null) {
                        return null;
                    }

                    return System.String.replaceAll(System.String.replaceAll(s, "<", "&lt;"), ">", "&gt;");
                },
                HasClass: function (el, name) {
                    return System.String.indexOf((System.String.concat(" ", el.className, " ")), System.String.concat(" ", name, " ")) >= 0;
                },
                AddClass: function (el, name) {
                    if (!Bridge.Test.Runtime.ContextHelper.HasClass(el, name)) {
                        el.className = System.String.concat(el.className, (System.String.concat((el.className != null ? " " : ""), name)));
                    }
                },
                RemoveClass: function (el, name) {
                    var set = System.String.concat(" ", el.className, " ");

                    while (System.String.indexOf(set, System.String.concat(" ", name, " ")) >= 0) {
                        set = System.String.replaceAll(set, System.String.concat(" ", name, " "), " ");
                    }

                    el.className = set.trim();
                },
                ToggleClass$1: function (el, name, force) {
                    if (force === void 0) { force = false; }
                    if (force || !Bridge.Test.Runtime.ContextHelper.HasClass(el, name)) {
                        Bridge.Test.Runtime.ContextHelper.AddClass(el, name);
                    } else {
                        Bridge.Test.Runtime.ContextHelper.RemoveClass(el, name);
                    }
                },
                ToggleClass: function (src, name, dest) {
                    var $t;
                    if (dest === void 0) { dest = []; }
                    if (src == null) {
                        return;
                    }

                    var has = Bridge.Test.Runtime.ContextHelper.HasClass(src, name);

                    $t = Bridge.getEnumerator(dest);
                    try {
                        while ($t.moveNext()) {
                            var el = $t.Current;
                            if (has) {
                                Bridge.Test.Runtime.ContextHelper.AddClass(el, name);
                            } else {
                                Bridge.Test.Runtime.ContextHelper.RemoveClass(el, name);
                            }

                        }
                    }finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }},
                Init: function () {
                    // Check that required elements exist and created if required
                    var ensure = $asm.$.Bridge.Test.Runtime.ContextHelper.f1;

                    ensure("qunit-fixture");
                    ensure("qunit");
                }
            }
        }
    });

    Bridge.ns("Bridge.Test.Runtime.ContextHelper", $asm.$);

    Bridge.apply($asm.$.Bridge.Test.Runtime.ContextHelper, {
        f1: function (n) {
            var fx = document.getElementById(n);
            if (fx == null) {
                fx = document.createElement("div");
                fx.id = n;
                document.body.insertBefore(fx, document.body.firstChild);
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.FixtureContext", {
        fields: {
            Project: null,
            ClassName: null,
            File: null
        }
    });

    Bridge.define("Bridge.Test.NUnit.Assert", {
        statics: {
            fields: {
                assert: null,
                stackOffset: 0
            },
            ctors: {
                init: function () {
                    this.stackOffset = 2;
                }
            },
            methods: {
                SetStack: function (offset) {
                    if (offset === void 0) { offset = 0; }
                    var ctx = Bridge.Test.Runtime.ContextHelper.GetContext$1(Bridge.Test.NUnit.Assert.assert);

                    if (ctx == null) {
                        return;
                    }

                    ctx.Stack = QUnit.stack(((Bridge.Test.NUnit.Assert.stackOffset + offset) | 0));
                },
                Async: function () {
                    return Bridge.Test.NUnit.Assert.assert.async();
                },
                AreEqual: function (expected, actual) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.deepEqual(Bridge.unbox(actual), Bridge.unbox(expected));
                },
                AreEqual$1: function (expected, actual, description) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.deepEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                AreDeepEqual: function (expected, actual) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.deepEqual(Bridge.unbox(actual), Bridge.unbox(expected));
                },
                AreDeepEqual$1: function (expected, actual, description) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.deepEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                AreStrictEqual: function (expected, actual) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.strictEqual(Bridge.unbox(actual), Bridge.unbox(expected));
                },
                AreStrictEqual$1: function (expected, actual, description) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.strictEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                AreNotEqual: function (expected, actual) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notDeepEqual(Bridge.unbox(actual), Bridge.unbox(expected));
                },
                AreNotEqual$1: function (expected, actual, description) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notDeepEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                AreNotDeepEqual: function (expected, actual) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notDeepEqual(Bridge.unbox(actual), Bridge.unbox(expected));
                },
                AreNotDeepEqual$1: function (expected, actual, description) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notDeepEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                AreNotStrictEqual: function (expected, actual) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notStrictEqual(Bridge.unbox(actual), Bridge.unbox(expected));
                },
                AreNotStrictEqual$1: function (expected, actual, description) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notStrictEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                True: function (condition) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.ok(condition);
                },
                True$1: function (condition, message) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.ok(condition, message);
                },
                False: function (condition) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notOk(condition);
                },
                False$1: function (condition, message) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notOk(condition, message);
                },
                Fail: function () {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.ok(false);
                },
                Fail$1: function (message) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notOk(true, message);
                },
                Throws: function (block) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.throws(block, "");
                },
                Throws$5: function (block, message) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.throws(block, message);
                },
                Throws$6: function (T, block) {
                    Bridge.Test.NUnit.Assert.Throws$7(T, block, "", 1);
                },
                Throws$7: function (T, block, message, stackOffset) {
                    if (stackOffset === void 0) { stackOffset = 0; }
                    var actual = null;
                    var expected = Bridge.Reflection.getTypeFullName(T);

                    try {
                        block();
                    }
                    catch (ex) {
                        ex = System.Exception.create(ex);
                        actual = Bridge.Reflection.getTypeFullName(Bridge.getType(ex));
                    }

                    Bridge.Test.NUnit.Assert.SetStack(stackOffset);

                    if (!Bridge.referenceEquals(actual, expected)) {
                        Bridge.Test.NUnit.Assert.assert.equal(actual, expected, message);
                    } else {
                        Bridge.Test.NUnit.Assert.assert.ok(true, message);
                    }
                },
                Throws$3: function (block, expected) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.throws(block, Bridge.unbox(expected));
                },
                Throws$4: function (block, expected, message) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.throws(block, Bridge.unbox(expected), message);
                },
                Throws$1: function (block, expected) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.throws(block, expected);
                },
                Throws$2: function (block, expected, message) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.throws(block, expected, message);
                },
                Null: function (anObject) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.ok(anObject == null);
                },
                Null$1: function (anObject, message) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.ok(anObject == null, message);
                },
                NotNull: function (anObject) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notOk(anObject == null);
                },
                NotNull$1: function (anObject, message) {
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notOk(anObject == null, message);
                }
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.TestContext", {
        fields: {
            File: null,
            Method: null,
            Line: null
        }
    });
});

QUnit.testDone(function (details) {
    // It will add a UI elements to show CS source for the Test (If CS source data found in the context)

    //if (details.Failed <= 0)
    //{
    //    return;
    //}

    var ctx = Bridge.Test.Runtime.ContextHelper.GetContext();

    if (ctx == null || (ctx.TestCtx == null && ctx.FixtureCtx == null)) {
        return;
    }

    var testId = Bridge.Test.Runtime.ContextHelper.GetTestId(details);

    if (testId == null) {
        return;
    }

    var testItem = Bridge.Test.Runtime.ContextHelper.GetTestOutput(testId);

    if (testItem != null) {
        Bridge.Test.Runtime.ContextHelper.AdjustSourceElement(ctx, testItem);
    }
});
QUnit.log(function (details) {
    // It will update a UI elements to show test source (JS) for the assertion (If the JS source (Stack) data found in the context)

    var ctx = Bridge.Test.Runtime.ContextHelper.GetContext();

    if (ctx == null || ctx.Stack == null) {
        return;
    }

    var testId = Bridge.Test.Runtime.ContextHelper.GetTestId(details);

    var source = Bridge.Test.Runtime.ContextHelper.GetTestSource$1(testId);

    Bridge.Test.Runtime.ContextHelper.UpdateTestSource(source, ctx.Stack);
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJtYWluLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogW10sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIiIsCiAgInNvdXJjZXNDb250ZW50IjogW10KfQo=