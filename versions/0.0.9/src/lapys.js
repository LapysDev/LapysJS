/* [LapysJS] Main */
+void function LapysJSMain() {
    /* Global > ... */
    var ANY = {};
    var ERROR = {message: null, types: {"GENERIC_ERROR": 0x0, FEATURE_ERROR: 0x1}};
    var GLOBAL = "undefined" == typeof(self) ? ("undefined" == typeof(window) ? ("undefined" == typeof(global) ? (function() { return this })() : global) : window) : self;

    var Infinity = 1 / 0;
    var NaN = 0 / 0;
    var undefined = void 0;

    /* Flag > ... --- NOTE (Lapys) -> Throw-away variables for readability (in function invocation arguments). */
    var FLAG;

    /* Namespace > Lapys (Development Kit, JavaScript) */
    var LapysDevelopmentKit = {
        Functions: {
            isFunction: null,
            object: {
                getPropertyValue: null
            },
            requireNativeConstructor: null,
            serve: null
        },
        Objects: {
            xmlHttpRequest: null
        }
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
        version: "0.0.10"
    };

    /* Shorthand */
    var Components = LapysJS.Components;
    var LDK = LapysDevelopmentKit;
    var LDKF = LapysDevelopmentKit.Functions;
    var LDKO = LapysDevelopmentKit.Objects;

    /* Modification > Lapys Development Kit */
        /* Functions */
            // Is Function
            // Is String
            LapysDevelopmentKit.Functions.isString = function isString(object) { return typeof object == "string" };

            // Require Native Constructor --- CHECKPOINT (Lapys)
            LapysDevelopmentKit.Functions.requireNativeConstructor = function requireNativeConstructor(object, identifier) {
                var evaluation = LDKF.object.getPropertyValue(object, identifier);
                return LDKF.isFunction(evaluation) && LDKF.function. && ? evaluation : ERROR
            };

            // Serve --- CHECKPOINT (Lapys)
            LapysDevelopmentKit.Functions.serve = function serve() {
                // Logic
                if (LDKA.hasXMLHttpRequestConstructor()) {}
                else if (LDKA.hasFetchConstructor()) {}
                else {}
            };

            // Throw Error
            LapysDevelopmentKit.Functions.throwError = function throwError(message, ERROR_TYPE) {
                // Logic > ... > Modification > Error > Message
                if (message) {
                    switch (ERROR_TYPE || GENERIC_ERROR) {
                        case FEATURE_ERROR: message = "[Feature Error]: "  + message;
                        default: message = "[Error]: " + message
                    }

                    ERROR.message = message
                } else ERROR.message = null;

                // Error
                throw ERROR
            };

            // To String
            LapysDevelopmentKit.Functions.toString = function toString(object) { if (LDKF.isString(object)) return object; else { var evaluation = LDKO.string(object); return LDKF.isString(evaluation) ? evaluation : ERROR } };

        /* Objects */
            // String
            LapysDevelopmentKit.Objects.string = LDKF.requireNativeConstructor(GLOBAL, "String");

            // XML HTTP Request
            LapysDevelopmentKit.Objects.xmlHttpRequest = LDKF.requireNativeConstructor(GLOBAL, "XMLHttpRequest");

    /* ... */
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
    // Array.prototype.includes()
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
    // String.prototype.includes()
    // String.prototype.randomize()
    // String.prototype.toElement()
    // String.prototype.toHTML()
}();
