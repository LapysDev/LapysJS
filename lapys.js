; /* ...
    NOTE (Lapys) -> Used native features are shimmed.
    WARN (Lapys) -> All code must be universally supported in all standardized versions of JavaScript.
*/

/* Global >
    Lapys Development Kit
        --- NOTE (Lapys) -> Private interface.
        --- NOTE (Lapys) -> Can publicly communicate private data via its `prototype` property.
    Lapys JS --- NOTE (Lapys) -> Public interface.
*/
function LapysDevelopmentKit() { /* [private code] */ return '[' + LapysJS.version + "]: " + LapysJS.description }
var LapysJS;

/* ... */
void function() {
    /* Polyfill */
    var Infinity = 1 / +0;
    var NaN = +0 / +0;
    var undefined = void 0;

    /* Shorthand --- WARN (Lapys) -> Do not forget to hide this critical interface. */
    var LDK = (LapysDevelopmentKit.prototype = {
        Assertions: {},
        Constants: { // NOTE (Lapys) -> Defined on declaration.
            FunctionNativeSourceCodes: ["[Command Line API]", "[native code]"],
            JavaScriptLinefeeds: null,
            JavaScriptWhitespaces: null
        },
        Directives: {
            ANY: {}, // NOTE (Lapys) -> Represents a non-unique value; though its value is distinct.
            CURRENT: null, // NOTE (Lapys) -> Represents the current object synchronously interfacing with the library.
            ERROR: {message: ""},
            FLAG: null, // NOTE (Lapys) -> Identifies default arguments to functions; default parameters are not available in all JavaScript versions.
            GLOBAL: "undefined" == typeof(self) ? ("undefined" == typeof(window) ? ("undefined" == typeof(global) ? (function() { return this })() : global) : window) : self,
            STOP: false // NOTE (Lapys) -> Used to terminate certain procedures generally.
        },
        Errors: {error: null, SEMANTIC_ERROR: 0x1},
        Functions: {
            defineProperty: null,
            getPropertyDescriptor: null,
            hasProperty: null,
            isArray: null, isBigInt: null, isBoolean: null, isFunction: null, isNumber: null, isObject: null, isRegularExpression: null, isString: null, isSymbol: null,
            putProperty: null
        },
        Mathematics: {abs: null, acos: null, acosh: null, asin: null, asinh: null, atan: null, atan2: null, atanh: null, cbrt: null, ceil: null, clon: null, clz: null, cos: null, cosh: null, exp: null, floor: null, imul: null, log: null, max: null, min: null, pow: null, random: null, root: null, round: null, sign: null, sin: null, sinh: null, sqrt: null, tan: null, tanh: null, trunc: null},
        Natives: {
            Array: null,
            Function: null,
            Math__abs: null, Math__acos: null, Math__acosh: null, Math__asin: null, Math__asinh: null, Math__atan: null, Math__atan2: null, Math__atanh: null, Math__cbrt: null, Math__ceil: null, Math__clon: null, Math__clz: null, Math__cos: null, Math__cosh: null, Math__exp: null, Math__floor: null, Math__imul: null, Math__log: null, Math__max: null, Math__min: null, Math__pow: null, Math__random: null, Math__root: null, Math__round: null, Math__sign: null, Math__sin: null, Math__sinh: null, Math__sqrt: null, Math__tan: null, Math__tanh: null, Math__trunc: null,
            Object: null
        },
        UserInterface: {Accordion: null, Breadcrumb: null, Button: null, Carousel: null, Dropdown: null, DynamicText: null, DynamicTime: null, Hero: null, Image: null, Pagination: null, Picker: null, ProgressBar: null, Slider: null, Table: null, Toggle: null, Tooltip: null}
    });
    var LDKA = LDK.Assertions;
    var LDKC = LDK.Constants;
    var LDKF = LDK.Functions;
    var LDKM = LDK.Mathematics;
    var LDKN = LDK.Natives;
    var LDKU = LDK.UserInterface;

    var Components = LDKU;

    /* Modification > Lapys Development Kit > ... */
    with (LDK) { with (Directives) {
        /* Components --- CHECKPOINT (Lapys) */
        Components.Accordion = function Accordion() {};
        Components.Breadcrumb = function Breadcrumb() {};
        Components.Button = function Button() { /* NOTE (Lapys) -> Just for fun */ };
        Components.Carousel = function Carousel() {};
        Components.Dropdown = function Dropdown() {};
        Components.DynamicText = function DynamicText() {};
        Components.DynamicTime = function DynamicTime() {};
        Components.Hero = function Hero() {};
        Components.Image = function Image() { /* NOTE (Lapys) -> Responsive */ };
        Components.Pagination = function Pagination() {};
        Components.Picker = function Picker() { /* NOTE (Lapys) -> Like a Date picker */ };
        Components.ProgressBar = function ProgressBar() { /* NOTE (Lapys) -> May return <progress> if available */ };
        Components.Slider = function Slider() { /* NOTE (Lapys) -> May return <range> if available */ };
        Components.Table = function Table() {};
        Components.Toggle = function Toggle() { /* NOTE (Lapys) -> ON | OFF */ };
        Components.Tooltip = function Tooltip() {};

        /* Constants */
        Constants.JavaScriptLinefeeds = ['\u000A', '\u000D'];
        Constants.JavaScriptWhitespaces = ['\u0009', '\u000B', '\u000C', '\u0020'];

        /* Errors */
        Errors.error = function throwError(type, message) {
            // Logic > ... > Modification > Error > Message
            if (LDKF.isString(type)) ERROR.message = "[Error]: " + type;
            else with (Errors) switch (type) {
                case SEMANTIC_ERROR: ERROR.message = "[SemanticError]"; break;
                default: ERROR.message = "[Error]"; break
            } ERROR.message = ((arguments.length || 1) == 1 ? ERROR.message : ERROR.message + ": " + message) + '\0';

            // Error
            throw ERROR
        };

        /* Functions */
            // Define Property --- CHECKPOINT (Lapys) -> Returns boolean determining if it failed.
            Functions.defineProperty = function defineProperty() {};

            // Get Property Descriptor --- CHECKPOINT (Lapys)
            Functions.getPropertyDescriptor = function getPropertyDescriptor() {};

            // Has Property --- CHECKPOINT (Lapys)
            Functions.hasProperty = function hasProperty() {};

            // Is ...
            Functions.isArray = function isArray(argument) { /* CHECKPOINT (Lapys) */ };
            Functions.isBigInt = function isBigInt(argument) { return "bigint" == typeof(argument) };
            Functions.isBoolean = function isBoolean(argument) { return "boolean" == typeof(argument) };
            Functions.isFunction = function isFunction(argument) { return "function" == typeof(argument) || (/* CHECKPOINT (Lapys) */ false) };
            Functions.isNumber = function isNumber(argument) { return "number" == typeof(argument) };
            Functions.isObject = function isObject(argument) { return "object" == typeof(argument) };
            Functions.isRegularExpression = function isRegularExpression(argument) { /* CHECKPOINT (Lapys) */ };
            Functions.isString = function isString(argument) { return "string" == typeof(argument) };
            Functions.isSymbol = function isSymbol(argument) { return "symbol" == typeof(argument) };

            // Put Property --- NOTE (Lapys) -> Attempts to add a property onto an object. --- REDACT (Lapys)
            Functions.putProperty = function putProperty(object, identifier, descriptor) {
                if (false == Functions.defineProperty(object, identifier, descriptor))
                object[identifier] = "value" in descriptor ? descriptor.value : undefined
            };

        /* Mathematics --- CHECKPOINT (Lapys) */
        Mathematics.abs = function abs() {};
        Mathematics.acos = function acos() {};
        Mathematics.acosh = function acosh() {};
        Mathematics.asin = function asin() {};
        Mathematics.asinh = function asinh() {};
        Mathematics.atan = function atan() {};
        Mathematics.atan2 = function atan2() {};
        Mathematics.atanh = function atanh() {};
        Mathematics.cbrt = function cbrt() {};
        Mathematics.ceil = function ceil() {};
        Mathematics.clon = function clon() {};
        Mathematics.clz = function clz() {};
        Mathematics.cos = function cos() {};
        Mathematics.cosh = function cosh() {};
        Mathematics.exp = function exp() {};
        Mathematics.floor = function floor() {};
        Mathematics.imul = function imul() {};
        Mathematics.log = function log() {};
        Mathematics.max = function max() {};
        Mathematics.min = function min() {};
        Mathematics.pow = function pow() {};
        Mathematics.random = function random() {};
        Mathematics.root = function root() {};
        Mathematics.round = function round() {};
        Mathematics.sign = function sign() {};
        Mathematics.sin = function sin() {};
        Mathematics.sinh = function sinh() {};
        Mathematics.sqrt = function sqrt() {};
        Mathematics.tan = function tan() {};
        Mathematics.tanh = function tanh() {};
        Mathematics.trunc = function trunc() {}
    } }
}();

