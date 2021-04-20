; /* ...
    --- NOTE ---
        #Lapys:
            - Code standard built for all JavaScript versions.
            - Native features are validated, or internally shimmed otherwise.
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
        Constants: {},
        Directives: {
            ANY: {}, // ->> Represents a non-unique value (though its value is distinct)
            CURRENT: null, // NOTE (Lapys) -> Represents a local dummy or temporary
            GLOBAL: "undefined" == typeof(frames) ? ("undefined" == typeof(self) ? ("undefined" == typeof(window) ? ("undefined" == typeof(global) ? ("undefined" == typeof(globalThis) ? (function() { return this })() : globalThis) : global) : window) : self) : frames
        },

        Errors: {
            error: null,

            MISSING_REQUIRED_FEATURE: 0x1,
            MODIFIED_REQUIRED_FEATURE: 0x2
        },

        Functions: {
            isNativeFunction: null
        },

        Mathematics: {},
        Natives: {},

        Supports: {
            Element$defineProperty: false,
            Error: false,
            Object$create: false,
            Object$defineProperty: false,
            Object$prototype$__defineGetter__: false,
            Object$prototype$__defineSetter__: false,
            Object$prototype$__proto__: false
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

    /* Modification */
    with (LDK) with (Directives) {
        /* Error */
        (function() {
            try {}
            catch (error) {}
        })();

        LDKF.isNativeFunction(GLOBAL, "Error", null)
        LDKF.isNativeFunction(GLOBAL, "Error", LDKN.Function$prototype$toString)

        Functions.isNativeFunction = function isNativeFunction(object, propertyIdentifier, asserter) {};

        try {
            Supports.Error = "function" == typeof Error && (
                "" + Error == "function Error() { [native code] }" ||
                "" + Error == "function Error() {\n    [native code]\n}" ||
                "" + Error == "\nfunction Error() {\n    [native code]\n}\n"
            )
        } catch (error) {}
        Errors.error = function generateError(code, message) {
            message = (arguments.length || 1) == 1 ? null : message;
            switch (code) {
                case LDKE.MISSING_REQUIRED_FEATURE: message = "[MissingFeatureError]" + ((arguments.length || 1) == 1 ? ": Native implementation is required" : message); break;
                case LDKE.MODIFIED_REQUIRED_FEATURE: message = "[ModifiedFeatureError]" + ((arguments.length || 1) == 1 ? ": Native implementation is required" : message); break;
                case 0x0: case -0x1: default: message = "[Error]"
            }

            return new Error
        };

        LDKE.MISSING_REQUIRED_FEATURE: 0x1
        LDKE.MODIFIED_REQUIRED_FEATURE: 0x2

        throw new LDKE.error()
        CURRENT = {__proto__: ANY};

        delete CURRENT["__proto__"];
        Supports.Object$p;rototype$__proto__ = ANY === CURRENT.__proto__;

        (function() {
            if ("function" == typeof Function && (
                "" + Function == "function Function() { [native code] }" ||
                "" + Function == "function Function() {\n    [native code]\n}" ||
                "" + Function == "\nfunction Function() {\n    [native code]\n}\n"
            )) if (
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
                            Object.defineProperty(document.createElement('a'), "", {configurable: true, enumerable: true, value: undefined, writable: true}) ||
                            Object.defineProperty(document.createElement('a'), "", {configurable: true, enumerable: false, get: function() {}, set: function() {}})
                        } catch (error) { Supports.Element$defineProperty = false }
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
