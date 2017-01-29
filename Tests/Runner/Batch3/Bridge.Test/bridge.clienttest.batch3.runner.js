/*!
 * QUnit 2.0.1
 * https://qunitjs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-07-23T19:39Z
 */

( function( global ) {

var QUnit = {};

var Date = global.Date;
var now = Date.now || function() {
	return new Date().getTime();
};

var setTimeout = global.setTimeout;
var clearTimeout = global.clearTimeout;

// Store a local window from the global to allow direct references.
var window = global.window;

var defined = {
	document: window && window.document !== undefined,
	setTimeout: setTimeout !== undefined,
	sessionStorage: ( function() {
		var x = "qunit-test-string";
		try {
			sessionStorage.setItem( x, x );
			sessionStorage.removeItem( x );
			return true;
		} catch ( e ) {
			return false;
		}
	}() )
};

var fileName = ( sourceFromStacktrace( 0 ) || "" ).replace( /(:\d+)+\)?/, "" ).replace( /.+\//, "" );
var globalStartCalled = false;
var runStarted = false;

var autorun = false;

var toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty;

// Returns a new Array with the elements that are in a but not in b
function diff( a, b ) {
	var i, j,
		result = a.slice();

	for ( i = 0; i < result.length; i++ ) {
		for ( j = 0; j < b.length; j++ ) {
			if ( result[ i ] === b[ j ] ) {
				result.splice( i, 1 );
				i--;
				break;
			}
		}
	}
	return result;
}

// From jquery.js
function inArray( elem, array ) {
	if ( array.indexOf ) {
		return array.indexOf( elem );
	}

	for ( var i = 0, length = array.length; i < length; i++ ) {
		if ( array[ i ] === elem ) {
			return i;
		}
	}

	return -1;
}

/**
 * Makes a clone of an object using only Array or Object as base,
 * and copies over the own enumerable properties.
 *
 * @param {Object} obj
 * @return {Object} New object with only the own properties (recursively).
 */
function objectValues ( obj ) {
	var key, val,
		vals = QUnit.is( "array", obj ) ? [] : {};
	for ( key in obj ) {
		if ( hasOwn.call( obj, key ) ) {
			val = obj[ key ];
			vals[ key ] = val === Object( val ) ? objectValues( val ) : val;
		}
	}
	return vals;
}

function extend( a, b, undefOnly ) {
	for ( var prop in b ) {
		if ( hasOwn.call( b, prop ) ) {
			if ( b[ prop ] === undefined ) {
				delete a[ prop ];
			} else if ( !( undefOnly && typeof a[ prop ] !== "undefined" ) ) {
				a[ prop ] = b[ prop ];
			}
		}
	}

	return a;
}

function objectType( obj ) {
	if ( typeof obj === "undefined" ) {
		return "undefined";
	}

	// Consider: typeof null === object
	if ( obj === null ) {
		return "null";
	}

	var match = toString.call( obj ).match( /^\[object\s(.*)\]$/ ),
		type = match && match[ 1 ];

	switch ( type ) {
		case "Number":
			if ( isNaN( obj ) ) {
				return "nan";
			}
			return "number";
		case "String":
		case "Boolean":
		case "Array":
		case "Set":
		case "Map":
		case "Date":
		case "RegExp":
		case "Function":
		case "Symbol":
			return type.toLowerCase();
	}
	if ( typeof obj === "object" ) {
		return "object";
	}
}

// Safe object type checking
function is( type, obj ) {
	return QUnit.objectType( obj ) === type;
}

// Doesn't support IE9, it will return undefined on these browsers
// See also https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error/Stack
function extractStacktrace( e, offset ) {
	offset = offset === undefined ? 4 : offset;

	var stack, include, i;

	if ( e.stack ) {
		stack = e.stack.split( "\n" );
		if ( /^error$/i.test( stack[ 0 ] ) ) {
			stack.shift();
		}
		if ( fileName ) {
			include = [];
			for ( i = offset; i < stack.length; i++ ) {
				if ( stack[ i ].indexOf( fileName ) !== -1 ) {
					break;
				}
				include.push( stack[ i ] );
			}
			if ( include.length ) {
				return include.join( "\n" );
			}
		}
		return stack[ offset ];
	}
}

function sourceFromStacktrace( offset ) {
	var error = new Error();

	// Support: Safari <=7 only, IE <=10 - 11 only
	// Not all browsers generate the `stack` property for `new Error()`, see also #636
	if ( !error.stack ) {
		try {
			throw error;
		} catch ( err ) {
			error = err;
		}
	}

	return extractStacktrace( error, offset );
}

/**
 * Config object: Maintain internal state
 * Later exposed as QUnit.config
 * `config` initialized at top of scope
 */
var config = {

	// The queue of tests to run
	queue: [],

	// Block until document ready
	blocking: true,

	// By default, run previously failed tests first
	// very useful in combination with "Hide passed tests" checked
	reorder: true,

	// By default, modify document.title when suite is done
	altertitle: true,

	// HTML Reporter: collapse every test except the first failing test
	// If false, all failing tests will be expanded
	collapse: true,

	// By default, scroll to top of the page when suite is done
	scrolltop: true,

	// Depth up-to which object will be dumped
	maxDepth: 5,

	// When enabled, all tests must call expect()
	requireExpects: false,

	// Placeholder for user-configurable form-exposed URL parameters
	urlConfig: [],

	// Set of all modules.
	modules: [],

	// Stack of nested modules
	moduleStack: [],

	// The first unnamed module
	currentModule: {
		name: "",
		tests: []
	},

	callbacks: {}
};

// Push a loose unnamed module to the modules collection
config.modules.push( config.currentModule );

// Register logging callbacks
function registerLoggingCallbacks( obj ) {
	var i, l, key,
		callbackNames = [ "begin", "done", "log", "testStart", "testDone",
			"moduleStart", "moduleDone" ];

	function registerLoggingCallback( key ) {
		var loggingCallback = function( callback ) {
			if ( objectType( callback ) !== "function" ) {
				throw new Error(
					"QUnit logging methods require a callback function as their first parameters."
				);
			}

			config.callbacks[ key ].push( callback );
		};

		return loggingCallback;
	}

	for ( i = 0, l = callbackNames.length; i < l; i++ ) {
		key = callbackNames[ i ];

		// Initialize key collection of logging callback
		if ( objectType( config.callbacks[ key ] ) === "undefined" ) {
			config.callbacks[ key ] = [];
		}

		obj[ key ] = registerLoggingCallback( key );
	}
}

function runLoggingCallbacks( key, args ) {
	var i, l, callbacks;

	callbacks = config.callbacks[ key ];
	for ( i = 0, l = callbacks.length; i < l; i++ ) {
		callbacks[ i ]( args );
	}
}

( function() {
	if ( !defined.document ) {
		return;
	}

	// `onErrorFnPrev` initialized at top of scope
	// Preserve other handlers
	var onErrorFnPrev = window.onerror;

	// Cover uncaught exceptions
	// Returning true will suppress the default browser handler,
	// returning false will let it run.
	window.onerror = function( error, filePath, linerNr ) {
		var ret = false;
		if ( onErrorFnPrev ) {
			ret = onErrorFnPrev( error, filePath, linerNr );
		}

		// Treat return value as window.onerror itself does,
		// Only do our handling if not suppressed.
		if ( ret !== true ) {
			if ( QUnit.config.current ) {
				if ( QUnit.config.current.ignoreGlobalErrors ) {
					return true;
				}
				QUnit.pushFailure( error, filePath + ":" + linerNr );
			} else {
				QUnit.test( "global failure", extend( function() {
					QUnit.pushFailure( error, filePath + ":" + linerNr );
				}, { validTest: true } ) );
			}
			return false;
		}

		return ret;
	};
}() );

// Figure out if we're running the tests from a server or not
QUnit.isLocal = !( defined.document && window.location.protocol !== "file:" );

// Expose the current QUnit version
QUnit.version = "2.0.1";

extend( QUnit, {

	// Call on start of module test to prepend name to all tests
	module: function( name, testEnvironment, executeNow ) {
		var module, moduleFns;
		var currentModule = config.currentModule;

		if ( arguments.length === 2 ) {
			if ( objectType( testEnvironment ) === "function" ) {
				executeNow = testEnvironment;
				testEnvironment = undefined;
			}
		}

		module = createModule();

		if ( testEnvironment && ( testEnvironment.setup || testEnvironment.teardown ) ) {
			console.warn(
				"Module's `setup` and `teardown` are not hooks anymore on QUnit 2.0, use " +
				"`beforeEach` and `afterEach` instead\n" +
				"Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/"
			);
		}

		moduleFns = {
			before: setHook( module, "before" ),
			beforeEach: setHook( module, "beforeEach" ),
			afterEach: setHook( module, "afterEach" ),
			after: setHook( module, "after" )
		};

		if ( objectType( executeNow ) === "function" ) {
			config.moduleStack.push( module );
			setCurrentModule( module );
			executeNow.call( module.testEnvironment, moduleFns );
			config.moduleStack.pop();
			module = module.parentModule || currentModule;
		}

		setCurrentModule( module );

		function createModule() {
			var parentModule = config.moduleStack.length ?
				config.moduleStack.slice( -1 )[ 0 ] : null;
			var moduleName = parentModule !== null ?
				[ parentModule.name, name ].join( " > " ) : name;
			var module = {
				name: moduleName,
				parentModule: parentModule,
				tests: [],
				moduleId: generateHash( moduleName ),
				testsRun: 0
			};

			var env = {};
			if ( parentModule ) {
				parentModule.childModule = module;
				extend( env, parentModule.testEnvironment );
				delete env.beforeEach;
				delete env.afterEach;
			}
			extend( env, testEnvironment );
			module.testEnvironment = env;

			config.modules.push( module );
			return module;
		}

		function setCurrentModule( module ) {
			config.currentModule = module;
		}

	},

	test: test,

	skip: skip,

	only: only,

	start: function( count ) {
		var globalStartAlreadyCalled = globalStartCalled;

		if ( !config.current ) {
			globalStartCalled = true;

			if ( runStarted ) {
				throw new Error( "Called start() while test already started running" );
			} else if ( globalStartAlreadyCalled || count > 1 ) {
				throw new Error( "Called start() outside of a test context too many times" );
			} else if ( config.autostart ) {
				throw new Error( "Called start() outside of a test context when " +
					"QUnit.config.autostart was true" );
			} else if ( !config.pageLoaded ) {

				// The page isn't completely loaded yet, so bail out and let `QUnit.load` handle it
				config.autostart = true;
				return;
			}
		} else {
			throw new Error(
				"QUnit.start cannot be called inside a test context. This feature is removed in " +
				"QUnit 2.0. For async tests, use QUnit.test() with assert.async() instead.\n" +
				"Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/"
			);
		}

		scheduleBegin();
	},

	config: config,

	is: is,

	objectType: objectType,

	extend: extend,

	load: function() {
		config.pageLoaded = true;

		// Initialize the configuration options
		extend( config, {
			stats: { all: 0, bad: 0 },
			moduleStats: { all: 0, bad: 0 },
			started: 0,
			updateRate: 1000,
			autostart: true,
			filter: ""
		}, true );

		if ( !runStarted ) {
			config.blocking = false;

			if ( config.autostart ) {
				scheduleBegin();
			}
		}
	},

	stack: function( offset ) {
		offset = ( offset || 0 ) + 2;
		return sourceFromStacktrace( offset );
	}
} );

registerLoggingCallbacks( QUnit );

function scheduleBegin() {

	runStarted = true;

	// Add a slight delay to allow definition of more modules and tests.
	if ( defined.setTimeout ) {
		setTimeout( function() {
			begin();
		}, 13 );
	} else {
		begin();
	}
}

function begin() {
	var i, l,
		modulesLog = [];

	// If the test run hasn't officially begun yet
	if ( !config.started ) {

		// Record the time of the test run's beginning
		config.started = now();

		// Delete the loose unnamed module if unused.
		if ( config.modules[ 0 ].name === "" && config.modules[ 0 ].tests.length === 0 ) {
			config.modules.shift();
		}

		// Avoid unnecessary information by not logging modules' test environments
		for ( i = 0, l = config.modules.length; i < l; i++ ) {
			modulesLog.push( {
				name: config.modules[ i ].name,
				tests: config.modules[ i ].tests
			} );
		}

		// The test run is officially beginning now
		runLoggingCallbacks( "begin", {
			totalTests: Test.count,
			modules: modulesLog
		} );
	}

	config.blocking = false;
	process( true );
}

function process( last ) {
	function next() {
		process( last );
	}
	var start = now();
	config.depth = ( config.depth || 0 ) + 1;

	while ( config.queue.length && !config.blocking ) {
		if ( !defined.setTimeout || config.updateRate <= 0 ||
				( ( now() - start ) < config.updateRate ) ) {
			if ( config.current ) {

				// Reset async tracking for each phase of the Test lifecycle
				config.current.usedAsync = false;
			}
			config.queue.shift()();
		} else {
			setTimeout( next, 13 );
			break;
		}
	}
	config.depth--;
	if ( last && !config.blocking && !config.queue.length && config.depth === 0 ) {
		done();
	}
}

function done() {
	var runtime, passed;

	autorun = true;

	// Log the last module results
	if ( config.previousModule ) {
		runLoggingCallbacks( "moduleDone", {
			name: config.previousModule.name,
			tests: config.previousModule.tests,
			failed: config.moduleStats.bad,
			passed: config.moduleStats.all - config.moduleStats.bad,
			total: config.moduleStats.all,
			runtime: now() - config.moduleStats.started
		} );
	}
	delete config.previousModule;

	runtime = now() - config.started;
	passed = config.stats.all - config.stats.bad;

	runLoggingCallbacks( "done", {
		failed: config.stats.bad,
		passed: passed,
		total: config.stats.all,
		runtime: runtime
	} );
}

function setHook( module, hookName ) {
	if ( module.testEnvironment === undefined ) {
		module.testEnvironment = {};
	}

	return function( callback ) {
		module.testEnvironment[ hookName ] = callback;
	};
}

var unitSampler,
	focused = false,
	priorityCount = 0;

function Test( settings ) {
	var i, l;

	++Test.count;

	this.expected = null;
	extend( this, settings );
	this.assertions = [];
	this.semaphore = 0;
	this.usedAsync = false;
	this.module = config.currentModule;
	this.stack = sourceFromStacktrace( 3 );

	// Register unique strings
	for ( i = 0, l = this.module.tests; i < l.length; i++ ) {
		if ( this.module.tests[ i ].name === this.testName ) {
			this.testName += " ";
		}
	}

	this.testId = generateHash( this.module.name, this.testName );

	this.module.tests.push( {
		name: this.testName,
		testId: this.testId
	} );

	if ( settings.skip ) {

		// Skipped tests will fully ignore any sent callback
		this.callback = function() {};
		this.async = false;
		this.expected = 0;
	} else {
		this.assert = new Assert( this );
	}
}

Test.count = 0;

Test.prototype = {
	before: function() {
		if (

			// Emit moduleStart when we're switching from one module to another
			this.module !== config.previousModule ||

				// They could be equal (both undefined) but if the previousModule property doesn't
				// yet exist it means this is the first test in a suite that isn't wrapped in a
				// module, in which case we'll just emit a moduleStart event for 'undefined'.
				// Without this, reporters can get testStart before moduleStart  which is a problem.
				!hasOwn.call( config, "previousModule" )
		) {
			if ( hasOwn.call( config, "previousModule" ) ) {
				runLoggingCallbacks( "moduleDone", {
					name: config.previousModule.name,
					tests: config.previousModule.tests,
					failed: config.moduleStats.bad,
					passed: config.moduleStats.all - config.moduleStats.bad,
					total: config.moduleStats.all,
					runtime: now() - config.moduleStats.started
				} );
			}
			config.previousModule = this.module;
			config.moduleStats = { all: 0, bad: 0, started: now() };
			runLoggingCallbacks( "moduleStart", {
				name: this.module.name,
				tests: this.module.tests
			} );
		}

		config.current = this;

		if ( this.module.testEnvironment ) {
			delete this.module.testEnvironment.before;
			delete this.module.testEnvironment.beforeEach;
			delete this.module.testEnvironment.afterEach;
			delete this.module.testEnvironment.after;
		}
		this.testEnvironment = extend( {}, this.module.testEnvironment );

		this.started = now();
		runLoggingCallbacks( "testStart", {
			name: this.testName,
			module: this.module.name,
			testId: this.testId
		} );

		if ( !config.pollution ) {
			saveGlobal();
		}
	},

	run: function() {
		var promise;

		config.current = this;

		this.callbackStarted = now();

		if ( config.notrycatch ) {
			runTest( this );
			return;
		}

		try {
			runTest( this );
		} catch ( e ) {
			this.pushFailure( "Died on test #" + ( this.assertions.length + 1 ) + " " +
				this.stack + ": " + ( e.message || e ), extractStacktrace( e, 0 ) );

			// Else next test will carry the responsibility
			saveGlobal();

			// Restart the tests if they're blocking
			if ( config.blocking ) {
				internalRecover( this );
			}
		}

		function runTest( test ) {
			promise = test.callback.call( test.testEnvironment, test.assert );
			test.resolvePromise( promise );
		}
	},

	after: function() {
		checkPollution();
	},

	queueHook: function( hook, hookName, hookOwner ) {
		var promise,
			test = this;
		return function runHook() {
			if ( hookName === "before" ) {
				if ( hookOwner.testsRun !== 0 ) {
					return;
				}

				test.preserveEnvironment = true;
			}

			if ( hookName === "after" && hookOwner.testsRun !== numberOfTests( hookOwner ) - 1 ) {
				return;
			}

			config.current = test;
			if ( config.notrycatch ) {
				callHook();
				return;
			}
			try {
				callHook();
			} catch ( error ) {
				test.pushFailure( hookName + " failed on " + test.testName + ": " +
				( error.message || error ), extractStacktrace( error, 0 ) );
			}

			function callHook() {
				promise = hook.call( test.testEnvironment, test.assert );
				test.resolvePromise( promise, hookName );
			}
		};
	},

	// Currently only used for module level hooks, can be used to add global level ones
	hooks: function( handler ) {
		var hooks = [];

		function processHooks( test, module ) {
			if ( module.parentModule ) {
				processHooks( test, module.parentModule );
			}
			if ( module.testEnvironment &&
				QUnit.objectType( module.testEnvironment[ handler ] ) === "function" ) {
				hooks.push( test.queueHook( module.testEnvironment[ handler ], handler, module ) );
			}
		}

		// Hooks are ignored on skipped tests
		if ( !this.skip ) {
			processHooks( this, this.module );
		}
		return hooks;
	},

	finish: function() {
		config.current = this;
		if ( config.requireExpects && this.expected === null ) {
			this.pushFailure( "Expected number of assertions to be defined, but expect() was " +
				"not called.", this.stack );
		} else if ( this.expected !== null && this.expected !== this.assertions.length ) {
			this.pushFailure( "Expected " + this.expected + " assertions, but " +
				this.assertions.length + " were run", this.stack );
		} else if ( this.expected === null && !this.assertions.length ) {
			this.pushFailure( "Expected at least one assertion, but none were run - call " +
				"expect(0) to accept zero assertions.", this.stack );
		}

		var i,
			skipped = !!this.skip,
			bad = 0;

		this.runtime = now() - this.started;

		config.stats.all += this.assertions.length;
		config.moduleStats.all += this.assertions.length;

		for ( i = 0; i < this.assertions.length; i++ ) {
			if ( !this.assertions[ i ].result ) {
				bad++;
				config.stats.bad++;
				config.moduleStats.bad++;
			}
		}

		notifyTestsRan( this.module );
		runLoggingCallbacks( "testDone", {
			name: this.testName,
			module: this.module.name,
			skipped: skipped,
			failed: bad,
			passed: this.assertions.length - bad,
			total: this.assertions.length,
			runtime: skipped ? 0 : this.runtime,

			// HTML Reporter use
			assertions: this.assertions,
			testId: this.testId,

			// Source of Test
			source: this.stack
		} );

		config.current = undefined;
	},

	preserveTestEnvironment: function() {
		if ( this.preserveEnvironment ) {
			this.module.testEnvironment = this.testEnvironment;
			this.testEnvironment = extend( {}, this.module.testEnvironment );
		}
	},

	queue: function() {
		var priority,
			test = this;

		if ( !this.valid() ) {
			return;
		}

		function run() {

			// Each of these can by async
			synchronize( [
				function() {
					test.before();
				},

				test.hooks( "before" ),

				function() {
					test.preserveTestEnvironment();
				},

				test.hooks( "beforeEach" ),

				function() {
					test.run();
				},

				test.hooks( "afterEach" ).reverse(),
				test.hooks( "after" ).reverse(),

				function() {
					test.after();
				},

				function() {
					test.finish();
				}
			] );
		}

		// Prioritize previously failed tests, detected from sessionStorage
		priority = QUnit.config.reorder && defined.sessionStorage &&
				+sessionStorage.getItem( "qunit-test-" + this.module.name + "-" + this.testName );

		return synchronize( run, priority, config.seed );
	},

	pushResult: function( resultInfo ) {

		// Destructure of resultInfo = { result, actual, expected, message, negative }
		var source,
			details = {
				module: this.module.name,
				name: this.testName,
				result: resultInfo.result,
				message: resultInfo.message,
				actual: resultInfo.actual,
				expected: resultInfo.expected,
				testId: this.testId,
				negative: resultInfo.negative || false,
				runtime: now() - this.started
			};

		if ( !resultInfo.result ) {
			source = sourceFromStacktrace();

			if ( source ) {
				details.source = source;
			}
		}

		runLoggingCallbacks( "log", details );

		this.assertions.push( {
			result: !!resultInfo.result,
			message: resultInfo.message
		} );
	},

	pushFailure: function( message, source, actual ) {
		if ( !( this instanceof Test ) ) {
			throw new Error( "pushFailure() assertion outside test context, was " +
				sourceFromStacktrace( 2 ) );
		}

		var details = {
				module: this.module.name,
				name: this.testName,
				result: false,
				message: message || "error",
				actual: actual || null,
				testId: this.testId,
				runtime: now() - this.started
			};

		if ( source ) {
			details.source = source;
		}

		runLoggingCallbacks( "log", details );

		this.assertions.push( {
			result: false,
			message: message
		} );
	},

	resolvePromise: function( promise, phase ) {
		var then, resume, message,
			test = this;
		if ( promise != null ) {
			then = promise.then;
			if ( QUnit.objectType( then ) === "function" ) {
				resume = internalStop( test );
				then.call(
					promise,
					function() { resume(); },
					function( error ) {
						message = "Promise rejected " +
							( !phase ? "during" : phase.replace( /Each$/, "" ) ) +
							" " + test.testName + ": " + ( error.message || error );
						test.pushFailure( message, extractStacktrace( error, 0 ) );

						// Else next test will carry the responsibility
						saveGlobal();

						// Unblock
						resume();
					}
				);
			}
		}
	},

	valid: function() {
		var filter = config.filter,
			regexFilter = /^(!?)\/([\w\W]*)\/(i?$)/.exec( filter ),
			module = config.module && config.module.toLowerCase(),
			fullName = ( this.module.name + ": " + this.testName );

		function moduleChainNameMatch( testModule ) {
			var testModuleName = testModule.name ? testModule.name.toLowerCase() : null;
			if ( testModuleName === module ) {
				return true;
			} else if ( testModule.parentModule ) {
				return moduleChainNameMatch( testModule.parentModule );
			} else {
				return false;
			}
		}

		function moduleChainIdMatch( testModule ) {
			return inArray( testModule.moduleId, config.moduleId ) > -1 ||
				testModule.parentModule && moduleChainIdMatch( testModule.parentModule );
		}

		// Internally-generated tests are always valid
		if ( this.callback && this.callback.validTest ) {
			return true;
		}

		if ( config.moduleId && config.moduleId.length > 0 &&
			!moduleChainIdMatch( this.module ) ) {

			return false;
		}

		if ( config.testId && config.testId.length > 0 &&
			inArray( this.testId, config.testId ) < 0 ) {

			return false;
		}

		if ( module && !moduleChainNameMatch( this.module ) ) {
			return false;
		}

		if ( !filter ) {
			return true;
		}

		return regexFilter ?
			this.regexFilter( !!regexFilter[ 1 ], regexFilter[ 2 ], regexFilter[ 3 ], fullName ) :
			this.stringFilter( filter, fullName );
	},

	regexFilter: function( exclude, pattern, flags, fullName ) {
		var regex = new RegExp( pattern, flags );
		var match = regex.test( fullName );

		return match !== exclude;
	},

	stringFilter: function( filter, fullName ) {
		filter = filter.toLowerCase();
		fullName = fullName.toLowerCase();

		var include = filter.charAt( 0 ) !== "!";
		if ( !include ) {
			filter = filter.slice( 1 );
		}

		// If the filter matches, we need to honour include
		if ( fullName.indexOf( filter ) !== -1 ) {
			return include;
		}

		// Otherwise, do the opposite
		return !include;
	}
};

QUnit.pushFailure = function() {
	if ( !QUnit.config.current ) {
		throw new Error( "pushFailure() assertion outside test context, in " +
			sourceFromStacktrace( 2 ) );
	}

	// Gets current test obj
	var currentTest = QUnit.config.current;

	return currentTest.pushFailure.apply( currentTest, arguments );
};

// Based on Java's String.hashCode, a simple but not
// rigorously collision resistant hashing function
function generateHash( module, testName ) {
	var hex,
		i = 0,
		hash = 0,
		str = module + "\x1C" + testName,
		len = str.length;

	for ( ; i < len; i++ ) {
		hash  = ( ( hash << 5 ) - hash ) + str.charCodeAt( i );
		hash |= 0;
	}

	// Convert the possibly negative integer hash code into an 8 character hex string, which isn't
	// strictly necessary but increases user understanding that the id is a SHA-like hash
	hex = ( 0x100000000 + hash ).toString( 16 );
	if ( hex.length < 8 ) {
		hex = "0000000" + hex;
	}

	return hex.slice( -8 );
}

function synchronize( callback, priority, seed ) {
	var last = !priority,
		index;

	if ( QUnit.objectType( callback ) === "array" ) {
		while ( callback.length ) {
			synchronize( callback.shift() );
		}
		return;
	}

	if ( priority ) {
		config.queue.splice( priorityCount++, 0, callback );
	} else if ( seed ) {
		if ( !unitSampler ) {
			unitSampler = unitSamplerGenerator( seed );
		}

		// Insert into a random position after all priority items
		index = Math.floor( unitSampler() * ( config.queue.length - priorityCount + 1 ) );
		config.queue.splice( priorityCount + index, 0, callback );
	} else {
		config.queue.push( callback );
	}

	if ( autorun && !config.blocking ) {
		process( last );
	}
}

function unitSamplerGenerator( seed ) {

	// 32-bit xorshift, requires only a nonzero seed
	// http://excamera.com/sphinx/article-xorshift.html
	var sample = parseInt( generateHash( seed ), 16 ) || -1;
	return function() {
		sample ^= sample << 13;
		sample ^= sample >>> 17;
		sample ^= sample << 5;

		// ECMAScript has no unsigned number type
		if ( sample < 0 ) {
			sample += 0x100000000;
		}

		return sample / 0x100000000;
	};
}

function saveGlobal() {
	config.pollution = [];

	if ( config.noglobals ) {
		for ( var key in global ) {
			if ( hasOwn.call( global, key ) ) {

				// In Opera sometimes DOM element ids show up here, ignore them
				if ( /^qunit-test-output/.test( key ) ) {
					continue;
				}
				config.pollution.push( key );
			}
		}
	}
}

function checkPollution() {
	var newGlobals,
		deletedGlobals,
		old = config.pollution;

	saveGlobal();

	newGlobals = diff( config.pollution, old );
	if ( newGlobals.length > 0 ) {
		QUnit.pushFailure( "Introduced global variable(s): " + newGlobals.join( ", " ) );
	}

	deletedGlobals = diff( old, config.pollution );
	if ( deletedGlobals.length > 0 ) {
		QUnit.pushFailure( "Deleted global variable(s): " + deletedGlobals.join( ", " ) );
	}
}

// Will be exposed as QUnit.test
function test( testName, callback ) {
	if ( focused )  { return; }

	var newTest;

	newTest = new Test( {
		testName: testName,
		callback: callback
	} );

	newTest.queue();
}

// Will be exposed as QUnit.skip
function skip( testName ) {
	if ( focused )  { return; }

	var test = new Test( {
		testName: testName,
		skip: true
	} );

	test.queue();
}

// Will be exposed as QUnit.only
function only( testName, callback ) {
	var newTest;

	if ( focused )  { return; }

	QUnit.config.queue.length = 0;
	focused = true;

	newTest = new Test( {
		testName: testName,
		callback: callback
	} );

	newTest.queue();
}

// Put a hold on processing and return a function that will release it.
function internalStop( test ) {
	var released = false;

	test.semaphore += 1;
	config.blocking = true;

	// Set a recovery timeout, if so configured.
	if ( config.testTimeout && defined.setTimeout ) {
		clearTimeout( config.timeout );
		config.timeout = setTimeout( function() {
			QUnit.pushFailure( "Test timed out", sourceFromStacktrace( 2 ) );
			internalRecover( test );
		}, config.testTimeout );
	}

	return function resume() {
		if ( released ) {
			return;
		}

		released = true;
		test.semaphore -= 1;
		internalStart( test );
	};
}

// Forcefully release all processing holds.
function internalRecover( test ) {
	test.semaphore = 0;
	internalStart( test );
}

// Release a processing hold, scheduling a resumption attempt if no holds remain.
function internalStart( test ) {

	// If semaphore is non-numeric, throw error
	if ( isNaN( test.semaphore ) ) {
		test.semaphore = 0;

		QUnit.pushFailure(
			"Invalid value on test.semaphore",
			sourceFromStacktrace( 2 )
		);
		return;
	}

	// Don't start until equal number of stop-calls
	if ( test.semaphore > 0 ) {
		return;
	}

	// Throw an Error if start is called more often than stop
	if ( test.semaphore < 0 ) {
		test.semaphore = 0;

		QUnit.pushFailure(
			"Tried to restart test while already started (test's semaphore was 0 already)",
			sourceFromStacktrace( 2 )
		);
		return;
	}

	// Add a slight delay to allow more assertions etc.
	if ( defined.setTimeout ) {
		if ( config.timeout ) {
			clearTimeout( config.timeout );
		}
		config.timeout = setTimeout( function() {
			if ( test.semaphore > 0 ) {
				return;
			}

			if ( config.timeout ) {
				clearTimeout( config.timeout );
			}

			begin();
		}, 13 );
	} else {
		begin();
	}
}

function numberOfTests( module ) {
	var count = module.tests.length;
	while ( module = module.childModule ) {
		count += module.tests.length;
	}
	return count;
}

function notifyTestsRan( module ) {
	module.testsRun++;
	while ( module = module.parentModule ) {
		module.testsRun++;
	}
}

function Assert( testContext ) {
	this.test = testContext;
}

// Assert helpers
QUnit.assert = Assert.prototype = {

	// Specify the number of expected assertions to guarantee that failed test
	// (no assertions are run at all) don't slip through.
	expect: function( asserts ) {
		if ( arguments.length === 1 ) {
			this.test.expected = asserts;
		} else {
			return this.test.expected;
		}
	},

	// Put a hold on processing and return a function that will release it a maximum of once.
	async: function( count ) {
		var resume,
			test = this.test,
			popped = false,
			acceptCallCount = count;

		if ( typeof acceptCallCount === "undefined" ) {
			acceptCallCount = 1;
		}

		test.usedAsync = true;
		resume = internalStop( test );

		return function done() {

			if ( popped ) {
				test.pushFailure( "Too many calls to the `assert.async` callback",
					sourceFromStacktrace( 2 ) );
				return;
			}
			acceptCallCount -= 1;
			if ( acceptCallCount > 0 ) {
				return;
			}

			popped = true;
			resume();
		};
	},

	// Exports test.push() to the user API
	// Alias of pushResult.
	push: function( result, actual, expected, message, negative ) {
		var currentAssert = this instanceof Assert ? this : QUnit.config.current.assert;
		return currentAssert.pushResult( {
			result: result,
			actual: actual,
			expected: expected,
			message: message,
			negative: negative
		} );
	},

	pushResult: function( resultInfo ) {

		// Destructure of resultInfo = { result, actual, expected, message, negative }
		var assert = this,
			currentTest = ( assert instanceof Assert && assert.test ) || QUnit.config.current;

		// Backwards compatibility fix.
		// Allows the direct use of global exported assertions and QUnit.assert.*
		// Although, it's use is not recommended as it can leak assertions
		// to other tests from async tests, because we only get a reference to the current test,
		// not exactly the test where assertion were intended to be called.
		if ( !currentTest ) {
			throw new Error( "assertion outside test context, in " + sourceFromStacktrace( 2 ) );
		}

		if ( currentTest.usedAsync === true && currentTest.semaphore === 0 ) {
			currentTest.pushFailure( "Assertion after the final `assert.async` was resolved",
				sourceFromStacktrace( 2 ) );

			// Allow this assertion to continue running anyway...
		}

		if ( !( assert instanceof Assert ) ) {
			assert = currentTest.assert;
		}

		return assert.test.pushResult( resultInfo );
	},

	ok: function( result, message ) {
		message = message || ( result ? "okay" : "failed, expected argument to be truthy, was: " +
			QUnit.dump.parse( result ) );
		this.pushResult( {
			result: !!result,
			actual: result,
			expected: true,
			message: message
		} );
	},

	notOk: function( result, message ) {
		message = message || ( !result ? "okay" : "failed, expected argument to be falsy, was: " +
			QUnit.dump.parse( result ) );
		this.pushResult( {
			result: !result,
			actual: result,
			expected: false,
			message: message
		} );
	},

	equal: function( actual, expected, message ) {
		/*jshint eqeqeq:false */
		this.pushResult( {
			result: expected == actual,
			actual: actual,
			expected: expected,
			message: message
		} );
	},

	notEqual: function( actual, expected, message ) {
		/*jshint eqeqeq:false */
		this.pushResult( {
			result: expected != actual,
			actual: actual,
			expected: expected,
			message: message,
			negative: true
		} );
	},

	propEqual: function( actual, expected, message ) {
		actual = objectValues( actual );
		expected = objectValues( expected );
		this.pushResult( {
			result: QUnit.equiv( actual, expected ),
			actual: actual,
			expected: expected,
			message: message
		} );
	},

	notPropEqual: function( actual, expected, message ) {
		actual = objectValues( actual );
		expected = objectValues( expected );
		this.pushResult( {
			result: !QUnit.equiv( actual, expected ),
			actual: actual,
			expected: expected,
			message: message,
			negative: true
		} );
	},

	deepEqual: function( actual, expected, message ) {
		this.pushResult( {
			result: QUnit.equiv( actual, expected ),
			actual: actual,
			expected: expected,
			message: message
		} );
	},

	notDeepEqual: function( actual, expected, message ) {
		this.pushResult( {
			result: !QUnit.equiv( actual, expected ),
			actual: actual,
			expected: expected,
			message: message,
			negative: true
		} );
	},

	strictEqual: function( actual, expected, message ) {
		this.pushResult( {
			result: expected === actual,
			actual: actual,
			expected: expected,
			message: message
		} );
	},

	notStrictEqual: function( actual, expected, message ) {
		this.pushResult( {
			result: expected !== actual,
			actual: actual,
			expected: expected,
			message: message,
			negative: true
		} );
	},

	"throws": function( block, expected, message ) {
		var actual, expectedType,
			expectedOutput = expected,
			ok = false,
			currentTest = ( this instanceof Assert && this.test ) || QUnit.config.current;

		// 'expected' is optional unless doing string comparison
		if ( QUnit.objectType( expected ) === "string" ) {
			if ( message == null ) {
				message = expected;
				expected = null;
			} else {
				throw new Error(
					"throws/raises does not accept a string value for the expected argument.\n" +
					"Use a non-string object value (e.g. regExp) instead if it's necessary." +
					"Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/"
				);
			}
		}

		currentTest.ignoreGlobalErrors = true;
		try {
			block.call( currentTest.testEnvironment );
		} catch ( e ) {
			actual = e;
		}
		currentTest.ignoreGlobalErrors = false;

		if ( actual ) {
			expectedType = QUnit.objectType( expected );

			// We don't want to validate thrown error
			if ( !expected ) {
				ok = true;
				expectedOutput = null;

			// Expected is a regexp
			} else if ( expectedType === "regexp" ) {
				ok = expected.test( errorString( actual ) );

			// Expected is a constructor, maybe an Error constructor
			} else if ( expectedType === "function" && actual instanceof expected ) {
				ok = true;

			// Expected is an Error object
			} else if ( expectedType === "object" ) {
				ok = actual instanceof expected.constructor &&
					actual.name === expected.name &&
					actual.message === expected.message;

			// Expected is a validation function which returns true if validation passed
			} else if ( expectedType === "function" && expected.call( {}, actual ) === true ) {
				expectedOutput = null;
				ok = true;
			}
		}

		currentTest.assert.pushResult( {
			result: ok,
			actual: actual,
			expected: expectedOutput,
			message: message
		} );
	}
};

// Provide an alternative to assert.throws(), for environments that consider throws a reserved word
// Known to us are: Closure Compiler, Narwhal
( function() {
	/*jshint sub:true */
	Assert.prototype.raises = Assert.prototype [ "throws" ]; //jscs:ignore requireDotNotation
}() );

function errorString( error ) {
	var name, message,
		resultErrorString = error.toString();
	if ( resultErrorString.substring( 0, 7 ) === "[object" ) {
		name = error.name ? error.name.toString() : "Error";
		message = error.message ? error.message.toString() : "";
		if ( name && message ) {
			return name + ": " + message;
		} else if ( name ) {
			return name;
		} else if ( message ) {
			return message;
		} else {
			return "Error";
		}
	} else {
		return resultErrorString;
	}
}

// Test for equality any JavaScript type.
// Author: Philippe Rath� <prathe@gmail.com>
QUnit.equiv = ( function() {

	// Stack to decide between skip/abort functions
	var callers = [];

	// Stack to avoiding loops from circular referencing
	var parents = [];
	var parentsB = [];

	var getProto = Object.getPrototypeOf || function( obj ) {

		/*jshint proto: true */
		return obj.__proto__;
	};

	function useStrictEquality( b, a ) {

		// To catch short annotation VS 'new' annotation of a declaration. e.g.:
		// `var i = 1;`
		// `var j = new Number(1);`
		if ( typeof a === "object" ) {
			a = a.valueOf();
		}
		if ( typeof b === "object" ) {
			b = b.valueOf();
		}

		return a === b;
	}

	function compareConstructors( a, b ) {
		var protoA = getProto( a );
		var protoB = getProto( b );

		// Comparing constructors is more strict than using `instanceof`
		if ( a.constructor === b.constructor ) {
			return true;
		}

		// Ref #851
		// If the obj prototype descends from a null constructor, treat it
		// as a null prototype.
		if ( protoA && protoA.constructor === null ) {
			protoA = null;
		}
		if ( protoB && protoB.constructor === null ) {
			protoB = null;
		}

		// Allow objects with no prototype to be equivalent to
		// objects with Object as their constructor.
		if ( ( protoA === null && protoB === Object.prototype ) ||
				( protoB === null && protoA === Object.prototype ) ) {
			return true;
		}

		return false;
	}

	function getRegExpFlags( regexp ) {
		return "flags" in regexp ? regexp.flags : regexp.toString().match( /[gimuy]*$/ )[ 0 ];
	}

	var callbacks = {
		"string": useStrictEquality,
		"boolean": useStrictEquality,
		"number": useStrictEquality,
		"null": useStrictEquality,
		"undefined": useStrictEquality,
		"symbol": useStrictEquality,
		"date": useStrictEquality,

		"nan": function() {
			return true;
		},

		"regexp": function( b, a ) {
			return a.source === b.source &&

				// Include flags in the comparison
				getRegExpFlags( a ) === getRegExpFlags( b );
		},

		// - skip when the property is a method of an instance (OOP)
		// - abort otherwise,
		// initial === would have catch identical references anyway
		"function": function() {
			var caller = callers[ callers.length - 1 ];
			return caller !== Object && typeof caller !== "undefined";
		},

		"array": function( b, a ) {
			var i, j, len, loop, aCircular, bCircular;

			len = a.length;
			if ( len !== b.length ) {

				// Safe and faster
				return false;
			}

			// Track reference to avoid circular references
			parents.push( a );
			parentsB.push( b );
			for ( i = 0; i < len; i++ ) {
				loop = false;
				for ( j = 0; j < parents.length; j++ ) {
					aCircular = parents[ j ] === a[ i ];
					bCircular = parentsB[ j ] === b[ i ];
					if ( aCircular || bCircular ) {
						if ( a[ i ] === b[ i ] || aCircular && bCircular ) {
							loop = true;
						} else {
							parents.pop();
							parentsB.pop();
							return false;
						}
					}
				}
				if ( !loop && !innerEquiv( a[ i ], b[ i ] ) ) {
					parents.pop();
					parentsB.pop();
					return false;
				}
			}
			parents.pop();
			parentsB.pop();
			return true;
		},

		"set": function( b, a ) {
			var innerEq,
				outerEq = true;

			if ( a.size !== b.size ) {
				return false;
			}

			a.forEach( function( aVal ) {
				innerEq = false;

				b.forEach( function( bVal ) {
					if ( innerEquiv( bVal, aVal ) ) {
						innerEq = true;
					}
				} );

				if ( !innerEq ) {
					outerEq = false;
				}
			} );

			return outerEq;
		},

		"map": function( b, a ) {
			var innerEq,
				outerEq = true;

			if ( a.size !== b.size ) {
				return false;
			}

			a.forEach( function( aVal, aKey ) {
				innerEq = false;

				b.forEach( function( bVal, bKey ) {
					if ( innerEquiv( [ bVal, bKey ], [ aVal, aKey ] ) ) {
						innerEq = true;
					}
				} );

				if ( !innerEq ) {
					outerEq = false;
				}
			} );

			return outerEq;
		},

		"object": function( b, a ) {
			var i, j, loop, aCircular, bCircular;

			// Default to true
			var eq = true;
			var aProperties = [];
			var bProperties = [];

			if ( compareConstructors( a, b ) === false ) {
				return false;
			}

			// Stack constructor before traversing properties
			callers.push( a.constructor );

			// Track reference to avoid circular references
			parents.push( a );
			parentsB.push( b );

			// Be strict: don't ensure hasOwnProperty and go deep
			for ( i in a ) {
				loop = false;
				for ( j = 0; j < parents.length; j++ ) {
					aCircular = parents[ j ] === a[ i ];
					bCircular = parentsB[ j ] === b[ i ];
					if ( aCircular || bCircular ) {
						if ( a[ i ] === b[ i ] || aCircular && bCircular ) {
							loop = true;
						} else {
							eq = false;
							break;
						}
					}
				}
				aProperties.push( i );
				if ( !loop && !innerEquiv( a[ i ], b[ i ] ) ) {
					eq = false;
					break;
				}
			}

			parents.pop();
			parentsB.pop();

			// Unstack, we are done
			callers.pop();

			for ( i in b ) {

				// Collect b's properties
				bProperties.push( i );
			}

			// Ensures identical properties name
			return eq && innerEquiv( aProperties.sort(), bProperties.sort() );
		}
	};

	function typeEquiv( a, b ) {
		var type = QUnit.objectType( a );
		return QUnit.objectType( b ) === type && callbacks[ type ]( b, a );
	}

	// The real equiv function
	function innerEquiv( a, b ) {

		// We're done when there's nothing more to compare
		if ( arguments.length < 2 ) {
			return true;
		}

		// Require type-specific equality
		return ( a === b || typeEquiv( a, b ) ) &&

			// ...across all consecutive argument pairs
			( arguments.length === 2 || innerEquiv.apply( this, [].slice.call( arguments, 1 ) ) );
	}

	return innerEquiv;
}() );

// Based on jsDump by Ariel Flesler
// http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html
QUnit.dump = ( function() {
	function quote( str ) {
		return "\"" + str.toString().replace( /\\/g, "\\\\" ).replace( /"/g, "\\\"" ) + "\"";
	}
	function literal( o ) {
		return o + "";
	}
	function join( pre, arr, post ) {
		var s = dump.separator(),
			base = dump.indent(),
			inner = dump.indent( 1 );
		if ( arr.join ) {
			arr = arr.join( "," + s + inner );
		}
		if ( !arr ) {
			return pre + post;
		}
		return [ pre, inner + arr, base + post ].join( s );
	}
	function array( arr, stack ) {
		var i = arr.length,
			ret = new Array( i );

		if ( dump.maxDepth && dump.depth > dump.maxDepth ) {
			return "[object Array]";
		}

		this.up();
		while ( i-- ) {
			ret[ i ] = this.parse( arr[ i ], undefined, stack );
		}
		this.down();
		return join( "[", ret, "]" );
	}

	function isArray( obj ) {
		return (

			//Native Arrays
			toString.call( obj ) === "[object Array]" ||

			// NodeList objects
			( typeof obj.length === "number" && obj.item !== undefined ) &&
			( obj.length ?
				obj.item( 0 ) === obj[ 0 ] :
				( obj.item( 0 ) === null && obj[ 0 ] === undefined )
			)
		);
	}

	var reName = /^function (\w+)/,
		dump = {

			// The objType is used mostly internally, you can fix a (custom) type in advance
			parse: function( obj, objType, stack ) {
				stack = stack || [];
				var res, parser, parserType,
					inStack = inArray( obj, stack );

				if ( inStack !== -1 ) {
					return "recursion(" + ( inStack - stack.length ) + ")";
				}

				objType = objType || this.typeOf( obj  );
				parser = this.parsers[ objType ];
				parserType = typeof parser;

				if ( parserType === "function" ) {
					stack.push( obj );
					res = parser.call( this, obj, stack );
					stack.pop();
					return res;
				}
				return ( parserType === "string" ) ? parser : this.parsers.error;
			},
			typeOf: function( obj ) {
				var type;

				if ( obj === null ) {
					type = "null";
				} else if ( typeof obj === "undefined" ) {
					type = "undefined";
				} else if ( QUnit.is( "regexp", obj ) ) {
					type = "regexp";
				} else if ( QUnit.is( "date", obj ) ) {
					type = "date";
				} else if ( QUnit.is( "function", obj ) ) {
					type = "function";
				} else if ( obj.setInterval !== undefined &&
						obj.document !== undefined &&
						obj.nodeType === undefined ) {
					type = "window";
				} else if ( obj.nodeType === 9 ) {
					type = "document";
				} else if ( obj.nodeType ) {
					type = "node";
				} else if ( isArray( obj ) ) {
					type = "array";
				} else if ( obj.constructor === Error.prototype.constructor ) {
					type = "error";
				} else {
					type = typeof obj;
				}
				return type;
			},

			separator: function() {
				return this.multiline ? this.HTML ? "<br />" : "\n" : this.HTML ? "&#160;" : " ";
			},

			// Extra can be a number, shortcut for increasing-calling-decreasing
			indent: function( extra ) {
				if ( !this.multiline ) {
					return "";
				}
				var chr = this.indentChar;
				if ( this.HTML ) {
					chr = chr.replace( /\t/g, "   " ).replace( / /g, "&#160;" );
				}
				return new Array( this.depth + ( extra || 0 ) ).join( chr );
			},
			up: function( a ) {
				this.depth += a || 1;
			},
			down: function( a ) {
				this.depth -= a || 1;
			},
			setParser: function( name, parser ) {
				this.parsers[ name ] = parser;
			},

			// The next 3 are exposed so you can use them
			quote: quote,
			literal: literal,
			join: join,
			depth: 1,
			maxDepth: QUnit.config.maxDepth,

			// This is the list of parsers, to modify them, use dump.setParser
			parsers: {
				window: "[Window]",
				document: "[Document]",
				error: function( error ) {
					return "Error(\"" + error.message + "\")";
				},
				unknown: "[Unknown]",
				"null": "null",
				"undefined": "undefined",
				"function": function( fn ) {
					var ret = "function",

						// Functions never have name in IE
						name = "name" in fn ? fn.name : ( reName.exec( fn ) || [] )[ 1 ];

					if ( name ) {
						ret += " " + name;
					}
					ret += "(";

					ret = [ ret, dump.parse( fn, "functionArgs" ), "){" ].join( "" );
					return join( ret, dump.parse( fn, "functionCode" ), "}" );
				},
				array: array,
				nodelist: array,
				"arguments": array,
				object: function( map, stack ) {
					var keys, key, val, i, nonEnumerableProperties,
						ret = [];

					if ( dump.maxDepth && dump.depth > dump.maxDepth ) {
						return "[object Object]";
					}

					dump.up();
					keys = [];
					for ( key in map ) {
						keys.push( key );
					}

					// Some properties are not always enumerable on Error objects.
					nonEnumerableProperties = [ "message", "name" ];
					for ( i in nonEnumerableProperties ) {
						key = nonEnumerableProperties[ i ];
						if ( key in map && inArray( key, keys ) < 0 ) {
							keys.push( key );
						}
					}
					keys.sort();
					for ( i = 0; i < keys.length; i++ ) {
						key = keys[ i ];
						val = map[ key ];
						ret.push( dump.parse( key, "key" ) + ": " +
							dump.parse( val, undefined, stack ) );
					}
					dump.down();
					return join( "{", ret, "}" );
				},
				node: function( node ) {
					var len, i, val,
						open = dump.HTML ? "&lt;" : "<",
						close = dump.HTML ? "&gt;" : ">",
						tag = node.nodeName.toLowerCase(),
						ret = open + tag,
						attrs = node.attributes;

					if ( attrs ) {
						for ( i = 0, len = attrs.length; i < len; i++ ) {
							val = attrs[ i ].nodeValue;

							// IE6 includes all attributes in .attributes, even ones not explicitly
							// set. Those have values like undefined, null, 0, false, "" or
							// "inherit".
							if ( val && val !== "inherit" ) {
								ret += " " + attrs[ i ].nodeName + "=" +
									dump.parse( val, "attribute" );
							}
						}
					}
					ret += close;

					// Show content of TextNode or CDATASection
					if ( node.nodeType === 3 || node.nodeType === 4 ) {
						ret += node.nodeValue;
					}

					return ret + open + "/" + tag + close;
				},

				// Function calls it internally, it's the arguments part of the function
				functionArgs: function( fn ) {
					var args,
						l = fn.length;

					if ( !l ) {
						return "";
					}

					args = new Array( l );
					while ( l-- ) {

						// 97 is 'a'
						args[ l ] = String.fromCharCode( 97 + l );
					}
					return " " + args.join( ", " ) + " ";
				},

				// Object calls it internally, the key part of an item in a map
				key: quote,

				// Function calls it internally, it's the content of the function
				functionCode: "[code]",

				// Node calls it internally, it's a html attribute value
				attribute: quote,
				string: quote,
				date: quote,
				regexp: literal,
				number: literal,
				"boolean": literal,
				symbol: function( sym ) {
					return sym.toString();
				}
			},

			// If true, entities are escaped ( <, >, \t, space and \n )
			HTML: false,

			// Indentation unit
			indentChar: "  ",

			// If true, items in a collection, are separated by a \n, else just a space.
			multiline: true
		};

	return dump;
}() );

// Back compat
QUnit.jsDump = QUnit.dump;

function applyDeprecated( name ) {
	return function() {
		throw new Error(
			name + " is removed in QUnit 2.0.\n" +
			"Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/"
		);
	};
}

Object.keys( Assert.prototype ).forEach( function( key ) {
	QUnit[ key ] = applyDeprecated( "`QUnit." + key + "`" );
} );

QUnit.asyncTest = function() {
	throw new Error(
		"asyncTest is removed in QUnit 2.0, use QUnit.test() with assert.async() instead.\n" +
		"Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/"
	);
};

QUnit.stop = function() {
	throw new Error(
		"QUnit.stop is removed in QUnit 2.0, use QUnit.test() with assert.async() instead.\n" +
		"Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/"
	);
};

function resetThrower() {
	throw new Error(
		"QUnit.reset is removed in QUnit 2.0 without replacement.\n" +
		"Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/"
	);
}

Object.defineProperty( QUnit, "reset", {
	get: function() {
		return resetThrower;
	},
	set: resetThrower
} );

if ( defined.document ) {
	if ( window.QUnit ) {
		throw new Error( "QUnit has already been defined." );
	}

	[
		"test",
		"module",
		"expect",
		"start",
		"ok",
		"notOk",
		"equal",
		"notEqual",
		"propEqual",
		"notPropEqual",
		"deepEqual",
		"notDeepEqual",
		"strictEqual",
		"notStrictEqual",
		"throws",
		"raises"
	].forEach( function( key ) {
		window[ key ] = applyDeprecated( "The global `" + key + "`" );
	} );

	window.QUnit = QUnit;
}

// For nodejs
if ( typeof module !== "undefined" && module && module.exports ) {
	module.exports = QUnit;

	// For consistency with CommonJS environments' exports
	module.exports.QUnit = QUnit;
}

// For CommonJS with exports, but without module.exports, like Rhino
if ( typeof exports !== "undefined" && exports ) {
	exports.QUnit = QUnit;
}

if ( typeof define === "function" && define.amd ) {
	define( function() {
		return QUnit;
	} );
	QUnit.config.autostart = false;
}

// Get a reference to the global object, like window in browsers
}( ( function() {
	return this;
}() ) ) );