/* Update > (Lapys Development Kit, LapysJS) */
LapysJS = new ((function(prototype) { function LapysJS() {} LapysJS.prototype = prototype; return LapysJS })({
    author: "",
    description: "",
    version: "",

    Components: {
        Accordion: function Accordion() { return new LapysDevelopmentKit.prototype.UserInterface.Accordion(/* CHECKPOINT (Lapys) */) },
        Breadcrumb: function Breadcrumb() { return new LapysDevelopmentKit.prototype.UserInterface.Breadcrumb(/* CHECKPOINT (Lapys) */) },
        Button: function Button() { return new LapysDevelopmentKit.prototype.UserInterface.Button(/* CHECKPOINT (Lapys) */) },
        Carousel: function Carousel() { return new LapysDevelopmentKit.prototype.UserInterface.Carousel(/* CHECKPOINT (Lapys) */) },
        Dropdown: function Dropdown() { return new LapysDevelopmentKit.prototype.UserInterface.Dropdown(/* CHECKPOINT (Lapys) */) },
        DynamicText: function DynamicText() { return new LapysDevelopmentKit.prototype.UserInterface.DynamicText(/* CHECKPOINT (Lapys) */) },
        DynamicTime: function DynamicTime() { return new LapysDevelopmentKit.prototype.UserInterface.DynamicTime(/* CHECKPOINT (Lapys) */) },
        Hero: function Hero() { return new LapysDevelopmentKit.prototype.UserInterface.Hero(/* CHECKPOINT (Lapys) */) },
        Image: function Image() { return new LapysDevelopmentKit.prototype.UserInterface.Image(/* CHECKPOINT (Lapys) */) },
        Pagination: function Pagination() { return new LapysDevelopmentKit.prototype.UserInterface.Pagination(/* CHECKPOINT (Lapys) */) },
        Picker: function Picker() { return new LapysDevelopmentKit.prototype.UserInterface.Picker(/* CHECKPOINT (Lapys) */) },
        ProgressBar: function ProgressBar() { return new LapysDevelopmentKit.prototype.UserInterface.ProgressBar(/* CHECKPOINT (Lapys) */) },
        Slider: function Slider() { return new LapysDevelopmentKit.prototype.UserInterface.Slider(/* CHECKPOINT (Lapys) */) },
        Table: function Table() { return new LapysDevelopmentKit.prototype.UserInterface.Table(/* CHECKPOINT (Lapys) */) },
        Toggle: function Toggle() { return new LapysDevelopmentKit.prototype.UserInterface.Toggle(/* CHECKPOINT (Lapys) */) },
        Tooltip: function Tooltip() { return new LapysDevelopmentKit.prototype.UserInterface.Tooltip(/* CHECKPOINT (Lapys) */) }
    }
}));

