; /* ...
    --- NOTE ---
        #Lapys:
            - Code standard built for all JavaScript versions.
            - Native features are validated, or internally shimmed otherwise.

    --- RULES ---
        #Lapys:
            - Private functions should not rely on the `arguments` object.
*/

/* Global > ... */
function LapysDevelopmentKit() { /* [private code] */ return '[' + LapysJS.version + "]: " + LapysJS.description }
var LapysJS = null;

/* [Lapys Development Kit] ... --- NOTE (Lapys) -> Library SDK (private interface) */
(function() {
    /* Polyfill */
    var Infinity = 1 / +0;
    var NaN = +0 / +0;

    /* Definition */
    LapysDevelopmentKit.prototype = {
        Components: {},

        Constants: {
            ArabicNumeralDigits: null,
            NativeFunctionObfuscatedSourceCode: null
        },

        Directives: {
            ANY: {}, // ->> Represents a non-unique value (though its value is distinct)
            CURRENT: null, // NOTE (Lapys) -> Represents a local dummy or temporary
            ERROR: {
                message: "",

                toString: function toString() { return LDKD.ERROR.message },
                valueOf: function valueOf() { return LDKD.ERROR.message }
            },
            GLOBAL: "undefined" == typeof(frames) ? ("undefined" == typeof(self) ? ("undefined" == typeof(window) ? ("undefined" == typeof(global) ? ("undefined" == typeof(globalThis) ? (function() { return this })() : globalThis) : global) : window) : self) : frames
        },

        Errors: {
            error: null,

            MISSING_REQUIRED_FEATURE: 0x1,
            MODIFIED_REQUIRED_FEATURE: 0x2
        },

        Functions: {
            functionToString: null,
            inspectFunction: null,
            integerToString: null,
            isFunction: null,
            isNativeFunction: null,
            isNull: null,
            isVoid: null,
            numberToInteger: null,
            numberTo32BitInteger: null,
            numberToString: null,
            stringAt: null,
            unsignedIntegerToString: null
        },

        Mathematics: {},

        Natives: {
            Error: null,
            Function$prototype$toString: null,
            Function$prototype$toString$call: null,
            String$prototype$charAt: null
        },

        Supports: {
            Element$defineProperty: false,
            Element$getOwnPropertyDescriptor: false,
            Error: false,
            Function: false,
            Object$create: false,
            Object$defineProperty: false,
            Object$getOwnPropertyDescriptor: false,
            Object$prototype$__defineGetter__: false,
            Object$prototype$__defineSetter__: false,
            Object$prototype$__lookupGetter__: false,
            Object$prototype$__lookupSetter__: false,
            Object$prototype$__proto__: false,
            String$prototype$charAt: false,
            "String$prototype[]": false
        }

        // {}["*"] ; {}["*"] = ...; < IE5
        // Object.__defineGetter__(...) ; Object.__defineSetter__(...)
        // Object.defineProperty(...)
        // Object.create(null)
        // __proto__
    };

    /* Shorthand */
    var LDK = LapysDevelopmentKit.prototype; {
        var LDKC = LDK.Constants;
        var LDKE = LDK.Errors;
        var LDKF = LDK.Functions;
        var LDKM = LDK.Mathematics;
        var LDKN = LDK.Natives;
        var LDKU = LDK.Components;
        var LDKS = LDK.Supports;
    }

    /* Modification --- REDACT (Lapys) */
    with (LDK) with (Directives) {
        /* Constants */
        Constants.ArabicNumeralDigits = {'0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'};
        Constants.NativeFunctionObfuscatedSourceCode = [
            /* ->> Prevent ambiguity between the subscript operator (`[]`) & `String.prototype.charAt` utility. */
            /* --> "[Command Line API]" */ {
                '0': '[', '1': 'C', '2': 'o', '3': 'm', '4': 'm', '5': 'a', '6': 'n', '7': 'd', '8': ' ', '9': 'L', "10": 'i', "11": 'n', "12": 'e', "13": ' ', "14": 'A', "15": 'P', "16": 'I', "17": ']',
                length: 18, toString: function toString() { return "[Command Line API]" }
            },

            /* --> "[native code]" */ {
                '0': '[', '1': 'n', '2': 'a', '3': 't', '4': 'i', '5': 'v', '6': 'e', '7': ' ', '8': 'c', '9': 'o', "10": 'd', "11": 'e', "12": ']',
                length: 13, toString: function toString() { return "[native code]" }
            }
        ];

        /* Errors */
        Errors.error = (function() {
            var Error;

            if (LDKS.Error) Error = LDKN.Error;
            else {
                Error = function Error(message, name) { this.message = message; this.name = name };
                Error.prototype = { message: null, name: "Error", toString: function toString() { return this.name + ": " + this.message } }
            }

            return function generateError(code, message) {
                var name = "Error";

                switch (code) {
                    case LDKE.MISSING_REQUIRED_FEATURE: message = LDKF.isVoid(message) ? "Native implementation is required" : message; name = "MissingFeatureError"; break;
                    case LDKE.MODIFIED_REQUIRED_FEATURE: message = LDKF.isVoid(message) ? "Native implementation is required" : message; name = "ModifiedFeatureError"
                }

                return LDKS.Error ? new Error('[' + name + ']' + (false == LDKF.isVoid(message) ? ": " + message : "")) : new Error(message, name)
            }
        })();

        /* Functions */
        Functions.functionToString = function functionToString(functionObject) {
            if (LDKN.Function$prototype$toString.call === LDKN.Function$prototype$toString$call) return LDKN.Function$prototype$toString.call(functionObject);
            if (LDKN.Function$prototype$toString$call === LDKN.Function$prototype$toString$call.call) return LDKN.Function$prototype$toString$call.call(LDKN.Function$prototype$toString, functionObject);

            throw new LKDE.error(0x0, "Unable to convert `Function` to `String`")
        };

        Functions.integerToString = function integerToString(number) { return (number < 0 ? '-' : "") + LDKF.unsignedIntegerToString(number * -(number < 0)) };
        Functions.isFunction = function isFunction(argument) { return "function" == typeof argument };

        LDKF.inspectFunction(GLOBAL, "Function").evaluate("Function", LDKF.functionToString)
        LDKF.inspectFunction(GLOBAL, "Function").onerror(function(code) {
            switch (code) {
                case LDKE.MISSING_REQUIRED_FEATURE: ...; break;
                case LDKE.MODIFIED_REQUIRED_FEATURE: ...; break;
                default: throw new LDKE.error(code, "...")
            }
        }).evaluate(...)

        Functions.inspectFunction = (function() {
            var evaluation = { evaluate: null, onerror: null };
            var eventQueue = { error: null };

            evaluation.evaluate = function evaluate() {};
            evaluation.onerror = function onerror(handler) { eventQueue.error = handler; return evaluation };

            return function inspectFunction(object, propertyIdentifier) {
                try {
                    LDKS.Object$getOwnPropertyDescriptor
                    LDKS.Object$prototype$__lookupGetter__
                    LDKS.Object$prototype$__lookupSetter__
                } catch (error) {}
                return evaluation
            }
        })();

        Functions.isNativeFunction = function isNativeFunction(object, propertyIdentifier, functionName, exposer) {
            var evaluation = false;
            var functionObject, functionSource;

            try {
                functionObject = object[propertyIdentifier];
                if (LDKF.isFunction(functionObject)) {
                    functionSource = null === exposer ? "" + functionObject : exposer(functionObject);

                    for (var iterator = LDKC.NativeFunctionObfuscatedSourceCode.length - 1; false == evaluation && ~iterator; --iterator) {
                        var functionObfuscatedSource = LDKC.NativeFunctionObfuscatedSourceCode[iterator].toString();

                        evaluation = null === functionName ? (
                            functionSource == "function() { " + functionObfuscatedSource + " }" ||
                            functionSource == "function() {\n    " + functionObfuscatedSource + "\n}" ||
                            functionSource == "\nfunction() {\n    " + functionObfuscatedSource + "\n}\n"
                            ||
                            functionSource == "function " + propertyIdentifier + "() { " + functionObfuscatedSource + " }" ||
                            functionSource == "function " + propertyIdentifier + "() {\n    " + functionObfuscatedSource + "\n}" ||
                            functionSource == "\nfunction " + propertyIdentifier + "() {\n    " + functionObfuscatedSource + "\n}\n"
                        ) : (
                            functionSource == "function " + functionName + "() { " + functionObfuscatedSource + " }" ||
                            functionSource == "function " + functionName + "() {\n    " + functionObfuscatedSource + "\n}" ||
                            functionSource == "\nfunction " + functionName + "() {\n    " + functionObfuscatedSource + "\n}\n"
                        )
                    }

                    if (false == evaluation && (LDKS.String$prototype$charAt || LDKS["String$prototype[]"])) {
                        for (var iterator = 0, length = functionSource.length; iterator != length; ++iterator) {
                            var character = LDKF.stringAt(functionSource, iterator);

                            "class {}"
                            "class <class-name> {}"

                            "<function-name>(){}"
                            "get <function-name>(){}"
                            "set <function-name>(<argument-name>){}"
                            "function(){}"
                            "function <function-name>(){}"

                            "*<function-name>(){}"
                            "function*(){}"
                            "function* <function-name>(){}"

                            "[<expression>](){}"

                            "<argument-name> => {}"
                            "<argument-name> => <expression>"
                            "(<argument-name>, ) => <expression>"
                            "(<argument-name>, ...) => <expression>"
                            "(<argument-name>, <argument-name>) => <expression>"
                        }
                    }
                }
            } catch (error) {}

            return evaluation
        };

        Functions.isNull = function isNull(argument) { return null === argument };
        Functions.isVoid = function isVoid(argument) { return undefined === argument };
        Functions.numberToInteger = function numberToInteger(number) {
            var counter = 1, integer = +0;

            while (counter < number) counter *= 2;
            for (; counter >= 1; counter /= 2) if (counter + integer <= number) integer += counter;

            return integer
        };

        Functions.numberTo32BitInteger = function numberTo32BitInteger(number) { return number | 0 };
        Functions.numberToString = function numberToString(number) {
            var characteristics = LDKF.numberToInteger(number), mantissa = number - characteristics;
            var string = LDKF.unsignedIntegerToString(characteristics);

            (mantissa < +0) && (mantissa = -mantissa);
            if (0.0 != mantissa) {
                var digit;
                var currentTrail = +0, recentTrail;

                string += '.';
                for (var count = 24; count; --count) {
                    mantissa *= 10.0;
                    recentTrail = currentTrail;

                    for (var iterator = 9.0; -1.0 != iterator; --iterator)
                    if (mantissa >= iterator && mantissa < iterator + 1) digit = LDKF.numberTo32BitInteger(iterator);

                    currentTrail = (+0 == digit) * (currentTrail + 1);
                    if (+0 == currentTrail) {
                        while (recentTrail--) string += '0';
                        if (+0 != digit) string += LDKC.ArabicNumeralDigits[digit]
                    }

                    mantissa -= digit
                }
            }

            return string
        };

        Functions.stringAt = function stringAt(string, index) {
            if (LDKS["String$prototype[]"]) return string[index];
            if (LDKN.String$prototype$charAt.call === LDKN.String$prototype$charAt$call) return LDKN.String$prototype$charAt.call(string, index);
            if (LDKN.String$prototype$charAt$call === LDKN.String$prototype$charAt$call.call) return LDKN.String$prototype$charAt$call.call(LDKN.String$prototype$charAt, string, index);

            throw new LKDE.error(0x0, "Unable to index character from `String`")
        };

        Functions.unsignedIntegerToString = function unsignedIntegerToString(number) {
            var string;

            if (+0 == number) string = '0';
            else {
                for (string = ""; number >= 1; number = LDKF.numberToInteger(number / 10))
                string = LDKC.ArabicNumeralDigits[number % 10] + string
            }

            return string
        };

        /* Supports */
        Supports.Error = LDKF.isNativeFunction(GLOBAL, "Error", "Error", null);
        Supports.Function = LDKF.isNativeFunction(GLOBAL, "Function", "Function", null);
        Supports.Function$prototype = LDKF.isNativeFunction(Function.prototype, "toString", "toString", null);
        Supports.Function$prototype = LDKF.isNativeFunction(Function.prototype.toString, "call", "call", null);
        Supports.Object$prototype$__proto__ = (function() {
            CURRENT = {__proto__: ANY};

            delete CURRENT["__proto__"];
            return ANY === CURRENT.__proto__
        })();
        Supports["String$prototype[]"] = '\0'[+0] === '\0';

        /* ... */
        (function() {
            if (
                "toString" in Function.prototype && (
                    "function" == typeof Function.prototype.toString && (
                        "" + Function.prototype.toString == "function toString() { [native code] }" ||
                        "" + Function.prototype.toString == "function toString() {\n    [native code]\n}" ||
                        "" + Function.prototype.toString == "\nfunction toString() {\n    [native code]\n}\n"
                    )
                )
            ) if (
                "call" in Function.prototype.toString && (
                    "function" == typeof Function.prototype.toString.call && (
                        "" + Function.prototype.toString.call == "function call() { [native code] }" ||
                        "" + Function.prototype.toString.call == "function call() {\n    [native code]\n}" ||
                        "" + Function.prototype.toString.call == "\nfunction call() {\n    [native code]\n}\n"
                    )
                )
            ) if ("function" == typeof Object && (
                Function.prototype.toString.call(Object) == "function Object() { [native code] }" ||
                Function.prototype.toString.call(Object) == "function Object() {\n    [native code]\n}" ||
                Function.prototype.toString.call(Object) == "\nfunction Object() {\n    [native code]\n}\n"
            )) {
                var HAS_CREATE_ELEMENT_METHOD = false;

                if (
                    "toString" in Object.prototype && (
                        "function" == typeof Object.prototype.toString && (
                            Function.prototype.toString.call(Object.prototype.toString) == "function toString() { [native code] }" ||
                            Function.prototype.toString.call(Object.prototype.toString) == "function toString() {\n    [native code]\n}" ||
                            Function.prototype.toString.call(Object.prototype.toString) == "\nfunction toString() {\n    [native code]\n}\n"
                        )
                    )
                ) if (
                    "call" in Object.prototype.toString && (
                        "function" == typeof Object.prototype.toString.call && (
                            Function.prototype.toString.call(Object.prototype.toString.call) == "function call() { [native code] }" ||
                            Function.prototype.toString.call(Object.prototype.toString.call) == "function call() {\n    [native code]\n}" ||
                            Function.prototype.toString.call(Object.prototype.toString.call) == "\nfunction call() {\n    [native code]\n}\n"
                        )
                    )
                ) {
                    if ("object" == typeof document && (
                        Object.prototype.toString.call(document) == "[object]" ||
                        Object.prototype.toString.call(document) == "[object Document]" ||
                        Object.prototype.toString.call(document) == "[object HTMLDocument]"
                    )) HAS_CREATE_ELEMENT_METHOD = "createElement" in document && (
                        "function" == typeof document.createElement && (
                            Function.prototype.toString.call(document.createElement) == "function createElement() { [native code] }" ||
                            Function.prototype.toString.call(document.createElement) == "function createElement() {\n    [native code]\n}" ||
                            Function.prototype.toString.call(document.createElement) == "\nfunction createElement() {\n    [native code]\n}\n"
                        )
                    )
                }

                Supports.Object$prototype$__defineGetter__ = "function" == typeof __defineGetter__ && (
                    Function.prototype.toString.call(__defineGetter__) == "function __defineGetter__() { [native code] }" ||
                    Function.prototype.toString.call(__defineGetter__) == "function __defineGetter__() {\n    [native code]\n}" ||
                    Function.prototype.toString.call(__defineGetter__) == "\nfunction __defineGetter__() {\n    [native code]\n}\n"
                );

                Supports.Object$prototype$__defineSetter__ = "function" == typeof __defineSetter__ && (
                    Function.prototype.toString.call(__defineSetter__) == "function __defineSetter__() { [native code] }" ||
                    Function.prototype.toString.call(__defineSetter__) == "function __defineSetter__() {\n    [native code]\n}" ||
                    Function.prototype.toString.call(__defineSetter__) == "\nfunction __defineSetter__() {\n    [native code]\n}\n"
                );

                Supports.Object$prototype$__lookupGetter__ = "function" == typeof __lookupGetter__ && (
                    Function.prototype.toString.call(__lookupGetter__) == "function __lookupGetter__() { [native code] }" ||
                    Function.prototype.toString.call(__lookupGetter__) == "function __lookupGetter__() {\n    [native code]\n}" ||
                    Function.prototype.toString.call(__lookupGetter__) == "\nfunction __lookupGetter__() {\n    [native code]\n}\n"
                );

                Supports.Object$prototype$__lookupSetter__ = "function" == typeof __lookupSetter__ && (
                    Function.prototype.toString.call(__lookupSetter__) == "function __lookupSetter__() { [native code] }" ||
                    Function.prototype.toString.call(__lookupSetter__) == "function __lookupSetter__() {\n    [native code]\n}" ||
                    Function.prototype.toString.call(__lookupSetter__) == "\nfunction __lookupSetter__() {\n    [native code]\n}\n"
                );

                "create" in Object && (
                    "function" == typeof Object.create && (
                        Function.prototype.toString.call(Object.create) == "function create() { [native code] }" ||
                        Function.prototype.toString.call(Object.create) == "function create() {\n    [native code]\n}" ||
                        Function.prototype.toString.call(Object.create) == "\nfunction create() {\n    [native code]\n}\n"
                    )
                ) && (function assertion() {
                    var count = +0;
                    for (var i in Object.create(null)) ++count;
                    Supports.Object$create = +0 == count
                })();

                "defineProperty" in Object && (
                    "function" == typeof Object.defineProperty && (
                        Function.prototype.toString.call(Object.defineProperty) == "function defineProperty() { [native code] }" ||
                        Function.prototype.toString.call(Object.defineProperty) == "function defineProperty() {\n    [native code]\n}" ||
                        Function.prototype.toString.call(Object.defineProperty) == "\nfunction defineProperty() {\n    [native code]\n}\n"
                    )
                ) && (function assertion() {
                    Supports.Element$defineProperty = true;
                    Supports.Object$defineProperty = true;

                    try { Object.defineProperty({}, "", {configurable: true, enumerable: true, value: undefined, writable: true}) }
                    catch (error) { Supports.Object$defineProperty = false }

                    if (HAS_CREATE_ELEMENT_METHOD) {
                        try {
                            Object.defineProperty(document.createElement('a'), "", {configurable: true, enumerable: true, value: undefined, writable: true}),
                            Object.defineProperty(document.createElement('a'), "", {configurable: true, enumerable: false, get: function() {}, set: function() {}})
                        } catch (error) { Supports.Element$defineProperty = false }
                    }
                })();

                "getOwnPropertyDescriptor" in Object && (
                    "function" == typeof Object.getOwnPropertyDescriptor && (
                        Function.prototype.toString.call(Object.getOwnPropertyDescriptor) == "function getOwnPropertyDescriptor() { [native code] }" ||
                        Function.prototype.toString.call(Object.getOwnPropertyDescriptor) == "function getOwnPropertyDescriptor() {\n    [native code]\n}" ||
                        Function.prototype.toString.call(Object.getOwnPropertyDescriptor) == "\nfunction getOwnPropertyDescriptor() {\n    [native code]\n}\n"
                    )
                ) && (function assertion() {
                    Supports.Element$getOwnPropertyDescriptor = true;
                    Supports.Object$getOwnPropertyDescriptor = true;

                    try { Object.getOwnPropertyDescriptor({}, "") }
                    catch (error) { Supports.Object$getOwnPropertyDescriptor = false }

                    if (HAS_CREATE_ELEMENT_METHOD) {
                        try { Object.getOwnPropertyDescriptor(document.createElement('a'), "") }
                        catch (error) { Supports.Element$getOwnPropertyDescriptor = false }
                    }
                })()
            }
        })()
    }
})();

/* [LapysJS] ... --- NOTE (Lapys) -> Library object (public interface) */
LapysJS = new (
    (function(prototype) {
        function LapysJS() {}

        LapysJS.prototype = prototype;
        delete prototype["constructor"];
        delete prototype["__proto__"];

        return LapysJS
    })({
        author: "",
        description: "",
        version: "",

        Components: {},
        __proto__: null
    })
);

/* Modification > ... */
with (LapysDevelopmentKit.prototype)
with (Directives) (function(LDKF, LDKM, LDKN) {

})(Functions, Mathematics, Natives);

/* ... */
var LDK = LapysDevelopmentKit.prototype; {
    var LDKC = LDK.Constants;
    var LDKE = LDK.Errors;
    var LDKF = LDK.Functions;
    var LDKM = LDK.Mathematics;
    var LDKN = LDK.Natives;
    var LDKU = LDK.Components;
    var LDKS = LDK.Supports;
}

/* Deletion */
LapysDevelopmentKit.prototype = null;
