/* [LapysJS] Main */
+void function LapysJSMain() {
    /* Global > ... */
    var ANY = {};
    var ERROR = {message: null};
    var GLOBAL = "undefined" == typeof(self) ? ("undefined" == typeof(window) ? ("undefined" == typeof(global) ? (function() { return this })() : global) : window) : self;

    var Infinity = 1 / 0;
    var NaN = 0 / 0;
    var undefined = void 0;

    /* Flag > ... --- NOTE (Lapys) -> Throw-away variables for clarity in function arguments. */
    var ASSERTION;
    var FALLBACK;
    var FLAG;

    /* Namespace > Lapys (Development Kit, JavaScript) */
    var LapysDevelopmentKit = {
        Assertions: {},
        Constants: {
            FLAGS: {IS_VALID: {}}
        },
        Errors: {
            MESSAGES: {INVALID_BASE_CONSTRUCTOR: null},
            throwError: null
        },
        Functions: {
            isBigInteger: null, isBoolean: null, isFunction: null, isNull: null, isNumber: null, isObject: null, isString: null, isSymbol: null, isVoid: null
        },
        Information: {},
        Mathematics: {},
        Objects: {
            object: null, objectDefineProperty: null, objectPrototype: null,
        },
        Storage: {},
        Types: {}
    };
    var LapysJS = {
        author: "LapysDev",
        Components: {
            Accordion: function Accordion() {},
            Carousel: function Carousel() {},
            Dialog: function Dialog() {},
            Hero: function Hero() {},
            Image: function Image() {},
            Menu: function Menu() {},
            NavigationBar: function NavigationBar() {},
            Scrollbar: function Scrollbar() {},
            Table: function Table() {},
            TextReel: function TextReel() {},
            Time: function Time() {},
            Tooltip: function Tooltip() {}
        },
        phase: null, // NOTE (Lapys) -> Initiate, Reset, Terminate, Update
        ready: false, // NOTE (Lapys) -> State of the library.
        version: "0.0.9"
    };

    /* Shorthand */
    var Components = LapysJS.Components;

    var LDK = LapysDevelopmentKit;
    var LDKA = LapysDevelopmentKit.Assertions;
    var LDKC = LapysDevelopmentKit.Constants;
    var LDKE = LapysDevelopmentKit.Errors;
    var LDKF = LapysDevelopmentKit.Functions;
    var LDKI = LapysDevelopmentKit.Information;
    var LDKM = LapysDevelopmentKit.Mathematics;
    var LDKO = LapysDevelopmentKit.Objects;
    var LDKS = LapysDevelopmentKit.Storage;
    var LDKT = LapysDevelopmentKit.Types;

    /* Modification > Lapys Development Kit */
        /* Errors > ... */
        LapysDevelopmentKit.Errors.MESSAGES.INVALID_BASE_CONSTRUCTOR = "must be a valid base constructor";
        LapysDevelopmentKit.Errors.throwError = function throwError(message) { ERROR.message = message; throw ERROR };

        /* Functions */
            // Is ... --- REDACT (Lapys)
            LapysDevelopmentKit.Functions.isBigInteger = function isBigInteger(argument) { return "bigint" == typeof(argument) };
            LapysDevelopmentKit.Functions.isBoolean = function isBoolean(argument) { return "boolean" == typeof(argument) };
            LapysDevelopmentKit.Functions.isFunction = function isFunction(argument) { return "function" == typeof(argument) }; // CHECKPOINT (Lapys) -> Check support for Internet Explorer v5.
            LapysDevelopmentKit.Functions.isNull = function isNull(argument) { return null === argument };
            LapysDevelopmentKit.Functions.isNumber = function isNumber(argument) { return "number" == typeof(argument) };
            LapysDevelopmentKit.Functions.isObject = function isObject(argument) { return "object" == typeof(argument) };
            LapysDevelopmentKit.Functions.isString = function isString(argument) { return "string" == typeof(argument) };
            LapysDevelopmentKit.Functions.isSymbol = function isSymbol(argument) { return "symbol" == typeof(argument) };
            LapysDevelopmentKit.Functions.isVoid = function isVoid(argument) { return "undefined" == typeof(argument) }; // CHECKPOINT (Lapys) -> Check for `document.all` arguments.

            // Number > ...
            LapysDevelopmentKit.Functions.numberIsSafe = function numberIsSafe(number) { return number == number && number !== Infinity };

            // Object
                // Has Property Of Identifier
                LapysDevelopmentKit.Functions.objectHasPropertyOfIdentifier = function objectHasPropertyOfIdentifier(object, propertyIdentifier) { return propertyIdentifier in object };

                // Modify Property By Value --- NOTE (Lapys) -> Set properties of externally-defined objects (e.g.: the global object).
                LapysDevelopmentKit.Functions.objectModifyPropertyByValue = function objectModifyPropertyByValue(object, propertyIdentifier, propertyValue) { LDKO.objectDefineProperty(object, propertyIdentifier, {configurable: true, enumerable: true, value: propertyValue, writable: true}) };

                // Request Property By Identifier
                LapysDevelopmentKit.Functions.objectRequestPropertyValueByIdentifier = function objectRequestPropertyValueByIdentifier(object, propertyIdentifier, assertPropertyValue, fallbackPropertyValue) {
                    // Evaluation > (Evaluation, ...)
                    var assertion = false;
                    var evaluation;

                    // Logic
                    if (LDKF.objectHasPropertyOfIdentifier(object, propertyIdentifier)) {
                        // Update > (Assertion, Evaluation)
                        assertion = true;
                        // evaluation = ...; // CHECKPOINT (Lapys) -> Somehow access the property.

                        // Logic
                        if (false == LDKF.isNull(assertPropertyValue))
                        switch (assertPropertyValue) {
                            case LDKC.FLAGS.IS_VALID: {
                                // CHECKPOINT (Lapys) -> Check for if the property value is valid for its myriad of possible types.
                            } break;
                        }
                    }

                    // Logic > ...
                    if (false == assertion) ERROR === fallbackPropertyValue ? LDKF.throwError("The `" + LDKF.toString(propertyIdentifier) + "` property is required to be valid for the LapysJS library") : evaluation = fallbackPropertyValue;

                    // Return
                    return evaluation
                };

        /* Mathematics > ... */
        LapysDevelopmentKit.Mathematics.absolute = function absolute(number) { return number < 0 ? -number : number };
        LapysDevelopmentKit.Mathematics.truncate = function truncate(number) { return number - number % 1 };

        /* Objects */
            // Object
            LapysDevelopmentKit.Objects.object = (function() { try { if ("function" == typeof(Object)) return Object } catch (error) {} LDKE.throwError("`Object` " + LDKE.MESSAGES.INVALID_BASE_CONSTRUCTOR) })();
                // ...
                LapysDevelopmentKit.Objects.objectDefineProperty = LDKF.objectRequestPropertyValueByIdentifier(LDKO.object, "defineProperty", ASSERTION = LDKC.FLAGS.IS_VALID, FALLBACK = function defineProperty(object, propertyIdentifier, propertyDescriptor) {
                    // CHECKPOINT (Lapys) -> Fallback for the `Object.defineProperty` method.
                });
                LapysDevelopmentKit.Objects.objectPrototype = LDKO.object.prototype;

    /* Modification */
        /* Global */
            // Absolute
            LDKF.objectModifyPropertyByValue(GLOBAL, "abs", function abs(number) { return LDKF.isNumber(number) && LDKF.numberIsSafe(number) ? LDKM.absolute(number) : number });

    /* ... --- CHECKPOINT (Lapys) */
    GLOBAL.LDK = LapysDevelopmentKit;
    GLOBAL.LDKA = LapysDevelopmentKit.Assertions;
    GLOBAL.LDKC = LapysDevelopmentKit.Constants;
    GLOBAL.LDKE = LapysDevelopmentKit.Errors;
    GLOBAL.LDKF = LapysDevelopmentKit.Functions;
    GLOBAL.LDKI = LapysDevelopmentKit.Information;
    GLOBAL.LDKM = LapysDevelopmentKit.Mathematics;
    GLOBAL.LDKO = LapysDevelopmentKit.Objects;
    GLOBAL.LDKS = LapysDevelopmentKit.Storage;
    GLOBAL.LDKT = LapysDevelopmentKit.Types;
    GLOBAL.LapysJS = LapysJS;
    // function abs(number) {}
    // function array(aggregate) {}
    // function assert(expression) {}
    // function ceil(number) {}
    // function check(condition, fail, pass) {}
    // function cbrt(number) {}
    // function clear() {}
    // function floor(number) {}
    // function foreach(object) {}
    // function func(aggregate) {}
    // function exec(source) {}
    // function int(number) {}
    // function interval(handler, delay, immediate) {}
    // function iterate(array) {}
    // function load(url) {}
    // function max(numbers...) {}
    // function min(numbers...) {}
    // function notify(message) {}
    // function num(object) {}
    // function obj(object) {}
    // function observe(object) {}
    // function onAttributeAdded(element, callback) {}
    // function onAttributeChanged(element, callback) {}
    // function onAttributeCountChanged(element, callback) {}
    // function onAttributeRemoved(element, callback) {}
    // function onDOMNodeAdded(callback) {}
    // function onDOMNodeChanged(callback) {}
    // function onDOMNodeCountChanged(callback) {}
    // function onDOMNodeRemoved(callback) {}
    // function onDOMReady(callback) {}
    // function onElementAdded(element, callback) {}
    // function onElementChanged(element, callback) {}
    // function onElementCountChanged(element, callback) {}
    // function onElementRemoved(element, callback) {}
    // function post(url) {}
    // function pow(number) {}
    // function preload(url) {}
    // function randbool() {}
    // function random(range) {}
    // function randint(range) {}
    // function redirect(url) {}
    // function reload() {}
    // function root(number) {}
    // function round(number) {}
    // function serve(url) {}
    // function sqrt(number) {}
    // function stop() {}
    // function str(object) {}
    // function timeout(handler, delay, immediate) {}
    // function trunc(number) {}
    // function wait(condition, handler) {}
    // function $a(selector) {}
    // function $attr(selector) {}
    // function $c(selector) {}
    // function $d(selector) {}
    // function $i(selector) {}
    // function $n(selector) {}
    // function $p(selector) {}
    // function $t(selector) {}
    // function $$(selector) {}

    // application.audience
    // application.author
    // application.cache
    // application.charset
    // application.color
    // application.compatibility
    // application.copyright
    // application.description
    // application.favicon
    // application.features
    // application.formatDetection
    // application.fragment
    // application.language
    // application.meta --> Contains all these and more
    // application.openGraph
    // application.owner
    // application.pragma
    // application.name
    // application.robots
    // application.scripts
    // application.seo
    // application.stylesheets
    // application.url
    // application.viewport

    // Array.prototype.add()
    // Array.prototype.addToBack()
    // Array.prototype.addToFront()
    // Array.prototype.count()
    // Array.prototype.every()
    // Array.prototype.flatten()
    // Array.prototype.free()
    // Array.prototype.getRepeated()
    // Array.prototype.getUnique()
    // Array.prototype.has()
    // Array.prototype.remove()
    // Array.prototype.removeFromBack()
    // Array.prototype.removeFromFront()
    // Array.prototype.removeRepeat()
    // Array.prototype.removeRepeatFromBack()
    // Array.prototype.removeRepeatFromFront()
    // Array.prototype.removeRepeats()
    // Array.prototype.replace()
    // Array.prototype.replaceFromBack()
    // Array.prototype.replaceFromFront()
    // Array.prototype.replaceRepeat()
    // Array.prototype.replaceRepeatFromBack()
    // Array.prototype.replaceRepeatFromFront()
    // Array.prototype.replaceRepeats()
    // Array.prototype.resize()
    // Array.prototype.some()

    // Function.prototype.arity
    // Function.getBodySource()
    // Function.getHeadSource()
    // Function.getParameters()
    // Function.getParametersCount()
    // Function.getParametersSource()
    // Function.isArrow()
    // Function.isAsync()
    // Function.isDyadic()
    // Function.isGenerator()
    // Function.isAsyncGenerator()
    // Function.isMonoadic()
    // Function.isNiladic()
    // Function.isTriadic()
    // Function.isVariadic()
    // Function.prototype.toSource()

    // Object.clone()
    // Object.concat()
    // Object.def[Properties]()
    // Object.forEach()
    // Object.modify[Properties]()
    // Object.undef[Properties]()

    // String.prototype.capitalize()
    // String.prototype.count()
    // String.prototype.getAfter()
    // String.prototype.getAfterChar()
    // String.prototype.getAfterCharFromBack()
    // String.prototype.getAfterCharFromFront()
    // String.prototype.getAfterFromBack()
    // String.prototype.getAfterFromFront()
    // String.prototype.getBefore()
    // String.prototype.getBeforeChar()
    // String.prototype.getBeforeCharFromBack()
    // String.prototype.getBeforeCharFromFront()
    // String.prototype.getBeforeFromBack()
    // String.prototype.getBeforeFromFront()
    // String.prototype.has()
    // String.prototype.randomize()
    // String.prototype.toElement()
    // String.prototype.toHTML()
}();