/* Modification */ with (LapysDevelopmentKit.prototype) {
    /* ... */
    void function(GLOBAL, LDKF) {
        /* ... */
        LDKF.putProperty(GLOBAL, "abs", {value: function abs() {}});
        LDKF.putProperty(GLOBAL, "acos", {value: function acos() {}});
        LDKF.putProperty(GLOBAL, "acosh", {value: function acosh() {}});
        LDKF.putProperty(GLOBAL, "append", {value: function append() {}});
        LDKF.putProperty(GLOBAL, "array", {value: function array() {}});
        LDKF.putProperty(GLOBAL, "asin", {value: function asin() {}});
        LDKF.putProperty(GLOBAL, "asinh", {value: function asinh() {}});
        LDKF.putProperty(GLOBAL, "assert", {value: function assert() {}});
        LDKF.putProperty(GLOBAL, "atan", {value: function atan() {}});
        LDKF.putProperty(GLOBAL, "atan2", {value: function atan2() {}});
        LDKF.putProperty(GLOBAL, "atanh", {value: function atanh() {}});
        LDKF.putProperty(GLOBAL, "bool", {value: function bool() {}});
        LDKF.putProperty(GLOBAL, "cbrt", {value: function cbrt() {}});
        LDKF.putProperty(GLOBAL, "ceil", {value: function ceil() {}});
        LDKF.putProperty(GLOBAL, "check", {value: function check() {}});
        LDKF.putProperty(GLOBAL, "clon", {value: function clon() {}});
        LDKF.putProperty(GLOBAL, "clz", {value: function clz() {}});
        LDKF.putProperty(GLOBAL, "cos", {value: function cos() {}});
        LDKF.putProperty(GLOBAL, "cosh", {value: function cosh() {}});
        LDKF.putProperty(GLOBAL, "createAttribute", {value: function createAttribute() {}});
        LDKF.putProperty(GLOBAL, "createComment", {value: function createComment() {}});
        LDKF.putProperty(GLOBAL, "createDocument", {value: function createDocument() {}});
        LDKF.putProperty(GLOBAL, "createDocumentFragment", {value: function createDocumentFragment() {}});
        LDKF.putProperty(GLOBAL, "createDocumentType", {value: function createDocumentType() {}});
        LDKF.putProperty(GLOBAL, "createElement", {value: function createElement() {}});
        LDKF.putProperty(GLOBAL, "createEvent", {value: function createEvent() {}});
        LDKF.putProperty(GLOBAL, "createTextNode", {value: function createTextNode() {}});
        LDKF.putProperty(GLOBAL, "def", {value: function def() {}});
        LDKF.putProperty(GLOBAL, "emulate", {value: function emulate() { /* NOTE (Lapys) -> Fire an event */ }});
        LDKF.putProperty(GLOBAL, "error", {value: function error() {}});
        LDKF.putProperty(GLOBAL, "exp", {value: function exp() {}});
        LDKF.putProperty(GLOBAL, "floor", {value: function floor() {}});
        LDKF.putProperty(GLOBAL, "imul", {value: function imul() {}});
        LDKF.putProperty(GLOBAL, "info", {value: function info() {}});
        LDKF.putProperty(GLOBAL, "int", {value: function int() {}});
        LDKF.putProperty(GLOBAL, "interval", {value: function interval() {}});
        LDKF.putProperty(GLOBAL, "iterate", {value: function iterate() {}});
        LDKF.putProperty(GLOBAL, "log", {value: function log() { /* NOTE (Lapys) -> console || Math */ }});
        LDKF.putProperty(GLOBAL, "max", {value: function max() {}});
        LDKF.putProperty(GLOBAL, "min", {value: function min() {}});
        LDKF.putProperty(GLOBAL, "num", {value: function num() {}});
        LDKF.putProperty(GLOBAL, "obj", {value: function obj() {}});
        LDKF.putProperty(GLOBAL, "observe", {value: function observe() { /* NOTE (Lapys) -> Not available on non-sync */ }});
        LDKF.putProperty(GLOBAL, "onDOMReady", {value: function onDOMReady() {}});
        LDKF.putProperty(GLOBAL, "onDOMUpdated", {value: function onDOMUpdated() {}});
        LDKF.putProperty(GLOBAL, "onElementAdded", {value: function onElementAdded() {}});
        LDKF.putProperty(GLOBAL, "onElementCountChanged", {value: function onElementCountChanged() {}});
        LDKF.putProperty(GLOBAL, "onElementRemoved", {value: function onElementRemoved() {}});
        LDKF.putProperty(GLOBAL, "onElementUpdated", {value: function onElementUpdated() {}});
        LDKF.putProperty(GLOBAL, "onNodeAdded", {value: function onNodeAdded() {}});
        LDKF.putProperty(GLOBAL, "onNodeCountChanged", {value: function onNodeCountChanged() {}});
        LDKF.putProperty(GLOBAL, "onNodeRemoved", {value: function onNodeRemoved() {}});
        LDKF.putProperty(GLOBAL, "onNodeUpdated", {value: function onNodeUpdated() {}});
        LDKF.putProperty(GLOBAL, "point", {value: function point() { /* NOTE (Lapys) -> MouseEvent | PointerEvent */ }});
        LDKF.putProperty(GLOBAL, "pow", {value: function pow() {}});
        LDKF.putProperty(GLOBAL, "preload", {value: function preload() {}});
        LDKF.putProperty(GLOBAL, "randbool", {value: function randbool() {}});
        LDKF.putProperty(GLOBAL, "randint", {value: function randint() {}});
        LDKF.putProperty(GLOBAL, "random", {value: function random() {}});
        LDKF.putProperty(GLOBAL, "randstr", {value: function randstr() {}});
        LDKF.putProperty(GLOBAL, "range", {value: function range() {}});
        LDKF.putProperty(GLOBAL, "redirect", {value: function redirect() { /* NOTE (Lapys) -> Can also go back to previous page */ }});
        LDKF.putProperty(GLOBAL, "reload", {value: function reload() {}});
        LDKF.putProperty(GLOBAL, "remove", {value: function remove() {}});
        LDKF.putProperty(GLOBAL, "request", {value: function request() {}});
        LDKF.putProperty(GLOBAL, "root", {value: function root() {}});
        LDKF.putProperty(GLOBAL, "round", {value: function round() {}});
        LDKF.putProperty(GLOBAL, "sign", {value: function sign() {}});
        LDKF.putProperty(GLOBAL, "sin", {value: function sin() {}});
        LDKF.putProperty(GLOBAL, "sinh", {value: function sinh() {}});
        LDKF.putProperty(GLOBAL, "sqrt", {value: function sqrt() {}});
        LDKF.putProperty(GLOBAL, "step", {value: function step() {}});
        LDKF.putProperty(GLOBAL, "stop", {value: function stop() { /* NOTE (Lapys) -> waitforrepaint(), without context stop loading the page */ }});
        LDKF.putProperty(GLOBAL, "str", {value: function str() {}});
        LDKF.putProperty(GLOBAL, "sym", {value: function sym() {}});
        LDKF.putProperty(GLOBAL, "tan", {value: function tan() {}});
        LDKF.putProperty(GLOBAL, "tanh", {value: function tanh() {}});
        LDKF.putProperty(GLOBAL, "timeout", {value: function timeout() {}});
        LDKF.putProperty(GLOBAL, "trunc", {value: function trunc() {}});
        LDKF.putProperty(GLOBAL, "undef", {value: function undef() {}});
        LDKF.putProperty(GLOBAL, "unstop", {value: function unstop() {}});
        LDKF.putProperty(GLOBAL, "wait", {value: function wait() {}});
        LDKF.putProperty(GLOBAL, "waitforrepaint", {value: function waitforrepaint() {}});
        LDKF.putProperty(GLOBAL, "warn", {value: function warn() {}});
        LDKF.putProperty(GLOBAL, "write", {value: function write() {}});
        LDKF.putProperty(GLOBAL, "$a", {value: function $a() { /* NOTE (Lapys) -> All | Ancestor */ }});
        LDKF.putProperty(GLOBAL, "$c", {value: function $c() { /* NOTE (Lapys) -> Class */ }});
        LDKF.putProperty(GLOBAL, "$d", {value: function $d() { /* NOTE (Lapys) -> Descendant */ }});
        LDKF.putProperty(GLOBAL, "$i", {value: function $i() { /* NOTE (Lapys) -> ID */ }});
        LDKF.putProperty(GLOBAL, "$n", {value: function $n() { /* NOTE (Lapys) -> Next Sibling */ }});
        LDKF.putProperty(GLOBAL, "$p", {value: function $p() { /* NOTE (Lapys) -> Previous Sibling */ }});
        LDKF.putProperty(GLOBAL, "$t", {value: function $t() { /* NOTE (Lapys) -> Tag Name */ }});
        LDKF.putProperty(GLOBAL, "$$", {value: function $$() { /* NOTE (Lapys) -> Selector */ }})
    }(Directives.GLOBAL, Functions);

    /* Lapys Development Kit */
    LapysDevelopmentKit.prototype = {} // NOTE (Lapys) -> Hide the critical interface of the LDK.
}
