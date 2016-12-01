/**
 * @compiler Bridge.NET 15.4.0
 */
Bridge.assembly("Bridge_ClientTest_Tests", function ($asm, globals) {
    

    Bridge.define("Bridge.Test.Assert", {
        statics: {
            assert: null,
            stackOffset: 2,
            setStack: function (offset) {
                if (offset === void 0) { offset = 0; }
                var ctx = Bridge.Test.QUnit.ContextHelper.getContext$1(Bridge.Test.Assert.assert);

                if (ctx == null) {
                    return;
                }

                ctx.stack = QUnit.stack(((Bridge.Test.Assert.stackOffset + offset) | 0));
            },
            async: function () {
                return Bridge.Test.Assert.assert.async();
            },
            areEqual: function (expected, actual) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.deepEqual(actual, expected);
            },
            areEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.deepEqual(actual, expected, description);
            },
            areDeepEqual: function (expected, actual) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.deepEqual(actual, expected);
            },
            areDeepEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.deepEqual(actual, expected, description);
            },
            areStrictEqual: function (expected, actual) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.strictEqual(actual, expected);
            },
            areStrictEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.strictEqual(actual, expected, description);
            },
            areNotEqual: function (expected, actual) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected);
            },
            areNotEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected, description);
            },
            areNotDeepEqual: function (expected, actual) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected);
            },
            areNotDeepEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected, description);
            },
            areNotStrictEqual: function (expected, actual) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.notStrictEqual(actual, expected);
            },
            areNotStrictEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.notStrictEqual(actual, expected, description);
            },
            true: function (condition) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.ok(condition);
            },
            true$1: function (condition, message) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.ok(condition, message);
            },
            false: function (condition) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.notOk(condition);
            },
            false$1: function (condition, message) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.notOk(condition, message);
            },
            fail: function () {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.ok(false);
            },
            fail$1: function (message) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.notOk(true, message);
            },
            throws: function (block) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.throws(block, "");
            },
            throws$5: function (block, message) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.throws(block, message);
            },
            throws$6: function (T, block) {
                Bridge.Test.Assert.throws$7(T, block, "", 1);
            },
            throws$7: function (T, block, message, stackOffset) {
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

                Bridge.Test.Assert.setStack(stackOffset);

                if (!Bridge.referenceEquals(actual, expected)) {
                    Bridge.Test.Assert.assert.equal(actual, expected, message);
                } else {
                    Bridge.Test.Assert.assert.ok(true, message);
                }
            },
            throws$3: function (block, expected) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.throws(block, expected);
            },
            throws$4: function (block, expected, message) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.throws(block, expected, message);
            },
            throws$1: function (block, expected) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.throws(block, expected);
            },
            throws$2: function (block, expected, message) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.throws(block, expected, message);
            },
            null: function (anObject) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.ok(anObject == null);
            },
            null$1: function (anObject, message) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.ok(anObject == null, message);
            },
            notNull: function (anObject) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.notOk(anObject == null);
            },
            notNull$1: function (anObject, message) {
                Bridge.Test.Assert.setStack();
                Bridge.Test.Assert.assert.notOk(anObject == null, message);
            }
        }
    });

    Bridge.define("Bridge.Test.QUnit.TestFixture$1", function (T) { return {
        statics: {
            instanceFabric: null,
            fixtureFabric: Bridge.getDefaultValue(T),
            getFixtureFabric: function () {
                if (Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric == null) {
                    Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric = Bridge.createInstance(T);
                }

                return Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric;
            },
            setFixtureFabric: function (value) {
                Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric = value;
            },
            instanceFabric$1: function (type) {
                if (Bridge.Test.QUnit.TestFixture$1(T).instanceFabric == null) {
                    Bridge.Test.QUnit.TestFixture$1(T).instanceFabric = Bridge.cast(Bridge.createInstance(type), Bridge.Test.QUnit.TestFixture$1(T));
                }

                return Bridge.Test.QUnit.TestFixture$1(T).instanceFabric;
            },
            beforeTest: function (needInstance, assert, type, expectedCount, testContext) {
                if (expectedCount === void 0) { expectedCount = null; }
                if (testContext === void 0) { testContext = null; }
                Bridge.Test.Assert.assert = assert;

                if (System.Nullable.hasValue(expectedCount)) {
                    assert.expect(System.Nullable.getValue(expectedCount));
                }

                var instance = Bridge.Test.QUnit.TestFixture$1(T).instanceFabric$1(type);
                instance.setFixture(needInstance ? Bridge.Test.QUnit.TestFixture$1(T).getFixtureFabric() : Bridge.getDefaultValue(T));

                var fixtureContext = instance.getContext();

                if (testContext != null || fixtureContext != null) {
                    Bridge.Test.QUnit.ContextHelper.setContext(assert, Bridge.merge(new Bridge.Test.QUnit.Context(), {
                        fixtureCtx: fixtureContext,
                        testCtx: testContext
                    } ));
                }

                try {
                    instance.setUp();
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    assert.ok(false, "The test failed SetUp");

                    throw $e1;
                }

                return instance;
            }
        },
        config: {
            properties: {
                Fixture: Bridge.getDefaultValue(T)
            }
        },
        getContext: function () {
            return null;
        },
        setUp: function () {
        },
        tearDown: function () {
        }
    }; });

    Bridge.define("Bridge.Test.QUnit.Context", {
        fixtureCtx: null,
        testCtx: null,
        stack: null
    });

    Bridge.define("Bridge.Test.QUnit.ContextHelper", {
        statics: {
            contextName: "BridgeTestContext",
            setContext: function (assert, ctx) {
                if (assert == null) {
                    return;
                }

                assert[Bridge.Test.QUnit.ContextHelper.contextName] = ctx;
            },
            getTestId: function (details) {
                return Bridge.as(details.testId, String);
            },
            getAssert: function () {
                var a = QUnit.config.current.assert;

                return a;
            },
            getContext$1: function (assert) {
                if (assert == null) {
                    return null;
                }

                return Bridge.as(assert[Bridge.Test.QUnit.ContextHelper.contextName], Bridge.Test.QUnit.Context);
            },
            getContext: function () {
                return Bridge.Test.QUnit.ContextHelper.getContext$1(Bridge.Test.QUnit.ContextHelper.getAssert());
            },
            getTestOutput: function (testId) {
                if (testId == null) {
                    return null;
                }

                return document.getElementById(System.String.concat("qunit-test-output-", testId));
            },
            getQUnitSource: function (output) {
                if (output == null) {
                    return null;
                }

                var source = output.getElementsByClassName("qunit-source");

                if (source == null || source.length <= 0) {
                    return null;
                }

                return source[0];
            },
            adjustSourceElement: function (ctx, testItem) {
                var $t;
                if (testItem == null) {
                    return null;
                }

                var fc = ctx.fixtureCtx;
                var tc = ctx.testCtx;

                var project = null;
                var file = null;
                var method = null;
                var line = null;

                if (fc != null) {
                    project = fc.project;
                    file = fc.file;
                    method = fc.className;
                }

                if (tc != null) {
                    if (tc.file != null) {
                        file = tc.file;
                    }

                    if (tc.method != null) {
                        method = System.String.concat((($t = method, $t != null ? $t : "")), ".", tc.method);
                    }

                    line = tc.line;
                }

                if (project != null || file != null || method != null) {
                    var qunitSourceName = Bridge.Test.QUnit.ContextHelper.getQUnitSource(testItem);

                    if (qunitSourceName == null) {
                        return null;
                    }

                    var html = "";

                    if (project != null) {
                        html = System.String.concat(html, (System.String.concat(" <strong>Project: </strong>", project)));
                    }

                    if (method != null) {
                        html = System.String.concat(html, (System.String.concat(" at ", Bridge.Test.QUnit.ContextHelper.adjustTags(method))));
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
                        assertList = els[0];
                    }

                    var testTitle = testItem.firstChild;

                    qunitSourceName.insertAdjacentHTML("afterbegin", System.String.concat(html, "<br/>"));
                    //testItem.InsertBefore(csSourceName, qunitSourceName);

                    if (assertList != null) {
                        testTitle.addEventListener("click", function () {
                            // A Qunit fix to make source element collapsed the same as assert list
                            Bridge.Test.QUnit.ContextHelper.toggleClass(assertList, "qunit-collapsed", [qunitSourceName]);
                        }, false);
                    }

                    return qunitSourceName;
                }

                return null;
            },
            getTestSource: function (output) {
                if (output == null) {
                    return null;
                }

                var source = output.getElementsByClassName("test-source");

                if (source == null || source.length <= 0) {
                    return null;
                }

                return source[0];
            },
            getTestSource$1: function (testId) {
                var output = Bridge.Test.QUnit.ContextHelper.getTestOutput(testId);

                return Bridge.Test.QUnit.ContextHelper.getTestSource(output);
            },
            updateTestSource: function (testSource, stack) {
                if (testSource != null) {
                    testSource.innerHTML = System.String.concat("<th>Source: </th><td><pre> ", stack, "  </pre></td>");
                }
            },
            adjustTags: function (s) {
                if (s == null) {
                    return null;
                }

                return System.String.replaceAll(System.String.replaceAll(s, "<", "&lt;"), ">", "&gt;");
            },
            hasClass: function (el, name) {
                return System.String.indexOf((System.String.concat(" ", el.className, " ")), System.String.concat(" ", name, " ")) >= 0;
            },
            addClass: function (el, name) {
                if (!Bridge.Test.QUnit.ContextHelper.hasClass(el, name)) {
                    el.className = System.String.concat(el.className, (System.String.concat((el.className != null ? " " : ""), name)));
                }
            },
            removeClass: function (el, name) {
                var set = System.String.concat(" ", el.className, " ");

                while (System.String.indexOf(set, System.String.concat(" ", name, " ")) >= 0) {
                    set = System.String.replaceAll(set, System.String.concat(" ", name, " "), " ");
                }

                el.className = set.trim();
            },
            toggleClass$1: function (el, name, force) {
                if (force === void 0) { force = false; }
                if (force || !Bridge.Test.QUnit.ContextHelper.hasClass(el, name)) {
                    Bridge.Test.QUnit.ContextHelper.addClass(el, name);
                } else {
                    Bridge.Test.QUnit.ContextHelper.removeClass(el, name);
                }
            },
            toggleClass: function (src, name, dest) {
                var $t;
                if (dest === void 0) { dest = []; }
                if (src == null) {
                    return;
                }

                var has = Bridge.Test.QUnit.ContextHelper.hasClass(src, name);

                $t = Bridge.getEnumerator(dest);
                while ($t.moveNext()) {
                    var el = $t.getCurrent();
                    if (has) {
                        Bridge.Test.QUnit.ContextHelper.addClass(el, name);
                    } else {
                        Bridge.Test.QUnit.ContextHelper.removeClass(el, name);
                    }

                }
            }
        }
    });

    Bridge.define("Bridge.Test.QUnit.FixtureContext", {
        project: null,
        className: null,
        file: null
    });

    Bridge.define("Bridge.Test.QUnit.TestContext", {
        file: null,
        method: null,
        line: null
    });
});