( function() {

if ( typeof window === "undefined" || !window.document ) {
	return;
}

var config = QUnit.config,
	hasOwn = Object.prototype.hasOwnProperty;

// Stores fixture HTML for resetting later
function storeFixture() {

	// Avoid overwriting user-defined values
	if ( hasOwn.call( config, "fixture" ) ) {
		return;
	}

	var fixture = document.getElementById( "qunit-fixture" );
	if ( fixture ) {
		config.fixture = fixture.innerHTML;
	}
}

QUnit.begin( storeFixture );

// Resets the fixture DOM element if available.
function resetFixture() {
	if ( config.fixture == null ) {
		return;
	}

	var fixture = document.getElementById( "qunit-fixture" );
	if ( fixture ) {
		fixture.innerHTML = config.fixture;
	}
}

QUnit.testStart( resetFixture );

}() );

( function() {

// Only interact with URLs via window.location
var location = typeof window !== "undefined" && window.location;
if ( !location ) {
	return;
}

var urlParams = getUrlParams();

QUnit.urlParams = urlParams;

// Match module/test by inclusion in an array
QUnit.config.moduleId = [].concat( urlParams.moduleId || [] );
QUnit.config.testId = [].concat( urlParams.testId || [] );

// Exact case-insensitive match of the module name
QUnit.config.module = urlParams.module;

// Regular expression or case-insenstive substring match against "moduleName: testName"
QUnit.config.filter = urlParams.filter;

// Test order randomization
if ( urlParams.seed === true ) {

	// Generate a random seed if the option is specified without a value
	QUnit.config.seed = Math.random().toString( 36 ).slice( 2 );
} else if ( urlParams.seed ) {
	QUnit.config.seed = urlParams.seed;
}

// Add URL-parameter-mapped config values with UI form rendering data
QUnit.config.urlConfig.push(
	{
		id: "hidepassed",
		label: "Hide passed tests",
		tooltip: "Only show tests and assertions that fail. Stored as query-strings."
	},
	{
		id: "noglobals",
		label: "Check for Globals",
		tooltip: "Enabling this will test if any test introduces new properties on the " +
			"global object (`window` in Browsers). Stored as query-strings."
	},
	{
		id: "notrycatch",
		label: "No try-catch",
		tooltip: "Enabling this will run tests outside of a try-catch block. Makes debugging " +
			"exceptions in IE reasonable. Stored as query-strings."
	}
);

QUnit.begin( function() {
	var i, option,
		urlConfig = QUnit.config.urlConfig;

	for ( i = 0; i < urlConfig.length; i++ ) {

		// Options can be either strings or objects with nonempty "id" properties
		option = QUnit.config.urlConfig[ i ];
		if ( typeof option !== "string" ) {
			option = option.id;
		}

		if ( QUnit.config[ option ] === undefined ) {
			QUnit.config[ option ] = urlParams[ option ];
		}
	}
} );

function getUrlParams() {
	var i, param, name, value;
	var urlParams = {};
	var params = location.search.slice( 1 ).split( "&" );
	var length = params.length;

	for ( i = 0; i < length; i++ ) {
		if ( params[ i ] ) {
			param = params[ i ].split( "=" );
			name = decodeQueryParam( param[ 0 ] );

			// Allow just a key to turn on a flag, e.g., test.html?noglobals
			value = param.length === 1 ||
				decodeQueryParam( param.slice( 1 ).join( "=" ) ) ;
			if ( urlParams[ name ] ) {
				urlParams[ name ] = [].concat( urlParams[ name ], value );
			} else {
				urlParams[ name ] = value;
			}
		}
	}

	return urlParams;
}

function decodeQueryParam( param ) {
	return decodeURIComponent( param.replace( /\+/g, "%20" ) );
}

// Don't load the HTML Reporter on non-browser environments
if ( typeof window === "undefined" || !window.document ) {
	return;
}

QUnit.init = function() {
	throw new Error(
		"QUnit.init is removed in QUnit 2.0, use QUnit.test() with assert.async() instead.\n" +
		"Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/"
	);
};

var config = QUnit.config,
	document = window.document,
	collapseNext = false,
	hasOwn = Object.prototype.hasOwnProperty,
	unfilteredUrl = setUrl( { filter: undefined, module: undefined,
		moduleId: undefined, testId: undefined } ),
	defined = {
		sessionStorage: ( function() {
			var x = "qunit-test-string";
			try {
				sessionStorage.setItem( x, x );
				sessionStorage.removeItem( x );
				return true;
			} catch ( e ) {
				return false;
			}
		}() )
	},
	modulesList = [];

// Escape text for attribute or text content.
function escapeText( s ) {
	if ( !s ) {
		return "";
	}
	s = s + "";

	// Both single quotes and double quotes (for attributes)
	return s.replace( /['"<>&]/g, function( s ) {
		switch ( s ) {
		case "'":
			return "&#039;";
		case "\"":
			return "&quot;";
		case "<":
			return "&lt;";
		case ">":
			return "&gt;";
		case "&":
			return "&amp;";
		}
	} );
}

function addEvent( elem, type, fn ) {
	elem.addEventListener( type, fn, false );
}

function removeEvent( elem, type, fn ) {
	elem.removeEventListener( type, fn, false );
}

function addEvents( elems, type, fn ) {
	var i = elems.length;
	while ( i-- ) {
		addEvent( elems[ i ], type, fn );
	}
}

function hasClass( elem, name ) {
	return ( " " + elem.className + " " ).indexOf( " " + name + " " ) >= 0;
}

function addClass( elem, name ) {
	if ( !hasClass( elem, name ) ) {
		elem.className += ( elem.className ? " " : "" ) + name;
	}
}

function toggleClass( elem, name, force ) {
	if ( force || typeof force === "undefined" && !hasClass( elem, name ) ) {
		addClass( elem, name );
	} else {
		removeClass( elem, name );
	}
}

function removeClass( elem, name ) {
	var set = " " + elem.className + " ";

	// Class name may appear multiple times
	while ( set.indexOf( " " + name + " " ) >= 0 ) {
		set = set.replace( " " + name + " ", " " );
	}

	// Trim for prettiness
	elem.className = typeof set.trim === "function" ? set.trim() : set.replace( /^\s+|\s+$/g, "" );
}

function id( name ) {
	return document.getElementById && document.getElementById( name );
}

function interceptNavigation( ev ) {
	applyUrlParams();

	if ( ev && ev.preventDefault ) {
		ev.preventDefault();
	}

	return false;
}

function getUrlConfigHtml() {
	var i, j, val,
		escaped, escapedTooltip,
		selection = false,
		urlConfig = config.urlConfig,
		urlConfigHtml = "";

	for ( i = 0; i < urlConfig.length; i++ ) {

		// Options can be either strings or objects with nonempty "id" properties
		val = config.urlConfig[ i ];
		if ( typeof val === "string" ) {
			val = {
				id: val,
				label: val
			};
		}

		escaped = escapeText( val.id );
		escapedTooltip = escapeText( val.tooltip );

		if ( !val.value || typeof val.value === "string" ) {
			urlConfigHtml += "<label for='qunit-urlconfig-" + escaped +
				"' title='" + escapedTooltip + "'><input id='qunit-urlconfig-" + escaped +
				"' name='" + escaped + "' type='checkbox'" +
				( val.value ? " value='" + escapeText( val.value ) + "'" : "" ) +
				( config[ val.id ] ? " checked='checked'" : "" ) +
				" title='" + escapedTooltip + "' />" + escapeText( val.label ) + "</label>";
		} else {
			urlConfigHtml += "<label for='qunit-urlconfig-" + escaped +
				"' title='" + escapedTooltip + "'>" + val.label +
				": </label><select id='qunit-urlconfig-" + escaped +
				"' name='" + escaped + "' title='" + escapedTooltip + "'><option></option>";

			if ( QUnit.is( "array", val.value ) ) {
				for ( j = 0; j < val.value.length; j++ ) {
					escaped = escapeText( val.value[ j ] );
					urlConfigHtml += "<option value='" + escaped + "'" +
						( config[ val.id ] === val.value[ j ] ?
							( selection = true ) && " selected='selected'" : "" ) +
						">" + escaped + "</option>";
				}
			} else {
				for ( j in val.value ) {
					if ( hasOwn.call( val.value, j ) ) {
						urlConfigHtml += "<option value='" + escapeText( j ) + "'" +
							( config[ val.id ] === j ?
								( selection = true ) && " selected='selected'" : "" ) +
							">" + escapeText( val.value[ j ] ) + "</option>";
					}
				}
			}
			if ( config[ val.id ] && !selection ) {
				escaped = escapeText( config[ val.id ] );
				urlConfigHtml += "<option value='" + escaped +
					"' selected='selected' disabled='disabled'>" + escaped + "</option>";
			}
			urlConfigHtml += "</select>";
		}
	}

	return urlConfigHtml;
}

// Handle "click" events on toolbar checkboxes and "change" for select menus.
// Updates the URL with the new state of `config.urlConfig` values.
function toolbarChanged() {
	var updatedUrl, value, tests,
		field = this,
		params = {};

	// Detect if field is a select menu or a checkbox
	if ( "selectedIndex" in field ) {
		value = field.options[ field.selectedIndex ].value || undefined;
	} else {
		value = field.checked ? ( field.defaultValue || true ) : undefined;
	}

	params[ field.name ] = value;
	updatedUrl = setUrl( params );

	// Check if we can apply the change without a page refresh
	if ( "hidepassed" === field.name && "replaceState" in window.history ) {
		QUnit.urlParams[ field.name ] = value;
		config[ field.name ] = value || false;
		tests = id( "qunit-tests" );
		if ( tests ) {
			toggleClass( tests, "hidepass", value || false );
		}
		window.history.replaceState( null, "", updatedUrl );
	} else {
		window.location = updatedUrl;
	}
}

function setUrl( params ) {
	var key, arrValue, i,
		querystring = "?",
		location = window.location;

	params = QUnit.extend( QUnit.extend( {}, QUnit.urlParams ), params );

	for ( key in params ) {

		// Skip inherited or undefined properties
		if ( hasOwn.call( params, key ) && params[ key ] !== undefined ) {

			// Output a parameter for each value of this key (but usually just one)
			arrValue = [].concat( params[ key ] );
			for ( i = 0; i < arrValue.length; i++ ) {
				querystring += encodeURIComponent( key );
				if ( arrValue[ i ] !== true ) {
					querystring += "=" + encodeURIComponent( arrValue[ i ] );
				}
				querystring += "&";
			}
		}
	}
	return location.protocol + "//" + location.host +
		location.pathname + querystring.slice( 0, -1 );
}

function applyUrlParams() {
	var i,
		selectedModules = [],
		modulesList = id( "qunit-modulefilter-dropdown-list" ).getElementsByTagName( "input" ),
		filter = id( "qunit-filter-input" ).value;

	for ( i = 0; i < modulesList.length; i++ )  {
		if ( modulesList[ i ].checked ) {
			selectedModules.push( modulesList[ i ].value );
		}
	}

	window.location = setUrl( {
		filter: ( filter === "" ) ? undefined : filter,
		moduleId: ( selectedModules.length === 0 ) ? undefined : selectedModules,

		// Remove module and testId filter
		module: undefined,
		testId: undefined
	} );
}

function toolbarUrlConfigContainer() {
	var urlConfigContainer = document.createElement( "span" );

	urlConfigContainer.innerHTML = getUrlConfigHtml();
	addClass( urlConfigContainer, "qunit-url-config" );

	addEvents( urlConfigContainer.getElementsByTagName( "input" ), "change", toolbarChanged );
	addEvents( urlConfigContainer.getElementsByTagName( "select" ), "change", toolbarChanged );

	return urlConfigContainer;
}

function toolbarLooseFilter() {
	var filter = document.createElement( "form" ),
		label = document.createElement( "label" ),
		input = document.createElement( "input" ),
		button = document.createElement( "button" );

	addClass( filter, "qunit-filter" );

	label.innerHTML = "Filter: ";

	input.type = "text";
	input.value = config.filter || "";
	input.name = "filter";
	input.id = "qunit-filter-input";

	button.innerHTML = "Go";

	label.appendChild( input );

	filter.appendChild( label );
	filter.appendChild( document.createTextNode( " " ) );
	filter.appendChild( button );
	addEvent( filter, "submit", interceptNavigation );

	return filter;
}

function moduleListHtml () {
	var i, checked,
		html = "";

	for ( i = 0; i < config.modules.length; i++ ) {
		if ( config.modules[ i ].name !== "" ) {
			checked = config.moduleId.indexOf( config.modules[ i ].moduleId ) > -1;
			html += "<li><label class='clickable" + ( checked ? " checked" : "" ) +
				"'><input type='checkbox' " + "value='" + config.modules[ i ].moduleId + "'" +
				( checked ? " checked='checked'" : "" ) + " />" +
				escapeText( config.modules[ i ].name ) + "</label></li>";
		}
	}

	return html;
}

function toolbarModuleFilter () {
	var allCheckbox, commit, reset,
		moduleFilter = document.createElement( "form" ),
		label = document.createElement( "label" ),
		moduleSearch = document.createElement( "input" ),
		dropDown = document.createElement( "div" ),
		actions = document.createElement( "span" ),
		dropDownList = document.createElement( "ul" ),
		dirty = false;

	moduleSearch.id = "qunit-modulefilter-search";
	addEvent( moduleSearch, "input", searchInput );
	addEvent( moduleSearch, "input", searchFocus );
	addEvent( moduleSearch, "focus", searchFocus );
	addEvent( moduleSearch, "click", searchFocus );

	label.id = "qunit-modulefilter-search-container";
	label.innerHTML = "Module: ";
	label.appendChild( moduleSearch );

	actions.id = "qunit-modulefilter-actions";
	actions.innerHTML =
		"<button style='display:none'>Apply</button>" +
		"<button type='reset' style='display:none'>Reset</button>" +
		"<label class='clickable" +
		( config.moduleId.length ? "" : " checked" ) +
		"'><input type='checkbox'" + ( config.moduleId.length ? "" : " checked='checked'" ) +
		">All modules</label>";
	allCheckbox = actions.lastChild.firstChild;
	commit = actions.firstChild;
	reset = commit.nextSibling;
	addEvent( commit, "click", applyUrlParams );

	dropDownList.id = "qunit-modulefilter-dropdown-list";
	dropDownList.innerHTML = moduleListHtml();

	dropDown.id = "qunit-modulefilter-dropdown";
	dropDown.style.display = "none";
	dropDown.appendChild( actions );
	dropDown.appendChild( dropDownList );
	addEvent( dropDown, "change", selectionChange );
	selectionChange();

	moduleFilter.id = "qunit-modulefilter";
	moduleFilter.appendChild( label );
	moduleFilter.appendChild( dropDown ) ;
	addEvent( moduleFilter, "submit", interceptNavigation );
	addEvent( moduleFilter, "reset", function() {

		// Let the reset happen, then update styles
		window.setTimeout( selectionChange );
	} );

	// Enables show/hide for the dropdown
	function searchFocus() {
		if ( dropDown.style.display !== "none" ) {
			return;
		}

		dropDown.style.display = "block";
		addEvent( document, "click", hideHandler );
		addEvent( document, "keydown", hideHandler );

		// Hide on Escape keydown or outside-container click
		function hideHandler( e )  {
			var inContainer = moduleFilter.contains( e.target );

			if ( e.keyCode === 27 || !inContainer ) {
				if ( e.keyCode === 27 && inContainer ) {
					moduleSearch.focus();
				}
				dropDown.style.display = "none";
				removeEvent( document, "click", hideHandler );
				removeEvent( document, "keydown", hideHandler );
				moduleSearch.value = "";
				searchInput();
			}
		}
	}

	// Processes module search box input
	function searchInput() {
		var i, item,
			searchText = moduleSearch.value.toLowerCase(),
			listItems = dropDownList.children;

		for ( i = 0; i < listItems.length; i++ ) {
			item = listItems[ i ];
			if ( !searchText || item.textContent.toLowerCase().indexOf( searchText ) > -1 ) {
				item.style.display = "";
			} else {
				item.style.display = "none";
			}
		}
	}

	// Processes selection changes
	function selectionChange( evt ) {
		var i, item,
			checkbox = evt && evt.target || allCheckbox,
			modulesList = dropDownList.getElementsByTagName( "input" ),
			selectedNames = [];

		toggleClass( checkbox.parentNode, "checked", checkbox.checked );

		dirty = false;
		if ( checkbox.checked && checkbox !== allCheckbox ) {
		   allCheckbox.checked = false;
		   removeClass( allCheckbox.parentNode, "checked" );
		}
		for ( i = 0; i < modulesList.length; i++ )  {
			item = modulesList[ i ];
			if ( !evt ) {
				toggleClass( item.parentNode, "checked", item.checked );
			} else if ( checkbox === allCheckbox && checkbox.checked ) {
				item.checked = false;
				removeClass( item.parentNode, "checked" );
			}
			dirty = dirty || ( item.checked !== item.defaultChecked );
			if ( item.checked ) {
				selectedNames.push( item.parentNode.textContent );
			}
		}

		commit.style.display = reset.style.display = dirty ? "" : "none";
		moduleSearch.placeholder = selectedNames.join( ", " ) || allCheckbox.parentNode.textContent;
		moduleSearch.title = "Type to filter list. Current selection:\n" +
			( selectedNames.join( "\n" ) || allCheckbox.parentNode.textContent );
	}

	return moduleFilter;
}

function appendToolbar() {
	var toolbar = id( "qunit-testrunner-toolbar" );

	if ( toolbar ) {
		toolbar.appendChild( toolbarUrlConfigContainer() );
		toolbar.appendChild( toolbarModuleFilter() );
		toolbar.appendChild( toolbarLooseFilter() );
		toolbar.appendChild( document.createElement( "div" ) ).className = "clearfix";
	}
}

function appendHeader() {
	var header = id( "qunit-header" );

	if ( header ) {
		header.innerHTML = "<a href='" + escapeText( unfilteredUrl ) + "'>" + header.innerHTML +
			"</a> ";
	}
}

function appendBanner() {
	var banner = id( "qunit-banner" );

	if ( banner ) {
		banner.className = "";
	}
}

function appendTestResults() {
	var tests = id( "qunit-tests" ),
		result = id( "qunit-testresult" );

	if ( result ) {
		result.parentNode.removeChild( result );
	}

	if ( tests ) {
		tests.innerHTML = "";
		result = document.createElement( "p" );
		result.id = "qunit-testresult";
		result.className = "result";
		tests.parentNode.insertBefore( result, tests );
		result.innerHTML = "Running...<br />&#160;";
	}
}

function appendFilteredTest() {
	var testId = QUnit.config.testId;
	if ( !testId || testId.length <= 0 ) {
		return "";
	}
	return "<div id='qunit-filteredTest'>Rerunning selected tests: " +
		escapeText( testId.join( ", " ) ) +
		" <a id='qunit-clearFilter' href='" +
		escapeText( unfilteredUrl ) +
		"'>Run all tests</a></div>";
}

function appendUserAgent() {
	var userAgent = id( "qunit-userAgent" );

	if ( userAgent ) {
		userAgent.innerHTML = "";
		userAgent.appendChild(
			document.createTextNode(
				"QUnit " + QUnit.version + "; " + navigator.userAgent
			)
		);
	}
}

function appendInterface() {
	var qunit = id( "qunit" );

	if ( qunit ) {
		qunit.innerHTML =
			"<h1 id='qunit-header'>" + escapeText( document.title ) + "</h1>" +
			"<h2 id='qunit-banner'></h2>" +
			"<div id='qunit-testrunner-toolbar'></div>" +
			appendFilteredTest() +
			"<h2 id='qunit-userAgent'></h2>" +
			"<ol id='qunit-tests'></ol>";
	}

	appendHeader();
	appendBanner();
	appendTestResults();
	appendUserAgent();
	appendToolbar();
}

function appendTestsList( modules ) {
	var i, l, x, z, test, moduleObj;

	for ( i = 0, l = modules.length; i < l; i++ ) {
		moduleObj = modules[ i ];

		for ( x = 0, z = moduleObj.tests.length; x < z; x++ ) {
			test = moduleObj.tests[ x ];

			appendTest( test.name, test.testId, moduleObj.name );
		}
	}
}

function appendTest( name, testId, moduleName ) {
	var title, rerunTrigger, testBlock, assertList,
		tests = id( "qunit-tests" );

	if ( !tests ) {
		return;
	}

	title = document.createElement( "strong" );
	title.innerHTML = getNameHtml( name, moduleName );

	rerunTrigger = document.createElement( "a" );
	rerunTrigger.innerHTML = "Rerun";
	rerunTrigger.href = setUrl( { testId: testId } );

	testBlock = document.createElement( "li" );
	testBlock.appendChild( title );
	testBlock.appendChild( rerunTrigger );
	testBlock.id = "qunit-test-output-" + testId;

	assertList = document.createElement( "ol" );
	assertList.className = "qunit-assert-list";

	testBlock.appendChild( assertList );

	tests.appendChild( testBlock );
}

// HTML Reporter initialization and load
QUnit.begin( function( details ) {
	var i, moduleObj, tests;

	// Sort modules by name for the picker
	for ( i = 0; i < details.modules.length; i++ ) {
		moduleObj = details.modules[ i ];
		if ( moduleObj.name ) {
			modulesList.push( moduleObj.name );
		}
	}
	modulesList.sort( function( a, b ) {
		return a.localeCompare( b );
	} );

	// Initialize QUnit elements
	appendInterface();
	appendTestsList( details.modules );
	tests = id( "qunit-tests" );
	if ( tests && config.hidepassed ) {
		addClass( tests, "hidepass" );
	}
} );

QUnit.done( function( details ) {
	var i, key,
		banner = id( "qunit-banner" ),
		tests = id( "qunit-tests" ),
		html = [
			"Tests completed in ",
			details.runtime,
			" milliseconds.<br />",
			"<span class='passed'>",
			details.passed,
			"</span> assertions of <span class='total'>",
			details.total,
			"</span> passed, <span class='failed'>",
			details.failed,
			"</span> failed."
		].join( "" );

	if ( banner ) {
		banner.className = details.failed ? "qunit-fail" : "qunit-pass";
	}

	if ( tests ) {
		id( "qunit-testresult" ).innerHTML = html;
	}

	if ( config.altertitle && document.title ) {

		// Show ? for good, ? for bad suite result in title
		// use escape sequences in case file gets loaded with non-utf-8-charset
		document.title = [
			( details.failed ? "\u2716" : "\u2714" ),
			document.title.replace( /^[\u2714\u2716] /i, "" )
		].join( " " );
	}

	// Clear own sessionStorage items if all tests passed
	if ( config.reorder && defined.sessionStorage && details.failed === 0 ) {
		for ( i = 0; i < sessionStorage.length; i++ ) {
			key = sessionStorage.key( i++ );
			if ( key.indexOf( "qunit-test-" ) === 0 ) {
				sessionStorage.removeItem( key );
			}
		}
	}

	// Scroll back to top to show results
	if ( config.scrolltop && window.scrollTo ) {
		window.scrollTo( 0, 0 );
	}
} );

function getNameHtml( name, module ) {
	var nameHtml = "";

	if ( module ) {
		nameHtml = "<span class='module-name'>" + escapeText( module ) + "</span>: ";
	}

	nameHtml += "<span class='test-name'>" + escapeText( name ) + "</span>";

	return nameHtml;
}

QUnit.testStart( function( details ) {
	var running, testBlock, bad;

	testBlock = id( "qunit-test-output-" + details.testId );
	if ( testBlock ) {
		testBlock.className = "running";
	} else {

		// Report later registered tests
		appendTest( details.name, details.testId, details.module );
	}

	running = id( "qunit-testresult" );
	if ( running ) {
		bad = QUnit.config.reorder && defined.sessionStorage &&
			+sessionStorage.getItem( "qunit-test-" + details.module + "-" + details.name );

		running.innerHTML = ( bad ?
			"Rerunning previously failed test: <br />" :
			"Running: <br />" ) +
			getNameHtml( details.name, details.module );
	}

} );

function stripHtml( string ) {

	// Strip tags, html entity and whitespaces
	return string.replace( /<\/?[^>]+(>|$)/g, "" ).replace( /\&quot;/g, "" ).replace( /\s+/g, "" );
}

QUnit.log( function( details ) {
	var assertList, assertLi,
		message, expected, actual, diff,
		showDiff = false,
		testItem = id( "qunit-test-output-" + details.testId );

	if ( !testItem ) {
		return;
	}

	message = escapeText( details.message ) || ( details.result ? "okay" : "failed" );
	message = "<span class='test-message'>" + message + "</span>";
	message += "<span class='runtime'>@ " + details.runtime + " ms</span>";

	// The pushFailure doesn't provide details.expected
	// when it calls, it's implicit to also not show expected and diff stuff
	// Also, we need to check details.expected existence, as it can exist and be undefined
	if ( !details.result && hasOwn.call( details, "expected" ) ) {
		if ( details.negative ) {
			expected = "NOT " + QUnit.dump.parse( details.expected );
		} else {
			expected = QUnit.dump.parse( details.expected );
		}

		actual = QUnit.dump.parse( details.actual );
		message += "<table><tr class='test-expected'><th>Expected: </th><td><pre>" +
			escapeText( expected ) +
			"</pre></td></tr>";

		if ( actual !== expected ) {

			message += "<tr class='test-actual'><th>Result: </th><td><pre>" +
				escapeText( actual ) + "</pre></td></tr>";

			// Don't show diff if actual or expected are booleans
			if ( !( /^(true|false)$/.test( actual ) ) &&
					!( /^(true|false)$/.test( expected ) ) ) {
				diff = QUnit.diff( expected, actual );
				showDiff = stripHtml( diff ).length !==
					stripHtml( expected ).length +
					stripHtml( actual ).length;
			}

			// Don't show diff if expected and actual are totally different
			if ( showDiff ) {
				message += "<tr class='test-diff'><th>Diff: </th><td><pre>" +
					diff + "</pre></td></tr>";
			}
		} else if ( expected.indexOf( "[object Array]" ) !== -1 ||
				expected.indexOf( "[object Object]" ) !== -1 ) {
			message += "<tr class='test-message'><th>Message: </th><td>" +
				"Diff suppressed as the depth of object is more than current max depth (" +
				QUnit.config.maxDepth + ").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to " +
				" run with a higher max depth or <a href='" +
				escapeText( setUrl( { maxDepth: -1 } ) ) + "'>" +
				"Rerun</a> without max depth.</p></td></tr>";
		} else {
			message += "<tr class='test-message'><th>Message: </th><td>" +
				"Diff suppressed as the expected and actual results have an equivalent" +
				" serialization</td></tr>";
		}

		if ( details.source ) {
			message += "<tr class='test-source'><th>Source: </th><td><pre>" +
				escapeText( details.source ) + "</pre></td></tr>";
		}

		message += "</table>";

	// This occurs when pushFailure is set and we have an extracted stack trace
	} else if ( !details.result && details.source ) {
		message += "<table>" +
			"<tr class='test-source'><th>Source: </th><td><pre>" +
			escapeText( details.source ) + "</pre></td></tr>" +
			"</table>";
	}

	assertList = testItem.getElementsByTagName( "ol" )[ 0 ];

	assertLi = document.createElement( "li" );
	assertLi.className = details.result ? "pass" : "fail";
	assertLi.innerHTML = message;
	assertList.appendChild( assertLi );
} );

QUnit.testDone( function( details ) {
	var testTitle, time, testItem, assertList,
		good, bad, testCounts, skipped, sourceName,
		tests = id( "qunit-tests" );

	if ( !tests ) {
		return;
	}

	testItem = id( "qunit-test-output-" + details.testId );

	assertList = testItem.getElementsByTagName( "ol" )[ 0 ];

	good = details.passed;
	bad = details.failed;

	// Store result when possible
	if ( config.reorder && defined.sessionStorage ) {
		if ( bad ) {
			sessionStorage.setItem( "qunit-test-" + details.module + "-" + details.name, bad );
		} else {
			sessionStorage.removeItem( "qunit-test-" + details.module + "-" + details.name );
		}
	}

	if ( bad === 0 ) {

		// Collapse the passing tests
		addClass( assertList, "qunit-collapsed" );
	} else if ( bad && config.collapse && !collapseNext ) {

		// Skip collapsing the first failing test
		collapseNext = true;
	} else {

		// Collapse remaining tests
		addClass( assertList, "qunit-collapsed" );
	}

	// The testItem.firstChild is the test name
	testTitle = testItem.firstChild;

	testCounts = bad ?
		"<b class='failed'>" + bad + "</b>, " + "<b class='passed'>" + good + "</b>, " :
		"";

	testTitle.innerHTML += " <b class='counts'>(" + testCounts +
		details.assertions.length + ")</b>";

	if ( details.skipped ) {
		testItem.className = "skipped";
		skipped = document.createElement( "em" );
		skipped.className = "qunit-skipped-label";
		skipped.innerHTML = "skipped";
		testItem.insertBefore( skipped, testTitle );
	} else {
		addEvent( testTitle, "click", function() {
			toggleClass( assertList, "qunit-collapsed" );
		} );

		testItem.className = bad ? "fail" : "pass";

		time = document.createElement( "span" );
		time.className = "runtime";
		time.innerHTML = details.runtime + " ms";
		testItem.insertBefore( time, assertList );
	}

	// Show the source of the test when showing assertions
	if ( details.source ) {
		sourceName = document.createElement( "p" );
		sourceName.innerHTML = "<strong>Source: </strong>" + details.source;
		addClass( sourceName, "qunit-source" );
		if ( bad === 0 ) {
			addClass( sourceName, "qunit-collapsed" );
		}
		addEvent( testTitle, "click", function() {
			toggleClass( sourceName, "qunit-collapsed" );
		} );
		testItem.appendChild( sourceName );
	}
} );

// Avoid readyState issue with phantomjs
// Ref: #818
var notPhantom = ( function( p ) {
	return !( p && p.version && p.version.major > 0 );
} )( window.phantom );

if ( notPhantom && document.readyState === "complete" ) {
	QUnit.load();
} else {
	addEvent( window, "load", QUnit.load );
}

/*
 * This file is a modified version of google-diff-match-patch's JavaScript implementation
 * (https://code.google.com/p/google-diff-match-patch/source/browse/trunk/javascript/diff_match_patch_uncompressed.js),
 * modifications are licensed as more fully set forth in LICENSE.txt.
 *
 * The original source of google-diff-match-patch is attributable and licensed as follows:
 *
 * Copyright 2006 Google Inc.
 * https://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * More Info:
 *  https://code.google.com/p/google-diff-match-patch/
 *
 * Usage: QUnit.diff(expected, actual)
 *
 */
QUnit.diff = ( function() {
	function DiffMatchPatch() {
	}

	//  DIFF FUNCTIONS

	/**
	 * The data structure representing a diff is an array of tuples:
	 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
	 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
	 */
	var DIFF_DELETE = -1,
		DIFF_INSERT = 1,
		DIFF_EQUAL = 0;

	/**
	 * Find the differences between two texts.  Simplifies the problem by stripping
	 * any common prefix or suffix off the texts before diffing.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {boolean=} optChecklines Optional speedup flag. If present and false,
	 *     then don't run a line-level diff first to identify the changed areas.
	 *     Defaults to true, which does a faster, slightly less optimal diff.
	 * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
	 */
	DiffMatchPatch.prototype.DiffMain = function( text1, text2, optChecklines ) {
		var deadline, checklines, commonlength,
			commonprefix, commonsuffix, diffs;

		// The diff must be complete in up to 1 second.
		deadline = ( new Date() ).getTime() + 1000;

		// Check for null inputs.
		if ( text1 === null || text2 === null ) {
			throw new Error( "Null input. (DiffMain)" );
		}

		// Check for equality (speedup).
		if ( text1 === text2 ) {
			if ( text1 ) {
				return [
					[ DIFF_EQUAL, text1 ]
				];
			}
			return [];
		}

		if ( typeof optChecklines === "undefined" ) {
			optChecklines = true;
		}

		checklines = optChecklines;

		// Trim off common prefix (speedup).
		commonlength = this.diffCommonPrefix( text1, text2 );
		commonprefix = text1.substring( 0, commonlength );
		text1 = text1.substring( commonlength );
		text2 = text2.substring( commonlength );

		// Trim off common suffix (speedup).
		commonlength = this.diffCommonSuffix( text1, text2 );
		commonsuffix = text1.substring( text1.length - commonlength );
		text1 = text1.substring( 0, text1.length - commonlength );
		text2 = text2.substring( 0, text2.length - commonlength );

		// Compute the diff on the middle block.
		diffs = this.diffCompute( text1, text2, checklines, deadline );

		// Restore the prefix and suffix.
		if ( commonprefix ) {
			diffs.unshift( [ DIFF_EQUAL, commonprefix ] );
		}
		if ( commonsuffix ) {
			diffs.push( [ DIFF_EQUAL, commonsuffix ] );
		}
		this.diffCleanupMerge( diffs );
		return diffs;
	};

	/**
	 * Reduce the number of edits by eliminating operationally trivial equalities.
	 * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
	 */
	DiffMatchPatch.prototype.diffCleanupEfficiency = function( diffs ) {
		var changes, equalities, equalitiesLength, lastequality,
			pointer, preIns, preDel, postIns, postDel;
		changes = false;
		equalities = []; // Stack of indices where equalities are found.
		equalitiesLength = 0; // Keeping our own length var is faster in JS.
		/** @type {?string} */
		lastequality = null;

		// Always equal to diffs[equalities[equalitiesLength - 1]][1]
		pointer = 0; // Index of current position.

		// Is there an insertion operation before the last equality.
		preIns = false;

		// Is there a deletion operation before the last equality.
		preDel = false;

		// Is there an insertion operation after the last equality.
		postIns = false;

		// Is there a deletion operation after the last equality.
		postDel = false;
		while ( pointer < diffs.length ) {

			// Equality found.
			if ( diffs[ pointer ][ 0 ] === DIFF_EQUAL ) {
				if ( diffs[ pointer ][ 1 ].length < 4 && ( postIns || postDel ) ) {

					// Candidate found.
					equalities[ equalitiesLength++ ] = pointer;
					preIns = postIns;
					preDel = postDel;
					lastequality = diffs[ pointer ][ 1 ];
				} else {

					// Not a candidate, and can never become one.
					equalitiesLength = 0;
					lastequality = null;
				}
				postIns = postDel = false;

			// An insertion or deletion.
			} else {

				if ( diffs[ pointer ][ 0 ] === DIFF_DELETE ) {
					postDel = true;
				} else {
					postIns = true;
				}

				/*
				 * Five types to be split:
				 * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
				 * <ins>A</ins>X<ins>C</ins><del>D</del>
				 * <ins>A</ins><del>B</del>X<ins>C</ins>
				 * <ins>A</del>X<ins>C</ins><del>D</del>
				 * <ins>A</ins><del>B</del>X<del>C</del>
				 */
				if ( lastequality && ( ( preIns && preDel && postIns && postDel ) ||
						( ( lastequality.length < 2 ) &&
						( preIns + preDel + postIns + postDel ) === 3 ) ) ) {

					// Duplicate record.
					diffs.splice(
						equalities[ equalitiesLength - 1 ],
						0,
						[ DIFF_DELETE, lastequality ]
					);

					// Change second copy to insert.
					diffs[ equalities[ equalitiesLength - 1 ] + 1 ][ 0 ] = DIFF_INSERT;
					equalitiesLength--; // Throw away the equality we just deleted;
					lastequality = null;
					if ( preIns && preDel ) {

						// No changes made which could affect previous entry, keep going.
						postIns = postDel = true;
						equalitiesLength = 0;
					} else {
						equalitiesLength--; // Throw away the previous equality.
						pointer = equalitiesLength > 0 ? equalities[ equalitiesLength - 1 ] : -1;
						postIns = postDel = false;
					}
					changes = true;
				}
			}
			pointer++;
		}

		if ( changes ) {
			this.diffCleanupMerge( diffs );
		}
	};

	/**
	 * Convert a diff array into a pretty HTML report.
	 * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
	 * @param {integer} string to be beautified.
	 * @return {string} HTML representation.
	 */
	DiffMatchPatch.prototype.diffPrettyHtml = function( diffs ) {
		var op, data, x,
			html = [];
		for ( x = 0; x < diffs.length; x++ ) {
			op = diffs[ x ][ 0 ]; // Operation (insert, delete, equal)
			data = diffs[ x ][ 1 ]; // Text of change.
			switch ( op ) {
			case DIFF_INSERT:
				html[ x ] = "<ins>" + escapeText( data ) + "</ins>";
				break;
			case DIFF_DELETE:
				html[ x ] = "<del>" + escapeText( data ) + "</del>";
				break;
			case DIFF_EQUAL:
				html[ x ] = "<span>" + escapeText( data ) + "</span>";
				break;
			}
		}
		return html.join( "" );
	};

	/**
	 * Determine the common prefix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the start of each
	 *     string.
	 */
	DiffMatchPatch.prototype.diffCommonPrefix = function( text1, text2 ) {
		var pointermid, pointermax, pointermin, pointerstart;

		// Quick check for common null cases.
		if ( !text1 || !text2 || text1.charAt( 0 ) !== text2.charAt( 0 ) ) {
			return 0;
		}

		// Binary search.
		// Performance analysis: https://neil.fraser.name/news/2007/10/09/
		pointermin = 0;
		pointermax = Math.min( text1.length, text2.length );
		pointermid = pointermax;
		pointerstart = 0;
		while ( pointermin < pointermid ) {
			if ( text1.substring( pointerstart, pointermid ) ===
					text2.substring( pointerstart, pointermid ) ) {
				pointermin = pointermid;
				pointerstart = pointermin;
			} else {
				pointermax = pointermid;
			}
			pointermid = Math.floor( ( pointermax - pointermin ) / 2 + pointermin );
		}
		return pointermid;
	};

	/**
	 * Determine the common suffix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of each string.
	 */
	DiffMatchPatch.prototype.diffCommonSuffix = function( text1, text2 ) {
		var pointermid, pointermax, pointermin, pointerend;

		// Quick check for common null cases.
		if ( !text1 ||
				!text2 ||
				text1.charAt( text1.length - 1 ) !== text2.charAt( text2.length - 1 ) ) {
			return 0;
		}

		// Binary search.
		// Performance analysis: https://neil.fraser.name/news/2007/10/09/
		pointermin = 0;
		pointermax = Math.min( text1.length, text2.length );
		pointermid = pointermax;
		pointerend = 0;
		while ( pointermin < pointermid ) {
			if ( text1.substring( text1.length - pointermid, text1.length - pointerend ) ===
					text2.substring( text2.length - pointermid, text2.length - pointerend ) ) {
				pointermin = pointermid;
				pointerend = pointermin;
			} else {
				pointermax = pointermid;
			}
			pointermid = Math.floor( ( pointermax - pointermin ) / 2 + pointermin );
		}
		return pointermid;
	};

	/**
	 * Find the differences between two texts.  Assumes that the texts do not
	 * have any common prefix or suffix.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {boolean} checklines Speedup flag.  If false, then don't run a
	 *     line-level diff first to identify the changed areas.
	 *     If true, then run a faster, slightly less optimal diff.
	 * @param {number} deadline Time when the diff should be complete by.
	 * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
	 * @private
	 */
	DiffMatchPatch.prototype.diffCompute = function( text1, text2, checklines, deadline ) {
		var diffs, longtext, shorttext, i, hm,
			text1A, text2A, text1B, text2B,
			midCommon, diffsA, diffsB;

		if ( !text1 ) {

			// Just add some text (speedup).
			return [
				[ DIFF_INSERT, text2 ]
			];
		}

		if ( !text2 ) {

			// Just delete some text (speedup).
			return [
				[ DIFF_DELETE, text1 ]
			];
		}

		longtext = text1.length > text2.length ? text1 : text2;
		shorttext = text1.length > text2.length ? text2 : text1;
		i = longtext.indexOf( shorttext );
		if ( i !== -1 ) {

			// Shorter text is inside the longer text (speedup).
			diffs = [
				[ DIFF_INSERT, longtext.substring( 0, i ) ],
				[ DIFF_EQUAL, shorttext ],
				[ DIFF_INSERT, longtext.substring( i + shorttext.length ) ]
			];

			// Swap insertions for deletions if diff is reversed.
			if ( text1.length > text2.length ) {
				diffs[ 0 ][ 0 ] = diffs[ 2 ][ 0 ] = DIFF_DELETE;
			}
			return diffs;
		}

		if ( shorttext.length === 1 ) {

			// Single character string.
			// After the previous speedup, the character can't be an equality.
			return [
				[ DIFF_DELETE, text1 ],
				[ DIFF_INSERT, text2 ]
			];
		}

		// Check to see if the problem can be split in two.
		hm = this.diffHalfMatch( text1, text2 );
		if ( hm ) {

			// A half-match was found, sort out the return data.
			text1A = hm[ 0 ];
			text1B = hm[ 1 ];
			text2A = hm[ 2 ];
			text2B = hm[ 3 ];
			midCommon = hm[ 4 ];

			// Send both pairs off for separate processing.
			diffsA = this.DiffMain( text1A, text2A, checklines, deadline );
			diffsB = this.DiffMain( text1B, text2B, checklines, deadline );

			// Merge the results.
			return diffsA.concat( [
				[ DIFF_EQUAL, midCommon ]
			], diffsB );
		}

		if ( checklines && text1.length > 100 && text2.length > 100 ) {
			return this.diffLineMode( text1, text2, deadline );
		}

		return this.diffBisect( text1, text2, deadline );
	};

	/**
	 * Do the two texts share a substring which is at least half the length of the
	 * longer text?
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {Array.<string>} Five element Array, containing the prefix of
	 *     text1, the suffix of text1, the prefix of text2, the suffix of
	 *     text2 and the common middle.  Or null if there was no match.
	 * @private
	 */
	DiffMatchPatch.prototype.diffHalfMatch = function( text1, text2 ) {
		var longtext, shorttext, dmp,
			text1A, text2B, text2A, text1B, midCommon,
			hm1, hm2, hm;

		longtext = text1.length > text2.length ? text1 : text2;
		shorttext = text1.length > text2.length ? text2 : text1;
		if ( longtext.length < 4 || shorttext.length * 2 < longtext.length ) {
			return null; // Pointless.
		}
		dmp = this; // 'this' becomes 'window' in a closure.

		/**
		 * Does a substring of shorttext exist within longtext such that the substring
		 * is at least half the length of longtext?
		 * Closure, but does not reference any external variables.
		 * @param {string} longtext Longer string.
		 * @param {string} shorttext Shorter string.
		 * @param {number} i Start index of quarter length substring within longtext.
		 * @return {Array.<string>} Five element Array, containing the prefix of
		 *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
		 *     of shorttext and the common middle.  Or null if there was no match.
		 * @private
		 */
		function diffHalfMatchI( longtext, shorttext, i ) {
			var seed, j, bestCommon, prefixLength, suffixLength,
				bestLongtextA, bestLongtextB, bestShorttextA, bestShorttextB;

			// Start with a 1/4 length substring at position i as a seed.
			seed = longtext.substring( i, i + Math.floor( longtext.length / 4 ) );
			j = -1;
			bestCommon = "";
			while ( ( j = shorttext.indexOf( seed, j + 1 ) ) !== -1 ) {
				prefixLength = dmp.diffCommonPrefix( longtext.substring( i ),
					shorttext.substring( j ) );
				suffixLength = dmp.diffCommonSuffix( longtext.substring( 0, i ),
					shorttext.substring( 0, j ) );
				if ( bestCommon.length < suffixLength + prefixLength ) {
					bestCommon = shorttext.substring( j - suffixLength, j ) +
						shorttext.substring( j, j + prefixLength );
					bestLongtextA = longtext.substring( 0, i - suffixLength );
					bestLongtextB = longtext.substring( i + prefixLength );
					bestShorttextA = shorttext.substring( 0, j - suffixLength );
					bestShorttextB = shorttext.substring( j + prefixLength );
				}
			}
			if ( bestCommon.length * 2 >= longtext.length ) {
				return [ bestLongtextA, bestLongtextB,
					bestShorttextA, bestShorttextB, bestCommon
				];
			} else {
				return null;
			}
		}

		// First check if the second quarter is the seed for a half-match.
		hm1 = diffHalfMatchI( longtext, shorttext,
			Math.ceil( longtext.length / 4 ) );

		// Check again based on the third quarter.
		hm2 = diffHalfMatchI( longtext, shorttext,
			Math.ceil( longtext.length / 2 ) );
		if ( !hm1 && !hm2 ) {
			return null;
		} else if ( !hm2 ) {
			hm = hm1;
		} else if ( !hm1 ) {
			hm = hm2;
		} else {

			// Both matched.  Select the longest.
			hm = hm1[ 4 ].length > hm2[ 4 ].length ? hm1 : hm2;
		}

		// A half-match was found, sort out the return data.
		text1A, text1B, text2A, text2B;
		if ( text1.length > text2.length ) {
			text1A = hm[ 0 ];
			text1B = hm[ 1 ];
			text2A = hm[ 2 ];
			text2B = hm[ 3 ];
		} else {
			text2A = hm[ 0 ];
			text2B = hm[ 1 ];
			text1A = hm[ 2 ];
			text1B = hm[ 3 ];
		}
		midCommon = hm[ 4 ];
		return [ text1A, text1B, text2A, text2B, midCommon ];
	};

	/**
	 * Do a quick line-level diff on both strings, then rediff the parts for
	 * greater accuracy.
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} deadline Time when the diff should be complete by.
	 * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
	 * @private
	 */
	DiffMatchPatch.prototype.diffLineMode = function( text1, text2, deadline ) {
		var a, diffs, linearray, pointer, countInsert,
			countDelete, textInsert, textDelete, j;

		// Scan the text on a line-by-line basis first.
		a = this.diffLinesToChars( text1, text2 );
		text1 = a.chars1;
		text2 = a.chars2;
		linearray = a.lineArray;

		diffs = this.DiffMain( text1, text2, false, deadline );

		// Convert the diff back to original text.
		this.diffCharsToLines( diffs, linearray );

		// Eliminate freak matches (e.g. blank lines)
		this.diffCleanupSemantic( diffs );

		// Rediff any replacement blocks, this time character-by-character.
		// Add a dummy entry at the end.
		diffs.push( [ DIFF_EQUAL, "" ] );
		pointer = 0;
		countDelete = 0;
		countInsert = 0;
		textDelete = "";
		textInsert = "";
		while ( pointer < diffs.length ) {
			switch ( diffs[ pointer ][ 0 ] ) {
			case DIFF_INSERT:
				countInsert++;
				textInsert += diffs[ pointer ][ 1 ];
				break;
			case DIFF_DELETE:
				countDelete++;
				textDelete += diffs[ pointer ][ 1 ];
				break;
			case DIFF_EQUAL:

				// Upon reaching an equality, check for prior redundancies.
				if ( countDelete >= 1 && countInsert >= 1 ) {

					// Delete the offending records and add the merged ones.
					diffs.splice( pointer - countDelete - countInsert,
						countDelete + countInsert );
					pointer = pointer - countDelete - countInsert;
					a = this.DiffMain( textDelete, textInsert, false, deadline );
					for ( j = a.length - 1; j >= 0; j-- ) {
						diffs.splice( pointer, 0, a[ j ] );
					}
					pointer = pointer + a.length;
				}
				countInsert = 0;
				countDelete = 0;
				textDelete = "";
				textInsert = "";
				break;
			}
			pointer++;
		}
		diffs.pop(); // Remove the dummy entry at the end.

		return diffs;
	};

	/**
	 * Find the 'middle snake' of a diff, split the problem in two
	 * and return the recursively constructed diff.
	 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} deadline Time at which to bail if not yet complete.
	 * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
	 * @private
	 */
	DiffMatchPatch.prototype.diffBisect = function( text1, text2, deadline ) {
		var text1Length, text2Length, maxD, vOffset, vLength,
			v1, v2, x, delta, front, k1start, k1end, k2start,
			k2end, k2Offset, k1Offset, x1, x2, y1, y2, d, k1, k2;

		// Cache the text lengths to prevent multiple calls.
		text1Length = text1.length;
		text2Length = text2.length;
		maxD = Math.ceil( ( text1Length + text2Length ) / 2 );
		vOffset = maxD;
		vLength = 2 * maxD;
		v1 = new Array( vLength );
		v2 = new Array( vLength );

		// Setting all elements to -1 is faster in Chrome & Firefox than mixing
		// integers and undefined.
		for ( x = 0; x < vLength; x++ ) {
			v1[ x ] = -1;
			v2[ x ] = -1;
		}
		v1[ vOffset + 1 ] = 0;
		v2[ vOffset + 1 ] = 0;
		delta = text1Length - text2Length;

		// If the total number of characters is odd, then the front path will collide
		// with the reverse path.
		front = ( delta % 2 !== 0 );

		// Offsets for start and end of k loop.
		// Prevents mapping of space beyond the grid.
		k1start = 0;
		k1end = 0;
		k2start = 0;
		k2end = 0;
		for ( d = 0; d < maxD; d++ ) {

			// Bail out if deadline is reached.
			if ( ( new Date() ).getTime() > deadline ) {
				break;
			}

			// Walk the front path one step.
			for ( k1 = -d + k1start; k1 <= d - k1end; k1 += 2 ) {
				k1Offset = vOffset + k1;
				if ( k1 === -d || ( k1 !== d && v1[ k1Offset - 1 ] < v1[ k1Offset + 1 ] ) ) {
					x1 = v1[ k1Offset + 1 ];
				} else {
					x1 = v1[ k1Offset - 1 ] + 1;
				}
				y1 = x1 - k1;
				while ( x1 < text1Length && y1 < text2Length &&
					text1.charAt( x1 ) === text2.charAt( y1 ) ) {
					x1++;
					y1++;
				}
				v1[ k1Offset ] = x1;
				if ( x1 > text1Length ) {

					// Ran off the right of the graph.
					k1end += 2;
				} else if ( y1 > text2Length ) {

					// Ran off the bottom of the graph.
					k1start += 2;
				} else if ( front ) {
					k2Offset = vOffset + delta - k1;
					if ( k2Offset >= 0 && k2Offset < vLength && v2[ k2Offset ] !== -1 ) {

						// Mirror x2 onto top-left coordinate system.
						x2 = text1Length - v2[ k2Offset ];
						if ( x1 >= x2 ) {

							// Overlap detected.
							return this.diffBisectSplit( text1, text2, x1, y1, deadline );
						}
					}
				}
			}

			// Walk the reverse path one step.
			for ( k2 = -d + k2start; k2 <= d - k2end; k2 += 2 ) {
				k2Offset = vOffset + k2;
				if ( k2 === -d || ( k2 !== d && v2[ k2Offset - 1 ] < v2[ k2Offset + 1 ] ) ) {
					x2 = v2[ k2Offset + 1 ];
				} else {
					x2 = v2[ k2Offset - 1 ] + 1;
				}
				y2 = x2 - k2;
				while ( x2 < text1Length && y2 < text2Length &&
					text1.charAt( text1Length - x2 - 1 ) ===
					text2.charAt( text2Length - y2 - 1 ) ) {
					x2++;
					y2++;
				}
				v2[ k2Offset ] = x2;
				if ( x2 > text1Length ) {

					// Ran off the left of the graph.
					k2end += 2;
				} else if ( y2 > text2Length ) {

					// Ran off the top of the graph.
					k2start += 2;
				} else if ( !front ) {
					k1Offset = vOffset + delta - k2;
					if ( k1Offset >= 0 && k1Offset < vLength && v1[ k1Offset ] !== -1 ) {
						x1 = v1[ k1Offset ];
						y1 = vOffset + x1 - k1Offset;

						// Mirror x2 onto top-left coordinate system.
						x2 = text1Length - x2;
						if ( x1 >= x2 ) {

							// Overlap detected.
							return this.diffBisectSplit( text1, text2, x1, y1, deadline );
						}
					}
				}
			}
		}

		// Diff took too long and hit the deadline or
		// number of diffs equals number of characters, no commonality at all.
		return [
			[ DIFF_DELETE, text1 ],
			[ DIFF_INSERT, text2 ]
		];
	};

	/**
	 * Given the location of the 'middle snake', split the diff in two parts
	 * and recurse.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} x Index of split point in text1.
	 * @param {number} y Index of split point in text2.
	 * @param {number} deadline Time at which to bail if not yet complete.
	 * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
	 * @private
	 */
	DiffMatchPatch.prototype.diffBisectSplit = function( text1, text2, x, y, deadline ) {
		var text1a, text1b, text2a, text2b, diffs, diffsb;
		text1a = text1.substring( 0, x );
		text2a = text2.substring( 0, y );
		text1b = text1.substring( x );
		text2b = text2.substring( y );

		// Compute both diffs serially.
		diffs = this.DiffMain( text1a, text2a, false, deadline );
		diffsb = this.DiffMain( text1b, text2b, false, deadline );

		return diffs.concat( diffsb );
	};

	/**
	 * Reduce the number of edits by eliminating semantically trivial equalities.
	 * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
	 */
	DiffMatchPatch.prototype.diffCleanupSemantic = function( diffs ) {
		var changes, equalities, equalitiesLength, lastequality,
			pointer, lengthInsertions2, lengthDeletions2, lengthInsertions1,
			lengthDeletions1, deletion, insertion, overlapLength1, overlapLength2;
		changes = false;
		equalities = []; // Stack of indices where equalities are found.
		equalitiesLength = 0; // Keeping our own length var is faster in JS.
		/** @type {?string} */
		lastequality = null;

		// Always equal to diffs[equalities[equalitiesLength - 1]][1]
		pointer = 0; // Index of current position.

		// Number of characters that changed prior to the equality.
		lengthInsertions1 = 0;
		lengthDeletions1 = 0;

		// Number of characters that changed after the equality.
		lengthInsertions2 = 0;
		lengthDeletions2 = 0;
		while ( pointer < diffs.length ) {
			if ( diffs[ pointer ][ 0 ] === DIFF_EQUAL ) { // Equality found.
				equalities[ equalitiesLength++ ] = pointer;
				lengthInsertions1 = lengthInsertions2;
				lengthDeletions1 = lengthDeletions2;
				lengthInsertions2 = 0;
				lengthDeletions2 = 0;
				lastequality = diffs[ pointer ][ 1 ];
			} else { // An insertion or deletion.
				if ( diffs[ pointer ][ 0 ] === DIFF_INSERT ) {
					lengthInsertions2 += diffs[ pointer ][ 1 ].length;
				} else {
					lengthDeletions2 += diffs[ pointer ][ 1 ].length;
				}

				// Eliminate an equality that is smaller or equal to the edits on both
				// sides of it.
				if ( lastequality && ( lastequality.length <=
						Math.max( lengthInsertions1, lengthDeletions1 ) ) &&
						( lastequality.length <= Math.max( lengthInsertions2,
							lengthDeletions2 ) ) ) {

					// Duplicate record.
					diffs.splice(
						equalities[ equalitiesLength - 1 ],
						0,
						[ DIFF_DELETE, lastequality ]
					);

					// Change second copy to insert.
					diffs[ equalities[ equalitiesLength - 1 ] + 1 ][ 0 ] = DIFF_INSERT;

					// Throw away the equality we just deleted.
					equalitiesLength--;

					// Throw away the previous equality (it needs to be reevaluated).
					equalitiesLength--;
					pointer = equalitiesLength > 0 ? equalities[ equalitiesLength - 1 ] : -1;

					// Reset the counters.
					lengthInsertions1 = 0;
					lengthDeletions1 = 0;
					lengthInsertions2 = 0;
					lengthDeletions2 = 0;
					lastequality = null;
					changes = true;
				}
			}
			pointer++;
		}

		// Normalize the diff.
		if ( changes ) {
			this.diffCleanupMerge( diffs );
		}

		// Find any overlaps between deletions and insertions.
		// e.g: <del>abcxxx</del><ins>xxxdef</ins>
		//   -> <del>abc</del>xxx<ins>def</ins>
		// e.g: <del>xxxabc</del><ins>defxxx</ins>
		//   -> <ins>def</ins>xxx<del>abc</del>
		// Only extract an overlap if it is as big as the edit ahead or behind it.
		pointer = 1;
		while ( pointer < diffs.length ) {
			if ( diffs[ pointer - 1 ][ 0 ] === DIFF_DELETE &&
					diffs[ pointer ][ 0 ] === DIFF_INSERT ) {
				deletion = diffs[ pointer - 1 ][ 1 ];
				insertion = diffs[ pointer ][ 1 ];
				overlapLength1 = this.diffCommonOverlap( deletion, insertion );
				overlapLength2 = this.diffCommonOverlap( insertion, deletion );
				if ( overlapLength1 >= overlapLength2 ) {
					if ( overlapLength1 >= deletion.length / 2 ||
							overlapLength1 >= insertion.length / 2 ) {

						// Overlap found.  Insert an equality and trim the surrounding edits.
						diffs.splice(
							pointer,
							0,
							[ DIFF_EQUAL, insertion.substring( 0, overlapLength1 ) ]
						);
						diffs[ pointer - 1 ][ 1 ] =
							deletion.substring( 0, deletion.length - overlapLength1 );
						diffs[ pointer + 1 ][ 1 ] = insertion.substring( overlapLength1 );
						pointer++;
					}
				} else {
					if ( overlapLength2 >= deletion.length / 2 ||
							overlapLength2 >= insertion.length / 2 ) {

						// Reverse overlap found.
						// Insert an equality and swap and trim the surrounding edits.
						diffs.splice(
							pointer,
							0,
							[ DIFF_EQUAL, deletion.substring( 0, overlapLength2 ) ]
						);

						diffs[ pointer - 1 ][ 0 ] = DIFF_INSERT;
						diffs[ pointer - 1 ][ 1 ] =
							insertion.substring( 0, insertion.length - overlapLength2 );
						diffs[ pointer + 1 ][ 0 ] = DIFF_DELETE;
						diffs[ pointer + 1 ][ 1 ] =
							deletion.substring( overlapLength2 );
						pointer++;
					}
				}
				pointer++;
			}
			pointer++;
		}
	};

	/**
	 * Determine if the suffix of one string is the prefix of another.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of the first
	 *     string and the start of the second string.
	 * @private
	 */
	DiffMatchPatch.prototype.diffCommonOverlap = function( text1, text2 ) {
		var text1Length, text2Length, textLength,
			best, length, pattern, found;

		// Cache the text lengths to prevent multiple calls.
		text1Length = text1.length;
		text2Length = text2.length;

		// Eliminate the null case.
		if ( text1Length === 0 || text2Length === 0 ) {
			return 0;
		}

		// Truncate the longer string.
		if ( text1Length > text2Length ) {
			text1 = text1.substring( text1Length - text2Length );
		} else if ( text1Length < text2Length ) {
			text2 = text2.substring( 0, text1Length );
		}
		textLength = Math.min( text1Length, text2Length );

		// Quick check for the worst case.
		if ( text1 === text2 ) {
			return textLength;
		}

		// Start by looking for a single character match
		// and increase length until no match is found.
		// Performance analysis: https://neil.fraser.name/news/2010/11/04/
		best = 0;
		length = 1;
		while ( true ) {
			pattern = text1.substring( textLength - length );
			found = text2.indexOf( pattern );
			if ( found === -1 ) {
				return best;
			}
			length += found;
			if ( found === 0 || text1.substring( textLength - length ) ===
					text2.substring( 0, length ) ) {
				best = length;
				length++;
			}
		}
	};

	/**
	 * Split two texts into an array of strings.  Reduce the texts to a string of
	 * hashes where each Unicode character represents one line.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
	 *     An object containing the encoded text1, the encoded text2 and
	 *     the array of unique strings.
	 *     The zeroth element of the array of unique strings is intentionally blank.
	 * @private
	 */
	DiffMatchPatch.prototype.diffLinesToChars = function( text1, text2 ) {
		var lineArray, lineHash, chars1, chars2;
		lineArray = []; // E.g. lineArray[4] === 'Hello\n'
		lineHash = {};  // E.g. lineHash['Hello\n'] === 4

		// '\x00' is a valid character, but various debuggers don't like it.
		// So we'll insert a junk entry to avoid generating a null character.
		lineArray[ 0 ] = "";

		/**
		 * Split a text into an array of strings.  Reduce the texts to a string of
		 * hashes where each Unicode character represents one line.
		 * Modifies linearray and linehash through being a closure.
		 * @param {string} text String to encode.
		 * @return {string} Encoded string.
		 * @private
		 */
		function diffLinesToCharsMunge( text ) {
			var chars, lineStart, lineEnd, lineArrayLength, line;
			chars = "";

			// Walk the text, pulling out a substring for each line.
			// text.split('\n') would would temporarily double our memory footprint.
			// Modifying text would create many large strings to garbage collect.
			lineStart = 0;
			lineEnd = -1;

			// Keeping our own length variable is faster than looking it up.
			lineArrayLength = lineArray.length;
			while ( lineEnd < text.length - 1 ) {
				lineEnd = text.indexOf( "\n", lineStart );
				if ( lineEnd === -1 ) {
					lineEnd = text.length - 1;
				}
				line = text.substring( lineStart, lineEnd + 1 );
				lineStart = lineEnd + 1;

				if ( lineHash.hasOwnProperty ? lineHash.hasOwnProperty( line ) :
							( lineHash[ line ] !== undefined ) ) {
					chars += String.fromCharCode( lineHash[ line ] );
				} else {
					chars += String.fromCharCode( lineArrayLength );
					lineHash[ line ] = lineArrayLength;
					lineArray[ lineArrayLength++ ] = line;
				}
			}
			return chars;
		}

		chars1 = diffLinesToCharsMunge( text1 );
		chars2 = diffLinesToCharsMunge( text2 );
		return {
			chars1: chars1,
			chars2: chars2,
			lineArray: lineArray
		};
	};

	/**
	 * Rehydrate the text in a diff from a string of line hashes to real lines of
	 * text.
	 * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
	 * @param {!Array.<string>} lineArray Array of unique strings.
	 * @private
	 */
	DiffMatchPatch.prototype.diffCharsToLines = function( diffs, lineArray ) {
		var x, chars, text, y;
		for ( x = 0; x < diffs.length; x++ ) {
			chars = diffs[ x ][ 1 ];
			text = [];
			for ( y = 0; y < chars.length; y++ ) {
				text[ y ] = lineArray[ chars.charCodeAt( y ) ];
			}
			diffs[ x ][ 1 ] = text.join( "" );
		}
	};

	/**
	 * Reorder and merge like edit sections.  Merge equalities.
	 * Any edit section can move as long as it doesn't cross an equality.
	 * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
	 */
	DiffMatchPatch.prototype.diffCleanupMerge = function( diffs ) {
		var pointer, countDelete, countInsert, textInsert, textDelete,
			commonlength, changes, diffPointer, position;
		diffs.push( [ DIFF_EQUAL, "" ] ); // Add a dummy entry at the end.
		pointer = 0;
		countDelete = 0;
		countInsert = 0;
		textDelete = "";
		textInsert = "";
		commonlength;
		while ( pointer < diffs.length ) {
			switch ( diffs[ pointer ][ 0 ] ) {
			case DIFF_INSERT:
				countInsert++;
				textInsert += diffs[ pointer ][ 1 ];
				pointer++;
				break;
			case DIFF_DELETE:
				countDelete++;
				textDelete += diffs[ pointer ][ 1 ];
				pointer++;
				break;
			case DIFF_EQUAL:

				// Upon reaching an equality, check for prior redundancies.
				if ( countDelete + countInsert > 1 ) {
					if ( countDelete !== 0 && countInsert !== 0 ) {

						// Factor out any common prefixes.
						commonlength = this.diffCommonPrefix( textInsert, textDelete );
						if ( commonlength !== 0 ) {
							if ( ( pointer - countDelete - countInsert ) > 0 &&
									diffs[ pointer - countDelete - countInsert - 1 ][ 0 ] ===
									DIFF_EQUAL ) {
								diffs[ pointer - countDelete - countInsert - 1 ][ 1 ] +=
									textInsert.substring( 0, commonlength );
							} else {
								diffs.splice( 0, 0, [ DIFF_EQUAL,
									textInsert.substring( 0, commonlength )
								] );
								pointer++;
							}
							textInsert = textInsert.substring( commonlength );
							textDelete = textDelete.substring( commonlength );
						}

						// Factor out any common suffixies.
						commonlength = this.diffCommonSuffix( textInsert, textDelete );
						if ( commonlength !== 0 ) {
							diffs[ pointer ][ 1 ] = textInsert.substring( textInsert.length -
									commonlength ) + diffs[ pointer ][ 1 ];
							textInsert = textInsert.substring( 0, textInsert.length -
								commonlength );
							textDelete = textDelete.substring( 0, textDelete.length -
								commonlength );
						}
					}

					// Delete the offending records and add the merged ones.
					if ( countDelete === 0 ) {
						diffs.splice( pointer - countInsert,
							countDelete + countInsert, [ DIFF_INSERT, textInsert ] );
					} else if ( countInsert === 0 ) {
						diffs.splice( pointer - countDelete,
							countDelete + countInsert, [ DIFF_DELETE, textDelete ] );
					} else {
						diffs.splice(
							pointer - countDelete - countInsert,
							countDelete + countInsert,
							[ DIFF_DELETE, textDelete ], [ DIFF_INSERT, textInsert ]
						);
					}
					pointer = pointer - countDelete - countInsert +
						( countDelete ? 1 : 0 ) + ( countInsert ? 1 : 0 ) + 1;
				} else if ( pointer !== 0 && diffs[ pointer - 1 ][ 0 ] === DIFF_EQUAL ) {

					// Merge this equality with the previous one.
					diffs[ pointer - 1 ][ 1 ] += diffs[ pointer ][ 1 ];
					diffs.splice( pointer, 1 );
				} else {
					pointer++;
				}
				countInsert = 0;
				countDelete = 0;
				textDelete = "";
				textInsert = "";
				break;
			}
		}
		if ( diffs[ diffs.length - 1 ][ 1 ] === "" ) {
			diffs.pop(); // Remove the dummy entry at the end.
		}

		// Second pass: look for single edits surrounded on both sides by equalities
		// which can be shifted sideways to eliminate an equality.
		// e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
		changes = false;
		pointer = 1;

		// Intentionally ignore the first and last element (don't need checking).
		while ( pointer < diffs.length - 1 ) {
			if ( diffs[ pointer - 1 ][ 0 ] === DIFF_EQUAL &&
					diffs[ pointer + 1 ][ 0 ] === DIFF_EQUAL ) {

				diffPointer = diffs[ pointer ][ 1 ];
				position = diffPointer.substring(
					diffPointer.length - diffs[ pointer - 1 ][ 1 ].length
				);

				// This is a single edit surrounded by equalities.
				if ( position === diffs[ pointer - 1 ][ 1 ] ) {

					// Shift the edit over the previous equality.
					diffs[ pointer ][ 1 ] = diffs[ pointer - 1 ][ 1 ] +
						diffs[ pointer ][ 1 ].substring( 0, diffs[ pointer ][ 1 ].length -
							diffs[ pointer - 1 ][ 1 ].length );
					diffs[ pointer + 1 ][ 1 ] =
						diffs[ pointer - 1 ][ 1 ] + diffs[ pointer + 1 ][ 1 ];
					diffs.splice( pointer - 1, 1 );
					changes = true;
				} else if ( diffPointer.substring( 0, diffs[ pointer + 1 ][ 1 ].length ) ===
						diffs[ pointer + 1 ][ 1 ] ) {

					// Shift the edit over the next equality.
					diffs[ pointer - 1 ][ 1 ] += diffs[ pointer + 1 ][ 1 ];
					diffs[ pointer ][ 1 ] =
						diffs[ pointer ][ 1 ].substring( diffs[ pointer + 1 ][ 1 ].length ) +
						diffs[ pointer + 1 ][ 1 ];
					diffs.splice( pointer + 1, 1 );
					changes = true;
				}
			}
			pointer++;
		}

		// If shifts were made, the diff needs reordering and another shift sweep.
		if ( changes ) {
			this.diffCleanupMerge( diffs );
		}
	};

	return function( o, n ) {
		var diff, output, text;
		diff = new DiffMatchPatch();
		output = diff.DiffMain( o, n );
		diff.diffCleanupEfficiency( output );
		text = diff.diffPrettyHtml( output );

		return text;
	};
}() );

}() );Bridge.assembly("Bridge.Test.Bridge.ClientTest.Batch3", function ($asm, globals) {
    

    Bridge.define("Bridge.Test.Runtime.TestFixture$1", function (T) { return {
        statics: {
            instanceFabric: null,
            fixtureFabric: Bridge.getDefaultValue(T),
            getFixtureFabric: function () {
                if (Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric == null) {
                    Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric = Bridge.createInstance(T);
                }

                return Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric;
            },
            setFixtureFabric: function (value) {
                Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric = value;
            },
            instanceFabric$1: function (type) {
                if (Bridge.Test.Runtime.TestFixture$1(T).instanceFabric == null) {
                    Bridge.Test.Runtime.TestFixture$1(T).instanceFabric = Bridge.cast(Bridge.createInstance(type), Bridge.Test.Runtime.TestFixture$1(T));
                }

                return Bridge.Test.Runtime.TestFixture$1(T).instanceFabric;
            },
            beforeTest: function (needInstance, assert, type, expectedCount, testContext) {
                if (expectedCount === void 0) { expectedCount = null; }
                if (testContext === void 0) { testContext = null; }
                Bridge.Test.NUnit.Assert.assert = assert;

                if (System.Nullable.hasValue(expectedCount)) {
                    assert.expect(System.Nullable.getValue(expectedCount));
                }

                var instance = Bridge.Test.Runtime.TestFixture$1(T).instanceFabric$1(type);
                instance.setFixture(needInstance ? Bridge.Test.Runtime.TestFixture$1(T).getFixtureFabric() : Bridge.getDefaultValue(T));

                var fixtureContext = instance.getContext();

                if (testContext != null || fixtureContext != null) {
                    Bridge.Test.Runtime.ContextHelper.setContext(assert, Bridge.merge(new Bridge.Test.Runtime.Context(), {
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

    Bridge.define("Bridge.Test.Runtime.Context", {
        fixtureCtx: null,
        testCtx: null,
        stack: null
    });

    Bridge.define("Bridge.Test.Runtime.ContextHelper", {
        statics: {
            contextName: "BridgeTestContext",
            setContext: function (assert, ctx) {
                if (assert == null) {
                    return;
                }

                assert[Bridge.Test.Runtime.ContextHelper.contextName] = ctx;
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

                return Bridge.as(assert[Bridge.Test.Runtime.ContextHelper.contextName], Bridge.Test.Runtime.Context);
            },
            getContext: function () {
                return Bridge.Test.Runtime.ContextHelper.getContext$1(Bridge.Test.Runtime.ContextHelper.getAssert());
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
                    var qunitSourceName = Bridge.Test.Runtime.ContextHelper.getQUnitSource(testItem);

                    if (qunitSourceName == null) {
                        return null;
                    }

                    var html = "";

                    if (project != null) {
                        html = System.String.concat(html, (System.String.concat(" <strong>Project: </strong>", project)));
                    }

                    if (method != null) {
                        html = System.String.concat(html, (System.String.concat(" at ", Bridge.Test.Runtime.ContextHelper.adjustTags(method))));
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
                            Bridge.Test.Runtime.ContextHelper.toggleClass(assertList, "qunit-collapsed", [qunitSourceName]);
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
                var output = Bridge.Test.Runtime.ContextHelper.getTestOutput(testId);

                return Bridge.Test.Runtime.ContextHelper.getTestSource(output);
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
                if (!Bridge.Test.Runtime.ContextHelper.hasClass(el, name)) {
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
                if (force || !Bridge.Test.Runtime.ContextHelper.hasClass(el, name)) {
                    Bridge.Test.Runtime.ContextHelper.addClass(el, name);
                } else {
                    Bridge.Test.Runtime.ContextHelper.removeClass(el, name);
                }
            },
            toggleClass: function (src, name, dest) {
                var $t;
                if (dest === void 0) { dest = []; }
                if (src == null) {
                    return;
                }

                var has = Bridge.Test.Runtime.ContextHelper.hasClass(src, name);

                $t = Bridge.getEnumerator(dest);
                while ($t.moveNext()) {
                    var el = $t.getCurrent();
                    if (has) {
                        Bridge.Test.Runtime.ContextHelper.addClass(el, name);
                    } else {
                        Bridge.Test.Runtime.ContextHelper.removeClass(el, name);
                    }

                }
            },
            init: function () {
                // Check that required elements exist and created if required
                var ensure = $asm.$.Bridge.Test.Runtime.ContextHelper.f1;

                ensure("qunit-fixture");
                ensure("qunit");
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
        project: null,
        className: null,
        file: null
    });

    Bridge.define("Bridge.Test.NUnit.Assert", {
        statics: {
            assert: null,
            stackOffset: 2,
            setStack: function (offset) {
                if (offset === void 0) { offset = 0; }
                var ctx = Bridge.Test.Runtime.ContextHelper.getContext$1(Bridge.Test.NUnit.Assert.assert);

                if (ctx == null) {
                    return;
                }

                ctx.stack = QUnit.stack(((Bridge.Test.NUnit.Assert.stackOffset + offset) | 0));
            },
            async: function () {
                return Bridge.Test.NUnit.Assert.assert.async();
            },
            areEqual: function (expected, actual) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.deepEqual(actual, expected);
            },
            areEqual$1: function (expected, actual, description) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.deepEqual(actual, expected, description);
            },
            areDeepEqual: function (expected, actual) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.deepEqual(actual, expected);
            },
            areDeepEqual$1: function (expected, actual, description) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.deepEqual(actual, expected, description);
            },
            areStrictEqual: function (expected, actual) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.strictEqual(actual, expected);
            },
            areStrictEqual$1: function (expected, actual, description) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.strictEqual(actual, expected, description);
            },
            areNotEqual: function (expected, actual) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.notDeepEqual(actual, expected);
            },
            areNotEqual$1: function (expected, actual, description) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.notDeepEqual(actual, expected, description);
            },
            areNotDeepEqual: function (expected, actual) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.notDeepEqual(actual, expected);
            },
            areNotDeepEqual$1: function (expected, actual, description) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.notDeepEqual(actual, expected, description);
            },
            areNotStrictEqual: function (expected, actual) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.notStrictEqual(actual, expected);
            },
            areNotStrictEqual$1: function (expected, actual, description) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.notStrictEqual(actual, expected, description);
            },
            true: function (condition) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.ok(condition);
            },
            true$1: function (condition, message) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.ok(condition, message);
            },
            false: function (condition) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.notOk(condition);
            },
            false$1: function (condition, message) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.notOk(condition, message);
            },
            fail: function () {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.ok(false);
            },
            fail$1: function (message) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.notOk(true, message);
            },
            throws: function (block) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.throws(block, "");
            },
            throws$5: function (block, message) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.throws(block, message);
            },
            throws$6: function (T, block) {
                Bridge.Test.NUnit.Assert.throws$7(T, block, "", 1);
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

                Bridge.Test.NUnit.Assert.setStack(stackOffset);

                if (!Bridge.referenceEquals(actual, expected)) {
                    Bridge.Test.NUnit.Assert.assert.equal(actual, expected, message);
                } else {
                    Bridge.Test.NUnit.Assert.assert.ok(true, message);
                }
            },
            throws$3: function (block, expected) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.throws(block, expected);
            },
            throws$4: function (block, expected, message) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.throws(block, expected, message);
            },
            throws$1: function (block, expected) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.throws(block, expected);
            },
            throws$2: function (block, expected, message) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.throws(block, expected, message);
            },
            null: function (anObject) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.ok(anObject == null);
            },
            null$1: function (anObject, message) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.ok(anObject == null, message);
            },
            notNull: function (anObject) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.notOk(anObject == null);
            },
            notNull$1: function (anObject, message) {
                Bridge.Test.NUnit.Assert.setStack();
                Bridge.Test.NUnit.Assert.assert.notOk(anObject == null, message);
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.TestContext", {
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

        var ctx = Bridge.Test.Runtime.ContextHelper.getContext();

        if (ctx == null || (ctx.testCtx == null && ctx.fixtureCtx == null)) {
            return;
        }

        var testId = Bridge.Test.Runtime.ContextHelper.getTestId(details);

        if (testId == null) {
            return;
        }

        var testItem = Bridge.Test.Runtime.ContextHelper.getTestOutput(testId);

        if (testItem != null) {
            Bridge.Test.Runtime.ContextHelper.adjustSourceElement(ctx, testItem);
        }
    });