QUnit.testDone(function (details) {
        // It will add a UI elements to show CS source for the Test (If CS source data found in the context)

        //if (details.Failed <= 0)
        //{
        //    return;
        //}

        var ctx = Bridge.Test.QUnit.ContextHelper.getContext();

        if (ctx == null || (ctx.testCtx == null && ctx.fixtureCtx == null)) {
            return;
        }

        var testId = Bridge.Test.QUnit.ContextHelper.getTestId(details);

        if (testId == null) {
            return;
        }

        var testItem = Bridge.Test.QUnit.ContextHelper.getTestOutput(testId);

        if (testItem != null) {
            Bridge.Test.QUnit.ContextHelper.adjustSourceElement(ctx, testItem);
        }
    });
QUnit.log(function (details) {
        // It will update a UI elements to show test source (JS) for the assertion (If the JS source (Stack) data found in the context)

        var ctx = Bridge.Test.QUnit.ContextHelper.getContext();

        if (ctx == null || ctx.stack == null) {
            return;
        }

        var testId = Bridge.Test.QUnit.ContextHelper.getTestId(details);

        var source = Bridge.Test.QUnit.ContextHelper.getTestSource$1(testId);

        Bridge.Test.QUnit.ContextHelper.updateTestSource(source, ctx.stack);
    });