QUnit.log(function (details) {
        // It will update a UI elements to show test source (JS) for the assertion (If the JS source (Stack) data found in the context)

        var ctx = Bridge.Test.Runtime.ContextHelper.getContext();

        if (ctx == null || ctx.stack == null) {
            return;
        }

        var testId = Bridge.Test.Runtime.ContextHelper.getTestId(details);

        var source = Bridge.Test.Runtime.ContextHelper.getTestSource$1(testId);

        Bridge.Test.Runtime.ContextHelper.updateTestSource(source, ctx.stack);
    });
/**
 * @compiler Bridge.NET 15.8.0
 */
Bridge.assembly("Bridge.Test.Bridge.ClientTest.Batch3", function ($asm, globals) {
    

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner", {
        $main: function () {
            Bridge.Test.Runtime.ContextHelper.init();
            QUnit.module("Issues3");
            QUnit.test("#69 - ThisKeywordInStructConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge069.thisKeywordInStructConstructorWorks);
            QUnit.test("#1000 - TestStaticViaChild", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1000.testStaticViaChild);
            QUnit.test("#1001 - TestDefaultValues", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1001.testDefaultValues);
            QUnit.test("#1003 - TestGenericLambdasToLifting", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1003.testGenericLambdasToLifting);
            QUnit.test("#1012 - TestSleepZero", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012.testSleepZero);
            QUnit.test("#1012 - TestSleepInt", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012.testSleepInt);
            QUnit.test("#1012 - TestSleepTimeSpan", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012.testSleepTimeSpan);
            QUnit.test("#1012 - TestSleepThrows", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012.testSleepThrows);
            QUnit.test("#1020 - TestFlagEnumWithReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020.testFlagEnumWithReference);
            QUnit.test("#1020 - TestEnumWithReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020.testEnumWithReference);
            QUnit.test("#1024 - TestConstructorOptionalParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1024.testConstructorOptionalParameter);
            QUnit.test("#1025 - TestC1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testC1);
            QUnit.test("#1025 - TestC2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testC2);
            QUnit.test("#1025 - TestC3", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testC3);
            QUnit.test("#1025 - TestI3", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testI3);
            QUnit.test("#1025 - TestI4", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testI4);
            QUnit.test("#1025 - TestI5", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testI5);
            QUnit.test("#1025 - TestI6", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testI6);
            QUnit.test("#1025 - TestI7", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testI7);
            QUnit.test("#1025 - TestI8", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testI8);
            QUnit.test("#1025 - TestI10", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testI10);
            QUnit.test("#1025 - TestI10_1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testI10_1);
            QUnit.test("#1025 - TestI10_2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testI10_2);
            QUnit.test("#1025 - TestI11", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testI11);
            QUnit.test("#1025 - TestI11_1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.testI11_1);
            QUnit.test("#1026 - TestReservedWordIfRefOut", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1026.testReservedWordIfRefOut);
            QUnit.test("#1027 - TestNonBridgeInherits", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1027.testNonBridgeInherits);
            QUnit.test("#1029 - TestNullableMethods", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1029.testNullableMethods);
            QUnit.test("#1039 - TestMoreThanDecimalDigitsFromTotalHours", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1039.testMoreThanDecimalDigitsFromTotalHours);
            QUnit.test("#1041 - Decimal TestPropertyOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal.testPropertyOps);
            QUnit.test("#1041 - Decimal TestIndexerOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal.testIndexerOps);
            QUnit.test("#1041 - Decimal TestDictOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal.testDictOps);
            QUnit.test("#1041 - Decimal TestVariableOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal.testVariableOps);
            QUnit.test("#1041 - Integer TestPropertyOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer.testPropertyOps);
            QUnit.test("#1041 - Integer TestIndexerOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer.testIndexerOps);
            QUnit.test("#1041 - Integer TestDictOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer.testDictOps);
            QUnit.test("#1041 - Integer TestVariableOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer.testVariableOps);
            QUnit.test("#1051 - TestInlinePopertyWithValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1051.testInlinePopertyWithValue);
            QUnit.test("#1053 - TestFieldPropertyWithInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1053.testFieldPropertyWithInterface);
            QUnit.test("#1058 - TestNameTrue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058.testNameTrue);
            QUnit.test("#1058 - TestNameFales", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058.testNameFales);
            QUnit.test("#1059 - TestEnumNameModes", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1059.testEnumNameModes);
            QUnit.test("#1061 - TestIsDigitFromLinq", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1061.testIsDigitFromLinq);
            QUnit.test("#1065 - TestDecimalLongWithDictionary", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1065.testDecimalLongWithDictionary);
            QUnit.test("#1066 - TestInlinePopertyWithValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1066.testInlinePopertyWithValue);
            QUnit.test("#1067 - TestInlinePopertyWithValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1067.testInlinePopertyWithValue);
            QUnit.test("#1071 - TestParamsForCtor", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1071.testParamsForCtor);
            QUnit.test("#1172 - TestNameForProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1072.testNameForProperty);
            QUnit.test("#1076 - TestInlineConstantAsMemberReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076.testInlineConstantAsMemberReference);
            QUnit.test("#1076 - TestInlineBridgeNumericConstantsAsMemberReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076.testInlineBridgeNumericConstantsAsMemberReference);
            QUnit.test("#1081 - TestTimeSpanMsFormat", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1081.testTimeSpanMsFormat);
            QUnit.test("#1083 - TestExternalEnum", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1083.testExternalEnum);
            QUnit.test("#1085 - TestInlineArrayExpand", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1085.testInlineArrayExpand);
            QUnit.test("#1096 - TestClippingIssues", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1096.testClippingIssues);
            QUnit.test("#1098 - TestInlineConstantAsMemberReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1098.testInlineConstantAsMemberReference);
            QUnit.test("#1103 - TestPropertyOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1103.testPropertyOps);
            QUnit.test("#1105 - TestStaticInitForNestedClasses", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1105.testStaticInitForNestedClasses);
            QUnit.test("#1109 - TestTemplateOnProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1109.testTemplateOnProperty);
            QUnit.test("#1110 - TestOverflowForConditionInParenthesized", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110.testOverflowForConditionInParenthesized);
            QUnit.test("#1110 - TestOverflowForIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110.testOverflowForIndexer);
            QUnit.test("#1110 - TestOverflowForBitwise", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110.testOverflowForBitwise);
            QUnit.test("#1120 - TestEnumDoesNotGenerateValuesAsPowerOfTwo", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120.testEnumDoesNotGenerateValuesAsPowerOfTwo);
            QUnit.test("#1120 - TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120.testFlagEnumDoesNotGenerateValuesAsPowerOfTwo);
            QUnit.test("#1128 - TestNestedClassesWithInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1128.testNestedClassesWithInterface);
            QUnit.test("#1130 - TestUlongDivision", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1130.testUlongDivision);
            QUnit.test("#1134 - TestJsonArrayParse", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1134.testJsonArrayParse);
            QUnit.test("#1140 - TestDefaultNullable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1140.testDefaultNullable);
            QUnit.test("#1141 - TestLongDivisionInfiniteLoopFixed", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1141.testLongDivisionInfiniteLoopFixed);
            QUnit.test("#1144 - TestStringFormat", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1144.testStringFormat);
            QUnit.test("#1146 - TestLongIssues", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1146.testLongIssues);
            QUnit.test("#1149 - TestBitwiseOrAnd", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1149.testBitwiseOrAnd);
            QUnit.test("#1160 - TestBitwiseOrAnd", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1160.testBitwiseOrAnd);
            QUnit.test("#1170 - TestAsyncUsing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170.testAsyncUsing);
            QUnit.test("#1170 - TestAsyncUsingWithException", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170.testAsyncUsingWithException);
            QUnit.test("#1171 - TestLinqEnumerableInList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1171.testLinqEnumerableInList);
            QUnit.test("#1175 - TestNullComparing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1175.testNullComparing);
            QUnit.test("#1176 - TestFunctionLifting", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1176.testFunctionLifting);
            QUnit.test("#1177 - TestImplicitCast", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1177.testImplicitCast);
            QUnit.test("#1180 - TestStructClone", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1180.testStructClone);
            QUnit.test("#1184 - TestGetTypeForNumberTypes", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1184.testGetTypeForNumberTypes);
            QUnit.test("#1186 - TestLambdasInField", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1186.testLambdasInField);
            QUnit.test("#1189 - TestTaskNumber", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1189.testTaskNumber);
            QUnit.test("#1193 - TestAssemblyVersionMarker", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1193.testAssemblyVersionMarker);
            QUnit.test("#1197 - TestGetHashCodeOnDictionary", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1197.testGetHashCodeOnDictionary);
            QUnit.test("#1199 - TestEventNameCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1199.testEventNameCase);
            QUnit.test("#1202 - TestRefOutStaticIntField", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.testRefOutStaticIntField);
            QUnit.test("#1202 - TestRefOutLocal1DIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.testRefOutLocal1DIntArray);
            QUnit.test("#1202 - TestRefOutStatic1DIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.testRefOutStatic1DIntArray);
            QUnit.test("#1202 - TestRefOutLocal2DIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.testRefOutLocal2DIntArray);
            QUnit.test("#1202 - TestRefOutStaticDecimalField", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.testRefOutStaticDecimalField);
            QUnit.test("#1202 - TestRefOutLocal1DDecimalArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.testRefOutLocal1DDecimalArray);
            QUnit.test("#1202 - TestRefOutLocal2DDecimalArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.testRefOutLocal2DDecimalArray);
            QUnit.test("#1202 - TestInlineOutStaticIntField", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.testInlineOutStaticIntField);
            QUnit.test("#1202 - TestInlineOutStatic1DIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.testInlineOutStatic1DIntArray);
            QUnit.test("#1202 - TestInlineOutLocal2DIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.testInlineOutLocal2DIntArray);
            QUnit.test("#1203 - TestLiftedFunctionsInsideInitMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1203.testLiftedFunctionsInsideInitMethod);
            QUnit.test("#1206 - TestDocumentURLProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1206.testDocumentURLProperty);
            QUnit.test("#1217 - TestTypeInferenceWithNamedArguments", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1217.testTypeInferenceWithNamedArguments);
            QUnit.test("#1219 - TestLongJSON", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1219.testLongJSON);
            QUnit.test("#122 - Test2DArrayConstruction", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge122.test2DArrayConstruction);
            QUnit.test("#1220 - TestConstInGenericClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1220.testConstInGenericClass);
            QUnit.test("#1226 - TestSinh", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226.testSinh);
            QUnit.test("#1226 - TestCosh", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226.testCosh);
            QUnit.test("#1226 - TestTanh", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226.testTanh);
            QUnit.test("#1231 - TestAutoGeneratedStructMethodName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1231.testAutoGeneratedStructMethodName);
            QUnit.test("#1232 - TestParamsInThisCtorInit", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232.testParamsInThisCtorInit);
            QUnit.test("#1232 - TestExtendedParamsInThisCtorInit", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232.testExtendedParamsInThisCtorInit);
            QUnit.test("#1241 - TestMarkElement", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1241.testMarkElement);
            QUnit.test("#1249 - TestEnumOverflow", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1249.testEnumOverflow);
            QUnit.test("#1253 - TestDefaultEnumMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1253.testDefaultEnumMode);
            QUnit.test("#1256 - TestCaseBooleanIsLet", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256.testCaseBooleanIsLet);
            QUnit.test("#1256 - TestReservedFields", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256.testReservedFields);
            QUnit.test("#1256 - TestReservedMethods", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256.testReservedMethods);
            QUnit.test("#1260 - TestStringTrim", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260.testStringTrim);
            QUnit.test("#1260 - TestStringTrimStart", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260.testStringTrimStart);
            QUnit.test("#1260 - TestStringTrimEnd", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260.testStringTrimEnd);
            QUnit.test("#1264 - TestDefaultGetHashCodeIsRepeatable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1264.testDefaultGetHashCodeIsRepeatable);
            QUnit.test("#1266 - TestArrayToEnumerable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1266.testArrayToEnumerable);
            QUnit.test("#1296 - TestImplicitOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296.testImplicitOperator);
            QUnit.test("#1296 - TestIgnoreCast", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296.testIgnoreCast);
            QUnit.test("#1296 - TestExternalImplicit", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296.testExternalImplicit);
            QUnit.test("#1298 - TestLongSwitch", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1298.testLongSwitch);
            QUnit.test("#1304 - TestWriteFormatString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304.testWriteFormatString);
            QUnit.test("#1304 - TestWriteLineFormatString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304.testWriteLineFormatString);
            QUnit.test("#1305 - TestAsyncIntReturnWithAssigmentFromResult", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305.testAsyncIntReturnWithAssigmentFromResult);
            QUnit.test("#1305 - TestAsyncDataClassReturnWithAssigmentFromResult", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305.testAsyncDataClassReturnWithAssigmentFromResult);
            QUnit.test("#1305 - TestAsyncDataStructReturnWithAssigmentFromResult", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305.testAsyncDataStructReturnWithAssigmentFromResult);
            QUnit.test("#1311 - TestEnumNumberParsing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1311.testEnumNumberParsing);
            QUnit.test("#1313 - TestInterfaceDefaultParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313.testInterfaceDefaultParameter);
            QUnit.test("#1313 - TestClassNotDefaultParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313.testClassNotDefaultParameter);
            QUnit.test("#1316 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316.testUseCase);
            QUnit.test("#1316 - TestStringConcatObject", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316.testStringConcatObject);
            QUnit.test("#1316 - TestStringConcatEnumerableString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316.testStringConcatEnumerableString);
            QUnit.test("#1316 - TestStringConcatEnumerableGeneric", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316.testStringConcatEnumerableGeneric);
            QUnit.test("#1328 - TestOptionalParamsForClasses", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328.testOptionalParamsForClasses);
            QUnit.test("#1328 - TestOptionalParamsForStructs", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328.testOptionalParamsForStructs);
            QUnit.test("#1339 - TestAccessingConstantsFromDerivedClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1339.testAccessingConstantsFromDerivedClass);
            QUnit.test("#1340 - TestStructGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testStructGenericMembersDefaultValue);
            QUnit.test("#1340 - TestStructTwoGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testStructTwoGenericMembersDefaultValue);
            QUnit.test("#1340 - TestClassGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testClassGenericMembersDefaultValue);
            QUnit.test("#1340 - TestClassTwoGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testClassTwoGenericMembersDefaultValue);
            QUnit.test("#1340 - TestClass1TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testClass1TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1340 - TestClass2TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testClass2TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1340 - TestClass3TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testClass3TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1340 - TestStructStaticIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testStructStaticIntArray);
            QUnit.test("#1340 - TestStructStaticLongArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testStructStaticLongArray);
            QUnit.test("#1340 - TestStructStaticStringArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testStructStaticStringArray);
            QUnit.test("#1340 - TestStaticClassGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testStaticClassGenericMembersDefaultValue);
            QUnit.test("#1340 - TestStaticClassTwoGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testStaticClassTwoGenericMembersDefaultValue);
            QUnit.test("#1340 - TestStaticClass1TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testStaticClass1TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1340 - TestStaticClass2TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testStaticClass2TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1340 - TestStaticClass3TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.testStaticClass3TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1341 - TestPlainObject", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.testPlainObject);
            QUnit.test("#1341 - TestAnonymousTypeCreation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.testAnonymousTypeCreation);
            QUnit.test("#1341 - TestDiffStructHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.testDiffStructHashCode);
            QUnit.test("#1341 - TestDiffAnonymousTypesHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.testDiffAnonymousTypesHashCode);
            QUnit.test("#1341 - Test1AnonymousType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.test1AnonymousType);
            QUnit.test("#1341 - Test2AnonymousType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.test2AnonymousType);
            QUnit.test("#1341 - Test3AnonymousType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.test3AnonymousType);
            QUnit.test("#1341 - Test4AnonymousType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.test4AnonymousType);
            QUnit.test("#1341 - Test5AnonymousType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.test5AnonymousType);
            QUnit.test("#1343 - TestDoubleTemplate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343.testDoubleTemplate);
            QUnit.test("#1343 - TestInlineInGetHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343.testInlineInGetHashCode);
            QUnit.test("#1344 - TestLocalVariableWithNameProto", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1344.testLocalVariableWithNameProto);
            QUnit.test("#1348 - TestVoidTypeOf", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1348.testVoidTypeOf);
            QUnit.test("#1355 - TestLocalVariableWithNameWindow", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1355.testLocalVariableWithNameWindow);
            QUnit.test("#1374 - TestConvertAllForIntListStaticMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374.testConvertAllForIntListStaticMethod);
            QUnit.test("#1374 - TestConvertAllForIntListInstanceMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374.testConvertAllForIntListInstanceMethod);
            QUnit.test("#1374 - TestConvertAllForIntListLambda", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374.testConvertAllForIntListLambda);
            QUnit.test("#1374 - TestConvertAllForNullConverter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374.testConvertAllForNullConverter);
            QUnit.test("#1374 - TestConvertAllForNullArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374.testConvertAllForNullArray);
            QUnit.test("#1378 - TestAssigmentWithMinusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.testAssigmentWithMinusOperator);
            QUnit.test("#1378 - TestAssigmentWithPlusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.testAssigmentWithPlusOperator);
            QUnit.test("#1378 - TestAssigmentWithOverloadMinusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.testAssigmentWithOverloadMinusOperator);
            QUnit.test("#1378 - TestAssigmentWithOverloadPlusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.testAssigmentWithOverloadPlusOperator);
            QUnit.test("#1378 - TestAssigmentWithConditionalPlusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.testAssigmentWithConditionalPlusOperator);
            QUnit.test("#1378 - TestAssigmentWithConditionalMinusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.testAssigmentWithConditionalMinusOperator);
            QUnit.test("#1379 - TestNanFiniteType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1379.testNanFiniteType);
            QUnit.test("#1381 - TestReservedWordsUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381.testReservedWordsUseCase);
            QUnit.test("#1381 - TestReservedWordsNewBatch", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381.testReservedWordsNewBatch);
            QUnit.test("#1385 - TestIsTypedArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1385.testIsTypedArray);
            QUnit.test("#1389 - TestParamsIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1389.testParamsIndexer);
            QUnit.test("#1391 - TestStaticCtorOrder", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391.testStaticCtorOrder);
            QUnit.test("#1391 - TestStaticCtorOrderForClassHavingReady", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391Ready.testStaticCtorOrderForClassHavingReady);
            QUnit.test("#1402 - TestLongClipping", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1402.testLongClipping);
            QUnit.test("#1410 - TestSetterOnly", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410.testSetterOnly);
            QUnit.test("#1410 - TestIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410.testIndexer);
            QUnit.test("#1410 - TestAssigmentWithOp", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410.testAssigmentWithOp);
            QUnit.test("#1411 - TestTemplateCtorThing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411.testTemplateCtorThing);
            QUnit.test("#1411 - TestTemplateCtorDoodad", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411.testTemplateCtorDoodad);
            QUnit.test("#1411 - TestTemplateCtorGizmo", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411.testTemplateCtorGizmo);
            QUnit.test("#1428 - TestEqOperatorWithNull", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1428.testEqOperatorWithNull);
            QUnit.test("#1429 - TestEqOperatorWithNull", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1429.testEqOperatorWithNull);
            QUnit.test("#1430 - TestNestedNamespaceSupport", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1430.testNestedNamespaceSupport);
            QUnit.test("#1438 - TestJSONParse", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1438.testJSONParse);
            QUnit.test("#1438 - TestJSONParseAsArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1438.testJSONParseAsArray);
            QUnit.test("#1448 - TestPlainForNonAnonymous", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448.testPlainForNonAnonymous);
            QUnit.test("#1448 - TestObjectLiteralProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448.testObjectLiteralProperty);
            QUnit.test("#1448 - TestToObjectLiteralAlias", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448.testToObjectLiteralAlias);
            QUnit.test("#1458 - TestConsoleWriteLineForLong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1458.testConsoleWriteLineForLong);
            QUnit.test("#1459 - TestHtmlElements", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1459.testHtmlElements);
            QUnit.test("#1467 - TestForeachTypeChecking", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1467.testForeachTypeChecking);
            QUnit.test("#1472 - TestMultiplyThisInTemplate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472.testMultiplyThisInTemplate);
            QUnit.test("#1472 - TestSimpleMultipleKeyTemplate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472.testSimpleMultipleKeyTemplate);
            QUnit.test("#1476 - TestEscapedBrackets", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1476.testEscapedBrackets);
            QUnit.test("#1480 - TestOverloadUnaryOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1480.testOverloadUnaryOperator);
            QUnit.test("#1485 - TestConstructorName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1485.testConstructorName);
            QUnit.test("#1486 - TestStaticLongInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486.testStaticLongInitialization);
            QUnit.test("#1486 - TestLocalLongInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486.testLocalLongInitialization);
            QUnit.test("#1486 - TestStaticUlongInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486.testStaticUlongInitialization);
            QUnit.test("#1486 - TestLocalUlongInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486.testLocalUlongInitialization);
            QUnit.test("#1489 - TestLongEnum", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489.testLongEnum);
            QUnit.test("#1489 - TestIntEnum", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489.testIntEnum);
            QUnit.test("#1490 - TestEnumLong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1490.testEnumLong);
            QUnit.test("#1492 - TestEnumLong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1492.testEnumLong);
            QUnit.test("#1493 - TestEnumLong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1493.testEnumLong);
            QUnit.test("#1499 - TestObjectStringCoalesceWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1499.testObjectStringCoalesceWorks);
            QUnit.test("#1501 - TestPropertyChangedEventArgs", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1501.testPropertyChangedEventArgs);
            QUnit.test("#1509 - TestPreformanceNowIsDouble", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1509.testPreformanceNowIsDouble);
            QUnit.test("#1510 - TestPropertyChangedEventArgs", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1510.testPropertyChangedEventArgs);
            QUnit.test("#1511 - TestOverloadedConstructorCallWithOptionalParameters", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1511.testOverloadedConstructorCallWithOptionalParameters);
            QUnit.test("#1512 - TestParametersReservedNames", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1512.testParametersReservedNames);
            QUnit.test("#1517 - TestEqualTuples", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517.testEqualTuples);
            QUnit.test("#1517 - TestInequalTuples", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517.testInequalTuples);
            QUnit.test("#1518 - TestDefaultConstructorForTypeParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1518.testDefaultConstructorForTypeParameter);
            QUnit.test("#1519 - TestRefOutLocalVars", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1519.testRefOutLocalVars);
            QUnit.test("#1520 - TestStaticDecimalInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520.testStaticDecimalInitialization);
            QUnit.test("#1520 - TestLocalDecimalInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520.testLocalDecimalInitialization);
            QUnit.test("#1520 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520.testUseCase);
            QUnit.test("#1521 - TestDecimalTrueInConditionalBlock", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1521.testDecimalTrueInConditionalBlock);
            QUnit.test("#1522 - TestAssignIntToDecimal", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1522.testAssignIntToDecimal);
            QUnit.test("#1523 - TestAssignDecimalToInt", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1523.testAssignDecimalToInt);
            QUnit.test("#1524 - TestDecimalWithIntOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1524.testDecimalWithIntOps);
            QUnit.test("#1526 - TestOutInClassMembers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526.testOutInClassMembers);
            QUnit.test("#1526 - TestRefInClassMembers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526.testRefInClassMembers);
            QUnit.test("#1527 - TestScriptAttributeWithReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1527.testScriptAttributeWithReference);
            QUnit.test("#1530 - TestObjectLiteralFieldImplementingInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1530.testObjectLiteralFieldImplementingInterface);
            QUnit.test("#1533 - TestStringNullConcationation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1533.testStringNullConcationation);
            QUnit.test("#1535 - TestAsyncLambdaAssignmentExpression", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1535.testAsyncLambdaAssignmentExpression);
            QUnit.test("#1536 - TestEventNameConflict", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536.testEventNameConflict);
            QUnit.test("#1536 - TestPropertyNameConflict", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536.testPropertyNameConflict);
            QUnit.test("#1538 - TestOutParameterInIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1538.testOutParameterInIndexer);
            QUnit.test("#1566 - TestMathLog10", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566.testMathLog10);
            QUnit.test("#1566 - TestMathLogWithBase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566.testMathLogWithBase);
            QUnit.test("#1566 - TestMathLog", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566.testMathLog);
            QUnit.test("#1599 - TestCustomIEnumerableForStringJoin", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1599.testCustomIEnumerableForStringJoin);
            QUnit.test("#1641 - TestOutInAsync", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1641.testOutInAsync);
            QUnit.test("#1653 - TestLiftedFunctionsWithGenericInvocation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1653.testLiftedFunctionsWithGenericInvocation);
            QUnit.test("#1684 - TestStaticInitializationForGenericClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1684.testStaticInitializationForGenericClass);
            QUnit.test("#1698 - TestReflectionForNativeTypes", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1698.testReflectionForNativeTypes);
            QUnit.test("#1700 - TestULongAsIndex", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700.testULongAsIndex);
            QUnit.test("#1700 - TestLongAsIndex", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700.testLongAsIndex);
            QUnit.test("#1702 - TestFieldWithItemName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1702.testFieldWithItemName);
            QUnit.test("#1704 - TestBaseMethodWithOptionalParams", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1704.testBaseMethodWithOptionalParams);
            QUnit.test("#1709 - TestGenericMethodWithoutTypeArgument", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1709.testGenericMethodWithoutTypeArgument);
            QUnit.test("#1711 - TestImplicitOperatorOrder", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1711.testImplicitOperatorOrder);
            QUnit.test("#1712 - TestCollectionAddWithExtensionMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712.testCollectionAddWithExtensionMethod);
            QUnit.test("#1712 - TestCollectionWithAdd_BeforeCS6", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712.testCollectionWithAdd_BeforeCS6);
            QUnit.test("#1712 - TestCollectionWithAdd_CS6", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712.testCollectionWithAdd_CS6);
            QUnit.test("#1713 - TestOverloadResolution", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713.testOverloadResolution);
            QUnit.test("#1713 - TestOverloadResolutionMSDN1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN.testOverloadResolutionMSDN1);
            QUnit.test("#1713 - TestOverloadResolutionMSDN2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN.testOverloadResolutionMSDN2);
            QUnit.test("#1715 - TestCollectionInitializerWithAdd", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1715.testCollectionInitializerWithAdd);
            QUnit.test("#1721 - TestDelegateEquals", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1721.testDelegateEquals);
            QUnit.test("#1722 - TestDelegateCreationOfGenericMethods", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722.testDelegateCreationOfGenericMethods);
            QUnit.test("#1722 - TestDelegateCreationOfGenericMethodsWithLambda", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722.testDelegateCreationOfGenericMethodsWithLambda);
            QUnit.test("#1735 - TestTryGetValueOutDelegateParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735.testTryGetValueOutDelegateParameter);
            QUnit.test("#1735 - TestOutDelegateParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735.testOutDelegateParameter);
            QUnit.test("#1735 - TestReferenceDelegateParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735.testReferenceDelegateParameter);
            QUnit.test("#1737 - TestGetClassName_FullName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1737.testGetClassName_FullName);
            QUnit.test("#1741 - TestNumbersHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1741.testNumbersHashCode);
            QUnit.test("#1744 - TestMethodInvocationWithParams", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1744.testMethodInvocationWithParams);
            QUnit.test("#1754 - TestAllUpperCaseNames", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1754.testAllUpperCaseNames);
            QUnit.test("#1767 - TestBaseIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1767.testBaseIndexer);
            QUnit.test("#1768 - TestImplicitImplementation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768.testImplicitImplementation);
            QUnit.test("#1768 - TestExplicitImplementation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768.testExplicitImplementation);
            QUnit.test("#1768 - TestListImplicitImplementation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768.testListImplicitImplementation);
            QUnit.test("#1768 - TestListExplicitImplementation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768.testListExplicitImplementation);
            QUnit.test("#1775 - TestSumForEmpty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1775.testSumForEmpty);
            QUnit.test("#1776 - TestTupleHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1776.testTupleHashCode);
            QUnit.test("#1787 - TestNamedParams", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1787.testNamedParams);
            QUnit.test("#1802 - TestReservedWordsAsMethodName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1802.testReservedWordsAsMethodName);
            QUnit.test("#1803 - TestCollectionInitializerWithStaticMember", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1803.testCollectionInitializerWithStaticMember);
            QUnit.test("#1804 - TestStructClone", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1804.testStructClone);
            QUnit.test("#1810 - TestInterfaceIndexersAndCopyToAndIsReadOnly", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1810.testInterfaceIndexersAndCopyToAndIsReadOnly);
            QUnit.test("#1812 - TestDoubleConversion", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1812.testDoubleConversion);
            QUnit.test("#1813 - TestAddStaticMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1813.testAddStaticMethod);
            QUnit.test("#1814 - TestNamespaceConflictResolution", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1814.testNamespaceConflictResolution);
            QUnit.test("#1819 - TestObjectLiteralWithInheritance", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1819.testObjectLiteralWithInheritance);
            QUnit.test("#1821 - TestInterfaceMember1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821.testInterfaceMember1);
            QUnit.test("#1821 - TestInterfaceMember2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821.testInterfaceMember2);
            QUnit.test("#1832 - TestInitWithTempVars", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1832.testInitWithTempVars);
            QUnit.test("#1833 - TestInheritedPropertyInLiteral", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1833.testInheritedPropertyInLiteral);
            QUnit.test("#1834 - TestIgnoreGenericInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1834.testIgnoreGenericInterface);
            QUnit.test("#1835 - TestGenericMethodWithAnonTypeArg", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1835.testGenericMethodWithAnonTypeArg);
            QUnit.test("#1842 - TestTypeOfConversion", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1842.testTypeOfConversion);
            QUnit.test("#1845 - TestCtorMemberName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1845.testCtorMemberName);
            QUnit.test("#1846 - TestImplicitOperatorInForeachLoop", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1846.testImplicitOperatorInForeachLoop);
            QUnit.test("#1847 - TestActivatorCreateInstanceCallProtectedConstructor", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1847.testActivatorCreateInstanceCallProtectedConstructor);
            QUnit.test("#1848 - TestExternalInterfaceProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1848.testExternalInterfaceProperty);
            QUnit.test("#1850 - TestImplicitInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1850.testImplicitInterface);
            QUnit.test("#1852 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1852.testCase);
            QUnit.test("#1853 - TestContainsUseEquals", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1853.testContainsUseEquals);
            QUnit.test("#1854 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1854.testCase);
            QUnit.test("#1856 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1856.testCase);
            QUnit.test("#1863 - TestTrueFalseOperators", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1863.testTrueFalseOperators);
            QUnit.test("#1865 - TestObjectLiteralInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1865.testObjectLiteralInterface);
            QUnit.test("#1869 - TestGenericTypeDefinition", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1869.testGenericTypeDefinition);
            QUnit.test("#1871 - TestErrorCommentNotThrowCompilerException", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1871.testErrorCommentNotThrowCompilerException);
            QUnit.test("#1872 - TestAsyncWithAnonymousDelegate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1872.testAsyncWithAnonymousDelegate);
            QUnit.test("#1875 - TestDictionaryWithLongVariableAsKey", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1875.testDictionaryWithLongVariableAsKey);
            QUnit.test("#1878 - TestSumDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1878.testSumDefaultValue);
            QUnit.test("#1880 - TestDefaultValuesWithTemplates", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1880.testDefaultValuesWithTemplates);
            QUnit.test("#1882 - TestGenericClassCastForArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882.testGenericClassCastForArray);
            QUnit.test("#1882 - TestGenericClassCastForList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882.testGenericClassCastForList);
            QUnit.test("#1884 - TestCollectionInitilizers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1884.testCollectionInitilizers);
            QUnit.test("#1886 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1886.testCase);
            QUnit.test("#1892 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1892.testCase);
            QUnit.test("#1896 - TestHexStringToInt", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1896.testHexStringToInt);
            QUnit.test("#1897 - TestNestedNotEscapedBracketsInRegex", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1897.testNestedNotEscapedBracketsInRegex);
            QUnit.test("#1899 - TestPropertyAndMethodNameConflict", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1899.testPropertyAndMethodNameConflict);
            QUnit.test("#1900 - TestOutParamInMetadata", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1900.testOutParamInMetadata);
            QUnit.test("#1904 - TestDateTimeConstructorConvertsValueToMs", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1904.testDateTimeConstructorConvertsValueToMs);
            QUnit.test("#1906 - TestIsOperatorInaccuracy", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1906.testIsOperatorInaccuracy);
            QUnit.test("#1909 - TestActivatorEnumCreation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1909.testActivatorEnumCreation);
            QUnit.test("#1910 - TestGenericTypeCasting", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1910.testGenericTypeCasting);
            QUnit.test("#1911 - TestExtensionMethodOfBaseClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911.testExtensionMethodOfBaseClass);
            QUnit.test("#1911 - TestExtensionMethodOfBaseClassLinqCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911.testExtensionMethodOfBaseClassLinqCase);
            QUnit.test("#1912 - TestExtentionMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1912.testExtentionMethod);
            QUnit.test("#1913 - TestIsSubclassOfTemplate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1913.testIsSubclassOfTemplate);
            QUnit.test("#1914 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1914.testCase);
            QUnit.test("#1915 - TestImplementingExternalInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1915.testImplementingExternalInterface);
            QUnit.test("#1920 - TestGeneratedStringConcatenation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1920.testGeneratedStringConcatenation);
            QUnit.test("#1933 - TestRounding", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1933.testRounding);
            QUnit.test("#1934 - TestEscapeSequencesInRegex", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1934.testEscapeSequencesInRegex);
            QUnit.test("#1938 - TestIsArrayTemplate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1938.testIsArrayTemplate);
            QUnit.test("#1948 - TestCollectionLikeInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1948.testCollectionLikeInitialization);
            QUnit.test("#1951 - TestBindFunctionNoMemoryLeaks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1951.testBindFunctionNoMemoryLeaks);
            QUnit.test("#1955 - TestScriptAttributeForExternMethods", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1955.testScriptAttributeForExternMethods);
            QUnit.test("#1964 - TestStringIsNullOrWhiteSpaceCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1964.testStringIsNullOrWhiteSpaceCase);
            QUnit.test("#1965 - TestIsClassForNumberTypes", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1965.testIsClassForNumberTypes);
            QUnit.test("#1966 - TestDoubleInfinityGetHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1966.testDoubleInfinityGetHashCode);
            QUnit.test("#1968 - TestGenericNullable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1968.testGenericNullable);
            QUnit.test("#1969 - TestStaticConstructorsForBaseClasses", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1969.testStaticConstructorsForBaseClasses);
            QUnit.test("#1970 - TestRunClassConstructor", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1970.testRunClassConstructor);
            QUnit.test("#1996 - TestTemplateForGetEnumerator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1996.testTemplateForGetEnumerator);
            QUnit.test("#2003 - TestThisIsBindInTemplatedMemberMethods", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2003.testThisIsBindInTemplatedMemberMethods);
            QUnit.test("#2011 - TestOverloadSelectionWhenNullCoalescingOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2011.testOverloadSelectionWhenNullCoalescingOperator);
            QUnit.test("#2013 - TestSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2013.testSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod);
            QUnit.test("#2019 - TestLambdaExpressionsInGenericMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2019.testLambdaExpressionsInGenericMethod);
            QUnit.test("#2024 - TestAccessEnumInAnotherClassUsingStatic", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2024.testAccessEnumInAnotherClassUsingStatic);
            QUnit.test("#2027 - TestToStringForEnumWhenConcatWithString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2027.testToStringForEnumWhenConcatWithString);
            QUnit.test("#2033 - TestClassEnumPropertiesInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2033.testClassEnumPropertiesInitialization);
            QUnit.test("#2038 - TestIncrementAssignmentInStructs", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2038.testIncrementAssignmentInStructs);
            QUnit.test("#2039 - TestNaNToString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2039.testNaNToString);
            QUnit.test("#2042 - TestAppDomain", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2042.testAppDomain);
            QUnit.test("#2045 - TestDoubleEscapingInterpolation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2045.testDoubleEscapingInterpolation);
            QUnit.test("#2046 - TestSafeNavigationOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2046.testSafeNavigationOperator);
            QUnit.test("#2048 - TestUnaryOperatorBlockCompilationError", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2048.testUnaryOperatorBlockCompilationError);
            QUnit.test("#2050 - TestIList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050.testIList);
            QUnit.test("#2050 - TestIDictionary", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050.testIDictionary);
            QUnit.test("#2051 - TestGetElementType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2051.testGetElementType);
            QUnit.test("#2052 - TestArrayCreateInstance", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052.testArrayCreateInstance);
            QUnit.test("#2052 - TestArrayCreateInstanceShouldThrow", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052.testArrayCreateInstanceShouldThrow);
            QUnit.test("#2056 - TestArrayCasting", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056.testArrayCasting);
            QUnit.test("#2056 - TestArrayTypeName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056.testArrayTypeName);
            QUnit.test("#2067 - TestGetGenericTypeDefinition", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2067.testGetGenericTypeDefinition);
            QUnit.test("#2068 - TestGetGenericTypeDefinition", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2068.testGetGenericTypeDefinition);
            QUnit.test("#2073 - TestUserDefinedWithStringConcat", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2073.testUserDefinedWithStringConcat);
            QUnit.test("#2076 - TestLinqGlobalPollution", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2076.testLinqGlobalPollution);
            QUnit.test("#2079 - TestQueryAsArgument", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2079.testQueryAsArgument);
            QUnit.test("#2080 - TestAssigmentOrWithProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080.testAssigmentOrWithProperty);
            QUnit.test("#2080 - TestAssigmentOrWithPropertyChangingCounter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080.testAssigmentOrWithPropertyChangingCounter);
            QUnit.test("#2081 - TestReturnFromCatch", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2081.testReturnFromCatch);
            QUnit.test("#2088 - TestObjectLiteralReflection", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2088.testObjectLiteralReflection);
            QUnit.test("#2092 - TestIgnoreGenericForDelegate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2092.testIgnoreGenericForDelegate);
            QUnit.test("#2094 - TestGenericMethodAsDelegate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2094.testGenericMethodAsDelegate);
            QUnit.test("#2106 - TestGenericMethodInObjectLiteral", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2106.testGenericMethodInObjectLiteral);
            QUnit.test("#2114 - TestNonStandardNames", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114.testNonStandardNames);
            QUnit.test("#2114 - TestFieldTemplates", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114.testFieldTemplates);
            QUnit.test("#2121 - TestLongAsDictionaryKey", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2121.testLongAsDictionaryKey);
            QUnit.test("#2127 - TestNumberFormatInfoNaNSymbol", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2127.testNumberFormatInfoNaNSymbol);
            QUnit.test("#2135 - TestNestedTypesNames", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2135.testNestedTypesNames);
            QUnit.test("#2137 - TestPropertiesWithNonPrimitiveInitializers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2137.testPropertiesWithNonPrimitiveInitializers);
            QUnit.test("#2138 - TestGenericInterfaceIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2138.testGenericInterfaceIndexer);
            QUnit.test("#2141 - TestExternalObjectLiteral", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2141.testExternalObjectLiteral);
            QUnit.test("#2143 - TestIgnoreGenericForNestedClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2143.testIgnoreGenericForNestedClass);
            QUnit.test("#2146 - TestCharDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2146.testCharDefaultValue);
            QUnit.test("#2147 - TestLinqExcept", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2147.testLinqExcept);
            QUnit.test("#2156 - TestLinqIntersect", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2156.testLinqIntersect);
            QUnit.test("#2157 - TestCreatingGenericInstanceWithInitializer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2157.testCreatingGenericInstanceWithInitializer);
            QUnit.test("#2159 - TestBaseTypeForGenericDefinition", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2159.testBaseTypeForGenericDefinition);
            QUnit.test("#2160 - TestBaseTypeForGenericDefinition", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2160.testBaseTypeForGenericDefinition);
            QUnit.test("#2163 - TestDecimalToFormat", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2163.testDecimalToFormat);
            QUnit.test("#2167 - TestMerge", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2167.testMerge);
            QUnit.test("#2174 - TestGenericComparerDefault", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2174.testGenericComparerDefault);
            QUnit.test("#2176 - TestExternalObjectLiteralConstructorMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2176.testExternalObjectLiteralConstructorMode);
            QUnit.test("#2181 - TestStringPadForEmptyString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2181.testStringPadForEmptyString);
            QUnit.test("#2186 - TestConsoleWriteLineParameterless", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2186.testConsoleWriteLineParameterless);
            QUnit.test("#2189 - TestInheritanceFromExternalAndBaseCtor", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2189.testInheritanceFromExternalAndBaseCtor);
            QUnit.test("#2190 - TestInternalsVisibleTo", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2190.testInternalsVisibleTo);
            QUnit.test("#2192 - TestIntersection", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2192.testIntersection);
            QUnit.test("#2195 - TestGenericInvocationInTryBlock", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2195.testGenericInvocationInTryBlock);
            QUnit.test("#2199 - TestTypeParameterName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2199.testTypeParameterName);
            QUnit.test("#2200 - TestSequence", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2200.testSequence);
            QUnit.test("#2203 - TestLocalVarsRenaming", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2203.testLocalVarsRenaming);
            QUnit.test("#2204 - TestDecimalToString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2204.testDecimalToString);
            QUnit.test("#2207 - TestDefaultOptionalParam", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2207.testDefaultOptionalParam);
            QUnit.test("#2210 - TestTypeOrdering", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2210.testTypeOrdering);
            QUnit.test("#2211 - TestConditionAccess", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2211.testConditionAccess);
            QUnit.test("#2212 - TestDelegateBindCache", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2212.testDelegateBindCache);
            QUnit.test("#2213 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2213.testCase);
            QUnit.test("#2214 - TestCheckedULong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2214.testCheckedULong);
            QUnit.test("#2216 - TestExternalInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2216.testExternalInterface);
            QUnit.test("#2220 - TestHasElementType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2220.testHasElementType);
            QUnit.test("#2221 - TestMakeArrayType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2221.testMakeArrayType);
            QUnit.test("#2222 - TestGetTypeWithNullArgument", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2222.testGetTypeWithNullArgument);
            QUnit.test("#2225 - TestVolatile", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2225.testVolatile);
            QUnit.test("#2243 - TestElementHiddenField", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2243.testElementHiddenField);
            QUnit.test("#2246 - TestEntryPoint", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2246.testEntryPoint);
            QUnit.test("#2249 - TestPropertyInitializerWithDirective", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2249.testPropertyInitializerWithDirective);
            QUnit.test("#2251 - TestListGetRange", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2251.testListGetRange);
            QUnit.test("#2278 - TestGenericInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2278.testGenericInterface);
            QUnit.test("#2279 - TestPropertyWithInitializerAndNestedClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2279.testPropertyWithInitializerAndNestedClass);
            QUnit.test("#381 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge381.testUseCase);
            QUnit.test("#447 - CheckInlineExpression", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447.checkInlineExpression);
            QUnit.test("#447 - CheckInlineCalls", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447.checkInlineCalls);
            QUnit.test("#472 - Test", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge472.test);
            QUnit.test("#479 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge479.testUseCase);
            QUnit.test("#483 - TestPropertyWithNameSameAsType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge483.testPropertyWithNameSameAsType);
            QUnit.test("#485 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge485.testUseCase);
            QUnit.test("#495 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge495.testUseCase);
            QUnit.test("#501 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge501.testUseCase);
            QUnit.test("#502 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge502.testUseCase);
            QUnit.test("#503 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge503.testUseCase);
            QUnit.test("#508 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge508.testUseCase);
            QUnit.test("#514 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514.testUseCase);
            QUnit.test("#514 - TestRelated", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514.testRelated);
            QUnit.test("#520 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge520.testUseCase);
            QUnit.test("#522 - TestUseCase1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522.testUseCase1);
            QUnit.test("#522 - TestUseCase2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522.testUseCase2);
            QUnit.test("#532 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge532.testUseCase);
            QUnit.test("#537 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge537.testUseCase);
            QUnit.test("#538 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge538.testUseCase);
            QUnit.test("#544 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge544.testUseCase);
            QUnit.test("#544 - TestRelated", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge544.testRelated);
            QUnit.test("#546 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546.testUseCase);
            QUnit.test("#546 - TestRelated", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546.testRelated);
            QUnit.test("#548 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge548.testUseCase);
            QUnit.test("#549 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge549.testUseCase);
            QUnit.test("#550 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge550.testUseCase);
            QUnit.test("#554 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge554.testUseCase);
            QUnit.test("#555 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge555.testUseCase);
            QUnit.test("#558 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge558.testUseCase);
            QUnit.test("#559 - TestUseCase1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559.testUseCase1);
            QUnit.test("#559 - TestUseCase2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559.testUseCase2);
            QUnit.test("#559 - TestUseCase3", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559.testUseCase3);
            QUnit.test("#563 - TesForeach", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563.tesForeach);
            QUnit.test("#563 - TesFor", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563.tesFor);
            QUnit.test("#566 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge566.testUseCase);
            QUnit.test("#572 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge572.testUseCase);
            QUnit.test("#577 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge577.testUseCase);
            QUnit.test("#578 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge578.testUseCase);
            QUnit.test("#580 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge580.testUseCase);
            QUnit.test("#582 - TestAddTimeSpan", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582.testAddTimeSpan);
            QUnit.test("#582 - TestAddTicks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582.testAddTicks);
            QUnit.test("#582 - TestTicks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582.testTicks);
            QUnit.test("#582 - TestSubtractTimeSpan", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582.testSubtractTimeSpan);
            QUnit.test("#582 - TestTimeOfDay", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582.testTimeOfDay);
            QUnit.test("#583 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge583.testUseCase);
            QUnit.test("#586 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge586.testUseCase);
            QUnit.test("#588 - TestUseCase1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588.testUseCase1);
            QUnit.test("#588 - TestUseCase2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588C.testUseCase2);
            QUnit.test("#592 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge592.testUseCase);
            QUnit.test("#595 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge595.testUseCase);
            QUnit.test("#597 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge597.testUseCase);
            QUnit.test("#603 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603.testUseCase);
            QUnit.test("#603 - TestRelated", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603.testRelated);
            QUnit.test("#606 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge606.testUseCase);
            QUnit.test("#607 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge607.testUseCase);
            QUnit.test("#608 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge608.testUseCase);
            QUnit.test("#615 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge615.testUseCase);
            QUnit.test("#623 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge623.testUseCase);
            QUnit.test("#625 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge625.testUseCase);
            QUnit.test("#634 - TestUseCase2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge634.testUseCase2);
            QUnit.test("#635 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge635.testUseCase);
            QUnit.test("#637 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge637.testUseCase);
            QUnit.test("#647 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge647.testUseCase);
            QUnit.test("#648 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge648.testUseCase);
            QUnit.test("#652 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge652.testUseCase);
            QUnit.test("#655 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge655.testUseCase);
            QUnit.test("#658 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge658.testUseCase);
            QUnit.test("#660 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge660.testUseCase);
            QUnit.test("#661 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge661.testUseCase);
            QUnit.test("#664 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge664.testUseCase);
            QUnit.test("#666 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge666.testUseCase);
            QUnit.test("#671 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge671.testUseCase);
            QUnit.test("#674 - TestUndefinedToReferenceType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674.testUndefinedToReferenceType);
            QUnit.test("#674 - TestUndefinedToValueType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674.testUndefinedToValueType);
            QUnit.test("#675 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge675.testUseCase);
            QUnit.test("#687 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge687.testUseCase);
            QUnit.test("#689 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge689.testUseCase);
            QUnit.test("#690 - TestUseCaseForInstance", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690.testUseCaseForInstance);
            QUnit.test("#690 - TestUseCaseForStatic", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690.testUseCaseForStatic);
            QUnit.test("#691 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge691.testUseCase);
            QUnit.test("#692 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge692.testUseCase);
            QUnit.test("#693 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge693.testUseCase);
            QUnit.test("#694 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge694.testUseCase);
            QUnit.test("#696 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge696.testUseCase);
            QUnit.test("#699 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge699.testUseCase);
            QUnit.test("#706 - TestFieldPropertyWithInitializer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge706.testFieldPropertyWithInitializer);
            QUnit.test("#708 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge708.testUseCase);
            QUnit.test("#721 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge721.testUseCase);
            QUnit.test("#722 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge722.testUseCase);
            QUnit.test("#726 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge726.testUseCase);
            QUnit.test("# 732- TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge732.testUseCase);
            QUnit.test("#733 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge733.testUseCase);
            QUnit.test("#743 - TestInlineMethodsAsReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge743.testInlineMethodsAsReference);
            QUnit.test("#751 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge751.testUseCase);
            QUnit.test("#758 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge758.testUseCase);
            QUnit.test("#760 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge760.testUseCase);
            QUnit.test("#762 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge762.testUseCase);
            QUnit.test("#772 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge772.testUseCase);
            QUnit.test("#777 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge777.testUseCase);
            QUnit.test("#782 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge782.testUseCase);
            QUnit.test("#785 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge785.testUseCase);
            QUnit.test("#786 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge786.testUseCase);
            QUnit.test("#788 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge788.testUseCase);
            QUnit.test("#789 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge789.testUseCase);
            QUnit.test("#793 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge793.testUseCase);
            QUnit.test("#795 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795.testUseCase);
            QUnit.test("#795 - TestRelated", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795.testRelated);
            QUnit.test("#796 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge796.testUseCase);
            QUnit.test("#815 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge815.testUseCase);
            QUnit.test("#816 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge816.testUseCase);
            QUnit.test("#817 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge817.testUseCase);
            QUnit.test("#818 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge818.testUseCase);
            QUnit.test("#821 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge821.testUseCase);
            QUnit.test("#823 - GetTicksReturnsCorrectValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge823.getTicksReturnsCorrectValue);
            QUnit.test("#826 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge826.testUseCase);
            QUnit.test("#830 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge830.testUseCase);
            QUnit.test("#835 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge835.testUseCase);
            QUnit.test("#841 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge841.testUseCase);
            QUnit.test("#844 - NullableAndSimpleDateTimeToStringEquals", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge844.nullableAndSimpleDateTimeToStringEquals);
            QUnit.test("#849 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge849.testUseCase);
            QUnit.test("#857 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge857.testUseCase);
            QUnit.test("#861 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge861.testUseCase);
            QUnit.test("#863 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge863.testUseCase);
            QUnit.test("#874 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge874.testUseCase);
            QUnit.test("#881 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge881.testUseCase);
            QUnit.test("#882 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge882.testUseCase);
            QUnit.test("#883 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge883.testUseCase);
            QUnit.test("#889 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889.testUseCase);
            QUnit.test("#889 - TestMakeEnumerable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889.testMakeEnumerable);
            QUnit.test("#892 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge892.testUseCase);
            QUnit.test("#893 - EnumToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge893.enumToStringWorks);
            QUnit.test("#898 - TestDecimalConversion", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898.testDecimalConversion);
            QUnit.test("#898 - TestDoubleConversion", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898.testDoubleConversion);
            QUnit.test("#905 - DayOfWeekFixed", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge905.dayOfWeekFixed);
            QUnit.test("#906 - TestIfAsyncMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906.testIfAsyncMethod);
            QUnit.test("#906 - TestIfElseAsyncMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906.testIfElseAsyncMethod);
            QUnit.test("#907 - TestStringSpitWithNullParameterFixed", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge907.testStringSpitWithNullParameterFixed);
            QUnit.test("#912 - TestAsyncMethodInBlock", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge912.testAsyncMethodInBlock);
            QUnit.test("#913 - TestNullableDateTimeGreaterThanWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge913.testNullableDateTimeGreaterThanWorks);
            QUnit.test("#918 - TestDynamicAsyncResult", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge918.testDynamicAsyncResult);
            QUnit.test("#922 - TestLinqDecimal", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge922.testLinqDecimal);
            QUnit.test("#928 - TestAsyncMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge928.testAsyncMethod);
            QUnit.test("#929 - TestAsyncException", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge929.testAsyncException);
            QUnit.test("#930 - TestAsyncException", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge930.testAsyncException);
            QUnit.test("#933 - TestBooleanInIfStatement", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge933.testBooleanInIfStatement);
            QUnit.test("#952 - TestDoubleMinValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge952.testDoubleMinValue);
            QUnit.test("#968 - TestDecimalDoesNotParseIncorrectValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968.testDecimalDoesNotParseIncorrectValue);
            QUnit.test("#968 - TestDecimalParsesCorrectValues", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968.testDecimalParsesCorrectValues);
            QUnit.test("#975 - TestCastToLongWorksForBigNumberInIE", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge975.testCastToLongWorksForBigNumberInIE);
            QUnit.test("#989 - DateTimeToISOStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989.dateTimeToISOStringWorks);
            QUnit.test("#989 - DateToISOStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989.dateToISOStringWorks);
            QUnit.test("#991 - TestMultiplyAssignment", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge991.testMultiplyAssignment);
            QUnit.test("#997 - TestConvertAllForIntList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997.testConvertAllForIntList);
            QUnit.test("#997 - TestConvertAllForNullConverter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997.testConvertAllForNullConverter);
            QUnit.test("#999 - TestNestedLambdasToLifting", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999.testNestedLambdasToLifting);
            QUnit.test("#999 - TestNestedLambdasToLiftingInForeach", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999_1.testNestedLambdasToLiftingInForeach);
            QUnit.test("#1122 - TestClippingInDefaultOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122.testClippingInDefaultOverflowMode);
            QUnit.test("#1122 - TestIntegerDivisionInDefaultMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122.testIntegerDivisionInDefaultMode);
            QUnit.test("#1122 - TestInfinityCastDefaultOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122.testInfinityCastDefaultOverflowMode);
            QUnit.test("#1122 - TestInfinityCastWithNullable1DefaultOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122.testInfinityCastWithNullable1DefaultOverflowMode);
            QUnit.test("#1122 - TestInfinityCastWithNullable2DefaultOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122.testInfinityCastWithNullable2DefaultOverflowMode);
            QUnit.test("#169", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N169);
            QUnit.test("#240", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N240);
            QUnit.test("#264", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N264);
            QUnit.test("#266", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N266);
            QUnit.test("#272", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N272);
            QUnit.test("#273", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N273);
            QUnit.test("#277", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N277);
            QUnit.test("#294", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N294);
            QUnit.test("#304", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N304);
            QUnit.test("#305", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N305);
            QUnit.test("#306", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N306);
            QUnit.test("#329", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N329);
            QUnit.test("#335", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N335);
            QUnit.test("#336", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N336);
            QUnit.test("#337", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N337);
            QUnit.test("#338", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N338);
            QUnit.test("#339", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N339);
            QUnit.test("#340", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N340);
            QUnit.test("#341", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N341);
            QUnit.test("#342", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N342);
            QUnit.test("#349", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N349);
            QUnit.test("#377", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N377);
            QUnit.test("#383", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N383);
            QUnit.test("#393", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N393);
            QUnit.test("#395", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N395);
            QUnit.test("#406", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N406);
            QUnit.test("#407", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N407);
            QUnit.test("#409", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N409);
            QUnit.test("#410", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N410);
            QUnit.test("#418", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N418);
            QUnit.test("#422", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N422);
            QUnit.test("#428", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N428);
            QUnit.test("#435", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N435);
            QUnit.test("#436", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N436);
            QUnit.test("#438", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N438);
            QUnit.test("#439", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N439);
            QUnit.test("#442", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N442);
            QUnit.test("#460", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N460);
            QUnit.test("#467", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N467);
            QUnit.test("#469", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N469);
            QUnit.test("#470", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N470);
            QUnit.test("#499", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N499);
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge069", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge069)],
        statics: {
            thisKeywordInStructConstructorWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge069).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge069, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ThisKeywordInStructConstructorWorks()",
                    line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge069.thisKeywordInStructConstructorWorks();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge069",
                    file: "Batch3\\BridgeIssues\\0100\\N069.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1000", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000)],
        statics: {
            testStaticViaChild: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1000, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticViaChild()",
                    line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000.testStaticViaChild();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000",
                    file: "Batch3\\BridgeIssues\\1000\\N1000.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1001", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001)],
        statics: {
            testDefaultValues: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1001, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDefaultValues()",
                    line: "29"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.testDefaultValues();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001",
                    file: "Batch3\\BridgeIssues\\1000\\N1001.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1003", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003)],
        statics: {
            testGenericLambdasToLifting: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1003, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericLambdasToLifting()",
                    line: "26"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003.testGenericLambdasToLifting();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003",
                    file: "Batch3\\BridgeIssues\\1000\\N1003.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012)],
        statics: {
            testSleepZero: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSleepZero()",
                    line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.testSleepZero();
            },
            testSleepInt: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSleepInt()",
                    line: "33"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.testSleepInt();
            },
            testSleepTimeSpan: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSleepTimeSpan()",
                    line: "50"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.testSleepTimeSpan();
            },
            testSleepThrows: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSleepThrows()",
                    line: "67"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.testSleepThrows();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012",
                    file: "Batch3\\BridgeIssues\\1000\\N1012.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020)],
        statics: {
            testFlagEnumWithReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestFlagEnumWithReference()",
                    line: "26"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.testFlagEnumWithReference();
            },
            testEnumWithReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEnumWithReference()",
                    line: "32"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.testEnumWithReference();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020",
                    file: "Batch3\\BridgeIssues\\1000\\N1020.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1024", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024)],
        statics: {
            testConstructorOptionalParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1024, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConstructorOptionalParameter()",
                    line: "32"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024.testConstructorOptionalParameter();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024",
                    file: "Batch3\\BridgeIssues\\1000\\N1024.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025)],
        statics: {
            testC1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestC1()",
                    line: "321"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testC1();
            },
            testC2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestC2()",
                    line: "335"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testC2();
            },
            testC3: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestC3()",
                    line: "349"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testC3();
            },
            testI3: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestI3()",
                    line: "372"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI3();
            },
            testI4: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestI4()",
                    line: "388"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI4();
            },
            testI5: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestI5()",
                    line: "398"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI5();
            },
            testI6: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestI6()",
                    line: "409"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI6();
            },
            testI7: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestI7()",
                    line: "423"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI7();
            },
            testI8: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestI8()",
                    line: "443"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI8();
            },
            testI10: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestI10()",
                    line: "466"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI10();
            },
            testI10_1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestI10_1()",
                    line: "485"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI10_1();
            },
            testI10_2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestI10_2()",
                    line: "504"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI10_2();
            },
            testI11: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestI11()",
                    line: "545"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI11();
            },
            testI11_1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestI11_1()",
                    line: "560"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.testI11_1();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025",
                    file: "Batch3\\BridgeIssues\\1000\\N1025.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1026", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026)],
        statics: {
            testReservedWordIfRefOut: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1026, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestReservedWordIfRefOut()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026.testReservedWordIfRefOut();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026",
                    file: "Batch3\\BridgeIssues\\1000\\N1026.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1027", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027)],
        statics: {
            testNonBridgeInherits: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1027, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNonBridgeInherits()",
                    line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027.testNonBridgeInherits();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027",
                    file: "Batch3\\BridgeIssues\\1000\\N1027.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1029", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029)],
        statics: {
            testNullableMethods: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1029, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNullableMethods()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029.testNullableMethods();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029",
                    file: "Batch3\\BridgeIssues\\1000\\N1029.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1039", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039)],
        statics: {
            testMoreThanDecimalDigitsFromTotalHours: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1039, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestMoreThanDecimalDigitsFromTotalHours()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039.testMoreThanDecimalDigitsFromTotalHours();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039",
                    file: "Batch3\\BridgeIssues\\1000\\N1039.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal)],
        statics: {
            testPropertyOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPropertyOps()",
                    line: "163"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.testPropertyOps();
            },
            testIndexerOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIndexerOps()",
                    line: "193"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.testIndexerOps();
            },
            testDictOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDictOps()",
                    line: "224"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.testDictOps();
            },
            testVariableOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestVariableOps()",
                    line: "254"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.testVariableOps();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal",
                    file: "Batch3\\BridgeIssues\\1000\\N1041.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer)],
        statics: {
            testPropertyOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPropertyOps()",
                    line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.testPropertyOps();
            },
            testIndexerOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIndexerOps()",
                    line: "43"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.testIndexerOps();
            },
            testDictOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDictOps()",
                    line: "74"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.testDictOps();
            },
            testVariableOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestVariableOps()",
                    line: "104"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.testVariableOps();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer",
                    file: "Batch3\\BridgeIssues\\1000\\N1041.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1051", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051)],
        statics: {
            testInlinePopertyWithValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1051, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlinePopertyWithValue()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051.testInlinePopertyWithValue();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051",
                    file: "Batch3\\BridgeIssues\\1000\\N1051.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1053", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053)],
        statics: {
            testFieldPropertyWithInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1053, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestFieldPropertyWithInterface()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053.testFieldPropertyWithInterface();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053",
                    file: "Batch3\\BridgeIssues\\1000\\N1053.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058)],
        statics: {
            testNameTrue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNameTrue()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.testNameTrue();
            },
            testNameFales: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNameFales()",
                    line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.testNameFales();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058",
                    file: "Batch3\\BridgeIssues\\1000\\N1058.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1059", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059)],
        statics: {
            testEnumNameModes: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1059, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEnumNameModes()",
                    line: "38"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.testEnumNameModes();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059",
                    file: "Batch3\\BridgeIssues\\1000\\N1059.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1061", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061)],
        statics: {
            testIsDigitFromLinq: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1061, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIsDigitFromLinq()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061.testIsDigitFromLinq();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061",
                    file: "Batch3\\BridgeIssues\\1000\\N1061.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1065", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065)],
        statics: {
            testDecimalLongWithDictionary: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1065, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDecimalLongWithDictionary()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065.testDecimalLongWithDictionary();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065",
                    file: "Batch3\\BridgeIssues\\1000\\N1065.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1066", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066)],
        statics: {
            testInlinePopertyWithValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1066, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlinePopertyWithValue()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066.testInlinePopertyWithValue();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066",
                    file: "Batch3\\BridgeIssues\\1000\\N1066.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1067", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067)],
        statics: {
            testInlinePopertyWithValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1067, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlinePopertyWithValue()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067.testInlinePopertyWithValue();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067",
                    file: "Batch3\\BridgeIssues\\1000\\N1067.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1071", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071)],
        statics: {
            testParamsForCtor: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1071, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestParamsForCtor()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.testParamsForCtor();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071",
                    file: "Batch3\\BridgeIssues\\1000\\N1071.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1072", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072)],
        statics: {
            testNameForProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1072, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNameForProperty()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072.testNameForProperty();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072",
                    file: "Batch3\\BridgeIssues\\1100\\N1172.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076)],
        statics: {
            testInlineConstantAsMemberReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlineConstantAsMemberReference()",
                    line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076.testInlineConstantAsMemberReference();
            },
            testInlineBridgeNumericConstantsAsMemberReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlineBridgeNumericConstantsAsMemberReference()",
                    line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076.testInlineBridgeNumericConstantsAsMemberReference();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076",
                    file: "Batch3\\BridgeIssues\\1000\\N1076.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1081", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081)],
        statics: {
            testTimeSpanMsFormat: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1081, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTimeSpanMsFormat()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081.testTimeSpanMsFormat();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081",
                    file: "Batch3\\BridgeIssues\\1000\\N1081.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1083", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083)],
        statics: {
            testExternalEnum: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1083, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestExternalEnum()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083.testExternalEnum();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083",
                    file: "Batch3\\BridgeIssues\\1000\\N1083.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1085", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085)],
        statics: {
            testInlineArrayExpand: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1085, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlineArrayExpand()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085.testInlineArrayExpand();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085",
                    file: "Batch3\\BridgeIssues\\1000\\N1085.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1096", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096)],
        statics: {
            testClippingIssues: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1096, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestClippingIssues()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096.testClippingIssues();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096",
                    file: "Batch3\\BridgeIssues\\1000\\N1096.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1098", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098)],
        statics: {
            testInlineConstantAsMemberReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1098, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlineConstantAsMemberReference()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098.testInlineConstantAsMemberReference();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098",
                    file: "Batch3\\BridgeIssues\\1000\\N1098.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1103", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103)],
        statics: {
            testPropertyOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1103, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPropertyOps()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103.testPropertyOps();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103",
                    file: "Batch3\\BridgeIssues\\1100\\N1103.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1105", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105)],
        statics: {
            testStaticInitForNestedClasses: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1105, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticInitForNestedClasses()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.testStaticInitForNestedClasses();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105",
                    file: "Batch3\\BridgeIssues\\1100\\N1105.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1109", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109)],
        statics: {
            testTemplateOnProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1109, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTemplateOnProperty()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109.testTemplateOnProperty();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109",
                    file: "Batch3\\BridgeIssues\\1100\\N1109.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110)],
        statics: {
            testOverflowForConditionInParenthesized: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOverflowForConditionInParenthesized()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.testOverflowForConditionInParenthesized();
            },
            testOverflowForIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOverflowForIndexer()",
                    line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.testOverflowForIndexer();
            },
            testOverflowForBitwise: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOverflowForBitwise()",
                    line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.testOverflowForBitwise();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110",
                    file: "Batch3\\BridgeIssues\\1100\\N1110.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120)],
        statics: {
            testEnumDoesNotGenerateValuesAsPowerOfTwo: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEnumDoesNotGenerateValuesAsPowerOfTwo()",
                    line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120.testEnumDoesNotGenerateValuesAsPowerOfTwo();
            },
            testFlagEnumDoesNotGenerateValuesAsPowerOfTwo: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo()",
                    line: "43"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120.testFlagEnumDoesNotGenerateValuesAsPowerOfTwo();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120",
                    file: "Batch3\\BridgeIssues\\1100\\N1120.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1128", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128)],
        statics: {
            testNestedClassesWithInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1128, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNestedClassesWithInterface()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.testNestedClassesWithInterface();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128",
                    file: "Batch3\\BridgeIssues\\1100\\N1128.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1130", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130)],
        statics: {
            testUlongDivision: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1130, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUlongDivision()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130.testUlongDivision();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130",
                    file: "Batch3\\BridgeIssues\\1100\\N1130.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1134", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134)],
        statics: {
            testJsonArrayParse: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1134, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestJsonArrayParse()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134.testJsonArrayParse();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134",
                    file: "Batch3\\BridgeIssues\\1100\\N1134.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1140", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140)],
        statics: {
            testDefaultNullable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1140, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDefaultNullable()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140.testDefaultNullable();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140",
                    file: "Batch3\\BridgeIssues\\1100\\N1140.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1141", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141)],
        statics: {
            testLongDivisionInfiniteLoopFixed: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1141, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLongDivisionInfiniteLoopFixed()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141.testLongDivisionInfiniteLoopFixed();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141",
                    file: "Batch3\\BridgeIssues\\1100\\N1141.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1144", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144)],
        statics: {
            testStringFormat: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1144, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStringFormat()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144.testStringFormat();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144",
                    file: "Batch3\\BridgeIssues\\1100\\N1144.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1146", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146)],
        statics: {
            testLongIssues: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1146, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLongIssues()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146.testLongIssues();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146",
                    file: "Batch3\\BridgeIssues\\1100\\N1146.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1149", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149)],
        statics: {
            testBitwiseOrAnd: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1149, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestBitwiseOrAnd()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149.testBitwiseOrAnd();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149",
                    file: "Batch3\\BridgeIssues\\1100\\N1149.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1160", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160)],
        statics: {
            testBitwiseOrAnd: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1160, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestBitwiseOrAnd()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160.testBitwiseOrAnd();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160",
                    file: "Batch3\\BridgeIssues\\1100\\N1160.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170)],
        statics: {
            testAsyncUsing: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAsyncUsing()",
                    line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.testAsyncUsing();
            },
            testAsyncUsingWithException: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAsyncUsingWithException()",
                    line: "49"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.testAsyncUsingWithException();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170",
                    file: "Batch3\\BridgeIssues\\1100\\N1170.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1171", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171)],
        statics: {
            testLinqEnumerableInList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1171, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLinqEnumerableInList()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171.testLinqEnumerableInList();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171",
                    file: "Batch3\\BridgeIssues\\1100\\N1171.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1175", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175)],
        statics: {
            testNullComparing: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1175, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNullComparing()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175.testNullComparing();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175",
                    file: "Batch3\\BridgeIssues\\1100\\N1175.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1176", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176)],
        statics: {
            testFunctionLifting: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1176, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestFunctionLifting()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176.testFunctionLifting();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176",
                    file: "Batch3\\BridgeIssues\\1100\\N1176.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1177", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177)],
        statics: {
            testImplicitCast: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1177, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestImplicitCast()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177.testImplicitCast();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177",
                    file: "Batch3\\BridgeIssues\\1100\\N1177.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1180", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180)],
        statics: {
            testStructClone: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1180, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStructClone()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180.testStructClone();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180",
                    file: "Batch3\\BridgeIssues\\1100\\N1180.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1184", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184)],
        statics: {
            testGetTypeForNumberTypes: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1184, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGetTypeForNumberTypes()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184.testGetTypeForNumberTypes();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184",
                    file: "Batch3\\BridgeIssues\\1100\\N1184.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1186", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186)],
        statics: {
            testLambdasInField: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1186, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLambdasInField()",
                    line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186.testLambdasInField();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186",
                    file: "Batch3\\BridgeIssues\\1100\\N1186.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1189", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189)],
        statics: {
            testTaskNumber: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1189, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTaskNumber()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189.testTaskNumber();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189",
                    file: "Batch3\\BridgeIssues\\1100\\N1189.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1193", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193)],
        statics: {
            testAssemblyVersionMarker: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1193, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssemblyVersionMarker()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193.testAssemblyVersionMarker();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193",
                    file: "Batch3\\BridgeIssues\\1100\\N1193.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1197", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197)],
        statics: {
            testGetHashCodeOnDictionary: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1197, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGetHashCodeOnDictionary()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197.testGetHashCodeOnDictionary();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197",
                    file: "Batch3\\BridgeIssues\\1100\\N1197.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1199", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199)],
        statics: {
            testEventNameCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1199, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEventNameCase()",
                    line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199.testEventNameCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199",
                    file: "Batch3\\BridgeIssues\\1100\\N1199.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202)],
        statics: {
            testRefOutStaticIntField: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRefOutStaticIntField()",
                    line: "33"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutStaticIntField();
            },
            testRefOutLocal1DIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRefOutLocal1DIntArray()",
                    line: "45"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutLocal1DIntArray();
            },
            testRefOutStatic1DIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRefOutStatic1DIntArray()",
                    line: "63"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutStatic1DIntArray();
            },
            testRefOutLocal2DIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRefOutLocal2DIntArray()",
                    line: "81"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutLocal2DIntArray();
            },
            testRefOutStaticDecimalField: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRefOutStaticDecimalField()",
                    line: "99"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutStaticDecimalField();
            },
            testRefOutLocal1DDecimalArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRefOutLocal1DDecimalArray()",
                    line: "111"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutLocal1DDecimalArray();
            },
            testRefOutLocal2DDecimalArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRefOutLocal2DDecimalArray()",
                    line: "123"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testRefOutLocal2DDecimalArray();
            },
            testInlineOutStaticIntField: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlineOutStaticIntField()",
                    line: "135"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testInlineOutStaticIntField();
            },
            testInlineOutStatic1DIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlineOutStatic1DIntArray()",
                    line: "149"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testInlineOutStatic1DIntArray();
            },
            testInlineOutLocal2DIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlineOutLocal2DIntArray()",
                    line: "162"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.testInlineOutLocal2DIntArray();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202",
                    file: "Batch3\\BridgeIssues\\1200\\N1202.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1203", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203)],
        statics: {
            testLiftedFunctionsInsideInitMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1203, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLiftedFunctionsInsideInitMethod()",
                    line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203.testLiftedFunctionsInsideInitMethod();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203",
                    file: "Batch3\\BridgeIssues\\1200\\N1203.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1206", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206)],
        statics: {
            testDocumentURLProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1206, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDocumentURLProperty()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206.testDocumentURLProperty();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206",
                    file: "Batch3\\BridgeIssues\\1200\\N1206.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1217", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217)],
        statics: {
            testTypeInferenceWithNamedArguments: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1217, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTypeInferenceWithNamedArguments()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.testTypeInferenceWithNamedArguments();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217",
                    file: "Batch3\\BridgeIssues\\1200\\N1217.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1219", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219)],
        statics: {
            testLongJSON: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1219, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLongJSON()",
                    line: "25"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219.testLongJSON();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219",
                    file: "Batch3\\BridgeIssues\\1200\\N1219.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge122", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge122)],
        statics: {
            test2DArrayConstruction: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge122).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge122, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "Test2DArrayConstruction()",
                    line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge122.test2DArrayConstruction();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge122",
                    file: "Batch3\\BridgeIssues\\0100\\N122.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1220", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220)],
        statics: {
            testConstInGenericClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1220, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConstInGenericClass()",
                    line: "14"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220.testConstInGenericClass();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220",
                    file: "Batch3\\BridgeIssues\\1200\\N1220.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226)],
        statics: {
            testSinh: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSinh()",
                    line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.testSinh();
            },
            testCosh: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCosh()",
                    line: "51"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.testCosh();
            },
            testTanh: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTanh()",
                    line: "66"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.testTanh();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226",
                    file: "Batch3\\BridgeIssues\\1200\\N1226.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1231", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231)],
        statics: {
            testAutoGeneratedStructMethodName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1231, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAutoGeneratedStructMethodName()",
                    line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231.testAutoGeneratedStructMethodName();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231",
                    file: "Batch3\\BridgeIssues\\1200\\N1231.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232)],
        statics: {
            testParamsInThisCtorInit: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestParamsInThisCtorInit()",
                    line: "51"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.testParamsInThisCtorInit();
            },
            testExtendedParamsInThisCtorInit: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestExtendedParamsInThisCtorInit()",
                    line: "76"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.testExtendedParamsInThisCtorInit();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232",
                    file: "Batch3\\BridgeIssues\\1200\\N1232.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1241", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241)],
        statics: {
            testMarkElement: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1241, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestMarkElement()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241.testMarkElement();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241",
                    file: "Batch3\\BridgeIssues\\1200\\N1241.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1249", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249)],
        statics: {
            testEnumOverflow: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1249, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEnumOverflow()",
                    line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249.testEnumOverflow();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249",
                    file: "Batch3\\BridgeIssues\\1200\\N1249.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1253", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253)],
        statics: {
            testDefaultEnumMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1253, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDefaultEnumMode()",
                    line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253.testDefaultEnumMode();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253",
                    file: "Batch3\\BridgeIssues\\1200\\N1253.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256)],
        statics: {
            testCaseBooleanIsLet: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCaseBooleanIsLet()",
                    line: "475"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.testCaseBooleanIsLet();
            },
            testReservedFields: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256, 67, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestReservedFields()",
                    line: "491"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.testReservedFields();
            },
            testReservedMethods: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256, 67, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestReservedMethods()",
                    line: "499"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.testReservedMethods();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256",
                    file: "Batch3\\BridgeIssues\\1200\\N1256.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260)],
        statics: {
            testStringTrim: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStringTrim()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.testStringTrim();
            },
            testStringTrimStart: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStringTrimStart()",
                    line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.testStringTrimStart();
            },
            testStringTrimEnd: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStringTrimEnd()",
                    line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.testStringTrimEnd();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260",
                    file: "Batch3\\BridgeIssues\\1200\\N1260.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1264", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264)],
        statics: {
            testDefaultGetHashCodeIsRepeatable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1264, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDefaultGetHashCodeIsRepeatable()",
                    line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264.testDefaultGetHashCodeIsRepeatable();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264",
                    file: "Batch3\\BridgeIssues\\1200\\N1264.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1266", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266)],
        statics: {
            testArrayToEnumerable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1266, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestArrayToEnumerable()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266.testArrayToEnumerable();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266",
                    file: "Batch3\\BridgeIssues\\1200\\N1266.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296)],
        statics: {
            testImplicitOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestImplicitOperator()",
                    line: "95"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.testImplicitOperator();
            },
            testIgnoreCast: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIgnoreCast()",
                    line: "105"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.testIgnoreCast();
            },
            testExternalImplicit: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestExternalImplicit()",
                    line: "113"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.testExternalImplicit();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296",
                    file: "Batch3\\BridgeIssues\\1200\\N1296.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1298", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298)],
        statics: {
            testLongSwitch: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1298, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLongSwitch()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298.testLongSwitch();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298",
                    file: "Batch3\\BridgeIssues\\1200\\N1298.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304)],
        statics: {
            testWriteFormatString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestWriteFormatString()",
                    line: "36"
                } ));
                try {
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.testWriteFormatString();
                }
                finally {
                    t.tearDown();
                }
            },
            testWriteLineFormatString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestWriteLineFormatString()",
                    line: "59"
                } ));
                try {
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.testWriteLineFormatString();
                }
                finally {
                    t.tearDown();
                }
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304",
                    file: "Batch3\\BridgeIssues\\1300\\N1304.cs"
                } );
            }
            return this.context;
        },
        setUp: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.clearOutput();
        },
        tearDown: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.resetOutput();
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305)],
        statics: {
            testAsyncIntReturnWithAssigmentFromResult: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAsyncIntReturnWithAssigmentFromResult()",
                    line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.testAsyncIntReturnWithAssigmentFromResult();
            },
            testAsyncDataClassReturnWithAssigmentFromResult: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAsyncDataClassReturnWithAssigmentFromResult()",
                    line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.testAsyncDataClassReturnWithAssigmentFromResult();
            },
            testAsyncDataStructReturnWithAssigmentFromResult: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAsyncDataStructReturnWithAssigmentFromResult()",
                    line: "41"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.testAsyncDataStructReturnWithAssigmentFromResult();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305",
                    file: "Batch3\\BridgeIssues\\1300\\N1305.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1311", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311)],
        statics: {
            testEnumNumberParsing: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1311, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEnumNumberParsing()",
                    line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311.testEnumNumberParsing();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311",
                    file: "Batch3\\BridgeIssues\\1300\\N1311.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313)],
        statics: {
            testInterfaceDefaultParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInterfaceDefaultParameter()",
                    line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.testInterfaceDefaultParameter();
            },
            testClassNotDefaultParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestClassNotDefaultParameter()",
                    line: "29"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.testClassNotDefaultParameter();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313",
                    file: "Batch3\\BridgeIssues\\1300\\N1313.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.testUseCase();
            },
            testStringConcatObject: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStringConcatObject()",
                    line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.testStringConcatObject();
            },
            testStringConcatEnumerableString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStringConcatEnumerableString()",
                    line: "34"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.testStringConcatEnumerableString();
            },
            testStringConcatEnumerableGeneric: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStringConcatEnumerableGeneric()",
                    line: "53"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.testStringConcatEnumerableGeneric();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316",
                    file: "Batch3\\BridgeIssues\\1300\\N1316.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328)],
        statics: {
            testOptionalParamsForClasses: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOptionalParamsForClasses()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.testOptionalParamsForClasses();
            },
            testOptionalParamsForStructs: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOptionalParamsForStructs()",
                    line: "25"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.testOptionalParamsForStructs();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328",
                    file: "Batch3\\BridgeIssues\\1300\\N1328.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1339", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339)],
        statics: {
            testAccessingConstantsFromDerivedClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1339, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAccessingConstantsFromDerivedClass()",
                    line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.testAccessingConstantsFromDerivedClass();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339",
                    file: "Batch3\\BridgeIssues\\1300\\N1339.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340)],
        statics: {
            testStructGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStructGenericMembersDefaultValue()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStructGenericMembersDefaultValue();
            },
            testStructTwoGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStructTwoGenericMembersDefaultValue()",
                    line: "52"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStructTwoGenericMembersDefaultValue();
            },
            testClassGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestClassGenericMembersDefaultValue()",
                    line: "71"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testClassGenericMembersDefaultValue();
            },
            testClassTwoGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestClassTwoGenericMembersDefaultValue()",
                    line: "114"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testClassTwoGenericMembersDefaultValue();
            },
            testClass1TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestClass1TwoGenericInheritedMembersDefaultValue()",
                    line: "133"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testClass1TwoGenericInheritedMembersDefaultValue();
            },
            testClass2TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestClass2TwoGenericInheritedMembersDefaultValue()",
                    line: "152"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testClass2TwoGenericInheritedMembersDefaultValue();
            },
            testClass3TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestClass3TwoGenericInheritedMembersDefaultValue()",
                    line: "161"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testClass3TwoGenericInheritedMembersDefaultValue();
            },
            testStructStaticIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStructStaticIntArray()",
                    line: "172"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStructStaticIntArray();
            },
            testStructStaticLongArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStructStaticLongArray()",
                    line: "194"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStructStaticLongArray();
            },
            testStructStaticStringArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStructStaticStringArray()",
                    line: "216"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStructStaticStringArray();
            },
            testStaticClassGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticClassGenericMembersDefaultValue()",
                    line: "289"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStaticClassGenericMembersDefaultValue();
            },
            testStaticClassTwoGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticClassTwoGenericMembersDefaultValue()",
                    line: "318"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStaticClassTwoGenericMembersDefaultValue();
            },
            testStaticClass1TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticClass1TwoGenericInheritedMembersDefaultValue()",
                    line: "331"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStaticClass1TwoGenericInheritedMembersDefaultValue();
            },
            testStaticClass2TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticClass2TwoGenericInheritedMembersDefaultValue()",
                    line: "344"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStaticClass2TwoGenericInheritedMembersDefaultValue();
            },
            testStaticClass3TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticClass3TwoGenericInheritedMembersDefaultValue()",
                    line: "351"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.testStaticClass3TwoGenericInheritedMembersDefaultValue();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340",
                    file: "Batch3\\BridgeIssues\\1300\\N1340.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341)],
        statics: {
            testPlainObject: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPlainObject()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.testPlainObject();
            },
            testAnonymousTypeCreation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAnonymousTypeCreation()",
                    line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.testAnonymousTypeCreation();
            },
            testDiffStructHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDiffStructHashCode()",
                    line: "103"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.testDiffStructHashCode();
            },
            testDiffAnonymousTypesHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDiffAnonymousTypesHashCode()",
                    line: "116"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.testDiffAnonymousTypesHashCode();
            },
            test1AnonymousType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "Test1AnonymousType()",
                    line: "153"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test1AnonymousType();
            },
            test2AnonymousType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "Test2AnonymousType()",
                    line: "168"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test2AnonymousType();
            },
            test3AnonymousType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "Test3AnonymousType()",
                    line: "183"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test3AnonymousType();
            },
            test4AnonymousType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "Test4AnonymousType()",
                    line: "198"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test4AnonymousType();
            },
            test5AnonymousType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "Test5AnonymousType()",
                    line: "213"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test5AnonymousType();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341",
                    file: "Batch3\\BridgeIssues\\1300\\N1341.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343)],
        statics: {
            testDoubleTemplate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDoubleTemplate()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343.testDoubleTemplate();
            },
            testInlineInGetHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlineInGetHashCode()",
                    line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343.testInlineInGetHashCode();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343",
                    file: "Batch3\\BridgeIssues\\1300\\N1343.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1344", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344)],
        statics: {
            testLocalVariableWithNameProto: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1344, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLocalVariableWithNameProto()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344.testLocalVariableWithNameProto();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344",
                    file: "Batch3\\BridgeIssues\\1300\\N1344.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1348", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348)],
        statics: {
            testVoidTypeOf: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1348, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestVoidTypeOf()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348.testVoidTypeOf();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348",
                    file: "Batch3\\BridgeIssues\\1300\\N1348.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1355", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355)],
        statics: {
            testLocalVariableWithNameWindow: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1355, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLocalVariableWithNameWindow()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355.testLocalVariableWithNameWindow();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355",
                    file: "Batch3\\BridgeIssues\\1300\\N1355.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374)],
        statics: {
            testConvertAllForIntListStaticMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConvertAllForIntListStaticMethod()",
                    line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.testConvertAllForIntListStaticMethod();
            },
            testConvertAllForIntListInstanceMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConvertAllForIntListInstanceMethod()",
                    line: "38"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.testConvertAllForIntListInstanceMethod();
            },
            testConvertAllForIntListLambda: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConvertAllForIntListLambda()",
                    line: "48"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.testConvertAllForIntListLambda();
            },
            testConvertAllForNullConverter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConvertAllForNullConverter()",
                    line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.testConvertAllForNullConverter();
            },
            testConvertAllForNullArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConvertAllForNullArray()",
                    line: "66"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.testConvertAllForNullArray();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374",
                    file: "Batch3\\BridgeIssues\\1300\\N1374.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378)],
        statics: {
            testAssigmentWithMinusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssigmentWithMinusOperator()",
                    line: "39"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithMinusOperator();
            },
            testAssigmentWithPlusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssigmentWithPlusOperator()",
                    line: "51"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithPlusOperator();
            },
            testAssigmentWithOverloadMinusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssigmentWithOverloadMinusOperator()",
                    line: "63"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithOverloadMinusOperator();
            },
            testAssigmentWithOverloadPlusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssigmentWithOverloadPlusOperator()",
                    line: "71"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithOverloadPlusOperator();
            },
            testAssigmentWithConditionalPlusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssigmentWithConditionalPlusOperator()",
                    line: "79"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithConditionalPlusOperator();
            },
            testAssigmentWithConditionalMinusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssigmentWithConditionalMinusOperator()",
                    line: "94"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.testAssigmentWithConditionalMinusOperator();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378",
                    file: "Batch3\\BridgeIssues\\1300\\N1378.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1379", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379)],
        statics: {
            testNanFiniteType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1379, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNanFiniteType()",
                    line: "14"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379.testNanFiniteType();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379",
                    file: "Batch3\\BridgeIssues\\1300\\N1379.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381)],
        statics: {
            testReservedWordsUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestReservedWordsUseCase()",
                    line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381.testReservedWordsUseCase();
            },
            testReservedWordsNewBatch: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestReservedWordsNewBatch()",
                    line: "82"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381.testReservedWordsNewBatch();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381",
                    file: "Batch3\\BridgeIssues\\1300\\N1381.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1385", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385)],
        statics: {
            testIsTypedArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1385, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIsTypedArray()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385.testIsTypedArray();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385",
                    file: "Batch3\\BridgeIssues\\1300\\N1385.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1389", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389)],
        statics: {
            testParamsIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1389, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestParamsIndexer()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389.testParamsIndexer();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389",
                    file: "Batch3\\BridgeIssues\\1300\\N1389.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391)],
        statics: {
            testStaticCtorOrder: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticCtorOrder()",
                    line: "41"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.testStaticCtorOrder();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391",
                    file: "Batch3\\BridgeIssues\\1300\\N1391.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391Ready", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready)],
        statics: {
            testStaticCtorOrderForClassHavingReady: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391Ready, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticCtorOrderForClassHavingReady()",
                    line: "57"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready.testStaticCtorOrderForClassHavingReady();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready",
                    file: "Batch3\\BridgeIssues\\1300\\N1391.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1402", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402)],
        statics: {
            testLongClipping: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1402, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLongClipping()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402.testLongClipping();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402",
                    file: "Batch3\\BridgeIssues\\1400\\N1402.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410)],
        statics: {
            testSetterOnly: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSetterOnly()",
                    line: "49"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.testSetterOnly();
            },
            testIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIndexer()",
                    line: "55"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.testIndexer();
            },
            testAssigmentWithOp: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssigmentWithOp()",
                    line: "64"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.testAssigmentWithOp();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410",
                    file: "Batch3\\BridgeIssues\\1400\\N1410.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411)],
        statics: {
            testTemplateCtorThing: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTemplateCtorThing()",
                    line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.testTemplateCtorThing();
            },
            testTemplateCtorDoodad: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTemplateCtorDoodad()",
                    line: "66"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.testTemplateCtorDoodad();
            },
            testTemplateCtorGizmo: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTemplateCtorGizmo()",
                    line: "78"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.testTemplateCtorGizmo();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411",
                    file: "Batch3\\BridgeIssues\\1400\\N1411.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1428", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428)],
        statics: {
            testEqOperatorWithNull: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1428, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEqOperatorWithNull()",
                    line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428.testEqOperatorWithNull();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428",
                    file: "Batch3\\BridgeIssues\\1400\\N1428.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1429", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429)],
        statics: {
            testEqOperatorWithNull: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1429, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEqOperatorWithNull()",
                    line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429.testEqOperatorWithNull();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429",
                    file: "Batch3\\BridgeIssues\\1400\\N1429.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1430", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430)],
        statics: {
            testNestedNamespaceSupport: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1430, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNestedNamespaceSupport()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430.testNestedNamespaceSupport();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430",
                    file: "Batch3\\BridgeIssues\\1400\\N1430.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1438", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438)],
        statics: {
            testJSONParse: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1438, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestJSONParse()",
                    line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.testJSONParse();
            },
            testJSONParseAsArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1438, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestJSONParseAsArray()",
                    line: "34"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.testJSONParseAsArray();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438",
                    file: "Batch3\\BridgeIssues\\1400\\N1438.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448)],
        statics: {
            testPlainForNonAnonymous: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPlainForNonAnonymous()",
                    line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.testPlainForNonAnonymous();
            },
            testObjectLiteralProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestObjectLiteralProperty()",
                    line: "47"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.testObjectLiteralProperty();
            },
            testToObjectLiteralAlias: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestToObjectLiteralAlias()",
                    line: "65"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.testToObjectLiteralAlias();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448",
                    file: "Batch3\\BridgeIssues\\1400\\N1448.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1458", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458)],
        statics: {
            testConsoleWriteLineForLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1458, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConsoleWriteLineForLong()",
                    line: "35"
                } ));
                try {
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458.testConsoleWriteLineForLong();
                }
                finally {
                    t.tearDown();
                }
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458",
                    file: "Batch3\\BridgeIssues\\1400\\N1458.cs"
                } );
            }
            return this.context;
        },
        setUp: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458.clearOutput();
        },
        tearDown: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458.resetOutput();
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1459", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459)],
        statics: {
            testHtmlElements: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1459, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestHtmlElements()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459.testHtmlElements();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459",
                    file: "Batch3\\BridgeIssues\\1400\\N1459.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1467", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467)],
        statics: {
            testForeachTypeChecking: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1467, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestForeachTypeChecking()",
                    line: "32"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.testForeachTypeChecking();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467",
                    file: "Batch3\\BridgeIssues\\1400\\N1467.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472)],
        statics: {
            testMultiplyThisInTemplate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestMultiplyThisInTemplate()",
                    line: "18"
                } ));
                t.getFixture().testMultiplyThisInTemplate();
            },
            testSimpleMultipleKeyTemplate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSimpleMultipleKeyTemplate()",
                    line: "26"
                } ));
                t.getFixture().testSimpleMultipleKeyTemplate();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472",
                    file: "Batch3\\BridgeIssues\\1400\\N1472.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1476", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476)],
        statics: {
            testEscapedBrackets: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1476, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEscapedBrackets()",
                    line: "11"
                } ));
                t.getFixture().testEscapedBrackets();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476",
                    file: "Batch3\\BridgeIssues\\1400\\N1476.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1480", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480)],
        statics: {
            testOverloadUnaryOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1480, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOverloadUnaryOperator()",
                    line: "31"
                } ));
                t.getFixture().testOverloadUnaryOperator();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480",
                    file: "Batch3\\BridgeIssues\\1400\\N1480.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1485", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485)],
        statics: {
            testConstructorName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1485, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConstructorName()",
                    line: "9"
                } ));
                t.getFixture().testConstructorName();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485",
                    file: "Batch3\\BridgeIssues\\1400\\N1485.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486)],
        statics: {
            testStaticLongInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticLongInitialization()",
                    line: "13"
                } ));
                t.getFixture().testStaticLongInitialization();
            },
            testLocalLongInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLocalLongInitialization()",
                    line: "22"
                } ));
                t.getFixture().testLocalLongInitialization();
            },
            testStaticUlongInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticUlongInitialization()",
                    line: "32"
                } ));
                t.getFixture().testStaticUlongInitialization();
            },
            testLocalUlongInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLocalUlongInitialization()",
                    line: "41"
                } ));
                t.getFixture().testLocalUlongInitialization();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486",
                    file: "Batch3\\BridgeIssues\\1400\\N1486.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489)],
        statics: {
            testLongEnum: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLongEnum()",
                    line: "15"
                } ));
                t.getFixture().testLongEnum();
            },
            testIntEnum: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIntEnum()",
                    line: "29"
                } ));
                t.getFixture().testIntEnum();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489",
                    file: "Batch3\\BridgeIssues\\1400\\N1489.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1490", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490)],
        statics: {
            testEnumLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1490, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEnumLong()",
                    line: "19"
                } ));
                t.getFixture().testEnumLong();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490",
                    file: "Batch3\\BridgeIssues\\1400\\N1490.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1492", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492)],
        statics: {
            testEnumLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1492, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEnumLong()",
                    line: "14"
                } ));
                t.getFixture().testEnumLong();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492",
                    file: "Batch3\\BridgeIssues\\1400\\N1492.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1493", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493)],
        statics: {
            testEnumLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1493, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEnumLong()",
                    line: "14"
                } ));
                t.getFixture().testEnumLong();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493",
                    file: "Batch3\\BridgeIssues\\1400\\N1493.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1499", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1499)],
        statics: {
            testObjectStringCoalesceWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1499).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1499, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestObjectStringCoalesceWorks()",
                    line: "9"
                } ));
                t.getFixture().testObjectStringCoalesceWorks();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1499",
                    file: "Batch3\\BridgeIssues\\1400\\N1499.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1501", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501)],
        statics: {
            testPropertyChangedEventArgs: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1501, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPropertyChangedEventArgs()",
                    line: "11"
                } ));
                t.getFixture().testPropertyChangedEventArgs();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501",
                    file: "Batch3\\BridgeIssues\\1500\\N1501.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1509", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1509)],
        statics: {
            testPreformanceNowIsDouble: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1509).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1509, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPreformanceNowIsDouble()",
                    line: "9"
                } ));
                t.getFixture().testPreformanceNowIsDouble();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1509",
                    file: "Batch3\\BridgeIssues\\1500\\N1509.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1510", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510)],
        statics: {
            testPropertyChangedEventArgs: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1510, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPropertyChangedEventArgs()",
                    line: "11"
                } ));
                t.getFixture().testPropertyChangedEventArgs();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510",
                    file: "Batch3\\BridgeIssues\\1500\\N1510.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1511", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1511)],
        statics: {
            testOverloadedConstructorCallWithOptionalParameters: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1511).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1511, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOverloadedConstructorCallWithOptionalParameters()",
                    line: "62"
                } ));
                t.getFixture().testOverloadedConstructorCallWithOptionalParameters();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1511",
                    file: "Batch3\\BridgeIssues\\1500\\N1511.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1512", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512)],
        statics: {
            testParametersReservedNames: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1512, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestParametersReservedNames()",
                    line: "19"
                } ));
                t.getFixture().testParametersReservedNames();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512",
                    file: "Batch3\\BridgeIssues\\1500\\N1512.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517)],
        statics: {
            testEqualTuples: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEqualTuples()",
                    line: "10"
                } ));
                t.getFixture().testEqualTuples();
            },
            testInequalTuples: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInequalTuples()",
                    line: "26"
                } ));
                t.getFixture().testInequalTuples();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517",
                    file: "Batch3\\BridgeIssues\\1500\\N1517.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1518", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518)],
        statics: {
            testDefaultConstructorForTypeParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1518, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDefaultConstructorForTypeParameter()",
                    line: "15"
                } ));
                t.getFixture().testDefaultConstructorForTypeParameter();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518",
                    file: "Batch3\\BridgeIssues\\1500\\N1518.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1519", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1519)],
        statics: {
            testRefOutLocalVars: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1519).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1519, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRefOutLocalVars()",
                    line: "10"
                } ));
                t.getFixture().testRefOutLocalVars();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1519",
                    file: "Batch3\\BridgeIssues\\1500\\N1519.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520)],
        statics: {
            testStaticDecimalInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticDecimalInitialization()",
                    line: "12"
                } ));
                t.getFixture().testStaticDecimalInitialization();
            },
            testLocalDecimalInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLocalDecimalInitialization()",
                    line: "21"
                } ));
                t.getFixture().testLocalDecimalInitialization();
            },
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "31"
                } ));
                t.getFixture().testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520",
                    file: "Batch3\\BridgeIssues\\1500\\N1520.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1521", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1521)],
        statics: {
            testDecimalTrueInConditionalBlock: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1521).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1521, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDecimalTrueInConditionalBlock()",
                    line: "11"
                } ));
                t.getFixture().testDecimalTrueInConditionalBlock();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1521",
                    file: "Batch3\\BridgeIssues\\1500\\N1521.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1522", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1522)],
        statics: {
            testAssignIntToDecimal: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1522).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1522, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssignIntToDecimal()",
                    line: "11"
                } ));
                t.getFixture().testAssignIntToDecimal();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1522",
                    file: "Batch3\\BridgeIssues\\1500\\N1522.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1523", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1523)],
        statics: {
            testAssignDecimalToInt: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1523).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1523, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssignDecimalToInt()",
                    line: "9"
                } ));
                t.getFixture().testAssignDecimalToInt();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1523",
                    file: "Batch3\\BridgeIssues\\1500\\N1523.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1524", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1524)],
        statics: {
            testDecimalWithIntOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1524).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1524, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDecimalWithIntOps()",
                    line: "9"
                } ));
                t.getFixture().testDecimalWithIntOps();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1524",
                    file: "Batch3\\BridgeIssues\\1500\\N1524.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526)],
        statics: {
            testOutInClassMembers: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOutInClassMembers()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526.testOutInClassMembers();
            },
            testRefInClassMembers: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRefInClassMembers()",
                    line: "47"
                } ));
                t.getFixture().testRefInClassMembers();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526",
                    file: "Batch3\\BridgeIssues\\1500\\N1526.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1527", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527)],
        statics: {
            testScriptAttributeWithReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1527, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestScriptAttributeWithReference()",
                    line: "15"
                } ));
                t.getFixture().testScriptAttributeWithReference();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527",
                    file: "Batch3\\BridgeIssues\\1500\\N1527.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1530", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1530)],
        statics: {
            testObjectLiteralFieldImplementingInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1530).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1530, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestObjectLiteralFieldImplementingInterface()",
                    line: "22"
                } ));
                t.getFixture().testObjectLiteralFieldImplementingInterface();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1530",
                    file: "Batch3\\BridgeIssues\\1500\\N1530.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1533", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1533)],
        statics: {
            testStringNullConcationation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1533).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1533, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStringNullConcationation()",
                    line: "9"
                } ));
                t.getFixture().testStringNullConcationation();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1533",
                    file: "Batch3\\BridgeIssues\\1500\\N1533.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1535", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1535)],
        statics: {
            testAsyncLambdaAssignmentExpression: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1535).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1535, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAsyncLambdaAssignmentExpression()",
                    line: "13"
                } ));
                t.getFixture().testAsyncLambdaAssignmentExpression();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1535",
                    file: "Batch3\\BridgeIssues\\1500\\N1535.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536)],
        statics: {
            testEventNameConflict: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEventNameConflict()",
                    line: "30"
                } ));
                t.getFixture().testEventNameConflict();
            },
            testPropertyNameConflict: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPropertyNameConflict()",
                    line: "39"
                } ));
                t.getFixture().testPropertyNameConflict();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536",
                    file: "Batch3\\BridgeIssues\\1500\\N1536.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1538", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1538)],
        statics: {
            testOutParameterInIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1538).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1538, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOutParameterInIndexer()",
                    line: "9"
                } ));
                t.getFixture().testOutParameterInIndexer();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1538",
                    file: "Batch3\\BridgeIssues\\1500\\N1538.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566)],
        statics: {
            testMathLog10: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestMathLog10()",
                    line: "13"
                } ));
                t.getFixture().testMathLog10();
            },
            testMathLogWithBase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestMathLogWithBase()",
                    line: "24"
                } ));
                t.getFixture().testMathLogWithBase();
            },
            testMathLog: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestMathLog()",
                    line: "36"
                } ));
                t.getFixture().testMathLog();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566",
                    file: "Batch3\\BridgeIssues\\1500\\N1566.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1599", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599)],
        statics: {
            testCustomIEnumerableForStringJoin: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1599, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCustomIEnumerableForStringJoin()",
                    line: "12"
                } ));
                t.getFixture().testCustomIEnumerableForStringJoin();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599",
                    file: "Batch3\\BridgeIssues\\1500\\N1599.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1641", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641)],
        statics: {
            testOutInAsync: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1641, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOutInAsync()",
                    line: "14"
                } ));
                t.getFixture().testOutInAsync();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641",
                    file: "Batch3\\BridgeIssues\\1600\\N1641.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1653", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653)],
        statics: {
            testLiftedFunctionsWithGenericInvocation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1653, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLiftedFunctionsWithGenericInvocation()",
                    line: "38"
                } ));
                t.getFixture().testLiftedFunctionsWithGenericInvocation();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653",
                    file: "Batch3\\BridgeIssues\\1600\\N1653.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1684", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684)],
        statics: {
            testStaticInitializationForGenericClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1684, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticInitializationForGenericClass()",
                    line: "36"
                } ));
                t.getFixture().testStaticInitializationForGenericClass();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684",
                    file: "Batch3\\BridgeIssues\\1600\\N1684.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1698", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698)],
        statics: {
            testReflectionForNativeTypes: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1698, 14, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestReflectionForNativeTypes()",
                    line: "39"
                } ));
                try {
                    t.getFixture().testReflectionForNativeTypes();
                }
                finally {
                    t.tearDown();
                }
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698",
                    file: "Batch3\\BridgeIssues\\1600\\N1698.cs"
                } );
            }
            return this.context;
        },
        setUp: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698.clearOutput();
        },
        tearDown: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698.resetOutput();
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700)],
        statics: {
            testULongAsIndex: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestULongAsIndex()",
                    line: "9"
                } ));
                t.getFixture().testULongAsIndex();
            },
            testLongAsIndex: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLongAsIndex()",
                    line: "22"
                } ));
                t.getFixture().testLongAsIndex();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700",
                    file: "Batch3\\BridgeIssues\\1700\\N1700.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1702", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702)],
        statics: {
            testFieldWithItemName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1702, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestFieldWithItemName()",
                    line: "63"
                } ));
                t.getFixture().testFieldWithItemName();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702",
                    file: "Batch3\\BridgeIssues\\1700\\N1702.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1704", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704)],
        statics: {
            testBaseMethodWithOptionalParams: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1704, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestBaseMethodWithOptionalParams()",
                    line: "28"
                } ));
                t.getFixture().testBaseMethodWithOptionalParams();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704",
                    file: "Batch3\\BridgeIssues\\1700\\N1704.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1709", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1709)],
        statics: {
            testGenericMethodWithoutTypeArgument: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1709).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1709, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericMethodWithoutTypeArgument()",
                    line: "17"
                } ));
                t.getFixture().testGenericMethodWithoutTypeArgument();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1709",
                    file: "Batch3\\BridgeIssues\\1700\\N1709.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1711", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1711)],
        statics: {
            testImplicitOperatorOrder: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1711).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1711, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestImplicitOperatorOrder()",
                    line: "40"
                } ));
                t.getFixture().testImplicitOperatorOrder();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1711",
                    file: "Batch3\\BridgeIssues\\1700\\N1711.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712)],
        statics: {
            testCollectionAddWithExtensionMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCollectionAddWithExtensionMethod()",
                    line: "64"
                } ));
                t.getFixture().testCollectionAddWithExtensionMethod();
            },
            testCollectionWithAdd_BeforeCS6: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCollectionWithAdd_BeforeCS6()",
                    line: "76"
                } ));
                t.getFixture().testCollectionWithAdd_BeforeCS6();
            },
            testCollectionWithAdd_CS6: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCollectionWithAdd_CS6()",
                    line: "85"
                } ));
                t.getFixture().testCollectionWithAdd_CS6();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712",
                    file: "Batch3\\BridgeIssues\\1700\\N1712.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713)],
        statics: {
            testOverloadResolution: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOverloadResolution()",
                    line: "32"
                } ));
                t.getFixture().testOverloadResolution();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713",
                    file: "Batch3\\BridgeIssues\\1700\\N1713.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN)],
        statics: {
            testOverloadResolutionMSDN1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOverloadResolutionMSDN1()",
                    line: "60"
                } ));
                t.getFixture().testOverloadResolutionMSDN1();
            },
            testOverloadResolutionMSDN2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOverloadResolutionMSDN2()",
                    line: "93"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.testOverloadResolutionMSDN2();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN",
                    file: "Batch3\\BridgeIssues\\1700\\N1713.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1715", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715)],
        statics: {
            testCollectionInitializerWithAdd: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1715, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCollectionInitializerWithAdd()",
                    line: "35"
                } ));
                t.getFixture().testCollectionInitializerWithAdd();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715",
                    file: "Batch3\\BridgeIssues\\1700\\N1715.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1721", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1721)],
        statics: {
            testDelegateEquals: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1721).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1721, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDelegateEquals()",
                    line: "19"
                } ));
                t.getFixture().testDelegateEquals();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1721",
                    file: "Batch3\\BridgeIssues\\1700\\N1721.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722)],
        statics: {
            testDelegateCreationOfGenericMethods: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDelegateCreationOfGenericMethods()",
                    line: "27"
                } ));
                t.getFixture().testDelegateCreationOfGenericMethods();
            },
            testDelegateCreationOfGenericMethodsWithLambda: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDelegateCreationOfGenericMethodsWithLambda()",
                    line: "34"
                } ));
                t.getFixture().testDelegateCreationOfGenericMethodsWithLambda();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722",
                    file: "Batch3\\BridgeIssues\\1700\\N1722.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735)],
        statics: {
            testTryGetValueOutDelegateParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTryGetValueOutDelegateParameter()",
                    line: "14"
                } ));
                t.getFixture().testTryGetValueOutDelegateParameter();
            },
            testOutDelegateParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOutDelegateParameter()",
                    line: "30"
                } ));
                t.getFixture().testOutDelegateParameter();
            },
            testReferenceDelegateParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestReferenceDelegateParameter()",
                    line: "45"
                } ));
                t.getFixture().testReferenceDelegateParameter();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735",
                    file: "Batch3\\BridgeIssues\\1700\\N1735.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1737", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1737)],
        statics: {
            testGetClassName_FullName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1737).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1737, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGetClassName_FullName()",
                    line: "17"
                } ));
                t.getFixture().testGetClassName_FullName();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1737",
                    file: "Batch3\\BridgeIssues\\1700\\N1737.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1741", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1741)],
        statics: {
            testNumbersHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1741).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1741, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNumbersHashCode()",
                    line: "9"
                } ));
                t.getFixture().testNumbersHashCode();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1741",
                    file: "Batch3\\BridgeIssues\\1700\\N1741.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1744", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1744)],
        statics: {
            testMethodInvocationWithParams: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1744).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1744, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestMethodInvocationWithParams()",
                    line: "9"
                } ));
                t.getFixture().testMethodInvocationWithParams();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1744",
                    file: "Batch3\\BridgeIssues\\1700\\N1744.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1754", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1754)],
        statics: {
            testAllUpperCaseNames: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1754).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1754, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAllUpperCaseNames()",
                    line: "73"
                } ));
                t.getFixture().testAllUpperCaseNames();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1754",
                    file: "Batch3\\BridgeIssues\\1700\\N1754.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1767", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1767)],
        statics: {
            testBaseIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1767).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1767, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestBaseIndexer()",
                    line: "44"
                } ));
                t.getFixture().testBaseIndexer();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1767",
                    file: "Batch3\\BridgeIssues\\1700\\N1767.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768)],
        statics: {
            testImplicitImplementation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestImplicitImplementation()",
                    line: "226"
                } ));
                t.getFixture().testImplicitImplementation();
            },
            testExplicitImplementation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestExplicitImplementation()",
                    line: "235"
                } ));
                t.getFixture().testExplicitImplementation();
            },
            testListImplicitImplementation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestListImplicitImplementation()",
                    line: "249"
                } ));
                t.getFixture().testListImplicitImplementation();
            },
            testListExplicitImplementation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestListExplicitImplementation()",
                    line: "266"
                } ));
                t.getFixture().testListExplicitImplementation();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768",
                    file: "Batch3\\BridgeIssues\\1700\\N1768.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1775", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1775)],
        statics: {
            testSumForEmpty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1775).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1775, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSumForEmpty()",
                    line: "13"
                } ));
                t.getFixture().testSumForEmpty();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1775",
                    file: "Batch3\\BridgeIssues\\1700\\N1775.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1776", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1776)],
        statics: {
            testTupleHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1776).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1776, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTupleHashCode()",
                    line: "12"
                } ));
                t.getFixture().testTupleHashCode();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1776",
                    file: "Batch3\\BridgeIssues\\1700\\N1776.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1787", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1787)],
        statics: {
            testNamedParams: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1787).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1787, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNamedParams()",
                    line: "40"
                } ));
                t.getFixture().testNamedParams();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1787",
                    file: "Batch3\\BridgeIssues\\1700\\N1787.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1802", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1802)],
        statics: {
            testReservedWordsAsMethodName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1802).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1802, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestReservedWordsAsMethodName()",
                    line: "394"
                } ));
                t.getFixture().testReservedWordsAsMethodName();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1802",
                    file: "Batch3\\BridgeIssues\\1800\\N1802.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1803", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1803)],
        statics: {
            testCollectionInitializerWithStaticMember: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1803).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1803, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCollectionInitializerWithStaticMember()",
                    line: "41"
                } ));
                t.getFixture().testCollectionInitializerWithStaticMember();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1803",
                    file: "Batch3\\BridgeIssues\\1800\\N1803.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1804", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1804)],
        statics: {
            testStructClone: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1804).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1804, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStructClone()",
                    line: "25"
                } ));
                t.getFixture().testStructClone();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1804",
                    file: "Batch3\\BridgeIssues\\1800\\N1804.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1810", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1810)],
        statics: {
            testInterfaceIndexersAndCopyToAndIsReadOnly: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1810).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1810, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInterfaceIndexersAndCopyToAndIsReadOnly()",
                    line: "15"
                } ));
                t.getFixture().testInterfaceIndexersAndCopyToAndIsReadOnly();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1810",
                    file: "Batch3\\BridgeIssues\\1800\\N1810.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1812", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1812)],
        statics: {
            testDoubleConversion: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1812).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1812, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDoubleConversion()",
                    line: "39"
                } ));
                t.getFixture().testDoubleConversion();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1812",
                    file: "Batch3\\BridgeIssues\\1800\\N1812.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1813", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1813)],
        statics: {
            testAddStaticMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1813).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1813, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAddStaticMethod()",
                    line: "21"
                } ));
                t.getFixture().testAddStaticMethod();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1813",
                    file: "Batch3\\BridgeIssues\\1800\\N1813.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1814", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1814)],
        statics: {
            testNamespaceConflictResolution: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1814).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1814, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNamespaceConflictResolution()",
                    line: "30"
                } ));
                t.getFixture().testNamespaceConflictResolution();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1814",
                    file: "Batch3\\BridgeIssues\\1800\\N1814.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1819", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1819)],
        statics: {
            testObjectLiteralWithInheritance: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1819).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1819, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestObjectLiteralWithInheritance()",
                    line: "26"
                } ));
                t.getFixture().testObjectLiteralWithInheritance();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1819",
                    file: "Batch3\\BridgeIssues\\1800\\N1819.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821)],
        statics: {
            testInterfaceMember1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInterfaceMember1()",
                    line: "81"
                } ));
                t.getFixture().testInterfaceMember1();
            },
            testInterfaceMember2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInterfaceMember2()",
                    line: "89"
                } ));
                t.getFixture().testInterfaceMember2();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821",
                    file: "Batch3\\BridgeIssues\\1800\\N1821.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1832", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1832)],
        statics: {
            testInitWithTempVars: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1832).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1832, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInitWithTempVars()",
                    line: "16"
                } ));
                t.getFixture().testInitWithTempVars();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1832",
                    file: "Batch3\\BridgeIssues\\1800\\N1832.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1833", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1833)],
        statics: {
            testInheritedPropertyInLiteral: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1833).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1833, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInheritedPropertyInLiteral()",
                    line: "20"
                } ));
                t.getFixture().testInheritedPropertyInLiteral();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1833",
                    file: "Batch3\\BridgeIssues\\1800\\N1833.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1834", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1834)],
        statics: {
            testIgnoreGenericInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1834).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1834, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIgnoreGenericInterface()",
                    line: "29"
                } ));
                t.getFixture().testIgnoreGenericInterface();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1834",
                    file: "Batch3\\BridgeIssues\\1800\\N1834.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1835", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1835)],
        statics: {
            testGenericMethodWithAnonTypeArg: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1835).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1835, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericMethodWithAnonTypeArg()",
                    line: "14"
                } ));
                t.getFixture().testGenericMethodWithAnonTypeArg();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1835",
                    file: "Batch3\\BridgeIssues\\1800\\N1835.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1842", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1842)],
        statics: {
            testTypeOfConversion: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1842).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1842, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTypeOfConversion()",
                    line: "25"
                } ));
                t.getFixture().testTypeOfConversion();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1842",
                    file: "Batch3\\BridgeIssues\\1800\\N1842.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1845", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1845)],
        statics: {
            testCtorMemberName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1845).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1845, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCtorMemberName()",
                    line: "56"
                } ));
                t.getFixture().testCtorMemberName();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1845",
                    file: "Batch3\\BridgeIssues\\1800\\N1845.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1846", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1846)],
        statics: {
            testImplicitOperatorInForeachLoop: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1846).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1846, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestImplicitOperatorInForeachLoop()",
                    line: "22"
                } ));
                t.getFixture().testImplicitOperatorInForeachLoop();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1846",
                    file: "Batch3\\BridgeIssues\\1800\\N1846.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1847", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1847)],
        statics: {
            testActivatorCreateInstanceCallProtectedConstructor: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1847).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1847, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestActivatorCreateInstanceCallProtectedConstructor()",
                    line: "27"
                } ));
                t.getFixture().testActivatorCreateInstanceCallProtectedConstructor();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1847",
                    file: "Batch3\\BridgeIssues\\1800\\N1847.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1848", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1848)],
        statics: {
            testExternalInterfaceProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1848).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1848, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestExternalInterfaceProperty()",
                    line: "29"
                } ));
                t.getFixture().testExternalInterfaceProperty();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1848",
                    file: "Batch3\\BridgeIssues\\1800\\N1848.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1850", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1850)],
        statics: {
            testImplicitInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1850).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1850, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestImplicitInterface()",
                    line: "25"
                } ));
                t.getFixture().testImplicitInterface();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1850",
                    file: "Batch3\\BridgeIssues\\1800\\N1850.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1852", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852)],
        statics: {
            testCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1852, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCase()",
                    line: "39"
                } ));
                t.getFixture().testCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852",
                    file: "Batch3\\BridgeIssues\\1800\\N1852.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1853", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1853)],
        statics: {
            testContainsUseEquals: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1853).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1853, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestContainsUseEquals()",
                    line: "24"
                } ));
                t.getFixture().testContainsUseEquals();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1853",
                    file: "Batch3\\BridgeIssues\\1800\\N1853.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1854", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1854)],
        statics: {
            testCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1854).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1854, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCase()",
                    line: "56"
                } ));
                t.getFixture().testCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1854",
                    file: "Batch3\\BridgeIssues\\1800\\N1854.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1856", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1856)],
        statics: {
            testCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1856).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1856, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCase()",
                    line: "68"
                } ));
                t.getFixture().testCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1856",
                    file: "Batch3\\BridgeIssues\\1800\\N1856.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1863", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1863)],
        statics: {
            testTrueFalseOperators: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1863).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1863, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTrueFalseOperators()",
                    line: "77"
                } ));
                t.getFixture().testTrueFalseOperators();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1863",
                    file: "Batch3\\BridgeIssues\\1800\\N1863.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1865", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1865)],
        statics: {
            testObjectLiteralInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1865).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1865, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestObjectLiteralInterface()",
                    line: "40"
                } ));
                t.getFixture().testObjectLiteralInterface();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1865",
                    file: "Batch3\\BridgeIssues\\1800\\N1865.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1869", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869)],
        statics: {
            testGenericTypeDefinition: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1869, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericTypeDefinition()",
                    line: "17"
                } ));
                t.getFixture().testGenericTypeDefinition();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869",
                    file: "Batch3\\BridgeIssues\\1800\\N1869.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1871", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1871)],
        statics: {
            testErrorCommentNotThrowCompilerException: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1871).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1871, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestErrorCommentNotThrowCompilerException()",
                    line: "21"
                } ));
                t.getFixture().testErrorCommentNotThrowCompilerException();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1871",
                    file: "Batch3\\BridgeIssues\\1800\\N1871.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1872", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1872)],
        statics: {
            testAsyncWithAnonymousDelegate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1872).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1872, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAsyncWithAnonymousDelegate()",
                    line: "11"
                } ));
                t.getFixture().testAsyncWithAnonymousDelegate();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1872",
                    file: "Batch3\\BridgeIssues\\1800\\N1872.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1875", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1875)],
        statics: {
            testDictionaryWithLongVariableAsKey: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1875).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1875, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDictionaryWithLongVariableAsKey()",
                    line: "15"
                } ));
                t.getFixture().testDictionaryWithLongVariableAsKey();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1875",
                    file: "Batch3\\BridgeIssues\\1800\\N1875.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1878", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1878)],
        statics: {
            testSumDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1878).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1878, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSumDefaultValue()",
                    line: "17"
                } ));
                t.getFixture().testSumDefaultValue();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1878",
                    file: "Batch3\\BridgeIssues\\1800\\N1878.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1880", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1880)],
        statics: {
            testDefaultValuesWithTemplates: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1880).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1880, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDefaultValuesWithTemplates()",
                    line: "18"
                } ));
                t.getFixture().testDefaultValuesWithTemplates();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1880",
                    file: "Batch3\\BridgeIssues\\1800\\N1880.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882)],
        statics: {
            testGenericClassCastForArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericClassCastForArray()",
                    line: "48"
                } ));
                t.getFixture().testGenericClassCastForArray();
            },
            testGenericClassCastForList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericClassCastForList()",
                    line: "72"
                } ));
                t.getFixture().testGenericClassCastForList();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882",
                    file: "Batch3\\BridgeIssues\\1800\\N1882.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1884", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1884)],
        statics: {
            testCollectionInitilizers: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1884).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1884, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCollectionInitilizers()",
                    line: "41"
                } ));
                t.getFixture().testCollectionInitilizers();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1884",
                    file: "Batch3\\BridgeIssues\\1800\\N1884.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1886", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1886)],
        statics: {
            testCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1886).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1886, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCase()",
                    line: "10"
                } ));
                t.getFixture().testCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1886",
                    file: "Batch3\\BridgeIssues\\1800\\N1886.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1892", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1892)],
        statics: {
            testCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1892).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1892, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCase()",
                    line: "83"
                } ));
                t.getFixture().testCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1892",
                    file: "Batch3\\BridgeIssues\\1800\\N1892.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1896", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1896)],
        statics: {
            testHexStringToInt: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1896).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1896, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestHexStringToInt()",
                    line: "10"
                } ));
                t.getFixture().testHexStringToInt();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1896",
                    file: "Batch3\\BridgeIssues\\1800\\N1896.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1897", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1897)],
        statics: {
            testNestedNotEscapedBracketsInRegex: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1897).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1897, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNestedNotEscapedBracketsInRegex()",
                    line: "10"
                } ));
                t.getFixture().testNestedNotEscapedBracketsInRegex();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1897",
                    file: "Batch3\\BridgeIssues\\1800\\N1897.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1899", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1899)],
        statics: {
            testPropertyAndMethodNameConflict: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1899).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1899, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPropertyAndMethodNameConflict()",
                    line: "191"
                } ));
                t.getFixture().testPropertyAndMethodNameConflict();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1899",
                    file: "Batch3\\BridgeIssues\\1800\\N1899.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1900", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1900)],
        statics: {
            testOutParamInMetadata: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1900).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1900, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOutParamInMetadata()",
                    line: "40"
                } ));
                t.getFixture().testOutParamInMetadata();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1900",
                    file: "Batch3\\BridgeIssues\\1900\\N1900.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1904", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1904)],
        statics: {
            testDateTimeConstructorConvertsValueToMs: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1904).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1904, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDateTimeConstructorConvertsValueToMs()",
                    line: "10"
                } ));
                t.getFixture().testDateTimeConstructorConvertsValueToMs();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1904",
                    file: "Batch3\\BridgeIssues\\1900\\N1904.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1906", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1906)],
        statics: {
            testIsOperatorInaccuracy: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1906).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1906, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIsOperatorInaccuracy()",
                    line: "9"
                } ));
                t.getFixture().testIsOperatorInaccuracy();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1906",
                    file: "Batch3\\BridgeIssues\\1900\\N1906.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1909", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1909)],
        statics: {
            testActivatorEnumCreation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1909).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1909, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestActivatorEnumCreation()",
                    line: "15"
                } ));
                t.getFixture().testActivatorEnumCreation();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1909",
                    file: "Batch3\\BridgeIssues\\1900\\N1909.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1910", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1910)],
        statics: {
            testGenericTypeCasting: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1910).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1910, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericTypeCasting()",
                    line: "27"
                } ));
                t.getFixture().testGenericTypeCasting();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1910",
                    file: "Batch3\\BridgeIssues\\1900\\N1910.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911)],
        statics: {
            testExtensionMethodOfBaseClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestExtensionMethodOfBaseClass()",
                    line: "36"
                } ));
                t.getFixture().testExtensionMethodOfBaseClass();
            },
            testExtensionMethodOfBaseClassLinqCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestExtensionMethodOfBaseClassLinqCase()",
                    line: "44"
                } ));
                t.getFixture().testExtensionMethodOfBaseClassLinqCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911",
                    file: "Batch3\\BridgeIssues\\1900\\N1911.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1912", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1912)],
        statics: {
            testExtentionMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1912).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1912, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestExtentionMethod()",
                    line: "9"
                } ));
                t.getFixture().testExtentionMethod();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1912",
                    file: "Batch3\\BridgeIssues\\1900\\N1912.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1913", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1913)],
        statics: {
            testIsSubclassOfTemplate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1913).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1913, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIsSubclassOfTemplate()",
                    line: "10"
                } ));
                t.getFixture().testIsSubclassOfTemplate();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1913",
                    file: "Batch3\\BridgeIssues\\1900\\N1913.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1914", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1914)],
        statics: {
            testCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1914).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1914, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCase()",
                    line: "11"
                } ));
                t.getFixture().testCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1914",
                    file: "Batch3\\BridgeIssues\\1900\\N1914.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1915", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1915)],
        statics: {
            testImplementingExternalInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1915).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1915, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestImplementingExternalInterface()",
                    line: "30"
                } ));
                t.getFixture().testImplementingExternalInterface();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1915",
                    file: "Batch3\\BridgeIssues\\1900\\N1915.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1920", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1920)],
        statics: {
            testGeneratedStringConcatenation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1920).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1920, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGeneratedStringConcatenation()",
                    line: "9"
                } ));
                t.getFixture().testGeneratedStringConcatenation();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1920",
                    file: "Batch3\\BridgeIssues\\1900\\N1920.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1933", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1933)],
        statics: {
            testRounding: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1933).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1933, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRounding()",
                    line: "10"
                } ));
                t.getFixture().testRounding();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1933",
                    file: "Batch3\\BridgeIssues\\1900\\N1933.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1934", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1934)],
        statics: {
            testEscapeSequencesInRegex: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1934).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1934, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEscapeSequencesInRegex()",
                    line: "10"
                } ));
                t.getFixture().testEscapeSequencesInRegex();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1934",
                    file: "Batch3\\BridgeIssues\\1900\\N1934.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1938", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1938)],
        statics: {
            testIsArrayTemplate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1938).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1938, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIsArrayTemplate()",
                    line: "10"
                } ));
                t.getFixture().testIsArrayTemplate();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1938",
                    file: "Batch3\\BridgeIssues\\1900\\N1938.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1948", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1948)],
        statics: {
            testCollectionLikeInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1948).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1948, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCollectionLikeInitialization()",
                    line: "40"
                } ));
                t.getFixture().testCollectionLikeInitialization();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1948",
                    file: "Batch3\\BridgeIssues\\1900\\N1948.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1951", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1951)],
        statics: {
            testBindFunctionNoMemoryLeaks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1951).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1951, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestBindFunctionNoMemoryLeaks()",
                    line: "30"
                } ));
                t.getFixture().testBindFunctionNoMemoryLeaks();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1951",
                    file: "Batch3\\BridgeIssues\\1900\\N1951.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1955", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1955)],
        statics: {
            testScriptAttributeForExternMethods: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1955).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1955, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestScriptAttributeForExternMethods()",
                    line: "26"
                } ));
                t.getFixture().testScriptAttributeForExternMethods();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1955",
                    file: "Batch3\\BridgeIssues\\1900\\N1955.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1964", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1964)],
        statics: {
            testStringIsNullOrWhiteSpaceCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1964).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1964, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStringIsNullOrWhiteSpaceCase()",
                    line: "27"
                } ));
                t.getFixture().testStringIsNullOrWhiteSpaceCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1964",
                    file: "Batch3\\BridgeIssues\\1900\\N1964.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1965", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1965)],
        statics: {
            testIsClassForNumberTypes: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1965).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1965, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIsClassForNumberTypes()",
                    line: "10"
                } ));
                t.getFixture().testIsClassForNumberTypes();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1965",
                    file: "Batch3\\BridgeIssues\\1900\\N1965.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1966", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1966)],
        statics: {
            testDoubleInfinityGetHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1966).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1966, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDoubleInfinityGetHashCode()",
                    line: "10"
                } ));
                t.getFixture().testDoubleInfinityGetHashCode();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1966",
                    file: "Batch3\\BridgeIssues\\1900\\N1966.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1968", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1968)],
        statics: {
            testGenericNullable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1968).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1968, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericNullable()",
                    line: "10"
                } ));
                t.getFixture().testGenericNullable();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1968",
                    file: "Batch3\\BridgeIssues\\1900\\N1968.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1969", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1969)],
        statics: {
            testStaticConstructorsForBaseClasses: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1969).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1969, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStaticConstructorsForBaseClasses()",
                    line: "40"
                } ));
                t.getFixture().testStaticConstructorsForBaseClasses();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1969",
                    file: "Batch3\\BridgeIssues\\1900\\N1969.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1970", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1970)],
        statics: {
            testRunClassConstructor: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1970).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1970, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRunClassConstructor()",
                    line: "21"
                } ));
                t.getFixture().testRunClassConstructor();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1970",
                    file: "Batch3\\BridgeIssues\\1900\\N1970.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1996", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1996)],
        statics: {
            testTemplateForGetEnumerator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1996).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1996, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTemplateForGetEnumerator()",
                    line: "24"
                } ));
                t.getFixture().testTemplateForGetEnumerator();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1996",
                    file: "Batch3\\BridgeIssues\\1900\\N1996.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2003", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003)],
        statics: {
            testThisIsBindInTemplatedMemberMethods: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2003, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestThisIsBindInTemplatedMemberMethods()",
                    line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003.testThisIsBindInTemplatedMemberMethods();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003",
                    file: "Batch3\\BridgeIssues\\2000\\N2003.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2011", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2011)],
        statics: {
            testOverloadSelectionWhenNullCoalescingOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2011).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2011, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestOverloadSelectionWhenNullCoalescingOperator()",
                    line: "59"
                } ));
                t.getFixture().testOverloadSelectionWhenNullCoalescingOperator();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2011",
                    file: "Batch3\\BridgeIssues\\2000\\N2011.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2013", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2013)],
        statics: {
            testSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2013).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2013, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod()",
                    line: "34"
                } ));
                t.getFixture().testSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2013",
                    file: "Batch3\\BridgeIssues\\2000\\N2013.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2019", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2019)],
        statics: {
            testLambdaExpressionsInGenericMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2019).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2019, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLambdaExpressionsInGenericMethod()",
                    line: "49"
                } ));
                t.getFixture().testLambdaExpressionsInGenericMethod();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2019",
                    file: "Batch3\\BridgeIssues\\2000\\N2019.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2024", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024)],
        statics: {
            testAccessEnumInAnotherClassUsingStatic: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2024, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAccessEnumInAnotherClassUsingStatic()",
                    line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024.testAccessEnumInAnotherClassUsingStatic();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024",
                    file: "Batch3\\BridgeIssues\\2000\\N2024.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2027", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027)],
        statics: {
            testToStringForEnumWhenConcatWithString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2027, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestToStringForEnumWhenConcatWithString()",
                    line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027.testToStringForEnumWhenConcatWithString();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027",
                    file: "Batch3\\BridgeIssues\\2000\\N2027.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2033", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033)],
        statics: {
            testClassEnumPropertiesInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2033, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestClassEnumPropertiesInitialization()",
                    line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033.testClassEnumPropertiesInitialization();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033",
                    file: "Batch3\\BridgeIssues\\2000\\N2033.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2038", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038)],
        statics: {
            testIncrementAssignmentInStructs: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2038, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIncrementAssignmentInStructs()",
                    line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038.testIncrementAssignmentInStructs();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038",
                    file: "Batch3\\BridgeIssues\\2000\\N2038.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2039", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039)],
        statics: {
            testNaNToString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2039, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNaNToString()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039.testNaNToString();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039",
                    file: "Batch3\\BridgeIssues\\2000\\N2039.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2042", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042)],
        statics: {
            testAppDomain: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2042, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAppDomain()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042.testAppDomain();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042",
                    file: "Batch3\\BridgeIssues\\2000\\N2042.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2045", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045)],
        statics: {
            testDoubleEscapingInterpolation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2045, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDoubleEscapingInterpolation()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045.testDoubleEscapingInterpolation();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045",
                    file: "Batch3\\BridgeIssues\\2000\\N2045.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2046", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046)],
        statics: {
            testSafeNavigationOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2046, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSafeNavigationOperator()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046.testSafeNavigationOperator();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046",
                    file: "Batch3\\BridgeIssues\\2000\\N2046.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2048", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048)],
        statics: {
            testUnaryOperatorBlockCompilationError: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2048, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUnaryOperatorBlockCompilationError()",
                    line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048.testUnaryOperatorBlockCompilationError();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048",
                    file: "Batch3\\BridgeIssues\\2000\\N2048.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050)],
        statics: {
            testIList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIList()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050.testIList();
            },
            testIDictionary: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIDictionary()",
                    line: "41"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050.testIDictionary();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050",
                    file: "Batch3\\BridgeIssues\\2000\\N2050.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2051", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051)],
        statics: {
            testGetElementType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2051, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGetElementType()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051.testGetElementType();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051",
                    file: "Batch3\\BridgeIssues\\2000\\N2051.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052)],
        statics: {
            testArrayCreateInstance: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestArrayCreateInstance()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052.testArrayCreateInstance();
            },
            testArrayCreateInstanceShouldThrow: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestArrayCreateInstanceShouldThrow()",
                    line: "89"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052.testArrayCreateInstanceShouldThrow();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052",
                    file: "Batch3\\BridgeIssues\\2000\\N2052.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056)],
        statics: {
            testArrayCasting: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestArrayCasting()",
                    line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056.testArrayCasting();
            },
            testArrayTypeName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestArrayTypeName()",
                    line: "78"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056.testArrayTypeName();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056",
                    file: "Batch3\\BridgeIssues\\2000\\N2056.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2067", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067)],
        statics: {
            testGetGenericTypeDefinition: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2067, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGetGenericTypeDefinition()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067.testGetGenericTypeDefinition();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067",
                    file: "Batch3\\BridgeIssues\\2000\\N2067.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2068", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068)],
        statics: {
            testGetGenericTypeDefinition: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2068, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGetGenericTypeDefinition()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068.testGetGenericTypeDefinition();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068",
                    file: "Batch3\\BridgeIssues\\2000\\N2068.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2073", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073)],
        statics: {
            testUserDefinedWithStringConcat: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2073, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUserDefinedWithStringConcat()",
                    line: "34"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073.testUserDefinedWithStringConcat();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073",
                    file: "Batch3\\BridgeIssues\\2000\\N2073.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2076", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076)],
        statics: {
            testLinqGlobalPollution: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2076, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLinqGlobalPollution()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076.testLinqGlobalPollution();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076",
                    file: "Batch3\\BridgeIssues\\2000\\N2076.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2079", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079)],
        statics: {
            testQueryAsArgument: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2079, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestQueryAsArgument()",
                    line: "42"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079.testQueryAsArgument();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079",
                    file: "Batch3\\BridgeIssues\\2000\\N2079.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080)],
        statics: {
            testAssigmentOrWithProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssigmentOrWithProperty()",
                    line: "24"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080.testAssigmentOrWithProperty();
            },
            testAssigmentOrWithPropertyChangingCounter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAssigmentOrWithPropertyChangingCounter()",
                    line: "64"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080.testAssigmentOrWithPropertyChangingCounter();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080",
                    file: "Batch3\\BridgeIssues\\2000\\N2080.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2081", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081)],
        statics: {
            testReturnFromCatch: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2081, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestReturnFromCatch()",
                    line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081.testReturnFromCatch();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081",
                    file: "Batch3\\BridgeIssues\\2000\\N2081.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2088", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088)],
        statics: {
            testObjectLiteralReflection: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2088, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestObjectLiteralReflection()",
                    line: "40"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088.testObjectLiteralReflection();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088",
                    file: "Batch3\\BridgeIssues\\2000\\N2088.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2092", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092)],
        statics: {
            testIgnoreGenericForDelegate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2092, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIgnoreGenericForDelegate()",
                    line: "24"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092.testIgnoreGenericForDelegate();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092",
                    file: "Batch3\\BridgeIssues\\2000\\N2092.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2094", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094)],
        statics: {
            testGenericMethodAsDelegate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2094, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericMethodAsDelegate()",
                    line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094.testGenericMethodAsDelegate();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094",
                    file: "Batch3\\BridgeIssues\\2000\\N2094.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2106", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106)],
        statics: {
            testGenericMethodInObjectLiteral: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2106, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericMethodInObjectLiteral()",
                    line: "25"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106.testGenericMethodInObjectLiteral();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106",
                    file: "Batch3\\BridgeIssues\\2100\\N2106.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114)],
        statics: {
            testNonStandardNames: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNonStandardNames()",
                    line: "104"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114.testNonStandardNames();
            },
            testFieldTemplates: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestFieldTemplates()",
                    line: "126"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114.testFieldTemplates();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114",
                    file: "Batch3\\BridgeIssues\\2100\\N2114.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2121", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121)],
        statics: {
            testLongAsDictionaryKey: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2121, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLongAsDictionaryKey()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121.testLongAsDictionaryKey();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121",
                    file: "Batch3\\BridgeIssues\\2100\\N2121.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2127", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127)],
        statics: {
            testNumberFormatInfoNaNSymbol: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2127, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNumberFormatInfoNaNSymbol()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127.testNumberFormatInfoNaNSymbol();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127",
                    file: "Batch3\\BridgeIssues\\2100\\N2127.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2135", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135)],
        statics: {
            testNestedTypesNames: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2135, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNestedTypesNames()",
                    line: "57"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135.testNestedTypesNames();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135",
                    file: "Batch3\\BridgeIssues\\2100\\N2135.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2137", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137)],
        statics: {
            testPropertiesWithNonPrimitiveInitializers: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2137, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPropertiesWithNonPrimitiveInitializers()",
                    line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137.testPropertiesWithNonPrimitiveInitializers();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137",
                    file: "Batch3\\BridgeIssues\\2100\\N2137.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2138", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138)],
        statics: {
            testGenericInterfaceIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2138, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericInterfaceIndexer()",
                    line: "119"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138.testGenericInterfaceIndexer();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138",
                    file: "Batch3\\BridgeIssues\\2100\\N2138.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2141", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141)],
        statics: {
            testExternalObjectLiteral: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2141, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestExternalObjectLiteral()",
                    line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141.testExternalObjectLiteral();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141",
                    file: "Batch3\\BridgeIssues\\2100\\N2141.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2143", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143)],
        statics: {
            testIgnoreGenericForNestedClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2143, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIgnoreGenericForNestedClass()",
                    line: "43"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143.testIgnoreGenericForNestedClass();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143",
                    file: "Batch3\\BridgeIssues\\2100\\N2143.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2146", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146)],
        statics: {
            testCharDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2146, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCharDefaultValue()",
                    line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146.testCharDefaultValue();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146",
                    file: "Batch3\\BridgeIssues\\2100\\N2146.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2147", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147)],
        statics: {
            testLinqExcept: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2147, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLinqExcept()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147.testLinqExcept();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147",
                    file: "Batch3\\BridgeIssues\\2100\\N2147.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2156", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156)],
        statics: {
            testLinqIntersect: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2156, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLinqIntersect()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156.testLinqIntersect();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156",
                    file: "Batch3\\BridgeIssues\\2100\\N2156.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2157", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157)],
        statics: {
            testCreatingGenericInstanceWithInitializer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2157, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCreatingGenericInstanceWithInitializer()",
                    line: "47"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157.testCreatingGenericInstanceWithInitializer();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157",
                    file: "Batch3\\BridgeIssues\\2100\\N2157.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2159", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159)],
        statics: {
            testBaseTypeForGenericDefinition: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2159, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestBaseTypeForGenericDefinition()",
                    line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159.testBaseTypeForGenericDefinition();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159",
                    file: "Batch3\\BridgeIssues\\2100\\N2160.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2160", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160)],
        statics: {
            testBaseTypeForGenericDefinition: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2160, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestBaseTypeForGenericDefinition()",
                    line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160.testBaseTypeForGenericDefinition();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160",
                    file: "Batch3\\BridgeIssues\\2100\\N2159.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2163", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163)],
        statics: {
            testDecimalToFormat: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2163, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDecimalToFormat()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163.testDecimalToFormat();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163",
                    file: "Batch3\\BridgeIssues\\2100\\N2163.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2167", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167)],
        statics: {
            testMerge: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2167, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestMerge()",
                    line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167.testMerge();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167",
                    file: "Batch3\\BridgeIssues\\2100\\N2167.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2174", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174)],
        statics: {
            testGenericComparerDefault: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2174, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericComparerDefault()",
                    line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174.testGenericComparerDefault();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174",
                    file: "Batch3\\BridgeIssues\\2100\\N2174.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2176", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176)],
        statics: {
            testExternalObjectLiteralConstructorMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2176, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestExternalObjectLiteralConstructorMode()",
                    line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176.testExternalObjectLiteralConstructorMode();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176",
                    file: "Batch3\\BridgeIssues\\2100\\N2176.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2181", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181)],
        statics: {
            testStringPadForEmptyString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2181, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStringPadForEmptyString()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181.testStringPadForEmptyString();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181",
                    file: "Batch3\\BridgeIssues\\2100\\N2181.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2186", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186)],
        statics: {
            testConsoleWriteLineParameterless: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2186, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConsoleWriteLineParameterless()",
                    line: "36"
                } ));
                try {
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186.testConsoleWriteLineParameterless();
                }
                finally {
                    t.tearDown();
                }
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186",
                    file: "Batch3\\BridgeIssues\\2100\\N2186.cs"
                } );
            }
            return this.context;
        },
        setUp: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186.clearOutput();
        },
        tearDown: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186.resetOutput();
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2189", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189)],
        statics: {
            testInheritanceFromExternalAndBaseCtor: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2189, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInheritanceFromExternalAndBaseCtor()",
                    line: "44"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189.testInheritanceFromExternalAndBaseCtor();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189",
                    file: "Batch3\\BridgeIssues\\2100\\N2189.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2190", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190)],
        statics: {
            testInternalsVisibleTo: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2190, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInternalsVisibleTo()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190.testInternalsVisibleTo();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190",
                    file: "Batch3\\BridgeIssues\\2100\\N2190.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2192", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192)],
        statics: {
            testIntersection: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2192, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIntersection()",
                    line: "48"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192.testIntersection();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192",
                    file: "Batch3\\BridgeIssues\\2100\\N2192.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2195", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195)],
        statics: {
            testGenericInvocationInTryBlock: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2195, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericInvocationInTryBlock()",
                    line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195.testGenericInvocationInTryBlock();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195",
                    file: "Batch3\\BridgeIssues\\2100\\N2195.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2199", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199)],
        statics: {
            testTypeParameterName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2199, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTypeParameterName()",
                    line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199.testTypeParameterName();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199",
                    file: "Batch3\\BridgeIssues\\2100\\N2199.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2200", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200)],
        statics: {
            testSequence: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2200, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSequence()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200.testSequence();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200",
                    file: "Batch3\\BridgeIssues\\2200\\N2200.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2203", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203)],
        statics: {
            testLocalVarsRenaming: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2203, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLocalVarsRenaming()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203.testLocalVarsRenaming();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203",
                    file: "Batch3\\BridgeIssues\\2200\\N2203.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2204", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204)],
        statics: {
            testDecimalToString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2204, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDecimalToString()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204.testDecimalToString();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204",
                    file: "Batch3\\BridgeIssues\\2200\\N2204.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2207", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207)],
        statics: {
            testDefaultOptionalParam: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2207, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDefaultOptionalParam()",
                    line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207.testDefaultOptionalParam();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207",
                    file: "Batch3\\BridgeIssues\\2200\\N2207.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2210", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210)],
        statics: {
            testTypeOrdering: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2210, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTypeOrdering()",
                    line: "55"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210.testTypeOrdering();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210",
                    file: "Batch3\\BridgeIssues\\2200\\N2210.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2211", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211)],
        statics: {
            testConditionAccess: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2211, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConditionAccess()",
                    line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211.testConditionAccess();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211",
                    file: "Batch3\\BridgeIssues\\2200\\N2211.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2212", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212)],
        statics: {
            testDelegateBindCache: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2212, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDelegateBindCache()",
                    line: "38"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212.testDelegateBindCache();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212",
                    file: "Batch3\\BridgeIssues\\2200\\N2212.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2213", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213)],
        statics: {
            testCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2213, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCase()",
                    line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213.testCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213",
                    file: "Batch3\\BridgeIssues\\2200\\N2213.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2214", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214)],
        statics: {
            testCheckedULong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2214, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCheckedULong()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214.testCheckedULong();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214",
                    file: "Batch3\\BridgeIssues\\2200\\N2214.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2216", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216)],
        statics: {
            testExternalInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2216, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestExternalInterface()",
                    line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216.testExternalInterface();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216",
                    file: "Batch3\\BridgeIssues\\2200\\N2216.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2220", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220)],
        statics: {
            testHasElementType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2220, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestHasElementType()",
                    line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220.testHasElementType();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220",
                    file: "Batch3\\BridgeIssues\\2200\\N2220.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2221", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221)],
        statics: {
            testMakeArrayType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2221, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestMakeArrayType()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221.testMakeArrayType();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221",
                    file: "Batch3\\BridgeIssues\\2200\\N2221.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2222", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222)],
        statics: {
            testGetTypeWithNullArgument: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2222, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGetTypeWithNullArgument()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222.testGetTypeWithNullArgument();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222",
                    file: "Batch3\\BridgeIssues\\2200\\N2222.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2225", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225)],
        statics: {
            testVolatile: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2225, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestVolatile()",
                    line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225.testVolatile();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225",
                    file: "Batch3\\BridgeIssues\\2200\\N2225.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2243", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243)],
        statics: {
            testElementHiddenField: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2243, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestElementHiddenField()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243.testElementHiddenField();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243",
                    file: "Batch3\\BridgeIssues\\2200\\N2243.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2246", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246)],
        statics: {
            testEntryPoint: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2246, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestEntryPoint()",
                    line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246.testEntryPoint();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246",
                    file: "Batch3\\BridgeIssues\\2200\\N2246.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2249", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249)],
        statics: {
            testPropertyInitializerWithDirective: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2249, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPropertyInitializerWithDirective()",
                    line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249.testPropertyInitializerWithDirective();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249",
                    file: "Batch3\\BridgeIssues\\2200\\N2249.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2251", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251)],
        statics: {
            testListGetRange: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2251, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestListGetRange()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251.testListGetRange();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251",
                    file: "Batch3\\BridgeIssues\\2200\\N2251.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2278", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278)],
        statics: {
            testGenericInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2278, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestGenericInterface()",
                    line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278.testGenericInterface();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278",
                    file: "Batch3\\BridgeIssues\\2200\\N2278.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2279", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279)],
        statics: {
            testPropertyWithInitializerAndNestedClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2279, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPropertyWithInitializerAndNestedClass()",
                    line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279.testPropertyWithInitializerAndNestedClass();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279",
                    file: "Batch3\\BridgeIssues\\2200\\N2279.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge381", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge381)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge381).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge381, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge381.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge381",
                    file: "Batch3\\BridgeIssues\\0300\\N381.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447)],
        statics: {
            checkInlineExpression: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "CheckInlineExpression()",
                    line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.checkInlineExpression();
            },
            checkInlineCalls: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "CheckInlineCalls()",
                    line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.checkInlineCalls();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge447",
                    file: "Batch3\\BridgeIssues\\0400\\N447.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge472", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge472)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge472).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge472, 10, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "Test()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge472.test();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge472",
                    file: "Batch3\\BridgeIssues\\0400\\N472.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge479", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge479)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge479).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge479, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge479.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge479",
                    file: "Batch3\\BridgeIssues\\0400\\N479.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge483", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge483)],
        statics: {
            testPropertyWithNameSameAsType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge483).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge483, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestPropertyWithNameSameAsType()",
                    line: "10"
                } ));
                t.getFixture().testPropertyWithNameSameAsType();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge483",
                    file: "Batch3\\BridgeIssues\\0400\\N483.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge485", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge485)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge485).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge485, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge485.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge485",
                    file: "Batch3\\BridgeIssues\\0400\\N485.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge495", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge495)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge495).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge495, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge495.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge495",
                    file: "Batch3\\BridgeIssues\\0400\\N495.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge501", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge501)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge501).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge501, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge501.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge501",
                    file: "Batch3\\BridgeIssues\\0500\\N501.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge502", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge502)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge502).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge502, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge502.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge502",
                    file: "Batch3\\BridgeIssues\\0500\\N502.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge503", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge503)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge503).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge503, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge503.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge503",
                    file: "Batch3\\BridgeIssues\\0500\\N503.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge508", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge508)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge508).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge508, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge508",
                    file: "Batch3\\BridgeIssues\\0500\\N508.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge514.testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRelated()",
                    line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge514.testRelated();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge514",
                    file: "Batch3\\BridgeIssues\\0500\\N514.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge520", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge520)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge520).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge520, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "29"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge520.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge520",
                    file: "Batch3\\BridgeIssues\\0500\\N520.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522)],
        statics: {
            testUseCase1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase1()",
                    line: "42"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.testUseCase1();
            },
            testUseCase2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase2()",
                    line: "54"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.testUseCase2();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge522",
                    file: "Batch3\\BridgeIssues\\0500\\N522.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge532", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge532)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge532).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge532, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge532.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge532",
                    file: "Batch3\\BridgeIssues\\0500\\N532.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge537", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge537)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge537).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge537, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge537.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge537",
                    file: "Batch3\\BridgeIssues\\0500\\N537A.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge538", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge538)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge538).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge538, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge538.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge538",
                    file: "Batch3\\BridgeIssues\\0500\\N538.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge544", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge544)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge544).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge544, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge544.testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge544).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge544, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRelated()",
                    line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge544.testRelated();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge544",
                    file: "Batch3\\BridgeIssues\\0500\\N544.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge546.testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRelated()",
                    line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge546.testRelated();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge546",
                    file: "Batch3\\BridgeIssues\\0500\\N546.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge548", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge548)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge548).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge548, 18, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge548.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge548",
                    file: "Batch3\\BridgeIssues\\0500\\N548.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge549", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge549)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge549).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge549, 153, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge549.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge549",
                    file: "Batch3\\BridgeIssues\\0500\\N549.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge550", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge550)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge550).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge550, 10, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge550",
                    file: "Batch3\\BridgeIssues\\0500\\N550.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge554", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge554)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge554).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge554, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge554.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge554",
                    file: "Batch3\\BridgeIssues\\0500\\N554.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge555", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge555)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge555).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge555, 15, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge555.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge555",
                    file: "Batch3\\BridgeIssues\\0500\\N555.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge558", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge558)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge558).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge558, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge558.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge558",
                    file: "Batch3\\BridgeIssues\\0500\\N558.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559)],
        statics: {
            testUseCase1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase1()",
                    line: "83"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.testUseCase1();
            },
            testUseCase2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase2()",
                    line: "91"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.testUseCase2();
            },
            testUseCase3: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase3()",
                    line: "99"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.testUseCase3();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge559",
                    file: "Batch3\\BridgeIssues\\0500\\N559.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563)],
        statics: {
            tesForeach: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TesForeach()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge563.tesForeach();
            },
            tesFor: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TesFor()",
                    line: "45"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge563.tesFor();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge563",
                    file: "Batch3\\BridgeIssues\\0500\\N563.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge566", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge566)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge566).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge566, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge566.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge566",
                    file: "Batch3\\BridgeIssues\\0500\\N566.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge572", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge572)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge572).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge572, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge572.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge572",
                    file: "Batch3\\BridgeIssues\\0500\\N572.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge577", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge577)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge577).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge577, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "32"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge577",
                    file: "Batch3\\BridgeIssues\\0500\\N577.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge578", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge578)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge578).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge578, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge578.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge578",
                    file: "Batch3\\BridgeIssues\\0500\\N578.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge580", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge580)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge580).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge580, 10, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge580.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge580",
                    file: "Batch3\\BridgeIssues\\0500\\N580.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582)],
        statics: {
            testAddTimeSpan: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAddTimeSpan()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.testAddTimeSpan();
            },
            testAddTicks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAddTicks()",
                    line: "26"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.testAddTicks();
            },
            testTicks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTicks()",
                    line: "40"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.testTicks();
            },
            testSubtractTimeSpan: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestSubtractTimeSpan()",
                    line: "57"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.testSubtractTimeSpan();
            },
            testTimeOfDay: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestTimeOfDay()",
                    line: "89"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.testTimeOfDay();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge582",
                    file: "Batch3\\BridgeIssues\\0500\\N582.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge583", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge583)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge583).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge583, 120, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge583.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge583",
                    file: "Batch3\\BridgeIssues\\0500\\N583.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge586", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge586)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge586).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge586, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "53"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge586.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge586",
                    file: "Batch3\\BridgeIssues\\0500\\N586.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588)],
        statics: {
            testUseCase1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase1()",
                    line: "76"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge588.testUseCase1();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge588",
                    file: "Batch3\\BridgeIssues\\0500\\N588.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588C", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C)],
        statics: {
            testUseCase2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588C, 9, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase2()",
                    line: "52"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.testUseCase2();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C",
                    file: "Batch3\\BridgeIssues\\0500\\N588.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge592", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge592)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge592).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge592, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge592.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge592",
                    file: "Batch3\\BridgeIssues\\0500\\N592.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge595", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge595)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge595).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge595, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "54"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge595.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge595",
                    file: "Batch3\\BridgeIssues\\0500\\N595.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge597", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge597)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge597).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge597, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge597.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge597",
                    file: "Batch3\\BridgeIssues\\0500\\N597.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "72"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge603.testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRelated()",
                    line: "82"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge603.testRelated();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge603",
                    file: "Batch3\\BridgeIssues\\0600\\N603.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge606", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge606)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge606).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge606, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "42"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge606.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge606",
                    file: "Batch3\\BridgeIssues\\0600\\N606.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge607", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge607)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge607).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge607, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge607.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge607",
                    file: "Batch3\\BridgeIssues\\0600\\N607.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge608", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge608)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge608).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge608, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge608.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge608",
                    file: "Batch3\\BridgeIssues\\0600\\N608.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge615", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge615)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge615).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge615, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge615.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge615",
                    file: "Batch3\\BridgeIssues\\0600\\N615.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge623", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge623)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge623).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge623, 8, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "57"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge623.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge623",
                    file: "Batch3\\BridgeIssues\\0600\\N623.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge625", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge625)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge625).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge625, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge625",
                    file: "Batch3\\BridgeIssues\\0600\\N625.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge634", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge634)],
        statics: {
            testUseCase2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge634).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge634, 21, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase2()",
                    line: "94"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge634.testUseCase2();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge634",
                    file: "Batch3\\BridgeIssues\\0600\\N634.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge635", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge635)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge635).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge635, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge635.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge635",
                    file: "Batch3\\BridgeIssues\\0600\\N635.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge637", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge637)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge637).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge637, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge637.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge637",
                    file: "Batch3\\BridgeIssues\\0600\\N637.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge647", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge647)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge647).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge647, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "29"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge647.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge647",
                    file: "Batch3\\BridgeIssues\\0600\\N647.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge648", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge648)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge648).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge648, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "26"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge648.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge648",
                    file: "Batch3\\BridgeIssues\\0600\\N648.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge652", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge652)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge652).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge652, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "62"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge652",
                    file: "Batch3\\BridgeIssues\\0600\\N652.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge655", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge655)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge655).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge655, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "34"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge655.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge655",
                    file: "Batch3\\BridgeIssues\\0600\\N655.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge658", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge658)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge658).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge658, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge658.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge658",
                    file: "Batch3\\BridgeIssues\\0600\\N658.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge660", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge660)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge660).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge660, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "63"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge660.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge660",
                    file: "Batch3\\BridgeIssues\\0600\\N660.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge661", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge661)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge661).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge661, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge661.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge661",
                    file: "Batch3\\BridgeIssues\\0600\\N661.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge664", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge664)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge664).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge664, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "42"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge664.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge664",
                    file: "Batch3\\BridgeIssues\\0600\\N664.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge666", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge666)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge666).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge666, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge666.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge666",
                    file: "Batch3\\BridgeIssues\\0600\\N666.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge671", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge671)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge671).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge671, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "39"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge671.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge671",
                    file: "Batch3\\BridgeIssues\\0600\\N671.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674)],
        statics: {
            testUndefinedToReferenceType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUndefinedToReferenceType()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge674.testUndefinedToReferenceType();
            },
            testUndefinedToValueType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUndefinedToValueType()",
                    line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge674.testUndefinedToValueType();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge674",
                    file: "Batch3\\BridgeIssues\\0600\\N674.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge675", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge675)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge675).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge675, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge675.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge675",
                    file: "Batch3\\BridgeIssues\\0600\\N675.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge687", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge687)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge687).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge687, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge687.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge687",
                    file: "Batch3\\BridgeIssues\\0600\\N687.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge689", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge689)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge689).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge689, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge689.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge689",
                    file: "Batch3\\BridgeIssues\\0600\\N689.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690)],
        statics: {
            testUseCaseForInstance: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCaseForInstance()",
                    line: "43"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge690.testUseCaseForInstance();
            },
            testUseCaseForStatic: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCaseForStatic()",
                    line: "54"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge690.testUseCaseForStatic();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge690",
                    file: "Batch3\\BridgeIssues\\0600\\N690.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge691", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge691)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge691).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge691, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge691.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge691",
                    file: "Batch3\\BridgeIssues\\0600\\N691.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge692", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge692)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge692).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge692, 8, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "89"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge692",
                    file: "Batch3\\BridgeIssues\\0600\\N692.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge693", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge693)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge693).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge693, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge693.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge693",
                    file: "Batch3\\BridgeIssues\\0600\\N693.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge694", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge694)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge694).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge694, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge694.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge694",
                    file: "Batch3\\BridgeIssues\\0600\\N694.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge696", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge696)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge696).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge696, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge696.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge696",
                    file: "Batch3\\BridgeIssues\\0600\\N696.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge699", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge699)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge699).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge699, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge699.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge699",
                    file: "Batch3\\BridgeIssues\\0600\\N699.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge706", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge706)],
        statics: {
            testFieldPropertyWithInitializer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge706).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge706, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestFieldPropertyWithInitializer()",
                    line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge706.testFieldPropertyWithInitializer();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge706",
                    file: "Batch3\\BridgeIssues\\0700\\N706.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge708", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge708)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge708).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge708, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge708.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge708",
                    file: "Batch3\\BridgeIssues\\0700\\N708.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge721", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge721)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge721).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge721, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge721",
                    file: "Batch3\\BridgeIssues\\0700\\N721.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge722", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge722)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge722).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge722, 9, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge722.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge722",
                    file: "Batch3\\BridgeIssues\\0700\\N722.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge726", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge726)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge726).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge726, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge726.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge726",
                    file: "Batch3\\BridgeIssues\\0700\\N726.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge732", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge732)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge732).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge732, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge732.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge732",
                    file: "Batch3\\BridgeIssues\\0700\\N732.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge733", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge733)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge733).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge733, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge733.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge733",
                    file: "Batch3\\BridgeIssues\\0700\\N733.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge743", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge743)],
        statics: {
            testInlineMethodsAsReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge743).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge743, 9, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInlineMethodsAsReference()",
                    line: "34"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge743.testInlineMethodsAsReference();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge743",
                    file: "Batch3\\BridgeIssues\\0700\\N743.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge751", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge751)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge751).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge751, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge751.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge751",
                    file: "Batch3\\BridgeIssues\\0700\\N751.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge758", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge758)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge758).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge758, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge758.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge758",
                    file: "Batch3\\BridgeIssues\\0700\\N758.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge760", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge760)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge760).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge760, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge760.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge760",
                    file: "Batch3\\BridgeIssues\\0700\\N760.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge762", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge762)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge762).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge762, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge762.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge762",
                    file: "Batch3\\BridgeIssues\\0700\\N762.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge772", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge772)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge772).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge772, 10, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge772.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge772",
                    file: "Batch3\\BridgeIssues\\0700\\N772.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge777", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge777)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge777).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge777, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "33"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge777.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge777",
                    file: "Batch3\\BridgeIssues\\0700\\N777.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge782", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge782)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge782).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge782, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge782.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge782",
                    file: "Batch3\\BridgeIssues\\0700\\N782.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge785", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge785)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge785).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge785, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge785",
                    file: "Batch3\\BridgeIssues\\0700\\N785.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge786", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge786)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge786).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge786, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge786.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge786",
                    file: "Batch3\\BridgeIssues\\0700\\N786.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge788", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge788)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge788).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge788, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge788.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge788",
                    file: "Batch3\\BridgeIssues\\0700\\N788.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge789", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge789)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge789).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge789, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge789.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge789",
                    file: "Batch3\\BridgeIssues\\0700\\N789.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge793", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge793)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge793).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge793, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge793.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge793",
                    file: "Batch3\\BridgeIssues\\0700\\N793.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "99"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge795.testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795, 16, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestRelated()",
                    line: "108"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge795.testRelated();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge795",
                    file: "Batch3\\BridgeIssues\\0700\\N795.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge796", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge796, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge796.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge796",
                    file: "Batch3\\BridgeIssues\\0700\\N796.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge815", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge815)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge815).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge815, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge815",
                    file: "Batch3\\BridgeIssues\\0800\\N815.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge816", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge816)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge816).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge816, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge816.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge816",
                    file: "Batch3\\BridgeIssues\\0800\\N816.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge817", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge817)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge817).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge817, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge817.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge817",
                    file: "Batch3\\BridgeIssues\\0800\\N817.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge818", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge818)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge818).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge818, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge818.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge818",
                    file: "Batch3\\BridgeIssues\\0800\\N818.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge821", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge821)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge821).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge821, 9, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge821.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge821",
                    file: "Batch3\\BridgeIssues\\0800\\N821.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge823", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge823)],
        statics: {
            getTicksReturnsCorrectValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge823).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge823, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "GetTicksReturnsCorrectValue()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge823.getTicksReturnsCorrectValue();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge823",
                    file: "Batch3\\BridgeIssues\\0800\\N823.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge826", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge826, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "55"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge826.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge826",
                    file: "Batch3\\BridgeIssues\\0800\\N826.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge830", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge830)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge830).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge830, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge830.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge830",
                    file: "Batch3\\BridgeIssues\\0800\\N830.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge835", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge835)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge835).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge835, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge835.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge835",
                    file: "Batch3\\BridgeIssues\\0800\\N835.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge841", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge841)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge841).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge841, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge841.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge841",
                    file: "Batch3\\BridgeIssues\\0800\\N841.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge844", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge844)],
        statics: {
            nullableAndSimpleDateTimeToStringEquals: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge844).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge844, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "NullableAndSimpleDateTimeToStringEquals()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge844.nullableAndSimpleDateTimeToStringEquals();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge844",
                    file: "Batch3\\BridgeIssues\\0800\\N844.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge849", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge849)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge849).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge849, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge849.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge849",
                    file: "Batch3\\BridgeIssues\\0800\\N849.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge857", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge857)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge857).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge857, 8, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge857.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge857",
                    file: "Batch3\\BridgeIssues\\0800\\N857.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge861", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge861)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge861).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge861, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge861.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge861",
                    file: "Batch3\\BridgeIssues\\0800\\N861.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge863", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge863)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge863).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge863, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge863.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge863",
                    file: "Batch3\\BridgeIssues\\0800\\N863.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge874", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge874)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge874).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge874, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge874.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge874",
                    file: "Batch3\\BridgeIssues\\0800\\N874.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge881", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge881)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge881).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge881, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge881.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge881",
                    file: "Batch3\\BridgeIssues\\0800\\N881.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge882", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge882)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge882).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge882, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "46"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge882.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge882",
                    file: "Batch3\\BridgeIssues\\0800\\N882.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge883", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge883)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge883).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge883, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge883.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge883",
                    file: "Batch3\\BridgeIssues\\0800\\N883.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.testUseCase();
            },
            testMakeEnumerable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889, 8, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestMakeEnumerable()",
                    line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.testMakeEnumerable();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge889",
                    file: "Batch3\\BridgeIssues\\0800\\N889.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge892", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge892)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge892).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge892, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge892.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge892",
                    file: "Batch3\\BridgeIssues\\0800\\N892.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge893", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893)],
        statics: {
            enumToStringWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge893, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "EnumToStringWorks()",
                    line: "24"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge893.enumToStringWorks();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge893",
                    file: "Batch3\\BridgeIssues\\0800\\N893.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898)],
        statics: {
            testDecimalConversion: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDecimalConversion()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge898.testDecimalConversion();
            },
            testDoubleConversion: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDoubleConversion()",
                    line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge898.testDoubleConversion();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge898",
                    file: "Batch3\\BridgeIssues\\0800\\N898.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge905", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge905)],
        statics: {
            dayOfWeekFixed: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge905).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge905, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "DayOfWeekFixed()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge905.dayOfWeekFixed();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge905",
                    file: "Batch3\\BridgeIssues\\0900\\N905.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906)],
        statics: {
            testIfAsyncMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIfAsyncMethod()",
                    line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.testIfAsyncMethod();
            },
            testIfElseAsyncMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIfElseAsyncMethod()",
                    line: "40"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.testIfElseAsyncMethod();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge906",
                    file: "Batch3\\BridgeIssues\\0900\\N906.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge907", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge907)],
        statics: {
            testStringSpitWithNullParameterFixed: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge907).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge907, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStringSpitWithNullParameterFixed()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge907.testStringSpitWithNullParameterFixed();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge907",
                    file: "Batch3\\BridgeIssues\\0900\\N907.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge912", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge912)],
        statics: {
            testAsyncMethodInBlock: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge912).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge912, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAsyncMethodInBlock()",
                    line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge912.testAsyncMethodInBlock();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge912",
                    file: "Batch3\\BridgeIssues\\0900\\N912.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge913", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge913)],
        statics: {
            testNullableDateTimeGreaterThanWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge913).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge913, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNullableDateTimeGreaterThanWorks()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge913.testNullableDateTimeGreaterThanWorks();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge913",
                    file: "Batch3\\BridgeIssues\\0900\\N913.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge918", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge918)],
        statics: {
            testDynamicAsyncResult: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge918).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge918, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDynamicAsyncResult()",
                    line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge918.testDynamicAsyncResult();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge918",
                    file: "Batch3\\BridgeIssues\\0900\\N918.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge922", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge922)],
        statics: {
            testLinqDecimal: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge922).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge922, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLinqDecimal()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge922.testLinqDecimal();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge922",
                    file: "Batch3\\BridgeIssues\\0900\\N922.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge928", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge928)],
        statics: {
            testAsyncMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge928).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge928, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAsyncMethod()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge928.testAsyncMethod();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge928",
                    file: "Batch3\\BridgeIssues\\0900\\N928.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge929", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge929)],
        statics: {
            testAsyncException: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge929).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge929, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAsyncException()",
                    line: "14"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge929.testAsyncException();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge929",
                    file: "Batch3\\BridgeIssues\\0900\\N929.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge930", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge930)],
        statics: {
            testAsyncException: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge930).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge930, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestAsyncException()",
                    line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge930.testAsyncException();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge930",
                    file: "Batch3\\BridgeIssues\\0900\\N930.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge933", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge933)],
        statics: {
            testBooleanInIfStatement: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge933).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge933, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestBooleanInIfStatement()",
                    line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge933.testBooleanInIfStatement();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge933",
                    file: "Batch3\\BridgeIssues\\0900\\N933.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge952", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge952)],
        statics: {
            testDoubleMinValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge952).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge952, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDoubleMinValue()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge952.testDoubleMinValue();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge952",
                    file: "Batch3\\BridgeIssues\\0900\\N952.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968)],
        statics: {
            testDecimalDoesNotParseIncorrectValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDecimalDoesNotParseIncorrectValue()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge968.testDecimalDoesNotParseIncorrectValue();
            },
            testDecimalParsesCorrectValues: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestDecimalParsesCorrectValues()",
                    line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge968.testDecimalParsesCorrectValues();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge968",
                    file: "Batch3\\BridgeIssues\\0900\\N968.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge975", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge975)],
        statics: {
            testCastToLongWorksForBigNumberInIE: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge975).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge975, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestCastToLongWorksForBigNumberInIE()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge975.testCastToLongWorksForBigNumberInIE();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge975",
                    file: "Batch3\\BridgeIssues\\0900\\N975.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989)],
        statics: {
            dateTimeToISOStringWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "DateTimeToISOStringWorks()",
                    line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge989.dateTimeToISOStringWorks();
            },
            dateToISOStringWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "DateToISOStringWorks()",
                    line: "26"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge989.dateToISOStringWorks();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge989",
                    file: "Batch3\\BridgeIssues\\0900\\N989.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge991", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991)],
        statics: {
            testMultiplyAssignment: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge991, 14, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestMultiplyAssignment()",
                    line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.testMultiplyAssignment();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge991",
                    file: "Batch3\\BridgeIssues\\0900\\N991.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997)],
        statics: {
            testConvertAllForIntList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConvertAllForIntList()",
                    line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge997.testConvertAllForIntList();
            },
            testConvertAllForNullConverter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestConvertAllForNullConverter()",
                    line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge997.testConvertAllForNullConverter();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge997",
                    file: "Batch3\\BridgeIssues\\0900\\N997.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999)],
        statics: {
            testNestedLambdasToLifting: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNestedLambdasToLifting()",
                    line: "14"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge999.testNestedLambdasToLifting();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge999",
                    file: "Batch3\\BridgeIssues\\0900\\N999.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999_1", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1)],
        statics: {
            testNestedLambdasToLiftingInForeach: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999_1, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestNestedLambdasToLiftingInForeach()",
                    line: "66"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1.testNestedLambdasToLiftingInForeach();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1",
                    file: "Batch3\\BridgeIssues\\0900\\N999.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122)],
        statics: {
            testClippingInDefaultOverflowMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestClippingInDefaultOverflowMode()",
                    line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.testClippingInDefaultOverflowMode();
            },
            testIntegerDivisionInDefaultMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIntegerDivisionInDefaultMode()",
                    line: "38"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.testIntegerDivisionInDefaultMode();
            },
            testInfinityCastDefaultOverflowMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 16, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInfinityCastDefaultOverflowMode()",
                    line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.testInfinityCastDefaultOverflowMode();
            },
            testInfinityCastWithNullable1DefaultOverflowMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 16, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInfinityCastWithNullable1DefaultOverflowMode()",
                    line: "104"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.testInfinityCastWithNullable1DefaultOverflowMode();
            },
            testInfinityCastWithNullable2DefaultOverflowMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 16, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInfinityCastWithNullable2DefaultOverflowMode()",
                    line: "152"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.testInfinityCastWithNullable2DefaultOverflowMode();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.N1122",
                    file: "Batch3\\BridgeIssues\\1100\\N1122.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues)],
        statics: {
            N169: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N169()",
                    line: "520"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N169();
            },
            N240: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N240()",
                    line: "533"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N240();
            },
            N264: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N264()",
                    line: "544"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N264();
            },
            N266: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N266()",
                    line: "555"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N266();
            },
            N272: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N272()",
                    line: "563"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N272();
            },
            N273: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N273()",
                    line: "573"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N273();
            },
            N277: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N277()",
                    line: "593"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N277();
            },
            N294: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N294()",
                    line: "600"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N294();
            },
            N304: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N304()",
                    line: "610"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N304();
            },
            N305: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N305()",
                    line: "624"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N305();
            },
            N306: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N306()",
                    line: "639"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N306();
            },
            N329: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N329()",
                    line: "655"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N329();
            },
            N335: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N335()",
                    line: "670"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N335();
            },
            N336: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N336()",
                    line: "678"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N336();
            },
            N337: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N337()",
                    line: "691"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N337();
            },
            N338: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N338()",
                    line: "706"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N338();
            },
            N339: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N339()",
                    line: "717"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N339();
            },
            N340: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N340()",
                    line: "727"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N340();
            },
            N341: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N341()",
                    line: "743"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N341();
            },
            N342: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N342()",
                    line: "786"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N342();
            },
            N349: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N349()",
                    line: "801"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N349();
            },
            N377: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N377()",
                    line: "817"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N377();
            },
            N383: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N383()",
                    line: "837"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N383();
            },
            N393: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N393()",
                    line: "858"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N393();
            },
            N395: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N395()",
                    line: "877"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N395();
            },
            N406: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N406()",
                    line: "902"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N406();
            },
            N407: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N407()",
                    line: "950"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N407();
            },
            N409: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N409()",
                    line: "970"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N409();
            },
            N410: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 50, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N410()",
                    line: "997"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N410();
            },
            N418: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N418()",
                    line: "1139"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N418();
            },
            N422: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N422()",
                    line: "1150"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N422();
            },
            N428: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N428()",
                    line: "1163"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N428();
            },
            N435: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N435()",
                    line: "1173"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N435();
            },
            N436: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N436()",
                    line: "1182"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N436();
            },
            N438: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N438()",
                    line: "1196"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N438();
            },
            N439: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N439()",
                    line: "1205"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N439();
            },
            N442: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N442()",
                    line: "1223"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N442();
            },
            N460: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N460()",
                    line: "1234"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N460();
            },
            N467: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N467()",
                    line: "1244"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N467();
            },
            N469: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N469()",
                    line: "1261"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N469();
            },
            N470: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 16, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N470()",
                    line: "1281"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N470();
            },
            N499: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "N499()",
                    line: "1348"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N499();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch3",
                    className: "Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues",
                    file: "Batch3\\BridgeIssues\\TestBridgeIssues.cs"
                } );
            }
            return this.context;
        }
    });
});
